const Location = require("../models/location");

exports.getLocationList = async (req, res) => {
  try {
    const locations = await Location.findAll();
    res.json(locations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getLocationById = async (req, res) => {
  try {
    const location = await Location.findByPk(req.params.id);
    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }
    res.json(location);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.createLocation = async (req, res) => {
  try {
    const { site, building, floor, rack, rack_level } = req.body;
    const location = await Location.create({
      site,
      building,
      floor,
      rack,
      rack_level,
    });
    res.status(201).json(location);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateLocation = async (req, res) => {
  try {
    const { site, building, floor, rack, rack_level } = req.body;
    const location = await Location.findByPk(req.params.id);
    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }
    location.site = site || location.site;
    location.building = building || location.building;
    location.floor = floor || location.floor;
    location.rack = rack || location.rack;
    location.rack_level = rack_level || location.rack_level;
    await location.save();
    res.json(location);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteLocation = async (req, res) => {
  try {
    const idsToDelete = req.params.id;

    const location = await Location.findByPk(idsToDelete);

    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }

    await Location.destroy({
      where: {
        uuid: idsToDelete,
      },
    });

    res.json({ message: "Location deleted successfully" });
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


