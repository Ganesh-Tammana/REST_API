import express from 'express';

const router = express.Router();

const users=[
    {
        firstName:"john",
        lastName:"marcus",
        age:23
    },
    {
        firstName:"jonyy",
        lastName:"peter",
        age:23
    }
]

router.get('/',(req,res)=>{
    
    res.send(users);
})

router.post('/',(req,res)=>{
    const user=req.body
    users.push(user)
    res.send(`User added sussessfully ${user.firstName}`);
})

export default router