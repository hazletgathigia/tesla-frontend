import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Label,
} from "recharts";

const sampleData = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const BarGraphB = ({ data }) => {
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
            <Bar dataKey="y" name="Total Transmissions" fill="#8884d8" />
        </BarChart>
    );
};

export default BarGraphB;
