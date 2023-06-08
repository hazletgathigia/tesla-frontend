import axiosInstance from "../_helpers/axios";

export { uploadFile };

function uploadFile(formData) {
    return axiosInstance.post("/process", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}
