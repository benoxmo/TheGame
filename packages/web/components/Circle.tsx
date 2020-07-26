import { FC } from 'react';
import { useDrag } from 'react-dnd';

import { CircleContainer } from '../styles/Mapping';

export interface CircleProps {
    id: number;
    type: string;
    left: number;
    top: number;
    width: number;
    height: number;
}

export const CircleComponent: FC<CircleProps> = ({ id, type, left, top, width, height }) => {
    const [, drag] = useDrag({
        item: { id, type, left, top }
    })

    return (
        <CircleContainer
            ref={drag}
            style={{ left, top, width, height }}
        />
    )
}