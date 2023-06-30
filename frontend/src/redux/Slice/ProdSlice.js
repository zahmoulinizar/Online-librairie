import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: localStorage.getItem("token") || null,
  product: null,
  products: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  isCreate: false,
  isUpdating: false,
  message: "",
};
export const AddProd = createAsyncThunk(
  "prod/AddProd",
  async (product, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_BASE_URL +"/prod/newProd",
        product ,
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const getProd = createAsyncThunk(
  "prod/getProd",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(process.env.REACT_APP_BASE_URL + `/prod/getProd/${id}`);

      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const getAllProducts = createAsyncThunk(
  "prod/getAllProducts",
  async (products, { rejectWithValue }) => {
    try {
      const res = await axios.get(process.env.REACT_APP_BASE_URL +"/prod/allProd");
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const deleteProd = createAsyncThunk(
  "prod/deleteProd",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(process.env.REACT_APP_BASE_URL +`/prod/delete/${id}`,
      {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const updateProd = createAsyncThunk(
  "prod/updateProd",
  async ({product , id}, { rejectWithValue} ) => {
    console.log(product)
    console.log(id)
    try {
      const res = await axios.put(process.env.REACT_APP_BASE_URL +`/prod/updateProd/${id}`, {
        title: product.title,
        price: product.price,
        desc: product.desc,
        image: product.image,
        category: product.category,
        genre: product.genre,
        quantity: product.quantity,
        editionYear: product.editionYear,
        author: product.author,
        state: product.state,
        publisher: product.publisher,
        codPromo: product.codPromo,
      },
      {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
const prodSlice = createSlice({
  name: "prod",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddProd.pending, (state) => {
        return {
          ...state,
          isLoading: true,
          isError: false,
          isSuccess: false,
          isCreate: false,
          message: "",
          product: null,
        };
      })
      .addCase(AddProd.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: false,
          isSuccess: true,
          isCreate: true,
          message: "",
          product: action.payload,
          products: [...state.products, action.payload],
        };
      })
      .addCase(AddProd.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: true,
          isSuccess: false,
          isCreate: false,
          message: action.payload,
          product: null,
        };
      })
      .addCase(getProd.pending, (state) => {
        return {
          ...state,
          isLoading: true,
          isError: false,
          isSuccess: false,
          isCreate: false,
          message: "",
        };
      })
      .addCase(getProd.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: false,
          isSuccess: true,
          isCreate: true,
          message: "",
          product: action.payload,
        };
      })
      .addCase(getProd.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: true,
          isSuccess: false,
          isCreate: false,
          message: action.payload,
        };
      })
      .addCase(getAllProducts.pending, (state, action) => {
        return {
          ...state,
          isLoading: true,
          isError: false,
          isSuccess: false,
          isCreate: false,
          message: "",
        };
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: false,
          isSuccess: false,
          isCreate: false,
          message: "",
          products: action.payload,
        };
      })
      .addCase(updateProd.pending, (state, action) => {
        return {
          ...state,
          isLoading: true,
          isError: false,
          isSuccess: false,
          isUpdating: false,
          message: "",
        };
      })
      .addCase(updateProd.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: false,
          isSuccess: true,
          isUpdating: true,
          product: action.payload,
          message: action.payload?.message,
        };
      })
      .addCase(updateProd.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: true,
          isSuccess: false,
          isUpdating: false,
          message: action.payload?.message,
        };
      })

      .addCase(deleteProd.fulfilled, (state, action) => {
        return {
          isLoading: false,
          isError: false,
          isSuccess: true,
          isCreate: true,
          message: action.payload.message,
          products: action.payload.prod,
        };
      });
  },
});
export default prodSlice.reducer;
