import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="container">
      <h1>Thank You</h1>
      <p>
        Thank you for your deposit. Your transaction has been completed, and a
        receipt for your purchase has been emailed to you. You may log into your
        account at www.paypal.com to view details of this transaction.
      </p>
      <p>
        <Link href="/">
          <a>Return to home page</a>
        </Link>
      </p>
    </div>
  );
}
