require('dotenv').config();
const express=require('express');

const app= express();

const port=process.env.PORT || 4040;




app.get('/',(req,res)=>{
  res.send('Hello welcome to the home page!');
});


app.get('/',(req,res)=>{
  res.send('Hello welcom to the show page!');
})


app.listen(port,()=>{
  console.log(`Listening on port ${port}`);
})