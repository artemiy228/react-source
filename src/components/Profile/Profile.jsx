import './Profile.scss'
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({infoPost}) => {
	console.log(infoPost)
	return (
		<>
		<ProfileInfo />
		<Posts infoPost={infoPost}/>
		</>

	) 
}

export default Profile;