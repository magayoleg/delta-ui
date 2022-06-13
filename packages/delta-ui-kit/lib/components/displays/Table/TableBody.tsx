import { jsx } from '@theme-ui/core';
import { forwardRef, HTMLAttributes } from 'react';
import { Box, BoxProps } from '../../containers';

export interface TableBodyProps
  extends HTMLAttributes<HTMLTableSectionElement> {}

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ ...rest }, ref) => {
    return (
      <tbody
        ref={ref}
        role="thead"
        sx={{
          '& > div[role=row]': {
            borderBottom: '1px solid',
            borderBottomColor: 'border',
          },
        }}
        {...rest}
      />
    );
  }
);