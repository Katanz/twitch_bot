const tmi = require("tmi.js");
const getLastPredator = require("./getApex");
require("dotenv").config();

// Define configuration options
const opts = {
  identity: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
  },
  channels: ["katanzz"],
};

// Create a client with our options
const client = new tmi.client(opts);

client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);

client.connect();

// Called every time a message comes in
function onMessageHandler(target, context, msg, self) {
  if (self) {
    return;
  } // Ignore messages from the bot

  const commandName = msg.trim();

  if (commandName === "!предатор" || commandName === "пред") {
    console.log(getLastPredator);
    client.say(target, `До предатора ${msg}`);
  }
}

function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
