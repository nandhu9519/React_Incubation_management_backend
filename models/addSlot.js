const mongoose = require('mongoose')

const addSlotSchema = mongoose.Schema(
  {
    slotId: {
      type: String,
      required:true
    },
    appId :{
      type:String,
    },
    userId :{
      type:String,
    },
    status :{
      type:Boolean,
    },
  },
);

const SlotInfo = mongoose.model("SlotInfo", addSlotSchema);

module.exports = SlotInfo;
