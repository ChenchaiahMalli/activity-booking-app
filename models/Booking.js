const pool = require('../config/db');

class Booking {
  static async create({ user_id, activity_id }) {
    const [result] = await pool.query(
      'INSERT INTO bookings (user_id, activity_id) VALUES (?, ?)',
      [user_id, activity_id]
    );
    return result.insertId;
  }

  static async getByUserId(user_id) {
    const [rows] = await pool.query(
      `SELECT b.id as booking_id, a.* 
       FROM bookings b
       JOIN activities a ON b.activity_id = a.id
       WHERE b.user_id = ?`,
      [user_id]
    );
    return rows;
  }
}

module.exports = Booking;