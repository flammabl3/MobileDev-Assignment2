import { View, Text, Image, Linking, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type CityPage_Props = { 
  city: string,
  url: string,
  image: any,
  info: string,
};

const CityPage: React.FC<CityPage_Props> = ({ city, url, image, info }) => {
    const router = useRouter();

    return (
        <View style={styles.page}>
            {/* Back button and title in a row */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push("/welcome")} style={styles.backButton}>
                    <Ionicons name="arrow-back-circle-sharp" size={32} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>{city}</Text>
            </View>

            <Image source={image} style={styles.img} />

            <TouchableOpacity onPress={() => Linking.openURL(url)} style={styles.cityLink}>
                <Text style={styles.linkText}>Go to City Page</Text>
            </TouchableOpacity>

            <Text style={styles.info}>{info}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#F5F5F5",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    backButton: {
        marginRight: 10, // Space between the icon and the title
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#333",
    },
    img: {
        width: "90%",
        height: 250,
        borderRadius: 10,
        marginBottom: 15,
    },
    cityLink: {
        backgroundColor: "#007AFF",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginBottom: 10,
    },
    linkText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    info: {
        fontSize: 18,
        textAlign: "center",
        color: "#444",
        paddingHorizontal: 15,
        lineHeight: 24,
    },
});

export default CityPage;
