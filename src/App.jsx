//importação da ferramenta p/ criar um estado
import { useState } from "react"
//importando os componentes css 
//se o componente estiver apagado é pq ele ainda não foi usado 
import { Item, Container, TodoList,Input,Button, List } from "./styles"

function App() {
  // a forma de criar um estado
  // const [nome da variavel, atualização da variavel]
  const [tarefas, setTarefas] = useState([])
  const [valorQueTadentroInput, setvalorQueTadentroInput] = useState('')


  function quandoUsuarioDigitaInput(event) {
    //aqui onde é armazenada o que usuario digitou, agora com o novo valor atualizado
    setvalorQueTadentroInput(event.target.value)
  }

  function quandoClicaNoBotao() {
    //estou pegando todas as tarefas que já existe e estou adicionando a tarefa do input junto da lista
    setTarefas([...tarefas, valorQueTadentroInput])
  }

  return (
    <Container>
      <TodoList>
          {/*captura de evento quando usuario digita alguma coisa, */}
          <Input placeholder="digite sua tarefa" onChange={quandoUsuarioDigitaInput} />

          {/*Captura evento após clique no botão*/}
          <Button onClick={quandoClicaNoBotao}>Adicionar Tarefa</Button>

          <List>
            {
              //estou pegando array de taferas e passando item por item e pegando a posição
              // 1°posição é o item do array(item) 
              // 2°posição index do item(index)
              tarefas.map((item, index) => (
                //o key é para colocar um endereço a cada item da lista
                <Item key={index}>{item}</Item>
              ))
            }
          </List>
      </TodoList>
    </Container>
  )
}
export default App