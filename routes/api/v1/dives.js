const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "id": "1",
            "location": "Zeelandbrug"
        }
    });
});

module.exports = router;