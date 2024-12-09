const mongoose = require("mongoose");
const blacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    require: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, 
    expires: "24h",
  },
});

module.exports = mongoose.model("BlacklistToken", blacklistTokenSchema);