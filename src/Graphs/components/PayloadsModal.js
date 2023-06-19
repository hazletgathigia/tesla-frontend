import { useState } from "react";
import { CSVLink } from "react-csv";
import { Button, Modal, ModalHeader, ModalBody, Table } from "reactstrap";

const PayloadsModal = ({ identifier }) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const payloads = getUniquePayloadsAsArray(identifier);

    return (
        <>
            <Button onClick={toggle}>View Payloads</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Payloads transmitted by CAN Identifier (hex) {identifier.id_hex}
                </ModalHeader>
                <ModalBody>
                    <CSVLink data={payloads}>Download Payloads and Occurrences as CSV file</CSVLink>
                    <PayloadsTable payloads={payloads} />
                </ModalBody>
            </Modal>
        </>
    );

    function getUniquePayloadsAsArray(identifier) {
        return Object.entries(identifier.unique_payloads_and_occurrences);
    }
};

export default PayloadsModal;

function PayloadsTable({ payloads }) {
    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Payload (Hex)</th>
                    <th>Transmissions</th>
                </tr>
            </thead>
            <tbody>
                {payloads.map((payload, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{payload[0]}</td>
                            <td>{payload[1]}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}
