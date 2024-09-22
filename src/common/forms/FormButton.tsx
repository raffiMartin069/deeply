type FormButtonProps = {
    // Is the button type
    type: string;
    // Is the button value
    id: string;
    // Is the button class
    text: string;
    
};


function FormButton(props: FormButtonProps) {
  return (
    <>
      <button typeof={props.type} id={props.id} className="btn btn-primary btn-block w-100">
        {props.text}
      </button>
    </>
  );
}

export default FormButton;
