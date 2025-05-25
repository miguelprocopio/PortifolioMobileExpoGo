import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from './Screens/Inicio';
import Sobre from './Screens/Sobre';
import Projetos from './Screens/Projetos';
import Jogo from './Screens/Jogo';
import ExperienciaAcademica from './Screens/ExperienciaAcademica';
import ExperienciaProfissional from './Screens/ExperienciaProfissional';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Projetos" component={Projetos} />
        <Stack.Screen name="Jogo" component={Jogo} />
        <Stack.Screen name="ExperienciaAcademica" component={ExperienciaAcademica} />
        <Stack.Screen name="ExperienciaProfissional" component={ExperienciaProfissional} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
