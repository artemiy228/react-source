import './Profile.scss'
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profile}) => {
	return (
		<>
		<ProfileInfo />
		<Posts infoPosts={profile.infoPosts} />
		</>

	) 
}

export default Profile;