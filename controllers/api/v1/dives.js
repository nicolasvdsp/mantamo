const express = require('express');


const getAll = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "id": "1",
            "location": "Zeelandbrug"
        }
    });
}

module.exports = {
    getAll
};