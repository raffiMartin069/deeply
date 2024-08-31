import FormButton from "../../common/forms/FormButton";
import FieldsComponent from "../../common/forms/FieldsComponent";
import RememberForgotPassComponent from "./RememberForgotPassComponent";
import LoginMethod from "./LoginMethod";

const Logos = () => {
  return [
    "bi bi-facebook",
    "bi bi-google",
    "bi bi-twitter-x"
  ]
}

function LoginComponent() {
  return (
    <>
      <div className="p-2 border border-danger vh-100 align-content-center">
        <div className="w-100 border rounded-1 p-2">
          <form>
            <FieldsComponent
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              for="email"
              label="Email"
            />

            <FieldsComponent
              type="password"
              id="pass"
              name="pass"
              placeholder="Password"
              for="pass"
              label="Password"
            />

            <RememberForgotPassComponent
              type="checkbox"
              value="remember"
              id="remember"
              name="remember"
              checked={true}
              for="remember"
              anchorLabel="Remeber Me"
              referencePath="#!"
            />

            <FormButton type="submit" id="submit" text="Sign in" />

            <div className="text-center">
              <p>
                Not a member? <a href="#!">Register</a>
              </p>
              <p>or sign up with:</p>
              {
              Logos().map((logo, idx) => {
                return <LoginMethod key={idx} type="button" buttonClass={logo} size="2.5rem" />
              }
              )
            }
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginComponent;
