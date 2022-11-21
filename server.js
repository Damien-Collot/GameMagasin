import e from "express";
import express, { json, request, response } from "express";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const app = express()

app.use(json())

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
    name : String,
	price : Number,
	platform : String,
	lang : String,
	picture : String,
	amount : Number
})

app.get("/games", (request,response) => {
    Game.find().then((games) => {
    const listGames = []
    games.forEach(g => {
        const gameAffich = { "_id" : g._id, name : g.name, picture : g.picture, price : g.price}
        listGames.push(gameAffich)
    })
    response.json(listGames)
    })
  })

app.post("/cart", (request, response) => {
    const cartToPost = new Cart({name : request.body.name, price : request.body.price, platform : request.body.platform, lang : request.body.lang, picture : request.body.picture, amount : request.body.amount})
    cartToPost.save()
    response.send("Cart created")
})

app.delete("/cart/:id", (request, response) => {
    Cart.deleteOne({ "_id" : ObjectId(request.params.id) }, function(err, result) {
    if (err) {
        response.send(err);
    } else {
        response.send(result);
    }});
})

app.listen(3000, () => {
    console.log(`Server Started at http://localhost:${3000}`)
  })