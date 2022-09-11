               

//My teamates name=====> //Mohd yousuf, sana nadim shah , kusum gupta , ayaan ali
//if you have any issues realted to my project so  please contact me =====>phone Number===>9717847131

const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const  mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://mdyousuf9007:yousuf9007@cluster0.0ldwd.mongodb.net/project-1-blog", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
