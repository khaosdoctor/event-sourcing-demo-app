import { Db } from 'mongodb'
import { MongodbEventRepository } from '@nxcd/paradox'
import { Ship } from '../../domain/ship/entity'

export class ShipRepository extends MongodbEventRepository<Ship> {
  constructor (connection: Db) {
    super(connection.collection(Ship.collection), Ship)
  }
}
