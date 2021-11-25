import * as S from "./styles";
import { BsMoon, BsSun } from "react-icons/bs"
import { ThemeContext } from "styled-components"
import * as Component from "../../styles/globalComponents/styles";
import { useContext } from "react";

interface InterfaceHeaderProps {
    toggledTheme(): void;
}

export function Header({toggledTheme}: InterfaceHeaderProps) {
    const { title } = useContext(ThemeContext);

    return(
            <S.Header>
                <Component.Container>
                    <h1>Where in the world?</h1>

                    <label>
                        {title === 'light' ? <p><BsMoon/> Dark Mode</p> : <p><BsSun/> Light Mode</p>}
                    <input type="checkbox" onChange={toggledTheme} checked={title === 'dark'}/>
                    </label>
                </Component.Container>
        </S.Header>
        
    )
}