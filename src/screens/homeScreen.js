import React, { useEffect, useState } from "react";
import { View, Text, Flatlist, Button } from "react-native";

import styles from "../styles/styles";

import { getRegistro, deleteRegistro } from "../servers/registroCrud";

function CardPersonal(item, navigation, refresh){
    return(
        <View style={styles.card}>
            <View>
                <Text style={styles.title}>
                    {item.titulo}
                </Text>

                <Text style={styles.data}>
                    {item.data}
                </Text>

                <Text style={styles.info}>
                    {item.duracao}
                </Text>

                <Text style={styles.info}>
                    {item.acertos}
                </Text>
            </View>

            <Button
            title="Editar"
            onPress={()=> navigation.navigate("AddEdit", {registro:item})}
            />

            <Button
            title="Deletar"
            onPress={async ()=> {
                await deleteRegistro(item.id);
                refresh();
            }}
            />
        </View>
    )
}

export default function homeScreen({navigation}) {
    const [registro, setRegistro] = useState([]);

    async function loadRegistro() {
        const data = await getRegistro();

        setRegistro(data);
    }

    useEffect(()=> {
        loadPeople();
    },[]);

    return(
        <View style = {styles.coontainer}>
            <Text style = {styles.title}>Registros</Text>

            <Button
                title="Adicionar Registro"
                onPress={()=> navigation.navigate("AddEdit")}
            />

            <Flatlist
            data={registro}
            keyExtractor={(item)=> item.id.toString()}

            renderItem={({})=>(
                <CardPersonal
                item={item}
                navigation={navigation}
                refresh={loadRegistro}
                />
            )}
            />
        </View>
    )
}