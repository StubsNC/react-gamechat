import React, { useState, useRef } from "react";
import { Auth } from "./Auth";
import {  Row, Col } from 'react-bootstrap';
import { Container, Button } from "../../globalStyles";



import Cookies from 'universal-cookie';
import ChatRoom from "./Chatroom";
const cookies = new Cookies()


function Room() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [room, setRoom] = useState(null)
  const roomInputRef = useRef(null)

  if (!isAuth) {
    return (
      <div>
        <Auth setISAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <>
      {room ? (
        <ChatRoom room={room} />
      ) : (
        <Container >
          <div>
            <Row>
              <Col>
                <label>Enter Room Name:</label>
              </Col>
              <Col xs={8}>
                <div >
                  <input type="text" ref={roomInputRef} />
                  <div >
                    <Button type="button" onClick={() => setRoom(roomInputRef.current.value)}>
                      Enter Chat
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      )}
    </>

  )
}

export default Room;


// 46:06