import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk('login/loginUser', async (userInfo, thunkAPI) => {
  try {
    const { data } = await axios
      .post('/api/users/login', {
        email: userInfo.email,
        password: userInfo.password
      });

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Login failed');
  }
});

const initialState = {
  email: "",
  password: "",
  loginSuccess: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loginSuccess = action.payload;
    });
  },
});

export const { setEmail, setPassword } = loginSlice.actions;
export default loginSlice.reducer;
