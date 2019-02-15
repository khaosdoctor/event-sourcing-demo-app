export default {
  ship: {
    create: require('./ship/create'),
    delete: require('./ship/delete'),
    find: require('./ship/find')
  },
  port: {
    create: require('./port/create'),
    delete: require('./port/delete'),
    find: require('./port/find')
  }
}
