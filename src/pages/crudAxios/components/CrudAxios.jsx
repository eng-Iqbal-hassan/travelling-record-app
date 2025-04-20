import { Post } from "@common/components";
import axios from "axios";
import { useEffect, useState } from "react";

export function CrudAxios() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const data = response.data;

      const dataArray = Array.isArray(data) ? data : Object.values(data); // ✅ Ensure it's an array

      setPosts(dataArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(posts);

  return (
    <div>
      {posts.map((post, index) => (
        <Post key={index} id={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}
