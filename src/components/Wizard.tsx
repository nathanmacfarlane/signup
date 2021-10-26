import { Grid, makeStyles, Paper } from '@material-ui/core';
import { Steps, Button } from 'antd';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const { Step } = Steps;

export interface WizardStepProps {
  form: any;
  styles: any;
  isVisible: boolean;
}

interface StepDefinition {
  title: string,
  content: any,
}

interface Props {
  doneButton: { title: string, onClick: (data: any) => void },
  steps: StepDefinition[]
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiTagField-root': {
      margin: theme.spacing(1),
    },
  },
}));

export const Wizard = ({ doneButton, steps }: Props) => {
  const [current, setCurrent] = useState<number>(0);
  const form = useForm();

  const classes = useStyles();

  const isLastStep = current === steps.length - 1;

  const onSubmit = (data: any) => {
    if (isLastStep) {
      doneButton.onClick(data)
    } else {
      setCurrent(current + 1)
    }
  };

  const next = () => form.handleSubmit(onSubmit)()

  const prev = () => setCurrent(current - 1)

  return (
    <>
      <Grid container>
        <Grid xs={3} item>
          <Steps direction="vertical" current={current}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
        </Grid>
        <Grid xs={9} item>
          <div className="steps-content">
            <Paper>
              {steps.map((step, i) => {
                const content = step.content();
                const isVisible = i === current;
                return (
                  <form style={{ display: isVisible ? "block" : "none" }} key={step.title} className={classes.root}>
                    <span>{content({ form, isVisible })}</span>
                  </form>
                )
              })}
            </Paper>
          </div>
          <div className="steps-action">
            <Button disabled={current <= 0} className="previous" style={{ margin: '0 8px' }} onClick={prev}>
              Previous
            </Button>
            <Button className="next" type="primary" onClick={next}>
              {isLastStep ? doneButton.title : "Next"}
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}