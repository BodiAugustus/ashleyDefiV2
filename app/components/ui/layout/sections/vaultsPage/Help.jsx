import { Button } from "../../../common/Button";
import Link from "next/link";

function ContactCTA() {
  return (
    <div className="max-w-md mx-auto bg-midnight-blue p-6 rounded-lg shadow-lg text-center space-y-4">
      <h2
        className="text-xl font-semibold text-white
      xs4:text-2xl"
      >
        Need Some Assistance?
      </h2>
      <p className="text-white text-opacity-90 xs:leading-5 xs5:text-lg xs5:leading-6">
        If you're feeling confused or have any questions about our staking
        vaults, our consultants are here to help.
      </p>

      <Link
        href="https://t.me/+89dQjvU76cwxZGU9"
        target="_blank"
        passHref
        rel="noopener noreferrer"
      >
        <Button className="mx-auto xs5:text-xl mt-6">
          Contact a Consultant
        </Button>
      </Link>
    </div>
  );
}

export default ContactCTA;
