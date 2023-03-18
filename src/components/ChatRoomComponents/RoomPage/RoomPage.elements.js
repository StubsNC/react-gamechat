import styled from 'styled-components';

export const RoomSec = styled.div`
    color: #f4f5fc;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 65vh;
    background: #24293e;
`;

export const RoomContainer = styled.div`
    justify-content: center;
    align-items: center;
`;

export const RoomComponent = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    padding: 24px;
    color: #f4f5fc;
`;

export const RoomSubHeading = styled.p`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
    margin-bottom: 24px;
    font-size: 24px;
`;

export const RoomSubText = styled.p`
    margin-bottom: 24px;
    font-size: 20px;
`;

export const RoomRow = styled.div`
    display: flex;
    margin: 0 15px 15px 15px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const RoomColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const RoomForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        width: 80%;
    }
    `;