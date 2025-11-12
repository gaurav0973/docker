import express from 'express';


const app = express();
const port = 8888;


app.get('/', (req, res)=>{
    return res.json({
        status : 'success',
        message : 'Hello From Express Server'
    })
})

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
})



/*
Lets Dockerize this Application
Node Version: v25.1.0
npm installed : v11.4.2
*/