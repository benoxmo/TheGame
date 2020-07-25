import styled from 'styled-components';
import { ForegroundColor, SidebarColor } from './Styles';

export const SidebarContainer = styled.div`
    background: ${SidebarColor};
    width: 280px;
    height: 100%;

    div.portrait-box {
        width: 240px;
        height: 240px;
        border: 2px solid white;
        border-radius: 8px;
        margin: 15px auto;
    }

    div.input {
        width: auto;
        padding: 0 15px;

        label {
            color: ${ForegroundColor};
            font-size: 14px;
        }

        input {
            width: 50px;
            border-radius: 5px;
        }
    }

    button {
        display: block;
        margin: 15px auto;
    }
`;