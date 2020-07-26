import styled from 'styled-components';
import { SquareColor } from './Styles';

export const MappingContainer = styled.div`
    position: relative;
    width: calc(100vw - 280px);
    height: 100vh;
`;

export const SquareContainer = styled.div`
    position: absolute;
    background: ${SquareColor};
    color: white;
`;