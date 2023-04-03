import { createAsyncThunk } from "@reduxjs/toolkit";
import { uploadFile } from "./service";

export const fetchIdData = createAsyncThunk("data/fetchIdData", async (formData) => {
    try {
        const response = await uploadFile(formData);
        return response.data;
    } catch (error) {
        return error.message;
    }
});
