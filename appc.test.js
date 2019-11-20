const app = require("./appc.js");
const path = require("path");

const file = "appc.js";
const testFile = "appc.test.js";

describe(`testing in CommonJS:`, () => {
  describe(`"module" global variable in the external ${file} module`, () => {
    test(`getModuleUrl() should return absolute path to ${file}`, () => {
      const realPath = app.getModulePath();

      expect(realPath).toBeTruthy();
      expect(path.isAbsolute(realPath)).toBe(true);
      expect(path.parse(realPath).base).toBe(file);
    });
  });

  describe(`"module" global variable inside the test`, () => {
    test(`"module.filename" should be absolute path to ${testFile}`, () => {
      expect(path.isAbsolute(module.filename)).toBe(true);
      expect(path.parse(module.filename).base).toBe(testFile);
    });
  });
});
