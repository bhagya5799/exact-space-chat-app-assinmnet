import React, { useState } from 'react'
import { AiOutlineLike, AiFillLike, AiFillDislike ,AiOutlineDislike } from 'react-icons/ai'
import './index.css'

const Message = ({ message, user, TimeNow, color}) => {
    const [icon, setIcon] = useState(true)
    const [lickCount, setCount] = useState(0)
    const [dislikeCount,setDislike]=useState(0)

    const clickLikeButton = () => {
        setIcon(false)
        setCount(lickCount + 1)

    }
    const clickUnlikeButton = () => {
        setIcon(false)
        setDislike(dislikeCount +1)

    }
    return (
        <div className='message-container'>
            <span className='first-letter' style={{ backgroundColor: color }}>{user[0]}</span>
            <div>
                <div className='username-with-time'>
                    <span className='userName'>{user}</span>
                    <span className='time'>{TimeNow}</span>
                </div>
                <div className='d-flex gap-2'>
                    <div className='message'>
                        {message}
                    </div>
                    <>
                        <span className='likeIcon' onClick={clickLikeButton}>
                            {icon ? <AiOutlineLike /> : <AiFillLike />}
                            {icon ? '' : <i className='count'> {lickCount}</i>}
                        </span>
                        <span className='dislikeIcon' onClick={clickUnlikeButton}>
                            {icon ? <AiOutlineDislike /> : <AiFillDislike />}
                            {icon ? '' : <i className='count'> {dislikeCount}</i>}
                        </span>
                    </>
                </div>

            </div>
        </div>
    )
}

export default Message