import React, { useState } from 'react'
import { useDrop, XYCoord } from 'react-dnd'
import update from 'immutability-helper'

import { ItemTypes } from './ItemTypes'
import { Box } from './Box'
import { DragItem } from './interfaces'

import { MappingContainer } from '../styles/Mapping';

export interface ContainerProps {
  hideSourceOnDrag: boolean
}

export interface ContainerState {
  boxes: { [key: string]: { top: number; left: number; title: string } }
}

export const Container: React.FC<ContainerProps> = ({ hideSourceOnDrag }) => {
  const [boxes, setBoxes] = useState<{
    [key: string]: {
      top: number
      left: number
      title: string
    }
  }>({
    a: { top: 20, left: 80, title: 'Drag me around' },
    b: { top: 180, left: 20, title: 'Drag me too' },
  })

  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop(item: DragItem, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)
      moveBox(item.id, left, top)
      return undefined
    },
  })

  const moveBox = (id: string, left: number, top: number) => {
    setBoxes(
      update(boxes, {
        [id]: {
          $merge: { left, top },
        },
      }),
    )
  }

  return (
    <MappingContainer ref={drop}>
      {Object.keys(boxes).map((key) => {
        const { left, top, title } = boxes[key]
        return (
          <Box
            key={key}
            id={key}
            left={left}
            top={top}
            hideSourceOnDrag={hideSourceOnDrag}
          >
            {title}
          </Box>
        )
      })}
    </MappingContainer>
  )
}