import { Host } from 'rp-lib'
import * as ws from 'ws'
import './server'
import type { ServerApi } from './server-api'

const socket = new ws('ws://localhost:5000')
socket.on('open', async () => {
  const rh = new Host(socket)

  const serverApi = rh.getEndpoint<ServerApi>()
  console.log('Calling server methods:')
  console.log('1 + 2 =', await serverApi.add(1, 2))

  socket.close()
})
