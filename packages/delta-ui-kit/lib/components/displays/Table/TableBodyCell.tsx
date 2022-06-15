import { jsx } from '@theme-ui/core';
import { forwardRef, HTMLAttributes } from 'react';
import { Box } from '../../containers';

export interface TableBodyCellProps
  extends HTMLAttributes<HTMLTableCellElement> {}

export const TableBodyCell = forwardRef<
  HTMLTableCellElement,
  TableBodyCellProps
>(({ children, ...rest }, ref) => {
  return (
    <td
      ref={ref}
      role="cell"
      sx={{
        py: 3,
        px: 4,
      }}
      {...rest}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          fontSize: 2,
          color: 'onSurface',
        }}
      >
        {children}
      </Box>
    </td>
  );
});
