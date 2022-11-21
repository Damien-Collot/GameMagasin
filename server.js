import express, { json, request, response } from "express";
import mongoose from "mongoose";

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
    Name : String,
	price : Number,
	platform : String,
	lang : String,
	picture : String,
	amount : Number
})

app.get("/games", (request,response) => {
    Game.find().then((games) => response.json(games))
  })

app.listen(3000, () => {
    console.log(`Server Started at http://localhost:${3000}`)
  })