import thunk from 'redux-thunk';
import { createStore, AnyAction, applyMiddleware, compose } from 'redux';
import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper';

import { Square, Circle, Line } from './Types';

export interface State {
    menu: boolean;
    menuX: number;
    menuY: number;
    squares: Array<Square>;
    circles: Array<Circle>;
    lines: Array<Line>;
};

export const initialState = {
    menu: false,
    menuX: 0,
    menuY: 0,
    squares: [
        {
            type: 'SQUARE',
            left: 100,
            top: 100,
            width: 100,
            height: 100,
        }
    ],
    circles: [],
    lines: [],
};

export function reducer(state: State = initialState, action: AnyAction) {
    console.log(state);
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload }
        case 'TOGGLE_MENU':
            state.menu = action.value;
            if (action.x) { state.menuX = action.x; }
            if (action.y) { state.menuY = action.y; }
            return { ...state };
        case 'CREATE_SQUARE':
            state.squares = state.squares.concat({
                type: 'SQUARE',
                left: state.menuX,
                top: state.menuY,
                width: 100,
                height: 100,
            });
            return { ...state };
        case 'UPDATE_POSITION':
            switch(action.object) {
                case 'SQUARE':
                    state.squares = state.squares.map((square, index) => {
                        if (action.index === index) {
                            square.left = action.left;
                            square.top = action.top;
                        }
                        return square;
                    })
            }
            return { ...state };
    }

    return state;
}

export type RootState = ReturnType<typeof reducer>;

export const makeStore: MakeStore<State> = (context: Context) => createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export const wrapper = createWrapper<State>(makeStore, {debug: true});