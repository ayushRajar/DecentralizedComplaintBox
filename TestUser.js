const user=require("./user")
const newUser=new user({
    username:"abc@123",
    password: '123456',
    email:"abc@gmail.com",
    Mob: "4374324832",
});

newUser.save().then((suser)=>{
    console.log("User Saved: ",suser);
})

.catch((err) => {
    console.log("Error Saving User: ",err);
});



