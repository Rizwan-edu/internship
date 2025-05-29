import express  from "express";
import mongoose from "mongoose";
const app = express()
const PORT = 6500
const MONGO_URI = "mongodb+srv://admin:admin@cluster0.tapjmmi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.get('/',(req,res) => {
    res.send("edambattu")
})
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})

mongoose.connect(MONGO_URI)
.then(()=>{console.log("mongo URI connected");
})
.catch(()=>{
    console.log("error");
})

const UserSchema = new mongoose.Schema(
    {
        name:String,
        email:String
    }
)


const User = mongoose.model('User',UserSchema);
app.post('/users',async (req,res) => {
    try {
        const newUser = new User(req,body);
        await newUser.save();
        res.status(201).send("User Created!");
    }

    catch (err){
        res.status(400).send("error:"+ err);
    }
})