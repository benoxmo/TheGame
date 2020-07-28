import { Component } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { connect } from 'react-redux';

import { App } from '../styles/App';
import { Container } from '../components/Container';
import { Menu } from '../components/Menu';
import { Popup } from '../components/Popup';

export interface HomeProps {
  dispatch: any;
  menu: boolean;
}

export class Home extends Component<HomeProps> {
  public render() {
    return(
      <App
        onContextMenu={(e: any) => {
            e.preventDefault();
            this.props.dispatch({
              type: 'TOGGLE_MENU',
              value: true,
              x: e.pageX,
              y: e.pageY,
              menuType: e.target.getAttribute('data-type'),
              id: e.target.getAttribute('data-id')
            })
          }
        }
        onClick={(e: any) => {
            const target = e.target.getAttribute('data-type');
            if (target !== 'no-left-click') {
              this.props.dispatch({ type: 'CLOSE_MENU' })
            }
          }
        }
        onMouseMove={(e: any) => {
          this.props.dispatch({ type: 'MOUSE_POSITION', x: e.pageX, y: e.pageY });
        }}
      >
      <Popup/>
      <DndProvider backend={HTML5Backend}>
        <Container/>
        <Menu/>
      </DndProvider>
    </App>
    )
  }
}

export default connect(
  (state: any) => ({
    menu: state.menu
  })
)(Home);
