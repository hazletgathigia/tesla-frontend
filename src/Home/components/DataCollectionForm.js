import { useState } from "react";
import { Button, Form, FormGroup, FormText, Input, InputGroup, Label } from "reactstrap";

const DataCollectionForm = ({ handleSubmit }) => {
    const [vehicleModel, setVehicleModel] = useState("Model 3");
    const [rawFile, setRawFile] = useState(undefined);
    const [fileKey, setFileKey] = useState(undefined);

    return (
        <Form>
            <FormGroup>
                <Label for="vehicleModel">Vehicle Model</Label>
                <Input
                    type="select"
                    id="vehicleModel"
                    name="vehicleModel"
                    value={vehicleModel}
                    onChange={(e) => setVehicleModel(e.target.value)}
                >
                    <option value="Model 3">Model 3</option>
                    <option value="Model 5">Model 5</option>
                    <option value="Model X">Model X</option>{" "}
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="rawFile">Raw CAN Data File</Label>
                <InputGroup>
                    <Input
                        type="file"
                        id="rawFile"
                        name="rawFile"
                        key={fileKey}
                        onChange={(e) => setRawFile(e.target.files[0])}
                    />
                    <Button onClick={() => resetFile()}>Reset File</Button>
                </InputGroup>
                <FormText>Click here to select and upload the raw data files</FormText>
            </FormGroup>
            {/* <Button onClick={() => resetFile()}>Reset File</Button> */}
            <Button onClick={() => submit()}>Process File</Button>
        </Form>
    );

    function submit() {
        const data = {};
        data["vehicleModel"] = vehicleModel;

        if (rawFile !== undefined) {
            data["rawFile"] = rawFile;
        }

        handleSubmit(data);
    }

    function resetFile() {
        setFileKey(Date.now());
        setRawFile(undefined);
    }
};

export default DataCollectionForm;
