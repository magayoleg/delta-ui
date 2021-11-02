import { useMemo, useState } from 'react';
import { clone, useUpdateEffect } from 'restyler';
import {
  DataTableLayoutDef,
  DataTableLayoutManager,
  DataTableLayoutManagerOptions,
  DataTableLayoutStatus
} from '../models';

export const useDataTableLayoutManager = ({
  initialLayout
}: DataTableLayoutManagerOptions): DataTableLayoutManager => {
  const [layout, setLayout] = useState<DataTableLayoutDef>(() =>
    sanitizeLayout(initialLayout)
  );
  const [isConfiguringLayout, setIsConfiguringLayout] = useState(false);
  const [layoutStatus, setLayoutStatus] = useState(
    DataTableLayoutStatus.Synced
  );
  const manager = {
    initialLayout,
    isConfiguringLayout,
    layout,
    layoutStatus,
    setIsConfiguringLayout,
    setLayout,
    setLayoutStatus
  };
  return useMemo(() => manager, Object.values(manager));
};

const sanitizeLayout = (layout: DataTableLayoutDef = { tabs: [] }) => {
  const cloned = clone(layout);
  if (!cloned.tabs.find(v => v.name === 'main')) {
    cloned.tabs = [
      {
        name: 'main',
        columnOrder: [],
        columnSizes: {},
        columnExclusions: []
      },
      ...cloned.tabs
    ];
  }
  return cloned;
};