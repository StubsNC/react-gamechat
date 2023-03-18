import React, { useEffect, useRef, useState } from 'react';
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy, limitToLast } from 'firebase/firestore';
import { db, auth } from './firebase-config';
import { Button } from 'react-bootstrap';
import { Link, Route, Routes, Outlet } from 'react-router-dom';
import MessagesList from './MessagesList';
import Header from './Header';
import ChatForm from './ChatForm';
import ChatModal from './ChatModal';
import { ChatRoomContainer, HeaderContainer, MessageListContainer } from './ChatRoom.elements';

const ChatRoom = (props) => {
    const { room } = props;
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([])
    const [videos, setVideos] = useState([])
    const [gamertags, setGamertags] = useState([])
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
            room,
        })
        setNewMessage("")
    }

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight
        }
    }, [messages])

    return (
        <div >
            <ChatRoomContainer>
                <HeaderContainer>
                    <Header room={room} />
                </HeaderContainer>
                <ChatModal />
                <MessageListContainer>
                    <MessagesList messages={messages} messagesEndRef={messagesEndRef} />
                    <ChatForm handleSubmit={handleSubmit} newMessage={newMessage} setNewMessage={setNewMessage} />
                </MessageListContainer>
            </ChatRoomContainer>
        </div>
    )
}

export default ChatRoom;
