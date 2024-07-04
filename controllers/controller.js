const User= require("../user")
module.exports.signup_get =(req , res) => {
    //res.render('signup');
    res.send("signup");
}

module.exports.login_get =(req , res) => {
    //res.render('login');
    res.send("login");    
}

module.exports.signup_post =async (req , res) => {
    const {uid , password , email ,Mob} = req.body;
    try{
        const user = await User.create({username,password,email,mob});
        res.status(201).json("User Created Successfully");
    }catch(err){
        res.status(400).json("User Not created");
    }
    res.send('new Signup');
    
}

module.exports.login_post =(req , res) => {
    //res.render('user login');
    const {uid , password} = req.body;
    console.log(uid,password);
    res.send('user login');
}