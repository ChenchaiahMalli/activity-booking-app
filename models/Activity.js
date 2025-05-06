const pool = require('../config/db');

class Activity {
  static async getAll() {
    const [rows] = await pool.query('SELECT * FROM activities');
    return rows;
  }

  static async getById(id) {
    const [rows] = await pool.query('SELECT * FROM activities WHERE id = ?', [id]);
    return rows[0];
  }

  static async seedInitialData() {
    const activities = [
      {
        title: 'Cricket Match',
        description: 'Weekend cricket match at local ground',
        location: 'City Sports Complex',
        date_time: '2023-06-15 16:00:00'
      },
      {
        title: 'Movie Night',
        description: 'Latest blockbuster movie screening',
        location: 'City Cinema Hall',
        date_time: '2023-06-16 19:30:00'
      },
      {
        title: 'Football Tournament',
        description: 'Local football tournament finals',
        location: 'University Stadium',
        date_time: '2023-06-18 15:00:00'
      }
    ];

    for (const activity of activities) {
      const [existing] = await pool.query(
        'SELECT * FROM activities WHERE title = ?',
        [activity.title]
      );
      if (existing.length === 0) {
        await pool.query(
          'INSERT INTO activities (title, description, location, date_time) VALUES (?, ?, ?, ?)',
          [activity.title, activity.description, activity.location, activity.date_time]
        );
      }
    }
  }
}

module.exports = Activity;