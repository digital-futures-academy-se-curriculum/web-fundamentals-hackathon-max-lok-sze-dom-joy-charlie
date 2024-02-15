const SignUpForm = () => {
  return (
    <form className="m-2 col-sm-6 pe-sm-3 pe-md-5 pt-sm-5">
      <div className="form-group mb-3 mb-sm-4">
        <label htmlFor="inputTitle">Title</label>
        <select id="inputTitle" className="form-control" required>
          <option selected disabled value="">
            Choose...
          </option>
          <option>Mr</option>
          <option>Mrs</option>
          <option>Miss</option>
          <option>Master</option>
        </select>
      </div>
      <div className="form-group mb-3 mb-sm-4">
        <label htmlFor="inputFirstName">First Name*</label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          placeholder="First Name"
          required
        />
      </div>
      <div className="form-group mb-3 mb-sm-4">
        <label htmlFor="inputLastName">Last Name*</label>
        <input
          type="text"
          className="form-control"
          id="inputLastName"
          placeholder="Last Name"
          required
        />
      </div>
      <div className="form-group mb-3 mb-sm-4">
        <label htmlFor="inputEmail">Email*</label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          placeholder="Email"
          required
        />
      </div>
      <div className="form-group mb-3 mb-sm-4">
        <label htmlFor="inputDOB">Date Of Birth</label>
        <input
          type="date"
          className="form-control"
          id="inputDOB"
          placeholder="Date Of Birth"
          required
        />
      </div>
      <div className="form-group mb-3 mb-sm-4">
        <label htmlFor="inputPhoneNumber">Phone*</label>
        <input
          type="tel"
          className="form-control"
          pattern="[0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{3}"
          id="inputPhoneNumber"
          placeholder="Phone"
          required
        />
      </div>

      <div className="form-group mb-3 mb-sm-4">
        <input
          type="submit"
          className="btn btn-primary"
          width="10"
          value="Sign Me Up"
        />
      </div>
    </form>
  );
};

export default SignUpForm;
