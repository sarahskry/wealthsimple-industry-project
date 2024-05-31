import './GoalReached.scss';

export default function GoalReached({ trigger }) {
  return trigger ? (
    <> 
     <div className="pop-up"></div>
     <div className="pop-up__container">
       <div className="pop-up__window">
         <h3 className="pop-up__header"></h3>
         <p></p>
       </div>
     </div>
   </>
 ) : null
}