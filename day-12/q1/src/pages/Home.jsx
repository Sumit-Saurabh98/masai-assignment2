import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data.posts || []));
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blog Posts</h1>
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "20px", padding: "5px" }}
      />
      <ul>
        {filteredPosts.map(post => (
          <li key={post.id} style={{ marginBottom: "10px" }}>
            <Link to={`/post/${post.id}`} style={{ fontWeight: "bold" }}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
