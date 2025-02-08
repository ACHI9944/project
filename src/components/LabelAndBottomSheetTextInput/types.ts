import { Control, FieldValues, Path, RegisterOptions } from 'react-hook-form';

export interface types<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?: Omit<RegisterOptions<T>, 'setValueAs' | 'disabled' | 'valueAsNumber' | 'valueAsDate'>;
  multiline?: boolean;
  height: number;
  label: string;
}
