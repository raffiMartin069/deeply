type FormFieldsProps = {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  for: string;
  label: string;
};

function FieldsComponent(props: FormFieldsProps) {
  return (
    <>
      <div data-mdb-input-init className="form-floating mb-4 w-100">
        <input
          type={props.type}
          id={props.id}
          name={props.name}
          className="form-control d-flex w-100"
          placeholder={props.placeholder}
        />
        <label className="form-label" htmlFor={props.for}>
          {props.label}
        </label>
      </div>
    </>
  );
}

export default FieldsComponent;
