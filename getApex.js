require("dotenv").config();
const APIkey = `auth=${process.env.APEX_KEY}`;
const urlPredator = `https://api.mozambiquehe.re/predator?${APIkey}`;

const getLastPredator = fetch(urlPredator)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.RP.PC.val);
    return data.RP.PC.val;
  })
  .catch((err) => console.log("Error while getting info API" + err));

async function printLastPredator() {
    const a = await getLastPredator;
    return a;
}
const b = printLastPredator()
console.log(`The result of fetch is ${b}`);

module.exports.getLastPredator = getLastPredator;
