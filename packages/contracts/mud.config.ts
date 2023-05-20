import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  tables: {
    ToDo: {
      schema: {
        done: "bool",
        owner: "bytes32",
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
