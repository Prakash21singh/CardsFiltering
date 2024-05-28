import "./App.css";
import Card from "./Components/Card/Card";
import Search from "./Components/Search/Search";

function App() {
  return (
    <>
      <div className="w-full h-screen ">
        <div className="flex items-center justify-center relative pt-10">
          <div className="fixed top-2">
            <Search />
          </div>

          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
