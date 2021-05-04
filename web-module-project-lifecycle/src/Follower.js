import React from 'react'

const Follower = (props) => { 
    console.log(props.follower)
    return (
        <>
            <div>
                {props.follower.login}    
            </div>
            <img 
                src={props.follower.avatar_url} 
                alt='user'
                width='50'
            />
            <a href={props.follower.html_url}>View Profile</a>
            <a href={props.follower.repos_url}>Repositories</a>
        </>
    )
}

export default Follower;