import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
import conf from "../conf/conf";
conf;

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full h-80 bg-gray-700 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            style={{ height: "30vh" }}
            className="mb-auto rounded-xl"
          />
        </div>
        <h2 className="mt-3 text-xl font-bold text-gray-200">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
