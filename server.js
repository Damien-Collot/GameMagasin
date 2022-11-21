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

function getAffichGame(games) {
    const listGames = [];
    games.forEach(g => {
        const gameAffich = { "_id" : g._id, name : g.name, picture : g.picture, price : g.price}
        listGames.push(gameAffich)
    })
    return listGames;
  }

app.get("/games", (request,response) => {
    Game.find().then((games) => {
    response.json(getAffichGame(games));
    })
  })

app.post("/cart", (request, response) => {
    Cart.collection.insertOne(request.body).then(response.send("Cart created"))
})

app.delete("/cart/:id", (request, response) => {
    Cart.findByIdAndDelete(request.params.id).then( response.send("game deleted"))
})

app.get("/game/id/:id", (request,response) => {
    Game.findById(request.params.id).then((game) => response.json(game))
  })

app.get("/game/name/:name", (request,response) => {
    Game.find({"name" : request.params.name}).then((game) => response.json(getAffichGame(game)))
  })

app.get("/game/platform/:platform", (request,response) => {
    Game.find({"platform" : {$in : request.params.platform}}).then((game) => response.json(getAffichGame(game)))
  })

app.get("/game/genre/:genre", (request,response) => {
    Game.find({"genre" : {$in : request.params.genre}}).then((game) => response.json(getAffichGame(game)))
  })

app.get("/game/:prixMin/:prixMax", (request, response) => {
		Game.find({"price" : {'$gt': request.params.prixMin, '$lt': request.params.prixMax}}).sort({"price" : 1}).then((game)=>response.json(getAffichGame(game)))
})

app.put("/cart/:id/:amount/:platform", (request, response)=> {
	Cart.findByIdAndUpdate(request.params.id, {amount : request.params.amount, platform : request.params.platform}).then(response.send("Jeu modifié."))
})

app.get("/cart", (request, response) =>{
	Cart.find().then((game)=> response.json(getAffichGame(game)))
})

app.delete("/carts/delete", (request, response)=>{
	Cart.deleteMany().then(response.send("Élements suprimés"))
})

app.delete("/cart/delete/:id", (request, response)=>{
	Cart.deleteOne({id : request.params.id}).then(response.send("Élément supprimé"))
})

app.listen(3000, () => {
    console.log(`Server Started at http://localhost:${3000}`)
  })
