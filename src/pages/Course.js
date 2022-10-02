import React, { useState, useEffect } from "react";
import Axios from "axios";


const getData = async () => {
    console.log('entra a usefedect2')

    const res = await Axios({
        url: "https://ventos-api-server.onrender.com/api/v1/course/course/",
        method : 'post',
        data : {id_curso:120}
      });
    
    console.log('rese',res);
    const course = res.data[0];
    console.log(course.curso)
    return course
}
function App() {

  const [list, setList] = useState([]);
  useEffect(() => {

    getData().then((response) => {
      console.log(response)
      /*setList[0] = getData();
      setPost(response.data);*/
    });

    
    

  }, [setList]);

  return (
    <div>
      <div>
      <label>Checar logs</label>
      </div>
      <div>
        {list.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;