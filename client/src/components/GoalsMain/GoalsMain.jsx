import './GoalsMain.scss';

export default function GoalsMain() {
  return (
    <div className="goals-main">
      <form className="goals-main__set-goal">
        <label className="goals-main__set-goal-container">
          <h2 className="goals-main__set-goal-label">Goal Amount:</h2>
          <input type="400" name="goal_amount" className="goals-main__set-goal-input" placeholder="400"></input>
        </label>
      </form>
      <div className="goals-main__path">
        <div className="goals-main__point goals-main__point--1"></div>
        <div className="goals-main__point goals-main__point--2"></div>
        <div className="goals-main__point goals-main__point--3"></div>
        <div className="goals-main__point goals-main__point--4"></div>
        <div className="goals-main__point goals-main__point--5"></div>
        <div className="goals-main__line--1"></div>
        <div className="goals-main__line--2"></div>
        <div className="goals-main__line--3"></div>
        <div className="goals-main__line--4"></div>
      </div>
      <form className="goals-main__set-goal">
        <label className="goals-main__set-goal-container">
          <h2 className="goals-main__set-goal-label">Make a contribution</h2>
          <input type="400" name="goal_amount" className="goals-main__set-goal-input" placeholder="400"></input>
        </label>
      </form>
    </div>
  )
}