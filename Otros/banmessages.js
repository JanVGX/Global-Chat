module.exports = ({

name: "banmessage",

type: "awaitedCommand",

code: `

$useChannel[$getServerVar[chatchannel]]

$color[RED]

$description[User **<@$findUser[$message]> ($username[$findUser[$message]]#$discriminator[$findUser[$message]])** get banned from the Chat Global.]

$onlyIf[isBot[$authorID]!=true;]

$onlyIf[$channelID==$getservervar[chatchannel];]

$suppressErrors`

})
