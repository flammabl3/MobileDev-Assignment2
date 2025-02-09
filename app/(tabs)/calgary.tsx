import CityPage from "../../components/cityPage";
import { ScrollView, View, StyleSheet } from "react-native";

export default function Tab() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <CityPage
                city="Calgary"
                url="https://www.calgary.ca/home.html"
                image={require("../../assets/calgary.jpg")}
                info="Calgary is a vibrant city in the western Canadian province of Alberta, known for its annual Stampede festival and its proximity to the Rocky Mountains."
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#F5F5F5",
    },
});