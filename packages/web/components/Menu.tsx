import { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button } from '@chakra-ui/core';

import { MenuContainer } from '../styles/Menu';
import { WhiteColor, ButtonColor } from '../styles/Styles';

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
                        backgroundColor={ButtonColor}
                        color={WhiteColor}
                        onClick={(e: any) => {
                            this.props.dispatch({ type: 'CREATE_SQUARE' })
                        }}
                        >Square</Button>
                    <Button
                        size="sm"
                        leftIcon="plus-square"
                        backgroundColor={ButtonColor}
                        color={WhiteColor}
                        onClick={(e: any) => {
                            this.props.dispatch({ type: 'CREATE_CIRCLE' })
                        }}
                        >Circle</Button>
                    <Button
                        size="sm"
                        leftIcon="plus-square"
                        backgroundColor={ButtonColor}
                        color={WhiteColor}
                        onClick={(e: any) => {
                            this.props.dispatch({ type: 'CREATE_LINE' })
                        }}
                        >Line</Button>
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