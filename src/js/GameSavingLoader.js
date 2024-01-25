import read from "./reader.js";
import json from "./parser.js";

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const value = await json(data);

      const saving = JSON.parse(value);
      return saving;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
