import React from 'react';
import './forumTopic.css'

const ForumTopic = (props) => {
    return (
        <div className='forumTopic'>
            <p>{props.content}</p>
        </div>
    );
};

export default ForumTopic;
