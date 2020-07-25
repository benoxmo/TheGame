import { FC } from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'

import { BoxContainer } from '../styles/Mapping';

export interface BoxProps {
  id: any
  left: number
  top: number
  hideSourceOnDrag?: boolean
}

export const Box: FC<BoxProps> = ({ id, left, top, hideSourceOnDrag, children }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: ItemTypes.BOX },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />
  }

  return (
    <BoxContainer ref={drag} style={{ left, top }}>
      {children}
    </BoxContainer>
  )
}
