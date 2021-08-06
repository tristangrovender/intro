import "./App.css";
import "./header.css";
import "./footer.css";
import Employee from "./Employee";
import Counter from "./Counter";
import Header from "./Header";
import Footer from "./Footer";

const employeeInfo = [
  {
    firstName: "Tristan",
    lastName: "A"
  },
  {
    firstName: "Josh",
    lastName: "B"
  },
  {
    firstName: "Mary",
    lastName: "C"
  },
  {
    firstName: "Kelby",
    lastName: "D"
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <h1>Company Directory</h1>
        {employeeInfo.map(employee => {
          return <Employee {...employee} />;
        })}
      </header>
      <Footer />
    </div>
  );
}

export default App;
