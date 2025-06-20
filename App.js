import React, { useState } from 'react';
import { StyleSheet} from 'react-native';
import Home from './screens/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Decisao from './screens/decisoes';
import Resultado from './screens/resultado';

const Stack = createNativeStackNavigator();

export default function App() {

  const [jogadaUsuario, setJogadaUsuario] = useState('');
  const [jogadaCPU, setJogadaCPU] = useState('');
  const [resultado, setResultado] = useState('');
  const [placar, setPlacar] = useState([0, 0, 0]);

  const jokenpoStart = (decisao, nome, navigation) => {

    const opcoes = ['pedra', 'papel', 'tesoura'];
    const cpu = opcoes[Math.floor(Math.random()*3)];

    setJogadaUsuario(decisao);
    setJogadaCPU(cpu);

    let embate = '';
    if (decisao === cpu){
      embate = 'Empate!';
    }else if(
    (decisao === 'pedra' && cpu === 'tesoura') || 
    (decisao === 'papel' && cpu === 'pedra') || 
    (decisao === 'tesoura' && cpu === 'papel')){
      embate = 'Vitória!';
    }else{
      embate = 'Você perdeu!';
    }

    setResultado(embate);
    atualizarPlacar(embate);
    
    navigation.navigate('TelaResultado', {
      nome,
      resultado: embate,
      escolhaUsuario: decisao,
      escolhaCPU: cpu
    });
  }

  const atualizarPlacar = (embate) => {
    const novo = [...placar];
    if (embate === 'Você venceu!') novo[0]++;
    else if (embate === 'Empate!') novo[1]++;
    else novo[2]++;
    setPlacar(novo);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaHome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TelaHome" component={Home}/>
        <Stack.Screen name="TelaDecisoes">
          {(props) => <Decisao {...props} jokenpoStart={jokenpoStart} />}
        </Stack.Screen>
        <Stack.Screen name="TelaResultado">
          {(props) => <Resultado {...props} placar={placar} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
