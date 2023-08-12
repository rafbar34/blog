import {Navigator} from '@/components/common/navigator';
import '@/styles/globals.css';
import type {AppProps} from 'next/app';

export default function App({Component, pageProps}: AppProps) {
  return(

    <Navigator>
    <Component {...pageProps} />
  </Navigator>
)
}
