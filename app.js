const express = require("express");
const app = express();
const romanNumeral = require("./services");

app.get("/:number", (req,res,next)=>{
    const number = req.params.number;
    let response = romanNumeral(number);
    res.send(response);
}
)
if(!module.parent){ //for testing
    app.listen(3000,"127.0.0.1", () => {
    });
    
}

module.exports = app; //TESTING