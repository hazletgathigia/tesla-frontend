import BarGraph from "./BarGraph";
import Table from "./SummaryTable";

const ResultsDisplay = ({ data }) => {
    return (
        <>
            <BarGraph data={prepareBarGraphData(data)} />
            <div className="SummaryTable">
                <Table data={data} responsive />
            </div>
        </>
    );

    function prepareBarGraphData(data) {
        return data.map((rawId) => {
            let id = JSON.parse(rawId);
            return { x: id.id_hex, y: id.id_occurrences };
        });
    }
};

export default ResultsDisplay;
