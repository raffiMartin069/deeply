import FieldsComponent from "../common/forms/FieldsComponent";
import FormButton from "../common/forms/FormButton";
import LoginRegisterLogo from "../component/login/LoginRegisterLogo";
import "../assets/css/login/login.css";
import PasswordField from "../common/forms/PasswordField";
import React from "react";

function LoginPage() {
  const link = "Register";
  const path = "/register";
  const hyperlink_definition = "Don't have an account?";
  const logo_definition = "Or sign in with:";
  const logo_array = [
    "bi bi-facebook",
    "bi bi-google",
    "bi bi-twitter-x"
  ];

  return (
    <div className="p-2 border border-danger vh-100 align-content-center">
      <div className="w-100 responsiveness border rounded-1 p-2">
        <form>
          <FieldsComponent
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            for="email"
            label="Email"
          />

          <PasswordField 
            type="checkbox"
            id="password"
            name="password"
            placeholder="Password"
            for="password"
            label="Password"
            value="password"
            referencePath="#"
          />

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

export default LoginPage;


