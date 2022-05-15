const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'ฎฟ3116199',
    database: 'easyparkdb'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/getAFreeSpace',(req,res)=>{
    const typeID = req.query.typeID;
    const inFloor = req.query.inFloor;
    const getFreeSpace = "call getAFreeSpace(?,?)"
    db.query(getFreeSpace,[typeID, inFloor] , (err, result)=>{
        console.log(result[0]);
        res.send(result[0]);
    })
});
app.post('/Parking', (req, res)=>{
    
});
app.get('/getSpaceType',(req, res)=>{
    const getSpaceType = "call getSpaceTypes()"
    db.query(getSpaceType, (err, result)=>{
        res.send(result[0]);
    });
});

app.get('/getFloor',(req, res)=>{
    const type_id = req.query.type;
    const getFloor = "call getFloor(?)"
    console.log(req.params.type);
    db.query(getFloor, [type_id], (err, result)=>{
        res.send(result[0]);
    })
});

app.listen(5000, ()=>{
    console.log("listening to port 5000")
});