import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import '../styles/TreeView.scss'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
