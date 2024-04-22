// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI
const firebaseConfig = {
    apiKey: "AIzaSyAN41c284TmHZJ_fXU0Lo8p_tpPyB6opms",
    authDomain: "kwitter-c24ab.firebaseapp.com",
    databaseURL: "https://kwitter-c24ab-default-rtdb.firebaseio.com",
    projectId: "kwitter-c24ab",
    storageBucket: "kwitter-c24ab.appspot.com",
    messagingSenderId: "305205885864",
    appId: "1:305205885864:web:a54c0b9d23a2146a043b9d"
  };
 

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    Nome_de_Usuário = document.getElementById("Nome_de_Usuário").value;
    firebase.database().ref("/").child(Nome_de_Usuário).update({
        purpose : "adding user"
    });
    
   localStorage.setItem("Nome_de_Usuário" , Nome_de_Usuário);
   localStorage.setItem("addroom" , addroom);

   window.location = "chat_room.html";
    
    
   
}



