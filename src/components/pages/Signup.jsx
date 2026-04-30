import React from 'react'
import { firebaseConfig, initializeApp, getAuth, createUserWithEmailAndPassword  } from '../../Firebase.jsx'
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
function Signup() {
    var signupBtn = document.getElementById('signupBtn')
    signupBtn.addEventListener('click',signupFunc)
    async function signupFunc(){
        var userEmail = document.getElementById('email').value;
        var userPassword = document.getElementById('password').value;
    await createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log('errorcode=>',errorCode)
            const errorMessage = error.message;
            console.log('errorMessage=>',errorMessage)
        });
    return (       
        <div>
            <div id='signupPage'>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button id='signupBtn'>Signup</button>
            </div>
        </div>
    )
}
}

export default Signup