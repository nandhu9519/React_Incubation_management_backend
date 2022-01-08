const mongoose = require('mongoose')

const noteSchema = mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true
    },
    teamAndBackground: {
      type: String,
      required: true
    },
    companyAndProducts: {
      type: String,
      required: true
    },
    solutions: {
      type: String,
      required: true
    },
    prepositions: {
      type: String,
      required: true
    },
    incubType: {
      type: String,
      required: true
    },
      status:{
        type: String,
    
    },
      userId:{
        type: String,
      },
      bookingStat:{
        type: Boolean,
      },
      slotCode:{
        type: String,
      }
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Applications", noteSchema);

module.exports = Note;
