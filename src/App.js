import {Header} from './Header'
import {Nav} from './Nav'
import {Video} from './Meeting'
import './estilos.css'




function App() {

  const getVentos =async () => {

    const result = await fetch("https://ventos-api-server.onrender.com")
  
   const ventos = await result.json();

   console.log(ventos);
  }
  
  getVentos()

  return (
    <div>
       <Nav />
       <Header />
       <Video/>
    </div>
  );
}

export default App;
