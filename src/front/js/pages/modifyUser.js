import React from "react";

const ModifyUser = () => {
  return (
    <form>
      <div className="Container bg-warning p-5 m-10">
        <div ClassName="row">
          <div ClassName="col">
          <div className="mb-3">
          <label className="form-label">
             User Name
            </label>
            <input
              className="form-control"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
            <label for="exampleInputEmail1" className="form-label">
             email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="button" class="btn btn-outline-dark">
            Submit
          </button>
        </div>
        </div>
      </div>
    </form>
  );
};

export default ModifyUser;
