import {useState, useEffect} from "react";
import { firebase, auth } from "../service/firebase";
import useAuth from "../Hook/useAuth";

export function Sidebar(){

    const {user , setUser} = useAuth();
    console.log(user);
    const HandleClickButtonLogin = async () => {
        useEffect(()=>{
            auth.onAuthStateChanged(user=>{
                if(user){
                    const {uid, displayName , photoURL} = user;
    
                    if(!displayName || !photoURL) throw new Error("O usuario não tem display name ou foto URL");
    
                    setUser({
                         id : uid,
                         avatar : photoURL,
                         name : displayName,
                           })
                        }
                                           })
        },[])


        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await auth.signInWithPopup(provider);
        
           if(result.user){
               const {uid,displayName,photoURL} = result.user;
               if(!displayName || !photoURL) throw new Error("O usuario não tem display name ou photoUrl");
               
               setUser({id : uid, avatar:photoURL, name:displayName,});
           }
        };
    return(
        <div className="max-w-2xl my-8 mx-auto 
                      bg-gray-800
                      rounded-lg
                      overflow-hidden">
        <aside>
          <img className="w-full h-32 object-cover" src="https://images.unsplash.com/photo-1583248352195-d3a8e766edf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" />
          <div className="flex flex-col items-center">
            <img className="w-32 h-32 -mt-20
                            rounded-lg border-4 border-solid border-gray-600
                            outline outline-2 outline-orange-600" src="https://github.com/GabrielSi2022.png"/>
            <strong className="mt-10
                              text-orange-600 text-3xl font-bold">Gabriel Henrique Bueno</strong>
            <span className="text-3xl font-bold
                             mt-3">Desenvolvedor Web</span>
          </div>
          <footer className="border-t border-solid border-gray-600
                             mt-20 p-10
                             flex items-center justify-center">
            <button className="w-1/2
                               p-2
                               flex items-center justify-center
                               gap-3.5
                               bg-transparent
                               text-orange-600
                               font-bold
                               border border-solid border-orange-600 rounded-lg
                               hover:bg-orange-600 hover:text-white 
                               transition duration-150 ease-out hover:ease-in" onClick={HandleClickButtonLogin}>LOGIN</button>
          </footer>
        </aside>
      </div>

    );
}