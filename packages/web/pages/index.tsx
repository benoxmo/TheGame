import { FC } from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { App, Container } from '../styles/Container';
import { Drag } from '../components/Drag';
import { Sidebar } from '../components/Sidebar';

const Home: FC = () => (
  <App>
    <Sidebar/>
    <Container>
      <DndProvider backend={HTML5Backend}>
        <Drag/>
      </DndProvider>
    </Container>
  </App>
);

export default Home;
