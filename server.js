const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


// ================= DATABASE CONNECTION =================
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Alfiya@17",   // your password
  database: "ayurveda_db"
});

db.connect((err) => {
  if (err) {
    console.log("❌ DB Error:", err);
  } else {
    console.log("✅ MySQL Connected");
  }
});


// ================= CONTACT API =================
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  const sql = "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err) => {
    if (err) {
      console.log(err);
      return res.send("Error saving message");
    }
    res.send("Message saved successfully ✅");
  });
});


// ================= SIGNUP API =================
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.send("All fields are required");
  }

  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, password], (err) => {
    if (err) {
      console.log(err);
      return res.send("User already exists");
    }
    res.send("Signup successful ✅");
  });
});


// ================= LOGIN API =================
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email=? AND password=?";

  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.log(err);
      return res.send({ success: false });
    }

    if (result.length > 0) {
      res.send({ success: true });
    } else {
      res.send({ success: false });
    }
  });
});


// // ================= CART API =================
app.post("/cart", (req, res) => {
  const { product_name, price } = req.body;

  const sql = "INSERT INTO cart (product_name, price) VALUES (?, ?)";

  db.query(sql, [product_name, price], (err) => {
    if (err) {
      console.log(err);
      return res.send("Error adding to cart");
    }
    res.send("Product added to cart ✅");
  });
});


// ================= OPTIONAL: GET CART =================
app.get("/cart", (req, res) => {
  const sql = "SELECT * FROM cart";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Error fetching cart");
    }
    res.send(result);
  });
});


app.post("/order", (req, res) => {
  const { product_name, price } = req.body;

  const sql = "INSERT INTO orders (product_name, price) VALUES (?, ?)";

  db.query(sql, [product_name, price], (err) => {
    if (err) {
      console.log(err);
      return res.send("Order failed ❌");
    }
    res.send("Order placed successfully ✅");
  });
});

// ================= SERVER START =================
app.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});