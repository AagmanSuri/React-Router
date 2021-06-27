import { useState, useEffect } from "react";

const UserPost = ({ match }) => {
  useEffect(() => {
    FetchPost();
  }, []);
  const [post, setPost] = useState([]);

  const FetchPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    setPost(data);
  };

  console.log(match);
  console.log("outter", post);

  return (
    <div>
      <h1>Posts</h1>
      {console.log("inner", post)}
      <h2>The posts is</h2>
      <h3>{post[match.params.id].title}</h3>
    </div>
  );
};
export default UserPost;
