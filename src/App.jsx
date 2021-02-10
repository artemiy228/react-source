import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/Sidebar";
import Router from "./components/Router/Router";


const App = () => {
  return (
    <div className="App">
       <Header />
      <div className="wrapper">
       <SideBar />
       <Router />
      </div>
    </div>
  );
}

export default App;
