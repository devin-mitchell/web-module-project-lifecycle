import React from 'react'
import Follower from './Follower';
import styled from 'styled-components';

const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin: 0 auto 0;

    .user{
        display: flex;
        border: 10px solid 	#0abdc6;
        border-radius: 10px;
        box-shadow: 10px 10px 10px #091833;
        width: 100%;
        background: #091833;
        color: white;
        padding: 2% 5%;
        margin: 10% 0;
    }
    .user img{
        border-radius: 50%;
        border: 2px solid #0abdc6;
        width: 25%;
        height: auto;   
    }
    .userInfo {
        margin-left: 5%;
        font-family: comfortaa;
    }
    .userInfo h2 {
        font-family: oswald;
        letter-spacing: 3px;
        font-size: 2rem;
        text-decoration: underline;
    }
    .info {
        display: flex;
        margin: 3px auto;
        border: 1px solid white;
    }
    .info p {
        margin: 2px 5px;
        font-size: .9rem; 
    }

    .followers {
        width: 100%;
        background:	#ea00d9;
        margin: 30px auto;
        border: 10px solid 	#0abdc6;
        border-radius: 10px;
        box-shadow: 10px 10px 10px #091833;
        overflow: scroll;
        height: 50vh;
    }
`

const User = (props) => {
    return (
        <UserContainer className='userCard'>
            <div className='user'>
                <img
                    width='100' 
                    className='userImage' 
                    src={props.userData.avatar_url} 
                    alt='hansum man'
                />
                <div className='userInfo'>
                    <h2>{props.userData.name}</h2>
                    <p>{props.userData.bio}</p>
                    <div className='info' >
                        <p>Followers: {props.userData.followers}</p>
                        <p>Following: {props.userData.following}</p>
                        <p>Repos: {props.userData.public_repos}</p>
                    </div>
                </div>
            </div>
            <div className='followers'>
                {props.followers.map(follower => {
                    return(
                        <Follower key={follower.id} follower={follower} />
                    )
                })}
            </div>
        </UserContainer>
    )
}

export default User;

