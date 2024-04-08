import { Button } from "../../../common/Button";

function ContactCTA() {
  return (
    <div className="max-w-md mx-auto bg-midnight-blue p-6 rounded-lg shadow-lg text-center space-y-4">
      <h2 className="text-xl font-semibold text-white">
        Need Some Assistance?
      </h2>
      <p className="text-white text-opacity-90">
        If you're feeling confused or have any questions about our staking
        vaults, our consultants are here to help.
      </p>
      <Button className="mx-auto">Contact a Consultant</Button>
    </div>
  );
}

export default ContactCTA;
