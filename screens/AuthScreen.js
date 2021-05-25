
import * as React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Modal, Alert} from 'react-native';
import {Icon} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

export default class AuthScreen extends React.Component{
    constructor(navigation){
        super(navigation);
        this.state={
            isSignUpModalVisible: false,
            isLoginModalVisible: false,
            email: "",
            password: "",
            given_email: "srivatharv@gmail.com",
            given_password: "123456",
        }
    }
    signUpModal = () => {
        return(
            <Modal visible={this.state.isSignUpModalVisible} transparent={true} animationType={"slide"}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalHeaderContainer}>
                        <Text style={styles.modalHeader}>Create Account</Text>
                        <TouchableOpacity onPress={() => {
                            this.closeSignUpModal();
                        }}>
                            <Icon type="font-awesome" name="times-circle" color="orange" style={styles.modalIcon}/>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        placeholder="Email address"
                        placeholderTextColor="orange"
                        color="orange"
                        keyboardType={"email-address"}
                        style={styles.modalInput}
                        onChangeText={(text) => {
                            this.setState({
                                email: text.toLowerCase(),
                            })
                        }}
                        maxLength={25}
                        value={this.state.email}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="orange"
                        color="orange"
                        style={styles.modalInput}
                        secureTextEntry={true}
                        maxLength={15}
                        onChangeText={(text) => {
                            this.setState({
                                password: text,
                            })
                        }}
                        value={this.state.password}
                    />
                    <TouchableOpacity style={styles.modalButton} onPress={() => {
                        this.createUser(this.state.email, this.state.password);
                    }}>
                        <Text style={styles.modalButtonText}>Create</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }
    logInModal = () => {
        return(
            <Modal visible={this.state.isLoginModalVisible} animationType={"slide"} transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalHeaderContainer}>
                        <Text style={styles.modalHeader}>Log in</Text>
                        <TouchableOpacity onPress={() => {
                            this.closeLogInModal();
                        }}>
                            <Icon type="font-awesome" name="times-circle" color="orange" style={styles.modalIcon}/>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        placeholder="Email address"
                        placeholderTextColor="orange"
                        color="orange"
                        keyboardType={"email-address"}
                        style={styles.modalInput}
                        onChangeText={(text) => {
                            this.setState({
                                given_email: text.toLowerCase(),
                            })
                        }}
                        maxLength={25}
                        value={this.state.given_email}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="orange"
                        color="orange"
                        style={styles.modalInput}
                        secureTextEntry={true}
                        maxLength={15}
                        onChangeText={(text) => {
                            this.setState({
                                given_password: text,
                            })
                        }}
                        value={this.state.given_password}
                    />
                    <TouchableOpacity style={styles.modalButton} onPress={() => {
                        this.login(this.state.given_email, this.state.given_password);
                    }}>
                        <Text style={styles.modalButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }
    showSignUpModal = () => {
        this.setState({
            isSignUpModalVisible: true,
        })
    }
    showLoginModal = () => {
        this.setState({
            isLoginModalVisible: true,
        })
    }
    login = async (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            Alert.alert("Logged In", "User succesfully logged in!", [
                {text: "OK", onPress: () => this.logIn()}
            ]);
        }).catch(function(err){
            return Alert.alert("Error!", err.message)
        })
    }
    createUser = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
            Alert.alert("Account created", "User succesfully created!", [
                {text: "OK", onPress: () => this.closeSignUpModal()}
            ]);
        }).catch(function(err){
            return Alert.alert("Error!", err.message)
        })
    }
    closeSignUpModal = () => {
        this.setState({
            isSignUpModalVisible: false,
            email: "",
            password: "",
        })
    }
    closeLogInModal = () => {
        this.setState({
            isLoginModalVisible: false,
            given_email: "",
            given_password: "",
        })
    }
    logIn = () => {this.setState({
        isLoginModalVisible: false,
        given_email: "",
        given_password: "",
    })
        this.props.navigation.navigate("HomeScreen")
    }
    render(){
        return(
            <View style={styles.container}>
                {this.signUpModal()}
                {this.logInModal()}
                <View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Notes</Text>
                        <Icon type="font-awesome" name="sticky-note"/>
                    </View>
                    <Text style={styles.headerSubtext}>A little note, a little quote</Text>
                </View>
                <View style={styles.authButtonsContainer}>
                    <TouchableOpacity style={styles.authButton} onPress={() => {
                        this.showLoginModal();
                    }}>
                        <Icon type="ionicon" name="log-in-outline" color="orange" size={28}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.authButton} onPress={() => {
                        this.showSignUpModal();
                    }}>
                        <Icon type="feather" name="user-plus" color="orange" size={24}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange",
    },
    headerContainer: {
        flexDirection: "row",
    },
    headerText: {
        fontSize: 60,
        fontWeight: "100",
    },
    headerSubtext: {
        fontWeight: "100",
        fontStyle: "italic",
    },
    authButtonsContainer: {
        marginTop: "10%",
        flexDirection: "row",
        marginRight: "8%",
    },
    authButton: {
        height: 50,
        width: 50,
        backgroundColor: "black",
        marginBottom: "5%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        flexDirection: "row",
        marginLeft: "5%",
    },
    authButtonText: {
        color: "orange",
        fontSize: 15,
        fontStyle: "italic",
        fontWeight: "100",
        marginRight: "10%",
    },
    modalContainer: {
        width: "90%",
        height: "45%",
        backgroundColor: "black",
        marginTop: "35%",
        marginLeft: "5%",
        borderRadius: 15,
        alignItems: "center",
    },
    modalHeader: {
        color: "orange",
        fontWeight: "300",
        fontSize: 20,
        marginTop: "5%",
        marginLeft: "20%",
    },
    modalInput: {
        marginTop: "8%",
        height: 40,
        width: 220,
        borderWidth: 1,
        borderColor: "orange",
        borderRadius: 15,
        textAlign: "center",
        fontSize: 12,
        fontStyle: "italic",
    },
    modalHeaderContainer: {
        flexDirection: "row",
    },
    modalIcon: {
        marginTop: "25%",
        marginLeft: "15%",
    },
    modalButton: {
        backgroundColor: "orange",
        marginTop: "10%",
        height: 40,
        width: 220,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },
    modalButtonText: {
        fontStyle: "italic",
        fontWeight: "200",
    },
})