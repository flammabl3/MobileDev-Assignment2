import CityPage from '../../components/cityPage';
import { View } from 'react-native';

export default function Tab() {
    return (
        <View>
             <CityPage
                city="Edmonton"
                url="https://www.edmonton.ca/"
                image={require('../../assets/edmonton.jpg')}
                info="Edmonton is the capital city of the Canadian province of Alberta. Edmonton is on the North Saskatchewan River and is the centre of the Edmonton Metropolitan Region."
            />
        </View>
    )
}