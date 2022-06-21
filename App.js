/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, Alert, Image, TouchableOpacity} from 'react-native';

const estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  legendaFoto: {
    flex: 1,
  },
  imagem: {
    width: 100,
  },
};

const gerarNovaFrase = () => {
  const frases = [
    'Ser feliz sem motivo é a mais autêntica forma de felicidade.',
    'Uma palavra grosseira, uma expressão bizarra, ensinou-me por vezes mais do que dez belas frases.',
    'Quem quiser vencer na vida deve fazer como os seus sábios: mesmo com a alma partida, ter um sorriso nos lábios.',
    'Quando uma criatura humana desperta para um grande sonho e sobre ele lança toda a força de sua alma, todo o universo conspira a seu favor.',
    'É mais fácil obter o que se deseja com um sorriso do que à ponta da espada.',
    'As mais belas frases de amor são ditas no silêncio de um olhar.',
    'Tudo vale a pena quando a alma não é pequena.',
    'O que não provoca minha morte faz com que eu fique mais forte.',
    'A juventude passa e o crepúsculo espalha-se no seu sorriso. / A vida exilada do seu sonho é uma viagem sombria.',
    'Não preciso me drogar para ser um gênio;\nNão preciso ser um gênio para ser humano;\nMas preciso do seu sorriso para ser feliz.',
    'Matar o sonho é matarmo-nos. É mutilar a nossa alma. O sonho é o que temos de realmente nosso, de impenetravelmente e inexpugnavelmente nosso.',
    'O mais feliz dos felizes é aquele que faz os outros felizes.',
    'As coisas mais belas são ditadas pela loucura e escritas pela razão.',
    'As mais belas qualidades tornam-se inúteis, quando a força do caráter não as sustenta.',
    'Lembra-te de que as coisas mais belas do mundo são também as mais inúteis: os pavões e os lírios, por exemplo.',
  ];

  const numeroAleatorio = parseInt(Math.random() * frases.length);
  Alert.alert('', frases[numeroAleatorio]);
};

const App: () => React$Node = () => {
  const {principal, botao, textoBotao, legendaFoto, imagem} = estilos;
  return (
    <View style={principal}>
      <Image source={require('./imgs/logo.png')} style={{width: 200}} />
      <TouchableOpacity style={botao} onPress={gerarNovaFrase}>
        <Text style={textoBotao}>Nova frase</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
