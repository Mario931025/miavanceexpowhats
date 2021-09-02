//para interacciones

import { firebaseapp } from "./Firebase";
import * as firebase from 'firebase'

export const validarsesion = (setvalidarsesion) => {

    firebase.auth().onAuthStateChanged((user)=>{

        if(user)
        {
           setvalidarsesion(true)
        }else{
            setvalidarsesion(false)
        }
    })
}


export const cerrarsesion = () => {
    firebase.auth().signOut();
    console.log("cerro sesión")
}


export const validarPhone = (setphoneauth) => {

    firebase.auth().onAuthStateChanged((user)=>{

        if(user.phoneNumber)
        {
            setphoneauth(true)
        }
    })
}


export const enviarAutentificacionphone = async (numero,recapcha)=> {

    let verificationid = "";

   await firebase
        .auth()
        .currentUser.reauthenticateWithPhoneNumber(numero,recapcha.current)
        .then((response) => {
            verificationid = response.verificationId
        })
        .catch((err) => {
            console.log(`Tenemos error en la
            verificaicon del numero ${err}
            `)
        })

        return verificationid
}


export const confirmarcodigo = async(verificationid,codigo) => {
    let resultado = false;

    const credenciales = firebase.auth.PhoneAuthProvider.credential(verificationid,codigo)

   await firebase
    .auth()
    .currentUser
    .linkWithCredential(credenciales)
    .then(response => resultado = true)
    .catch(err =>{
        console.log(`error en metodo confirmarcodigo ${err}`)
    })

    return resultado

}