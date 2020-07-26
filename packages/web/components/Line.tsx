import { FC } from 'react';
import { useDrag } from 'react-dnd';

import { LineContainer } from '../styles/Mapping';

export interface LineProps {
    id: number;
    type: string;
    left: number;
    top: number;
    x2: number;
    y2: number;
}

export const LineComponent: FC<LineProps> = ({ id, type, left, top, x2, y2 }) => {
    const [, drag] = useDrag({
        item: { id, type, left, top }
    })

    return (
        <LineContainer
            ref={drag}
            style={{ left, top, width: 5, height: 100 }}
        />
    )
}