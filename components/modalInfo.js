import React from 'react';
import { TouchableOpacity, Modal, StyleSheet, View, Text} from "react-native";

export default function ModalInfo({ visible, onClose, content}){
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalMain}>
                <View style={styles.modalContent}>
                    {content}
                    <TouchableOpacity onPress={onClose}>
                        <Text>X</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Modal>
    );
};

const styles = StyleSheet.create({
    modalMain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        width: '80%',
        elevation: 5,
      },
      modalTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
      },
});

