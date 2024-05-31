import "./SetGoalsPage.scss";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

export default function SetGoalsPage() {
  return (
    <>
      <Header />
      <div className="page__section">
        <div classname="page__wrapper">
          <h1 className="page__header">What's your goal?</h1>
        </div>
        <select
          className="page__list"
          name="Save For Vacation"
          id="Save For Vacation"
        >
          <option value="vacation">Save For Vacation</option>
          <option value="down payment">Save For Down Payment</option>
          <option value="hamster">Save For a Hamster</option>
          <option value="parrot">Save For a Parrot</option>
          <option value="spider">Save For a Spider</option>
          <option value="goldfish">Save For a Goldfish</option>
        </select>
        <div>
          <Link className="page__button" to="/goals/:id">
            Submit
          </Link>
        </div>
      </div>
    </>
  );
}
