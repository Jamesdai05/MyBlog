const express=require('express');

const app= express();

const port=4040;




app.get('/',(req,res)=>{
  res.send('Hello welcome to the home page!');
});


app.listen(port,()=>{
  console.log(`Listening on port ${port}`);
})