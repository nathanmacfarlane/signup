import { Grid } from '@material-ui/core';
import { Steps, Button } from 'antd';
import { useState } from 'react';

const { Step } = Steps;

interface StepDefinition {
  title: string,
  content: any
}

interface Props {
  doneButton: { title: string, onClick: () => void },
  steps: StepDefinition[]
}

export const Wizard = ({ doneButton, steps }: Props) => {
  const [current, setCurrent] = useState<number>(1);

  const next = () => setCurrent(current + 1)
  const prev = () => setCurrent(current - 1)

  return (
    <>
      <Grid container>
        <Grid xs={2} item>
          <Steps direction="vertical" onChange={setCurrent} current={current}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
        </Grid>
        <Grid xs={10} item>
          <div className="steps-content">
            {steps.map((step, i) => <span style={{ display: i === current ? "block" : "none" }} key={step.title}>{step.content()}</span>)}
          </div>
          <div className="steps-action">
            <Button disabled={current <= 0} className="previous" style={{ margin: '0 8px' }} onClick={prev}>
              Previous
            </Button>
            {current < steps.length - 1 ? (
              <Button className="next" type="primary" onClick={next}>
                Next
              </Button>
            ) :
              <Button className="done" type="primary" onClick={doneButton.onClick}>
                {doneButton.title}
              </Button>
            }
          </div>
        </Grid>
      </Grid>
    </>
  );
}