import React from 'react';
import { Button, Text, View } from 'react-native';

export default function CadastroCliente({ navigation }) {

    return(<View>

        <Text style={{textAlign:'center' }}> Cadastro Cliente</Text>
        <Button onPress={()=> navigation.openDrawer()} title="Abrir navegação"></Button>
        
    </View>)
}