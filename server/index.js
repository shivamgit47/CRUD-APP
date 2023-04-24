import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import Connection from "./database/db.js";
import Routes from "./routes/route.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({extended : true }));
app.use(bodyParser.urlencoded({extended : true}));//to deocode the encoded url

app.use('/',Routes);
const port = process.env.PORT || 8000;

// Connection(); its needed when we need to pass arguements for username and password from .env to the URL in mongoose connection 
app.listen(port,()=>{ 
    console.log(`server is running succesfully on PORT ${port}`);
});