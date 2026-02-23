const express=require('express');
app=express();
port=8000;
app.get('/',(req,res)=>{
    res.send('hello this is...........')
})
app.get('/about',(req,res)=>{
     res.send('Welcome to my Website')
})
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})
