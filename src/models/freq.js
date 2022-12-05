import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let freq = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    items: {
        type: [
            [
                {
                    type: String,
                },
            ],
        ],
        required: true,
    },
});

mongoose.models = {};

let Freq = mongoose.model('freqItem', freq);

export default Freq;
