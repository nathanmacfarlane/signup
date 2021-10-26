import { TextField } from '../components/Form/FormFields';
import { WizardStepProps } from '../components/Wizard';

export const DatesForm = ({ form, isVisible }: WizardStepProps) => {
  const { control } = form;

  return (
    <>
      <TextField label="Another Title" name="anotherTitle" control={control} required={isVisible && true} />
    </>
  );
};