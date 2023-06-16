import { CSVLink } from "react-csv";
import BarGraph from "./BarGraph";
import Table from "./SummaryTable";

const ResultsDisplay = ({ data }) => {
    return (
        <>
            <BarGraph data={prepareBarGraphData(data)} />
            <div className="TableAndDownloadLinks">
                <div className="SummaryTable">
                    <Table data={data} responsive />
                </div>
                <div className="CsvDownloadLinks">
                    <CSVLink data={prepareBarGraphData(data)}>Download Summary Table as CSV file</CSVLink>
                    <CSVLink data={prepareBarGraphData(data)}>Download Summary Table as CSV file</CSVLink>
                </div>
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
