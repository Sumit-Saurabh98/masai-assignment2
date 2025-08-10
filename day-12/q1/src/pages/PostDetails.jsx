import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  if (!post) return <p style={{ padding: "20px" }}>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h4>Tags:</h4>
      <ul>
        {post.tags?.map((tag, index) => (
          <li key={index}>#{tag}</li>
        ))}
      </ul>
    </div>
  );
}
