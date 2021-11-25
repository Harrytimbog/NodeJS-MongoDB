var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/";

// You can update a record, or document as it is called in MongoDB, by using the updateOne() method.

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: "Valley 345" };
  var newvalues = { $set: { name: "Mickey", address: "Canyon 123" } };
  dbo
    .collection("customers")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      db.close();
    });
});
