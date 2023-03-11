import React from "react";
import prisma from "../../../lib/prisma";
import type { NextPageContext } from "next";

export async function getServerSideProps(context: NextPageContext) {
  const customer = await prisma.account.findUnique({
    where: {},
  });
  return {
    props: { account: JSON.parse(JSON.stringify(customer)) },
  };
}

type Props = {};

// const handleSubmit = async (values) => {
//   console.log("values", values);
//   const res = await fetch("/api/accounts-api", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(values),
//   });
//   const result = await res.json();
//   console.log("result", result.data);
// };
const Deposit = ({}: Props) => {
  return (
    <div>
      <h1>Deposit</h1>
    </div>
  );
};

export default Deposit;
