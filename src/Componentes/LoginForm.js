import React,{useState} from 'react'
//touchable opacity el boton
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { Icon,Input,Button,Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'


export default function LoginForm() {

    //guarda los valores de los formularios
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")



    return (
        <View style={styles.container}>
            <View 
            style={{ borderBottomColor:"#25D366",
            borderBottomWidth:2,
            width:100,
             }}
            />
            <Input placeholder= "correo"/>
            <Input placeholder = "contraseña"/>
            <Button title="Entrar"/>

            <Text>¿no tienes cuenta?
                <Text>{"  "} Crear Cuenta</Text>
            </Text>

            <Divider 
                style={{backgroundColor:"1287c7e", height: 1,width:"90%",marginTop:20}}
            />
            <Text>O</Text>

            <View>
                <TouchableOpacity>
                    <Icon 
                        size={24}
                        type="material-community"
                        name="google"
                        color="red"
                        backgroundColor="transparent"
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Icon 
                        size={24}
                        type="material-community"
                        name="facebook"
                        color="red"
                        backgroundColor="transparent"
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flex:1, //para que cubra toda la pantalla
        marginTop:20,//espacio entre el formlario y ek mensaaje de bienvenida
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        alignItems:"center",//para aliniar todos los elementos al centro
        paddingTop:20,//para bajar los elemntos del contenido no tanto a la cabecera
    }
})
