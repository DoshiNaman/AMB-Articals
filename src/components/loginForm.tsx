"use client";
import React from "react";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuthStore from "../store/useAuthStore";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "dummy@example.com",
      password: "password123",
    },
  });

  const login = useAuthStore((state) => state.login);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    login();
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="gap-2 flex flex-col">
      <div className="gap-2 flex flex-col font-medium">
        <Input
          {...register("email")}
          className="w-full bg-transparent"
          placeholder="Enter email"
          type="email"
          inputClassName="bg-transparent"
          hasError={errors.email ? true : false}
        />
        {errors.email && (
          <span className="text-red-600 text-xs">{errors.email.message}</span>
        )}

        <Input
          {...register("password")}
          className="w-full bg-transparent"
          placeholder="Enter password"
          type="password"
          hasError={errors.password ? true : false}
        />
        {errors.password && (
          <span className="text-red-600 text-xs">
            {errors.password.message}
          </span>
        )}
      </div>
      <div>
        <Button type="submit" className="font-medium">
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
