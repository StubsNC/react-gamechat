import React, { useEffect, useRef, useState } from 'react';
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy, limitToLast } from 'firebase/firestore';
import { db, auth } from '../firebase-config';

import MessagesList from '../MessagesList/MessagesList';
import Header from '../ChatRoomHeader/Header';
import ChatForm from '../Chatform/ChatForm';
import ChatModal from '../ChatModal';
import { ChatRoomContainer, HeaderContainer, MessageListContainer, MessageFormContainer } from './ChatRoom.elements';

const ChatRoom = (props) => {
    const { room } = props;
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([])
    
    const messagesEndRef = useRef(null)

    const textMessage = 'textMessage'
    const messagesRef = collection(db, "messagesChat");

    useEffect(() => {
        const queryMessages = query(
            messagesRef,
            where("room", "==", room),
            orderBy("createdAt")
        );
        const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
            let messages = [];
            snapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id })
            })
            setMessages(messages)
        })
        return () => unsubscribe();
    }, [room])


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (newMessage === "") return;
        await addDoc(messagesRef, {
            type: textMessage,
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            photoURL: auth.currentUser.photoURL, // Add the photoURL property
            room,
        })
        setNewMessage("")
    }

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight
        }
    };

    return (
        <div>
        <ChatRoomContainer>
            <ChatModal />
            <MessageListContainer>
                <HeaderContainer>
                    <Header room={room} />
                </HeaderContainer>
                <MessagesList
                    messages={messages}
                    messagesEndRef={messagesEndRef}
                    scrollToBottom={scrollToBottom}
                />
                <ChatForm
                    handleSubmit={handleSubmit}
                    newMessage={newMessage}
                    setNewMessage={setNewMessage}
                />
            </MessageListContainer>
        </ChatRoomContainer>
    </div>
    )
}

export default ChatRoom;
