import "../../styles/globals.css";
import type { ReactElement } from "react";
import { Provider as ContentProvider } from "context/ContentContext";
import { Provider as AuthProvider } from "context/AuthContext";
import { useHasMounted } from "common/hooks";
import LayoutAuth from "components/LayoutAuth";

export default function MyApp({ Component, pageProps }) {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }

  const getLayout = Component.getLayout || getDefaultLayout;

  return getLayout(
    <AuthProvider>
      <ContentProvider>
        <Component {...pageProps} />
      </ContentProvider>
    </AuthProvider>
  );
}

function getDefaultLayout(page: ReactElement) {
  return <LayoutAuth>{page}</LayoutAuth>;
}
