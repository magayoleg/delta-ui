import { Meta } from '@storybook/react';
import { jsx } from '@theme-ui/core';
import { useState } from 'react';
import { Box, Button, Card } from 'restyler';
import {
  DataTable,
  useDataTableManager,
  useStoredDataTableManager
} from '../../lib';
import { useMock } from './useMock';

export default {
  title: 'General/DataTable'
} as Meta;

export const Basics = () => {
  const options = useMock({
    columnCount: 15,
    rowCount: 30,
    shouldLoadChunks: true
  });
  const manager = useStoredDataTableManager({
    id: 'story-data-table-basics',
    initialTab: {
      name: 'New tab'
    },
    ...options
  });
  return (
    <Box sx={{ padding: 5, minHeight: '100vh' }}>
      <Card>
        <DataTable
          manager={manager}
          toolbar={{
            sections: ['tabs', 'query', 'configurer']
          }}
        />
      </Card>
    </Box>
  );
};

export const HeightAdaptive = () => {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const options = useMock({ columnCount: 15, rowCount: 20 });
  const manager = useDataTableManager(options);
  return (
    <Box
      sx={{
        padding: 5,
        minHeight: '100vh',
        maxHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }}
    >
      <Box>
        <Button
          kind="primary"
          onClick={() => {
            manager.setData(
              manager.data.length > 0 ? [] : options.initialContent.data
            );
          }}
        >
          Toggle Data
        </Button>
      </Box>
      <Box ref={setElement} sx={{ flex: '1 0 200px' }}>
        <Card>
          <DataTable
            manager={manager}
            maxHeight={element?.offsetHeight}
            toolbar={{
              sections: ['tabs', 'query', 'configurer']
            }}
          />
        </Card>
      </Box>
    </Box>
  );
};

export const Empty = () => {
  const options = useMock({ columnCount: 15, rowCount: 0 });
  const manager = useDataTableManager(options);
  return (
    <Box sx={{ padding: 5, minHeight: '100vh' }}>
      <Card>
        <DataTable
          manager={manager}
          toolbar={{
            sections: ['tabs', 'query', 'configurer']
          }}
        />
      </Card>
    </Box>
  );
};
