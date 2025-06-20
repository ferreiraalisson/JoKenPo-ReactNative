
import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import ModalInfo from '../components/modalInfo';

export default function Home({navigation}) {

const [ativarModal, setAtivarModal] = useState(false);
const [conteudoModal, setConteudoModal] = useState(null);
const [nome, setNome] = useState('');

  const acionarModal = (opcao) => {
    if(opcao === 'regras'){
      setConteudoModal(
          <>
            <Text>Regras:</Text>
            <Text>- Não pode usar cartas duplicadas</Text>
            <Text>- Cada jogador tem 30 segundos por rodada</Text>
          </>
      );
    } else if (opcao === 'comoJogar') {
      setConteudoModal(
        <>
          <Text>Como Jogar</Text>
          <Text>1. Cada jogador recebe 5 cartas</Text>
          <Text>2. A rodada começa pelo jogador à esquerda do dealer</Text>
        </>
      );
    }
    setAtivarModal(true);
  }; 

  const iniciarJogo = (nomeDigitado) => {
    if(nomeDigitado && nomeDigitado.trim() !== ''){
        setNome(nomeDigitado.trim());
        navigation.navigate('TelaDecisoes', { nome: nome });
    }else{
        console.log('Nome inválido, disparando alert');
        Alert.alert('Preencha o campo acima!');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>JoKenPo</Text>
      
      <Text>Tutoriais</Text>
      <View style={{flexDirection: 'row'}}>

        <TouchableOpacity onPress={() => acionarModal('regras') }>
          <Text style={{paddingRight: 20}} >Regras do jogo:</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => acionarModal('comoJogar')}>
          <Text>Como jogar:</Text>
        </TouchableOpacity>
        
        <ModalInfo 
          visible={ativarModal}
          onClose={() => setAtivarModal(false)}
          content={conteudoModal}
        />
      </View>  

      <TextInput 
        placeholder="Digite o seu nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      /> 
  
      <TouchableOpacity onPress={() => iniciarJogo(nome)} style={styles.botao}>
      <Text style={styles.botaoTexto}>Jogar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  input: { 
    borderWidth: 1, 
    width: '80%', 
    padding: 10, 
    marginBottom: 20 
  },
  botao: {
    backgroundColor: '#4CAF50', // Verde
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 3, // sombra Android
    shadowColor: '#000', // sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});