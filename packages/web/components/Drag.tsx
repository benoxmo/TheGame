import { FC, useState } from 'react';
import { Container } from './Container'

export const Drag: FC = () => {
    const [hideSourceOnDrag] = useState(true)

    return (
        <Container hideSourceOnDrag={hideSourceOnDrag} />
    )
}