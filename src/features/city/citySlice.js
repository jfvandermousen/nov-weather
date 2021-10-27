import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiKey = process.env.REACT_APP_API_KEY;


export const getCity = createAsyncThunk(
  "city/getCity",
  async (dispatch, getState) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=brussels&appid=${apiKey}`).then(
      (res) => res.json()
    );
  }
);
const citySlice = createSlice({
  name: "city",
  initialState: {
    city: ["name","visibility","clouds[]","main"],
    status: null,
  },
  reducers : {
    display: (state,action) => {
        state.value = action.payload;

    },
    refresh: (state) => {
        state.value = null;
    }},
  extraReducers: {
    [getCity.pending]: (state, action) => {
      state.status = "loading";
    },
    [getCity.fulfilled]: (state, action) => {
      state.status = "success";
      state.city = action.payload;
    },
    [getCity.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default citySlice.reducer;
export const {display, refresh} = citySlice.actions
