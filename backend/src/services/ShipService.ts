import { ObjectId } from 'mongodb'
import { Ship } from '../domain'
import { ShipRepository } from '../data/repositories/ShipRepository'
import { ShipNotFoundError } from '../domain/ship/errors/ShipNotFoundError'
import { IShipCreationParams } from '../domain/structures/IShipCreationParams'

export class ShipService {
  private readonly repository: ShipRepository

  constructor (repository: ShipRepository) {
    this.repository = repository
  }

  async create (creationParams: IShipCreationParams, user: string): Promise<Ship> {
    const ship = Ship.create(creationParams, user)

    return this.repository.save(ship)
  }

  async delete (shipId: string, user: string): Promise<Ship> {
    const ship = await this.repository.findById(shipId)
    if (!ship) throw new ShipNotFoundError(shipId)

    ship.delete(user)
    return this.repository.save(ship)
  }

  async depart (portId: string, shipId: ObjectId, reason: string, user: string): Promise<Ship> {
    const ship = await this.repository.findById(shipId)

    if (!ship) throw new ShipNotFoundError(shipId.toHexString())

    ship.depart(portId, reason, user)

    return this.repository.save(ship)
  }

  async find (id: ObjectId | string): Promise<Ship> {
    const ship = await this.repository.findById(id)

    if (!ship) throw new ShipNotFoundError(id as string)

    return ship
  }
}
