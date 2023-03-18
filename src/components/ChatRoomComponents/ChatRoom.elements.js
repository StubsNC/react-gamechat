import styled from 'styled-components';

export const ChatRoomContainer = styled.div`
    color: #f4f5fc;
    padding: 30px 80px;
    background: ${({ lightBg }) => (lightBg ? '#f4f5fc' : '#24293e')};
    

`;

export const HeaderContainer = styled.header`
    text-align: center;
    margin: 0 auto;
    position: relative;
    width: 2560px;
    height: 54px;
    position: relative;
    margin-left: -1280px;
    left: 50%;
`

export const MessageListContainer = styled.div`
    justify-content: center;
    align-items: center;
    border: solid 3px white;
`;