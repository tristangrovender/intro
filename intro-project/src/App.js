import "./App.css";
import "./header.css";
import "./footer.css";
import Counter from "./Counter";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Counter />
      </header>
      <Footer />
    </div>
  );
}

export default App;
