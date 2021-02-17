import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/Sidebar";
import Router from "./components/Router/Router";

const App = ({infoPost}) => {
  return (
    <div className="App">
       <Header />
      <div className="wrapper">
       <SideBar />
       <Router infoPost={infoPost}/>
      </div>
    </div>
  );
}

export default App;
