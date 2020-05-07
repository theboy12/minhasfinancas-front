import React from 'react';
import Rotas from './rotas'
import Navibar from '../components/navibar'
import 'toastr/build/toastr.min.js'
import ProvedorAutenticacao from './provedorAutenticacao'

import 'bootswatch/dist/minty/bootstrap.css'
import '../custom.css'
import 'toastr/build/toastr.css'

import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

class App extends React.Component {
  render() {
   return(
    <ProvedorAutenticacao>
    <Navibar/>
      <div className="container"> 
        <Rotas />
      </div>
    </ProvedorAutenticacao>
    )
  }
}
export default App;
