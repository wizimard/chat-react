const constants = {
  token: 'token'
};

Object.keys(constants).forEach(property => {
  Object.defineProperty(constants, property, {
    writable: false,
    configurable: false
  });
})

export default constants;