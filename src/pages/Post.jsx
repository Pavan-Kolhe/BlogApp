import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector, useDispatch } from "react-redux";
import conf from "../conf/conf";
import { deletePost as deletePostInStore } from "../store/postSlice";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.auth.userData);
  const posts = useSelector((state) => state.posts.postsData);

  const isAuthor =
    post && userData ? post.userId === userData.userData.$id : false;

  useEffect(() => {
    if (slug) {
      const foundPost = posts.find((post) => post.$id === slug);
      if (foundPost) setPost(foundPost);
      else navigate("/");
    } else navigate("/");
  }, [slug, navigate, posts]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        dispatch(deletePostInStore(post.$id));
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl"
          />

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-white text-center text-3xl font-bold">
            {post.title}
          </h1>
        </div>
        <div className="p-5 text-white text-2xl border browser-css">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  ) : null;
}
