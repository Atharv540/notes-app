
import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import AuthScreen from '../screens/AuthScreen';
import HomeScreen from '../screens/HomeScreen';
import WriteNotesScreen from '../screens/WriteNotesScreen';
import { StyleSheet } from 'react-native';

const screens = {
    AuthScreen: {
        screen: AuthScreen,
        navigationOptions: {
           headerShown: false,
        }
    },
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    WriteNotesScreen: {
        screen: WriteNotesScreen,
        navigationOptions: {
            title: "Write a Note",
            headerLeft: null,
            headerRight: () => <TouchableOpacity style={styles.saveButton} onPress={() => {
                this.showModal();
            }}>
                <Text>Save</Text>
            </TouchableOpacity>,
            headerStyle: {
                backgroundColor: "orange"
            },
            headerTitleStyle: {
                fontWeight: "100"
            },
        }
    }
}

const StackNavigator = createStackNavigator(screens);

const styles = StyleSheet.create({
    saveButton: {
        marginRight: 15,
    },
})

export default createAppContainer(StackNavigator);

