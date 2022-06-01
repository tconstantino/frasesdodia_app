/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <Text style={ estilos.estiloTexto }>Frases do dia</Text>
    </>
  );
};

const estilos = {
  estiloTexto: {
    fontSize: 40,
    backgroundColor: '#08509b',
    paddingTop: 15,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline line-through',
    shadowColor: '#000000',
    color: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4
  }
};

export default App;
