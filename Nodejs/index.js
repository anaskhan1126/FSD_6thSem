// const http=require('http');
// const myserver=http.createServer((req,res)=>{
// //    console.log('server1');
// //    res.end('Hii This is my first server');
//     if(req.url=='/'){
//         res.end(`<h1>ABES ENGINEERING COLLEGE</h1>
     
//           `)}          
//     else if(req.url=='/about'){

//         res.end("<h1>I am a student of B.tech</h1>")
//     }
//     else if(req.url=='/contact'){
//         res.end("<h1>Phone number: 8960870084</h1>")
//     }
//     else{
//         res.end("404 page is not found")
//     }
// });
// myserver.listen(8000,()=>console.log('server is running'))

//   Sync
// const fs=require('fs');
// // fs.writeFileSync("./it-a.txt","I am student of It")
// // fs.writeFileSync("./abes.txt","This is abes engineering college")
// const result=fs.readFileSync("./it-a.txt","utf-8")
// console.log(result)

// Async
// const fs=require('fs');
// // fs.writeFile("./ad.txt","code is very good time pass",()=>{});
// fs.readFile("./ad.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err)
//     }
//     else{
//         console.log(result)
//     }
// })

//     Append(Sync)
// const fs=require('fs');
// fs.appendFileSync("./ad.txt",'and i am happy');
// fs.appendFile("./ad.txt",'and i am happy',()=>{})

//    Copy
// fs.writeFileSync("./a1.txt","I am student");
// fs.writeFileSync("./b1.txt",""); 
// fs.cpSync(".a1.txt","b1.txt");

// Delete
// fs.unlinkSync("./ad.txt");
// const fs=require("fs");
// fs.readFile("data.json","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//         return;

//     }
//     const obj=JSON.parse(data);
//     console.log(obj.name);
// });

//      OS

const os=require('os');
/* console.log("Platform : ",os.platform());
console.log("User name",os.userInfo());
console.log("CUP",os.arch());*/
// console.log("Free memory : ",os.freemem())
// console.log("Total memory : ",os.totalmem())
// console.log("Uptime",os.uptime());
console.log("Home dir : ",os.homedir());

