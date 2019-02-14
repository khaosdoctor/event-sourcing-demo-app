import { Db } from 'mongodb'
import { MongodbEventRepository } from '@nxcd/paradox'
import { Port } from '../../domain/port/entity'

export class PortRepository extends MongodbEventRepository<Port> {
  constructor (connection: Db) {
    super(connection.collection(Port.collection), Port)
  }
}
