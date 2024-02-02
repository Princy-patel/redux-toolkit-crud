/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateUser } from "../features/createSlice";
import { useNavigate } from "react-router-dom";

function Update() {
  const userId = useParams().id;
  const navigate = useNavigate();

  const userData = useSelector((state) => state.createUser.data);
  const dispatch = useDispatch();

  const exitingUser = userData.filter((user) => user.id === userId);

  const { id, name, email } = exitingUser[0];

  const [updateData, setUpdatedData] = useState({
    id,
    name,
    email,
  });

  const updateUserData = function (e) {
    e.preventDefault();
    dispatch(
      updateUser({
        id: updateData.id,
        name: updateData.name,
        email: updateData.email,
      })
    );
    navigate("/");
  };

  return (
    <div className="border px-3 py-3 bg-body-secondary">
      <h2>Update</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="float-start m-2">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={updateData.name}
            onChange={(e) =>
              setUpdatedData({ ...updateData, name: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="float-start">Email Address</Form.Label>
          <Form.Control
          className="my-1"
            type="email"
            placeholder="Email"
            value={updateData.email}
            onChange={(e) =>
              setUpdatedData({ ...updateData, email: e.target.value })
            }
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={updateUserData}>
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Update;
