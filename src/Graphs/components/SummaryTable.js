import { Table } from "reactstrap";
import PayloadsModal from "./PayloadsModal";

const SummaryTable = ({ data, getUniquePayloads }) => {
    return (
        <Table bordered striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>CAN ID (hex)</th>
                    <th>ID Transmissions</th>
                    <th>Payload Changes</th>
                    <th>Total Unique Payloads</th>
                    <th>Payloads</th>
                </tr>
            </thead>
            <tbody>
                {data.map((rawId, index) => {
                    let identifier = JSON.parse(rawId);
                    let uniquePayloads = getUniquePayloads(identifier);
                    let totalUniquePayloads = uniquePayloads.length;
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{identifier.id_hex}</td>
                            <td>{identifier.id_occurrences}</td>
                            <td>{identifier.payload_changes}</td>
                            <td>{totalUniquePayloads}</td>
                            <td>
                                {totalUniquePayloads === 1 ? uniquePayloads : <PayloadsModal identifier={identifier} />}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

export default SummaryTable;
