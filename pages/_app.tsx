import {Navigator} from '@/components/common/navigator';
import {wrapper} from '@/store';
import '@/styles/globals.css';
import type {AppProps} from 'next/app';
function App({Component, pageProps}: AppProps) {
  return (
    <Navigator>
      <Component {...pageProps} />
    </Navigator>
  );
}
export default wrapper.withRedux(App);
