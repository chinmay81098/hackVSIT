import React, {Component} from 'react';
import {Stylesheet,View,Text,Button} from 'react-native';

class Main extends Component{
    static navigationOptions = {
        title: "Main"
    };


state = {
    main: [],
}

constructor(props){
    super(props);
    const { navigation } = this.props;
    this.username = navigation.getParam("username");
  }
render(){
    return(
        <View styles={styles.container}>
            <Text style={style.head}>{this.username}</Text>

            <Button title="Next" onPress={this.moveNext}/>
        </View>
    );
 }
}


moveNext = async() => {

    this.props.navigation.navigate("Prescription")
}



const styles=StyleSheet.create({
    container:{
        flex: 1,
    },
    head:{
        fontSize: 20
    }
})

export default Main;