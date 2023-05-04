import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { addDoc, collection } from "firebase/firestore";

import { Button, Form, Spinner } from "react-bootstrap";
import NavBarAdmin from "../../../components/navbar-admin";
import { db, storage } from "../../_app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const CreateItem = (props) => {
  const [title, setTitle] = useState("");
  const [album, setAlbum] = useState("");
  const [image, setImage] = useState([]);

  const userRegister = useSelector((state) => state.userLogin);
  const { userInfo } = userRegister;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    }
  }, [userInfo]);

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      const url = await handleImageUpload(image);
      if (!url) {
        setLoading(false);
        return;
      }

      const docRef = await addDoc(collection(db, "gallery"), {
        title,
        album,
        image: url,
      });
      router.push(`/admin/gallery-admin`);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleImageUpload = async (file) => {
    try {
      const storageRef = ref(storage, "files/" + file?.name);

      // Upload the file to Firebase Storage
      const snapshot = await uploadBytes(storageRef, file);

      // Get the download URL for the file
      const url = await getDownloadURL(snapshot.ref);
      return url;
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <>
      <div className="login-container">
        <Head>
          <title>Create Gallery Image - Caribbean Research Institute</title>
          <meta
            property="og:title"
            content="Create Gallery Image - Caribbean Research Institute"
          />
        </Head>
        <NavBarAdmin rootClassName="navbar-root-class-name4" />
        <div className="vh-50 d-flex justify-content-center align-items-center login-container">
          <div className="col-md-5 p-5 shadow-sm bg-white">
            <h2 className="text-center mb-4 text-primary">Add Gallery Image</h2>
            <form onSubmit={submitHandler}>
              <p style={{ color: "red" }}>{error}</p>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control border border-primary"
                  id="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Album
                </label>
                <input
                  type="text"
                  value={album}
                  required
                  onChange={(e) => setAlbum(e.target.value)}
                  className="form-control border border-primary"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type={"file"}
                  label={`Image`}
                  required
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </Form.Group>
              <div className="d-grid">
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
                    "Add"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
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

export default CreateItem;
