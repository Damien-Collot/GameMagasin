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

app.listen(3000, () => {
    console.log(`Server Started at http://localhost:${3000}`)
  })