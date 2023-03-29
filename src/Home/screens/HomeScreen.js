import DataCollectionForm from "../components/DataCollectionForm";

const HomeScreen = () => {
    return <DataCollectionForm handleSubmit={handleSubmit} />;

    function handleSubmit(data) {
        console.log(data.vehicleModel);
        console.log(data.rawFile);
    }
};

export default HomeScreen;
