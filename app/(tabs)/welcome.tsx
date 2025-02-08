import { View, Text, StyleSheet } from "react-native"

export default function Tab() {
    const styles = StyleSheet.create({
        welcome: {
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            padding: 20,
        },
    });

    return (
        <View>
            <Text style={styles.welcome}>Welcome</Text>
        </View>
    )
}