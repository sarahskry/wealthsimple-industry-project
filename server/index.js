const express = require('express');
const fs = require('fs');
const cors = require('cors');

require('dotenv').config();

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

//function to read data file
function readGoals() {
  const goalsData = fs.readFileSync('./data/goals.json');
  const parsedData = JSON.parse(goalsData);
  return parsedData;
}

//GET endpoint for all goals
router.get("/", (_req, res) => {
  const goals = readGoals();
  console.log(goals);
  res.json(goals);
});

app.use('/goals', router);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

});



