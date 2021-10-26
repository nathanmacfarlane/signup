import './CreateSignUp.css';

import { Wizard } from '../components/Wizard';
import { GeneralInfoForm } from './GeneralInfoForm';
import { DatesForm } from './DatesForm';

export const CreateSignUp = () => {
  const steps = [
    { title: 'General Info', content: () => GeneralInfoForm },
    { title: 'Dates and Times', content: () => DatesForm },
    // { title: 'Manage Responses', content: () => <ManageResponses /> },
    // { title: 'Settings', content: () => 'Last-content' },
    // { title: 'Publish', content: () => 'Last-content' },
  ];

  return (
    <Wizard
      doneButton={{ title: "Publish Sign Up", onClick: (formData) => console.log('formData: ', formData) }}
      steps={steps}
    />
  )
}