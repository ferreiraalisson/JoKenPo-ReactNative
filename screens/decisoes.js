
import { StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const imagens = {
    pedra: require('../assets/jkp_pedra.png'),
    papel: require('../assets/jkp_papel.png'),
    tesoura: require('../assets/jkp_tesoura.png')
}

export default function Decisao({navigation,route, jokenpoStart}) {

  const { nome } = route.params;

    return(
        <View>
            <Text>Olá, {nome}</Text>
            <Text>Escolha sua jogada:</Text>
            <View>
                {['pedra', 'papel', 'tesoura'].map((opcao) => (
                <TouchableOpacity key={opcao} onPress={() => jokenpoStart(opcao, nome, navigation)}>
                    <Image source={imagens[opcao]} style={styles.img}/>
                </TouchableOpacity>
                ))}   
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    titulo: { fontSize: 20, marginBottom: 20 },
    opcoes: { flexDirection: 'row', marginTop: 20 },
    img: { width: 70, height: 70, marginHorizontal: 10 },
  });
  
