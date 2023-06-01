import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from "recharts";

const BarGraph = ({ data }) => {
    return (
        <BarChart
            width={2700}
            height={700}
            data={data}
            margin={{
                top: 15,
                right: 30,
                left: 20,
                bottom: 25,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x">
                <Label value="CAN Identifier" offset={5} position="bottom" />
            </XAxis>
            <YAxis label={{ value: "Transmissions", angle: -90, position: "insideLeft" }} />
            <Tooltip cursor={{ stroke: "red", strokeWidth: 2 }} />
            <Legend verticalAlign="top" height={36} />
            <Bar dataKey="y" name="Transmissions per CAN Identifier" fill="#8884d8" />
        </BarChart>
    );
};

export default BarGraph;
