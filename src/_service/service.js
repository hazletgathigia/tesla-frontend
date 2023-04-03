import axios from "axios";

export { uploadFile };

function uploadFile(formData) {
    return axios.post("http://localhost:5000/process", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}
