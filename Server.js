const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
password: 'user',   
database: 'todo_db'

});

db.connect((err) => {
  if (err) {
    console.error(' Database connection failed:', err);
    return;
  }
  console.log(' Connected to MySQL database');
});


app.get('/', (req, res) => {
  res.send('Hello from server');
});

app.post('/add-item', (req, res) => {
  const { itemDescription } = req.body;

  if (!itemDescription) {
    return res.status(400).send('Item description is required');
  }

  const sql = 'INSERT INTO todoItems (itemDescription) VALUES (?)';

  db.query(sql, [itemDescription], (err, result) => {
    if (err) {
      console.error(' Error inserting item:', err);
      res.status(500).send('Database error');
    } else {
      res.send(' Todo saved');
    }
  });
});

app.listen(3000, () => {
  console.log(' Server running on http://localhost:3000');
});
