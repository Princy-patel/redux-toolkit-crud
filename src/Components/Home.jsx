import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { removeUser } from "../features/createSlice";

function Home() {
  const usersData = useSelector((state) => state.createUser.data);
  const dispatch = useDispatch();

  const deleteUser = function (id) {
    dispatch(removeUser(id));
  };

  return (
    <>
      <h2>CRUD Operation</h2>
      <Link to="/create">
        <Button variant="success" className="m-3">
          Create+
        </Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/edit/${user.id}`}>
                  <Button variant="primary">Edit</Button>
                </Link>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={deleteUser.bind(null, user.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Home;
