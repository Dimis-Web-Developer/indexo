import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setError("");

  if (!name || !email || !password || !confirmPassword) {
    setError("Please fill in all fields");
    return;
  }

  if (password !== confirmPassword) {
    setError("Passwords do not match");
    return;
  }

  if (password.length < 8) {
    setError("Password must be at least 8 characters");
    return;
  }

try {
    const response = await fetch(
      "http://localhost:8080/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      setError(data.message);
      return;
    }

    navigate('/login');

  } catch (error) {
    setError("Unable to connect to server");
  }
}
  return (
   <div className="flex flex-col mx-auto p-2">
      <h1 className="text-lg font-bold py-3 ">Create your Focus account</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
  <div className="flex items-center">
    <label className="w-40">Name</label>
    <input
  className="border border-gray-300 rounded-md px-5 py-1 "
        type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </div>

  <div className="flex items-center">
    <label className="w-40">Email</label>
    <input
      className="border border-gray-300 rounded-md px-5 py-1 "
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>

  <div className="flex items-center">
    <label className="w-40">Password</label>
    <input
  className="border border-gray-300 rounded-md px-5 py-1 "
     type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>

  <div className="flex items-center">
    <label className="w-40">Confirm password</label>
    <input
  className="border border-gray-300 rounded-md px-5 py-1 "
      type="password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
    />
  </div>

  <button
    className="bg-black text-gray-400 p-2 rounded-lg cursor-pointer w-32 "
    type="submit"
  >
    Create account
  </button>
</form>
    </div>
  );
}

export default RegisterPage;



