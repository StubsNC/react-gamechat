import React from 'react';
import { Row, Container, Col, Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import { CustomButton, CustomInput } from './ChatForm.elements';

const FormInput = ({ handleSubmit, newMessage, setNewMessage }) => {
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col xs={8}>
                        <CustomInput
                            placeholder="Type your message here..."
                            onChange={(e) => setNewMessage(e.target.value)}
                            value={newMessage}
                        />
                    </Col>
                    <Col xs={4}>
                        <div>
                            <CustomButton type="submit">Send</CustomButton>
                        </div>
                    </Col>
                </Row>
            </form>
        </Container>
    );
};

export default FormInput;

