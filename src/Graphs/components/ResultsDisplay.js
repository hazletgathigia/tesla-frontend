import { CSVLink } from "react-csv";
import BarGraph from "./BarGraph";
import Table from "./SummaryTable";

const ResultsDisplay = ({ filename, data }) => {
    return (
        <>
            <p className="Filename">
                <strong>Summary for:</strong> {filename}
            </p>
            <BarGraph data={prepareBarGraphData(data)} />
            <div className="TableAndDownloadLinks">
                <div className="SummaryTable">
                    <Table data={data} responsive />
                </div>
                <div className="CsvDownloadLinks">
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
