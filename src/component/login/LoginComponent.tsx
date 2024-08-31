function LoginComponent() {
  return (
    <>
<div className="justify-center p-2 d-flex border border-danger rounded-1 lign-content-center">
    <div className="w-100 border rounded-1 p-2">
    <form>

  <div data-mdb-input-init className="form-floating mb-4 w-100">
    <input type="email" id="email" className="form-control d-flex w-100" placeholder="Email Address" />
    <label className="form-label" htmlFor="email">Email address</label>
  </div>


  <div data-mdb-input-init className="form-floating mb-4">
    <input type="password" id="password" className="form-control" placeholder="Password" />
    <label className="form-label" htmlFor="password">Password</label>
  </div>

  
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
  
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
      </div>
    </div>

    <div className="col">
      
      <a href="#!">Forgot password?</a>
    </div>
  </div>

 
  <button  type="button" className="btn btn-primary btn-block w-100 mb-4">Sign in</button>

  
  <div className="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
      <i className="fab fa-facebook-f"></i>
    </button>

    <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
      <i className="fab fa-google"></i>
    </button>

    <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
      <i className="fab fa-twitter"></i>
    </button>

    <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
      <i className="fab fa-github"></i>
    </button>
  </div>
</form>
    </div>
</div>
    </>
  )
}

export default LoginComponent