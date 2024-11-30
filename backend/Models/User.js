import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
},

  email : {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  }

});

const userModel = mongoose.model('users',UserSchema);

export default userModel;