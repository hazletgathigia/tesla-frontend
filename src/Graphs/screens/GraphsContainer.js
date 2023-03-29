import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import BarGraphB from "../components/BarGraphComponentB";

const GraphsContainer = () => {
    const [idData, setIdData] = useState([]);

    useEffect(() => {
        getIdentityOccurrences();
    }, []);

    return (
        <>
            {idData &&
                idData.length === 0 &&
                idData.map((id, index) => {
                    let parsedId = JSON.parse(id);
                    // return <li key={index}>{"ID: " + parsedId.id_hex + ", Occurrences: " + parsedId.occurrences}</li>;
                })}
            {idData && <BarGraphB data={idData} />}
        </>
    );

    async function getIdentityOccurrences() {
        try {
            const response = await axios.get("http://localhost:5000/");
            const data = processRawData(response.data);
            setIdData(data);
        } catch (e) {
            return "Error while fetching ID data";
        }
    }

    function processRawData(rawData) {
        return rawData.map((rawId) => {
            let id = JSON.parse(rawId);
            return { x: id.id_hex, y: id.occurrences };
        });
    }
};

export default GraphsContainer;
