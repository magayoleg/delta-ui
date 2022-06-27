import { jsx } from '@theme-ui/core';
import { createFormStory, formStoryMeta } from '../../../../../docs/utils';
import { Box } from '../../../containers';

export default {
  ...formStoryMeta,
  title: 'JsForm/Autocomplete',
};

export const Basics = createFormStory({
  schema: {
    type: 'array',
    title: 'Autocomplete',
    description: 'Description',
    items: {
      oneOf: [
        {
          title: 'A',
          const: 'aaa',
        },
        {
          title: 'B',
          const: 'bbb',
        },
      ],
    },
    layout: {
      field: 'autocomplete',
    },
  },
  initialValue: [],
});

export const CustomOptions = createFormStory({
  schema: {
    type: 'array',
    title: 'With Custom Options',
    layout: {
      field: 'autocomplete',
      source: {
        entity: 'DATACENTER',
        filter: 'id=ne=1234',
      },
    },
  },
  initialValue: [],
  registry: {
    utils: {
      getAutocompleteOptions: (query: string, _source: unknown) => {
        return new Array(5).fill(undefined).map(() => {
          const x =
            (query ? query + '-' : '') + Math.random().toString().slice(-8);
          return {
            title: x,
            const: x,
            render: () => (
              <Box
                sx={{
                  p: 1,
                  borderRadius: 2,
                  backgroundColor: 'info',
                  color: 'onInfo',
                }}
              >
                {x}
              </Box>
            ),
          };
        });
      },
    },
  },
});