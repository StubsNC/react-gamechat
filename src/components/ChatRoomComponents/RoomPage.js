import React, { useState, useRef } from "react";
import { Auth } from "./Auth";
import {  Row, Col } from 'react-bootstrap';
import { Container } from "../../globalStyles";



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
        <Container className="p-5 bg-light">
          <div className="container border border-primary border-3 rounded p-2">
            <Row className="font-weight-bold text-justify p-2 align-items-center">
              <Col xs={4}>
                <label className="mr-2">Enter Room Name:</label>
              </Col>
              <Col xs={8}>
                <div className="input-group">
                  <input type="text" className="form-control" ref={roomInputRef} />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button" onClick={() => setRoom(roomInputRef.current.value)}>
                      Enter Chat
                    </button>
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