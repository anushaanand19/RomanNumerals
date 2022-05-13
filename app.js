const express = require("express");
const app = express();
const romanNumeral = require("./services");

app.get("/:number", (req,res,next)=>{
    const number = req.params.number;
    let response = romanNumeral(number);
    res.send(response);
}
)
app.listen(3000);