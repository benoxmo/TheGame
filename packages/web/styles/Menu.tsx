import styled from 'styled-components';
import { PopupColor } from './Styles';

export const MenuContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    border-radius: 8px;
    background: ${PopupColor};

    display: flex;
    align-items: center;
    padding: 10px 15px;
    transition: left, top, opacity 0.25s cubic-bezier(0.45, 0, 0.55, 1);
    opacity: 0;
`;