import React,{Component} from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from "react-native";
import axios from 'axios';


class Login extends Component{
    static navigationOptions = {
        title:"Login"
    };


state={
    username: '',
};



render() {
        return (
            <View style={style.wrapper}>
                <Text styles={style.head}>MediVoice</Text>
                <View style={style.body}>
                <Text>Login</Text>
                <Text>Enter username</Text>
                <TextInput 
                onChangeText={username=>this.setState({username})}
                value={this.state.username}/>
                </View>
                <Button title="Login" onPress={this.login}/>
            </View>
        );
    }


    login = async () => {
        /*const { language, username } = this.state;
    
        this.setState({
          is_loading: true
        });
    
        if (username) {
          this.props.navigation.navigate("Rooms", {
            'language': language,
            'id': username
          });
        }
    
        await this.setState({
          is_loading: false,
          username: "",
          language: "en"
        });
      }*/
      this.props.navigation.navigate("Main",{
          'username': username  
      });
    
    }
}


const style=StyleSheet.create({
    wrapper: {
        flex:1,
        backgroundColor: '#FFF'
    },
    head: {
        fontSize: 20
    },
    body: {
        borderBottomWidth: 10
    }
})

export default Login;