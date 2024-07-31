import { z } from "zod"

const envSchema = z.object({
  SERVER_IP: z.string({
    description: "The server IP to connect to",
  }),
  USERNAME: z.string({
    description: "The username to log in with",
  }),
  TYPE: z.enum(["microsoft", "mojang", "offline"], {
    description: "The type of account to log in with",
  }),
  LOGIN_MESSAGE: z.string({
    description: "The message to listen for to log in",
  }),
  LOGIN_COMMAND: z.string({
    description: "The command to run when logging in",
  }),
  SERVER_MESSAGE: z.string({
    description: "The message to listen for to connect to the server",
  }),
  SERVER_COMMAND: z.string({
    description: "The command to run when connected to the server",
  }),
  AFK_COMMAND: z.string({
    description: "The command to run when AFK",
  }),
  SHOW_MESSAGES: z.preprocess((value) => {
    return value == "true"
  }, z.boolean({
    description: "Whether to show chat messages in the console",
  })),
})

const parse = envSchema.safeParse(process.env)

if (!parse.success) {
  console.error(parse.error)
  process.exit(1)
}

export const env = parse.data