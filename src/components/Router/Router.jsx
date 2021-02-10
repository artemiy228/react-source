import './Router.scss'
import Profile from "../Profile/Profile";
import Dialogs from '../Dialogs/Dialogs'
import {
	Switch,
	Route,
} from "react-router-dom";

 
const Router = () => {
	return (
		<div className="content">
			<Switch>
				<Route exact path="/">
					<Profile />
				</Route>
				<Route exact path="/dialogs">
					<Dialogs />
				</Route>
			</Switch>
		</div>
	)
}
export default Router;