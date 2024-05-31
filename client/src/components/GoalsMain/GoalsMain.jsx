import GoalReached from '../GoalReached/GoalReached';
import './GoalsMain.scss';
import coin from '../../assets/coin.svg';
import { useState, useEffect } from 'react';
import { useFetchOneGoal, usePutGoal, usePatchGoal } from '../../utils/hooks';

export default function GoalsMain() {
  const [popUp, setPopUp] = useState(false);
  const [ coin1, setCoin1 ] = useState(false);
  const [ coin2, setCoin2 ] = useState(false);
  const [ coin3, setCoin3 ] = useState(false);
  const [ coin4, setCoin4 ] = useState(false);
  const [ coin5, setCoin5 ] = useState(false);
  // const [goalAmount, setGoalAmount] = useState('');
  // const [contribution, setContribution] = useState('');
  const { goalAmount, setGoalAmount } = usePutGoal();
  const { contributionAmount, setContributionAmount } = usePatchGoal();
  const { goal } = useFetchOneGoal(contributionAmount);
  const [ contributionsList, setContributionsList ] = useState([]); 

  useEffect(() => {
    if (goal) {
      setContributionsList(goal.contributions)
      console.log(contributionsList);
    }
  }, [contributionAmount])

  function handleGoalSubmit(event) {
    event.preventDefault();
    const goal = {goal_amount: parseInt(event.target.goal.value)}
    console.log(goal);
    //setGoalAmount(event.target.goal.value);
    //console.log(goalAmount);
    setGoalAmount(goal);
    console.log(goalAmount);
  }

  function handleContributionSubmit(event) {
    event.preventDefault();
    const contribution = {contributions: parseInt(event.target.contribution.value)}
    setContributionAmount(contribution);
    console.log(contributionAmount);
    event.target.reset();
    const total = goal.contributions.reduce((a, b) => a + b, 0);
    if (total >= (0.2 * goal.goal_amount)) {
      setCoin1(true);
    }
    if (total >= (goal.goal_amount * 0.4)) {
      setCoin2(true);
    }
    if (total >= (goal.goal_amount * 0.6)) {
      setCoin3(true);
    }
    if (total >= (goal.goal_amount * 0.8)) {
      setCoin4(true);
    }
    if (total >= (goal.goal_amount)) {
      setCoin5(true);
      setTimeout(() => {
        setPopUp(true);
      }, 2000)
    }
  }

  if (goal) {
    return (
      <div className="goals-main">
        <div className="goals-main__path-container">
          <h2 className="goals-main__goal">{goal.goal_name}</h2>
          <form className="goals-main__set-goal" onSubmit={handleGoalSubmit}>
            <label className="goals-main__set-goal-container">
              <h2 className="goals-main__set-goal-label">Goal Amount:</h2>
              <input type="400" name="goal" className="goals-main__set-goal-input" placeholder={goal.goal_amount}></input>
            </label>
          </form>
          <div className="goals-main__path">
            <div className="goals-main__point goals-main__point--5">
              {coin5 ? <img src={coin} alt="coin" className="goals-main__coin"/> : null}
            </div>
            <div className="goals-main__point goals-main__point--4">
              {coin4 ? <img src={coin} alt="coin" className="goals-main__coin"/> : null}
            </div>
            <div className="goals-main__point goals-main__point--3">
              {coin3 ? <img src={coin} alt="coin" className="goals-main__coin"/> : null}
            </div>
            <div className="goals-main__point goals-main__point--2">
              {coin2 ? <img src={coin} alt="coin" className="goals-main__coin"/> : null}
            </div>
            <div className="goals-main__point goals-main__point--1">
              {coin1 ? <img src={coin} alt="coin" className="goals-main__coin"/> : null}
            </div>
            <div className="goals-main__line--1"></div>
            <div className="goals-main__line--2"></div>
            <div className="goals-main__line--3"></div>
            <div className="goals-main__line--4"></div>
          </div>
          <form className="goals-main__set-goal" onSubmit={handleContributionSubmit}>
            <label className="goals-main__set-goal-container">
              <h2 className="goals-main__set-goal-label">Make a contribution:</h2>
              <input type="400" name="contribution" className="goals-main__set-goal-input"></input>
            </label>
          </form>
        </div>
        <div className="contributions">
          <h2 className="contributions__heading">Past Contributions:</h2>
          <ul className="contributions__ul">
            {contributionsList.map((contribution, index) => {
              return <li key={index} className="contributions__li">{contribution}</li>
            })}
          </ul>
          <p className="contributions__total">Total: <span className="contributions__total-value">{goal.contributions.reduce((a, b) => a + b, 0)}</span></p>
        </div>
        <GoalReached trigger={popUp} details={goal.details}/>
      </div>
    )
  }
}