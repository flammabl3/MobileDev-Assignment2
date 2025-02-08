import { View, Text, Image, Linking} from 'react-native';
import { StyleSheet } from 'react-native';

type CityPage_Props = { 
    city: string,
    url: string,
    image: any,
    info: string,
}

const CityPage : React.FC<CityPage_Props> = ({ city, url, image, info }) => {
    const styles = StyleSheet.create({
        page: {
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        },
        title: {
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 10,
        },
        img: {
          width: 200,
          height: 200,
          marginBottom: 10,
        },
        link: {
          color: "blue",
          marginBottom: 10,
        },
        info: {
          fontSize: 16,
        },
    });

    return(
        <View style={styles.page}>
            <Text style={styles.title}>{city}</Text>
            <Image source={image} style={styles.img} />
            <Text style={styles.link} onPress={() => Linking.openURL(url)}>
            Go to city page
            </Text>
            <Text style={styles.info}>{info}</Text>
        </View>
    );
};


export default CityPage;