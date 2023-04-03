import { useSelector } from "react-redux";
import BarGraphB from "../components/BarGraphComponentB";

const GraphsScreen = () => {
    const { idData } = useSelector((state) => state.data);

    return <>{idData && <BarGraphB data={processRawData(idData)} />}</>;

    function processRawData(rawData) {
        return rawData.map((rawId) => {
            let id = JSON.parse(rawId);
            return { x: id.id_hex, y: id.occurrences };
        });
    }
};

export default GraphsScreen;
