import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Tab() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image 
                source={{ uri: "https://www.canadiannaturephotographer.com/AlbertaLandscapes2019/rberdan_morraine_Lake.jpg" }} 
                style={styles.banner} 
            />
            <Text style={styles.welcome}>Welcome to Alberta</Text>
            <Text style={styles.description}>
                Welcome to the Alberta app! Here, you can explore detailed 
                information about Edmonton and Calgary, two of Alberta's largest cities. 
                Discover key attractions, local events, and essential travel tips to make 
                the most of your visit. Whether you're interested in Edmonton's vibrant 
                arts scene or Calgary's rich cowboy culture, this app provides everything 
                you need to navigate and enjoy these cities.
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#F5F5F5",
        alignItems: "center",
        padding: 20,
    },
    banner: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    welcome: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        color: "#333",
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: "center",
        color: "#555",
        lineHeight: 24,
        paddingHorizontal: 10,
    },
});