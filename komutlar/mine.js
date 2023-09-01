@@ -1,4 +1,5 @@
import discord
import time
from discord import app_commands 
import random

@@ -21,6 +22,7 @@ async def on_ready(self):
@tree.command(name = 'mines', description='mines game mode')
async def mines(interaction: discord.Interaction, tile_amt: int, round_id : str):
    if len(round_id) == 36:
        start_time = time.time()
        grid = ['❌','❌','❌','❌','❌','❌','❌','❌','❌','❌','❌','❌','❌','❌','❌','❌','❌','❌','❌','❌','❌','❌','❌','❌','❌']
        already_used = []

@@ -34,9 +36,13 @@ async def mines(interaction: discord.Interaction, tile_amt: int, round_id : str)
            count += 1

        chance = random.randint(45,95)
        if tile_amt < 4:
            chance = chance - 15

        em = discord.Embed(color=0x0025ff)
        em.add_field(name='Grid', value="\n" + "```"+grid[0]+grid[1]+grid[2]+grid[3]+grid[4]+"\n"+grid[5]+grid[6]+grid[7]+grid[8]+grid[9]+"\n"+grid[10]+grid[11]+grid[12]+grid[13]+grid[14]+"\n"+grid[15]+grid[16]+grid[17] \
            +grid[18]+grid[19]+"\n"+grid[20]+grid[21]+grid[22]+grid[23]+grid[24] + "```\n" + f"```Chance: %{chance}```\n```Round ID: \n{round_id}```")
            +grid[18]+grid[19]+"\n"+grid[20]+grid[21]+grid[22]+grid[23]+grid[24] + "```\n" + f"**Accuracy**\n```{chance}%```\n**Round ID**\n```{round_id}```\n**Response Time:**\n```{str(int(time.time() - int(start_time)))}```")
        em.set_footer(text='made by geek')
        await interaction.response.send_message(embed=em)
    else:
        em = discord.Embed(color=0xff0000)
        em.add_field(name='Error', value="Invalid round id")
        await interaction.response.send_message(embed=em)
client.run('OTM1NTcxODM4MDY5Nzk2ODc0.YfAlLA.0bM9om2f71Lg_c3NFedtcjywWMw')