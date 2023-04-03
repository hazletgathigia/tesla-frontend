import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BarGraph from "../components/BarGraph";

const GraphsScreen = () => {
    const { idData } = useSelector((state) => state.data);

    return (
        <>
            <Link to="/">Home</Link>
            {idData && <BarGraph data={processRawData(idData)} />}
        </>
    );

    function processRawData(rawData) {
        return rawData.map((rawId) => {
            let id = JSON.parse(rawId);
            return { x: id.id_hex, y: id.occurrences };
        });
    }
};

export default GraphsScreen;
