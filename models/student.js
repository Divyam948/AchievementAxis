const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    roll_no: {
        type: Number,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    image_url: {
        type: String, 
        set: (v) => v === "" ? "https://plus.unsplash.com/premium_photo-1681505220220-410658c008da?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sbGVnZSUyMGJveXN8ZW58MHx8MHx8fDA%3D" : v,
    },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;