var express = require('express');
var bodyParser = require('body-parser');
const arkanoidRouter = require('./routers/arkanoid')
const PORT = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use(arkanoidRouter);

app.listen(PORT, 
    ()=>{
        console.log(`RUN AT PORT ${PORT}`);
    }
)


