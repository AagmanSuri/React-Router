import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  useEffect(() => {
    FetchUsers();
  }, []);

  const [users, setUsers] = useState([]);

  const FetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    // console.log(data[0].name);
    setUsers(data);
  };
  // console.log("uses set ", users);

  return (
    <div>
      <h1>Shop</h1>
      <br></br>
      {users.map((value, id) => {
        return (
          <div>
            <Link to={`/Shop/${id + 1}`}>
              <h3 key={id}>{value.name}</h3>
            </Link>
            <br></br>
          </div>
        );
      })}
    </div>
  );
};
export default Shop;
