import { supabase } from '@/lib/supabaseClient';
import { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: '/' });
    setMessage(error ? error.message : 'Password reset email sent!');
  };

  return (
    <div className="container">
      <h1>Forgot Password</h1>
      <form onSubmit={handleReset}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Reset Password</button>
      </form>
      <p>{message}</p>
    </div>
  );
}