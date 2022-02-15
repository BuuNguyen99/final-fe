import React from 'react';

function SignUp() {
  return (
    <form action="#">
      <h1>Create Account</h1>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="button">Sign Up</button>
    </form>
  );
}

export default SignUp;
