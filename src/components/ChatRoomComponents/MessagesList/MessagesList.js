import React from 'react';
import { Container } from '../../../globalStyles';

const MessageList = ({ messages }) => {
    return (
        <Container style={{ height: '70vh', overflowY: 'auto' }}>
            {messages.map((message) => (
                <div className="message mx-3 mb-3" key={message.id}>
                    {message.public_url ? (
                        <>
                            <span>{message.user}: </span>
                            <video
                                src={message.public_url}
                                className="px-1"
                                style={{ height: '70px', width: '100px' }}
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
