import { useState } from "react";

type PasswordField = {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  for: string;
  label: string;
  value: string;
  referencePath: string;
};

function PasswordField(props: PasswordField) {
  const [isVisible, setIsVisible] = useState(false);

  const visiblityHandler = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="form-floating w-100 my-2">
        <input
          type={!isVisible ? "password" : "text"}
          id="password"
          name="password"
          className="form-control d-flex w-100"
          placeholder={props.placeholder}
        />
        <label className="form-label" htmlFor={props.for}>
          {props.label}
        </label>
      </div>

      <div className="row">
        <div className="col d-flex justify-content-center">
          <div className="form-check">
            <input
              className="form-check-input"
              type={props.type}
              value={props.value}
              id={props.id}
              name={props.name}
              checked={isVisible ? true : false}
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

export default PasswordField;
