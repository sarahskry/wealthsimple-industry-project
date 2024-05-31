import GoalsMain from "../../components/GoalsMain/GoalsMain";
import Footer from "../../components/Footer/Footer";

export default function GoalsPage() {
  return (
    <div className="goals-page">
      <div className="goals-page__main">
        <GoalsMain />
      </div>
      <Footer />
    </div>
  )
}