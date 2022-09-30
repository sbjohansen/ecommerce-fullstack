import { useState } from 'react';
import { API_URL } from '../../../config';
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [matchingPassword, setMatchingPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registering...');
    const user = {
      firstName,
      lastName,
      username,
      password,
    };

    fetch(`${API_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then((json) => console.log(json));

    setTimeout(() => {
      console.log('Registered!');
      navigate('/');
    }, 2000);
  };

  return (
    <div className="flex justify-center h-[60vh] relative">
      <div className="flex flex-col absolute top-[20%] shadow-lg bottom-[2px] rounded-lg p-5 w-[60%] h-[22rem] bg-white mobile:w-[100%]">
        <div className="text-2xl ">Register</div>
        <div className="flex mt-3 mobile:flex-col">
          <input
            className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
            placeholder="first name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <input
            className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200 ml-3 mobile:ml-0 mobile:mt-3"
            placeholder="last name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="flex mt-3">
          <input
            className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
            placeholder="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="flex mt-3 mobile:flex-col">
          <input
            className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200 ml-3 mobile:mt-3 mobile:ml-0"
            placeholder="confirm"
            type="password"
            value={matchingPassword}
            onChange={(e) => setMatchingPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex relative">
          <div
            className={'text-red-500 absolute ' + (password === matchingPassword ? 'hidden' : '')}
          >
            Passwords do not match
          </div>
        </div>
        <input
          type="button"
          value="register"
          className="btn mt-12 hover:scale-[1.02] justify-self-end"
          onClick={handleRegister}
        />
      </div>
    </div>
  );
};

export default Register;
