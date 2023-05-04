import React from "react";
import Link from "next/link";
import Head from "next/head";
import NavBarAdmin from "../../components/navbar-admin";
import { useEffect } from "react";
import { useRouter } from "next/router";
import {  useSelector } from "react-redux";

const Admin = (props) => {
  const userLogin = useSelector((state) => state.userLogin);
  console.log(userLogin)
  const { userInfo } = userLogin;
  const router = useRouter();
  useEffect(() => {
    if (!userInfo) {
      router.push("/");
    }
  });
  return (
    <>
      <div className="events-container">
        <Head>
          <title>Admin - Caribbean Research Institute</title>
          <meta
            property="og:title"
            content="Events - Caribbean Research Institute"
          />
        </Head>
        <NavBarAdmin rootClassName="navbar-root-class-name4" />
        <h3>Welcome to admin panel</h3>
      </div>
    </>
  );
};

export default Admin;
