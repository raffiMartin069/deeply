type RemeberForgotPassProps = {
    type: string;
    value: string;
    id: string;
    name: string;
    checked: boolean;
    for: string;
    anchorLabel: string;
    referencePath: string;
};

function RememberForgotPassComponent(props: RemeberForgotPassProps) {
  return (
    <>
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          <div className="form-check">
            <input
              className="form-check-input"
              type={props.type}
              value={props.value}
              id={props.id}
              name={props.name}
              checked={props.checked}
            />
            <label className="form-check-label" htmlFor={props.for}>
              {" "}
              Remeber Me{" "}
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
