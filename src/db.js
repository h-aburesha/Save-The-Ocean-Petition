require("dotenv").config();
const { SQL_USER, SQL_PASSWORD } = process.env; // add a .env file next to the db.js file with your PostgreSQL credentials
const spicedPg = require("spiced-pg");
const db = spicedPg(
    `postgres:${SQL_USER}:${SQL_PASSWORD}@localhost:5432/petition`
);

function getAllSignatures() {
    return db
        .query(`SELECT * FROM signatures`)
        .then((data) => {
            console.log(data.rows); // in rows property is the actual data
        })
        .catch((err) => {
            console.log("error appeared for query: ", err);
        });
}

function addSignature() {
    db.query(
        `INSERT INTO signatures (firstname, lastname, signature) 
      VALUES ('${req.body.firstname.value}', '${req.body.lastname.value}', '${req.body.signature.value}');`
    ).then((data) => {
        console.log("inserted data into table: ", data.rows);
    });
}

// create the following functions:
//  - getAllSignatures - use db.query to get all signatures from table signatures
//  - addSignature - use db.query to insert a signature to table signatures
// Don't forget to export the functions with module.exports
