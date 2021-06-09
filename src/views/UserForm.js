import React, { useContext, useState } from 'react'
import { SafeAreaView, Text, TextInput, StyleSheet, Button } from 'react-native'
import UsersContext from '../context/userContext'


export default ({ route, navigation }) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)


    return (
        <SafeAreaView style={style.form}>
            <Text>Nome</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({ ...user, name })}
                placeholder="Informe o nome.." 
                value={user.name}>
            </TextInput>


            <Text>Email</Text>
            <TextInput
                onChangeText={email => setUser({ ...user, email })}
                placeholder="Informe o email.." value={user.email}
                style={style.input}>
            </TextInput>


            <Text>Url do avatar</Text>
            <TextInput
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                placeholder="Informe a url do avatar.." value={user.avatarUrl}
                style={style.input}>
            </TextInput>

            <Button title="Salvar" 
            onPress={() => {
                dispatch({
                    type: user.id ? 'updateUser' : 'createUser',
                    payload: user
                })

                navigation.goBack()
            }}>

            </Button>


        </SafeAreaView>
    )

}

const style = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {

        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10
    }
})

