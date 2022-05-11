import {auth} from "./firebase";

export function SendInfo(email, password){
    return auth().createUserWithEmailAndPassword(email, password);
}      