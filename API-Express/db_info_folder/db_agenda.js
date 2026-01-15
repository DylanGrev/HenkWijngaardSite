

module.exports = function(conn_db, req, res) {
    
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
};