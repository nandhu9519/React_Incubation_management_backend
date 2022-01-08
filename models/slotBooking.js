const mongoose = require('mongoose')

const SlotSchema = mongoose.Schema(
  {
    slotId: {
      type: String,
      required: true,
    },
    appId: {
        type: String,
        required: true,
      },
      userId:{
        type: String,
        required:true
      },
      slotStatus:{
        type: Boolean
      },
  },
);

const Slot = mongoose.model("Slots", SlotSchema);

module.exports = Slot;
