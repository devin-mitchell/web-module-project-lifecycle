import React from 'react'
import Follower from './Follower';

const User = (props) => {
    return (
        <div className='userCard'>
            <div className='user'>
                <img
                    width='100' 
                    className='userImage' 
                    src={props.userData.avatar_url} 
                    alt='hansum man'
                />
                <h2>{props.userData.name}</h2>
                <p>{props.userData.bio}</p>
            </div>
            <div className='userInfo'>
                <p>Followers: {props.userData.followers}</p>
                <p>Following: {props.userData.following}</p>
                <p>Repos: {props.userData.public_repos}</p>
            </div>
            <div className='followers'>
                {props.followers.map(follower => {
                    return(
                        <Follower key={follower.id} follower={follower} />
                    )
                })}
            </div>
        </div>
    )
}

export default User;

