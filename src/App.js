import {Header} from './Header'
import {Nav} from './Nav'
import {Video} from './Meeting'
import {Course} from './Course'
import './estilos.css'




function App() {

  const getVentos = async () => {
	
    const url = 'https://ventos-api-server.onrender.com/api/course/';
    
    const result = await fetch(url);
    const ventos = await result.json();
    
    ventos.map(course =>{
      console.log('curso: '+course.curso)
    })
    return ventos;
    
  }
  
  var cursos = getVentos();

  return (
    
    <div>
       <Nav />
       {
        
        cursos.map( curso => {
          <Course name={curso.curso} description={curso.descripcion}/>
        })
       }
       <Header />
       <Video/>
    </div>
  );
}

export default App;
