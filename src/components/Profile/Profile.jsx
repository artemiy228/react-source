import './Profile.scss'
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({infoPosts}) => {
	console.log(infoPosts)
	return (
		<>
		<ProfileInfo />
		<Posts infoPost={infoPosts} />
		</>

	) 
}

export default Profile;