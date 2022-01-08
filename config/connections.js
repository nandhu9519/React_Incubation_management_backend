const mongoos = require("mongoose");

const connect = async() => {
    mongoos.connect("mongodb://localhost:27017/Incubation", {
        useUnifiedTopology: true,
        useNewUrlParser: true
      }, function(err, res) {
      
        if (err) {
          return console.error('Error connecting to "%s":', err);
        }
        console.log('Connected successfully to port');
      });
};

module.exports = connect
