import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchIdData } from "../../_service/actions";
import DataCollectionForm from "../components/DataCollectionForm";
import IntroCard from "../components/IntroCard";
import "./HomeScreen.css";

const HomeScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="HomeScreen">
            <div className="Title">Ixxat's USB-TO-CAN File Processor</div>
            <div className="IntroCard">
                <IntroCard />
            </div>
            <div className="FileUploadForm">
                <DataCollectionForm className="Fileform" handleSubmit={handleSubmit} />
            </div>
        </div>
    );

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
