import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/Sidebar";
import Router from "./components/Router/Router";

const App = ({infoPosts, infoData, dialogNameMessages}) => {
  return (
    <div className="App">
       <Header />
      <div className="wrapper">
       <SideBar />
       <Router infoPosts={infoPosts} infoData={infoData} dialogNameMessages={dialogNameMessages}/>
      </div>
    </div>
  );
}

export default App;
