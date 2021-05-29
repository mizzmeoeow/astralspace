import React, { useState } from "react";
import RegisterForm from "../../auth/register/registerForm";
import FormSuccess from "../../auth/login/formSuccess";

// class RegisterClouds extends Component {
//   render() {
const RegisterClouds = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="clouds-svg">
      <svg className="background" xmlnsXlink="http://www.w3.org/2000/svg">
        <filter id="filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.003"
            numOctaves="5"
          />
          <feColorMatrix
            values="1 -1 0 0 0
                               1 -1 0 0 0
                               1 0 0 0 0
                               -1 0 0 0 1"
          />
          <feComponentTransfer>
            <feFuncR
              type="table"
              tableValues="0 .02 .03 .03 .09 .12 .27 .91 .3 .03 0 0"
            />
            <feFuncG
              type="table"
              tableValues=".01 .09 .16 .18 .38 .48 .54 .73 .33 .09 .01 .01"
            />
            <feFuncB
              type="table"
              tableValues=".03 .17 .3 .25 .37 .42 .42 .6 .17 .01 0 0"
            />
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter="url(#filter)" />
        <foreignObject x="500" y="150" width="470" height="500">
          {!isSubmitted ? (
            <RegisterForm submitForm={submitForm} className="sign-in-form" />
          ) : (
            <FormSuccess />
          )}
        </foreignObject>
      </svg>
    </div>
  );
};

export default RegisterClouds;
