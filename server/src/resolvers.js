const channels = [{
  id: 1,
  name: 'soccer',
}, {
  id: 2,
  name: 'baseball',
}];

module.exports = Object.freeze({
  resolvers: {
    Query: {
      channels: () => channels,
    },
  },
});
