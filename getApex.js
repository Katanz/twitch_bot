import * as dotenv from "dotenv";
dotenv.config();
const APIkey = `auth=${process.env.APEX_KEY}`;
const urlPredator = `https://api.mozambiquehe.re/predator?${APIkey}`;
const urlPlayer = `https://api.mozambiquehe.re/bridge?${APIkey}&player=Recrent&platform=PC`;

//get RP from #750 apex predator
export const getLastPredator = fetch(urlPredator)
  .then((response) => response.json())
  .catch((err) => console.log("Error while getting info API" + err));

//TODO: make fetch to take a current RP of player

//get current RP of a player
export const getCurrentRPofPlayer = fetch(urlPlayer)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("Error while getting info API" + err));
