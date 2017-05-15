var app = require("express")();
app.get("/",function(req,res){
    res.send("Hello word from node1");
})
app.listen(3001);
console.log("Listen 3001");
