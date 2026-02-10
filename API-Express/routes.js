const personen = require('./personen.json');
const conn_db = require("./db_conn");
const multer  = require('multer');
const fs = require('fs');
const path = require('path');

const dbagenda = require("./db_info_folder/db_agenda");
const dbAgendaInsert = require("./db_info_folder/db_agenda_insert");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'temp-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
  }
})

const multerInstance = multer({ storage: storage })

console.log("conn_db loaded:", conn_db);

module.exports = function (app) {

  /**
   * @swagger
   * /1:
   *   get:
   *     summary: Test met een tekst
   *     description: Geeft een tekst met Hallo Wereld terug
   *     tags:
   *       - Test
   *     responses:
   *       200:
   *         description: Successfully retrieved info from root
   */
  app.get('/1', (req, res) => {
    res.send('Hallo Wereld!')
  });

  /**
   * @swagger
   * /personenTest:
   *   get:
   *     summary: Test met een JSON bestand
   *     description: Geeft een JSON met personen terug van de bestand personen.json
   *     tags:
   *       - Test
   *     responses:
   *       200:
   *         description: Successfully retrieved info from personen.json
   */
  app.get('/personenTest', (req, res) => {
    res.json(personen);
  });

  /**
   * @swagger
   * /agenda:
   *   get:
   *     summary: Test met database
   *     description: Geeft info uit de db
   *     tags:
   *       - Agenda DB
   *     responses:
   *       200:
   *         description: Successfully retrieved info from agenda database
   */
  app.get('/agenda', (req, res) => {
    console.log("dbTest route hit");
    console.log("conn_db in route:", conn_db);

    dbagenda(conn_db, req, res);
  });


/**
 * @swagger
 * agenda/upload:
 *   post:
 *     summary: Upload a file
 *     description: Upload a single file using multipart/form-data
 *     tags:
 *       - File Upload
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: The file to upload
 *     responses:
 *       200:
 *         description: File uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 filename:
 *                   type: string
 *       400:
 *         description: No file uploaded
 */
  app.post('/agenda/upload', multerInstance.single('logo'), (req, res) => {
    console.log("Upload route hit");
    console.log("req.file:", req.file);
    console.log("req.body:", req.body);
    
    // Pass conn_db, req, res, and fs to the insert function
    dbAgendaInsert(conn_db, req, res, fs, path);
  });

};