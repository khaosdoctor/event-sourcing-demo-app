import { ObjectId } from 'mongodb'
import { EventEntity } from '@nxcd/paradox'

export class Port extends EventEntity<Port> {
  public id: ObjectId | null = null

  static readonly collection = 'port'

  constructor () {
    super({
      // Here goes your known events array in the form of "eventName: eventCommitFunction"
      // Example: [UserWasCreatedEvent.eventName]: UserWasCreatedEvent.commit
    })
  }

  static create (): Port {
    // Put your entity creation logic here
  }

  get state () {
    const currentState = this.reducer.reduce(new Port(), [
      ...this.persistedEvents,
      ...this.pendingEvents
    ])

    return {
      id: currentState.id
      // Add more state properties here
    }
  }
}
