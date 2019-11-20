const getModulePath = () => {
  return module.filename;
};

module.exports = {
  getModulePath
};

if (!module.parent) {
  const modulePath = getModulePath();

  console.log(modulePath);
  console.log(module);
}
