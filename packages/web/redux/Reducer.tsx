import thunk from 'redux-thunk';
import { createStore, AnyAction, applyMiddleware, compose } from 'redux';
import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper';

export interface State {
    menu: boolean;
    menuX: number;
    menuY: number;
    items: Array<any>;
};

export const initialState = {
    menu: false,
    menuX: 0,
    menuY: 0,
    items: [
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
            state.items = state.items.concat({
                type: 'SQUARE',
                left: state.menuX,
                top: state.menuY,
                width: 100,
                height: 100,
            });
            return { ...state };
        case 'CREATE_CIRCLE':
            state.items = state.items.concat({
                type: 'CIRCLE',
                left: state.menuX,
                top: state.menuY,
                width: 100,
                height: 100,
            });
            return { ...state };
        case 'CREATE_LINE':
            state.items = state.items.concat({
                type: 'LINE',
                left: state.menuX,
                top: state.menuY,
                x2: state.menuX + 100,
                y2: state.menuY + 100,
            });
            return { ...state };
        case 'UPDATE_POSITION':
            state.items = state.items.map((item, index) => {
                if (action.index === index) {
                    item.left = action.left;
                    item.top = action.top;
                }
                return item;
            })
            return { ...state };
    }

    return state;
}

export type RootState = ReturnType<typeof reducer>;

export const makeStore: MakeStore<State> = (context: Context) => createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export const wrapper = createWrapper<State>(makeStore, {debug: true});