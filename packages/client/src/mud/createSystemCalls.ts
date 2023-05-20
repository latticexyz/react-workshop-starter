import { ClientComponents } from "./createClientComponents";
import { SetupNetworkResult } from "./setupNetwork";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

const entityToBytes32 = (entity: string) => {
  return "0x" + entity.replace("0x", "").padStart(64, "0");
};

export function createSystemCalls(
  { worldSend }: SetupNetworkResult,
  components: ClientComponents
) {
  const addToDo = (body: string) => {
    worldSend("addToDo", [ body ]);
  }
  const toggleDone = (id: string) => {
    worldSend("toggleDone", [entityToBytes32(id)]);
  }
  return {
    toggleDone,
    addToDo,
  };
}
