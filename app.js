let http = require("http");
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;


// MongoDB
mongoose.connect('mongodb://localhost/BlackJack', {useNewUrlParser: true,useUnifiedTopology: true});

const User = mongoose.model('User', new Schema({
	id: ObjectId,
	username: {type: String, unique: true },
	password: String,
	chips: Number,
	avatar: String,
}))

const Game = mongoose.model('Game', new Schema({
	id: ObjectId,
	username: {type: String, unique: true },
	deck: [],
	playerHand: [],
	dealerHand: [],
	status: String,
}))

const server=http.createServer((req, res)=>{
  
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('It is working\n');
 });

server.listen(8080, () => {
    console.log('Server listening on port');
})
