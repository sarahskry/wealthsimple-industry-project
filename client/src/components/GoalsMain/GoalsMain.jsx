import GoalReached from '../GoalReached/GoalReached';
import './GoalsMain.scss';
import coin from '../../assets/coin.svg';
import { useState } from 'react';
import { useFetchOneGoal } from '../../utils/hooks';

export default function GoalsMain() {
  const [popUp, setPopUp] = useState(false);
  const [ coin1, setCoin1 ] = useState(false);
  const [ coin2, setCoin2 ] = useState(false);
  const [ coin3, setCoin3 ] = useState(false);
  const [ coin4, setCoin4 ] = useState(false);
  const [ coin5, setCoin5 ] = useState(false);
  const [goalAmount, setGoalAmount] = useState('');
  const [contribution, setContribution] = useState('');
  const { goal } = useFetchOneGoal();

  function handleGoalSubmit(event) {
    event.preventDefault();
    setGoalAmount(event.target.goal.value);
    console.log(goalAmount);
  }

  function handleContributionSubmit(event) {
    event.preventDefault();
    setContribution(event.target.contribution.value);
    console.log(contribution);
  }

  // When Goal is reached setPopUp(true);

  return (
    <div className="goals-main">
      <div className="goals-main__path-container">
        <h2 className="goals-main__goal">{goal ? goal.goal_name : null}</h2>
        <form className="goals-main__set-goal" onSubmit={handleGoalSubmit}>
          <label className="goals-main__set-goal-container">
            <h2 className="goals-main__set-goal-label">Goal Amount:</h2>
            <input type="400" name="goal" className="goals-main__set-goal-input"></input>
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
        <ul></ul>
        <p className="contributions__total">Total:</p>
      </div>
      <GoalReached trigger={popUp}/>
    </div>
  )
}