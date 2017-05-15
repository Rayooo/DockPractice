var app = require("express")();
app.get("/",function(req,res){
    res.send("Hello word from node2");
})
app.listen(3002);
console.log("Listen 3002");
