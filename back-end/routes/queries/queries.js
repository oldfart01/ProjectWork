import express from "express";
import fs from 'fs';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const jsonString = fs.readFileSync('queries.json', 'utf8');
        const queryArray = JSON.parse(jsonString);
        res.json(queryArray);
    } catch (err) {
        res.status(500).send('Failed to retrieve query array');
    }
});


router.post('/', async (req, res) => {
    try {
        const { queryArray } = req.body; // Assuming the queryArray is sent in the request body
        const jsonString = JSON.stringify(queryArray);
        fs.writeFileSync('queries.json', jsonString);
        res.status(200).send('Query array saved');
    } catch (err) {
        res.status(500).send('Failed to save query array');
    }
});


export default router;

