import './Router.scss'
import Profile from "../Profile/Profile";
import Posts from "../Posts/Posts";

const Router = () => {
	return (
		<div className="content">
			<Profile />
			<Posts />
		</div>
	)
}
export default Router;