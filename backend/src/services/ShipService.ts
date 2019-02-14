import { ObjectId } from 'mongodb'
import { Ship } from '../domain'
import { ShipRepository } from '../data/repositories/ShipRepository'


export class ShipService {
  private readonly repository: ShipRepository

  constructor (repository: ShipRepository) {
    this.repository = repository
  }

  async create (): Promise<Ship> {
    // Put your database entity creation logic here
  }

  async find (id: ObjectId | string): Promise<Ship> {
    const ship = await this.repository.findById(id)

    if (!ship) throw new ShipNotFoundError(id as string)

    return ship
  }
}
