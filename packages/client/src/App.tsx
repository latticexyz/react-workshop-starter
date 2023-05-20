import React from "react";
import "./index.css";
import {
  AppContainer,
  Container,
  Card,
  HeaderDiv,
  Subtitle,
  Title,
  Footer,
  TextLink,
} from "./theme";
import { ToDoForm } from "./ToDoForm";
import { ToDoItem } from "./ToDoItem";
import { useMUD } from "./MUDContext";
import { Has, getComponentValueStrict, runQuery } from "@latticexyz/recs";
import { useEntityQuery } from "@latticexyz/react";

export const App = () => {
  const {
    components: {
      ToDo,
    },
  } = useMUD();

  const todoIds = useEntityQuery([Has(ToDo)]);
  
  return (
    <Container>
      <AppContainer>
        <HeaderDiv>
          <Title>MUD x React1 Workshop</Title>
          <Subtitle>Creating a todo list using MUD</Subtitle>
        </HeaderDiv>

        <Card>
          {/* {todoIds} */}
          {[...todoIds].map(id => {
            const todoData = getComponentValueStrict(ToDo, id);
            return <ToDoItem key={id} id={id} {...todoData} />;
          })}
          <ToDoForm />
        </Card>

        <Footer>
          <TextLink href="https://v2.mud.dev">MUD docs</TextLink>
        </Footer>
      </AppContainer>
    </Container>
  );
};
