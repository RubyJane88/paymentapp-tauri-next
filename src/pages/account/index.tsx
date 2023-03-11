import React from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

const Account = ({ accountUsers }) => {
  return (
    <div className="mt-10 bg-pink-100 p-20 md:container md:mx-auto">
      <h1 className="font-bold font-black">Bank Account Users</h1>
      {accountUsers.map((accountUser: any) => (
        <Link href={`/account/${accountUser.id.toString()}`}>
          <div
            key={accountUser.id}
            className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
          >
            <span>
              Account Name: {accountUser.firstName}
              {accountUser.lastName}
            </span>
            <span> Email:{accountUser.email}</span>
            <span>Account balance: {accountUser.balance}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Account;

export async function getServerSideProps() {
  const accountUsers = await prisma.account.findMany();
  console.log("accountUsers", accountUsers);

  return {
    props: { accountUsers: JSON.parse(JSON.stringify(accountUsers)) },
  };
}
