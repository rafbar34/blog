import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllPosts = createAsyncThunk('/posts', async () => {
  const response = await axios.get('http://localhost:3000/api/allPosts');
  return response.data.posts;
});

const initialState = {
  posts: [],
  error: null,
  status: 'idle',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state) => {
      state.posts;
    },
    getCategory: (state) => {
      state.posts;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.status = 'success';
      })
      .addCase(fetchAllPosts.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchAllPosts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const {getPosts, getCategory} = postsSlice.actions;

export default postsSlice.reducer;
