import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

type Props = {
  save: (values: any) => Promise<void>;
};

export default function Forms({ save }: Props) {
  const schema = yup.object().shape({
    firstName: yup.string().required().max(50),
    lastName: yup.string().required().max(50),
    email: yup.string().required().email(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    fetch("/api/account", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => res.json())
      .then((result) => {
        console.log("result", result);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="first_name" />
        <input
          type="text"
          id="firtName"
          name="firstName"
          placeholder="First Name"
          {...register("firstName", { required: true, maxLength: 50 })}
        />
        {errors.firstName && <p>First name is required</p>}
      </div>
      <div>
        <label htmlFor="last_name" />
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          placeholder="Last Name"
          {...register("lastName", { required: true, maxLength: 50 })}
        />
        {errors.lastName && <p>Last name is required</p>}
      </div>
      <div>
        <label htmlFor="email" />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>Email is required</p>}
      </div>
      <Button type="submit" color="secondary">Send</Button>
    </form>
  );
}
