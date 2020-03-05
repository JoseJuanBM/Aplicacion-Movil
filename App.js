import React from 'react';
import {StyleSheet} from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body, Button,Item, Label, Input, Icon} from "native-base";
const App: () => React$Node =() => {
  return (

    <Container>
        <Header />
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style= {misEstilos.textCenter}>Iniciar  sesión</Text>
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
                <Item inlineLabel>
                <Icon type= 'FontAwesome' name= 'user'></Icon>
                  <Input placeholder= 'Nombre de usuario'/>
                </Item>
                <Item inlineLabel last>
                <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Contraseña'/>
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button primary style ={misEstilos.boton}><Text> Ingresar</Text></Button>
            </CardItem>
          </Card>
          <Card>
          <Button block success>
            <Text>Registrarse</Text>
          </Button>
          </Card>
        </Content>      
      </Container>

       


  );
};

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
    width: '100%',
  },
  boton: {
    marginLeft: '35%',
  },
  body: {
    paddingVertical: 35,
  }
  
});

export default App;