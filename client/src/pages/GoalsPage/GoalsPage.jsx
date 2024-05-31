import GoalsMain from "../../components/GoalsMain/GoalsMain";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function GoalsPage() {
  return (
    <>
      <Header />
      <div className="goals-page">
        <div className="goals-page__main">
          <GoalsMain />
        </div>
        <Footer />
      </div>
    </>
  );
}
