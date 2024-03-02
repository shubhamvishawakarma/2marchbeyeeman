// import to modules
const http =require('http');
const app = require('./app');//import app file here
const server = http.createServer(app);
const mongoose =require('mongoose');
mongoose.set('strictQuery', false);
require('dotenv').config();


// connect mongodb to live atlas
const url =process.env.URL;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })




// connect to browser 
const port = process.env.PORT;
server.listen(port, function(error){
	if(error){
		console.log(error)
	}else{
		console.log(`The server is running at port ${port}`);
	}
});

