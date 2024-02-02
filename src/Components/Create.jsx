/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addUser } from "../features/createSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

function Create() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const submitFormData = function (e) {
    e.preventDefault();
    dispatch(
      addUser({ id: nanoid(), name: formData.name, email: formData.email })
    );
    navigate("/");
  };

  return (
    <div className="border px-3 py-3 bg-body-secondary">
      <h2>Create User</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="float-start m-2">Username:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="float-start">Email Address:</Form.Label>
          <Form.Control
            className="mx-2"
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submitFormData}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Create;
