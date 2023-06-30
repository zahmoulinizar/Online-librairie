import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: localStorage.getItem("token") || null,
  user: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  isLogin: false,
  isUpdating: false,
  isSent: false,
  resetPassword: false,
  message: "",
};

export const registerItem = createAsyncThunk(
  "auth/registerItem",
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.post(process.env.REACT_APP_BASE_URL +"/user/register", user);
      localStorage.setItem("token", res.data.token);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const loginItem = createAsyncThunk(
  "auth/loginItem",
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.post(process.env.REACT_APP_BASE_URL +"/user/login", {
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("token", res.data.token);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const getUser = createAsyncThunk(
  "auth/getUser",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(process.env.REACT_APP_BASE_URL +"/user/profile", {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.res.data.message);
    }
  }
);
export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.put(
        process.env.REACT_APP_BASE_URL +"/user/update",
        {
          userName: user.userName,
          password: user.password,
          phone: user.phone,
          address: user.address,
          image: user.image,
        },
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.res.data.message);
    }
  }
);
export const confirmCode = createAsyncThunk(
  "auth/confirmCode",
  async ({ id, code }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_BASE_URL +`/user/${id}/validate-code`,
        {
          code: code,
        }
      );
      localStorage.setItem("token", res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const updatePassword = createAsyncThunk(
  "auth/updatePassword",
  async ({ id , password} ,{ rejectWithValue }) => {
    console.log(password)
    try {
      const res = await axios.put(
        process.env.REACT_APP_BASE_URL +`/user/update-password/${id}`,
        {
          password:password,
        },
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const forgetPassword = createAsyncThunk(
  "auth/forgetPasswod",
  async (email, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `http://localhost:8000/user/forgot`,
        email
      );
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // log out
    logoutItem: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.user = null;
      state.isError = false;
      state.isSuccess = false;
      state.isLogin = false;
      state.message = "";
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerItem.pending, (state) => {
        return {
          ...state,
          isLoading: true,
          isError: false,
          isSuccess: false,
          message: "",
        };
      })
      .addCase(registerItem.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: false,
          isSuccess: true,
          isLogin: true,
          user: action.payload.user,
          token: action.payload.token,
          message: "",
        };
      })
      .addCase(registerItem.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: true,
          isSuccess: false,
          message: action.payload,
        };
      })
      .addCase(loginItem.pending, (state) => {
        return {
          ...state,
          isLoading: true,
          isError: false,
          isSuccess: false,
          message: "",
        };
      })
      .addCase(loginItem.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: false,
          isSuccess: true,
          user: action.payload.user,
          token: action.payload.token,
          message: "",
          isLogin: true,
        };
      })
      .addCase(loginItem.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: true,
          isSuccess: false,
          message: action.payload,
        };
      })
      .addCase(getUser.pending, (state, action) => {
        return {
          ...state,
          isLoading: true,
          isError: false,
          isSuccess: false,
          message: "",
        };
      })
      .addCase(getUser.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: false,
          isSuccess: true,
          isLogin: true,
          user: action.payload,
        };
      })
      .addCase(getUser.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: true,
          isSuccess: false,
          message: action.payload,
        };
      })
      .addCase(updateUser.pending, (state, action) => {
        return {
          ...state,
          isLoading: true,
          isError: false,
          isSuccess: false,
          isUpdating: false,
          message: "",
        };
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: false,
          isSuccess: true,
          isUpdating: true,
          user: action.payload.user,
          message: action.payload.message,
        };
      })
      .addCase(updateUser.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: true,
          isSuccess: false,
          isUpdating: false,
          message: action.payload,
        };
      })

      .addCase(forgetPassword.pending, (state) => {
        return {
          ...state,
          isLoading: true,
          isError: false,
          isSuccess: false,
          message: "",
        };
      })
      .addCase(forgetPassword.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: false,
          isSent: true,
          userID: action.payload.userID,
          message: action.payload.message,
        };
      })
      .addCase(forgetPassword.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: true,
          message: action.payload,
        };
      })
      .addCase(confirmCode.pending, (state) => {
        return {
          ...state,
          isLoading: true,
          isError: false,
          isSuccess: false,
          message: "",
        };
      })
      .addCase(confirmCode.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: false,
          resetPassword: true,
          token: action.payload,
        };
      })
      .addCase(confirmCode.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: true,
          message: action.payload,
        };
      })
      .addCase(updatePassword.pending, (state) => {
        return {
          ...state,
          isLoading: true,
          isError: false,
          isSuccess: false,
          message: "",
        };
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: false,
          resetPassword: true,
          userUpdated: true,
          userID: "",
          message: action.payload.message,
        };
      })
      .addCase(updatePassword.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: true,
          message: action.payload,
        };
      });
  },
});
export const { logoutItem } = userSlice.actions;
export default userSlice.reducer;
