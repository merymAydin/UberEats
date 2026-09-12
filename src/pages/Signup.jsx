import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { api } from "../api/axiosInstance";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { LoaderCircle } from "lucide-react";

const Signup = () => {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);

  const selectedRole_id = watch("role_id");
  const selectedRole = roles.find(
    (role) => role.id === Number(selectedRole_id),
  );
  const history = useHistory();

  useEffect(() => {
    async function fetchRoles() {
      try {
        const response = await api.get("/roles");
        setRoles(response.data);
        const customer = response.data.find((role) => role.code === "customer");
        setValue("role_id", customer.id);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    }
    fetchRoles();
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const rest = { ...data };
      delete rest.confirmPassword;
      const response = await api.post("/signup", rest);
      console.log(response);
      toast.warning("You need to click link in email to activate your account!");
      history.goBack("/signup")

    } catch (error) {
      toast.error("Signup failed. Please try again.");
      console.log(error);

    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            required: "Password is required",
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&.]{8,}$/,
              message:
                "Password must be at least 8 characters long and contain at least one uppercase letter,lowercase letter, one number, and one special character",
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}

        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

        <select {...register("role_id")}>
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>

        {selectedRole?.code === "store" && (
          <>
            <input
              type="text"
              placeholder="Store Name"
              {...register("store.name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
            />
            {errors.store?.name && <span>{errors.store.name.message}</span>}{" "}
            <input
              type="tel"
              placeholder="phone number"
              {...register("store.phone", {
                required: "phone number is required",
                pattern: {
                  value: /^5\d{9}$/,
                  message: "Enter a valid Turkish number (5XXXXXXXXX)",
                },
              })}
            />
            {errors.store?.phone && <span>{errors.store.phone.message}</span>}
            <input
              type="text"
              placeholder="tax no"
              {...register("store.tax_no", {
                required: "Tax no is required",
                pattern: {
                  value: /^T\d{4}V\d{6}$/,
                  message: "Tax ID must be TXXXXVXXXXXX",
                },
              })}
            />
            {errors.store?.tax_no && <span>{errors.store.tax_no.message}</span>}
            <input
              type="text"
              placeholder="bank account number"
              {...register("store.bank_account", {
                required: "bank account number is required",
                pattern: {
                  value: /^TR\d{24}$/,
                  message: "Please enter a valid Turkish IBAN",
                },
              })}
            />
            {errors.store?.bank_account && <span>{errors.store?.bank_account?.message}</span>}{" "}
          </>
        )}
      </div>
      <button type="submit" disabled={loading}>
        {loading ? (
          <>
            <LoaderCircle className="animate-spin"/>
            Signing up...
          </>
        ) : (
          "Sign up"
        )}
      </button>

    </form>
  );
};

export default Signup;
