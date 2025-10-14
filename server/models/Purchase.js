import mongoose from "mongoose";

const PurchaseSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        reuired: true
    },

    UserId: {
        type: String,
        ref: 'User',
        reuired: true
    },

    amount: { type: Number, reuired: true },
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' }
}, { timestamps: true })

export const Purchase = mongoose.model('Purchase', PurchaseSchema)