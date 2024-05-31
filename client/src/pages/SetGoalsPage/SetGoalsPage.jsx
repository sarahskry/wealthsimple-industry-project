import "./SetGoalsPage.scss";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SetGoalsPage() {
  const [goals, setGoals] = useState([]);
  const [selectedGoalId, setSelectedGoalId] = useState(null);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await axios.get("http://localhost:8080/goals");
        setGoals(response.data);
      } catch (e) {
        alert("Failed fetching goals from the api");
        console.log(e);
      }
    };

    fetchGoals();
  }, []);

  return (
    <div className="set-goals-page">
      <Header />
      <div className="page__section">
        <div className="page__wrapper">
          <h1 className="page__header">What's your goal?</h1>
        </div>
        <select
          className="page__list"
          name="Save For Vacation"
          id="Save For Vacation"
          onChange={(event) => setSelectedGoalId(event.target.value)}
        >
          <option value="">Choose a Goal</option>
          {goals.map((goal) => (
            <option key={goal.id} value={goal.id}>
              {goal.goal_name}
            </option>
          ))}
        </select>
        <div className="page__button-container">
          <Link className="page__button" to={`/goals/${selectedGoalId}`}>
            Submit
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
