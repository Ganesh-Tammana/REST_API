import express from 'express';

import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

let users=[];

//Getting the data from the database
router.get('/',(req,res)=>{
    res.send(users);
})

//Sending the data to the database
router.post('/',(req,res)=>{
    const user=req.body

    //uuidv4 is used for providing unique id to the user
    users.push({...user,Id:uuidv4()});

    res.send(`User added sussessfully ${user.firstName} added to database`);
})

//Getting the data of specific user 
router.get('/:id',(req,res)=>{
    const {id}=req.params;

    const foundUser=users.find((user)=> user.Id===id);
    res.send(foundUser);
})

//Delete the user from the database
router.delete('/:id',(req,res)=>{
    const {id}=req.params;

    users=users.filter((user)=>
       
        console.log(user.Id!==id)
    );

    res.send('user deleted successfully');
})
export default router;