import * as ws from 'ws'
import { SocketHost } from './rpc-host'
import './server'
import type { ServerApi } from './server-api'

const socket = new ws('ws://localhost:5000')
socket.on('open', async () => {
  const rh = new SocketHost(socket)

  const serverApi = rh.getEndpoint<ServerApi>('server-api')
  console.log('Calling server methods:')
  console.log('1 + 2 =', await serverApi.add(1, 2))

  socket.close()
})
