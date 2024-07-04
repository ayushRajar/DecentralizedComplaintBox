const express=require("express");
const auth=require("./Routers/authRouter.js");
const app=express();
app.use(express.json());

app.use(auth);

app.listen(3003);

