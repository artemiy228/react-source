import './Router.scss'
import Profile from "../Profile/Profile";
import Dialogs from '../Dialogs/Dialogs'
import News from '../News/News'
import Music from '../Music/Music'
import Setting from '../Settings/Settings'
import {
  Switch,
  Route,
} from "react-router-dom";


const Router = () => {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/dialogs">
          <Dialogs />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
        <Route exact path="/music">
          <Music />
        </Route>
        <Route exact path="/settings">
          <Setting />
        </Route>
      </Switch>
    </div>
  )
}
export default Router;