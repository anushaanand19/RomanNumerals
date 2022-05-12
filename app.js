const express = require("express");
const app = express();


app.get("/", (req,res,next)=>{
    
    res.send("Server Running");   
}
)

app.listen(3000);