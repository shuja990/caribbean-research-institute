import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
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
      console.log("first");
      const querySnapshot = await getDocs(collection(db, "news"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.data());
        data.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setLoading(false);
      setProducts(data);
    } catch (error) {
      console.log(error);
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
      const documentRef = doc(db, "news", id);
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
          <title>News - Caribbean Research Institute</title>
          <meta
            property="og:title"
            content="News - Caribbean Research Institute"
          />
        </Head>
        <NavBarAdmin rootClassName="navbar-root-class-name4" />
        <Row className="w-100">
          <Row className="align-items-center w-100">
            <Col lg={6}>
              <h1>News</h1>
            </Col>
            <Col className="d-flex justify-content-end">
              <Button
                className="btn btn-small"
                variant="light"
                onClick={() => router.push("/admin/news-admin/create")}
              >
                Add News
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
                    <th>Date</th>
                    <th>Caption</th>
                    <th>Image</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product?.id}>
                      <td>{product?.id}</td>
                      <td>{product?.title}</td>
                      <td>{product?.date}</td>
                      <td>{product?.caption}</td>
                      <td>{product?.image}</td>
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
