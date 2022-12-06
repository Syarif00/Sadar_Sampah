import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import piclogin from '../gambar.png';

import styles from "./signup.css";

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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
		


<section class="Form my-4 ml-5 pt-1 ">
                <main class="container">
                    <div class="row no-gutters my-3 mx-1 ">
					<div className ="col-lg-6 my-4 ">
		<img src={piclogin} class="img-fluid" alt="login"/>
	</div> 
                        <div class="col-lg-6 my-4 pl-1 ">
						<form  onSubmit={handleSubmit}>
							<h3>Registration</h3>
			<div class="form-row">
				<div class="col-lg-9">
				{error && <div className={styles.error_msg}>{error}</div>}
				</div>
			</div>
			<div class="form-row">
				<div class="col-lg-7">
				<i class="uil uil-user-circle"></i><input type="text" placeholder="First Name" name="firstName" onChange={handleChange} value={data.firstName} required class="my-3" />
				</div>
			</div> 
			<div class="form-row">
				<div class="col-lg-7">
					 <i class="uil uil-user-circle"></i><input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} value={data.lastName} required class="my-3" />
				</div>
			</div> 
			<div class="form-row">
				<div class="col-lg-7">
					<i class="uil uil-envelope"></i><input type="email" placeholder="Email" name="email" onChange={handleChange} value={data.email} required class="my-3" />
				</div>
			</div>  
			<div class="form-row">
				<div class="col-lg-7">
					<i class="uil uil-padlock"></i><input type="password" placeholder="Password" name="password"  onChange={handleChange} value={data.password} required class="password my-3"/>
				</div>
			</div>  
			
			<div class="form-row">
				<div class="col-lg-7">
				<button className="btn">Login</button>
				</div>
			</div> 
			<p>Sudah Mempunyai Akun? <a href='./login'>Login!</a></p>   
			  
		</form>
                              
                    </div>  
					
                    </div>
					
                </main>
                </section>

	);
};

export default Signup;
