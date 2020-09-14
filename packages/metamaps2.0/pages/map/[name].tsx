import React from 'react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { connect } from 'react-redux';

import { State } from '../../redux/Reducer';

import { AppContainer } from '../../theme/Theme.components';
import { Metamask } from '../../components/shared/Metamask';
import { MapMenu } from '../../components/map/Map.menu';
import { MapContainer } from '../../components/map/Map.container';

export interface MapProps {
  dispatch: any;
}

export const MapComponent: FC<MapProps> = ({ dispatch }) => {
    const router = useRouter();
    const { name } = router.query;

    return(
        <AppContainer>
          <Metamask/>
          <MapMenu name={name}/>
          <MapContainer/>
        </AppContainer>
    )
}

export default connect(
  (State: State) => ({

  })
)(MapComponent);
