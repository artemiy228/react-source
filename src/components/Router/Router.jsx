import './Router.scss'
import Profile from "../Profile/Profile";
import Dialogs from '../Dialogs/Dialogs'
import News from '../News/News'
import Music from '../Music/Music'
import Settings from '../Settings/Settings'
import {
  Switch,
  Route,
} from "react-router-dom";


const Router = ({infoPosts, infoData, dialogNameMessages}) => {
  return (
    <div className="content">
      <Switch>

         <Route path="/profile">
            <Profile infoPosts={infoPosts} infoData={infoData} dialogNameMessages={dialogNameMessages}/>
          </Route>
         <Route path="/Dialogs">
            <Dialogs infoData={infoData} dialogNameMessages={dialogNameMessages}/>
         </Route>
        {/* Способ через рендер! ↓ Тоже можно, даже желательно, говорят он быстрее. ↓*/}
        {/*<Route path="/profile" render={() => <Profile infoPosts={infoPosts} infoData={infoData} dialogNameMessages={dialogNameMessages}/>}/>*/}

        <Route  path="/news" component={ News }/>
        <Route  path="/music" component={ Music }/>
        <Route  path="/settings" component={ Settings }/>

      </Switch>
    </div>
  )
}
export default Router;