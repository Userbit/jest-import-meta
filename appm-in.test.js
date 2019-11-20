import path from "path";
import url from "url";

const testFile = "appm2.test.js";

describe(`testing in ESM:`, () => {
  describe(`"import.meta" inside the test`, () => {
    test(`"import.meta.url" should be absolute Url as "file://path/to/${testFile}" to this test file`, () => {
      const moduleUrl = import.meta.url;
      const urlObj = url.URL(moduleUrl);

      expect(urlObj.protocol).toBe("file:");
      expect(path.isAbsolute(urlObj.pathname)).toBe(true);
      expect(path.parse(urlObj.pathname).base).toBe(testFile);
    });
  });
});
