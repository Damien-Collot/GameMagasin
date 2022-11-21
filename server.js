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
    Game.find().then((games) => response.json(games))
  })

app.get("/game/id/:id", (request,response) => {
    Game.find({"_id" : ObjectId(request.params.id)}).then((game) => response.json(game))
  })

app.get("/game/name/:name", (request,response) => {
    Game.find({"name" : request.params.name}).then((game) => response.json(game))
  })

app.get("/game/platform/:platform", (request,response) => {
    Game.find({"platform" : {$in : request.params.platform}}).then((game) => response.json(game))
  })

app.get("/game/genre/:genre", (request,response) => {
    Game.find({"genre" : {$in : request.params.genre}}).then((game) => response.json(game))
  })


app.listen(3000, () => {
    console.log(`Server Started at http://localhost:${3000}`)
  })