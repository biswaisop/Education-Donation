import mongoose from 'mongoose';

const NGORequestSchema = new mongoose.Schema({
    ngoName: String,
    contactEmail: String,
    itemsNeeded: [String], // e.g., ['stationery', 'books', 'laptops']
    description: String,
    postedDate: { type: Date, default: Date.now },
});

export default mongoose.models.NGORequest || mongoose.model('NGORequest', NGORequestSchema);
