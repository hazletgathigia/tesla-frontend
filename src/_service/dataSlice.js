import { createSlice } from "@reduxjs/toolkit";
import { fetchIdData } from "./actions";

const initialState = {};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchIdData.pending, (state, action) => {
                state.loading = true;
                state.errorMessage = undefined;
                state.idData = undefined;
            })
            .addCase(fetchIdData.fulfilled, (state, action) => {
                state.loading = false;
                state.idData = action.payload;
            })
            .addCase(fetchIdData.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = action.error.message;
            });
    },
});

export default dataSlice.reducer;
