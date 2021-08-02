module.exports = ({

name: "setInvite", 

code: `

  $color[GREEN]

  $description[Ok <@$authorID>, from now on this server's invitation for Global Chat will be set to $message[1] (We recommend that the invitation never expire)]

  $wait[1s]

  $setServerVar[chatinvite;$message[1]]

  $onlyIf[$checkContains[$message[1];discord.gg/]!=false;{description: Hey!The link you indicated is not an invitation from the server.}{color: ff0000}]

  $argsCheck[>1;{description: Hey!You must indicate the invitation after the trigger (preferably permanent)}{color: ff0000}]

  $onlyBotPerms[manageserver;managemessages;sendmessages;viewchannel;managechannels;{description: ¡Hey! Debes darme más permisos para poder hacer eso.}{color: ff0000}]

  $onlyPerms[admin;{description: ¡Hey! Debes ser administrador del servidor para utilizar este comando.}{color: ff0000}]

  $suppressErrors

` 

})
