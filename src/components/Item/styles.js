import styled from 'styled-components';

export const ItemContainer = styled.div`

    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h3 {
        font-size: 32px;
        color: #fafafa;
    }

    p {
        font-size: 16px;
        color: #fafafa;
        opacity: 60%;
    }

    .containerRepor {
        display: flex;
        align-items: center;
    }

    .icon {
        margin-right: 5px;
        font-size: 20px;
    }

    a {
        color: #ffff;
        text-decoration: none;
        font-size: 15px;
    }

    a.remove {
        color: #ff0000;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    hr {
        color: #fafafa;
        opacity: 60%;
        margin: 15px 0;
    }

`
