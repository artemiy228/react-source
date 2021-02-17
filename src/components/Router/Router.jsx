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


const Router = ({infoPost}) => {
  return (
    <div className="content">
      <Switch>

         <Route path="/profile">
            <Profile infoPost={infoPost}/>
          </Route>
        <Route  path="/dialogs" component={ Dialogs }/>
        <Route  path="/news" component={ News }/>
        <Route  path="/music" component={ Music }/>
        <Route  path="/settings" component={ Settings }/>

      </Switch>
    </div>
  )
}
export default Router;