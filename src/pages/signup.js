import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import User from '../controller/logincontroller'


export default class SignUp extends React.Component {
  state = { email: '', password: '', passwordconf:'', errorMessage: null }
handleSignUp = () => {
 
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

    var regexemail = new RegExp(pattern);

     if(this.state.email == "") {
         alert("Campo email vazio!")
 
         return;
     }

     if(!regexemail.test(this.state.email)){
        alert("Email inválido!")

        return;
     }
     if(this.state.password == "") {
        alert("Campo senha vazio!")

        return;
    }

    if(this.state.passwordconf == ""){
      alert("Campo confirme senha vazio!")

      return;
    }

    if(this.state.password != this.state.passwordconf){
      alert("Senha e Confirme senha diferentes!")

      return;
    }

    var user = new User();

    var model = {
        email: this.state.email,
        password: this.state.password
    }
 
    user.create(model,
     function(dados){
           alert("Correct")
     }, function(error){
         alert("Error")
 
     })

}
render() {
    return (
      <View style={styles.container}>
        <Text>Cadastrar</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />

        <TextInput
          secureTextEntry
          placeholder="ConfPassword"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={passwordconf => this.setState({ passwordconf })}
          value={this.state.passwordconf}
        />
        <Button title="Cadastrar" onPress={this.handleSignUp} />
        <Button
          title="Você já possui uma conta? Acessar"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})