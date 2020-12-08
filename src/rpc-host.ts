import { wrapCall } from 'rp-lib/src/api'
import { Client } from 'rp-lib/src/client'
import { Host } from 'rp-lib/src/host'
import { idGenerator } from 'rp-lib/src/id-generator'
import { Server } from 'rp-lib/src/server'
import * as ws from 'ws'

export class RpcHost extends Host {
  private idGen = idGenerator()
  private client = new Client()

  constructor(private socket: ws) {
    super()

    const server = new Server(this)

    socket.on('message', async (data) => {
      const req = this.parse(data as string)
      const res = await server.processRequestMessage(req)
      this.send(res)

      this.client.processResponseMessage(res)
    })
  }

  private send(data: unknown) {
    const json = JSON.stringify(data)
    this.socket.send(json)
  }

  private parse(json: string) {
    return JSON.parse(json)
  }

  getEndpoint<T>(endpoint: string, timeoutMs = 30000) {
    return wrapCall<T>(endpoint, (call) => {
      const id = this.idGen.next().value
      const req = this.client.getRequestMessage(id, call)
      this.send(req)
      return this.client.getResult(id, timeoutMs)
    })
  }
}
