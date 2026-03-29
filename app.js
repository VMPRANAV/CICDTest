import express from 'express';
const app= express();
const port= process.env.PORT||3000;
app.get('/',(req,res)=>{
    res.send("Hello Kubernetes 🥳");
})

const server= app.listen(port,'0.0.0.0',()=>{
    console.log(`Running sucessfully on Port ${port}`);
})
export default server;
