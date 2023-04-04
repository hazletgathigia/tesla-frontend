import { createAsyncThunk } from "@reduxjs/toolkit";
import { uploadFile } from "./service";

export const fetchIdData = createAsyncThunk("data/fetchIdData", async (formData) => {
    const response = await uploadFile(formData);
    return response.data;
});
