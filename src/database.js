const mongoose =require('mongoose');
const URI='mongodb://localhost/mern-task'
mongoose.connect(URI)
.then(db=>console.log('db esta conectada'))
.catch(err=>console.log(err));
module.exports=mongoose;
