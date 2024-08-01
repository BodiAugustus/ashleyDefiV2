import { ConnectButton } from "@rainbow-me/rainbowkit";

const HomePage = () => {
  return (
    <div className="bg-[#292941]">
      <ConnectButton
        style={{ backgroundColor: "#292941", alignItems: "center" }}
        accentColor="#292941"
        z
        label="Connect"
        accountStatus={{ smallScreen: "avatar", largeScreen: "full" }}
        showBalance={{ smallScreen: false, largeScreen: true }}
      />
    </div>
  );
};

export default HomePage;
