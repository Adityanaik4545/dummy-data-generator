const express = require('express')
const app = express()
const mongoose= require('mongoose')
const Employee= require('./models/employee.js')
 mongoose.connect("mongodb+srv://aditya:aditya@clusteraditya.aiyuqve.mongodb.net/company")
const port = 3000
app.set('view engine','ejs')
let getrandom=(arr)=>{
    let rno=Math.floor(Math.random()*(arr.length-1));
    return arr[rno];
}
app.get('/', (req, res) => {
  res.render('index')
})
app.get('/generate', async(req, res) => {
// clear the collection first
await Employee.deleteMany({})
// generate random data
    let randomName=["aditya","kishan","rohit"]
    let randomLanguage=["pyhton","javascript","go"]
    let randomCity=["pune","karwar","panaji"]
    for (let index = 0; index < 10; index++) {
        let e=await Employee.create({
        name:getrandom(randomName),
        salary:Math.floor(Math.random()*50000),
        language:getrandom(randomLanguage),
        city:getrandom(randomCity),
        isManager:Math.random()>0.5?true:false
    })
    console.log(e);
        
    }
  res.render('index')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
