import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";

type Props = {
  save: (values: any) => Promise<void>;
};

export default function Forms({ save }: Props) {
  const schema = yup.object().shape({
    firstName: yup.string().required().max(50),
    lastName: yup.string().required().max(50),
    email: yup.string().required().email(),
  }).required()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({resolver: yupResolver(schema)});

  const onSubmit = (data) => {
    fetch("/api/accounts-api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => res.json())
      .then((result) => {
        alert(`Success! ${result.data.firstName} ${result.data.lastName} has been added to the database!`)
    });
  };

  return (
    <form   onSubmit={handleSubmit(onSubmit) }>
      <div className={'flex flex-col items-center justify-center'}>
        <label htmlFor="first_name" />
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          {...register("firstName")}
        />
        {errors.firstName?.message && <p>First name is required</p>}
      </div>
      <div>
        <label htmlFor="last_name" />
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          placeholder="Last Name"
          {...register("lastName")}
        />
        {errors.lastName?.message && <p>Last name is required</p>}
      </div>
      <div>
        <label htmlFor="email" />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email?.message && <p>Email is required</p>}
      </div>
      <Button type="submit" className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium capitalize text-white shadow-lg shadow-purple-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 disabled:text-gray-300 dark:shadow-lg dark:shadow-purple-800/80 dark:focus:ring-purple-800">Submit</Button>
    </form>
  );
}
