import mongoose from "mongoose";
import Games from './games.json' assert {type: 'json'}

mongoose.connect("mongodb://127.0.0.1:27017/Magasin").then((e) => {
  console.log("Connected")
})
.catch((e) => {
  console.log("failed")
})

const Game = mongoose.model("Game", { 
    name :  String,
	studio : String,
	description : String,
	platform : Array,
	genre : Array,
	pegi : Number,
	price : Number,
	score : Number,
	lang : Array,
	picture : String,
	year : Number
})

const Cart = mongoose.model("Cart", {
    Name : String,
	price : Number,
	platform : String,
	lang : String,
	picture : String,
	amount : Number
})


Games.games.forEach(e => {
    const gameToSave = new Game({name : e.name, studio: e.studio, description : e.description, platform : e.platform, genre : e.genre, pegi : e.pegi, price : e.price, score : e.score, lang : e.lang, picture : e.picture, year : e.year })
    gameToSave.save()
  })