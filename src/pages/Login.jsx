import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions/clientActions";
import { useHistory } from "react-router-dom";


const Login = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const { rememberMe, ...credentials } = data;
      const result = await dispatch(loginUser(credentials, rememberMe));
      if (result) {
        if (rememberMe) {
          localStorage.setItem("token", result.token);
        }
        history.goBack();
      }
    } finally {
      setLoading(false);
    }



  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Please enter a valid email",
          },
        })}
      />
      {errors.email && <span>{errors.email.message}</span>}

      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "password required"
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}
      <input
        type="checkbox"
        {...register("rememberMe")}
      />Remember Me
      <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
    </form>
  )
}

export default Login
