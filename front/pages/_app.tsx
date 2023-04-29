import { store } from "@/ducks/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CookiesProvider } from "react-cookie";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
    // react-query全体での初期設定
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                suspense: true,
            },
        },
    });
    return (
        <Provider store={store}>
            <CookiesProvider>
                <QueryClientProvider client={queryClient}>
                    <Component {...pageProps} />
                </QueryClientProvider>
            </CookiesProvider>
        </Provider>
    );
}
