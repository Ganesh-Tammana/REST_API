import { v4 as uuidv4 } from 'uuid';

let users=[];

//Getting the users from the database
export const getUsers=(req,res)=>{
    res.send(users); 
}

//Getting the data of specific user 
export const getUser=(req,res)=>{
    const {id}=req.params;
    const foundUser=users.find((user)=> user.Id===id);
    res.send(foundUser);
}

//Creation of user
//uuidv4 is used for providing unique id to the user
export const  createUser=(req,res)=>{
    const user=req.body


    users.push({...user,Id:uuidv4()});

    res.send(`User added sussessfully ${user.firstName} added to database`);
}

//Delete the user from the database
export const deleteUser=(req,res)=>{
    const {id}=req.params;

    users=users.filter((user)=>user.Id!==id);

    res.send(`user with id ${id} deleted successfully `);
}

//Update user details
export const updateUser=(req,res)=>{
    const {id}=req.params;

    const {firstName,lastName,age}=req.body;

    const user=users.find((user)=>user.Id===id);

    if(firstName){ user.firstName=firstName;}

    if(lastName){ user.lastName=lastName;}

    if(age){ user.age=age; }

    res.send(`user updations done successfully ${id}`)
}