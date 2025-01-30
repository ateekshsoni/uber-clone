const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware.js");
const mapController = require("../controllers/map.controller.js");
const { query } = require("express-validator");
const mapService = require("../services/maps.service.js");

router.get(
  "/get-coordinates",
  query("address")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Address is required"),
  authMiddleware.authUser,
  mapController.getCoordinates
);

router.get(
  "/get-distance-time",
  query("origin").isLength({ min: 3 }),
  query("destination").isLength({ min: 3 }),
  authMiddleware.authUser,
  mapController.getDistanceTime
);

router.get(
  "/get-suggestions",
  authMiddleware.authUser,
  async (req, res) => {
    try {
      const { input } = req.query;
      if (!input) {
        return res.json([]);
      }
      const suggestions = await mapService.getAutoSuggestions(input);
      res.json(suggestions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Unable to fetch suggestions' });
    }
  }
);

module.exports = router;
