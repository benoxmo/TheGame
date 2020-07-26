import { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button } from '@chakra-ui/core';

import { MenuContainer } from '../styles/Menu';
import { WhiteColor, SquareColor, CircleColor, LineColor } from '../styles/Styles';

export interface MenuProps {
    dispatch: any;
    menu: boolean;
    menuX: number;
    menuY: number;
};

export class MenuComponent extends Component<MenuProps> {
    public render() {
        console.log(this.props);
        return(
            <MenuContainer style={{ left: this.props.menuX, top: this.props.menuY, opacity: this.props.menu ? 1 : 0 }}>
                <ButtonGroup spacing={4}>
                    <Button
                        size="sm"
                        leftIcon="plus-square"
                        backgroundColor={SquareColor}
                        color={WhiteColor}
                        onClick={(e: any) => {
                            this.props.dispatch({ type: 'CREATE_SQUARE' })
                        }}
                        >Square</Button>
                    <Button
                        size="sm"
                        leftIcon="plus-square"
                        backgroundColor={CircleColor}
                        color={WhiteColor}>Circle</Button>
                    <Button
                        size="sm"
                        leftIcon="plus-square"
                        backgroundColor={LineColor}
                        color={WhiteColor}>Line</Button>
                </ButtonGroup>
            </MenuContainer>
        )   
    }
}

export const Menu = connect(
(state: any) => ({
    menu: state.menu,
    menuX: state.menuX,
    menuY: state.menuY,
})
)(MenuComponent);