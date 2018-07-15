const express = require('express');
const Promise = require('bluebird');
const sqlite = require('sqlite');
const bodyParser = require('body-parser');
const cors = require('cors');

const dbPromise = sqlite.open('./hackathon-production.sqlite3', { Promise });
const app = express(); 
//Start app with bodyparser and cors
app.use(cors());
app.use(bodyParser.json());

app.get('/', () => {
    console.log("Server started...")
});

app.get('/get/teams', async (req, res, next) => {
    const db = await dbPromise;
    try {
        const names = await db.all('SELECT * FROM team_names');
        res.send(names);
    } catch (err) {
        next(err);
    }
});

app.get('/post/fixtures/:team', async (req, res, next) => {
    const db = await dbPromise;
    try {
        const fixtures = await db.all("select fixture_name, game_id from	fixtures_list a	inner join team_names b " + 
            "on a.team_name = b.team_name where	b.team_name = \'" + req.params.team + "\' order by " +
            "substr(replace(fixture_name,')',''),length(replace(fixture_name,')',''))-9,10) asc");
        console.log(fixtures);
        res.send(fixtures);
    } catch(err) {
        next(err);
    }
});

app.get('/post/pattern/data/:fixture', async (req, res, next) => {
    const db = await dbPromise;
    try {
        const patternData = await db.all("select a.name,a.occurrences ,a.rank from chain_table a " +
        "inner join fixtures_list b on a.game_id = b.game_id where b.fixture_name = \'" + req.params.fixture+ "\' "+
        "order by a.rank");
        console.log(patternData);
        res.send(patternData);
    } catch(err) {
        next(err);
    }
});

app.get('/post/field/data/:names', async (req, res, next) => {
    const db = await dbPromise;
    try {
        const coordsData = await db.all("select x,y,10 as z from grid_coordinates a inner join chain_table b on a.name = b.name "+
        "where b.name = \'" + req.params.names+  "\'");
        console.log(coordsData);
        res.send(coordsData);
    } catch(err) {
        next(err);
    }
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-type,Accept,x-access-token,X-Key"
    );
    if (req.method == "OPTIONS") {
      res.status(200).end();
    } else {
      next();
    }
  });


  const port = process.env.PORT || 7000;
  app.listen(port, () => { 
  console.log(`Server started on port`, port); 
});