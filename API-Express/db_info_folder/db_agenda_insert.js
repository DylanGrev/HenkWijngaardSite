module.exports = function(conn_db, app) {
  app.post('/agenda/insert', (req, res) => {
    const { evenement, datum, tijd, info } = req.body;
    
    let sql = "INSERT INTO agenda_henk (evenement, datum, tijd, info) VALUES (?, ?, ?, ?)";
    
    conn_db.query(sql, [evenement, datum, tijd, info], function (err, result) {
      if (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: err.message });
      } else {
        let sql = "SELECT * FROM agenda_henk";
        conn_db.query(sql, function (err, rows) {
          if (err) {
            console.error("Database error:", err);
            res.status(500).json({ error: err.message });
          } else {
            res.json(rows);
            console.log("Database query successful!");
          }
        });
      }
    }); 
  });
};