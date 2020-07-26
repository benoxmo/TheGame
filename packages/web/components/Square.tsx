import { FC } from 'react';
import { useDrag } from 'react-dnd';

import { SquareContainer } from '../styles/Mapping';

export interface SquareProps {
    id: number;
    type: string;
    left: number;
    top: number;
    width: number;
    height: number;
}

export const SquareComponent: FC<SquareProps> = ({ id, type, left, top, width, height }) => {
    const [, drag] = useDrag({
        item: { id, type, left, top }
    })

    return (
        <SquareContainer ref={drag} style={{ left, top, width, height }}/>
    )
}