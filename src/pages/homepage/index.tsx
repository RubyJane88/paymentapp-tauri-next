import React from "react";
import { useRouter } from "next/router";

export default function HomePage() {
  const handleOnDeposit = () => {
    router.push("/deposit");
  };

  const handleOnWithdraw = () => {
    router.push("/withdrawal");
  };

  const router = useRouter();
  return (
    <div className="container">
      <h2>My Bank Account</h2>
      <div>
        <button onClick={handleOnDeposit}>Deposit here</button>
        <button onClick={handleOnWithdraw}>Withdraw here</button>
      </div>
    </div>
  );
}
