module.exports = function(conn_db, req, res, fs, path) {

    const { evenement, datum, tijd, info } = req.body;
    const tempFilename = req.file.filename;
    const fileExtension = path.extname(req.file.filename);
    
    // Insert with temporary filename first
    let sql = "INSERT INTO agenda_henk (evenement, datum, tijd, info, img) VALUES (?, ?, ?, ?, ?)";
    
    conn_db.query(sql, [evenement, datum, tijd, info, tempFilename], function (err, result) {
      if (err) {
        console.error("Database error:", err);
        // Clean up uploaded file if database fails
        fs.unlinkSync(`./uploads/${tempFilename}`);
        res.status(500).json({ error: err.message });
        return;
      }
      
      const insertedId = result.insertId;
      console.log("Inserted ID:", insertedId);
      
      // Create new filename with database ID
      const baseFilename = req.file.fieldname + '-' + Date.now();
      const newFilename = `${baseFilename}.ID=${insertedId}${fileExtension}`;
      
      // Rename the file
      const oldPath = `./uploads/${tempFilename}`;
      const newPath = `./uploads/${newFilename}`;
      
      try {
        fs.renameSync(oldPath, newPath);
        console.log("File renamed to:", newFilename);
        
        // Update database with new filename
        let updateSql = "UPDATE agenda_henk SET img = ? WHERE id = ?";
        conn_db.query(updateSql, [newFilename, insertedId], function (err, updateResult) {
          if (err) {
            console.error("Update error:", err);
            res.status(500).json({ error: err.message });
            return;
          }
          
          // Return the newly created record
          let selectSql = "SELECT * FROM agenda_henk WHERE id = ?";
          conn_db.query(selectSql, [insertedId], function (err, rows) {
            if (err) {
              console.error("Select error:", err);
              res.status(500).json({ error: err.message });
            } else {
              res.json({
                message: "Upload successful",
                data: rows[0],
                filename: newFilename
              });
              console.log("Database operations successful!");
            }
          });
        });
        
      } catch (renameErr) {
        console.error("File rename error:", renameErr);
        res.status(500).json({ error: "Failed to rename file" });
      }
    }); 
};