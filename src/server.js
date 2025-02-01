// import app from "./app.js";
const app = require("./app");
const connectDb = require("./config/db");
const { server_port } = require("./config/secret");



app.listen(server_port, ()=>{
    console.log(`server is running at http://localhost:${server_port}`);
    connectDb();
});