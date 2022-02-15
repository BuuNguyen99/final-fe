import React from 'react';

function ForgotPassword() {
  return (
    <form action="#">
      <h1>Forgot Password</h1>
      <p>Enter your email to reset your password.</p>

      <label className="form-label fw-bolder text-gray-900 fs-6 required">
        Email
      </label>
      <input type="email" placeholder="email" />

      <button type="button">Sign In</button>
      <button type="button">Cancel</button>
    </form>
  );
}

export default ForgotPassword;
