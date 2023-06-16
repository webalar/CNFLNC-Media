import mongoose from "mongoose";

const {Schema} = mongoose

const draftSchema = new Schema({
    title: String,
    imgUrl: String,
    videoUrl: String,
    date: Date,
},
{timestamps: true})

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    featuredImg: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    featuredVideo: {
        type: String,
        required: true,
    },
    drafts: [draftSchema],
},
{ timestamps: true })

module.exports =
    mongoose.models.Post || mongoose.model('Post', postSchema);