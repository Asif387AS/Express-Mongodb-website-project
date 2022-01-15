const mongoose=require('mongoose')
const url='mongodb+srv://Asif-zahoor:5420zahoor@cluster0.0tbvi.mongodb.net/Cluster0?retryWrites=true&w=majority'
mongoose.connect(url,{
    // useCreateIndex:false,
    useNewUrlParser:true,
    // useUnifiedTopology:true
}).then(()=>{
    console.log('Connection successful');
    
}).catch((error)=>{
 console.log(error);
 
})