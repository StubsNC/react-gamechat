import React from 'react';
import { useEffect, useRef } from 'react';
import './MessagesList.css'
import { Container } from '../../../globalStyles';
import { auth } from '../../../components/ChatRoomComponents/firebase-config';


const MessageList = ({ messages }) => {
    const currentUser = auth.currentUser.displayName;
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <Container ref={messagesEndRef} style={{ height: '70vh', overflowY: 'auto' }}>
            {messages.map((message) => (
                <div
                    className={` ${message.user === currentUser ? 'current-user' : ''}`}
                    key={message.id}
                >
                    {message.public_url ? (
                        <>
                            <span>{message.user}: </span>

                            <video
                                src={message.public_url}
                                className="px-1"
                                style={{
                                    height: '100px',
                                    width: '150px',
                                    borderRadius: '5px',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                    border: '1px solid rgba(0, 0, 0, 0.1)',
                                    objectFit: 'fill',
                                }}
                                controls
                            ></video>

                        </>
                    ) : (
                        <>
                            {message.photoURL ? (
                                <img
                                    src={message.photoURL}
                                    alt={message.user}
                                    style={{ height: '30px', width: '30px', borderRadius: '50%', marginRight: '5px' }}
                                />
                            ) : (
                                <span>{message.user}: </span>
                            )}
                            <span>{message.text}</span>
                        </>
                    )}
                </div>
            ))}
        </Container>
    );
};

export default MessageList;
