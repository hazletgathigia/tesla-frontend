import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import BarGraph from "../components/BarGraph";
import "./GraphsScreen.css";
import { Button } from "reactstrap";

const GraphsScreen = () => {
    const { idData } = useSelector((state) => state.data);
    const navigate = useNavigate();

    return (
        <div className="GraphsScreen">
            <div className="HomeLink">
                <Button size="lg" onClick={navigateToHomePage}>
                    Process new file
                </Button>
            </div>

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
