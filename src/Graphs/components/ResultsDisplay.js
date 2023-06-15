import BarGraph from "./BarGraph";

const ResultsDisplay = ({ data }) => {
    return <BarGraph data={prepareBarGraphData(data)} />;

    function prepareBarGraphData(data) {
        return data.map((rawId) => {
            let id = JSON.parse(rawId);
            return { x: id.id_hex, y: id.id_occurrences };
        });
    }
};

export default ResultsDisplay;
