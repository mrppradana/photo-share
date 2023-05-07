import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/login', {
        email: email,
        password: password
      });
      localStorage.setItem('token', response.data.data.token); // Menyimpan token pengguna ke dalam local storage
      // Lakukan tindakan lain yang diperlukan setelah berhasil login
      setError(null);
    } catch (error) {
      setError(error.response.data.message); // Menampilkan pesan kesalahan yang diterima dari API
    }
  }

  const handleRegister = async () => {
    try {
      const response = await axios.post('https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/register', {
        name: name,
        email: email,
        password: password
      });
      localStorage.setItem('token', response.data.data.token); // Menyimpan token pengguna ke dalam local storage
      // Lakukan tindakan lain yang diperlukan setelah berhasil mendaftar
      setError(null);
    } catch (error) {
      setError(error.response.data.message); // Menampilkan pesan kesalahan yang diterima dari API
    }
  }

  return (
    <div>
      <h2>Login</h2>
      {error && <div>{error}</div>}
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>

      <h2>Register</h2>
      {error && <div>{error}</div>}
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Auth;
