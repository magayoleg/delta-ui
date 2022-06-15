import { keyframes, useTheme } from '@emotion/react';
import { jsx } from '@theme-ui/core';
import { forwardRef, HtmlHTMLAttributes, useMemo } from 'react';
import { Theme } from '../../defaults';
import { Box } from '../containers';

export interface LoaderProps extends HtmlHTMLAttributes<HTMLDivElement> {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

export const Loader = forwardRef<HTMLDivElement, LoaderProps>(
  (
    {
      size: propsSize = 'small',

      color,
      ...props
    }: LoaderProps,
    ref
  ) => {
    const { scale, size } = {
      small: { scale: 0.3, size: 24 },
      medium: { scale: 0.45, size: 36 },
      large: { scale: 0.7, size: 56 },
    }[propsSize];

    return (
      <Box
        style={{
          height: size + 'px',
          aspectRatio: '1/1',
          overflow: 'hidden',
        }}
      >
        <Box
          ref={ref}
          {...props}
          style={{
            transformOrigin: 'top left',
            transform: `scale(${scale})`,
          }}
          sx={{
            display: 'inline-block',
            position: 'relative',
            height: '80px',
            aspectRatio: '1/1',
            div: {
              boxSizing: 'border-box',
              display: 'block',
              position: 'absolute',
              width: '64px',
              height: '64px',
              margin: '8px',
              border: '8px solid',
              borderRadius: '50%',
              animation: `${ldsRing} 1.6s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
              borderColor: theme =>
                `${
                  color ?? theme?.colors?.onBackground
                } transparent transparent transparent`,
            },
            'div:nth-child(1)': { animationDelay: '-0.6s' },
            'div:nth-child(2)': { animationDelay: '-0.4s' },
            'div:nth-child(3)': { animationDelay: '-0.2s' },
          }}
        >
          <Box />
          <Box />
          <Box />
          <Box />
        </Box>
      </Box>
    );
  }
);

const ldsRing = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
});
