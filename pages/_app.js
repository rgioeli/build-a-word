import "../styles/globals.css";
import { GameProvider } from "../src/lib/context/gameContext";

function MyApp({ Component, pageProps }) {
  return (
    <GameProvider>
      <Component {...pageProps} />
    </GameProvider>
  );
}

export default MyApp;
