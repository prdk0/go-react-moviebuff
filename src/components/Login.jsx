import { useState } from "react";
import Input from './form/Input'
import { useNavigate, useOutletContext } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setJwtToken} = useOutletContext();
    const {setAlertClassName} = useOutletContext();
    const {setAlertMessage} = useOutletContext();

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        if (email === "admin@admin.com" && password === "password") {
            setJwtToken("abc")
            setAlertClassName("d-none");
            setAlertMessage("");
            navigate("/");
        } else {
            setAlertClassName("alert-danger");
            setAlertMessage("invalid credential");
        }
    }

    return (
        <div className="col-md-6 offset-md-3">
                <h2>Login</h2>
                <hr />
                <form onSubmit={handleSubmit} noValidate>
                    <Input
                        title="Email Address"
                        type="email"
                        className="form-control"
                        name="email"
                        autoComplete="off"
                        onChange={event => setEmail(event.target.value)}
                    />
                    <Input
                        title="Password"
                        type="password"
                        className="form-control"
                        name="password"
                        autoComplete="off"
                        onChange={event => setPassword(event.target.value)}
                    />
                    <div className="mt-3">
                        <input
                            type="submit"
                            className="btn btn-primary"
                            value="Login"
                        />
                    </div>
                </form>
        </div>
    )
}

export default Login;