const User = require("./user");
const mongoose = require("mongoose");
const Reblerb = require("./reblerbs");
const { schema } = require("./reblerbs");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    text: String,
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    isReblerb: Boolean,
    reblerbOf: {
      type: Schema.Types.ObjectId,
      ref: Reblerb,
    },
    totalLikes: {
      type: Number,
      default: 0,
    },
    totalReblerbs: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("post", postSchema);

module.exports = Post;
