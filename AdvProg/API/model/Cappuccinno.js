import mongoose from "mongoose";

const CappuccinoSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    size: {
        type: String,
        required:true
    },
    sugar_type: {
        type: String,
        required:true
    },
    cinnamon: {
        type: String,
        required:true
    }
}, { collection: 'userinfo' });

export default mongoose.model('Cappuccino', CappuccinoSchema);