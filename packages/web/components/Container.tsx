import { FC } from 'react';
import { connect } from 'react-redux';
import { useDrop, XYCoord } from 'react-dnd';

import { MappingContainer } from '../styles/Mapping';

import { SquareComponent } from './Square';
import { CircleComponent } from './Circle';
import { LineComponent } from './Line';

export interface ContainerProps {
  dispatch: any;
  items: Array<any>;
}

export const ContainerComponent: FC<ContainerProps> = ({ dispatch, items }) => {
  const [, drop] = useDrop({
    accept: ['SQUARE', 'CIRCLE', 'LINE'],
    drop(item: any, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);

      dispatch({ type: 'UPDATE_POSITION', object: item.type, index: item.id, left, top })
    }
  });

  return(
    <MappingContainer ref={drop}>
      {
        items.map((item, id) => {
          switch (item.type) {
            case 'SQUARE':
              return(
                <SquareComponent
                  id={id}
                  type={item.type}
                  left={item.left}
                  top={item.top}
                  width={item.width}
                  height={item.height}/>
              )
            case 'CIRCLE':
              return(
                <CircleComponent
                  id={id}
                  type={item.type}
                  left={item.left}
                  top={item.top}
                  width={item.width}
                  height={item.height}/>
              )
            case 'LINE':
              return(
                <LineComponent
                  id={id}
                  type={item.type}
                  left={item.left}
                  top={item.top}
                  x2={item.x2}
                  y2={item.y2}/>
              )
            default: 
                return(
                  <div/>
                )
          }
        })
      }
    </MappingContainer>
  )
}

export const Container = connect(
  (state: any) => ({
    items: state.items,
  })
)(ContainerComponent);