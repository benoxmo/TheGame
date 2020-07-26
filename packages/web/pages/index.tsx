import { Component } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { connect } from 'react-redux';

import { App } from '../styles/App';
import { Container } from '../components/Container';
import { Menu } from '../components/Menu';

export interface HomeProps {
  dispatch: any;
  menu: boolean;
}

export class Home extends Component<HomeProps> {
  public render() {
    return(
      <App
        onContextMenu={(e: any) => {
            e.preventDefault()
            this.props.dispatch({ type: 'TOGGLE_MENU', value: true, x: e.pageX, y: e.pageY })
          }
        }
        onClick={(e: any) => {
            e.preventDefault()
            this.props.dispatch({ type: 'TOGGLE_MENU', value: false })
          }
        }
      >
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
