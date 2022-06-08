import { table } from 'console';
import { jsx } from '@theme-ui/core';
import { forwardRef, HTMLAttributes } from 'react';
import { Box, BoxProps } from '../../containers';

export interface TableRowPropsProps extends BoxProps {}

export const DataGridRow = forwardRef<HTMLDivElement, TableRowPropsProps>(
  ({ ...rest }, ref) => {
    return (
      <Box
        ref={ref}
        role="row"
        sx={{
          height: 4,
          px: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          '&:hover, &:active, &:focus-visible': {
            backgroundColor: 'rgba(255,255,255,.02)',
          },
        }}
        {...rest}
      />
    );
  }
);
