import styled from "styled-components";

interface flagProps{
    key?: string;
    flag?: string;
}

export const CountriesContent = styled.div`
    display: flex;
    flex-direction: row;

    margin-top: 60px;
    width: 100%;

    header {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    section {
        display: grid;
        grid-template-columns: auto auto auto auto;
        gap: 80px;
    }

`

export const SearchInput = styled.div`
    display: flex;
    align-items: center;

    height: 50px;
    width: 500px;
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.inputText};

    margin-bottom: 60px;

    label {
        display: flex;
        align-items: center;

        margin: 0 32px;

        width: 100%;

        input {
            background: transparent;
            border: 0;
            margin-left: 18px;
            
            ::placeholder {
                color: gray;
                font-family: 'Nunito Sans', sans-serif;
            }
        }
    }
`

export const Select = styled.details`
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    width: 200px;
    height: 50px;
    background:${props => props.theme.colors.secondary};
    border-radius: 8px;
    padding: 0 10px;
    
    ul {
        width: 200px;
        position: absolute;
        top: 55px;
        left: 0;
        
        display: flex;
        flex-direction: column;
        
        background: ${props => props.theme.colors.secondary};
        border-radius: 8px;
        padding: 10px;
        list-style: none;
        

        button {
            color: ${props => props.theme.colors.text};
            cursor: pointer;
        }
    }
    

    summary {
        display: flex;
        flex-direction: row;
        align-self: center;
        justify-content: space-between;

        position: relative;
        top: 50%;
        transform: translateY(-50%);

        cursor: pointer;
    }
`


export const CountryCard = styled.div`
    width: 300px;
    min-height: 400px;
    background: ${props => props.theme.colors.secondary};
    border-radius: 8px;
    box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.2);

    .cardContent {
        width: 80%;
        margin: 0 auto;

        h2 {
            margin: 20px 0;
        }

        p {
            line-height: 28px;
        }
    }
`


export const Flag = styled.div<flagProps>`
        height: 200px;
        width: 100%;

        border-radius: 8px 8px 0 0;

        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        box-shadow: 0px 9px 19px -4px rgba(0,0,0,0.1);

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
`