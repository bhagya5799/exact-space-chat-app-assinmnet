import './index.css'
import { FiSend } from 'react-icons/fi'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import React, {useState } from 'react'
import Picker from 'emoji-picker-react';
import Message from '../Message'
import UserNames from '../UserNames';
import Button from 'react-bootstrap/Button';



const ChatApp = (props) => {
    const user_list = ["Alan", "Bob Gare", "Carol", "Dean", "Elin", "BhgyaShree", "John Don"]
    const [inputText, setInputText] = useState('')
    const [messages, setMessages] = useState([])
    const [atPresent, setAtPresent] = useState(false)
    const [emojiPresent, setEmojiPresent] = useState(false)

    const clickSendMessage = () => {
        var colors = [
            '#ff0000', '#a76ce6', '#c4871d',
            '#27ad23', '#32a852', '#36c41d', '#f5d20f', '#ed2f5c', '#646ade', '#d018f5'
        ];
        // selecting random color
        const random_color = colors[Math.floor(
            Math.random() * colors.length)];
        const today = new Date();
        const curTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

        setInputText('')
        if (inputText.length > 0) {
            setMessages([...messages, { message: inputText, user: user_list[Math.floor(Math.random() * user_list.length)], TimeNow: curTime, color: random_color, use: user_list }])
        }
        localStorage.remove("status")
    }

    const onChange = (e) => {
        const input_text = e.target.value
        setInputText(input_text)
        if (e.target.value.includes('@')) {
            setAtPresent(true)
        }
    }

    const onEmojiClick = (event) => {
        console.log(event.emoji)
        setInputText(inputText + event.emoji)
        setEmojiPresent(false)
    };

    const clickEmojiIcon = () => {
        setEmojiPresent(!emojiPresent)
    }

    const onClickUserNames = (details) => {
        setInputText(inputText + details)
        setAtPresent(false)
    }

    const logoutButton = () => {
        localStorage.removeItem("status")
        const { history } = props
        history.replace('/login')
    }

    return (
        <div className='chat-message-container'>
            <div className='user-details-section'>
                <div className='d-flex gap-3 align-items-center'>
                    <span className='userName-first-letter'><span className='online-dot'></span>B</span>
                    <div className='d-flex flex-column'>
                        <span className='userDetails-name'>BhagyaLaxmi</span>
                        <span className='userDetails-address'>Bangalore</span>
                    </div>
                    <Button className='logout-btn' variant="outline-warning" onClick={logoutButton}>logout</Button>{' '}
                </div>
                <div className='contact-names-section'>
                    <div className='conversations'>
                        <span>Conversations</span>
                        <span className='add-convo'><AiOutlinePlusCircle /></span>
                    </div>
                    {user_list.slice(0, 4).map(user => <div className='conversation'><span className='convo-logo'>#</span><span>{user}</span></div>)}
                </div>
            </div>

            <div className='chat-section'>
                <div className="emoji-picker-container">
                    {emojiPresent && <Picker onEmojiClick={onEmojiClick} height={500} width={300} />}
                </div>
                <div className='messages'>
                    {messages.length > 0 && messages.map(item => (
                        <Message message={item.message} user={item.user} TimeNow={item.TimeNow} color={item.color} />
                    ))}

                </div>
                {atPresent && <div className='suggestions'>{user_list.map(user => (<UserNames onClickUserNames={onClickUserNames} value={user} key={user} details={user} />))}</div>}
                <div className='input-field'>
                    <input type='text' placeholder='Type Here' onChange={onChange} value={inputText} />
                    <button className='emoji-button' onClick={clickEmojiIcon}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/1200px-Twemoji_1f600.svg.png' height={25} width={25} /></button>
                    <button className='send-icon-button' onClick={clickSendMessage}><i className='send-icon'><FiSend color='white' /></i></button>
                </div>

            </div>
        </div>
    )
}
export default ChatApp


