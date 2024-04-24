import { Bot, webhookCallback } from 'grammy'
import 'dotenv/config'

if (!process.env.BOT_TOKEN) throw new Error('BOT_TOKEN is required!')
const bot = new Bot(process.env.BOT_TOKEN)

bot.command('start', async ctx => {
  await ctx.reply('Hello world')
})

export default webhookCallback(bot, 'http')