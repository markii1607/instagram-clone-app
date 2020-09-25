import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'

function Post() {
    return (
        <div className="post">
            {/* header -> avatar + username */}
            <Avatar
                className="post__avatar"
                alt='Mark'
                src="/static/images/avatar/1.jpg"
            />
            <h3>Username</h3>

            {/* image */}
            <img className="post__image" src="https://www.freecodecamp.org/news/content/images/size/w600/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" alt="" />

            {/* username + caption */}
            <h4 className="post__text"><strong>cleverqazi</strong> WOW day three</h4>
        </div>
    )
}

export default Post
