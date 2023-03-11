import React from "react";
import { useRouter } from "next/router";
import { Navbar } from "flowbite-react";

export default function HomePage() {
  const handleOnAccount = () => {
    router.push("/account");
  };

  const handleOnTransaction = () => {
    router.push("/transaction");
  };

  const handleOnRegister = () => {
    router.push("/register");
  };

  const router = useRouter();
  return (
    <Navbar fluid={true} rounded={true}>
      <h2>My Bank</h2>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <button onClick={handleOnAccount}>Account Users</button>
        <button onClick={handleOnTransaction}>Transactions</button>
        <button onClick={handleOnRegister}>Register | Sign Up</button>
      </Navbar.Collapse>
      <div></div>
    </Navbar>
  );
}
