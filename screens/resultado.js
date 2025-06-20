
import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button} from 'react-native';

const imagens = {
    pedra: require('../assets/jkp_pedra.png'),
    papel: require('../assets/jkp_papel.png'),
    tesoura: require('../assets/jkp_tesoura.png')
}


export default function Resultado({ route, navigation, placar }) {
    const { nome, resultado, escolhaUsuario, escolhaCPU } = route.params;
  
    const mostrarPlacarFinal = () => {
      console.log('Botão Voltar ao início clicado');
      Alert.alert(
        'Resultado Final',
        `${nome}, aqui está seu placar final:\n\nVitórias: ${placar[0]}\nEmpates: ${placar[1]}\nDerrotas: ${placar[2]}`
      );
      navigation.navigate('TelaHome'); // Voltar para a tela inicial
    };
  
    const jogarNovamente = () => {
      navigation.navigate('TelaDecisoes', { nome }); // Repassa o nome
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>{resultado}</Text>
  
        <Text>{nome} jogou:</Text>
        <Image source={imagens[escolhaUsuario]} style={styles.img} />
  
        <Text>CPU jogou:</Text>
        <Image source={imagens[escolhaCPU]} style={styles.img} />
  
        <View style={styles.botoes}>
          <Button title="Jogar novamente" onPress={jogarNovamente} />
          <Button title="Voltar ao início" onPress={mostrarPlacarFinal} />
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    img: { width: 80, height: 80, marginVertical: 10 },
    botoes: { flexDirection: 'row', marginTop: 30, justifyContent: 'space-around', width: '100%' }
  });