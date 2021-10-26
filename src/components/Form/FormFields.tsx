import { Control, Controller, FieldValues } from 'react-hook-form';
import { TextField as MUITextField, } from '@material-ui/core';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions<any>();

interface BaseFieldProps {
  name: string,
  label: string
  control: Control<FieldValues, object>
  defaultValue?: any,
  required?: boolean,
  placeholder?: string
  helperText?: string
}

interface TextFieldProps {
  type?: string,
}

interface TagsFieldProps {
}

export const TextField = (props: BaseFieldProps & TextFieldProps) => {
  const { control, name, type, label, required, defaultValue, placeholder, helperText } = props;
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || ""}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return <MUITextField
          placeholder={placeholder}
          label={label}
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : helperText}
          type={type}
        />
      }}
      rules={{ required }}
    />
  )
}


export const TagsField = (props: BaseFieldProps & TagsFieldProps) => {
  const { control, name, label, required, defaultValue, placeholder, helperText } = props;
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || []}
      render={({ field: { onChange, ref, ...fieldProps }, fieldState: { error } }) => {
        return <Autocomplete
          multiple
          id="tags"
          freeSolo
          ref={ref}
          options={TAGS}
          onChange={(_, value) => onChange([...value])}
          {...fieldProps}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);
            if (params.inputValue !== '' && !TAGS.includes(params.inputValue)) {
              filtered.push(`Add "${params.inputValue}"`);
            }
            return filtered;
          }}
          renderInput={(params) => (
            <MUITextField
              {...params}
              variant="standard"
              label={label}
              placeholder={placeholder}
              helperText={error ? error.message : helperText}
            />
          )}
        />
      }}
      rules={{ required }}
    />
  )
}

const TAGS = [
  'Fall',
  'Church',
  'Fundraiser'
]