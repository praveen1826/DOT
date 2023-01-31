import fetch from 'node-fetch';
import express from "express";
import cors from "cors";

let url = "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.json";

let settings = { method: "Get" };

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        const ind = json.IND ;
        console.log(ind)
        const app = express()
        app.use(cors())
app.get('/', function (req, res) {
    res.json(ind)
  })
  
app.listen(5000)
    });


