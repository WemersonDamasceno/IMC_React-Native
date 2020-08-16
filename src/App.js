import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Todo from './components/Todo';

export default class App extends Component {
  
  state = {
    user : "Wemerson",
    listTodos:[
        {id: 0,text:'Assistir o narutinho'},
        {id:1, text: 'Estudar pra faculdade'},
        {id: 2, text: 'Jogar um pubzinho'}
    ],
  };
  //Para mudar o estado de um component.
  addFala = () =>{
    this.setState({
      user : this.state.user + ' 1',
      listTodos : [...this.state.listTodos,{id:Math.random(), text: "Nova Fala Final"}],
    })
  }

  calcularIMC = () => {
    let imc = this.state.massa / (this.state.altura * this.state.altura)
    let s = this.state
    s.resultadoNumber = imc
  

    if(imc <= 16.9 ){
      s.resultadoText = "Muito abaixo do peso"
    }else if(imc <18.4 && imc > 17){
      s.resultadoText = "Abaixo do peso"
    }else if(imc <= 24.9 && imc >= 18.5){
      s.resultadoText = "Peso Normal"
    }else if(imc < 29.9 && imc > 25){
      s.resultadoText = "Acima do peso"  
    }else if(imc < 34.9 && imc > 30){
      s.resultadoText = "Obesidade Grau I"    
    }else if(imc < 35 && imc > 40){
      s.resultadoText = "Obesidade Grau II"    
    }else{
      s.resultadoText = "Obesidade Grau III"    
    }

    this.setState(s)

  }

  constructor(props){
    super(props)
    this.state = {altura: 0, massa:0, resultadoNumber:0, resultadoText:""}
    this.calcularIMC = this.calcularIMC.bind(this);
  }


  render(){
    return (
        <View style={styles.container}>
          
          <TextInput placeholder="Altura" keyboardType="numeric"style = {styles.input} onChangeText ={(altura) =>{this.setState({altura})}}/>
          <TextInput placeholder="Massa" keyboardType="numeric"style = {styles.input} onChangeText ={(massa) =>{this.setState({massa})}}/>

          <TouchableOpacity style ={styles.button_calcular} onPress={this.calcularIMC}>
            <Text style = {styles.inputButton}>Calcular IMC</Text>
          </TouchableOpacity>
          <Text style ={styles.inputResultado}>{this.state.resultadoNumber.toFixed(2)}</Text>
          <Text style ={styles.inputResultado}>{this.state.resultadoText}</Text>

        </View>
    );
  }
}

const styles = StyleSheet.create({

  container:{
    justifyContent: "center",
    display:"flex",
    alignItems:"center",
  },

  button_calcular:{
    marginTop:10,
    alignSelf:"center",
    backgroundColor: "#008000",
    color:"#FFFFFF",
    height:40,
    width:"80%",
  },

  inputButton:{
    color:"#FFFFFF",
    fontSize: 24,
    alignSelf: "center",
  },

  input:{
    color:"#FFFFFF",
    width:"80%",
    marginTop:10,
    backgroundColor:"#DCDCDC",
    color: "#000000",
    fontSize: 24,
    textAlign:"center",
    alignSelf: "center",
  },

  inputResultado:{
   alignSelf:"center",
   color:"#000000",
   fontSize: 30,
   padding:5
  }



})