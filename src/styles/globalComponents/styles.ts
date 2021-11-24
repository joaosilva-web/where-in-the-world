import styled from "styled-components";

interface InterfaceContainerProps {
    flexDirection?: string;
}

export const Container = styled.div<InterfaceContainerProps>`
    display: flex;
    justify-content: space-between;
    flex-direction: ${props => props.flexDirection || "row"};
    align-items: center;
    margin: 0 auto;
    
    width: 1440px;
`