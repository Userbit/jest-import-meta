import * as app from "./appm.js";
import path from "path";
import url from "url";

const file = "appm.js";

describe(`testing in ESM:`, () => {
  describe(`"import.meta" in the external ${file} module`, () => {
    test(`getModulePath() should return absolute path to ${file}`, () => {
      const realPath = app.getModulePath();

      expect(realPath).toBeTruthy();
      expect(isAbsolute(realPath)).toBe(true);
      expect(parse(realPath).base).toBe(file);
    });
  });
});
