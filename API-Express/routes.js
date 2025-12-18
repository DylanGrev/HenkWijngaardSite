module.exports = function (app) {

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get welcome message
 *     description: Returns a simple greeting message in Dutch
 *     tags:
 *       - tagg
 *     responses:
 *       200:
 *         description: Successfully retrieved welcome message
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *               example: Hallo Wereld!
 */
app.get('/', (req, res) => {
    res.send('Hallo Wereld!')
});

}
