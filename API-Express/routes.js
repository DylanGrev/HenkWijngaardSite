const personen = require('./personen.json');
const conn_db = require("./db_conn");

const dbagenda = require("./db_info_folder/db_agenda");
const dbAgendaInsert = require("./db_info_folder/db_agenda_insert");

console.log("conn_db loaded:", conn_db); // Debug line

module.exports = function (app) {

  /**
   * @swagger
   * /:
   *   get:
   *     summary: Test met een tekst
   *     description: Geeft een tekst met Hallo Wereld terug
   *     tags:
   *       - Test
   *     responses:
   *       200:
   *         description: Successfully retrieved info from root
   */
  app.get('/', (req, res) => {
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
   *     description: Geeft een JSON met personen terug van de database
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
 * /agenda/insert:
 *   get:
 *     summary: Insert test data into database
 *     description: Inserts test data into the agenda_henk table
 *     tags:
 *       - Agenda DB
 *     responses:
 *       200:
 *         description: Successfully inserted test data into agenda_henk
 */
app.post('/agenda/insert', (req, res) => {

    dbAgendaInsert(conn_db, req, res);

});

};