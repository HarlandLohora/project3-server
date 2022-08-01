const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      // unique: true -> Ideally, should be unique, but its up to you
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 8,
    },
    pais: String,
    email: String,
    fullName: String,
    url: {
      type: String,
      default:
        "https://www.notebookcheck.info/fileadmin/Notebooks/News/_nc3/2DD297B4_9BA0_4828_A4A2_149A8A73AF52.png",
    },
    campaings: [{ type: Schema.Types.ObjectId, ref: "Campaings" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comments" }],
    properties: [{ type: Schema.Types.ObjectId, ref: "Properties" }],
    fav: [{ type: Schema.Types.ObjectId, ref: "Fav" }],
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
