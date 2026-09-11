import { useForm, useState } from "react-hook-form";
import { useEffect } from "react";
import { api } from "../api/axiosInstance";

const Signup = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const [roles, setRoles] = useState([]);
  const selectedRole = roles.find((role)=>role.id === Number(selectedRole));

  useEffect(() => {
    async function fetchRoles() {
      try {
        const response = await api.get("/roles");
        setRoles(response.data);
      

        const customer = response.data.find(
          (role) => role.code === "customer",
        );
        setValue("role_id", customer.id);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    }
    fetchRoles();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters",
          },
        })}
      />
      {errors.name && <span>{errors.name.message}</span>}
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
          pattern: {
            value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message:
              "Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character",
          },
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}
      <input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword", {
          validate: (value) =>
            value === watch("password") || "Passwords do not match",
        })}
      />
      {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

      {roles.map((role) => (
        <option key={role.id} value={role.id}>
          {role.name}
        </option>
      ))}

      {selectedRole === store && (
       <input
        type="text"
        placeholder="Name"
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters",
          },
        })}
      />
      {errors.name && <span>{errors.name.message}</span>}
      <input
        type="number"
        placeholder="phone number"
        {...register("phone", {
          required: "phone number is required",
          pattern: {
            value: /[0-9]/,
            message: "phone field should be valid Türkiye phone number",
          },
        })}
      />
      // Store Tax ID  field should be appear and it should match the pattern “TXXXXVXXXXXX” ⇒ X can be any number
      {errors.number && <span>{errors.number.message}</span>}
      <input
        type="number"
        placeholder="tax no"
        {...register("tax_no", {
          pattern: {
            value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message:
              "Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character",
          },
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}
      <input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword", {
          validate: (value) =>
            value === watch("password") || "Passwords do not match",
        })}
      />
      {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

      )}
    </div>
  );
};

export default Signup;


//  Store Bank Account bank_account field should be valid IBAN address