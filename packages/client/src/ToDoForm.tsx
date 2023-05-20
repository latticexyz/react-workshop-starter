import { useState } from "react";
import { FormButton, FormField, FormFieldWrapper } from "./theme";
import { Plus } from "./theme/Plus";
import { useMUD } from "./MUDContext";

export function ToDoForm() {
  const {
    systemCalls: { 
      addToDo, 
    },
  } = useMUD();
  const [newToDo, setNewToDo] = useState("");

  return (
    <FormFieldWrapper>
      <FormField type="text" placeholder="new todo" value={newToDo} onChange={(e) => {
        setNewToDo(e.target.value);
      }} />
      <FormButton onClick={() => {
        addToDo(newToDo);
        setNewToDo("");
      }}>
        <Plus />
      </FormButton>
    </FormFieldWrapper>
  )
}
