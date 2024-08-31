type LoginMethodProps = {
    type: string;
    buttonClass: string;
    size: string;
};

/**
 * 
 * @param props 
 * @returns 
 * 
 * buttonClass: string; refers to the "i" tag class like "fab fa-facebook-f"
 */
function LoginMethod(props: LoginMethodProps) {
  return (
    <>
      <button typeof={props.type} className={`btn btn-link btn-floating mx-1`} style={{fontSize: props.size}}>
        <i className={props.buttonClass}></i>
      </button>
    </>
  );
}

export default LoginMethod;
