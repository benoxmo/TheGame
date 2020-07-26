import { FC } from 'react';
import { connect } from 'react-redux';
import { useDrop, XYCoord } from 'react-dnd';

import { MappingContainer } from '../styles/Mapping';
import { Square, Circle, Line } from '../redux/Types';
import { SquareComponent } from './Square';

export interface ContainerProps {
  dispatch: any;
  squares: Array<Square>;
}

export const ContainerComponent: FC<ContainerProps> = ({ dispatch, squares }) => {
  const [, drop] = useDrop({
    accept: ['SQUARE', 'CIRCLE', 'LINE'],
    drop(item: any, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);

      console.log(item, left, top);

      dispatch({ type: 'UPDATE_POSITION', object: item.type, index: item.id, left, top })
    }
  });

  return(
    <MappingContainer ref={drop}>
      {
        squares.map((square, id) => {
          return(
            <SquareComponent id={id} type={'SQUARE'} left={square.left} top={square.top} width={square.width} height={square.height}/>
          )
        })
      }
    </MappingContainer>
  )
}

export const Container = connect(
  (state: any) => ({
    squares: state.squares
  })
)(ContainerComponent);