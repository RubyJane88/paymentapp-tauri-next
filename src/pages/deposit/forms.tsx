import { useForm } from "react-hook-form";

type Props = {
  save: (values: any) => Promise<void>;
};

export default function Forms({ save }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form action="/api/account" method="post" onSubmit={handleSubmit(onSubmit)}>
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
      <button type="submit">Submit</button>
    </form>
  );
}
