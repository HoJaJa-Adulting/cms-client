import "../../styles/globals.css";
import { Provider as ContentProvider } from "context/ContentContext";
import { Provider as AuthProvider } from "context/AuthContext";
import { useHasMounted } from "common/hooks";

export default function MyApp({ Component, pageProps }) {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <AuthProvider>
      <ContentProvider>
        <Component {...pageProps} />
      </ContentProvider>
    </AuthProvider>
  );
}
