# activity-booking-app

Backend API for MeetX Activity Booking App - Internship Assignment

# Basic Activity Booking App - Backend API

A REST API for booking activities built with Node.js, Express.js, and MySQL.

## Features

- User registration and login with JWT authentication
- List available activities
- Book activities (authenticated users only)
- View user's bookings

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user and get JWT token

### Activities

- `GET /api/activities` - Get all available activities

### Bookings (Requires Authentication)

- `POST /api/bookings` - Book an activity
- `GET /api/bookings/my-bookings` - Get user's bookings

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up MySQL database and update configuration in `config/db.js`
4. Run the server: `npm start`

## Environment Variables

Create a `.env` file in the root directory with the following variables:
