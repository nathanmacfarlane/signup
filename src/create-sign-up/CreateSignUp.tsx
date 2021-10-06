import './CreateSignUp.css';

import { GeneralInfo } from './CreateSignUpGeneralInfo';
import { Slots } from './CreateSignUpSlots';
import { Wizard } from '../components/Wizard';

export const CreateSignUp = () => {
  const steps = [
    { title: 'General Info', content: () => <GeneralInfo key="General Info" /> },
    { title: 'Signups', content: () => <Slots /> },
    { title: 'Settings', content: () => 'Last-content' },
    { title: 'Publish', content: () => 'Last-content' },
  ];

  return (
    <Wizard
      doneButton={{ title: "Publish Sign Up", onClick: () => console.log('pushlish it') }}
      steps={steps}
    />
  )
}