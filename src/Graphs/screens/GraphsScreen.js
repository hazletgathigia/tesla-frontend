import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./GraphsScreen.css";
import { Button, Spinner } from "reactstrap";
import ResultsDisplay from "../components/ResultsDisplay";

const GraphsScreen = () => {
    const { filename, idData, loading, errorMessage } = useSelector((state) => state.data);
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

            {errorMessage && <h3>{errorMessage}</h3>}

            {idData && <ResultsDisplay filename={filename} data={idData} />}
        </div>
    );

    function navigateToHomePage() {
        navigate("/");
    }
};

export default GraphsScreen;
