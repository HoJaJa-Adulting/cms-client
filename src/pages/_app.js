import "../../styles/globals.css";
import { Provider as ContentProvider } from "../context/ContentContext";
import { Provider as AuthProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ContentProvider>
        <Component {...pageProps} />
      </ContentProvider>
    </AuthProvider>
  );
}

export default MyApp;
