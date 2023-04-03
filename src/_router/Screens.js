import { Route, Routes } from "react-router-dom";
import GraphsScreen from "../Graphs/screens/GraphsScreen";
import HomeScreen from "../Home/screens/HomeScreen";

const Screens = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/graphs" element={<GraphsScreen />} />
        </Routes>
    );
};

export default Screens;
