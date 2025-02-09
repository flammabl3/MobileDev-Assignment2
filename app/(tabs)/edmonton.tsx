import CityPage from "../../components/cityPage";
import { ScrollView, View, StyleSheet } from "react-native";

export default function Tab() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <CityPage
                city="Edmonton"
                url="https://www.edmonton.ca/"
                image={require("../../assets/edmonton.jpg")}
                info="Edmonton is the capital city of the Canadian province of Alberta. It is located on the North Saskatchewan River and serves as the cultural, governmental, and educational hub of the province."
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