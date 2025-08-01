import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components/index.js";
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";

function AllPosts() {
  const posts = useSelector((state) => state.posts.postsData);
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => {
            // console.log(post); // Check if featuredImage exists
            return (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
