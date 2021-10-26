import { TagsField, TextField } from '../components/Form/FormFields';
import { WizardStepProps } from '../components/Wizard';

export const GeneralInfoForm = ({ form, isVisible }: WizardStepProps) => {
  const { control } = form;

  return (
    <>
      <TextField label="Title" name="title" control={control} required={isVisible && true} />
      <TextField label="Description" name="description" control={control} />
      <TagsField label="Tags" name="tags" helperText="Keywords here help people find your sign up." control={control} />
    </>
  );
};