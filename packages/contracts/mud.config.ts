import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  tables: {
    ToDo: {
      schema: {
        done: "bool",
        body: "string",
      }
    }
  },
  modules: [
    {
      name: "UniqueEntityModule",
      root: true,
      args: [],
    }
  ],
});
