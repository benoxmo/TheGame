import React from 'react';
import { FC } from 'react';
import ReactFlow, { ReactFlowProvider, Controls } from 'react-flow-renderer';
import { connect } from 'react-redux';

import { State } from '../../redux/Reducer';

import { MapContainerContainer } from './style/Map.container.style';

export interface MapContainerProps {
    dispatch: any;
    data: Array<any>;
};

export const MapContainerComponent: FC<MapContainerProps> = ({ dispatch, data }) => {
    return(
        <MapContainerContainer>
            <ReactFlowProvider>
                <ReactFlow
                    elements={data}
                    style={{ width: '100vw', height: '100vh' }}
                    nodesConnectable={true}
                    onConnect={params => dispatch({ type: 'MAP_CONNECT_NODES', data: params })}>
                        <Controls/>
                </ReactFlow>
            </ReactFlowProvider>
        </MapContainerContainer>
    );
}

export const MapContainer = connect(
    (State: State) => ({
        data: State.map.data,
    })
)(MapContainerComponent);