import Box from '3box';

declare const window: any;

export async function LoadNavigation(account: string) {
    return async function(dispatch: any) {
        try {
            dispatch({ type: 'LOADING', value: true });

            const box = await Box.openBox(account, window.ethereum);
            await box.syncDone;
            const space = await box.openSpace('__navigation');
            const data = await space.public.get('items');

            dispatch({ type: 'LOADED_NAVIGATION', data: data ? JSON.parse(data) : [] });
            dispatch({ type: 'LOADING', value: false });
        } catch (error) {
            console.error(error);
            dispatch({ type: 'LOADED_NAVIGATION', data: [] });
            dispatch({ type: 'LOADING', value: false });
        }
    }
}

export async function SaveNavigation(account: string, data: Array<any>) {
    return async function(dispatch: any) {
        try {
            dispatch({ type: 'LOADING', value: true });

            const box = await Box.openBox(account, window.ethereum);
            await box.syncDone;
            const space = await box.openSpace('__navigation');
            await space.public.set('items', JSON.stringify(data));

            dispatch({ type: 'SAVED_NAVIGATION' });
            dispatch({ type: 'LOADED_NAVIGATION', data });
            dispatch({ type: 'LOADING', value: false });
        } catch (error) {
            console.error(error);
            dispatch({ type: 'SAVED_NAVIGATION_ERROR' });
            dispatch({ type: 'LOADING', value: false });
        }
    }
}