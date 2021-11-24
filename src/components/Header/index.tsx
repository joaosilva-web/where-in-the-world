import * as S from "./styles";
import { BsMoon } from "react-icons/bs"
import * as Component from "../../styles/globalComponents/styles";

export function Header() {
    return(
            <S.Header>
                <Component.Container>
                    <h1>Where in the world?</h1>

                    <button>
                        <BsMoon/> <p>Dark Mode</p>
                    </button>
                </Component.Container>
        </S.Header>
        
    )
}