

import React, { useState, useEffect } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    TextInput,
    FlatList,
    Dimensions,
    Text,
    BackHandler,
    Image,
    Alert,
    TouchableOpacity,
    View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../src/styles/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FontSize } from '../src/styles/FontSizeHelper';
import CurrencyInput from 'react-native-currency-input';
import FlatListShowTemppageScreen from '../components/FlatListShowTemppageScreen';
import { BorderlessButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const ShowTemppageScreen = ({ route }: any) => {
    const navigation = useNavigation();
   
    return (route.params.route &&
        (
            <View
                style={{
                    width: deviceWidth,
                    height: deviceHeight,
                    
                    backgroundColor: Colors.backgroundLoginColorSecondary,
                    
                }}
            >

                <View

                    style={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        width: deviceWidth,
                        padding: deviceHeight * 0.02,
                        borderBottomWidth: 1,
                        borderColor: Colors.borderColor
                    }}>
                    <Text
                        style={{
                            fontSize: FontSize.medium,
                            color: Colors.menuButton,
                            fontWeight: 'bold',
                        }}>
                        {route.params.name}
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={{
                            fontSize: FontSize.large,
                        }}
                        >
                            x
                        </Text>
                    </TouchableOpacity>
                </View>
                <FlatListShowTemppageScreen route={route.params.route} />
            </View>)
    )
}

export default ShowTemppageScreen 