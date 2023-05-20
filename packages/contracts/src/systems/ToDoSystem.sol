// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { addressToEntity } from "../Utils.sol";
import { getUniqueEntity } from "@latticexyz/world/src/modules/uniqueentity/getUniqueEntity.sol";
import {
  ToDo,
  ToDoData
} from "../codegen/Tables.sol";

contract ToDoSystem is System {
  function addToDo(string memory body) public {
    bytes32 owner = addressToEntity(_msgSender());
    bytes32 id = getUniqueEntity();
    ToDo.set(id, ToDoData({
      owner: owner,
      body: body,
      done: false
    }));
  }
  function toggleDone(bytes32 todoId) public {
    bytes32 sender = addressToEntity(_msgSender());
    require(sender == ToDo.getOwner(todoId), "unauthorized");
    ToDo.setDone(todoId, !ToDo.getDone(todoId));
  }
}
