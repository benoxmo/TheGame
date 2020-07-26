import styled from 'styled-components';
import { SquareColor, CircleColor, LineColor } from './Styles';

export const MappingContainer = styled.div`
    position: relative;
    width: calc(100vw - 280px);
    height: 100vh;
`;

export const SquareContainer = styled.div`
    position: absolute;
    background: ${SquareColor};
    border-radius: 8px;
`;

export const CircleContainer = styled.div`
    position: absolute;
    background: ${CircleColor};
    border-radius: 50%;
`;

export const LineContainer = styled.div`
    position: absolute;
    background: ${LineColor};
    border-radius: 8px;
`;