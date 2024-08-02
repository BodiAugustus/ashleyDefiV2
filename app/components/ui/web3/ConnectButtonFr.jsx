import CustomConnectButton from "../web3/CustomConnectButton";

const HomePage = () => {
  return (
    <div className="bg-[#292941] rounded-xl">
      <CustomConnectButton />
    </div>
  );
};

export default HomePage;

// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import { Color } from "three";

// const HomePage = () => {
//   return (
//     <div className="bg-[#292941] rounded-xl">
//       <ConnectButton
//         style={{
//           backgroundColor: "#292941",
//           alignItems: "center",
//           color: "red",
//         }}
//         accentColor="red"
//         className="bg-red-500"
//         label="Connect"
//         accountStatus={{ smallScreen: "avatar", largeScreen: "full" }}
//         showBalance={{ smallScreen: false, largeScreen: true }}
//       />
//     </div>
//   );
// };

// export default HomePage;
