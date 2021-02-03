import React from 'react';
import { Button } from 'react-native';

import {Container,Form,Input,Title} from './styles'

export default function Longin(){
    return (
    <Container>
        <Title> Login</Title>
        <Form>
            <Input 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Usuário"/>
            
            <Input 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Senha"/>
            <Button onPress={()=>{}} title="Login"/>
        </Form>
    </Container>)
}