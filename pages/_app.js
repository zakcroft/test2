import Amplify from 'aws-amplify';
import config from '../src/aws-exports';
Amplify.configure({
  ...config, ssr: true
});
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
