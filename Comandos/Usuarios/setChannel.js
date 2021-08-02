module.exports = ({

name: "setChannel", 

aliases: ["set-channel"],

code: `

  $color[GREEN]

  $description[Ok <@$authorID>, from now on the Global Chat will be set to <#$findChannel[$message]>, now set an invitation with **c!setInvite**]

  $setServerVar[chatchannel;$findChannel[$channelID]]

  $channelCooldown[5s;]

  $onlyIf[$channelExists[$findChannel[$channelID]]==true;]

  $onlyPerms[managechannels;{description::x: You need more permissions to be able to execute this command!}{color: ff0000}]

  $onlyBotPerms[manageserver;managemessages;sendmessages;viewchannel;managechannels;{description: ¡Hey! Debes darme más permisos para poder hacer eso.}{color: ff0000}]

  $onlyPerms[admin;{description: ¡Hey! Debes ser administrador del servidor para utilizar este comando.}{color: ff0000}]

  $suppressErrors

` 

})
