import { Server } from "colyseus";
import { createServer } from "http";
import express from "express";
import path from "path";
const port = Number(process.env.port) || 31337;
import { Overworld } from "./rooms/Overworld";


const app = express();
app.use(express.json());

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '..')));

const gameServer = new Server({
  server: createServer(app)
});

gameServer.listen(port);
console.log(`[GamServer] Listening on Port: ${port}`)

// 🌎
gameServer.define("Overworld", Overworld, {
    gameMode: 'rpg'
    , maxPlayers: 6
})
  