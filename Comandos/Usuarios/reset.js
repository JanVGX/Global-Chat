module.exports = ({

name: "reset", 

aliases: ["reiniciar"],

code: `

  $color[GREEN]

  $description[Okay $username, I have reset the Global Chat values, reconfigure it with **c/setChannel** y **c/setInvite**

  

  $resetServerVar[chatchannel]

  $resetServerVar[chatinvite]

  $onlyIf[$getServerVar[chatchannel]!=Sin establecer;{color: ff0000}{description: Hey!At the moment there is no channel established for Global Chat. Set it up with **c/setChannel**}]]

  $onlyBotPerms[manageserver;managemessages;sendmessages;viewchannel;managechannels;{description: Hey!You must give me more permissions to be able to do that.}{color: ff0000}]

  $onlyPerms[admin;{description: ¡Hey! Debes ser administrador del servidor para utilizar este comando.}{color: ff0000}]

  $suppressErrors

` 

})
