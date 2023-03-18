import React from 'react';
import { Container } from '../../globalStyles';

const MessageList = ({ messages }) => {
    return (
        <Container
        
            style={{ height: '70vh', overflowY: 'auto' }}
        >
            {messages.map((message) => (
                <div className="message mx-3 mb-3" key={message.id}>
                    <span className="user text-primary">{message.user}: </span>
                    {message.public_url ? (
                        <video
                            src={message.public_url}
                            className="px-1"
                            style={{ height: '70px', width: '100px' }}
                            controls
                        ></video>
                    ) : (
                        <span>{message.text}</span>
                    )}
                </div>
            ))}
        </Container>
    );
};

export default MessageList;