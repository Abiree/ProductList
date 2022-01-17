
import './App.css';
import { Table } from './components/table';
import styled from 'styled-components'
function App() {
  const Styles = styled.div`
  padding: 1rem;

  .dropdown{
    margin: 10px 0px;
  }
  .pagination{
    background:rgb(0, 166, 237);
    align-items: center;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
  display: flex;
  justify-content: center;
  span{
    margin:5px;
  }
  button{
    background:black;
    color:white;
  }

  
  
select{
  margin-left:10px;
  color:#ffffff; 
  background-color: #000000;

  padding: 3px 3px;
  box-shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  
  cursor: pointer;
  position: relative;
  transition: all ease-in-out 0.3s;

}
  
  }

  table {
    border-spacing: 0;
    border: 1px solid black;
   width:100%;
    
    tr {
      :nth-child(1){
        th{
           background:black;
           color:white;
           border: 1px solid white;
        }
      }
        :nth-child(2){
          th{
             background:rgb(0, 166, 237);
             color:white;
             border: 1px solid white;
          }
       
      }
     
      :last-child {
        td {
          border-bottom: 0;
          
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      background:white;

      
      :last-child {
        border-right: 0;
      }
    }
  }
`
  return (
    <Styles>
       <Table/>
    </Styles>
   
  );
}

export default App;
