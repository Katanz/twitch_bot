import pkg from "tmi.js";
import { getLastPredator, getCurrentRPofPlayer } from "./getApex.js";
import * as dotenv from "dotenv";
dotenv.config();
const tmi = pkg;

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
async function onMessageHandler(target, context, msg, self) {
  if (self) {
    return;
  } // Ignore messages from the bot

  const commandName = msg.trim();

  if (commandName === "!предатор" || commandName === "пред") {
    //TODO make calculation between current and lust predatot, then show it
    const res = await getAndCalculateDifferenceRP();
    client.say(target, `До предатора ${res}`);
  }
}

function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}

async function getAndCalculateDifferenceRP() {
  const resLastPredator = await getLastPredator.then((result) => result);
  const resCurrentRPofPlayer = await getCurrentRPofPlayer.then(
    (result) => result
  );

  const lastNumber = resLastPredator.RP.PC.val;
  const currentNumber = resCurrentRPofPlayer.global.rank.rankScore;

  let res = lastNumber - currentNumber;

  return res;
}
