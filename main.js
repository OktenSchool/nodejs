const express = require('express');
const {userService} = require("./services/user.service");

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.get('/users/:name', (req, res)=>{
//     console.log(req.params.name);
//     console.log(req.query);
//     res.end('Hello from get')
// })
//
// app.post('/users', (req, res)=>{
//     console.log(req.body);
//     res.end('Hello from post')
// })
//
// app.put('/users', (req, res)=>{
//     res.end('Hello from put')
// })
//
// app.patch('/users', (req, res)=>{
//     res.end('Hello from patch')
// })
//
// app.delete('/users', (req, res)=>{
//     res.end('Hello from delete')
// })

app.get('/users', async (req, res)=>{
    const data = await userService.getAll();
    res.json(data)
})
app.get('/users/:id', async (req, res)=>{
    const id = req.params.id;
    const data = await userService.getById(id);
    res.json(data)
})
app.post('/users', async (req, res)=>{
    const user = req.body;
    const data = await userService.create(user);
    res.json(data)
})

app.listen(5000, ()=>{
    console.log('server running on 5000 port');
})

// CRUD
// Create
// Read/Retrieve
// Update
// Delete/destroy