const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Placement-Manager", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true, // Deprecated, use createIndexes instead
  
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.log("Error connecting to MongoDB:");
});
