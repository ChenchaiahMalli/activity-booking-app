const pool = require('../config/db');
const bcrypt = require('bcryptjs');

class User {
  static async create({ name, email, phone_number, password }) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      'INSERT INTO users (name, email, phone_number, password) VALUES (?, ?, ?, ?)',
      [name, email, phone_number, hashedPassword]
    );
    return result.insertId;
  }

  static async findByEmail(email) {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
  }

  // Remove generateAuthToken from here since we're doing it in controller
}

module.exports = User;