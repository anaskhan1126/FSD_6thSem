// const express=require('express');
// app=express();
// port=8000;
// app.get('/',(req,res)=>{
//     res.send('hello this is...........')
// })
// app.get('/about',(req,res)=>{
//      res.send('Welcome to my Website')
// })
// app.listen(port,()=>{
//     console.log(`server is running at http://localhost:${port}`)
// })
// const express = require('express');
// const multer = require('multer');

// const app = express();

// // Storage configuration
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');   // folder where files will be saved
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });

// const upload = multer({ storage: storage });

// // Route for single file upload
// app.post('/upload', upload.single('myFile'), (req, res) => {
//   res.send('File uploaded successfully!');
// });

// app.listen(3000, () => console.log('Server running on port 3000'));\
const express=require('express');
const app=express();
const port=8000;
//create database
const student=[{
    id:1,
    name:"Anas",
    class:"Btech"
},
{
     id:2,
    name:"Aman",
    class:"Mtech"
}
]
// first route(show data)
app.get('/',(req,res)=>{
    try{
        res.status(200).json({message:"show all data",data:student})
    }
    catch(err){
        res.status(500).json({message:"data not found",error:err.message})
    }
})
//search data
app.get('/:id',(req,res)=>{
    try{
           const id=req.params.id;
           const std=student.find(s=>s.id==id)
           if(!std){
              return res.status(404).json({message:"student data is not found",data:student})
           }
           res.status(200).json({message:"data is found"})
        }
    catch(err){
          res.status(500).json({message:"data not found",error:err.message})
    }
})
app.listen(port,()=>{
      console.log(`Server is running at  http://localhost:${port}`);
})


