
import express from 'express'; //Bring in express, import (ES6)
import path from 'path';
import { fileURLToPath } from 'url';
import meetings from './public/data/data.js';
const app = express();         //Create an instance of Express
const port = 3000;             // Use port 3000

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname + "/public"));
//Set the view engine with app.set,
//Express loads the module internally and stores it in app reference
app.set('view engine', 'ejs')

// Set the landing page route
// Send the index.ejs file in the pages folder, to client
// File will have an extension of .ejs, Embedded JavaScript
app.get('/', (req, res) => {
    res.render('pages/index', {data : meetings, title: "Schedule Meetings"});
});
app.get('/about', (req, res) => {
    res.render('pages/about', {data : meetings, title: "About Us"});
});
app.get('/contact', (req, res) => {
    res.render('pages/contact', {data : meetings, title: "Contact Us"});
});
//Listen for requests
app.listen(port, () => {
    console.log(`App listening at port ${port}`)
});