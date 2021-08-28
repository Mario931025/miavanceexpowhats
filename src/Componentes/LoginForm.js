import React,{useState} from 'react'
//touchable opacity el boton
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { Icon,Input,Button,Divider } from 'react-native-elements'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import {validateEmail} from '../utils/Uitl'
import {isEmpty} from 'lodash'
//si el valor de una variable esta vacio y devuelve un boolean
import { validarsesion } from '../utils/Acciones'
import * as firebase from 'firebase';
//trae todos los mdetodos de firabase





export default function LoginForm(props) {

    const {toastRef} = props

    //guarda los valores de los formularios
    const [email1, setemail] = useState("");
    const [password1, setpassword] = useState("")

    const navigation = useNavigation();


    validarsesion();

    
    //funcion que se encargara de verficar los campos vacios
    //y demás validaciones del formulario
    const iniciarsesion = () => {
        if (isEmpty(email1) || isEmpty(password1)) {
          toastRef.current.show("Debe ingresar los valores de email y password");
        } else if (!validateEmail(email1)) {
          toastRef.current.show("Ingrese un correo válido");
        } else{

            firebase.auth().signInWithEmailAndPassword(email1,password1)
            .then(() =>{
                console.log("todo bien")
            })
            .catch((err) =>{
                console.log(err)
                toastRef.current.show("El usuario o la contraseña es incorrecta");
            })
        }
      };

    return (
        <View style={styles.container}>
            <View 
            style={{ borderBottomColor:"#25D366",
            borderBottomWidth:2,
            width:100,
             }}
            />
            <Input placeholder= "correo" containerStyle={styles.input}
            rightIcon={{
                type:"material-community",
                name:"at",
                color:"#128c7e",
                onPress: ()=> alert("hola"),
            }}
            leftIcon={{
                type:"material-community",
                name:"account-circle-outline",
                color:"#128c7e",
                
            }}
            />
            <Input placeholder = "contraseña" containerStyle={styles.input}
                leftIcon={{
                    type:"material-community",
                    name:"security",
                    color:"#128c7e",
                    
                }}

                rightIcon={{
                    type:"material-community",
                    name:"eye-outline",
                    color:"#128c7e",
                    onPress: ()=> alert("hola"),
                }}
            />
            <Button title="Entrar"
            containerStyle={styles.btnentrar}
            buttonStyle={{backgroundColor:"#25d366"}}
            onPress={()=> iniciarsesion()}
            />

            <Text
            style={styles.txtcrearcuenta}
            >¿no tienes cuenta?
                <Text
                style={styles.cuenta}
                onPress={()=> navigation.navigate('register')}
                >{"  "} Crear Cuenta</Text>
            </Text>

            <Divider 
                style={{backgroundColor:"1287c7e", height: 1,width:"90%",marginTop:20}}
            />
            <Text
            style={styles.texto}
            >O</Text>

            <View
            style={styles.btnlogin}
            >
                <TouchableOpacity
                style={styles.btnloginsocial}
                >
                    <Icon 
                        size={24}
                        type="material-community"
                        name="google"
                        color="white"
                        backgroundColor="transparent"
                    />
                </TouchableOpacity>

                <TouchableOpacity
                 style={styles.btnloginsocial}
                >
                    <Icon 
                        size={24}
                        type="material-community"
                        name="facebook"
                        color="white"
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
    },
    input:{
        width:'90%',
        marginTop:20,
        height:50
    },
    btnentrar:{
        width:"50%",
        marginTop:20,

    },
    txtcrearcuenta:{
        marginTop:20,

    },
    cuenta:{
        color:"#128c7e",
        fontFamily:"Roboto", //no lo reconoce mac
        fontSize: 15,
    },
    texto:{
        fontWeight:"bold",
        fontSize:20,
        marginTop:20,
        color:"#128c7e"
    },
    btnlogin:{
        flexDirection:"row", //los bonotes en fila
        justifyContent:"space-around",//distribuye los elementos a lo largo de la pantalla
        width:"100%", //para que se distribuyan mejor



    },
    btnloginsocial:{
        backgroundColor:"#25d366",
        paddingHorizontal:40,
        paddingVertical:10,
        borderRadius:10

    }
})
