import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Color } from "three";

const HomePage = () => {
  return (
    <div className="bg-[#292941]">
      <ConnectButton
        style={{
          backgroundColor: "#292941",
          alignItems: "center",
          color: "red",
        }}
        accentColor="red"
        z
        label="Connect"
        accountStatus={{ smallScreen: "avatar", largeScreen: "full" }}
        showBalance={{ smallScreen: false, largeScreen: true }}
      />
    </div>
  );
};

export default HomePage;
