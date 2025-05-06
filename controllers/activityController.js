const Activity = require('../models/Activity');

exports.getAllActivities = async (req, res) => {
  try {
    // Seed initial data if empty
    await Activity.seedInitialData();
    
    const activities = await Activity.getAll();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};