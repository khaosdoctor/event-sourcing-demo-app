export default {
  ship: {
    create: require('./ship/create'),
    delete: require('./ship/delete'),
    find: require('./ship/find'),
    getAll: require('./ship/getAll')
  },
  port: {
    create: require('./port/create'),
    delete: require('./port/delete'),
    find: require('./port/find'),
    getAll: require('./port/getAll')
  }
}
