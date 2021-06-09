import React , {useContext}from 'react'
import { SafeAreaView, FlatList, Alert } from 'react-native'
import { Avatar, ListItem, Icon, Button } from 'react-native-elements'
import UsersContext from '../context/userContext'


export default props => {

    const { state, dispatch } = useContext(UsersContext)

    function confirmUserDeletion(user) {
        Alert.alert("Excluir usuário", "Deseja excluir o usuário?", [
            {
                text: "Sim",
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user
                    })
                }
            },
            {
                text: "Não"
            }
        ])
    }

    function getUserItem({ item: user }) {
        return (


            <ListItem
                bottomDivider
            >
                <Avatar title={user.name} source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Button
                    onPress={() => {
                        props.navigation.navigate('UserForm', user);
                    }}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                ></Button>
                <Button
                    onPress={() => { confirmUserDeletion(user) }}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                ></Button>
            </ListItem>
        )
    }



    return (
        <SafeAreaView>
            <FlatList data={state.users}
                keyExtractor={user => user.id.toString()}
                renderItem={getUserItem}


            >

            </FlatList>
        </SafeAreaView>
    )
}