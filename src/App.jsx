import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "#fbfcfd" }}>
        <Header />
        <Title />
        <div className="container">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
