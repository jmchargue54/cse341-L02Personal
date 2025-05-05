const express = require('express');
const professionalController = require('../controllers/contacts');
const router = express.Router();

router.get('/', professionalController.getAllContacts);
router.get('/:id', professionalController.getSingleContact);
module.exports = router;