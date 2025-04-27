import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebase/firebase.init';

const Login = () => {
  const [user, setUser] = useState(null);

  const handleGoogleSign = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
setUser(result.user)

      })
      .catch(error => {
        console.log(error);
      });
  };
  const handlesignOut = ()=> {
    signOut(auth)
      .then(() => { console.log('sing out complet')})
      .catch(error => {
      console.log(error)
      })
    setUser(null)
}
  return (
    <div>
      <h1>Please login</h1>
      {
        user ?
      <button onClick={handlesignOut}>singout</button>:
        <button onClick={handleGoogleSign}>Sign in with Google</button>
      }
      {user && (
        <div>
          <h3>{user.displayName}</h3>
          <p>{user.email}</p>
          <img src={user.photoUrl} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
