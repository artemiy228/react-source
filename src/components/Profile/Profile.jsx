import './Profile.scss'
import Posts from "../Posts/Posts";

const Profile = () => {
	return (
		<>
		<div className="profile">
			<div className="profile-banner">
				<img src="https://via.placeholder.com/1440x224" alt="photo12"/>
			</div>
			<div className="profile-user">
				<div className="profile-photo">
					<img src="https://via.placeholder.com/150" alt=""/>
				</div>
				<div className="profile-information">
					<div className="profile-name">
						<p>Name: <strong>Tumoxa</strong></p>
					</div>
					<div className="profile-date">
						<p>Date: <strong> 2 january</strong></p>
					</div>
					<div className="profile-city">
						<p>City: <strong>Sochi</strong></p>
					</div>
					<div className="profile-education">
						<p>Time: <strong>MSK+3</strong></p>
					</div>
					<div className="profile-site">
						<p>Web site: <strong>https://google.com</strong></p>
					</div>
				</div>
			</div>
		</div>
		<Posts />
		</>
	) 
}

export default Profile;