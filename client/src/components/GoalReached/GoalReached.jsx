import './GoalReached.scss';

export default function GoalReached({ trigger, details }) {
  const {success_message, reward_fact} = details[0];
  return trigger ? (
    <> 
     <div className="pop-up"></div>
     <div className="pop-up__container">
       <div className="pop-up__window">
         <h3 className="pop-up__header">{success_message}</h3>
         <p className="pop-up__message">{reward_fact}</p>
       </div>
     </div>
   </>
 ) : null
}