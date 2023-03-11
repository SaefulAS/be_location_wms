const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');


router.get('/location', locationController.getLocationList);
router.get('/location/:id', locationController.getLocationById);
router.post('/location', locationController.createLocation);
router.put('/location/:id', locationController.updateLocation);
router.delete('/location/:id', locationController.deleteLocation);

module.exports = router;