"use client"
import { useEffect, useState } from 'react';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  const [isConfirming, setIsConfirming] = useState(false);

  useEffect(() => {
    fetchUsers(); // コンポーネントがマウントされたときにユーザーを取得
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3001/users');
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        setError('Failed to fetch users');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error occurred while fetching users');
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setMessage('User registered successfully');
        setUsername('');
        setPassword('');
        fetchUsers(); // 新しいユーザーが登録された後、ユーザーリストを再取得
      } else {
        setMessage('Failed to register user');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error occurred during registration');
    }
    setIsConfirming(false); // モーダルを閉じる
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    setIsConfirming(true);
  };

  const handleCancel = () => {
    setIsConfirming(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
        <form onSubmit={handleConfirm} className="space-y-4">
          <div>
            <label className="block text-gray-700">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Confirm
          </button>
        </form>
        {message && <p className="mt-4 text-center text-green-500">{message}</p>}
      </div>

      {/* 確認モーダル */}
      {isConfirming && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <h2 className="text-xl font-bold mb-4">Confirm Registration</h2>
            <p className="mb-2">
              <span className="font-semibold">Username:</span> {username}
            </p>
            <p className="mb-4">
              <span className="font-semibold">Password:</span> {password.replace(/./g, '*')}
            </p>
            <button
              onClick={handleSubmit}
              className="w-full bg-green-500 text-white py-2 rounded mb-2 hover:bg-green-600 transition-colors"
            >
              Register
            </button>
            <button
              onClick={handleCancel}
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* 登録済みユーザーの表示 */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 mt-6">
        <h2 className="text-xl font-bold mb-4 text-center">Registered Users</h2>
        {error && <p className="text-red-500">{error}</p>}
        <ul className="space-y-2">
          {users.map((user, index) => (
            <li key={index} className="p-2 border border-gray-300 rounded bg-gray-50">
              <span className="font-semibold">Username:</span> {user.username}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
