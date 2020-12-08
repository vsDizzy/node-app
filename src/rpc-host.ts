import { Host } from 'rp-lib/src/host'
import * as ws from 'ws'

export class SocketHost extends Host {
  private handleMessage = (data: string) => {
    const msg = JSON.parse(data)
    this.processMessage(msg)
  }

  constructor(private socket: ws, timeoutMs?: number) {
    super(timeoutMs)

    socket.on('message', this.handleMessage)
  }

  protected send(data: unknown) {
    const json = JSON.stringify(data)
    this.socket.send(json)
  }

  close() {
    this.socket.off('message', this.handleMessage)
  }
}
