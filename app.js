const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Student = require("./models/student.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/AxisAchievers";

main()
.then(() => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}
app.listen(8080, () => {
    console.log("server is listening to port 8080");
});

app.get("/students", async )