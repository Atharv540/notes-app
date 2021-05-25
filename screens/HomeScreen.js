import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

export default class HomeScreen extends React.Component{
    constructor(navigation){
        super(navigation);
    }
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Home</Text>
                        <Icon type="feather" name="home"/>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => {
                    this.props.navigation.navigate('WriteNotesScreen')
                }}>
                    <Icon type="feather" name="plus-circle" style={styles.buttonIcon}/>
                    <Text style={styles.buttonText}>Create Note</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Icon type="feather" name="search" style={styles.buttonIcon}/>
                    <Text style={styles.buttonText}>Browse Notes</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "orange",
    },
    button: {
        borderWidth: 1,
        width: "65%",
        height: "8%",
        alignItems: "center",
        borderRadius: 15,
        flexDirection: "row",
        marginBottom: "5%",
    },
    buttonText: {
        marginLeft: "15%",
    },
    buttonIcon: {
        marginLeft: 10,
    },
    headerContainer: {
        flexDirection: "row",
        marginTop: "20%",
        marginTop: "25%"
    },
    headerText: {
        fontSize: 50,
        fontWeight: "100",
        marginBottom: "25%",
    },
})