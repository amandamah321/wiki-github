import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    h1 {
        margin: 15px 0;
        font-weight: 900;
    }

    img {
        filter: opacity(0.6) drop-shadow(0 0 0 white) grayscale(0%) contrast(0%) brightness(2);
    }

`