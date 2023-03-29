import { Route, Routes } from "react-router-dom";
import GraphsContainer from "../Graphs/screens/GraphsContainer";
import HomeScreen from "../Home/screens/HomeScreen";

const Screens = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/graphs" element={<GraphsContainer />} />
        </Routes>
    );
};

export default Screens;
