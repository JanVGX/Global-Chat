module.exports = ({

name: "$alwaysExecute", 

code: `

  $forEachChannel[interchat]

  $cooldown[7s;{description: Hey! Don't send messages so quickly $username.}{color: ff0000}{delete:2s}]

  $deleteCommand

  $onlyIf[$getGlobalUserVar[userban]!=Baneado;{description: Hey $username! Sie können im Global Chat keine Nachrichten senden, Sie sind gesperrt. Beschwerde hier https://discord.gg/GeVRXn8KZ3}{color: ff0000}{delete:5s}]

  $onlyIf[$channelID==$getServerVar[chatchannel;$guildID]]

  $onlyIf[$getServerVar[chatinvite]!=Sin establecer;]

  

  $onlyIf[$checkContains[$message;c/;c/setInvite;c/setChannel]!=true;]

  

  

  $suppressErrors

` 

})
