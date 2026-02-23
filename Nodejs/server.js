const fs=require("fs");
const filepath="./data.json"
// function getuser(){
//      const data=JSON.parse(fs.readFileSync(filepath));
//      console.log(data);
// }
// getuser();
function createUser(newUser){
    const data=JSON.parse(fs.readFileSync(filepath));
  
    fs.writeFileSync(filepath,JSON.stringify(data,null,2));
    console.log("User added succesfully");
}
createUser({id: 2, name: "Amaan", age: 24});
