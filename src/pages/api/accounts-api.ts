import { db } from "../../utils/db";
import { NextApiRequest } from "next";

export default function handler(req: NextApiRequest, res) {
  const { firstName, lastName, email, id } = req.body;

  // create account using prisma orm
  return db.account.create({
    data: {
      id,
      firstName,
      lastName,
      email,
    },
  });
}
