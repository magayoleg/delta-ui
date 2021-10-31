import { Global } from '@emotion/react';
import { jsx, ThemeProvider } from '@theme-ui/core';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  defaultLocale,
  hash,
  Locale,
  SystemContainer,
  SystemContainerProps
} from 'restyler';
import { theme as defaultTheme } from 'restyler-theme-delta';
import { defaultStyled } from './defaultStyled';

export interface RestylerContainerProps extends Partial<SystemContainerProps> {}

export const RestylerContainer = ({
  theme: passedTheme = defaultTheme,
  locale: passedLocale = defaultLocale,
  styled: passedStyled,
  children,
  ...rest
}: RestylerContainerProps) => {
  const [t] = useTranslation('common', { useSuspense: false });
  const locale = useMemo(
    () =>
      passedLocale ??
      ({
        cancel: t('common:actions.cancel'),
        empty: t('common:labels.empty'),
        ok: t('common:actions.confirm'),
        required: t('common:errors.required')
      } as Locale),
    [passedLocale, t]
  );
  const styled = useMemo(() => passedStyled ?? defaultStyled, [passedStyled]);
  const theme = passedTheme;
  const key = useMemo(() => hash(theme) + hash(locale), [theme, locale]);
  return (
    <ThemeProvider theme={theme}>
      <SystemContainer
        key={key}
        theme={theme}
        locale={locale}
        styled={styled}
        {...rest}
      >
        <Global
          styles={{
            'html, body, #root': {
              margin: '0 !important',
              padding: '0 !important',
              minHeight: '100vh'
            }
          }}
        />
        {children}
      </SystemContainer>
    </ThemeProvider>
  );
};
