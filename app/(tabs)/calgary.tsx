import CityPage from '../../components/cityPage';
import { View } from 'react-native';

export default function Tab() {
    return (
        <View>
            <CityPage
                city="Calgary"
                url="https://www.calgary.ca/home.html"
                image={require('../../assets/calgary.jpg')}
                info="Calgary is a city in the western Canadian province of Alberta. It is situated at the confluence of the Bow River and the Elbow River in the south of the province."
            />
        </View>
    )
}