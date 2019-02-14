import { ObjectId } from 'mongodb'
import { Port } from '../domain'
import { PortRepository } from '../data/repositories/PortRepository'


export class PortService {
  private readonly repository: PortRepository

  constructor (repository: PortRepository) {
    this.repository = repository
  }

  async create (): Promise<Port> {
    // Put your database entity creation logic here
  }

  async find (id: ObjectId | string): Promise<Port> {
    const port = await this.repository.findById(id)

    if (!port) throw new PortNotFoundError(id as string)

    return port
  }
}
