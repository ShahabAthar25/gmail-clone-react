import React from 'react'

import firebase from 'firebase'

import './SignIn.css'

function SignIn({auth}) {

    const SignInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return (
        <div className="signIn">
            <button onClick={SignInWithGoogle} className="btn">Login With Google</button>
        </div>
    )
}

export default SignIn
