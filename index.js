// var express = require ("express");
// var app = express();

// app.get("/", function(req, res) {
//     res.send("Hello world");
// });

// app.listen(3000, function() {
//     console.log("Example is running on port 3000");
// });





// var express = require ("express");
// var app = express();

// app.get("/", function(req, res) {
//     res.send("Hello world");
// });





// app.get("/google/:search",function(req, res){
//     var sea = req.params.search;
//     res.redirect("http://google.com/search?q=" + sea);
// });




// app.get("/google",function(req, res){
    
//     res.redirect("http://google.com");
// });



// app.get("/:surname/:name",function(req, res){
//     var n = req.params.name;
//     var s = req.params.surname;
//     res.send("<h1>Hello" + " " + s + " " + n + "</h1>");
// });


// app.get("/*",function(req, res){
    
//     res.send("error 404");
// });

// app.listen(3000, function() {
//     console.log("Example is running on port 3000");
//     });







// var express = require("express");
// var app = express();

// app.use(express.static("public"));

// app.get("/", function(req, res){
//    res.redirect("index.html");
// });

// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });



// var Square = require("./module");
// var mySquareObject = new Square(5);

// function main() {
//    console.log(mySquareObject.getArea());
// }
// main();




// var fs = require('fs');

// function main(){
//    fs.writeFile("hello.txt", "Hello world\n", function(err){
//        console.log("fs.writeFile ended");
//    });
//    console.log("fs.writeFile");
// }
// main();




// var fs = require('fs');

// function main() {
//    fs.writeFileSync("hello.txt", "Hello world\n");
//    console.log("fs.writeFile");
// }
// main();




var fs = require('fs');
var obj = 
{
    "first_name": "Ani",
    "last_name": "Gevorgyan",
    "age": 15,
    "tumo_student": true

}

var myJSON = JSON.stringify(obj);

fs.writeFileSync("obj.json", myJSON);
 













var obj =
{
    "first_name": "Ani",
    "last_name": "Gevorgyan",
    "age": 15,
    "tumo_student": true

}