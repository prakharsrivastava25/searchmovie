const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

app.use(express.static('dist'));
app.listen(PORT);
console.log("Listening to the port ",PORT,"with host ",HOST);

/*app.get('/',(req,res)=>{
	res.send('Hello from express index.js');
});

app.listen(PORT,HOST);
console.log("Listening to the port ",PORT,"with host as",HOST);*/
