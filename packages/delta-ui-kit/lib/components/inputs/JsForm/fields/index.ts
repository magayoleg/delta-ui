import { AutocompleteField } from './AutocompleteField';
import { BaseInput } from './BaseInput';
import { CheckboxField } from './CheckboxField';
import { GeoLocPickerField } from './GeoLocPickerField';
import { SelectField } from './SelectField';
import { SwitchField } from './SwitchField';

export const fields = {
  autocomplete: AutocompleteField,
  boolean: SwitchField,
  checkbox: CheckboxField,
  geoLocPicker: GeoLocPickerField,
  integer: BaseInput,
  number: BaseInput,
  select: SelectField,
  string: BaseInput,
  switch: SwitchField,
};
