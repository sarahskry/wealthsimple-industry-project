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

//GET endpoint for individual goals
router.get("/:id", (req, res) => {
  const goals = readGoals();
  const singleGoal = goals.find(
    (goal) => goal.id === req.params.id
  );
  if (!singleGoal) {
    res.status(404).send("Goals not found, try again later");
  } else {
    res.json(singleGoal);
  }
});

//PUT endpoint to update a specific goal
router.put("/:id", (req, res) => {
  try {
  const goals = readGoals();
  const goalIndex = goals.findIndex((goal) => goal.id === req.params.id);

  if (goalIndex === -1) {
    return res.status(404).send("Goal not found, try again later");
  }
  goals[goalIndex].goal_amount = req.body.goal_amount;

  fs.writeFileSync('./data/goals.json', JSON.stringify(goals, null, 2));

  res.json(goals[goalIndex]);
} catch (error) {
  console.error("Error handling PUT request:", error)
  res.status(500).send("An error occured while processing your request")
}
});

//PATCH endpoints to update the contributions array
router.patch("/:id", (req, res) => {
  try {
    const goals = readGoals();
    const goalIndex = goals.findIndex((goal) => goal.id === req.params.id);
    if (goalIndex === -1) {
      return res.status(404).send("Goal not found, try again later");
    }
    
    const updatedGoal = {
      ...goals[goalIndex], 
      contributions: [...goals[goalIndex].contributions, req.body.contributions]
    };

    goals[goalIndex] = updatedGoal;
    fs.writeFileSync('./data/goals.json', JSON.stringify(goals, null, 2));

    res.json(updatedGoal); 
  } catch (error) {
    console.error("Error handling PATCH request:", error);
    res.status(500).send("An error occurred while processing your request");
  }
});

app.use('/goals', router);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

});



