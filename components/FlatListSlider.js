import React, { useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Platform,
    Dimensions,
} from 'react-native';
import { FlatListSlider } from 'react-native-flatlist-slider';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const images = []

export default FlatSlider = ({ route }) => {

    return (route ?

        <FlatListSlider
            data={route}
            height={deviceHeight * 0.3}
            timer={5000}
            onPress={item => console.log(JSON.stringify(item))}
            contentContainerStyle={{ paddingHorizontal: 0 }}
            indicatorContainerStyle={{ position: 'absolute', bottom: 20 }}
            indicatorActiveColor={'#0077c2'}
            indicatorInActiveColor={'#ffffff'}
            indicatorActiveWidth={30}
            animation
        />

        : <></>)
}