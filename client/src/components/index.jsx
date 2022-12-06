import { useState } from "react";
import axios from "axios";
import piclogin from '../gambar.png';
import "./Login.css";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		

<section className="Form my-4 ml-5 p-2">
<main className="container">
	<div className="row no-gutters my-3 mx-1">
	<div className ="col-lg-6 my-4  ">
		<img src={piclogin} class="img-fluid" alt="login"/>
	</div>
		<div className=" col-lg-6 my-4  pt-5">
			<form  onSubmit={handleSubmit}>
			<h3>Login</h3>
			<div class="form-row">
				<div class="col-lg-9">
				{error && <div className="error_msg col-lg-12">{error}</div>}
				</div>
			</div>
			<div class="form-row">
				<div class="col-lg-9">
					<i class="uil uil-envelope"></i><input type="email" placeholder="Email" name="email" onChange={handleChange} value={data.email} required class="my-3" />
				</div>
			</div>  
			<div class="form-row">
				<div class="col-lg-9">
					<i class="uil uil-padlock"></i><input type="password" placeholder="Password" name="password"  onChange={handleChange} value={data.password} required class="password my-3"/>
				</div>
			</div>  
			
			<div class="form-row">
				<div class="col-lg-9">
				<button className="btn">Login</button>
				</div>
			</div> 
			<p>Belum Mempunyai Akun? <a href='./signup'>Register!</a></p>   
	
			  
		</form>
		</div>
		
	</div>

</main>
</section>
	);
};

export default Login;
