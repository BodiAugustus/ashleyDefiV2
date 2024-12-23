import { ConnectButton } from "@rainbow-me/rainbowkit";

const CustomConnectButton = () => {
  // Mapping of chain IDs to their acronyms
  const chainAcronyms = {
    1: "ETH", // Mainnet
    137: "POL", // Polygon
    10: "OPT", // Optimism
    42161: "ARB", // Arbitrum
    250: "FTM", // Fantom
    146: "Sonic",
    // Add other chain mappings as needed
  };

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="bg-slate-200 text-[#292941] rounded-lg px-4 py-2 hover:bg-[rgba(31,38,135,0.77)] hover:text-white"
                  >
                    Connect
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="bg-slate-200 text-[#292941] rounded-lg px-4 py-2 hover:bg-[rgba(31,38,135,0.77)] hover:text-white"
                  >
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: "flex", gap: 8 }}>
                  <button
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    className="bg-slate-200 text-xs text-[#292941] rounded-lg px-2 py-1 hover:bg-[rgba(31,38,135,0.77)] hover:text-white"
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chainAcronyms[chain.id] || chain.name}
                  </button>

                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="bg-slate-200 text-[#292941] rounded-lg px-2 py-2 hover:bg-[rgba(31,38,135,0.77)] hover:text-white text-xs "
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default CustomConnectButton;
