import React from "react";
import prisma from "../../../lib/prisma";
import Forms from "./forms";

export async function getServerSideProps(context) {
  const account = await prisma.account.findMany();
  return {
    props: { account: JSON.parse(JSON.stringify(account)) },
  };
}

type Props = {
  account: any[];
};

export default function DepositPage({ account }: Props) {
  const handleSubmit = async (values) => {
    console.log("values", values);
    const res = await fetch("/api/account", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const result = await res.json();
    console.log("result", result.data);
  };

  return (
    <div className="container">
      <h1>My Deposit Account</h1>
      <Forms save={handleSubmit} />
    </div>
  );
}
