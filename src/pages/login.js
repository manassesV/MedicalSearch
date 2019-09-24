import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import User from '../controller/logincontroller'


export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
    
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

    var regexemail = new RegExp(pattern);

     if(this.state.email == "") {
         alert("Campo email vazio")

         return;
     }

     if(!regexemail.test(this.state.email)){
        alert("Email inválido")

        return;
     }
     if(this.state.password == "") {
        alert("Campo senha vazio")

        return
    }

   var user = new User();
   var self = this

   var model = {
       email: this.state.email,
       password: this.state.password
   }

   user.login(model,
    function(dados){
        self.props.navigation.navigate('Main')
    }, function(error){
        console.log(error);
        
        

    })

  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Acesso</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Senha"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Login" onPress={this.handleLogin} />
        <Button
          title="Você não tem uma conta? Cadastrar"
          onPress={() => this.props.navigation.navigate('SignUp')}
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