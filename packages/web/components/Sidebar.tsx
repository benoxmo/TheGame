import { FC } from 'react';
import {
    Flex,
    FormControl,
    FormLabel,
    Button
} from "@chakra-ui/core";

import { SidebarContainer } from '../styles/Sidebar';

export const Sidebar: FC = () => {
    return(
        <SidebarContainer>
            <FormControl>
                <div className="portrait-box">

                </div>
                <Flex justify="center">
                    <Flex className="input" justify="space-between" align="center">
                        <FormLabel>Width</FormLabel>
                        <input type="number"/>
                    </Flex>
                    <Flex className="input" justify="space-between" align="center">
                        <FormLabel>Height</FormLabel>
                        <input type="number"/>
                    </Flex>
                </Flex>

                <Button size="md">
                    Change Image
                </Button>

                <Button size="lg">
                    Generate Sprite
                </Button>
            </FormControl>
        </SidebarContainer>
    )
}