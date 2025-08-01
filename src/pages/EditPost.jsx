import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const posts = useSelector((state) => state.posts.postsData); // <-- Move here!

  React.useEffect(() => {
    if (slug) {
      const foundPost = posts.find((p) => p.$id === slug);
      if (foundPost) {
        setPost(foundPost);
      } else {
        navigate("/");
      }
    } else navigate("/");
  }, [slug, navigate, posts]);

  console.log("post", post);
  console.log("posts", posts);
  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
