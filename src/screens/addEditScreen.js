import React, { useState } from 'react';
import { View, TextInput, Button} from "react-native";

import styles from "../styles/styles";

import { createRegistro, updateRegistro } from "../servers/peopleCrud";

export default function addEditScreen({ route, navigation }) {
    const registro = route.params?.registro;

    const [titulo, setTitulo] = useState(registro?.titulo || "");
    const [data, setData] = useState(registro?.data || "");
    const [acertos, setAcertos] = useState(registro?.acertos || "");
    const [duracao, setDuracao] = useState(registro?.duracao || "");


    async function save(){
        const dados = { titulo, data, acertos, duracao };

        if(registro){
            await updateRegistro(registro.id,dados);
        } else {
            await createRegistro(dados);
        }

        navigation.goBack();
    }

    return(
        <View style = {styles.container}>

            <TextInput
            placeholder="Titulo"
            value={titulo}
            onChangeText={setTitulo}
            />

            <TextInput
            placeholder="Data"
            value={data}
            onChangeText={setData}
            />

            <TextInput
            placeholder="Acertos"
            value={acertos}
            onChangeText={setAcertos}
            />

            <TextInput
            placeholder="Duracao"
            value={duracao}
            onChangeText={setDuracao}
            />

            <Button
            title="Salvar"
            onPress={save}
            />

            <Button
            title="Cancelar"
            onPress={()=> navigation.goBack()}
            />
        </View>
    )
}