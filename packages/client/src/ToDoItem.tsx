import styled from "styled-components";

type Props = {
  id: string;
  body: string;
  done: boolean;
}

const ToDoItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  color: white;
`;


export function ToDoItem({id, body, done}: Props) {
  return (
    <ToDoItemWrapper>
      <span>
        {body}
      </span>
      <input type="checkbox" checked={done} onChange={(e) => {}}/>
    </ToDoItemWrapper>
  )
}
