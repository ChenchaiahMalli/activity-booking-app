const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const bookingController = require('../controllers/bookingController');

router.post('/', auth, bookingController.bookActivity);
router.get('/my-bookings', auth, bookingController.getUserBookings);

module.exports = router;