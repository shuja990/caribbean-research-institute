import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import { getDocs, collection } from "firebase/firestore";
import { Table, Button, Row, Col, Spinner } from "react-bootstrap";

import Link from "next/link";
import { useRouter } from "next/router";
import NavBarAdmin from "../../components/navbar-admin";
import { db } from "../_app";

const Contact = (props) => {
  const userRegister = useSelector((state) => state.userLogin);
  const { userInfo } = userRegister;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    }
  }, [userInfo]);

  const getNews = async () => {
    try {
      setLoading(true);
      let data = [];
      const querySnapshot = await getDocs(collection(db, "contact"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        data.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setLoading(false);
      setProducts(data);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  const handleDelete = (id) => {
    try {
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="login-container">
        <Head>
          <title>Messages - Caribbean Research Institute</title>
          <meta
            property="og:title"
            content="News - Caribbean Research Institute"
          />
        </Head>
        <NavBarAdmin rootClassName="navbar-root-class-name4" />
        <Row className="w-100">
          <Row className="align-items-center w-100">
            <Col lg={12}>
              <h1>Messages</h1>
            </Col>
          </Row>
          {loading ? (
            <div className="d-flex justify-content-center w-100">
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            </div>
          ) : (
            <>
              <Table striped bordered hover responsive className="table-lg">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr>
                      <td>{product?.name}</td>
                      <td>{product?.image}</td>
                      <td>{product?.email}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          )}
        </Row>
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

export default Contact;
