import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import Button from "../../components/Button";

type Props = {
  save: (values: any) => Promise<void>;
};

export default function Forms({ save }: Props) {
  const schema = yup
    .object()
    .shape({
      firstName: yup.string().required().max(50),
      lastName: yup.string().required().max(50),
      email: yup.string().required().email(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    fetch("/api/accounts-api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("result", result);
      });
  };

  return (
    <div className="min-h-screen bg-base-300">
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="hero-content text-center"
        >
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="group relative z-0 mb-6 w-full">
              {errors.firstName?.message && <p>First name is required</p>}
              <input
                type="text"
                id="firstName"
                name="firstName"
                {...register("firstName")}
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                required
              />
              <label
                htmlFor="firstName"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                First name
              </label>
            </div>
            <div className="group relative z-0 mb-6 w-full">
              {errors.lastName?.message && <p>Last name is required</p>}
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                {...register("lastName")}
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
              />
              <label
                htmlFor="lastName"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="group relative z-0 mb-6 w-full">
            {errors.email?.message && <p>Email is required</p>}
            <input
              type="email"
              id="email"
              name="email"
              {...register("email")}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
              required
            />
            <label
              htmlFor="email"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
              Email address
            </label>
          </div>

          <Button
            key="submit"
            type="submit"
            color="secondary"
            disabled={!isValid}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
