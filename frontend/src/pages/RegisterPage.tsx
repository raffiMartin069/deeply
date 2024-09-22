import { useState } from "react";
import LoginRegisterLogo from "../component/login/LoginRegisterLogo";
import FieldsComponent from "../common/forms/FieldsComponent";
import FormButton from "../common/forms/FormButton";


function RegisterPage() {
  const link = "Login";
  const path = "/login";
  const hyperlink_definition = "Have an account?";
  const logo_definition = "Or create an account using:";
  const logo_array = ["bi bi-facebook", "bi bi-google", "bi bi-twitter-x"];

  const [isVisible, setIsVisible] = useState(false);

  const visiblityHandler = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="p-2 border border-danger vh-100 align-content-center">
      <div className="w-100 responsiveness border rounded-1 p-2">
        <form>
          <FieldsComponent
            type="text"
            id="first_name"
            name="first_name"
            placeholder="First Name"
            for="first_name"
            label="First Name"
          />

          <FieldsComponent
            type="text"
            id="last_name"
            name="Last Name"
            placeholder="Last Name"
            for="last_name"
            label="Last Name"
          />

          <FieldsComponent
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            for="email"
            label="Email"
          />

          <div className="form-floating w-100 my-2">
            <input
              type={!isVisible ? "password" : "text"}
              id="password"
              name="password"
              className="form-control d-flex w-100"
              placeholder="Password"
            />
            <label className="form-label" htmlFor={"password"}>
              Password
            </label>
          </div>


          <div className="form-floating w-100 my-2">
            <input
              type={!isVisible ? "password" : "text"}
              id="repeat_password"
              name="repeat_password"
              className="form-control d-flex w-100"
              placeholder="Repeat Password"
            />
            <label className="form-label" htmlFor={"repeat_password"}>
              Repeat Password
            </label>
          </div>

          <div className="row">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={isVisible ? "password" : "text"}
                  id={"visible_password"}
                  name={"visible_password"}
                  checked={isVisible ? true : false}
                  onChange={visiblityHandler}
                />
                <label className="form-check-label" htmlFor={"visible_password"}>
                  {" "}
                  Show Password{" "}
                </label>
              </div>
            </div>

            <div className="col">
              <a href={"#!"}>Forgot password?</a>
            </div>
          </div>

          <FormButton type="submit" id="submit" text="Sign in" />

          <LoginRegisterLogo
            linkName={link}
            path={path}
            logo_definition={logo_definition}
            hyperlink_definition={hyperlink_definition}
            logo_array={logo_array}
          />
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
