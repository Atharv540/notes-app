import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput, Modal} from 'react-native';
import {Icon} from 'react-native-elements';
import firebase from 'firebase';


export default class WriteNotesScreen extends React.Component{
    constructor(navigation){
        super(navigation)
        this.state={
            note: "",
            modalVisible: false,
            title: "",
        }
    }
    saveModal = () => {
        return(
            <Modal transparent={true} visible={this.state.modalVisible}>
                <View>
                    <TextInput placeholder="Title.." onChangeText={(text) => {
                        this.setState({
                            title: text,
                        })
                    }} style/>
                </View>
            </Modal>
        )
    }
    showModal = () => {
        this.setState({
            modalVisible: true,
        })
    }
    render(){
        return(
            <View style={styles.container}>
                {this.saveModal()}
                <TextInput multiline style={styles.notesBox} 
                    placeholder="Type here..." placeholderTextColor="#72757a" onChangeText={(text) => {
                     this.setState({
                         note: text
                     })   
                }} value={this.state.text}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    notesBox: {
        width: "95%",
        height: "85%",
        fontSize: 16,
    },
})