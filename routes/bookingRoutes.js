const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// GET all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create booking
router.post("/", async (req, res) => {
  const { name, email, event, ticketType } = req.body;

  if (!name || !email || !event) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  try {
    const booking = new Booking({ name, email, event, ticketType });
    const saved = await booking.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET by ID
router.get("/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Not found" });
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT update
router.put("/:id", async (req, res) => {
  try {
    const updated = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// SEARCH by email
router.get("/search/email", async (req, res) => {
  try {
    const bookings = await Booking.find({ email: req.query.email });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// FILTER by event
router.get("/filter/event", async (req, res) => {
  try {
    const bookings = await Booking.find({ event: req.query.event });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;