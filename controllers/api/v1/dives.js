const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const diveSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    site: {
        type: String,
        required: true
    },
    depth: {
        type: Number,
        required: true
    },
    divetime: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    tags: {
        type: Array,
        required: false
    },
    trial: {
        type: String,
        required: false
    },
    deco: {
        type: String,
        required: false
    }
}, {timestamps: true})

const Dive = mongoose.model('Dive', diveSchema)


const getAll = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "id": "1",
            "location": "Zeelandbrug"
        }
    });
}

const create = async (req, res) => {
    try {
        let dive = new Dive();
        dive.user_id = req.body.user_id;
        dive.number = req.body.number;
        dive.site = req.body.site;
        dive.depth = req.body.depth;
        dive.divetime = req.body.divetime;
        dive.date = Date.now();
        dive.tags = req.body.tags;
        dive.trial = req.body.trial;
        dive.deco = req.body.deco;
    
        let newDive = await dive.save();
        
        res.json({
            "status": "success",
            "data": {
                "dive": newDive
            }
        })

    } catch (error) {
        res.json({
            "status": "error",
            "message": error
        });
    }


}

module.exports = {
    getAll,
    create
};