import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import appwriteService from "../appwrite/config";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await appwriteService.getPosts();
  return response.documents;
});
const initialState = {
  postsData: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.postsData = action.payload;
    },
    addPost: (state, action) => {
      state.postsData.push(action.payload);
    },
    editPosts: (state, action) => {
      state.postsData = state.postsData.map((post) =>
        post.$id === action.payload.id ? action.payload.post : post
      );
    },
    deletePost: (state, action) => {
      state.postsData = state.postsData.filter(
        (post) => post.$id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.postsData = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.error("Failed to fetch posts:", action.error.message);
      });
  },
});

export const { setPosts, addPost, editPosts, deletePost } = postSlice.actions;
export default postSlice.reducer;
