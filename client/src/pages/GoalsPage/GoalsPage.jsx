import GoalsMain from "../../components/GoalsMain/GoalsMain";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './GoalsPage.scss';

export default function GoalsPage() {
  return (
    <div className="goals-page">
      <Header />
      <div className="goals-page__main">
        <GoalsMain />
      </div>
      <Footer />
    </div>
  );
}
