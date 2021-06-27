import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";

const UserPost = ({ match }) => {
  useEffect(() => {
    FetchPost();
  }, []);
  const [post, setPost] = useState([]);

  const FetchPost = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments`
    );
    const data = await response.json();
    setPost(data);
  };

  return <div></div>;
};
export default UserPost;
