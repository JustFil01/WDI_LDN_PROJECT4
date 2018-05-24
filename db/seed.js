/*eslint-disable */

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Game = require('../models/games');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

    [{
		"id": 36926,
		"name": "Monster Hunter: World",
		"summary": "Monster Hunter: World sees players take on the role of a hunter that completes various quests to hunt and slay monsters within a lively living and breathing eco-system full of predators…. and prey. In the video you can see some of the creatures you can expect to come across within the New World, the newly discovered continent where Monster Hunter: World is set, including the Great Jagras which has the ability to swallow its prey whole and one of the Monster Hunter series favourites, Rathalos. \n \nPlayers are able to utilise survival tools such as the slinger and Scoutfly to aid them in their hunt. By using these skills to their advantage hunters can lure monsters into traps and even pit them against each other in an epic fierce battle. Can our hunter successfully survive the fight and slay the Anjanath? He’ll need to select his weapon choice carefully from 14 different weapon classes and think strategically about how to take the giant foe down. Don’t forget to pack the camouflaging ghillie suit!",
		"popularity": 1380.0,
		"release_dates": [
			{
				"category": 0,
				"platform": 49,
				"date": 1516924800000,
				"region": 2,
				"human": "2018-Jan-26",
				"y": 2018,
				"m": 1
			},
			{
				"category": 0,
				"platform": 48,
				"date": 1516924800000,
				"region": 8,
				"human": "2018-Jan-26",
				"y": 2018,
				"m": 1
			},
			{
				"category": 5,
				"platform": 6,
				"date": 1538265600000,
				"region": 8,
				"human": "2018-Q3",
				"y": 2018,
				"m": 9
			},
			{
				"category": 0,
				"platform": 49,
				"date": 1516924800000,
				"region": 8,
				"human": "2018-Jan-26",
				"y": 2018,
				"m": 1
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/fxgwm1nnyexhvauqv0ds.jpg",
			"cloudinary_id": "fxgwm1nnyexhvauqv0ds",
			"width": 394,
			"height": 500
		}
	},
	{
		"id": 26766,
		"name": "Xenoblade Chronicles 2",
		"summary": "As the giant beasts march toward death, the last hope is a scavenger named Rex—and Pyra, a living weapon known as a Blade. Can you find the fabled paradise she calls home? Command a group of Blades and lead them to countless strategic victories before the world ends. \n \nEach Titan hosts its own distinct cultures, wildlife, and diverse regions to explore. Search the vast open areas and labyrinthine corridors for treasure, secret paths, and creatures to battle and index. \n \nDuring these escapades you'll get to know a large cast of eclectic characters, including the weaponized life forms known as Blades. Gather these allies, bond with them to increase their power, and utilize their special ARTS to devastate enemies. But to save the world of Alrest, you must first demystify its cloudy past. \n \nA new story in the Xenoblade Chronicles series \n \nThe next adventure is on the Nintendo Switch console—set on the backs of colossal, living Titans. \n \nDiscover each Titan’s diverse regions, culture, wildlife, equipment, and hidden secrets. \n \nFind, bond with, and command weaponized life forms known as Blades to earn abilities and enhance them. \n \nUncover the history of Alrest and the mystery of its endless ocean of clouds.",
		"popularity": 538.0,
		"release_dates": [
			{
				"category": 0,
				"platform": 130,
				"date": 1512086400000,
				"region": 8,
				"human": "2017-Dec-01",
				"y": 2017,
				"m": 12
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/dmdfiiamojsjmhgjkxxr.jpg",
			"cloudinary_id": "dmdfiiamojsjmhgjkxxr",
			"width": 800,
			"height": 1300
		}
	},
	{
		"id": 18167,
		"name": "Hello Neighbor",
		"summary": "Hello Neighbor is a stealth horror game about sneaking into your neighbor's house to figure out what horrible secrets he's hiding in the basement. You play against an advanced AI that learns from your every move. Really enjoying climbing through that backyard window? Expect a bear trap there. Sneaking through the front door? There'll be cameras there soon. Trying to escape? The Neighbor will find a shortcut and catch you.",
		"popularity": 457.0,
		"release_dates": [
			{
				"category": 2,
				"platform": 48,
				"date": 1546214400000,
				"human": "2018",
				"y": 2018,
				"m": 12
			},
			{
				"category": 2,
				"platform": 130,
				"date": 1546214400000,
				"human": "2018",
				"y": 2018,
				"m": 12
			},
			{
				"category": 0,
				"platform": 49,
				"date": 1512691200000,
				"region": 8,
				"human": "2017-Dec-08",
				"y": 2017,
				"m": 12
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1512691200000,
				"region": 8,
				"human": "2017-Dec-08",
				"y": 2017,
				"m": 12
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/zsvyzrqpbuvtfnpdagfp.jpg",
			"cloudinary_id": "zsvyzrqpbuvtfnpdagfp",
			"width": 720,
			"height": 1080
		}
	},
	{
		"id": 7329,
		"name": "Dead Island 2",
		"summary": "Welcome to Zombie California! Slay and survive with style in this co-op playground. Explore the vast Golden State, from lush forests to sunny beaches. Wield a variety of over-the-top, hand-crafted weapons against human and undead enemies. Upgrade your vehicles, grab your friends, and take a permanent vacation to the zombie apocalypse. Paradise meets hell and you are the matchmaker!",
		"popularity": 443.6666666666667,
		"release_dates": [
			{
				"category": 7,
				"platform": 49,
				"region": 8,
				"human": "TBD"
			},
			{
				"category": 7,
				"platform": 48,
				"region": 8,
				"human": "TBD"
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/lumgkti6rht3evlbu8xw.jpg",
			"cloudinary_id": "lumgkti6rht3evlbu8xw",
			"width": 550,
			"height": 640
		}
	},
	{
		"id": 25300,
		"name": "Sky Break",
		"summary": "Sky Break is an open-world game on a stormy abandoned planet filled with wild mechas. Learn to master this world and to hack the mechas if you want a chance to survive.",
		"popularity": 396.3333333333333,
		"release_dates": [
			{
				"category": 0,
				"platform": 6,
				"date": 1477008000000,
				"region": 2,
				"human": "2016-Oct-21",
				"y": 2016,
				"m": 10
			},
			{
				"category": 0,
				"platform": 3,
				"date": 1477008000000,
				"region": 8,
				"human": "2016-Oct-21",
				"y": 2016,
				"m": 10
			},
			{
				"category": 0,
				"platform": 14,
				"date": 1477008000000,
				"region": 8,
				"human": "2016-Oct-21",
				"y": 2016,
				"m": 10
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1477008000000,
				"region": 8,
				"human": "2016-Oct-21",
				"y": 2016,
				"m": 10
			},
			{
				"category": 0,
				"platform": 92,
				"date": 1477008000000,
				"region": 8,
				"human": "2016-Oct-21",
				"y": 2016,
				"m": 10
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/ebebxnv543d4y5e4wazd.jpg",
			"cloudinary_id": "ebebxnv543d4y5e4wazd",
			"width": 4000,
			"height": 2250
		}
	},
	{
		"id": 22425,
		"name": "Oppai Slider 2",
		"popularity": 386.6666666666667,
		"release_dates": [
			{
				"category": 0,
				"platform": 6,
				"date": 1132876800000,
				"region": 5,
				"human": "2005-Nov-25",
				"y": 2005,
				"m": 11
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1132876800000,
				"region": 1,
				"human": "2005-Nov-25",
				"y": 2005,
				"m": 11
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/nkugb4uvps5dzccb1wpl.jpg",
			"cloudinary_id": "nkugb4uvps5dzccb1wpl",
			"width": 259,
			"height": 383
		}
	},
	{
		"id": 28465,
		"name": "Porno Studio Tycoon",
		"summary": "Business simulator with rich economic model (markets with shortages and surpluses, websites with black hat SEO, etc.), flexible configuration of movie production, complex casting, two modes of shooting (fast and detailed ones) and other features. Beautiful graphics and no sexually explicit content.",
		"popularity": 359.0,
		"release_dates": [
			{
				"category": 0,
				"platform": 6,
				"date": 1493942400000,
				"region": 8,
				"human": "2017-May-05",
				"y": 2017,
				"m": 5
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/eku1gg56ltnfucepgqny.jpg",
			"cloudinary_id": "eku1gg56ltnfucepgqny",
			"width": 460,
			"height": 215
		}
	},
	{
		"id": 28552,
		"name": "Far Cry 5",
		"summary": "Welcome to Hope County, Montana, land of the free and the brave, but also home to a fanatical doomsday cult known as The Project at Eden’s Gate that is threatening the community's freedom. Stand up to the cult’s leader, Joseph Seed and the Heralds, and spark the fires of resistance that will liberate the besieged community.  \n  \nIn this expansive world, your limits and creativity will be tested against the biggest and most ruthless baddest enemy Far Cry has ever seen. It’ll be wild and it’ll get weird, but as long as you keep your wits about you, the residents of Hope County can rest assured knowing you’re their beacon of hope.",
		"popularity": 355.3333333333333,
		"release_dates": [
			{
				"category": 0,
				"platform": 49,
				"date": 1522108800000,
				"region": 8,
				"human": "2018-Mar-27",
				"y": 2018,
				"m": 3
			},
			{
				"category": 0,
				"platform": 48,
				"date": 1522108800000,
				"region": 8,
				"human": "2018-Mar-27",
				"y": 2018,
				"m": 3
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1522108800000,
				"region": 8,
				"human": "2018-Mar-27",
				"y": 2018,
				"m": 3
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/cuwotikeyasdnpthudjf.jpg",
			"cloudinary_id": "cuwotikeyasdnpthudjf",
			"width": 4000,
			"height": 5287
		}
	},
	{
		"id": 22472,
		"name": "Artificial Academy 2",
		"summary": "Artificial Academy 2 is an eroge high school social simulation, sequel of Artificial Academy. \n \nCreate and play any of up to 25 students of varying gender, orientation and other interaction abilities and personal inclinations. Make friends and lovers as the class competes for achievement in academics, athletics, popularity, and romance.",
		"popularity": 315.0,
		"release_dates": [
			{
				"category": 0,
				"platform": 6,
				"date": 1402617600000,
				"region": 5,
				"human": "2014-Jun-13",
				"y": 2014,
				"m": 6
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/sosfbe6zqn1lipgfhxct.jpg",
			"cloudinary_id": "sosfbe6zqn1lipgfhxct",
			"width": 354,
			"height": 500
		}
	},
	{
		"id": 21642,
		"name": "Totally Accurate Battle Simulator",
		"summary": "A physics based medieval battle simulator which lets you pit wacky waving armies against each other. In Totally Accurate Battle Simulator you pit waving arm men against each other and watch them fight it out.",
		"popularity": 296.0,
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/vex1s6b1qxq5bqz2puu8.jpg",
			"cloudinary_id": "vex1s6b1qxq5bqz2puu8",
			"width": 1280,
			"height": 720
		}
	},
	{
		"id": 13189,
		"name": "Masochisia",
		"summary": "A young man discovers through a series of hallucinations that he will grow up to become a violent psychopath. How will he respond to these revelations? Can he change his fate? Can you even... change fate...",
		"popularity": 291.0,
		"release_dates": [
			{
				"category": 0,
				"platform": 6,
				"date": 1444348800000,
				"region": 8,
				"human": "2015-Oct-09",
				"y": 2015,
				"m": 10
			},
			{
				"category": 0,
				"platform": 14,
				"date": 1444348800000,
				"region": 8,
				"human": "2015-Oct-09",
				"y": 2015,
				"m": 10
			},
			{
				"category": 0,
				"platform": 3,
				"date": 1444348800000,
				"region": 8,
				"human": "2015-Oct-09",
				"y": 2015,
				"m": 10
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/mftzxbt2mmh1bufp3kal.jpg",
			"cloudinary_id": "mftzxbt2mmh1bufp3kal",
			"width": 1000,
			"height": 1286
		}
	},
	{
		"id": 11567,
		"name": "ELEX",
		"summary": "An action, role-playing open world game for PC and Consoles, Elex was developed by Piranha Bytes, creators of the award winning Gothic series and is set in a brand new, post-apocalyptic, Science-Fantasy universe where magic meets mechs. \n \n\"Advanced in technology, civilized and with a population of billions, Magalan was a planet looking to the future. Then the meteor hit. \n \nThose who survived are now trapped in a battle to survive, a struggle to decide the fate of a planet. At the center of this fight is the element “Elex”. A precious, limited resource that arrived with the meteor, Elex can power machines, open the door to magic, or re-sculpt life into new, different forms. \n \nBut which of these choices should be the future of Magalan? Can technology or magic save this world? Or will this new power destroy all those left alive amongst the ruins?\"",
		"popularity": 287.6666666666667,
		"release_dates": [
			{
				"category": 0,
				"platform": 48,
				"date": 1508198400000,
				"region": 1,
				"human": "2017-Oct-17",
				"y": 2017,
				"m": 10
			},
			{
				"category": 0,
				"platform": 49,
				"date": 1508198400000,
				"region": 2,
				"human": "2017-Oct-17",
				"y": 2017,
				"m": 10
			},
			{
				"category": 0,
				"platform": 49,
				"date": 1508457600000,
				"region": 1,
				"human": "2017-Oct-20",
				"y": 2017,
				"m": 10
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1508198400000,
				"region": 8,
				"human": "2017-Oct-17",
				"y": 2017,
				"m": 10
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1508457600000,
				"region": 1,
				"human": "2017-Oct-20",
				"y": 2017,
				"m": 10
			},
			{
				"category": 0,
				"platform": 48,
				"date": 1508198400000,
				"region": 2,
				"human": "2017-Oct-17",
				"y": 2017,
				"m": 10
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/k4nbupwvotwyumiicyzq.jpg",
			"cloudinary_id": "k4nbupwvotwyumiicyzq",
			"width": 600,
			"height": 857
		}
	},
	{
		"id": 18623,
		"name": "Villagers",
		"summary": "Villagers is a beautifully illustrated and richly detailed town-building game where you build a thriving community using the people and resources around you. Success or failure depends on your ability to create a town that can grow and prosper, and overcome the harsh realities of medieval life!",
		"popularity": 287.0,
		"release_dates": [
			{
				"category": 0,
				"platform": 6,
				"date": 1458864000000,
				"region": 1,
				"human": "2016-Mar-25",
				"y": 2016,
				"m": 3
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1458864000000,
				"human": "2016-Mar-25",
				"y": 2016,
				"m": 3
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/aooqizxhppovwmuyfkql.jpg",
			"cloudinary_id": "aooqizxhppovwmuyfkql",
			"width": 460,
			"height": 215
		}
	},
	{
		"id": 16309,
		"name": "A Life in Silk - The First Cumming",
		"summary": "A Life in Silk is a highly-interactive visual-novel, that tells the story of a feminine sissy boy, who just recently turned 18 and dreams only of becoming a glamorous T-girl Goddess and rule the Big City with his beauty and never ending sexual appetite.\n\nBut while stuck in a small suburban town with his single but very libertine Mommy, he knows that to reach his expensive dream of perfect feminine transformation, he will need to seduce as many Sugar Daddies as he can with his advanced oral skills and erotically charge fashion sense, in hopes they will sponsor his transformation.",
		"popularity": 277.0,
		"release_dates": [
			{
				"category": 0,
				"platform": 6,
				"date": 1467849600000,
				"region": 8,
				"human": "2016-Jul-07",
				"y": 2016,
				"m": 7
			},
			{
				"category": 0,
				"platform": 14,
				"date": 1467849600000,
				"region": 8,
				"human": "2016-Jul-07",
				"y": 2016,
				"m": 7
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/oo0dqt8ollefvigrr6bj.jpg",
			"cloudinary_id": "oo0dqt8ollefvigrr6bj",
			"width": 1425,
			"height": 1425
		}
	},
	{
		"id": 18822,
		"name": "Pyre",
		"summary": "Pyre is a party-based RPG in which you lead a band of exiles to freedom through ancient competitions spread across a vast, mystical purgatory. Who shall return to glory, and who shall remain in exile to the end of their days?",
		"popularity": 276.3333333333333,
		"release_dates": [
			{
				"category": 0,
				"platform": 48,
				"date": 1500940800000,
				"region": 2,
				"human": "2017-Jul-25",
				"y": 2017,
				"m": 7
			},
			{
				"category": 0,
				"platform": 45,
				"date": 1500940800000,
				"region": 1,
				"human": "2017-Jul-25",
				"y": 2017,
				"m": 7
			},
			{
				"category": 0,
				"platform": 45,
				"date": 1500940800000,
				"region": 2,
				"human": "2017-Jul-25",
				"y": 2017,
				"m": 7
			},
			{
				"category": 0,
				"platform": 92,
				"date": 1500940800000,
				"region": 8,
				"human": "2017-Jul-25",
				"y": 2017,
				"m": 7
			},
			{
				"category": 0,
				"platform": 3,
				"date": 1500940800000,
				"region": 8,
				"human": "2017-Jul-25",
				"y": 2017,
				"m": 7
			},
			{
				"category": 0,
				"platform": 48,
				"date": 1500940800000,
				"region": 8,
				"human": "2017-Jul-25",
				"y": 2017,
				"m": 7
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1500940800000,
				"region": 8,
				"human": "2017-Jul-25",
				"y": 2017,
				"m": 7
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/zl02iwvbyyp28wquk8br.jpg",
			"cloudinary_id": "zl02iwvbyyp28wquk8br",
			"width": 579,
			"height": 800
		}
	},
	{
		"id": 10039,
		"name": "Superfighters Deluxe",
		"summary": "Superfighters Deluxe is a multiplayer 2D action game where little flat-headed men fight to the death in small and highly destructible arenas. Surviving each round takes skill, strategy and luck.",
		"popularity": 267.3333333333333,
		"release_dates": [
			{
				"category": 0,
				"platform": 6,
				"date": 1477699200000,
				"region": 8,
				"human": "2016-Oct-29",
				"y": 2016,
				"m": 10
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/zbvnvg66mwsqt52fnfyk.jpg",
			"cloudinary_id": "zbvnvg66mwsqt52fnfyk",
			"width": 960,
			"height": 1420
		}
	},
	{
		"id": 28204,
		"name": "Call of Duty: WWII",
		"summary": "Call of Duty: WWII creates the definitive World War II next generation experience across three different game modes: Campaign, Multiplayer, and Co-Operative. Featuring stunning visuals, the Campaign transports players to the European theater as they engage in an all-new Call of Duty story set in iconic World War II battles. Multiplayer marks a return to original, boots-on-the ground Call of Duty gameplay. Authentic weapons and traditional run-and-gun action immerse you in a vast array of World War II-themed locations. The Co-Operative mode unleashes a new and original story in a standalone game experience full of unexpected, adrenaline-pumping moments.",
		"popularity": 251.0,
		"release_dates": [
			{
				"category": 0,
				"platform": 49,
				"date": 1509667200000,
				"region": 2,
				"human": "2017-Nov-03",
				"y": 2017,
				"m": 11
			},
			{
				"category": 0,
				"platform": 48,
				"date": 1509667200000,
				"region": 1,
				"human": "2017-Nov-03",
				"y": 2017,
				"m": 11
			},
			{
				"category": 0,
				"platform": 48,
				"date": 1509667200000,
				"region": 2,
				"human": "2017-Nov-03",
				"y": 2017,
				"m": 11
			},
			{
				"category": 0,
				"platform": 48,
				"date": 1509667200000,
				"region": 8,
				"human": "2017-Nov-03",
				"y": 2017,
				"m": 11
			},
			{
				"category": 0,
				"platform": 49,
				"date": 1509667200000,
				"region": 8,
				"human": "2017-Nov-03",
				"y": 2017,
				"m": 11
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1509667200000,
				"region": 8,
				"human": "2017-Nov-03",
				"y": 2017,
				"m": 11
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/e7vzqpimo6pwovewqqli.jpg",
			"cloudinary_id": "e7vzqpimo6pwovewqqli",
			"width": 2736,
			"height": 3457
		}
	},
	{
		"id": 25311,
		"name": "Star Control: Origins",
		"summary": "The Earthlings have joined the interstellar club. The galaxy will never be the same.\n\nThe year is 2086 and Earth has detected an alien distress call originating from the surface of Triton. In response, Star Control is formed with you as The Captain of Earth's first prototype starship.",
		"popularity": 245.3333333333333,
		"release_dates": [
			{
				"category": 2,
				"platform": 6,
				"date": 1546214400000,
				"human": "2018",
				"y": 2018,
				"m": 12
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/lgk8trfqnpisud9qupkm.jpg",
			"cloudinary_id": "lgk8trfqnpisud9qupkm",
			"width": 1520,
			"height": 980
		}
	},
	{
		"id": 47823,
		"name": "Citadel: Forged With Fire",
		"summary": "\"Citadel: Forged With Fire is a massive online sandbox RPG with elements of magic, spellcasting and inter-kingdom conflict. As a newly minted apprentice of the magic arts, you will set off to investigate the dangerous world of Ignus. Your goal: create a name for yourself and achieve notoriety and power among the land’s ruling Houses. \n \nYou have complete freedom to pursue your own destiny; hatch plots of trickery and deceit to ascend the ranks among allies and enemies, become an infamous hunter of other players, build massive and unique castles, tame mighty beasts to do your bidding, and visit uncharted territories to unravel their rich and intriguing history. The path to ultimate power and influence is yours to choose.\"",
		"popularity": 241.0,
		"release_dates": [
			{
				"category": 0,
				"platform": 6,
				"date": 1501027200000,
				"region": 8,
				"human": "2017-Jul-26",
				"y": 2017,
				"m": 7
			},
			{
				"category": 7,
				"platform": 49,
				"region": 8,
				"human": "TBD"
			},
			{
				"category": 7,
				"platform": 48,
				"region": 8,
				"human": "TBD"
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/eujx4gdidznmdkdpj5e6.jpg",
			"cloudinary_id": "eujx4gdidznmdkdpj5e6",
			"width": 260,
			"height": 360
		}
	},
	{
		"id": 26145,
		"name": "Impact Winter",
		"summary": "In 30 days, help is coming...       \n       \nA mysterious radio transmission claims that help is inbound. You are Jacob Solomon: leader of a makeshift team trying to survive the aftermath of a devastating asteroid collision.  The world you once knew is no more – buried deep beneath the constant snowfall.       \n       \nYour goal: keep your companions alive until rescue.",
		"popularity": 231.3333333333333,
		"release_dates": [
			{
				"category": 0,
				"platform": 49,
				"date": 1522886400000,
				"region": 1,
				"human": "2018-Apr-05",
				"y": 2018,
				"m": 4
			},
			{
				"category": 0,
				"platform": 48,
				"date": 1522886400000,
				"region": 1,
				"human": "2018-Apr-05",
				"y": 2018,
				"m": 4
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1495497600000,
				"region": 8,
				"human": "2017-May-23",
				"y": 2017,
				"m": 5
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/duf8ynjzw9umyejj2kvw.jpg",
			"cloudinary_id": "duf8ynjzw9umyejj2kvw",
			"width": 1001,
			"height": 1411
		}
	},
	{
		"id": 26163,
		"name": "The Legend of Queen Opala",
		"popularity": 222.3333333333333,
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/itnqsuynccjd08wk4fyz.jpg",
			"cloudinary_id": "itnqsuynccjd08wk4fyz",
			"width": 435,
			"height": 615
		}
	},
	{
		"id": 6732,
		"name": "Rise & Shine",
		"summary": "Rise is a small kid of Gamearth, the world where the classic videogame characters live. He finds himself lost in the middle of a war against the Space Grunts, the bald muscular soldiers with big guns that just invaded his world. Only with the help of the legendary gun, Shine, he’ll be able to stay alive and just maybe, incredibly, save his planet from the invaders. \n \nThe game mixes pure shooting arcade with the use of different bullets to solve all the situations Rise will find on his path. Think of a more arcadey Another World, also with a very tight relationship between gameplay and story.",
		"popularity": 217.6666666666667,
		"release_dates": [
			{
				"category": 0,
				"platform": 49,
				"date": 1484265600000,
				"region": 2,
				"human": "2017-Jan-13",
				"y": 2017,
				"m": 1
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1484265600000,
				"region": 8,
				"human": "2017-Jan-13",
				"y": 2017,
				"m": 1
			},
			{
				"category": 0,
				"platform": 49,
				"date": 1484265600000,
				"region": 8,
				"human": "2017-Jan-13",
				"y": 2017,
				"m": 1
			},
			{
				"category": 2,
				"platform": 3,
				"date": 1514678400000,
				"human": "2017",
				"y": 2017,
				"m": 12
			},
			{
				"category": 2,
				"platform": 14,
				"date": 1514678400000,
				"human": "2017",
				"y": 2017,
				"m": 12
			},
			{
				"category": 2,
				"platform": 48,
				"date": 1514678400000,
				"human": "2017",
				"y": 2017,
				"m": 12
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/fxh5b0rjydf4ldfng8ze.jpg",
			"cloudinary_id": "fxh5b0rjydf4ldfng8ze",
			"width": 810,
			"height": 1080
		}
	},
	{
		"id": 22470,
		"name": "SchoolMate 2",
		"summary": "The sequel to Illusion soft Schoolmate series.",
		"popularity": 213.6666666666667,
		"release_dates": [
			{
				"category": 0,
				"platform": 6,
				"date": 1277424000000,
				"region": 5,
				"human": "2010-Jun-25",
				"y": 2010,
				"m": 6
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/zrac3iilq0inlirpxrdv.jpg",
			"cloudinary_id": "zrac3iilq0inlirpxrdv",
			"width": 220,
			"height": 316
		}
	},
	{
		"id": 16468,
		"name": "Wild Terra",
		"summary": "It is action-RPG and sandbox hybrid with building, crafting, gathering, farming and land claiming elements. There is no NPCs in game so the only way to get something is to create it by yourself or trade from other players... or take it with brutal force. However we understand that not every one have enough time to \"live\" in game doing everything by their selves that is why all game processes are boosted to make game a little bit casual. \n \nWe can say this about your character development as well. It is very boring to level up your character to XX-level just to take a good sword in hands and start to fight. There would be leveling anyway however it would grant you small additional benefits in combats but not major domination.",
		"popularity": 212.3333333333333,
		"release_dates": [
			{
				"category": 0,
				"platform": 6,
				"date": 1481846400000,
				"human": "2016-Dec-16",
				"y": 2016,
				"m": 12
			},
			{
				"category": 0,
				"platform": 14,
				"date": 1481846400000,
				"human": "2016-Dec-16",
				"y": 2016,
				"m": 12
			},
			{
				"category": 0,
				"platform": 3,
				"date": 1481846400000,
				"human": "2016-Dec-16",
				"y": 2016,
				"m": 12
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/b6tmzgkmomlxjsanoqdm.jpg",
			"cloudinary_id": "b6tmzgkmomlxjsanoqdm",
			"width": 600,
			"height": 835
		}
	},
	{
		"id": 26192,
		"name": "The Last of Us: Part II",
		"summary": "Set 5 years after the events of The Last of Us, Joel and Ellie return on their journey through the ruined cities of America, their path ahead of them will be unfold.",
		"popularity": 211.6666666666667,
		"release_dates": [
			{
				"category": 3,
				"platform": 48,
				"date": 1553990400000,
				"region": 1,
				"human": "2019-Q1",
				"y": 2019,
				"m": 3
			},
			{
				"category": 3,
				"platform": 48,
				"date": 1553990400000,
				"region": 2,
				"human": "2019-Q1",
				"y": 2019,
				"m": 3
			},
			{
				"category": 3,
				"platform": 48,
				"date": 1553990400000,
				"region": 8,
				"human": "2019-Q1",
				"y": 2019,
				"m": 3
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/murzziwvvmzacglj5ch5.jpg",
			"cloudinary_id": "murzziwvvmzacglj5ch5",
			"width": 528,
			"height": 754
		}
	},
	{
		"id": 25076,
		"name": "Red Dead Redemption 2",
		"summary": "Developed by the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America’s unforgiving heartland. The game's vast and atmospheric world will also provide the foundation for a brand new online multiplayer experience.",
		"popularity": 204.0,
		"release_dates": [
			{
				"category": 0,
				"platform": 49,
				"date": 1540512000000,
				"region": 1,
				"human": "2018-Oct-26",
				"y": 2018,
				"m": 10
			},
			{
				"category": 0,
				"platform": 49,
				"date": 1540512000000,
				"region": 8,
				"human": "2018-Oct-26",
				"y": 2018,
				"m": 10
			},
			{
				"category": 0,
				"platform": 48,
				"date": 1540512000000,
				"region": 8,
				"human": "2018-Oct-26",
				"y": 2018,
				"m": 10
			},
			{
				"category": 0,
				"platform": 48,
				"date": 1540512000000,
				"region": 2,
				"human": "2018-Oct-26",
				"y": 2018,
				"m": 10
			},
			{
				"category": 0,
				"platform": 48,
				"date": 1540512000000,
				"region": 1,
				"human": "2018-Oct-26",
				"y": 2018,
				"m": 10
			},
			{
				"category": 0,
				"platform": 49,
				"date": 1540512000000,
				"region": 2,
				"human": "2018-Oct-26",
				"y": 2018,
				"m": 10
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/yfk9f2lbo0r7slytuhra.jpg",
			"cloudinary_id": "yfk9f2lbo0r7slytuhra",
			"width": 1106,
			"height": 1580
		}
	},
	{
		"id": 59516,
		"name": "The Last Stand: Dead Zone",
		"summary": "The Last Stand: Dead Zone brings RPG, Action and Strategy to the zombie apocalypse. \n \nLoad out your team and run real-time missions to gather weapons, gear, construction materials and supplies in locations across the Dead Zone all while holding off the horde. With 30,000+ items available there's plenty of ways to dispatch the walking dead. \n \n \nBUILD YOUR COMPOUND \nBuild and defend your compound to protect you from the infected and human raiders. Set up barricades and traps to hold the hordes at bay. Your survival depends on it. \n \nASSEMBLE YOUR SURVIVORS \nAttract new survivors, decide their role then equip them to help you survive. Select from a number of classes including Fighters, Engineers, Medics, Scavengers and Recon. Each role is important and will affect your chances of survival. \n \nLOOT AND CRAFTING! \nLoot or craft over 30,000 weapon and gear items in real time missions across the city. Gather schematics for weapons and gear through scavenging or trade. \n \nALLIANCES AND RAIDING \nRaid other players for precious resources or help them with construction. Join an alliance and secure your position in the Dead Zone!",
		"popularity": 203.6666666666667,
		"release_dates": [
			{
				"category": 0,
				"platform": 82,
				"date": 1329782400000,
				"region": 8,
				"human": "2012-Feb-21",
				"y": 2012,
				"m": 2
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/smxo3k7389lokvsdvhqg.jpg",
			"cloudinary_id": "smxo3k7389lokvsdvhqg",
			"width": 528,
			"height": 754
		}
	},
	{
		"id": 29173,
		"name": "Startup Company",
		"summary": "Startup Company is a business simulation sandbox game. You play as the CEO of a newly formed software company. Your job is to either complete client contracts to make money, or build your very own products.",
		"popularity": 202.0,
		"release_dates": [
			{
				"category": 0,
				"platform": 3,
				"date": 1502496000000,
				"region": 8,
				"human": "2017-Aug-12",
				"y": 2017,
				"m": 8
			},
			{
				"category": 0,
				"platform": 14,
				"date": 1502496000000,
				"region": 8,
				"human": "2017-Aug-12",
				"y": 2017,
				"m": 8
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1502496000000,
				"region": 8,
				"human": "2017-Aug-12",
				"y": 2017,
				"m": 8
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/ohi340su1nsn4yoa7d9y.jpg",
			"cloudinary_id": "ohi340su1nsn4yoa7d9y",
			"width": 460,
			"height": 215
		}
	},
	{
		"id": 27266,
		"name": "House of Caravan",
		"summary": "Taking place in a single mansion in Candlewood, northeast USA, in the early 20th Century, House of Caravan is a sinister adventure filled with dark secrets and vexing puzzles.",
		"popularity": 201.3333333333333,
		"release_dates": [
			{
				"category": 0,
				"platform": 6,
				"date": 1429142400000,
				"human": "2015-Apr-16",
				"y": 2015,
				"m": 4
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/zrm2ypdvwyllyjmrk59f.jpg",
			"cloudinary_id": "zrm2ypdvwyllyjmrk59f",
			"width": 460,
			"height": 215
		}
	},
	{
		"id": 19301,
		"name": "The Long Journey Home",
		"summary": "The Long Journey Home combines the endless freedom of space with a new open questing system that always leaves you in command. Deliver the stranded Glukkt to his homeworld as he asks, or to your new slaver friends? Attempt to make allies with everyone, or pin your hopes on the tougher races, and hope they never turn on you? Jump by jump, make hard decisions and live with the consequences, in a universe that is never the same twice.",
		"popularity": 188.0,
		"release_dates": [
			{
				"category": 0,
				"platform": 6,
				"date": 1496102400000,
				"region": 8,
				"human": "2017-May-30",
				"y": 2017,
				"m": 5
			},
			{
				"category": 2,
				"platform": 48,
				"date": 1514678400000,
				"region": 8,
				"human": "2017",
				"y": 2017,
				"m": 12
			},
			{
				"category": 2,
				"platform": 49,
				"date": 1514678400000,
				"region": 8,
				"human": "2017",
				"y": 2017,
				"m": 12
			},
			{
				"category": 2,
				"platform": 3,
				"date": 1514678400000,
				"region": 8,
				"human": "2017",
				"y": 2017,
				"m": 12
			},
			{
				"category": 2,
				"platform": 14,
				"date": 1514678400000,
				"region": 8,
				"human": "2017",
				"y": 2017,
				"m": 12
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/eg5t3vhswymoecvbxc8g.jpg",
			"cloudinary_id": "eg5t3vhswymoecvbxc8g",
			"width": 600,
			"height": 800
		}
	},
	{
		"id": 34919,
		"name": "Nimbatus - The Space Drone Constructor",
		"summary": "Nimbatus - The Drone Constructor is an action simulation game. Craft drones out of hundreds of different parts and explore a fully destructible, procedurally generated galaxy!",
		"popularity": 182.3333333333333,
		"release_dates": [
			{
				"category": 4,
				"platform": 3,
				"date": 1530316800000,
				"region": 8,
				"human": "2018-Q2",
				"y": 2018,
				"m": 6
			},
			{
				"category": 4,
				"platform": 14,
				"date": 1530316800000,
				"region": 8,
				"human": "2018-Q2",
				"y": 2018,
				"m": 6
			},
			{
				"category": 4,
				"platform": 6,
				"date": 1530316800000,
				"region": 8,
				"human": "2018-Q2",
				"y": 2018,
				"m": 6
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/njd8bhglaxrqkrzhb24b.jpg",
			"cloudinary_id": "njd8bhglaxrqkrzhb24b",
			"width": 600,
			"height": 835
		}
	},
	{
		"id": 19934,
		"name": "RIOT - Civil Unrest",
		"summary": "As civil crisis deepens and inequality tears the very fabric of society the discontentment of the masses manifests itself in violent public disturbances and civil disorder. Play as the police or the angry horde as RIOT – Civil Unrest places you in some of the world’s most fractious disputes.",
		"popularity": 182.0,
		"release_dates": [
			{
				"category": 0,
				"platform": 6,
				"date": 1512518400000,
				"region": 8,
				"human": "2017-Dec-06",
				"y": 2017,
				"m": 12
			},
			{
				"category": 0,
				"platform": 14,
				"date": 1512518400000,
				"region": 8,
				"human": "2017-Dec-06",
				"y": 2017,
				"m": 12
			},
			{
				"category": 0,
				"platform": 3,
				"date": 1512518400000,
				"region": 8,
				"human": "2017-Dec-06",
				"y": 2017,
				"m": 12
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/cdfsdijmouaxz7jnx8bl.jpg",
			"cloudinary_id": "cdfsdijmouaxz7jnx8bl",
			"width": 264,
			"height": 340
		}
	},
	{
		"id": 72373,
		"name": "Getting Over It with Bennett Foddy",
		"summary": "A game I made for a certain kind of person. To hurt them.",
		"popularity": 182.0,
		"release_dates": [
			{
				"category": 0,
				"platform": 39,
				"date": 1512518400000,
				"region": 8,
				"human": "2017-Dec-06",
				"y": 2017,
				"m": 12
			},
			{
				"category": 0,
				"platform": 14,
				"date": 1512518400000,
				"region": 8,
				"human": "2017-Dec-06",
				"y": 2017,
				"m": 12
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1512518400000,
				"region": 8,
				"human": "2017-Dec-06",
				"y": 2017,
				"m": 12
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/vmdcvsidtezltaeaq7kv.jpg",
			"cloudinary_id": "vmdcvsidtezltaeaq7kv",
			"width": 1200,
			"height": 1699
		}
	},
	{
		"id": 36792,
		"name": "Pokémon Ultra Sun",
		"summary": "\"Take on the role of a Pokémon Trainer and uncover new tales, and unravel the mystery behind the two forms reminiscent of the Legendary Pokémon. With new story additions and features this earns Pokémon™ Ultra Sun and Pokémon Ultra Moon the name \"Ultra!\" Another adventure is about to begin! \n \nNew Pokémon forms have been discovered in the Aloha region in Pokémon Ultra Sun and Pokémon Ultra Moon! These forms are reminiscent of the Legendary Pokémon Solgaleo, Lunala, and Necrozma, first revealed in Pokémon Sun and Pokémon Moon. Head out on an epic journey as you solve the mystery behind these fascinating Pokémon! In this expanded adventure, get ready to explore more of the Alola region, catch more amazing Pokémon, and battle more formidable foes in Pokémon Ultra Sun and Pokémon Ultra Moon!\"",
		"popularity": 178.0,
		"release_dates": [
			{
				"category": 0,
				"platform": 37,
				"date": 1510876800000,
				"region": 8,
				"human": "2017-Nov-17",
				"y": 2017,
				"m": 11
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/ro0ohelrzdlqhp3iou03.jpg",
			"cloudinary_id": "ro0ohelrzdlqhp3iou03",
			"width": 600,
			"height": 532
		}
	},
	{
		"id": 11423,
		"name": "This is the Police",
		"summary": "Jack Boyd, beloved police chief of Freeburg, has 180 days before he’s forced to retire. But Jack won’t be going out quietly. Over the next six months, he’ll be going all out to fulfill a dream: earn half a million dollars, any way he can. That might be play money for a corrupt cop, but up until now, Jack has been playing by the book. Even with overtime, in six months he wouldn’t make fifty grand. But a police chief has access to all sorts of… informal income. Bribes, weapons and drug sales, deals with the Mafia, skimming off the budget, kickbacks – you name it. And Jack is tired of playing nice. He’s is ready for anything, but only you can decide how far he’ll go.",
		"popularity": 177.3333333333333,
		"release_dates": [
			{
				"category": 0,
				"platform": 49,
				"date": 1490140800000,
				"region": 2,
				"human": "2017-Mar-22",
				"y": 2017,
				"m": 3
			},
			{
				"category": 0,
				"platform": 130,
				"date": 1512432000000,
				"region": 2,
				"human": "2017-Dec-05",
				"y": 2017,
				"m": 12
			},
			{
				"category": 0,
				"platform": 130,
				"date": 1508803200000,
				"human": "2017-Oct-24",
				"y": 2017,
				"m": 10
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1469577600000,
				"region": 2,
				"human": "2016-Jul-27",
				"y": 2016,
				"m": 7
			},
			{
				"category": 0,
				"platform": 48,
				"date": 1490140800000,
				"region": 1,
				"human": "2017-Mar-22",
				"y": 2017,
				"m": 3
			},
			{
				"category": 0,
				"platform": 48,
				"date": 1490140800000,
				"region": 2,
				"human": "2017-Mar-22",
				"y": 2017,
				"m": 3
			},
			{
				"category": 5,
				"platform": 49,
				"date": 1475193600000,
				"region": 8,
				"human": "2016-Q3",
				"y": 2016,
				"m": 9
			},
			{
				"category": 5,
				"platform": 48,
				"date": 1475193600000,
				"region": 8,
				"human": "2016-Q3",
				"y": 2016,
				"m": 9
			},
			{
				"category": 0,
				"platform": 92,
				"date": 1470096000000,
				"region": 8,
				"human": "2016-Aug-02",
				"y": 2016,
				"m": 8
			},
			{
				"category": 0,
				"platform": 3,
				"date": 1470096000000,
				"region": 8,
				"human": "2016-Aug-02",
				"y": 2016,
				"m": 8
			},
			{
				"category": 0,
				"platform": 14,
				"date": 1470096000000,
				"region": 8,
				"human": "2016-Aug-02",
				"y": 2016,
				"m": 8
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1470096000000,
				"region": 8,
				"human": "2016-Aug-02",
				"y": 2016,
				"m": 8
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/hjkdxsjepud2nvteqnpr.jpg",
			"cloudinary_id": "hjkdxsjepud2nvteqnpr",
			"width": 720,
			"height": 1080
		}
	},
	{
		"id": 76206,
		"name": "ARK: Aberration - Expansion Pack",
		"summary": "Waking up on ‘Aberration’, a derelict, malfunctioning ARK with an elaborate underground biome system, survivors face exotic new challenges unlike anything before: extreme radioactive sunlight and environmental hazards, ziplines, wingsuits, climbing gear, cave dwellings, charge-batteries, and far more, along with a stable of extraordinary new creatures await within the mysterious depths. But beware the ‘Nameless’: unrelenting, Element-infused humanoids which have evolved into vicious light-hating monstrosities! On Aberration, survivors will uncover the ultimate secrets of the ARKs, and discover what the future holds in store for those strong and clever enough to survive!",
		"popularity": 172.3333333333333,
		"release_dates": [
			{
				"category": 0,
				"platform": 3,
				"date": 1513036800000,
				"region": 8,
				"human": "2017-Dec-12",
				"y": 2017,
				"m": 12
			},
			{
				"category": 0,
				"platform": 14,
				"date": 1513036800000,
				"region": 8,
				"human": "2017-Dec-12",
				"y": 2017,
				"m": 12
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1513036800000,
				"region": 8,
				"human": "2017-Dec-12",
				"y": 2017,
				"m": 12
			}
		]
	},
	{
		"id": 22422,
		"name": "Sexy Beach 3",
		"summary": "Sexy Beach 3 is the third game in the Sexy Beach franchise developed by Illusion Software.",
		"popularity": 166.3333333333333,
		"release_dates": [
			{
				"category": 0,
				"platform": 6,
				"date": 1159488000000,
				"region": 5,
				"human": "2006-Sep-29",
				"y": 2006,
				"m": 9
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/hq3eh6p2iwdoqft9xp56.jpg",
			"cloudinary_id": "hq3eh6p2iwdoqft9xp56",
			"width": 320,
			"height": 477
		}
	},
	{
		"id": 25222,
		"name": "Rusty Lake: Roots",
		"summary": "James Vanderboom's life drastically changes when he plants a special seed in the garden of the house he has inherited. Expand your bloodline by unlocking portraits in the tree of life.",
		"popularity": 165.0,
		"release_dates": [
			{
				"category": 0,
				"platform": 39,
				"date": 1476921600000,
				"region": 8,
				"human": "2016-Oct-20",
				"y": 2016,
				"m": 10
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1476921600000,
				"region": 8,
				"human": "2016-Oct-20",
				"y": 2016,
				"m": 10
			},
			{
				"category": 0,
				"platform": 14,
				"date": 1476921600000,
				"region": 8,
				"human": "2016-Oct-20",
				"y": 2016,
				"m": 10
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/lxita4cxlmx4jwcnxvuq.jpg",
			"cloudinary_id": "lxita4cxlmx4jwcnxvuq",
			"width": 1024,
			"height": 500
		}
	},
	{
		"id": 28540,
		"name": "Assassin's Creed: Origins",
		"summary": "For the last four years, the team behind Assassin’s Creed IV Black Flag has been crafting a new beginning for the Assassin’s Creed franchise. \n \nSet in Ancient Egypt, players will journey to the most mysterious place in history, during a crucial period that will shape the world and give rise to the Assassin’s Brotherhood. Plunged into a living, systemic and majestic open world, players are going to discover vibrant ecosystems, made of diverse and exotic landscapes that will provide them with infinite opportunities of pure exploration, adventures and challenges. \n \nPowered by a new fight philosophy, Assassin's Creed Originsembraces a brand new RPG direction where players level up, loot, and choose abilities to shape and customize their very own skilled Assassin as they grow in power and expertise while exploring the entire country of Ancient Egypt.",
		"popularity": 161.6666666666667,
		"release_dates": [
			{
				"category": 0,
				"platform": 49,
				"date": 1509062400000,
				"region": 8,
				"human": "2017-Oct-27",
				"y": 2017,
				"m": 10
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1509062400000,
				"region": 8,
				"human": "2017-Oct-27",
				"y": 2017,
				"m": 10
			},
			{
				"category": 0,
				"platform": 48,
				"date": 1509062400000,
				"region": 8,
				"human": "2017-Oct-27",
				"y": 2017,
				"m": 10
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/l2dza03yjs6j5u6uuak2.jpg",
			"cloudinary_id": "l2dza03yjs6j5u6uuak2",
			"width": 864,
			"height": 1079
		}
	},
	{
		"id": 23345,
		"name": "Life is Feudal: Forest Village",
		"summary": "Life is Feudal: Forest Village is RTS city builder game with survival aspects in a realistic harsh medieval world. Shape, build and expand your settlement, grow various food to prevent your villagers from avitaminosis and starvation. Possess them for additional micromanagement or simply to wander around. Become a leader of the newly arrived settlers and lead them to peace and prosperity.",
		"popularity": 161.0,
		"release_dates": [
			{
				"category": 0,
				"platform": 6,
				"date": 1495756800000,
				"region": 8,
				"human": "2017-May-26",
				"y": 2017,
				"m": 5
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/wvqjil3tq2kuutrw0xsb.jpg",
			"cloudinary_id": "wvqjil3tq2kuutrw0xsb",
			"width": 512,
			"height": 512
		}
	},
	{
		"id": 19785,
		"name": "Artificial Girl 3",
		"summary": "Artificial Girl 3 is an eroge (hentai game) and is the sequel to Artificial Girl 2.\n\nThe gameplay involves being a guy and living a life with one or many girls (whose various characteristics are set by the player).\n\nThe game is considered by the playerbase to be one of Illusion's finest games.",
		"popularity": 160.3333333333333,
		"release_dates": [
			{
				"category": 0,
				"platform": 6,
				"date": 1196380800000,
				"region": 5,
				"human": "2007-Nov-30",
				"y": 2007,
				"m": 11
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/x4hz5yacdqanmggyting.jpg",
			"cloudinary_id": "x4hz5yacdqanmggyting",
			"width": 401,
			"height": 600
		}
	},
	{
		"id": 25646,
		"name": "Don't Knock Twice",
		"summary": "Don't Knock Twice is a first-person horror game based on a psychologically terrifying urban legend. To save her estranged daughter, a guilt-ridden mother must uncover the frightening truth behind the urban tale of a vengeful, demonic witch. One knock to wake her from her bed, twice to raise her from the dead. \n \nExplore a grand manor house and interact with almost every object you see. To find and save your daughter, you will explore all depths of the manor, searching for hidden clues and using items to fight or escape the terror that surrounds you. \n \nThe game is based on the film, Don't Knock Twice, starring Katee Sackhoff (Battlestar Galactica) and directed by Caradog James (The Machine).",
		"popularity": 160.0,
		"release_dates": [
			{
				"category": 0,
				"platform": 45,
				"date": 1504569600000,
				"region": 1,
				"human": "2017-Sep-05",
				"y": 2017,
				"m": 9
			},
			{
				"category": 0,
				"platform": 130,
				"date": 1508198400000,
				"region": 2,
				"human": "2017-Oct-17",
				"y": 2017,
				"m": 10
			},
			{
				"category": 0,
				"platform": 48,
				"date": 1504569600000,
				"region": 2,
				"human": "2017-Sep-05",
				"y": 2017,
				"m": 9
			},
			{
				"category": 0,
				"platform": 49,
				"date": 1504569600000,
				"region": 2,
				"human": "2017-Sep-05",
				"y": 2017,
				"m": 9
			},
			{
				"category": 0,
				"platform": 48,
				"date": 1503878400000,
				"region": 8,
				"human": "2017-Aug-28",
				"y": 2017,
				"m": 8
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1503878400000,
				"region": 8,
				"human": "2017-Aug-28",
				"y": 2017,
				"m": 8
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/i5ktfl8meacdyuupfklj.jpg",
			"cloudinary_id": "i5ktfl8meacdyuupfklj",
			"width": 1595,
			"height": 897
		}
	},
	{
		"id": 55752,
		"name": "Hentai",
		"summary": "Hentai is a girl you play in a big beautiful world including 21 rooms with different paths. \nTry to collect all the 22 mushrooms on your journey for something special..",
		"popularity": 158.0,
		"release_dates": [
			{
				"category": 0,
				"platform": 6,
				"date": 1506124800000,
				"region": 2,
				"human": "2017-Sep-23",
				"y": 2017,
				"m": 9
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1506297600000,
				"region": 8,
				"human": "2017-Sep-25",
				"y": 2017,
				"m": 9
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/lgsd34aqrvbzx3g1bcot.jpg",
			"cloudinary_id": "lgsd34aqrvbzx3g1bcot",
			"width": 460,
			"height": 215
		}
	},
	{
		"id": 19376,
		"name": "Basement",
		"summary": "Basement is a strategy game, where you play as a desperate scientist who chose the wrong path in his life. That path seemed easy, but turned into a deadly one. You have no choice but to build the most effective enterprise and stay alive in a cruel world of illegal business.",
		"popularity": 154.0,
		"release_dates": [
			{
				"category": 0,
				"platform": 6,
				"date": 1461974400000,
				"region": 8,
				"human": "2016-Apr-30",
				"y": 2016,
				"m": 4
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/ruhw3cmmk0jkechnezw8.jpg",
			"cloudinary_id": "ruhw3cmmk0jkechnezw8",
			"width": 620,
			"height": 355
		}
	},
	{
		"id": 11588,
		"name": "Quiplash",
		"summary": "For 3-8 Players and an Audience of thousands! \n \nThe team behind the hit party games YOU DON’T KNOW JACK, Fibbage, and Drawful presents Quiplash, the laugh-a-minute battle of wits and wittiness! Use your phone or tablet to answer simple prompts like “Something you’d be surprised to see a donkey do” or “The worst soup flavor: Cream of _____.” \n \nNo rules, no correct answers! Say whatever you want! \n \nYour answer is pitted against another player’s answer in a head-to-head clash of cleverness and comedy (or just “Which answer is least stupid?”). Other players – and even an Audience of people waiting to get in the next game – then vote for their favorite answer. \n \nQuiplash is a go-to party game that everyone can play and enjoy!",
		"popularity": 153.6666666666667,
		"release_dates": [
			{
				"category": 0,
				"platform": 14,
				"date": 1436400000000,
				"region": 8,
				"human": "2015-Jul-09",
				"y": 2015,
				"m": 7
			},
			{
				"category": 0,
				"platform": 49,
				"date": 1435622400000,
				"region": 2,
				"human": "2015-Jun-30",
				"y": 2015,
				"m": 6
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1435622400000,
				"region": 2,
				"human": "2015-Jun-30",
				"y": 2015,
				"m": 6
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1435622400000,
				"human": "2015-Jun-30",
				"y": 2015,
				"m": 6
			},
			{
				"category": 0,
				"platform": 14,
				"date": 1435622400000,
				"human": "2015-Jun-30",
				"y": 2015,
				"m": 6
			},
			{
				"category": 0,
				"platform": 49,
				"date": 1435622400000,
				"human": "2015-Jun-30",
				"y": 2015,
				"m": 6
			},
			{
				"category": 0,
				"platform": 9,
				"date": 1435622400000,
				"human": "2015-Jun-30",
				"y": 2015,
				"m": 6
			},
			{
				"category": 0,
				"platform": 48,
				"date": 1435622400000,
				"human": "2015-Jun-30",
				"y": 2015,
				"m": 6
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/pxh2it5sw7l3mpw7whoc.jpg",
			"cloudinary_id": "pxh2it5sw7l3mpw7whoc",
			"width": 450,
			"height": 600
		}
	},
	{
		"id": 17583,
		"name": "SpellForce 3",
		"summary": "\"SpellForce 3 - The perfect blend between RTS and RPG! \n \nSpellForce 3 goes back to the roots of the SpellForce saga. The story takes place before the acclaimed SpellForce: The Order of Dawn and the players becomes a part of a rich high fantasy world named Eo. \n \nFeatures: \n- RTS/RPG Mix: Unique gameplay combining RTS and Top Down RPG genres \n- Create & Customize: Create your own hero and develop his skillset as you prefer! \n- Build to Fight: Build your own army and fight epic mass battles with it. \n- Epic Storyline: Unravel a deep and epic story in the SpellForce universe that doesn't require having played any of the former SpellForce games. Fans will still find a lot of interesting connections. \n- Rich universe & lore: Explore the world Eo and discover intrigues, secrets and a lot of loot for your hero. \n- Apply some tactics: Use advance tactics with your RTS army to defeat your enemies \n- Play on your own: Long Single Player Campaign of 30+ hours \n- Multiplayer: Strong multiplayer component with various modes - Play cooperatively or compete against each other \"",
		"popularity": 146.6666666666667,
		"release_dates": [
			{
				"category": 0,
				"platform": 6,
				"date": 1512604800000,
				"region": 8,
				"human": "2017-Dec-07",
				"y": 2017,
				"m": 12
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/wuvajqjh7nv9uc3sefz3.jpg",
			"cloudinary_id": "wuvajqjh7nv9uc3sefz3",
			"width": 421,
			"height": 600
		}
	},
	{
		"id": 26401,
		"name": "Star Wars Battlefront II",
		"summary": "Embark on an endless Star Wars™ action experience from the best-selling Star Wars HD video game franchise of all time. Experience rich multiplayer battlegrounds across all 3 eras - prequel, classic and new trilogy - or rise as a new hero and discover an emotionally gripping single-player story spanning thirty years. \n \nCustomise and upgrade your heroes, starfighters or troopers - each with unique abilities to exploit in battle. Ride tauntauns or take control of tanks and speeders. Use the Force to prove your worth against iconic characters like Kylo Ren, Darth Maul or Han Solo, as you play a part in a gaming experience inspired by forty years of timeless Star Wars films.",
		"popularity": 146.3333333333333,
		"release_dates": [
			{
				"category": 0,
				"platform": 49,
				"date": 1510876800000,
				"region": 2,
				"human": "2017-Nov-17",
				"y": 2017,
				"m": 11
			},
			{
				"category": 0,
				"platform": 48,
				"date": 1510876800000,
				"region": 1,
				"human": "2017-Nov-17",
				"y": 2017,
				"m": 11
			},
			{
				"category": 0,
				"platform": 48,
				"date": 1510876800000,
				"region": 2,
				"human": "2017-Nov-17",
				"y": 2017,
				"m": 11
			},
			{
				"category": 0,
				"platform": 48,
				"date": 1510876800000,
				"region": 8,
				"human": "2017-Nov-17",
				"y": 2017,
				"m": 11
			},
			{
				"category": 0,
				"platform": 49,
				"date": 1510876800000,
				"region": 8,
				"human": "2017-Nov-17",
				"y": 2017,
				"m": 11
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1510876800000,
				"region": 8,
				"human": "2017-Nov-17",
				"y": 2017,
				"m": 11
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/l0u3uqmnnj8ws9ysm67k.jpg",
			"cloudinary_id": "l0u3uqmnnj8ws9ysm67k",
			"width": 910,
			"height": 1300
		}
	},
	{
		"id": 36950,
		"name": "Anthem",
		"summary": "Anthem is a shared-world action RPG, where players can delve into a vast landscape teeming with amazing technology and forgotten treasures. This is a world where Freelancers are called upon to defeat savage beasts, ruthless marauders, and forces plotting to conquer humanity.",
		"popularity": 144.0,
		"release_dates": [
			{
				"category": 0,
				"platform": 48,
				"date": 1553990400000,
				"region": 8,
				"human": "2019-Mar-31",
				"y": 2019,
				"m": 3
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1553990400000,
				"region": 8,
				"human": "2019-Mar-31",
				"y": 2019,
				"m": 3
			},
			{
				"category": 0,
				"platform": 49,
				"date": 1553990400000,
				"region": 8,
				"human": "2019-Mar-31",
				"y": 2019,
				"m": 3
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/f3ikxckp72fwfqottjiu.jpg",
			"cloudinary_id": "f3ikxckp72fwfqottjiu",
			"width": 262,
			"height": 374
		}
	},
	{
		"id": 1942,
		"name": "The Witcher 3: Wild Hunt",
		"summary": "The Witcher: Wild Hunt is a story-driven, next-generation open world role-playing game set in a visually stunning fantasy universe full of meaningful choices and impactful consequences. In The Witcher you play as the professional monster hunter, Geralt of Rivia, tasked with finding a child of prophecy in a vast open world rich with merchant cities, viking pirate islands, dangerous mountain passes, and forgotten caverns to explore.",
		"popularity": 141.3333333333333,
		"release_dates": [
			{
				"category": 0,
				"platform": 49,
				"date": 1431993600000,
				"region": 8,
				"human": "2015-May-19",
				"y": 2015,
				"m": 5
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1431993600000,
				"region": 8,
				"human": "2015-May-19",
				"y": 2015,
				"m": 5
			},
			{
				"category": 0,
				"platform": 48,
				"date": 1431993600000,
				"region": 8,
				"human": "2015-May-19",
				"y": 2015,
				"m": 5
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/tri1c6vbydeosoqajwt1.jpg",
			"cloudinary_id": "tri1c6vbydeosoqajwt1",
			"width": 292,
			"height": 414
		}
	},
	{
		"id": 25657,
		"name": "Destiny 2",
		"summary": "In Destiny 2, the last safe city on Earth has fallen and lays in ruins, occupied by a powerful new enemy and his elite army, the Red Legion. Every player creates their own character called a “Guardian,” humanity’s chosen protectors. As a Guardian in Destiny 2, players must master new abilities and weapons to reunite the city’s forces, stand together and fight back to reclaim their home.  \n  \nIn Destiny 2 players will answer this call, embarking on a fresh story filled with new destinations around our solar system to explore, and an expansive amount of activities to discover. There is something for almost every type of gamer in Destiny 2, including gameplay for solo, cooperative and competitive players set within a vast, evolving and exciting universe.",
		"popularity": 137.0,
		"release_dates": [
			{
				"category": 0,
				"platform": 49,
				"date": 1504656000000,
				"region": 2,
				"human": "2017-Sep-06",
				"y": 2017,
				"m": 9
			},
			{
				"category": 0,
				"platform": 48,
				"date": 1504656000000,
				"region": 1,
				"human": "2017-Sep-06",
				"y": 2017,
				"m": 9
			},
			{
				"category": 0,
				"platform": 48,
				"date": 1504656000000,
				"region": 2,
				"human": "2017-Sep-06",
				"y": 2017,
				"m": 9
			},
			{
				"category": 0,
				"platform": 6,
				"date": 1508803200000,
				"human": "2017-Oct-24",
				"y": 2017,
				"m": 10
			},
			{
				"category": 0,
				"platform": 49,
				"date": 1504656000000,
				"region": 8,
				"human": "2017-Sep-06",
				"y": 2017,
				"m": 9
			},
			{
        "category": 0,
				"platform": 48,
				"date": 1504656000000,
				"region": 8,
				"human": "2017-Sep-06",
				"y": 2017,
				"m": 9
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/orklbkpdl7ujiojb9ibf.jpg",
			"cloudinary_id": "orklbkpdl7ujiojb9ibf",
			"width": 1440,
			"height": 2160
		}
	}]

  Game.create([{

  }])
    .then(burgers => console.log(`${burgers.length} burgers created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
