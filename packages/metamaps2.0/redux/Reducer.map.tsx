import update from 'immutability-helper';
import { AnyAction } from 'redux';

import { SquareColor, CircleColor } from '../theme/Theme.colors';

import { State } from './Reducer';

export interface MapState {
    map: {
        loading: boolean;
        error: boolean;
        errorMessage: string;

        data: Array<any>;
    };
}

export const MapInitialState: MapState = {
    map: {
        loading: false,
        error: false,
        errorMessage: '',

        data: [],
    },
}

export function MapActions(State: State, Action: AnyAction): State {
    switch (Action.type) {
        case 'MAP_CONNECT_NODES':
            const Connection = {
                id: `s${Action.data.source}-t${Action.data.target}`,
                ...Action.data,
                animated: true,
            };

            return update(
                State,
                { map: { data: { $push: [Connection] } } },
            );
        case 'MAP_ADD_SQUARE':
            const Square = {
                id: State.map.data.length + 1,
                animated: true,
                type: '',
                style: { background: SquareColor, width: 100, height: 100 },
                position: { x: 100, y: 100 },
                data: { label: '' },
            };

            return update(
                State,
                { map: { data: { $push: [Square] } } },
            );
        case 'MAP_ADD_CIRCLE':
            const Circle = {
                id: State.map.data.length + 1,
                animated: true,
                type: 'default',
                style: { background: CircleColor, width: 100, height: 100, borderRadius: '50%' },
                position: { x: 100, y: 100 },
                data: { label: '' },
            };

            return update(
                State,
                { map: { data: { $push: [Circle] } } },
            );
        default:
            return State
    }
}