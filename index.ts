import mineflayer from 'mineflayer'
import { env } from './env'

let loggedIn = false

function login() {
  console.log('[System] Iniciando bot')
  console.log('[System] Usuário:', env.NICKNAME)
  console.log('[System] Tipo de conta:', env.TYPE)
  console.log('[System] IP do servidor:', env.SERVER_IP)

  const bot = mineflayer.createBot({
    host: env.SERVER_IP,
    port: 25565,
    username: env.NICKNAME,
    auth: env.TYPE,
    brand: "LunarClient:a1f71bc",
    physicsEnabled: true,
    skipValidation: false,
    hideErrors: false,
  })

  bot.once("spawn", () => {
    bot.setControlState('forward', true)
    bot.setControlState('back', true)
    bot.setControlState('left', true)
    bot.setControlState('right', true)
  })

  const autoMessage = setInterval(() => {
    if (loggedIn) {
      bot.chat(env.AFK_COMMAND)
      bot.setControlState('jump', true)
    } else {
      clearInterval(autoMessage)
    }
  }, 60000)

  bot.on('chat', (username, message) => {
    if (username === bot.username) return

    if (env.SHOW_MESSAGES)
      console.log(`[${username}] ${message}`)

    if (message === env.PRE_LOGIN_MESSAGE) {
      console.log('[System] Fazendo login...')
      bot.chat(env.PRE_LOGIN_COMMAND)
    }

    if (env.LOGIN_MESSAGE.includes('§')) {
      let splitMessage = env.LOGIN_MESSAGE.split('§')
      let message1 = splitMessage[0]
      let message2 = splitMessage[1]
      if (message === message1 || message === message2) {
        setTimeout(() => {
          console.log('[System] Conectado ao Lobby indo para o Servidor...')
          bot.chat(env.LOGIN_COMMAND)
        }, 2000)
      }
    }
    else
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
      }, 2000)
    }
  })

  bot.on('kicked', (e) => {
    console.log('[System] Fui expulso por:', e)
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
    console.log('[System] Reconectando em 15 segundos...')
    setTimeout(() => {
      console.log('[System] Tentando reconectar...')
      login()
    }, 15000)
  }
}

login()