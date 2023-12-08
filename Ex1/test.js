var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mydb_test");
mongoose.connection.on("error", function() {
  console.log("mydb_test database connection error")
});
mongoose.connection.on("open", function() {
  console.log("Successful connection to mydb_test database");
});
var clientSchema = mongoose.Schema({
  lastname : String,
  firstname : String,
  address : String
});
// creation of the Client class associated with the clients collection
var Client = mongoose.model("clients", clientSchema);
// create the document in memory
var c = new Client({lastname :"Clinton", firstname:"Bill", address:"Washington"});
//console.log("Before the save() statement");
// save the document in the database (clients collection)
//c.save().then(function(doc) {
  //console.log(doc);
  //console.log("The client is inserted into the collection");
//}).catch(function(err) {
  //console.log(err);  // display the error
//});
//console.log("After the save() statement");
console.log("Before the create() statement");
// save the document in the database (clients collection)
Client.create({lastname:"Obama", firstname:"Barack", address:"Washington"}).then(function(doc) {
  console.log("The client is inserted into the collection", 
  doc);
});
// now testing in GitHub