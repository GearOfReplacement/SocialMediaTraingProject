import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyButton } from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import {simpleValidation} from '../utils/simpleValidation';
import { AuthContext } from "../store/store";
import { useContext } from "react";

export const Login = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const {auth, setAuth} = useContext(AuthContext);
	

	const navigate = useNavigate();

	const logIn = ( event ) => {
		event.preventDefault();


		if( simpleValidation(login, password) ) {
			setAuth(true);
			localStorage.setItem('auth', true);
			navigate('/Posts');
		}
		else {
			alert('Write something in the feilds');
		}
  
	}

	return (
		<div className="login">
			<form className="login__form" onSubmit={(e) => {logIn(e)}}>
				<label>
					Login:
					<MyInput 
						placeholder="Write your login here..." 
						onChange={(e)=> {setLogin(e.target.value)}}
						value={login}
						type="text"
					/>
				</label>
				<label>
					Password:
					<MyInput 
						placeholder="Write your password here..." 
						onChange={(e)=> {setPassword(e.target.value)}}
						value={password}
						type="password"
					/>
				</label>
				<MyButton type="submit">Submit</MyButton>
			</form>
		</div>
	)
}

