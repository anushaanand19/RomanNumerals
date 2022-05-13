const express = require("express");
const app = express();
const romanNumeral = require("./services");

app.get("/:number", (req,res)=>{
    res.json({romanNumeral : romanNumeral(req.params.number)});
}
)
if(!module.parent){ //for testing
    app.listen(3000,"127.0.0.1", () => {
    });
    
}

module.exports = app; //TESTING