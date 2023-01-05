const Post = require("./posts.js");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  bio: {
    type: String,
    default: "",
  },
  password: String,
  token: String,
  following: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  reblerbs: [
    {
      //This is unnecessary. I can delete this.
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  avatar: {
    type: Buffer,
  },
});

//VIRTUAL
//Creates an array of all the posts made by this user.
userSchema.virtual(
  "virtualPosts",
  {
    ref: "Post",
    //Looks for the localField from this schema in the refSchema's foreighn Field
    localField: "_id",
    //Find the value indicated in the localfield (the user's _id)
    foreignField: "owner",
    //... on the foreign field. The post's author.
  },
  { toJSON: { virtuals: true } }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
