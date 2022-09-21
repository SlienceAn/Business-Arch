import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import '../styles/index.scss'
import '../styles/TreeView.scss'
import '../styles/ToolNav.scss'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
