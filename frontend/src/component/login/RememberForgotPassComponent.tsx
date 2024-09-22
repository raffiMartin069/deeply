import { useState } from "react";

type RemeberForgotPassProps = {
    type: string;
    value: string;
    id: string;
    name: string;
    for: string;
    checked: boolean;    
    anchorLabel: string;
    referencePath: string;
};

function RememberForgotPassComponent(props: RemeberForgotPassProps) {

  const [isVisible, setIsVisible] = useState(props.checked);

  const visiblityHandler = () => {
    setIsVisible(isVisible);
  }

  return (
    <>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <div className="form-check">
            <input
              className="form-check-input"
              type={props.type}
              value={props.value}
              id={props.id}
              name={props.name}
              checked={!isVisible ? true : false}
              onChange={visiblityHandler}
            />
            <label className="form-check-label" htmlFor={props.for}>
              {" "}
              Show Password{" "}
            </label>
          </div>
        </div>

        <div className="col">
          <a href={props.referencePath}>Forgot password?</a>
        </div>
      </div>
    </>
  );
}

export default RememberForgotPassComponent;

