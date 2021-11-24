import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    box-shadow: 0px 8px 10px -6px rgba(0,0,0,0.18);

    height: 80px;
    width: 100%;

    button {
        width: 85px;
        display: flex;
        align-items: baseline;
        justify-content: space-between;

        p{
            font-weight: 800;
        }
    }
`