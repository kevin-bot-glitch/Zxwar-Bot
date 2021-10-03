const { GuessTheNumber } = require("weky");

module.exports = {
	name: "guessthenumber",
	aliases: ['gtn'],
	run: async(client, message, args) => {
await GuessTheNumber({
	message: message,
	embed: {
		title: 'Guess The Number | Zxwar',
		description: 'You have **{{time}}** to guess the number.',
		color: client.embedcolor,
        footer: client.footer,
		timestamp: true
	},
	publicGame: true,
	number: 189,
	time: 60000,
	winMessage: {
		publicGame:
			'GG, The number which I guessed was **{{number}}**. <@{{winner}}> made it in **{{time}}**.\n\n__**Stats of the game:**__\n**Duration**: {{time}}\n**Number of participants**: {{totalparticipants}} Participants\n**Participants**: {{participants}}',
		privateGame:
			'GG, The number which I guessed was **{{number}}**. You made it in **{{time}}**.',
	},
	loseMessage:
		'Better luck next time! The number which I guessed was **{{number}}**.',
	bigNumberMessage: 'No {{author}}! My number is greater than **{{number}}**.',
	smallNumberMessage:
		'No {{author}}! My number is smaller than **{{number}}**.',
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	buttonText: 'Cancel',
	ongoingMessage:
		"A game is already runnning in <#{{channel}}>. You can't start a new one!",
	returnWinner: false
});
	}
}