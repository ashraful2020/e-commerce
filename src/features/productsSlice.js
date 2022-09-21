import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
  categoryPost: [],
  loading: false,
  post:{}
};
export const fetchAllPost = createAsyncThunk("post/fetchAllPost", async () => {
  const res = await axios.get("https://write-hub.herokuapp.com/posts");
  return res.data;
});

// category post section fetch category
export const fetchPostByCategory = createAsyncThunk(
  "post/fetchPostByCategory",
  async (props) => {
    const res = await axios.get(
      `https://write-hub.herokuapp.com/category-post?category=${props}`
    );
    return res.data;
  }
);
// category post section fetch category
// export const fetchPostById = createAsyncThunk("post/fetchPostById", async (id) => {
//   const res = await axios.get(`https://write-hub.herokuapp.com/posts/${id}`);
//   return res.data;
// });
export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllPost.pending]: (state) => {
      state.status = "loading";
      state.loading = true;
    },
    [fetchAllPost.fulfilled]: (state, action) => {
      state.status = "success";
      state.loading = false;
      state.posts = action.payload;
    },
    [fetchAllPost.rejected]: (state, action) => {
      state.status = "failed";
      state.loading = false;
      state.error = action.payload;
    },

    // category post section fetch category
    [fetchPostByCategory.pending]: (state) => {
      state.status = "loading";
    },
    [fetchPostByCategory.fulfilled]: (state, action) => {
      state.status = "success";
      state.categoryPost = action.payload.result;
    },
    [fetchPostByCategory.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    // id post section fetch ID
    // [fetchPostById.pending]: (state) => {
    //   state.status = "loading";
    // },
    // [fetchPostById.fulfilled]: (state, action) => {
    //   state.status = "success";
    //   // console.log(action.payload)
    //   state.post = action.payload;
    // },
    // [fetchPostById.rejected]: (state, action) => {
    //   state.status = "failed";
    //   state.error = action.payload;
    // },
  },
});

export default postSlice.reducer;
