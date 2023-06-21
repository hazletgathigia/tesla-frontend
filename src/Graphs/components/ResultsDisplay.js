import { CSVLink } from "react-csv";
import BarGraph from "./BarGraph";
import SummaryTable from "./SummaryTable";

const ResultsDisplay = ({ filename, data }) => {
    return (
        <>
            <p className="Filename">
                <strong>Summary for:</strong> {filename}
            </p>
            <BarGraph data={prepareBarGraphData(data)} />
            <div className="TableAndDownloadLinks">
                <div className="SummaryTable">
                    <SummaryTable responsive data={data} getUniquePayloads={getUniquePayloads} />
                </div>
                <div className="CsvDownloadLinks">
                    <CSVLink filename={prepareDownloadCSVFilename()} data={parseData(data)} separator=";">
                        Download Summary Table as CSV file
                    </CSVLink>
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

    function parseData(data) {
        return data.map((rawId) => {
            let id = JSON.parse(rawId);
            return {
                CAN_ID_Hex: id.id_hex,
                ID_Transmissions: id.id_occurrences,
                Payload_Changes: id.payload_changes,
                Total_Unique_Payloads: getUniquePayloads(id).length,
            };
        });
    }

    function getUniquePayloads(identifier) {
        return Object.keys(identifier.unique_payloads_and_occurrences);
    }

    function prepareDownloadCSVFilename() {
        return "Summarised_" + filename;
    }
};

export default ResultsDisplay;
