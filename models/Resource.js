import mongoose from 'mongoose';

const ResourceSchema = new mongoose.Schema({
    title: String,
    type: { type: String, enum: ['ebook', 'video', 'worksheet'] },
    subject: String,
    grade: String,
    link: String,
    description: String,
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.models.Resource || mongoose.model('Resource', ResourceSchema);
