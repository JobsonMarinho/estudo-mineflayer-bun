import mineflayer from 'mineflayer'
import { env } from './env'

let loggedIn = false

function login() {
  const bot = mineflayer.createBot({
    host: env.SERVER_IP,
    port: 25565,
    username: env.USERNAME,
    auth: env.TYPE,
  })

  const autoMessage = setInterval(() => {
    if (loggedIn) {
      bot.chat(env.AFK_COMMAND)
    } else {
      clearInterval(autoMessage)
    }
  }, 60000)

  bot.on('chat', (username, message) => {
    if (username === bot.username) return

    if (env.SHOW_MESSAGES)
      console.log(`[${username}] ${message}`)

    if (message === env.LOGIN_MESSAGE) {
      setTimeout(() => {
        console.log('[System] Conectado ao Lobby indo para o Servidor...')
        bot.chat(env.LOGIN_COMMAND)
      }, 2000)
    }

    if (message === env.SERVER_MESSAGE) {
      setTimeout(() => {
        loggedIn = true
        console.log('[System] Conectado ao Servidor')
        bot.chat(env.SERVER_COMMAND)
        bot.look(1.0, 1.5, false)
      }, 2000)
    }
  })

  bot.on('kicked', () => {
    console.log('[System] Fui expulso, tentando reconectar...')
    reconnect()
  })

  bot.on('end', () => {
    console.log('[System] Fui desconectado!')
    reconnect()
  })

  bot.on('error', (err) => {
    console.log(`[Ops!] ${err}`)
  })

  function reconnect() {
    loggedIn = false
    clearInterval(autoMessage)
    setTimeout(() => {
      console.log('[System] Tentando reconectar...')
      login()
    }, 5000)
  }
}

login()