import React from 'react'
import styled from 'styled-components';

const FollowerContainer = styled.div`
    background: #091833;
    margin: 15px auto;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    border-radius: 5px;
    border: 3px solid #0abdc6;
    box-shadow: 10px 10px 5px #091833;
    padding: 5px 10px;

    img {
        border-radius: 50%;
        border: 2px solid #0abdc6;
        width: 15%;
    }
    h3 {
        width: 40%;
    }
    .links {
        display: flex;
        flex-direction: column;
        width: 30%;
        margin: 0 5px 0 10px;
    }
    .links a {
        color: white;
        cursor: pointer;
        text-decoration: underline;
        font-size: .8rem;
    }
`
const Follower = (props) => { 
    return (
        <FollowerContainer>
            <img 
                src={props.follower.avatar_url} 
                alt='user'
                width='50'
            />
            <h3>
                {props.follower.login}    
            </h3>
            <div className='links'>
                <a href={props.follower.html_url}>View Profile</a>
                <a href={props.follower.repos_url}>Repositories</a>
            </div>
        </FollowerContainer>
    )
}

export default Follower;