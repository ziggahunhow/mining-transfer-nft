import Head from "next/head";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { TTStaking } from "../components/contract";

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>Mining Transfer</title>
        <meta name="description" content="Mining transfer app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header style={{ padding: "1rem" }}>
        <ConnectButton />
      </header>

      <main
        style={{
          minHeight: "60vh",
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TTStaking />
      </main>
    </div>
  );
}
