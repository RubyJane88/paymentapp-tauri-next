import React from "react";
import { useRouter } from "next/router";

type Props = {};

const AccountById = ({}: Props) => {
  const router = useRouter();
  console.log(router.query.id);

  return (
    <div>
      <h1>Hello</h1>
      <button
        onClick={async () => {
          await fetch("/api/transaction-api", {
            method: "POST",
            body: JSON.stringify({
              id: router.query.id,
              amount: 100,
            }),
          });
        }}
      >
        SEND
      </button>
    </div>
  );
};

export default AccountById;
