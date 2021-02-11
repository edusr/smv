import React,{useState} from 'react';
import { Button, Text, TextInput} from 'react-native';
import { Container, Input, Submit } from './styles';

export default function CadastroCliente({ navigation }) {

    const[nomeCliente,setNomeCliente] = useState('');
    const[cpfCnpj,setCpfCnpj] = useState('');

    function salvar (){
        console.log( nomeCliente + ' ' + cpfCnpj)
    }

    return(<Container>

        <Text style={{textAlign:'center' }}> Cadastro Cliente</Text>
        
        <Input placeholder="Nome" autoCapitalize="none" value={nomeCliente}
                autoCorrect={false} onChangeText={setNomeCliente}/>
        
        <Input placeholder="CPF/CNPJ" autoCapitalize="none" value={cpfCnpj}
                autoCorrect={false} onChangeText={setCpfCnpj}/>
        
        <Submit onPress={()=> salvar() } >
            <Text style={{textAlign:'center', color:"#fff"}}> Salvar </Text>
        </Submit>

        <Button onPress={()=> navigation.openDrawer()} title="Abrir navegação"></Button>
        
    </Container>)
}