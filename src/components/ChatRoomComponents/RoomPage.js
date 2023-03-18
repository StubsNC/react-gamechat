import React, { useState, useRef } from "react";
import { Auth } from "./Auth";
import { Row, Col } from 'react-bootstrap';
import { Container, Button } from "../../globalStyles";
import { RoomSec, RoomRow, RoomColumn, RoomForm, RoomContainer, RoomSubHeading, RoomSubText, RoomComponent } from './RoomPage.elements'
import { FooterSubHeading, FooterSubscription, FooterSubText } from "../Footer/Footer.elements";


import Cookies from 'universal-cookie';
import ChatRoom from "./Chatroom";
import { FormInput } from "../Footer/Footer.elements";
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
        <RoomSec>
          <Container >
            <RoomContainer>
              <RoomComponent>
                <RoomSubHeading>
                  Join our exclusive membership to receive the latest news and trends
                </RoomSubHeading>
                <RoomSubText>Remember to be careful of who you share your room key with!</RoomSubText>
                <RoomForm >
                  <FormInput type="text" ref={roomInputRef} />
                  <Button fontBig type="button" onClick={() => setRoom(roomInputRef.current.value)}>
                    Enter Chat
                  </Button>
                </RoomForm>
              </RoomComponent>
            </RoomContainer>
          </Container>
        </RoomSec>
      )}
    </>

  )
}

export default Room;


// 46:06