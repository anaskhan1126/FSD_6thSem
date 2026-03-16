const express = require('express');
const app = express();
const port = 8001;

app.use(express.json()); // middleware to read JSON body

// database (JSON)
const students = [
    {
        id: 1,
        name: "Anas",
        class: "B.Tech"
    },
    {
        id: 2,
        name: "Aman",
        class: "M.Tech"
    }
];

// Read all students
app.get('/', (req, res) => {
    res.json(students);
});

// Read single student
app.get('/read/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
});

// Add student
app.post('/add', (req, res) => {
    const newStudent = {
        id: students.length + 1,
        ...req.body
    };

    students.push(newStudent);

    res.json({
        message: "Data added successfully",
        data: newStudent
    });
});

//data delete
app.delete('/read/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    student=students.filter(s=>s.id!==id);
    res.json({message:"data delete",students});
})
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});