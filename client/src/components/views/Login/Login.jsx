import { useState } from 'react';
import { API_URL } from '../../../config';
import { Close } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const saveJwtToken = (token, username, role) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('userRole', role);
    sessionStorage.setItem('username', username);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in...');
    const user = {
      username,
      password,
    };

    fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.status === 201) {
        res.json().then((data) => {
          saveJwtToken(data.access_token, data.username, data.role);
          setTimeout(() => {
            console.log('Logged in!');
            navigate('/');
          }, 2000);
        });
      }
      if (res.status === 401) {
        return alert('Invalid username or password');
      }
    });
  };

  return (
    <div className="flex justify-center h-[60vh] relative">
      <div className="flex flex-col absolute top-[20%] shadow-lg bottom-[2px] rounded-lg p-5 w-[60%] bg-white h-[17rem] mobile:w-[100%]">
        <div className="flex justify-between">
          <div className="text-2xl ">Login</div>
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
        <div className="flex mt-3">
          <input
            className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <input
          type="button"
          value="login"
          className="btn mt-7 hover:scale-[1.02]"
          onClick={handleLogin}
        />
      </div>
    </div>
  );
};
export default Login;
