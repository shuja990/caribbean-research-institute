import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { Table, Button, Row, Col, Spinner } from "react-bootstrap";

import Link from "next/link";
import { useRouter } from "next/router";
import NavBarAdmin from "../../../components/navbar-admin";
import { db } from "../../_app";

const NewsAdmin = (props) => {
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
      const querySnapshot = await getDocs(collection(db, "newsletter"));
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

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const documentRef = doc(db, "newsletter", id);
      await deleteDoc(documentRef);
      getNews();
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="login-container">
        <Head>
          <title>Newsletter - Caribbean Research Institute</title>
          <meta
            property="og:title"
            content="Newsletter - Caribbean Research Institute"
          />
        </Head>
        <NavBarAdmin rootClassName="navbar-root-class-name4" />
        <Row className="w-100">
          <Row className="align-items-center w-100">
            <Col lg={6}>
              <h1>Newsletter</h1>
            </Col>
            <Col className="d-flex justify-content-end">
              <Button
                className="btn btn-small"
                variant="light"
                onClick={() => router.push("/admin/newsletter-admin/create")}
              >
                Add Newsletter
              </Button>
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
                    <th>ID</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>File</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product?.id}>
                      <td>{product?.id}</td>
                      <td>{product?.title}</td>
                      <td>{product?.image}</td>
                      <td>{product?.file}</td>
                      <td>
                        <Button
                          variant="light"
                          className="btn-sm btn-danger"
                          onClick={() => handleDelete(product?.id)}
                        >
                          Delete
                        </Button>
                      </td>
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

export default NewsAdmin;
