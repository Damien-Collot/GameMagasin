import mongoose from "mongoose";
import Games from './games.json' assert {type: 'json'}

mongoose.connect("mongodb://127.0.0.1:27017/Magasin",function(){
    /* Drop the DB */
});

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
    name : String,
	price : Number,
	platform : String,
	lang : String,
	picture : String,
	amount : Number
})

await Game.collection.deleteMany()
await Cart.collection.deleteMany()

Game.create(Games.games, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Fini");
    }
});