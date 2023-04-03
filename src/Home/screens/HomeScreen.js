import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchIdData } from "../../_service/actions";
import DataCollectionForm from "../components/DataCollectionForm";

const HomeScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return <DataCollectionForm handleSubmit={handleSubmit} />;

    function handleSubmit(data) {
        const formData = createFormData(data);
        dispatch(fetchIdData(formData));
        navigate("/graphs");
    }

    function createFormData(data) {
        const formData = new FormData();
        formData.append("vehicle_model", data.vehicleModel);
        formData.append("file", data.rawFile);
        return formData;
    }
};

export default HomeScreen;
