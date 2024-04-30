import fs from 'fs';
import express from "express";
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


router.post('/',  (req, res) => {
    const { queryArray } = req.body; // Assuming the queryArray is sent in the request body
    const jsonString = JSON.stringify(queryArray, null, 2);
    try {
       // const { queryArray } = req.body; // Assuming the queryArray is sent in the request body
        //const jsonString = JSON.stringify(queryArray);
        fs.writeFileSync('queries.json', jsonString);
        console.log('query array saved to queries.json');
        res.status(200).send('Query array saved');
    } catch (err) {
        res.status(500).send('Failed to save query array');
    }
});


export default router;

