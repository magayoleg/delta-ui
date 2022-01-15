import { jsx } from '@theme-ui/core';
import { Tooltip } from 'delta-tooltip';
import { cloneElement, useContext, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  IoCloseOutline,
  IoGridOutline,
  IoHelpCircleOutline,
  IoOptions,
  IoSearchOutline
} from 'react-icons/io5';
import { Box, BoxProps, Button, useThemed, useUpdateEffect } from 'restyler';
import { DataTableContext } from '../DataTableContext';
import { Configurer } from './Configurer';
import { Query } from './Query';
import { Tabs } from './Tabs';

export interface ToolbarProps extends BoxProps {}

export const Toolbar = (props: ToolbarProps) => {
  const [t] = useTranslation();
  const ThemedToolbar = useThemed('div', 'dataTable.toolbar');
  const ThemedToolbarContent = useThemed('div', 'dataTable.toolbar.content');
  const ThemedToolbarSwitcher = useThemed('div', 'dataTable.toolbar.switcher');
  const {
    manager: { layout },
    toolbar: {
      initialSection: proposedInitialSectionId = '',
      sections = [],
      extras = null
    } = {}
  } = useContext(DataTableContext);
  const availableSections = useMemo(
    () =>
      sections.map(v =>
        typeof v === 'string'
          ? {
              id: v,
              toggler: (
                <Button kind="icon">
                  <Tooltip
                    content={
                      {
                        tabs: t('common:sections.tabs'),
                        query: t('common:sections.query'),
                        configurer: t('common:sections.configurer')
                      }[v] ?? t('common:labels.unknown')
                    }
                  >
                    <Box>
                      {{
                        tabs: <IoGridOutline />,
                        query: <IoSearchOutline />,
                        configurer: <IoOptions />
                      }[v] ?? <IoHelpCircleOutline />}
                    </Box>
                  </Tooltip>
                </Button>
              ),
              content:
                {
                  tabs: <Tabs />,
                  query: <Query />,
                  configurer: <Configurer />
                }[v] ?? null
            }
          : v
      ),
    [sections]
  );
  const initialSectionId = useMemo(
    () =>
      availableSections.some(v => v.id === proposedInitialSectionId)
        ? proposedInitialSectionId
        : availableSections[0]?.id,
    []
  );
  const [currentSectionId, setCurrentSectionId] = useState(initialSectionId);
  useUpdateEffect(() => {
    setCurrentSectionId(initialSectionId);
  }, [layout.tabs.length]);
  if (availableSections.length < 1) {
    return null;
  }
  return (
    <ThemedToolbar {...props}>
      <ThemedToolbarContent>
        {availableSections.find(v => v.id === currentSectionId)?.content}
      </ThemedToolbarContent>
      <ThemedToolbarSwitcher>
        {availableSections
          .filter(v => v.id !== initialSectionId)
          .map(v =>
            v.id === currentSectionId ? (
              <Button
                key={v.id}
                kind="icon"
                onClick={() => setCurrentSectionId(initialSectionId)}
              >
                <IoCloseOutline />
              </Button>
            ) : (
              cloneElement(v.toggler, {
                key: v.id,
                onClick: () => setCurrentSectionId(v.id)
              })
            )
          )}
      </ThemedToolbarSwitcher>
      {extras}
    </ThemedToolbar>
  );
};
