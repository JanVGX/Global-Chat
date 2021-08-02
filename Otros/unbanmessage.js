module.exports = ({

name: "unbanmessage",

type: "awaitedCommand",

code: `

$useChannel[$getServerVar[chatchannel]]

$color[GREEN]

$description[User **<@$findUser[$message]> ($username[$findUser[$message]]#$discriminator[$findUser[$message]])** get unbanned from the Chat Global!]

$onlyIf[isBot[$authorID]!=true;]

$onlyIf[$channelID==$getservervar[chatchannel];]

$suppressErrors`

})
