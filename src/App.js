import ButtonGetData from "./components/ButtonGetData"
import { gql } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import React, {useState} from 'react'
function App() {
  var [data,setData] = useState([])
  const onGetData = () => {
    
    var ar = [...data]
    const client = new ApolloClient({
      uri: 'http://localhost:8080/query',
      cache: new InMemoryCache()
    });
    client
    .query({
      query: gql`
        query{
          human(_id:"60313ee1e9a5836ea9824ba0")
         {id,name}
  }
      `
    })
    .then(result => {
      ar[ar.length] = result.data['human']['id']+"  "+result.data['human']['name'];}
      );
      client
    .query({
      query: gql`
        query{
          humans
         {id,name}
  }
      `
    })
    .then(result => {
      console.log(result)
      result.data['humans'].forEach(element => {
        ar[ar.length] = element['id']+"  "+element['name'];
      });

        setData(ar);
    }
      );

}
const list = data.map(element=>{
  return <li>{element}</li>
})
return (
  <div className="App">
      <ButtonGetData onGetData = {onGetData}/>
      <ul>
          {list}
      </ul>
  </div>
);
};
export default App;
