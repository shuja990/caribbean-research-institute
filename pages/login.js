import React, { useEffect, useState } from "react";
import Head from "next/head";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";
import { login } from "../actions/userActions";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";

const Login = (props) => {
  const userLogin = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const { loading, error, userInfo } = userLogin;
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <div className="login-container">
        <Head>
          <title>Login - Swiss Swipe</title>
          <meta property="og:title" content="Login - Swiss Swipe" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name4"></Navbar>
        <div className="vh-50 d-flex justify-content-center align-items-center login-container">
          <div className="col-md-5 p-5 shadow-sm border rounded-5 border-primary bg-white">
            <h2 className="text-center mb-4 text-primary">Login</h2>
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control border border-primary"
                  id="exampleInputEmail1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control border border-primary"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="d-grid">
                <button className="btn btn-primary" type="submit">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    ) : (
                      "Login"
                    )}
                  </button>
                </button>
              </div>
            </form>
            <div className="mt-3">
              <p className="mb-0  text-center">
                Don't have an account?{" "}
                <Link href="/sign-up" className="text-primary fw-bold">
                  <a className="text-primary fw-bold">Sign Up</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <style jsx>
        {`
          .login-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 75vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  );
};

export default Login;
