import "@/styles/globals.css";

// Internal Import
import { ChatAppProvider } from '../Context/ChatAppContext';
import { Navbar } from "../Components/index";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <ChatAppProvider>
    <Navbar/>
      <Component {...pageProps} />
    </ChatAppProvider>
  </div>
);

export default MyApp;