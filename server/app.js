const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
const moment = require("moment");

const db = mysql.createPool({
  host: "innopark-easypark.cng6un8oxcnc.ap-southeast-1.rds.amazonaws.com",
  user: "admin",
  password: "123456789",
  database: "easyparkdb",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/getAFreeSpace", (req, res) => {
  const typeID = req.query.typeID;
  const inFloor = req.query.inFloor;
  const getFreeSpace = "call getAFreeSpace(?,?)";
  db.query(getFreeSpace, [typeID, inFloor], (err, result) => {
    res.send(result[0]);
  });
});
app.get("/getSpaceType", (req, res) => {
  const getSpaceType = "call getSpaceTypes()";
  db.query(getSpaceType, (err, result) => {
    res.send(result[0]);
  });
});

app.get("/getFloor", (req, res) => {
  const type_id = req.query.type;
  const getFloor = "call getFloor(?)";
  db.query(getFloor, [type_id], (err, result) => {
    res.send(result[0]);
  });
});

app.get("/login", (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  const login = "call login(?,?)";
  db.query(login, [username, password], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result[0].length > 0) {
      res.send(result[0]);
    } else {
      console.log("Wrong Email or Password");
      res.send(false);
    }
  });
});
app.post("/register", (req, res) => {
  const userName = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const register = "call register(?,?,?)";
  db.query(register, [userName, email, password], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result[0]);
    }
  });
});
app.put("/updateSpaceAvailablelity", (req, res) => {
  const spaceID = req.body.spaceID;
  const available = req.body.available;
  const update = "call updateSpaceAvailablelity(?,?)";
  db.query(update, [spaceID, available], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result[0]);
    }
  });
});
app.post("/postParking", (req, res) => {
  const INparking_time = req.body.INparking_time;
  const INtotal_price = req.body.INtotal_price;
  const INcheck_in = req.body.INcheck_in;
  const INcheckout = req.body.INcheckout;
  const INspace_id = req.body.INspace_id;
  const INcustomerID = req.body.INcustomerID;
  const update = "call postParking(?,?,?,?,?,?)";
  db.query(
    update,
    [
      INparking_time,
      INtotal_price,
      INcheck_in,
      INcheckout,
      INspace_id,
      INcustomerID,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result[0]);
      }
    }
  );
});
app.put("/Payment", (req, res) => {
  const inPin = req.body.pin;
  const inUser = req.body.userID;
  const inPrice = req.body.price;
  const spaceID = req.body.spaceID;
  const check = "select VirtualPoint from credit_card where customerID = (?)";
  const pay = "call Payment(?,?,?)";
  const update = "call updateSpaceAvailablelity(?,?)"
  db.query(check, [inUser], (err, result) => {
    if (err) {
      console.log(err);
    } else {
        console.log(result[0].VirtualPoint)
      if (result[0].VirtualPoint > inPrice) {
        db.query(pay, [inPin, inUser, inPrice], (err, result) => {
          if (err) {
            console.log(err);
            res.send(false);
          } else {
            if (result.affectedRows > 0) {
              db.query(update, [spaceID, "Y"], (err, result) => {
                if (err) {
                  console.log(err);
                } else {
                  res.send(result[0]);
                }
              });
              res.send(true);
            } else {
              res.send(false);
            }
          }
        });
      } else {
        res.send(false);
      }
    }
  });
});
app.post("/CreateCustomer", (req, res) => {
  const customerID = req.body.customerID;
  const Fname = req.body.Fname;
  const Lname = req.body.Lname;
  const tel = req.body.tel;
  const id_card_no = req.body.id_card_no;
  const userID = req.body.customerID;
  console.log(customerID);
  console.log(Fname);
  console.log(Lname);
  console.log(tel);
  console.log(id_card_no);
  console.log(userID);
  const post = "call CreateCustomer(?,?,?,?,?,?)";
  db.query(
    post,
    [customerID, Fname, Lname, tel, id_card_no, userID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result[0]);
      }
    }
  );
});
app.get("/GetAllHistory", (req, res) => {
  const cusID = req.query.cusID;
  const getHis = "call GetAllHistory(?)";
  db.query(getHis, [cusID], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result[0]);
    }
  });
});
app.get("/GetAHistory", (req, res) => {
    const cusID = req.query.cusID;
    const BuildID = req.query.BuildID;
    console.log(BuildID)
    const getHis = "call GetAHistory(?,?)";
    db.query(getHis, [cusID,BuildID], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result[0]);
      }
    });
  });
  app.get("/GetBuildingHistory", (req, res) => {
    const cusID = req.query.cusID;
    const getHis = "call GetBuildingHistory(?)";
    db.query(getHis, [cusID], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result[0]);
      }
    });
  });
app.delete("/deleteHistory", (req, res) => {
  const cusID = req.body.cusID;
  const delHis = "call deleteHistory(?)";
  console.log(cusID);
  db.query(delHis, [cusID], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result[0]);
    }
  });
});
app.listen(5000, () => {
  console.log("listening to port 5000");
});
