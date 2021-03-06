import {
  Button,
  ButtonGroup,
  EmailIcon,
  Icon3box,
  MetaHeading,
} from '@metafam/ds';
import NextLink from 'next/link';
import React from 'react';

import { FlexContainer } from './Container';

export const RegisterPlayer: React.FC = () => {
  return (
    <FlexContainer flex={1}>
      <MetaHeading m={5}>Register your Player account</MetaHeading>
      <ButtonGroup spacing={5} mt={20}>
        <RegisterButton textTransform="uppercase">
          <Icon3box mr={2} /> box
        </RegisterButton>
        <RegisterButton>GitHub</RegisterButton>
        <RegisterButton>
          <EmailIcon mr={2} />
          Email
        </RegisterButton>
      </ButtonGroup>
    </FlexContainer>
  );
};

type ButtonProps = React.ComponentProps<typeof Button>;

const RegisterButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <NextLink href="/profile/success">
    <Button variant="outline" size="lg" p={8} alignItems="center" {...props}>
      {children}
    </Button>
  </NextLink>
);
