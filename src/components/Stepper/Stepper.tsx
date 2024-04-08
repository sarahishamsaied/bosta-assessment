import React from "react";
import { Stepper, Step } from "react-form-stepper";

type Props = {};

const CustomStepper = (props: Props) => {
  return (
    <div>
      <Stepper
        style={{
          padding: 0,
        }}
        connectorStyleConfig={{
          activeColor: "green",
          completedColor: "green",
          disabledColor: "yellow",
          errorColor: "red",
          size: 10,
          stepSize: "2em",
          style: "solid",
        }}
        color="green"
        activeStep={2}
      >
        <Step label="Step 1">dsfg</Step>
        <Step label="Step 2" />
        <Step label="Step 3" />
        <Step label="Step 4" />
      </Stepper>
    </div>
  );
};

export default CustomStepper;
