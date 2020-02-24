const mongoose = require('mongoose');
const AdvertModel = mongoose.model('Advert');
const ContactModel = mongoose.model('Contact');
const express = require('express');
const router = express.Router();
const ApartmentModel = require('../models/adverts/apartment');

const ADVERTS_KIND = {
    "Квартира": ApartmentModel
};

router.post('/advert', async (req, res) => {
    const contact = await ContactModel.create(req.body.contacts);
    const { advert } = req.body;
    advert.contacts = contact._id;
    const result = await ADVERTS_KIND[advert.category].create(advert);
    res.send(result).status(201);
});

module.exports = router;