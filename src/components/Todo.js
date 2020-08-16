import React, { Component} from 'react';
import PropTypes from 'prop-types';
import{
    View,
    Text,
    StyleSheet } from 'react-native';


export default 
class Todo extends Component{

    static defaultProps = {
        title : "O norte será lembrado!"
    };

    static propTypes = {                    //o isRequired: Se tiver o isRequired, o react 
       title : PropTypes.string.isRequired, //não deixa eu deixar a variável como defalt.                               
    };

    render(){
        return(
            <View> 
                <Text>{this.props.title}</Text>



            </View>




        );



    }
}

const styles = StyleSheet.create({

});
