/* eslint-disable no-console */
import express from "express";
import path    from "path";
import open    from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";

const port    =   3000;
const app     =   express();
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get("/", function(req, res) {
    res.sendfile(path.join(__dirname, '../src/index.html'));
});

app.get("/users", function(req, res) {
    // Hard coded the data
    res.json([
        {"id": 1, "firstName": "John J", "lastName": "Rambo", "email": "john@rambo.com"},
        {"id": 2, "firstName": "Rocky", "lastName": "Balboa", "email": "rocky@balboa.com"},
        {"id": 3, "firstName": "Bruce", "lastName": "Wayne", "email": "bruce@wayne.com"}
    ]);
});

app.listen(port, function(err) {
    if(err) {
        console.log(err);
    } else {
        open("http://localhost:" + port);
    }
});