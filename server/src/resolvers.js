const channels = [{
  id: 1,
  name: 'soccer',
}, {
  id: 2,
  name: 'baseball',
}];

let nextId = 3;

module.exports = Object.freeze({
  resolvers: {
    Query: {
      channels: () => channels,
    },
    Mutation: {
      addChannel: (root, args) => {
        const newChannel = { id: nextId++, name: args.name };
        channels.push(newChannel);
        return newChannel;
      },
    },
  },
});
