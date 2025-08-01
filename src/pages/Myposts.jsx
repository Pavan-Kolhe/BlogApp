import { Container, PostCard } from "../components/index.js";
import authService from "../appwrite/auth.js";
import { useSelector } from "react-redux";

function MyPosts() {
  const userData = useSelector((state) => state.auth.userData);
  const posts = useSelector((state) => state.posts.postsData);
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => {
            // console.log(post); // Check if featuredImage exists
            if (post.userId !== userData.userData.$id) {
              return null;
            }
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

export default MyPosts;
