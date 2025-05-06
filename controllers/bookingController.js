const Booking = require('../models/Booking');
const Activity = require('../models/Activity');
const { bookingValidation } = require('../validations/bookingValidation');

exports.bookActivity = async (req, res) => {
  try {
    const { error } = bookingValidation(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { activity_id } = req.body;
    const user_id = req.user.id;

    const activity = await Activity.getById(activity_id);
    if (!activity) {
      return res.status(404).json({ error: 'Activity not found' });
    }

    const bookingId = await Booking.create({ user_id, activity_id });
    res.status(201).json({ message: 'Activity booked successfully', bookingId });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const user_id = req.user.id;
    const bookings = await Booking.getByUserId(user_id);
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};