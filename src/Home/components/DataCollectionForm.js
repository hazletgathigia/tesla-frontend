import { useState } from "react";
import { Button, Form, FormGroup, FormText, Input, Label } from "reactstrap";

const DataCollectionForm = ({ handleSubmit }) => {
    const [vehicleModel, setVehicleModel] = useState("Model 3");
    const [rawFile, setRawFile] = useState(undefined);

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
                    <option value="Model 5">Model 5</option>{" "}
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="rawFile">Raw CAN Data File</Label>
                <Input
                    type="file"
                    id="rawFile"
                    name="rawFile"
                    //value={rawFile}
                    onChange={(e) => setRawFile(e.target.files[0])}
                />
                <FormText>Click here to select and upload the raw data files</FormText>
            </FormGroup>
            <Button onClick={() => submit()}>Submit</Button>
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
};

export default DataCollectionForm;
