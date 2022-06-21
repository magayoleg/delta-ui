import { Meta } from '@storybook/react';
import { jsx } from '@theme-ui/core';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { MdOutlineMail } from 'react-icons/md';
import { compact } from '../../../docs/decorators';
import { Button } from '../Button';
import { Box } from '../containers';
import { TextInput } from './TextInput';

export default {
  title: 'Inputs/TextInput',
  decorators: [compact('250px')],
} as Meta;

export const Basics = () => {
  const [shown, setShown] = useState(false);
  return (
    <Box sx={{ gap: 2, flexDirection: 'column', display: 'flex' }}>
      <TextInput
        endIcon={
          <Button tabIndex={-1}>
            <MdOutlineMail size={20} />
          </Button>
        }
        placeholder="Email"
      />
      <TextInput
        placeholder="Password"
        startIcon={
          <Button
            sx={{
              borderRadius: '100%',
              '&:hover, &:active, &:focus-visible': {
                color: 'accentOnSurface',
              },
            }}
            onClick={() => setShown(prev => !prev)}
          >
            {shown ? (
              <AiOutlineEye size={20} />
            ) : (
              <AiOutlineEyeInvisible size={20} />
            )}
          </Button>
        }
        type={shown ? 'text' : 'password'}
      />
    </Box>
  );
};
