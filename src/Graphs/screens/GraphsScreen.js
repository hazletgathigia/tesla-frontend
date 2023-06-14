import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BarGraph from "../components/BarGraph";
import "./GraphsScreen.css";
import { Button, Spinner } from "reactstrap";

const GraphsScreen = () => {
    const { idData, loading } = useSelector((state) => state.data);
    const navigate = useNavigate();

    return (
        <div className="GraphsScreen">
            <div className="HomeLink">
                <Button size="lg" onClick={navigateToHomePage}>
                    Process new file
                </Button>
            </div>
            {loading && (
                <div className="Spinner">
                    <Spinner color="secondary" style={{ height: "10rem", width: "10rem" }} />
                </div>
            )}

            {idData && <BarGraph data={processRawData(idData)} />}
        </div>
    );

    function processRawData(rawData) {
        return rawData.map((rawId) => {
            let id = JSON.parse(rawId);
            return { x: id.id_hex, y: id.occurrences };
        });
    }

    function navigateToHomePage() {
        navigate("/");
    }
};

export default GraphsScreen;
