// import '../styles/globals.css'
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import { HeaderMenu } from "../components/HeaderMenu";
import type { HeaderSearchProps } from "../components/HeaderMenu";

function MyApp({ Component, pageProps }: AppProps) {
	// links: { link: string; label: string; links?: { link: string; label: string }[] }[];
	const links: HeaderSearchProps = {
		links: [{ link: "/", label: "Beranda" }],
	};
	return (
		<MantineProvider>
			<Head>
				<title>PT DWI AGUNG SENTOSA PRATAMA</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<HeaderMenu links={links.links} />
			<Component {...pageProps} />
		</MantineProvider>
	);
}

export default MyApp;
