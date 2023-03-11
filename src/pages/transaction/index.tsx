import React from "react";
import Button from "../../components/Button";
import { router } from "next/client";

const WithdrawalPage = () => {
  const handleOnWithdrawal = async () => {
    await router.push("/transaction/withdrawal");
  };
  const handleOnDeposit = async () => {
    await router.push("/transaction/deposit");
  };

  return (
    <div>
      <h1>My Transactions</h1>

      <div>
        <Button onClick={handleOnDeposit} color="secondary">
          Deposit
        </Button>
      </div>
      <div>
        <Button onClick={handleOnWithdrawal} color="primary">
          Withdraw
        </Button>
      </div>
    </div>
  );
};

export default WithdrawalPage;
