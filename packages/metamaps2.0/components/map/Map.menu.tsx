import React from 'react';
import { FC } from 'react';
import { connect } from 'react-redux';

import { State } from '../../redux/Reducer';

import { CgShapeSquare, CgShapeCircle, CgImage, CgFormatText } from 'react-icons/cg';
import { Tooltip, Button } from '@chakra-ui/core';
import { MapMenuContainer } from './style/Map.menu.style';

export interface MapMenuProps {
    dispatch: any;
    name: string;
};

export const MapMenuComponent: FC<MapMenuProps> = ({ dispatch, name }) => {
    return(
        <MapMenuContainer>
            <div className="image">
                <img src={require('../../image/logo.png')}/>
            </div>
            <h2>{name}</h2>
            <Tooltip aria-label="Add Text" label="Add Text" placement="bottom">
                <Button
                    variantColor="purple">
                    <CgFormatText/>
                </Button>
            </Tooltip>

            <Tooltip aria-label="Add an Image" label="Add an Image" placement="bottom">
                <Button
                    variantColor="purple">
                    <CgImage/>
                </Button>
            </Tooltip>

            <Tooltip aria-label="Add a Circle" label="Add a Circle" placement="bottom">
                <Button
                    onClick={e => dispatch({ type: 'MAP_ADD_CIRCLE' })}
                    variantColor="purple">
                    <CgShapeCircle/>
                </Button>
            </Tooltip>

            <Tooltip aria-label="Add a Square" label="Add a Square" placement="bottom">
                <Button
                    onClick={e => dispatch({ type: 'MAP_ADD_SQUARE' })}
                    variantColor="purple">
                    <CgShapeSquare/>
                </Button>
            </Tooltip>
        </MapMenuContainer>
    );
}

export const MapMenu = connect(
    (State: State) => ({

    })
)(MapMenuComponent);