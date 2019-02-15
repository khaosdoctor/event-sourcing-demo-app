export default {
  ship: {
    create: require('./ship/create'),
    delete: require('./ship/delete')
  },
  port: {
    create: require('./port/create'),
    delete: require('./port/delete')
  }
}
