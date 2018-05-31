/*eslint-disable */
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Game = require('../models/game');
//------------------------------------------------------------------------------
mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();
  //------------------------------------------------------------------------------
  Game.create(
    [{
    "igdbId": 36926,
		"name": "Monster Hunter: World",
		"summary": "Monster Hunter: World sees players take on the role of a hunter that completes various quests to hunt and slay monsters within a lively living and breathing eco-system full of predators…. and prey. In the video you can see some of the creatures you can expect to come across within the New World, the newly discovered continent where Monster Hunter: World is set, including the Great Jagras which has the ability to swallow its prey whole and one of the Monster Hunter series favourites, Rathalos. \n \nPlayers are able to utilise survival tools such as the slinger and Scoutfly to aid them in their hunt. By using these skills to their advantage hunters can lure monsters into traps and even pit them against each other in an epic fierce battle. Can our hunter successfully survive the fight and slay the Anjanath? He’ll need to select his weapon choice carefully from 14 different weapon classes and think strategically about how to take the giant foe down. Don’t forget to pack the camouflaging ghillie suit!",
		"rating": 87.3799802954486,
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/nbpwnalhykwi8gsobelc.jpg",
				"cloudinary_id": "nbpwnalhykwi8gsobelc",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/tnqlf5fyzrl2u4oyyh4c.jpg",
				"cloudinary_id": "tnqlf5fyzrl2u4oyyh4c",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/isj1odo1k1vvl1x8k8vk.jpg",
				"cloudinary_id": "isj1odo1k1vvl1x8k8vk",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/jvsvgobhd4dbjlh7kn2q.jpg",
				"cloudinary_id": "jvsvgobhd4dbjlh7kn2q",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/c109q1sm0rrx95ucmjse.jpg",
				"cloudinary_id": "c109q1sm0rrx95ucmjse",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/poxzku6fghfj04nxynqe.jpg",
				"cloudinary_id": "poxzku6fghfj04nxynqe",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/v6lalq0gwbycborb9ic4.jpg",
				"cloudinary_id": "v6lalq0gwbycborb9ic4",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/ghcjheumz1norh0rwaxk.jpg",
				"cloudinary_id": "ghcjheumz1norh0rwaxk",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/ojdwmo8mhipudkalaxlo.jpg",
				"cloudinary_id": "ojdwmo8mhipudkalaxlo",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/oydgjnzydmdfwd3vtmp9.jpg",
				"cloudinary_id": "oydgjnzydmdfwd3vtmp9",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/nqmwzj4azjunajjlniy8.jpg",
				"cloudinary_id": "nqmwzj4azjunajjlniy8",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/c9rskkieuhapebstfxys.jpg",
				"cloudinary_id": "c9rskkieuhapebstfxys",
				"width": 3840,
				"height": 2160
			}
		],
		"videos": [
			{
				"name": "Launch Trailer",
				"video_id": "wq4V4Q8v_pI"
			},
			{
				"name": "Third Fleet Trailer",
				"video_id": "wGsEpqkCByc"
			},
			{
				"name": "Beta Introduction Trailer",
				"video_id": "rXzWtKYly70"
			},
			{
				"name": "PGW17 Trailer",
				"video_id": "TjKQ3fbB27Y"
			},
			{
				"name": "TGS2017 Trailer",
				"video_id": "hgYnTw7nGUA"
			},
			{
				"name": "Wildspire Waste Trailer",
				"video_id": "l3vJdlxb7UM"
			},
			{
				"name": "Hunting 101 Trailer",
				"video_id": "UZSzEaMhX9s"
			},
			{
				"name": "Tech Weapons Trailer",
				"video_id": "ry0O737wZNw"
			},
			{
				"name": "Light Weapons Trailer",
				"video_id": "gVlmUojZOd8"
			},
			{
				"name": "Heavy Weapons Trailer",
				"video_id": "L5p8YVT8G6g"
			},
			{
				"name": "Multiplay Gameplay Trailer",
				"video_id": "8nHsMVMRkB0"
			},
			{
				"name": "E3 2017 Trailer",
				"video_id": "6WmIpyBkRBU"
			},
			{
				"name": "Gameplay video",
				"video_id": "DjZ-asj8GzQ"
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_720p/fxgwm1nnyexhvauqv0ds.jpg",
			"cloudinary_id": "fxgwm1nnyexhvauqv0ds",
			"width": 394,
			"height": 500
		}
	},
	{
		"igdbId": 26766,
		"name": "Xenoblade Chronicles 2",
		"summary": "As the giant beasts march toward death, the last hope is a scavenger named Rex—and Pyra, a living weapon known as a Blade. Can you find the fabled paradise she calls home? Command a group of Blades and lead them to countless strategic victories before the world ends. \n \nEach Titan hosts its own distinct cultures, wildlife, and diverse regions to explore. Search the vast open areas and labyrinthine corridors for treasure, secret paths, and creatures to battle and index. \n \nDuring these escapades you'll get to know a large cast of eclectic characters, including the weaponized life forms known as Blades. Gather these allies, bond with them to increase their power, and utilize their special ARTS to devastate enemies. But to save the world of Alrest, you must first demystify its cloudy past. \n \nA new story in the Xenoblade Chronicles series \n \nThe next adventure is on the Nintendo Switch console—set on the backs of colossal, living Titans. \n \nDiscover each Titan’s diverse regions, culture, wildlife, equipment, and hidden secrets. \n \nFind, bond with, and command weaponized life forms known as Blades to earn abilities and enhance them. \n \nUncover the history of Alrest and the mystery of its endless ocean of clouds.",
		"rating": 84.3170275327452,
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/ojrkfd7qcb2rakrvrddo.jpg",
				"cloudinary_id": "ojrkfd7qcb2rakrvrddo",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/jesopvenn0grenqh0tr7.jpg",
				"cloudinary_id": "jesopvenn0grenqh0tr7",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/jfhbbr87x3fac1qnukor.jpg",
				"cloudinary_id": "jfhbbr87x3fac1qnukor",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/sgo07t9nja0uzcrldgn9.jpg",
				"cloudinary_id": "sgo07t9nja0uzcrldgn9",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/t0jlovq2gc9ghvsyvpgt.jpg",
				"cloudinary_id": "t0jlovq2gc9ghvsyvpgt",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/vh11ez90tgswhzx6ckys.jpg",
				"cloudinary_id": "vh11ez90tgswhzx6ckys",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/rnljjizxuo9odqvvhlw1.jpg",
				"cloudinary_id": "rnljjizxuo9odqvvhlw1",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/sj98v0eoqxxzgalf9mn4.jpg",
				"cloudinary_id": "sj98v0eoqxxzgalf9mn4",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/syug9kgrtmuqynmu7uqg.jpg",
				"cloudinary_id": "syug9kgrtmuqynmu7uqg",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/fgk6jtffidxsn8ovtbqu.jpg",
				"cloudinary_id": "fgk6jtffidxsn8ovtbqu",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/bctz4zjros0pizflz4ha.jpg",
				"cloudinary_id": "bctz4zjros0pizflz4ha",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/dh1tkaotkbtyh978mtag.jpg",
				"cloudinary_id": "dh1tkaotkbtyh978mtag",
				"width": 1280,
				"height": 720
			}
		],
		"videos": [
			{
				"name": "Trailer",
				"video_id": "xOtOmJUh3dM"
			},
			{
				"name": "Trailer",
				"video_id": "vXSTAM5fP0s"
			},
			{
				"name": "Trailer",
				"video_id": "Xjpao-nD5YU"
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_720p/dmdfiiamojsjmhgjkxxr.jpg",
			"cloudinary_id": "dmdfiiamojsjmhgjkxxr",
			"width": 800,
			"height": 1300
		}
	},
	{
		"igdbId": 18167,
		"name": "Hello Neighbor",
		"summary": "Hello Neighbor is a stealth horror game about sneaking into your neighbor's house to figure out what horrible secrets he's hiding in the basement. You play against an advanced AI that learns from your every move. Really enjoying climbing through that backyard window? Expect a bear trap there. Sneaking through the front door? There'll be cameras there soon. Trying to escape? The Neighbor will find a shortcut and catch you.",
		"rating": 83.9661036914876,
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/zb9ch1qw54a9rddvvbmo.jpg",
				"cloudinary_id": "zb9ch1qw54a9rddvvbmo",
				"width": 2560,
				"height": 1440
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/dykdvcmiwelebe2lff0v.jpg",
				"cloudinary_id": "dykdvcmiwelebe2lff0v",
				"width": 1024,
				"height": 576
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/kito03qskgq8ht8dfpqa.jpg",
				"cloudinary_id": "kito03qskgq8ht8dfpqa",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/kwdt3wa4rqagmy5pvzgm.jpg",
				"cloudinary_id": "kwdt3wa4rqagmy5pvzgm",
				"width": 2560,
				"height": 1440
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/y9s7qv25untipfcirlei.jpg",
				"cloudinary_id": "y9s7qv25untipfcirlei",
				"width": 960,
				"height": 540
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/dlnozlv1jmjv5zrm3iqt.jpg",
				"cloudinary_id": "dlnozlv1jmjv5zrm3iqt",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/wwm17mai4r1jqaiggcvc.jpg",
				"cloudinary_id": "wwm17mai4r1jqaiggcvc",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/mnokrxmkflaianxhsrkd.jpg",
				"cloudinary_id": "mnokrxmkflaianxhsrkd",
				"width": 1920,
				"height": 1080
			}
		],
		"videos": [
			{
				"name": "Trailer",
				"video_id": "N311ZFXgu-o"
			},
			{
				"name": "Teaser",
				"video_id": "VIbdZzCi048"
			},
			{
				"name": "Gameplay video",
				"video_id": "ndwmRDdfoZk"
			},
			{
				"name": "Gameplay video",
				"video_id": "t9L7Efy8dBU"
			},
			{
				"name": "Trailer",
				"video_id": "TKLx5rhpS2k"
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_720p/zsvyzrqpbuvtfnpdagfp.jpg",
			"cloudinary_id": "zsvyzrqpbuvtfnpdagfp",
			"width": 720,
			"height": 1080
		}
	},
	{
		"igdbId": 7329,
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/k16enea4cmxpiovwian7.jpg",
				"cloudinary_id": "k16enea4cmxpiovwian7",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/mkpuyfxyeqxvz7uo38hi.jpg",
				"cloudinary_id": "mkpuyfxyeqxvz7uo38hi",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/nweuohcyygrldlj1moph.jpg",
				"cloudinary_id": "nweuohcyygrldlj1moph",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/gotc2uayjfzf0axjpcxk.jpg",
				"cloudinary_id": "gotc2uayjfzf0axjpcxk",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/cd2roo4u1ibulpvchvrm.jpg",
				"cloudinary_id": "cd2roo4u1ibulpvchvrm",
				"width": 1920,
				"height": 1080
			}
		],
		"videos": [
			{
				"name": "Cinematic Trailer",
				"video_id": "DJOAunMCGkk"
			},
			{
				"name": "Sunshine & Slaughter Gameplay Trailer",
				"video_id": "0c8Yy_3C-RQ"
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_720p/lumgkti6rht3evlbu8xw.jpg",
			"cloudinary_id": "lumgkti6rht3evlbu8xw",
			"width": 550,
			"height": 640
		}
	},
	{
		"igdbId": 25300,
		"name": "Sky Break",
		"summary": "Sky Break is an open-world game on a stormy abandoned planet filled with wild mechas. Learn to master this world and to hack the mechas if you want a chance to survive.",
		"rating": 51.08710766169339,
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/ma9ukpuze8e0qpr9rait.jpg",
				"cloudinary_id": "ma9ukpuze8e0qpr9rait",
				"width": 1600,
				"height": 900
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/qt4cmansbclofu2xc51f.jpg",
				"cloudinary_id": "qt4cmansbclofu2xc51f",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/fgdanj0jqbowyq732dd7.jpg",
				"cloudinary_id": "fgdanj0jqbowyq732dd7",
				"width": 1600,
				"height": 900
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/xldzronepklmzofdt5dv.jpg",
				"cloudinary_id": "xldzronepklmzofdt5dv",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/dpntdfb5lyvgdcv2nham.jpg",
				"cloudinary_id": "dpntdfb5lyvgdcv2nham",
				"width": 1280,
				"height": 720
			}
		],
		"videos": [
			{
				"name": "Trailer",
				"video_id": "f8_r3CH1Q0c"
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_720p/ebebxnv543d4y5e4wazd.jpg",
			"cloudinary_id": "ebebxnv543d4y5e4wazd",
			"width": 4000,
			"height": 2250
		}
	},
	{
		"igdbId": 22425,
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
			"url": "//images.igdb.com/igdb/image/upload/t_720p/nkugb4uvps5dzccb1wpl.jpg",
			"cloudinary_id": "nkugb4uvps5dzccb1wpl",
			"width": 259,
			"height": 383
		}
	},
	{
		"igdbId": 28465,
		"name": "Porno Studio Tycoon",
		"summary": "Business simulator with rich economic model (markets with shortages and surpluses, websites with black hat SEO, etc.), flexible configuration of movie production, complex casting, two modes of shooting (fast and detailed ones) and other features. Beautiful graphics and no sexually explicit content.",
		"rating": 50.0,
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/kzgu4ywwcyzorcpjnsxq.jpg",
				"cloudinary_id": "kzgu4ywwcyzorcpjnsxq",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/ytq9dw8cgnaecekhdcdg.jpg",
				"cloudinary_id": "ytq9dw8cgnaecekhdcdg",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/xpgggartobfrwnkqhtwk.jpg",
				"cloudinary_id": "xpgggartobfrwnkqhtwk",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/pntmmnwn6vzp8uqjeoeo.jpg",
				"cloudinary_id": "pntmmnwn6vzp8uqjeoeo",
				"width": 600,
				"height": 337
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/shotciissmwdisdwqdmg.jpg",
				"cloudinary_id": "shotciissmwdisdwqdmg",
				"width": 1280,
				"height": 720
			}
		],
		"videos": [
			{
				"name": "Gameplay video",
				"video_id": "SJpvb-VoncU"
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_720p/eku1gg56ltnfucepgqny.jpg",
			"cloudinary_id": "eku1gg56ltnfucepgqny",
			"width": 460,
			"height": 215
		}
	},
	{
		"igdbId": 28552,
		"name": "Far Cry 5",
		"summary": "Welcome to Hope County, Montana, land of the free and the brave, but also home to a fanatical doomsday cult known as The Project at Eden’s Gate that is threatening the community's freedom. Stand up to the cult’s leader, Joseph Seed and the Heralds, and spark the fires of resistance that will liberate the besieged community.  \n  \nIn this expansive world, your limits and creativity will be tested against the biggest and most ruthless baddest enemy Far Cry has ever seen. It’ll be wild and it’ll get weird, but as long as you keep your wits about you, the residents of Hope County can rest assured knowing you’re their beacon of hope.",
		"rating": 79.1132633875445,
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/sfchhwjgcyxtm8ceyj17.jpg",
				"cloudinary_id": "sfchhwjgcyxtm8ceyj17",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/rg4qqcigwxd9aa7zbsos.jpg",
				"cloudinary_id": "rg4qqcigwxd9aa7zbsos",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/g1jcmromr4x3jwunyb0b.jpg",
				"cloudinary_id": "g1jcmromr4x3jwunyb0b",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/r72spvqvrzfyqncgbspw.jpg",
				"cloudinary_id": "r72spvqvrzfyqncgbspw",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/xqw9h7z7psiuktt9dgos.jpg",
				"cloudinary_id": "xqw9h7z7psiuktt9dgos",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/aa66xisnbagxsepnx2el.jpg",
				"cloudinary_id": "aa66xisnbagxsepnx2el",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/ndceepit98cuj5fbgjrs.jpg",
				"cloudinary_id": "ndceepit98cuj5fbgjrs",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/xeqtlwx9f80ekqiyh25w.jpg",
				"cloudinary_id": "xeqtlwx9f80ekqiyh25w",
				"width": 783,
				"height": 440
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/b2k0cvfbzprnuizutgow.jpg",
				"cloudinary_id": "b2k0cvfbzprnuizutgow",
				"width": 783,
				"height": 440
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/u5ldoak74o1yhl2gt6y7.jpg",
				"cloudinary_id": "u5ldoak74o1yhl2gt6y7",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/xrbujdrkuyta8cneqipz.jpg",
				"cloudinary_id": "xrbujdrkuyta8cneqipz",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_720p/ikk26u9j3qpug39snuoj.jpg",
				"cloudinary_id": "ikk26u9j3qpug39snuoj",
				"width": 1920,
				"height": 1080
			}
		],
		"videos": [
			{
				"name": "Launch Trailer",
				"video_id": "ZOSesIeUHCM"
			},
			{
				"name": "Post Launch Trailer",
				"video_id": "-Se1hEYRDik"
			},
			{
				"name": "The Baptism Live Action Trailer",
				"video_id": "UA4KoqTICog"
			},
			{
				"name": "Story Trailer",
				"video_id": "TgT2r-hB4pw"
			},
			{
				"name": "The Resistance Trailer",
				"video_id": "P3La92ethq4"
			},
			{
				"name": "PGW17 Co-Op Trailer",
				"video_id": "65eh4YdWfHI"
			},
			{
				"name": "PGW 2017 Announce Trailer",
				"video_id": "DW6lQSwL8oA"
			},
			{
				"name": "Commented Extended Walkthrough Trailer",
				"video_id": "imKO65TTBBo"
			},
			{
				"name": "Announcement Trailer",
				"video_id": "q2Ma9HstasU"
			},
			{
				"name": "E3 2017: The Father's Amazing Grace Trailer",
				"video_id": "hJHLjaqhmyY"
			},
			{
				"name": "E3 2017 Gameplay Trailer",
				"video_id": "invCtVgUlyA"
			},
			{
				"name": "Far Cry 5 Full Presentation",
				"video_id": "m1kF9rz2ric"
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_720p/cuwotikeyasdnpthudjf.jpg",
			"cloudinary_id": "cuwotikeyasdnpthudjf",
			"width": 4000,
			"height": 5287
		}
  },
    {
  		"igdbId": 19540,
  		"name": "Tom Clancy's The Division: Underground",
  		"summary": "In the first DLC expansion, Underground, you dive into the underbelly of New York with up to three friends to save what remains. Explore the randomly generated mazes of subways, tunnels, and sewers to fight deadly enemies and recover powerful loot. Experience an all-new incursion and find the latest weapons, gear and more.",
  		"popularity": 1.333333333333333,
  		"release_dates": [
  			{
  				"category": 0,
  				"platform": 6,
  				"date": 1467072000000,
  				"human": "2016-Jun-28",
  				"y": 2016,
  				"m": 6
  			},
  			{
  				"category": 0,
  				"platform": 49,
  				"date": 1467072000000,
  				"human": "2016-Jun-28",
  				"y": 2016,
  				"m": 6
  			},
  			{
  				"category": 0,
  				"platform": 48,
  				"date": 1467072000000,
  				"human": "2016-Jun-28",
  				"y": 2016,
  				"m": 6
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/gc9gpulabkhry6rrarfs.jpg",
  				"cloudinary_id": "gc9gpulabkhry6rrarfs",
  				"width": 1280,
  				"height": 720
  			}
  		],
  		"videos": [
  			{
  				"name": "E3 2016 Trailer",
  				"video_id": "0cXgg6ywz8U"
  			},
  			{
  				"name": "Launch Trailer",
  				"video_id": "FTI1dl5K3YY"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/xpzl8l1jg6ecmmv7pd54.jpg",
  			"cloudinary_id": "xpzl8l1jg6ecmmv7pd54",
  			"width": 3218,
  			"height": 4000
  		},
    },
  	{
  		"igdbId": 17280,
  		"name": "Phantasmat: Collector's Edition",
  		"summary": "After crashing your car in the middle of nowhere, you stumble upon The Drowned Dead Hotel, a lonely forgotten structure leaning from a cliff. Beneath lies a dark and cold lake that used to be a lively town. What secrets are buried at the bottom of the muddy waters? Who are the mysterious inhabitants of the hotel? Dive into Phantasmat, an incredible Hidden Object Puzzle Adventure game, and get to the bottom of a long forgotten tragedy.\n\nThis is a special Collector's Edition release full of exclusive extras you won’t find in the standard version",
  		"popularity": 2.0,
  		"release_dates": [
  			{
  				"category": 0,
  				"platform": 6,
  				"date": 1297123200000,
  				"human": "2011-Feb-08",
  				"y": 2011,
  				"m": 2
  			}
  		],
  		"videos": [
  			{
  				"name": "Trailer",
  				"video_id": "LhZiWSCRMAQ"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/xlaq0cl94k4lqxr0skoe.jpg",
  			"cloudinary_id": "xlaq0cl94k4lqxr0skoe",
  			"width": 360,
  			"height": 210
  		}
  	},
  	{
  		"igdbId": 24872,
  		"name": "Anno 2205: Orbit",
  		"summary": "The Orbital sector is the home of the Space Station, a special expandable building located in outer space. Access to both the sector and the Station is given to the player after acquiring the Orbital downloadable content.\n\nThe sector is populated by Astronauts, which come from the launch facilities built in the Temperate, Arctic, and Lunar Regions. Each of these facilities will provide one of three types of astronaut which will provide the player with powerful global research effects to all sectors once their needs are satisfied, and the correct expansion structures are constructed on the orbital station.",
  		"popularity": 1.333333333333333,
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/tmiauflt4mrvq0rarlg1.jpg",
  				"cloudinary_id": "tmiauflt4mrvq0rarlg1",
  				"width": 3840,
  				"height": 2160
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/abkkqg99qcjzgu4avwnz.jpg",
  				"cloudinary_id": "abkkqg99qcjzgu4avwnz",
  				"width": 3840,
  				"height": 2160
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/xxlhmva01zi1jadchyia.jpg",
  				"cloudinary_id": "xxlhmva01zi1jadchyia",
  				"width": 3840,
  				"height": 2160
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/mk3knulxpe3vy5m3j6e8.jpg",
  				"cloudinary_id": "mk3knulxpe3vy5m3j6e8",
  				"width": 3840,
  				"height": 2160
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/xes2fn2wiyauortebqgn.jpg",
  				"cloudinary_id": "xes2fn2wiyauortebqgn",
  				"width": 3840,
  				"height": 2160
  			}
  		],
  		"videos": [
  			{
  				"name": "DLC Launch Trailer",
  				"video_id": "82qzgNFkrTY"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/ppti5f6fv4iy8iuotbyj.jpg",
  			"cloudinary_id": "ppti5f6fv4iy8iuotbyj",
  			"width": 1700,
  			"height": 2600
  		}
  	},
  	{
  		"igdbId": 5563,
  		"name": "IL-2 Sturmovik: 1946",
  		"summary": "Oleg Maddox’s world famous IL-2 Sturmovik™ series of flight simulators continues to expand. The latest offering, IL-2 1946, adds 36 new planes, four new gigantic maps, over a hundred new ground objects, and nearly 200 new campaign missions. This new opus also includes all of the previous Il-2 series content. What years ago began as a one-aircraft study sim is now an astonishing anthology, with a whopping 229 flyable aircraft and over 300 aircraft total! Not to mention that players will have the opportunity to get a first glance at the future of the series arriving next year: Storm of War™ Battle of Britain via exclusive bonus videos.",
  		"rating": 89.8945548307111,
  		"popularity": 2.0,
  		"release_dates": [
  			{
  				"category": 1,
  				"platform": 6,
  				"date": 1167609600000,
  				"human": "2007-Jan",
  				"y": 2007,
  				"m": 1
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/dhcsi9jzlwpku91fvyxr.jpg",
  				"cloudinary_id": "dhcsi9jzlwpku91fvyxr",
  				"width": 1024,
  				"height": 768
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/q88icmzcmkivv08cyqvl.jpg",
  				"cloudinary_id": "q88icmzcmkivv08cyqvl",
  				"width": 1280,
  				"height": 1024
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/zwgkgoz5sfgcyfnr645j.jpg",
  				"cloudinary_id": "zwgkgoz5sfgcyfnr645j",
  				"width": 1280,
  				"height": 1024
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/vnjcu1ikuknttqsmeod8.jpg",
  				"cloudinary_id": "vnjcu1ikuknttqsmeod8",
  				"width": 1280,
  				"height": 1024
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/lanmxdparedcfo09pnik.jpg",
  				"cloudinary_id": "lanmxdparedcfo09pnik",
  				"width": 1280,
  				"height": 1024
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/q93asqbvcfgdokctcrdk.jpg",
  			"cloudinary_id": "q93asqbvcfgdokctcrdk",
  			"width": 708,
  			"height": 1001
  		}
  	},
  	{
  		"igdbId": 36794,
  		"name": "Pokkén Tournament DX",
  		"summary": "Pokkén Tournament (Japanese: ポッ拳 Hepburn: Pokken) is a fighting video game developed by Bandai Namco Studios and published by The Pokémon Company. The game combines gameplay elements from Bandai Namco's Tekken series with characters from Nintendo's Pokémon franchise.[4] It was released for Japanese arcades in July 2015, and worldwide for the Wii U in March 2016.[5] An enhanced port for the Nintendo Switch, titled Pokkén Tournament DX, was released in September 2017.",
  		"rating": 81.0,
  		"popularity": 6.666666666666667,
  		"release_dates": [
  			{
  				"category": 0,
  				"platform": 130,
  				"date": 1506038400000,
  				"region": 8,
  				"human": "2017-Sep-22",
  				"y": 2017,
  				"m": 9
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/g4ffn4zqpdnivgzvu40g.jpg",
  				"cloudinary_id": "g4ffn4zqpdnivgzvu40g",
  				"width": 1280,
  				"height": 720
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/vygio3cdztxovzun1u6b.jpg",
  				"cloudinary_id": "vygio3cdztxovzun1u6b",
  				"width": 1280,
  				"height": 720
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/q79npqrhlaqx7xtjjtaj.jpg",
  				"cloudinary_id": "q79npqrhlaqx7xtjjtaj",
  				"width": 1280,
  				"height": 720
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/yasmekijzhcgkxgdxewq.jpg",
  				"cloudinary_id": "yasmekijzhcgkxgdxewq",
  				"width": 1280,
  				"height": 720
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/rm9s4x4c5ghr5fizd9nl.jpg",
  				"cloudinary_id": "rm9s4x4c5ghr5fizd9nl",
  				"width": 1280,
  				"height": 720
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/ms4ovinzgasjmo7k8em2.jpg",
  				"cloudinary_id": "ms4ovinzgasjmo7k8em2",
  				"width": 1280,
  				"height": 720
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/fmkrnt0re4bt8j45cg5p.jpg",
  				"cloudinary_id": "fmkrnt0re4bt8j45cg5p",
  				"width": 1280,
  				"height": 720
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/r4qabngptgdrhovtzob2.jpg",
  				"cloudinary_id": "r4qabngptgdrhovtzob2",
  				"width": 578,
  				"height": 327
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/bj3chvcyt12uecu70nkm.jpg",
  				"cloudinary_id": "bj3chvcyt12uecu70nkm",
  				"width": 578,
  				"height": 327
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/zaqwjsxzkxjyhdy6jruu.jpg",
  				"cloudinary_id": "zaqwjsxzkxjyhdy6jruu",
  				"width": 578,
  				"height": 327
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/hbihvua683f84nzfarps.jpg",
  				"cloudinary_id": "hbihvua683f84nzfarps",
  				"width": 578,
  				"height": 327
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/ow4nwli4c72psfopjqiz.jpg",
  				"cloudinary_id": "ow4nwli4c72psfopjqiz",
  				"width": 578,
  				"height": 327
  			}
  		],
  		"videos": [
  			{
  				"name": "Trailer",
  				"video_id": "ue-CBOrLnb0"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/efib2m2zdhcy3gvem4b5.jpg",
  			"cloudinary_id": "efib2m2zdhcy3gvem4b5",
  			"width": 384,
  			"height": 614
  		}
  	},
  	{
  		"igdbId": 18399,
  		"name": "Werewolves Within",
  		"summary": "Werewolves Within is a fast-paced game of hidden roles and social deduction for five to eight players. In one game, a player might be a villager trying their hardest to cleanse the town of werewolves, while minutes later they could be the werewolf, lying and betraying friends in order to survive the vote. Werewolves Within keeps players on their toes, constantly questioning each other and testing their personal judgement. Whether playing a vigilant villager or a devious werewolf, no two games are ever the same.",
  		"rating": 60.0,
  		"popularity": 1.333333333333333,
  		"release_dates": [
  			{
  				"category": 0,
  				"platform": 48,
  				"date": 1480982400000,
  				"region": 1,
  				"human": "2016-Dec-06",
  				"y": 2016,
  				"m": 12
  			},
  			{
  				"category": 0,
  				"platform": 48,
  				"date": 1480982400000,
  				"region": 2,
  				"human": "2016-Dec-06",
  				"y": 2016,
  				"m": 12
  			},
  			{
  				"category": 0,
  				"platform": 6,
  				"date": 1480982400000,
  				"human": "2016-Dec-06",
  				"y": 2016,
  				"m": 12
  			},
  			{
  				"category": 0,
  				"platform": 48,
  				"date": 1480982400000,
  				"human": "2016-Dec-06",
  				"y": 2016,
  				"m": 12
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/fvtnomffphhsumupicct.jpg",
  				"cloudinary_id": "fvtnomffphhsumupicct",
  				"width": 1280,
  				"height": 720
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/li52vzuwosnazsvn4upy.jpg",
  				"cloudinary_id": "li52vzuwosnazsvn4upy",
  				"width": 1280,
  				"height": 720
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/zuuopjtm9lrfebwlscrt.jpg",
  				"cloudinary_id": "zuuopjtm9lrfebwlscrt",
  				"width": 1280,
  				"height": 720
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/mswuei7f9bji5lzchm2i.jpg",
  				"cloudinary_id": "mswuei7f9bji5lzchm2i",
  				"width": 1280,
  				"height": 720
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/qe5xsha4n8cufzzyksx4.jpg",
  				"cloudinary_id": "qe5xsha4n8cufzzyksx4",
  				"width": 1280,
  				"height": 720
  			}
  		],
  		"videos": [
  			{
  				"name": "Reveal Trailer",
  				"video_id": "MMvlex_rIa0"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/ktjzqpbcmyv05ddefhoc.jpg",
  			"cloudinary_id": "ktjzqpbcmyv05ddefhoc",
  			"width": 560,
  			"height": 698
  		}
  	},
  	{
  		"igdbId": 27530,
  		"name": "Children of Zodiarcs",
  		"summary": "Children of Zodiarcs is a story-driven, single-player tactical RPG that combines traditional tactical gameplay with the thrill of collectible cards and craftable dice! \n \nChildren of Zodiarcs was inspired by our deep love of tactical RPGs, namely Final Fantasy Tactics and the 16-bit Shining Force games, as well as a love of playing board games and collectable card games like Magic: The Gathering. We decided to bring these passions together to make a game that would resonate with fellow fans of the genre, as well as to push the envelope in fun and exciting way",
  		"rating": 50.0,
  		"popularity": 1.666666666666667,
  		"release_dates": [
  			{
  				"category": 0,
  				"platform": 6,
  				"date": 1500336000000,
  				"region": 8,
  				"human": "2017-Jul-18",
  				"y": 2017,
  				"m": 7
  			},
  			{
  				"category": 2,
  				"platform": 14,
  				"date": 1514678400000,
  				"region": 8,
  				"human": "2017",
  				"y": 2017,
  				"m": 12
  			},
  			{
  				"category": 0,
  				"platform": 48,
  				"date": 1500336000000,
  				"region": 8,
  				"human": "2017-Jul-18",
  				"y": 2017,
  				"m": 7
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/e9lfesbvxdagar4xna0n.jpg",
  				"cloudinary_id": "e9lfesbvxdagar4xna0n",
  				"width": 1920,
  				"height": 1064
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/ntu3zvzao5yeq4eux8re.jpg",
  				"cloudinary_id": "ntu3zvzao5yeq4eux8re",
  				"width": 1920,
  				"height": 1078
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/jsmplxmqtlxdtufptyuv.jpg",
  				"cloudinary_id": "jsmplxmqtlxdtufptyuv",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/nlcmzacma2udpbwwcsrj.jpg",
  				"cloudinary_id": "nlcmzacma2udpbwwcsrj",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/nfnkibznqpabv3aftbpn.jpg",
  				"cloudinary_id": "nfnkibznqpabv3aftbpn",
  				"width": 1920,
  				"height": 1080
  			}
  		],
  		"videos": [
  			{
  				"name": "Trailer",
  				"video_id": "Y6c18mgFfMA"
  			},
  			{
  				"name": "Trailer",
  				"video_id": "MXHpLP5WeE4"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/vrwxcwgvlzelu5p3vj3s.jpg",
  			"cloudinary_id": "vrwxcwgvlzelu5p3vj3s",
  			"width": 616,
  			"height": 353
  		}
  	},
  	{
  		"igdbId": 87685,
  		"name": "Warriors of Waterdeep",
  		"summary": "\"Assemble your team of heroes to fight deadly enemies across the Forgotten Realms\"",
  		"popularity": 1.0,
  		"release_dates": [
  			{
  				"category": 4,
  				"platform": 34,
  				"date": 1530316800000,
  				"region": 8,
  				"human": "2018-Q2",
  				"y": 2018,
  				"m": 6
  			},
  			{
  				"category": 4,
  				"platform": 39,
  				"date": 1530316800000,
  				"region": 8,
  				"human": "2018-Q2",
  				"y": 2018,
  				"m": 6
  			}
  		],
  		"videos": [
  			{
  				"name": "Trailer",
  				"video_id": "ses2yYBa4RQ"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/wqnil13iief8mcnzh4xc.jpg",
  			"cloudinary_id": "wqnil13iief8mcnzh4xc",
  			"width": 320,
  			"height": 320
  		}
  	},
  	{
  		"igdbId": 25329,
  		"name": "Starship Command 2",
  		"summary": "Starship Command 2 is a much-expanded (and currently in alpha) sequel to Starship Command, a persistent-world, massively single-player, real-time tactical starship simulator wrapped in an AI-driven 4X game. Starting with a lowly shuttle, you will trade and battle your way to victory, amassing a gigantic fleet customized to your liking!",
  		"popularity": 1.333333333333333,
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/tongyx6hkbvalxa1uapo.jpg",
  				"cloudinary_id": "tongyx6hkbvalxa1uapo",
  				"width": 1680,
  				"height": 1020
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/fubkudut5azcqfwmeg9g.jpg",
  				"cloudinary_id": "fubkudut5azcqfwmeg9g",
  				"width": 1680,
  				"height": 1020
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/b8xaipacaqulsufbuvos.jpg",
  				"cloudinary_id": "b8xaipacaqulsufbuvos",
  				"width": 1680,
  				"height": 1020
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/jrjpsyyfzhsctyktxyzy.jpg",
  				"cloudinary_id": "jrjpsyyfzhsctyktxyzy",
  				"width": 1680,
  				"height": 1020
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/hpgdxo0ua78j16f06ou7.jpg",
  				"cloudinary_id": "hpgdxo0ua78j16f06ou7",
  				"width": 1680,
  				"height": 1020
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/amloglevhlefkwrhumim.jpg",
  			"cloudinary_id": "amloglevhlefkwrhumim",
  			"width": 1200,
  			"height": 1000
  		}
  	},
  	{
  		"igdbId": 8947,
  		"name": "Guild Wars: Nightfall",
  		"summary": "In Guild Wars Nightfall, the third campaign in the award-winning Guild Wars universe, you will never face danger alone. Not only can you group with any of millions of players worldwide, but now, for the first time ever, you'll be able to band together with customizable Heroes that will not only fight by your side, but level up with your character and follow your orders as you fight to hold back the night.",
  		"rating": 86.64118813424762,
  		"popularity": 1.333333333333333,
  		"release_dates": [
  			{
  				"category": 1,
  				"platform": 6,
  				"date": 1159660800000,
  				"region": 8,
  				"human": "2006-Oct",
  				"y": 2006,
  				"m": 10
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/izpsveio3akyf4ejxziz.jpg",
  				"cloudinary_id": "izpsveio3akyf4ejxziz",
  				"width": 1024,
  				"height": 768
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/q6hkcszlutadfwbieodl.jpg",
  				"cloudinary_id": "q6hkcszlutadfwbieodl",
  				"width": 1024,
  				"height": 768
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/b91tofj2penx9fakwhyr.jpg",
  				"cloudinary_id": "b91tofj2penx9fakwhyr",
  				"width": 1024,
  				"height": 768
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/hym8hbk2zektofcpvsol.jpg",
  				"cloudinary_id": "hym8hbk2zektofcpvsol",
  				"width": 1024,
  				"height": 768
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/imhtwufn3yb891u16bpw.jpg",
  				"cloudinary_id": "imhtwufn3yb891u16bpw",
  				"width": 1024,
  				"height": 768
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/rrq0tzzimlm3znqlo3pb.jpg",
  			"cloudinary_id": "rrq0tzzimlm3znqlo3pb",
  			"width": 640,
  			"height": 889
  		}
  	},
  	{
  		"igdbId": 22586,
  		"name": "Travian: Legends",
  		"summary": "Travian is a persistent, browser-based, massively multiplayer, online real-time strategy game developed by the German software company Travian Games. It was originally written and released in June 2004 by Gerhard Müller. Set in classical antiquity, Travian is a predominantly militaristic real-time strategy game. \nTravian has been translated into over 40 languages from the original German version, and has over 5 million players on over 300 game servers worldwide. In 2006, it won the Superbrowsergame Award, in the large games category. \nTravian is programmed in PHP and runs in most modern browsers. Its creators may have drawn from an earlier German board game, The Settlers of Catan, for layout and the resource development theme.",
  		"popularity": 1.333333333333333,
  		"release_dates": [
  			{
  				"category": 0,
  				"platform": 82,
  				"date": 1094342400000,
  				"region": 8,
  				"human": "2004-Sep-05",
  				"y": 2004,
  				"m": 9
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/ha9xom4rnixnyy4l0zhm.jpg",
  				"cloudinary_id": "ha9xom4rnixnyy4l0zhm",
  				"width": 520,
  				"height": 397
  			}
  		],
  		"videos": [
  			{
  				"name": "Trailer",
  				"video_id": "EIfPl4GXaYg"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/alhjbyctkghknr19gpqv.jpg",
  			"cloudinary_id": "alhjbyctkghknr19gpqv",
  			"width": 2766,
  			"height": 1983
  		}
  	},
  	{
  		"igdbId": 24814,
  		"name": "The Seeker",
  		"summary": "The Seeker is an action/stealth game, where you are in the role of the little drone that was accidentally activated by the debris that hit the EPC-221. It all began after the Great Galactic war when people had to leave earth, however instead of living peacefully, they destroyed themselves to ashes by their greed for power. \nNow you, as The Seeker, woken up, ready to find the cause of all of the Great Galactic war, trying to save whats left of humanity. If there is anything left.\n\nGameplay:\nThrough the game you'll encounter various barriers; Other drones, alarm systems, etc. in a random generated level (only the layout stays the same) That will try to slice you in pieces, the more, the better. \nYou as The Seeker, need to find the exit out of this robot made hell, by collecting points, enjoying the scenery and the music that captures the essence and the beauty of destruction intertwined. \nWith human and robotic leftovers.",
  		"popularity": 1.333333333333333,
  		"release_dates": [
  			{
  				"category": 0,
  				"platform": 6,
  				"date": 1471910400000,
  				"region": 8,
  				"human": "2016-Aug-23",
  				"y": 2016,
  				"m": 8
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/vezrupukvmoxdont8qxz.jpg",
  				"cloudinary_id": "vezrupukvmoxdont8qxz",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/fdwvug7p55stib4spkbn.jpg",
  				"cloudinary_id": "fdwvug7p55stib4spkbn",
  				"width": 1919,
  				"height": 1079
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/lwqlrd32ygkqpuxhnri9.jpg",
  				"cloudinary_id": "lwqlrd32ygkqpuxhnri9",
  				"width": 1919,
  				"height": 1079
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/nhsgboudvuin7stmto6o.jpg",
  				"cloudinary_id": "nhsgboudvuin7stmto6o",
  				"width": 1915,
  				"height": 1079
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/g500go0irecdidl6om8d.jpg",
  				"cloudinary_id": "g500go0irecdidl6om8d",
  				"width": 1919,
  				"height": 1079
  			}
  		],
  		"videos": [
  			{
  				"name": "Trailer",
  				"video_id": "x0WzcogWl1s"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/bcyjtzut6fvpachr52kf.jpg",
  			"cloudinary_id": "bcyjtzut6fvpachr52kf",
  			"width": 1920,
  			"height": 1080
  		}
  	},
  	{
  		"igdbId": 96391,
  		"name": "Shenmue I & II",
  		"summary": "\"Originally released for the Dreamcast in 2000 and 2001, Shenmue I & II is an open world action adventure combining jujitsu combat, investigative sleuthing, RPG elements, and memorable mini-games. It pioneered many aspects of modern gaming, including open world city exploration, and was the game that coined the Quick Time Event (QTE). It was one of the first games with a persistent open world, where day cycles to night, weather changes, shops open and close and NPCs go about their business all on their own schedules. Its engrossing epic story and living world created a generation of passionate fans, and the game consistently makes the list of “greatest games of all time”.\"",
  		"popularity": 1.0,
  		"release_dates": [
  			{
  				"category": 2,
  				"platform": 6,
  				"date": 1546214400000,
  				"region": 8,
  				"human": "2018",
  				"y": 2018,
  				"m": 12
  			},
  			{
  				"category": 2,
  				"platform": 49,
  				"date": 1546214400000,
  				"region": 1,
  				"human": "2018",
  				"y": 2018,
  				"m": 12
  			},
  			{
  				"category": 2,
  				"platform": 49,
  				"date": 1546214400000,
  				"region": 2,
  				"human": "2018",
  				"y": 2018,
  				"m": 12
  			},
  			{
  				"category": 2,
  				"platform": 48,
  				"date": 1546214400000,
  				"region": 2,
  				"human": "2018",
  				"y": 2018,
  				"m": 12
  			},
  			{
  				"category": 2,
  				"platform": 48,
  				"date": 1546214400000,
  				"region": 1,
  				"human": "2018",
  				"y": 2018,
  				"m": 12
  			},
  			{
  				"category": 2,
  				"platform": 48,
  				"date": 1546214400000,
  				"region": 5,
  				"human": "2018",
  				"y": 2018,
  				"m": 12
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/lrswstyvvvaqhydj80ws.jpg",
  				"cloudinary_id": "lrswstyvvvaqhydj80ws",
  				"width": 1445,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/blsahu1md8tl0aqivdrq.jpg",
  				"cloudinary_id": "blsahu1md8tl0aqivdrq",
  				"width": 1438,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/hrjwkzmmvduup8kryzav.jpg",
  				"cloudinary_id": "hrjwkzmmvduup8kryzav",
  				"width": 1438,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/wybx972icikrqj7bmjl2.jpg",
  				"cloudinary_id": "wybx972icikrqj7bmjl2",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/wrgz6cuxuup221b01es2.jpg",
  				"cloudinary_id": "wrgz6cuxuup221b01es2",
  				"width": 1440,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/ypmnvvx803gj1gyri0xz.jpg",
  				"cloudinary_id": "ypmnvvx803gj1gyri0xz",
  				"width": 1920,
  				"height": 1080
  			}
  		],
  		"videos": [
  			{
  				"name": "Announcement Trailer",
  				"video_id": "juPGbtqe8mU"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/nxaptelx9e5ttkntu8ro.jpg",
  			"cloudinary_id": "nxaptelx9e5ttkntu8ro",
  			"width": 707,
  			"height": 1000
  		}
  	},
  	{
  		"igdbId": 9904,
  		"name": "Grimoire: Manastorm",
  		"summary": "Grimoire is a multiplayer mage FPS where unique spells put a twist on classic shooter action. Scorch your enemies, vanish into thin air, or turn to stone with dozens of powerful spells at your fingertips!",
  		"rating": 80.0,
  		"popularity": 1.333333333333333,
  		"release_dates": [
  			{
  				"category": 0,
  				"platform": 6,
  				"date": 1425081600000,
  				"region": 2,
  				"human": "2015-Feb-28",
  				"y": 2015,
  				"m": 2
  			},
  			{
  				"category": 0,
  				"platform": 6,
  				"date": 1423008000000,
  				"human": "2015-Feb-04",
  				"y": 2015,
  				"m": 2
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/xkr8y0fsa8gu6j34ieeu.jpg",
  				"cloudinary_id": "xkr8y0fsa8gu6j34ieeu",
  				"width": 1280,
  				"height": 720
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/f3yrpvgwkwll6ihsoy6e.jpg",
  				"cloudinary_id": "f3yrpvgwkwll6ihsoy6e",
  				"width": 1280,
  				"height": 720
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/wznpf3c3wfhib2jmyfwn.jpg",
  				"cloudinary_id": "wznpf3c3wfhib2jmyfwn",
  				"width": 1280,
  				"height": 720
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/qktl8itvh9hsmhkshna4.jpg",
  				"cloudinary_id": "qktl8itvh9hsmhkshna4",
  				"width": 1340,
  				"height": 753
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/aavricfvfr5resjacg3g.jpg",
  				"cloudinary_id": "aavricfvfr5resjacg3g",
  				"width": 1340,
  				"height": 753
  			}
  		],
  		"videos": [
  			{
  				"name": "Trailer",
  				"video_id": "Ja9f9EXHKas"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/pstghexpkbmf4lwolnwd.jpg",
  			"cloudinary_id": "pstghexpkbmf4lwolnwd",
  			"width": 1000,
  			"height": 563
  		}
  	},
  	{
  		"igdbId": 80697,
  		"name": "Sega Vintage Collection: Streets of Rage",
  		"popularity": 1.0,
  		"release_dates": [
  			{
  				"category": 7,
  				"platform": 36,
  				"human": "TBD"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/gl6kaluxhvm38wfny3vk.jpg",
  			"cloudinary_id": "gl6kaluxhvm38wfny3vk",
  			"width": 200,
  			"height": 300
  		}
  	},
  	{
  		"igdbId": 9621,
  		"name": "Super Smash Bros. for Nintendo 3DS",
  		"summary": "Super Smash Bros. for Nintendo 3DS is the first portable entry in the renowned series, in which game worlds collide. \n \nUp to four players battle each other locally or online using some of Nintendo’s most well-known and iconic characters across beautifully designed stages inspired by classic portable Nintendo games. It’s a genuine, massive Super Smash Bros. experience that’s available to play on the go, anytime, anywhere.",
  		"rating": 78.46697907929351,
  		"popularity": 1.333333333333333,
  		"release_dates": [
  			{
  				"category": 0,
  				"platform": 37,
  				"date": 1410566400000,
  				"region": 5,
  				"human": "2014-Sep-13",
  				"y": 2014,
  				"m": 9
  			},
  			{
  				"category": 0,
  				"platform": 37,
  				"date": 1412294400000,
  				"region": 2,
  				"human": "2014-Oct-03",
  				"y": 2014,
  				"m": 10
  			},
  			{
  				"category": 0,
  				"platform": 37,
  				"date": 1412294400000,
  				"region": 1,
  				"human": "2014-Oct-03",
  				"y": 2014,
  				"m": 10
  			},
  			{
  				"category": 0,
  				"platform": 37,
  				"date": 1412380800000,
  				"region": 3,
  				"human": "2014-Oct-04",
  				"y": 2014,
  				"m": 10
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/z2kgy2k3chfygkxmvhki.jpg",
  				"cloudinary_id": "z2kgy2k3chfygkxmvhki",
  				"width": 400,
  				"height": 240
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/c6avefnuurhh155p5pg6.jpg",
  				"cloudinary_id": "c6avefnuurhh155p5pg6",
  				"width": 400,
  				"height": 240
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/wmhpnehxzmva2xe3pemf.jpg",
  				"cloudinary_id": "wmhpnehxzmva2xe3pemf",
  				"width": 400,
  				"height": 240
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/jokvgdtq9fszpzcgbstb.jpg",
  				"cloudinary_id": "jokvgdtq9fszpzcgbstb",
  				"width": 400,
  				"height": 240
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/gluhd0npj87ujp7ju9cc.jpg",
  				"cloudinary_id": "gluhd0npj87ujp7ju9cc",
  				"width": 400,
  				"height": 240
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/ijybeutyicckerhwaar3.jpg",
  				"cloudinary_id": "ijybeutyicckerhwaar3",
  				"width": 400,
  				"height": 240
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/bnx8nyoaklcscl4rmj7l.jpg",
  				"cloudinary_id": "bnx8nyoaklcscl4rmj7l",
  				"width": 400,
  				"height": 240
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/tytvi7ghc0mxer0bzxyi.jpg",
  				"cloudinary_id": "tytvi7ghc0mxer0bzxyi",
  				"width": 400,
  				"height": 240
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/rsgqmzl3lngewgmqvxce.jpg",
  				"cloudinary_id": "rsgqmzl3lngewgmqvxce",
  				"width": 400,
  				"height": 240
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/yrngz93kirumccl40dzd.jpg",
  				"cloudinary_id": "yrngz93kirumccl40dzd",
  				"width": 400,
  				"height": 240
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/poemwf2osqmgw2fa7cr6.jpg",
  				"cloudinary_id": "poemwf2osqmgw2fa7cr6",
  				"width": 400,
  				"height": 240
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/nxwweupqrbqhi9biiea6.jpg",
  				"cloudinary_id": "nxwweupqrbqhi9biiea6",
  				"width": 1000,
  				"height": 1000
  			}
  		],
  		"videos": [
  			{
  				"name": "Trailer",
  				"video_id": "sePaUQYTQ90"
  			},
  			{
  				"name": "Trailer",
  				"video_id": "WWM-SCjIuNg"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/zepouzxku5quf3r2s6zy.jpg",
  			"cloudinary_id": "zepouzxku5quf3r2s6zy",
  			"width": 1209,
  			"height": 1080
  		}
  	},
  	{
  		"igdbId": 34119,
  		"name": "Rite of Life",
  		"summary": "Rite of Life is a life-sim RPG being developed for PC, Mac and Linux. It is heavily inspired by games such as Harvest Moon, Pokémon, Dark Cloud and Monster Hunter. It features a player-driven open world where you start with a small encampment. Through exploring, battling and gathering resources you can turn your home into a prospering town. \n \nKey Features \n \nPlayer-Driven Open World - Progression throughout the game is defined by you. Whether you want to focus on developing your home, helping the villagers become masters of their craft, levelling up your character so that you can take on anything or exploring the vast world of Rite of Life. You set your own objectives. \n \nInfluence The Economy of Your Home - Bring materials back to your village and watch as your home develops from a small encampment into a prospering town. \n \nLevel Up Villagers - Bring relevant materials back to your home to help the villagers train in their specialised craft. As they improve, more will unlock in their shops. \n \nThe Spectrum System - A unique levelling up system inspired from Final Fantasy X's Sphere Grid. Allows you to level up your character how you want to in order to suit your playing style. \n \nInnovative Town Editor Mode - Customise the look and feel of your home with an in-game editor mode. Also complete unique quests only possible using the town editor. \n \nInterior Editor Mode - Decorate your house with numerous items you find, craft or buy. \n \nSeasons, Dynamic Weather and Day & Night Cycles - Fully immerse yourself in the world of Rite of Life. Encounter different enemies, explore secret areas and experience new things as the seasons, variety of weather and time of day alter the world and how you can explore it. \n \nUnique Turn-Based Combat - A tried and tested turn-based combat system that allows you to choose how to attack your enemy, exploiting their weaknesses. Watch as the season, weather and time of day affect the strength and behaviour of the enemy you're fighting. Is the enemy more feral at night? Are they weakened in the snow? Can't they handle the summer heat? Discover when best to hunt certain enemies. Also includes a huge selection of skills, attack animations and fully animated boss battles!",
  		"popularity": 1.333333333333333,
  		"release_dates": [
  			{
  				"category": 7,
  				"platform": 3,
  				"region": 8,
  				"human": "TBD"
  			},
  			{
  				"category": 7,
  				"platform": 14,
  				"region": 8,
  				"human": "TBD"
  			},
  			{
  				"category": 7,
  				"platform": 6,
  				"region": 8,
  				"human": "TBD"
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/aoahlglzk26d6ztpoor0.jpg",
  				"cloudinary_id": "aoahlglzk26d6ztpoor0",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/ukypjutznxobz2u19dsj.jpg",
  				"cloudinary_id": "ukypjutznxobz2u19dsj",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/nml7qayqzbvcmgzrykcm.jpg",
  				"cloudinary_id": "nml7qayqzbvcmgzrykcm",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/ldq35w4e7ln38vfv9n5m.jpg",
  				"cloudinary_id": "ldq35w4e7ln38vfv9n5m",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/dmztppump1bm9titlfjd.jpg",
  				"cloudinary_id": "dmztppump1bm9titlfjd",
  				"width": 1920,
  				"height": 1080
  			}
  		],
  		"videos": [
  			{
  				"name": "Rite of Life Kickstarter Trailer 2015",
  				"video_id": "1eIL09zzuLs"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/yhu6y3cv05pktksnclyp.jpg",
  			"cloudinary_id": "yhu6y3cv05pktksnclyp",
  			"width": 1000,
  			"height": 1000
  		}
  	},
  	{
  		"igdbId": 3029,
  		"name": "Spelunky",
  		"summary": "Spelunky is an open source indie platform video game created by Derek Yu and released as freeware for Microsoft Windows. It was remade for the Xbox 360 in 2012, with ports to the PlayStation 3, PlayStation Vita and then back to Microsoft Windows. The player controls a spelunker who explores a series of caves while collecting treasure, saving damsels, fighting enemies and dodging traps. The caves are procedurally generated, making each run through the game unique. Spelunky is one of the first examples of a roguelike-like, borrowing concepts from the roguelike genre, and was the influence for many later roguelike-like games.",
  		"rating": 82.7447632836963,
  		"popularity": 1.333333333333333,
  		"release_dates": [
  			{
  				"category": 0,
  				"platform": 45,
  				"date": 1377648000000,
  				"region": 1,
  				"human": "2013-Aug-28",
  				"y": 2013,
  				"m": 8
  			},
  			{
  				"category": 0,
  				"platform": 45,
  				"date": 1377561600000,
  				"region": 2,
  				"human": "2013-Aug-27",
  				"y": 2013,
  				"m": 8
  			},
  			{
  				"category": 0,
  				"platform": 48,
  				"date": 1412726400000,
  				"region": 3,
  				"human": "2014-Oct-08",
  				"y": 2014,
  				"m": 10
  			},
  			{
  				"category": 0,
  				"platform": 46,
  				"date": 1414022400000,
  				"region": 5,
  				"human": "2014-Oct-23",
  				"y": 2014,
  				"m": 10
  			},
  			{
  				"category": 0,
  				"platform": 9,
  				"date": 1414022400000,
  				"region": 5,
  				"human": "2014-Oct-23",
  				"y": 2014,
  				"m": 10
  			},
  			{
  				"category": 0,
  				"platform": 46,
  				"date": 1377648000000,
  				"region": 3,
  				"human": "2013-Aug-28",
  				"y": 2013,
  				"m": 8
  			},
  			{
  				"category": 0,
  				"platform": 9,
  				"date": 1377648000000,
  				"region": 3,
  				"human": "2013-Aug-28",
  				"y": 2013,
  				"m": 8
  			},
  			{
  				"category": 0,
  				"platform": 46,
  				"date": 1377648000000,
  				"region": 1,
  				"human": "2013-Aug-28",
  				"y": 2013,
  				"m": 8
  			},
  			{
  				"category": 0,
  				"platform": 9,
  				"date": 1377648000000,
  				"region": 1,
  				"human": "2013-Aug-28",
  				"y": 2013,
  				"m": 8
  			},
  			{
  				"category": 0,
  				"platform": 46,
  				"date": 1377561600000,
  				"region": 2,
  				"human": "2013-Aug-27",
  				"y": 2013,
  				"m": 8
  			},
  			{
  				"category": 0,
  				"platform": 9,
  				"date": 1377561600000,
  				"region": 2,
  				"human": "2013-Aug-27",
  				"y": 2013,
  				"m": 8
  			},
  			{
  				"category": 0,
  				"platform": 48,
  				"date": 1414022400000,
  				"region": 5,
  				"human": "2014-Oct-23",
  				"y": 2014,
  				"m": 10
  			},
  			{
  				"category": 0,
  				"platform": 48,
  				"date": 1412726400000,
  				"region": 1,
  				"human": "2014-Oct-08",
  				"y": 2014,
  				"m": 10
  			},
  			{
  				"category": 0,
  				"platform": 48,
  				"date": 1412640000000,
  				"region": 2,
  				"human": "2014-Oct-07",
  				"y": 2014,
  				"m": 10
  			},
  			{
  				"category": 0,
  				"platform": 6,
  				"date": 1375920000000,
  				"region": 8,
  				"human": "2013-Aug-08",
  				"y": 2013,
  				"m": 8
  			},
  			{
  				"category": 0,
  				"platform": 36,
  				"date": 1341360000000,
  				"region": 8,
  				"human": "2012-Jul-04",
  				"y": 2012,
  				"m": 7
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/jcp8odbymhh6exidv1ev.jpg",
  				"cloudinary_id": "jcp8odbymhh6exidv1ev",
  				"width": 960,
  				"height": 544
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/iyydvheenwo5ftsb6dse.jpg",
  				"cloudinary_id": "iyydvheenwo5ftsb6dse",
  				"width": 960,
  				"height": 544
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/mwt9kanz0ahs755liln6.jpg",
  				"cloudinary_id": "mwt9kanz0ahs755liln6",
  				"width": 960,
  				"height": 544
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/kmz2lzgrj4aijosc6ptf.jpg",
  				"cloudinary_id": "kmz2lzgrj4aijosc6ptf",
  				"width": 1280,
  				"height": 720
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/mrkcq2ahpvbunklcyqv2.jpg",
  				"cloudinary_id": "mrkcq2ahpvbunklcyqv2",
  				"width": 640,
  				"height": 360
  			}
  		],
  		"videos": [
  			{
  				"name": "Trailer",
  				"video_id": "D1vCF-5Xkp4"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/liofidxnrdvb0lypfu8r.jpg",
  			"cloudinary_id": "liofidxnrdvb0lypfu8r",
  			"width": 900,
  			"height": 1090
  		}
  	},
  	{
  		"igdbId": 28081,
  		"name": "NBA Playgrounds",
  		"summary": "\"Classic NBA arcade action is back! Take your “A” game to the playground and beat the best in high-flying 2-on-2 basketball action. Practice your skills offline, play with up to three others, or take your talents online to posterize your opponents with acrobatic jams and ridiculous displays of skill.\"",
  		"rating": 70.0,
  		"popularity": 1.333333333333333,
  		"release_dates": [
  			{
  				"category": 0,
  				"platform": 49,
  				"date": 1494288000000,
  				"region": 2,
  				"human": "2017-May-09",
  				"y": 2017,
  				"m": 5
  			},
  			{
  				"category": 0,
  				"platform": 45,
  				"date": 1494288000000,
  				"region": 2,
  				"human": "2017-May-09",
  				"y": 2017,
  				"m": 5
  			},
  			{
  				"category": 0,
  				"platform": 45,
  				"date": 1494288000000,
  				"region": 1,
  				"human": "2017-May-09",
  				"y": 2017,
  				"m": 5
  			},
  			{
  				"category": 0,
  				"platform": 6,
  				"date": 1494288000000,
  				"region": 8,
  				"human": "2017-May-09",
  				"y": 2017,
  				"m": 5
  			},
  			{
  				"category": 0,
  				"platform": 48,
  				"date": 1494288000000,
  				"region": 8,
  				"human": "2017-May-09",
  				"y": 2017,
  				"m": 5
  			},
  			{
  				"category": 0,
  				"platform": 49,
  				"date": 1494288000000,
  				"region": 8,
  				"human": "2017-May-09",
  				"y": 2017,
  				"m": 5
  			},
  			{
  				"category": 0,
  				"platform": 130,
  				"date": 1494288000000,
  				"region": 8,
  				"human": "2017-May-09",
  				"y": 2017,
  				"m": 5
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/c1gbdfcefgquzdwlrmlu.jpg",
  				"cloudinary_id": "c1gbdfcefgquzdwlrmlu",
  				"width": 745,
  				"height": 419
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/z3xtqlp0yrj9ozv9rvla.jpg",
  				"cloudinary_id": "z3xtqlp0yrj9ozv9rvla",
  				"width": 745,
  				"height": 419
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/ogqmrdgemmbypglcoeui.jpg",
  				"cloudinary_id": "ogqmrdgemmbypglcoeui",
  				"width": 745,
  				"height": 419
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/ei25lppxlsjqy9jokedv.jpg",
  				"cloudinary_id": "ei25lppxlsjqy9jokedv",
  				"width": 745,
  				"height": 419
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/jopd2pzdx3pro6ljg57b.jpg",
  				"cloudinary_id": "jopd2pzdx3pro6ljg57b",
  				"width": 745,
  				"height": 419
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/hflo4e22qpstbcz5jhut.jpg",
  				"cloudinary_id": "hflo4e22qpstbcz5jhut",
  				"width": 745,
  				"height": 419
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/hclzzywlisrqt4qz4jrq.jpg",
  				"cloudinary_id": "hclzzywlisrqt4qz4jrq",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/fbnhyexoeg8gphmxdqvf.jpg",
  				"cloudinary_id": "fbnhyexoeg8gphmxdqvf",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/gmdb4mm1pcelu3g0lfh6.jpg",
  				"cloudinary_id": "gmdb4mm1pcelu3g0lfh6",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/i5m2duwmbx4dn3ijsbv7.jpg",
  				"cloudinary_id": "i5m2duwmbx4dn3ijsbv7",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/fluxleojgqdgnapllfxu.jpg",
  				"cloudinary_id": "fluxleojgqdgnapllfxu",
  				"width": 1920,
  				"height": 1080
  			}
  		],
  		"videos": [
  			{
  				"name": "Trailer",
  				"video_id": "ARNp7e_fqs4"
  			},
  			{
  				"name": "Launch Trailer",
  				"video_id": "3jPmY3Zk-80"
  			},
  			{
  				"name": "Reveal Trailer",
  				"video_id": "-J46iUJ5HWs"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/obafcz1fyqa89rfmka79.jpg",
  			"cloudinary_id": "obafcz1fyqa89rfmka79",
  			"width": 720,
  			"height": 1080
  		}
  	},
  	{
  		"igdbId": 81247,
  		"name": "Candleman: The Complete Journey",
  		"summary": "Candleman: The Complete Journey is a unique puzzle platformer, where light is both a welcome ally and a deceptive foe. Take the role of a little candle who can burn for only 10 seconds, and venture through an unsettling darkness of challenging levels with a smooth difficulty curve. Use your wits to overcome obstacles based on the mechanics of light and shadow, while exploring a wide range of enchanted environments as you seek out the distant glow. \n \nJourney through enchanted worlds, each more mysterious than the last. \nFace innovative challenges rooted in the mechanics of light and shadow. \nBecome immersed in a stunning fairytale, unlike anything you've seen before.",
  		"popularity": 1.0,
  		"release_dates": [
  			{
  				"category": 0,
  				"platform": 6,
  				"date": 1517356800000,
  				"human": "2018-Jan-31",
  				"y": 2018,
  				"m": 1
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/kycdsp2h7nmn75cotmdv.jpg",
  				"cloudinary_id": "kycdsp2h7nmn75cotmdv",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/atwglbkueu0w1w88mvs5.jpg",
  				"cloudinary_id": "atwglbkueu0w1w88mvs5",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/wwq1vtlf4ekmwrds2lbt.jpg",
  				"cloudinary_id": "wwq1vtlf4ekmwrds2lbt",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/vm7myxyixl3m85zokqun.jpg",
  				"cloudinary_id": "vm7myxyixl3m85zokqun",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/tbarnvfyzoezuhyipjnm.jpg",
  				"cloudinary_id": "tbarnvfyzoezuhyipjnm",
  				"width": 1200,
  				"height": 675
  			}
  		],
  		"videos": [
  			{
  				"name": "Trailer",
  				"video_id": "dofnB0bhKGA"
  			},
  			{
  				"name": "Trailer",
  				"video_id": "jBCgYYoSFX4"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/n2q2t5t7kkwdvhqdkr39.jpg",
  			"cloudinary_id": "n2q2t5t7kkwdvhqdkr39",
  			"width": 720,
  			"height": 1080
  		}
  	},
  	{
  		"igdbId": 20129,
  		"name": "Top Gun: Fire At Will",
  		"summary": "Top Gun: Fire at Will is a flight simulator based on the movie of the same name. You take the role of Maverick and must pilot your F-14 Tomcat with your RIO Merlin in the backseat through a series of missions that begin with the Top Gun School in San Diego and continue with conflict zones in Cuba, Korea and Libya.\nFull motion video cutscenes with live actors play between many of the game's fifty or so missions, with James Tolkan being the only actor to return from the original movie.",
  		"popularity": 1.333333333333333,
  		"release_dates": [
  			{
  				"category": 0,
  				"platform": 6,
  				"date": 824860800000,
  				"human": "1996-Feb-21",
  				"y": 1996,
  				"m": 2
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/d1zsgr0xuradavowsqfd.jpg",
  				"cloudinary_id": "d1zsgr0xuradavowsqfd",
  				"width": 972,
  				"height": 684
  			}
  		],
  		"videos": [
  			{
  				"name": "Trailer",
  				"video_id": "sQZWj5CQaCw"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/nef6kfuvzn4v89ekxdiv.jpg",
  			"cloudinary_id": "nef6kfuvzn4v89ekxdiv",
  			"width": 975,
  			"height": 1239
  		}
  	},
  	{
  		"igdbId": 6872,
  		"name": "Rodea the Sky Soldier",
  		"summary": "A thousand years ago, Emperor Geardo of the Naga Empire sent an army of machine soldiers to invade the sky kingdom of Garuda. Thanks to the efforts of Princess Cecilia and Rodea, a machine soldier who promised to protect Garuda, Emperor Geardo's assault was thwarted. In present day, a spirited inventor named Ion discovers an abandoned robot that has fallen into disrepair in the heart of a scorching desert. Upon completing her repairs, the robot stirs to life and reveals itself to be none other than Rodea. Stunned to find himself in the future, Rodea learns that the Naga Empire is no more and that Garuda has known peace for a thousand years. But this peace was not meant to last, for the forces of Naga have returned to wage war against Garuda. Remembering the promise he made 1,000 years ago, Rodea takes to the skies to defend Garuda from the Naga Empire once again.",
  		"rating": 63.0,
  		"popularity": 1.333333333333333,
  		"release_dates": [
  			{
  				"category": 0,
  				"platform": 41,
  				"date": 1447372800000,
  				"region": 1,
  				"human": "2015-Nov-13",
  				"y": 2015,
  				"m": 11
  			},
  			{
  				"category": 0,
  				"platform": 41,
  				"date": 1447113600000,
  				"region": 2,
  				"human": "2015-Nov-10",
  				"y": 2015,
  				"m": 11
  			},
  			{
  				"category": 0,
  				"platform": 37,
  				"date": 1447372800000,
  				"region": 1,
  				"human": "2015-Nov-13",
  				"y": 2015,
  				"m": 11
  			},
  			{
  				"category": 0,
  				"platform": 37,
  				"date": 1447113600000,
  				"region": 2,
  				"human": "2015-Nov-10",
  				"y": 2015,
  				"m": 11
  			},
  			{
  				"category": 4,
  				"platform": 41,
  				"date": 1435622400000,
  				"human": "2015-Q2",
  				"y": 2015,
  				"m": 6
  			},
  			{
  				"category": 4,
  				"platform": 37,
  				"date": 1435622400000,
  				"human": "2015-Q2",
  				"y": 2015,
  				"m": 6
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/m6etfidmw9lklzhx6iln.jpg",
  				"cloudinary_id": "m6etfidmw9lklzhx6iln",
  				"width": 1366,
  				"height": 768
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/ggyfznc8rraoafhykywj.jpg",
  				"cloudinary_id": "ggyfznc8rraoafhykywj",
  				"width": 1366,
  				"height": 768
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/xezu5mn3kk1gcbonq7by.jpg",
  				"cloudinary_id": "xezu5mn3kk1gcbonq7by",
  				"width": 1366,
  				"height": 768
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/fkvug3yrfdnlz7pgmtt0.jpg",
  				"cloudinary_id": "fkvug3yrfdnlz7pgmtt0",
  				"width": 1366,
  				"height": 768
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/pew5zhmtpzu0keonolo7.jpg",
  				"cloudinary_id": "pew5zhmtpzu0keonolo7",
  				"width": 1366,
  				"height": 768
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/pxsk3k2thmyjjlu9vqxz.jpg",
  				"cloudinary_id": "pxsk3k2thmyjjlu9vqxz",
  				"width": 356,
  				"height": 427
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/pv8znfh6tdgwzuedbvrz.jpg",
  				"cloudinary_id": "pv8znfh6tdgwzuedbvrz",
  				"width": 356,
  				"height": 427
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/xh0r7pmfzv1zfqj5zrvk.jpg",
  				"cloudinary_id": "xh0r7pmfzv1zfqj5zrvk",
  				"width": 356,
  				"height": 427
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/uen8kmqchxgymtxt1hke.jpg",
  				"cloudinary_id": "uen8kmqchxgymtxt1hke",
  				"width": 356,
  				"height": 427
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/rksxurfuro0qxmhoecrz.jpg",
  				"cloudinary_id": "rksxurfuro0qxmhoecrz",
  				"width": 1280,
  				"height": 912
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/ql8orl1vuylvgpvo0ttd.jpg",
  				"cloudinary_id": "ql8orl1vuylvgpvo0ttd",
  				"width": 640,
  				"height": 456
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/tapvzx6ixrurukg3xfqe.jpg",
  				"cloudinary_id": "tapvzx6ixrurukg3xfqe",
  				"width": 500,
  				"height": 281
  			}
  		],
  		"videos": [
  			{
  				"name": "Trailer",
  				"video_id": "V07gjWnGURg"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/r5mkcyjok6kqxnpdvkwz.jpg",
  			"cloudinary_id": "r5mkcyjok6kqxnpdvkwz",
  			"width": 953,
  			"height": 1192
  		}
  	},
  	{
  		"igdbId": 61859,
  		"name": "Dark Deception",
  		"summary": "A first-person horror game by indie developer Glowstick Games. The player must run through a maze of corridors, collecting shards and avoiding giant knife-wielding toy monkeys, in a decidedly Pac-Man-like fashion.",
  		"popularity": 1.333333333333333,
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/ckxiot11zpc2htpgazbz.jpg",
  			"cloudinary_id": "ckxiot11zpc2htpgazbz",
  			"width": 1200,
  			"height": 1200
  		}
  	},
  	{
  		"igdbId": 55771,
  		"name": "Fell Seal: Arbiter's Mark",
  		"summary": "Fell Seal: Arbiter's Mark is a turn-based tactical RPG with a focus on storytelling and strategic battles. Unfold a mature story as you progress through hand-crafted scenarios, controlling your own group of Arbiters, with each character customizable from a wide selection of classes and abilities!",
  		"popularity": 1.333333333333333,
  		"release_dates": [
  			{
  				"category": 2,
  				"platform": 3,
  				"date": 1546214400000,
  				"region": 8,
  				"human": "2018",
  				"y": 2018,
  				"m": 12
  			},
  			{
  				"category": 2,
  				"platform": 14,
  				"date": 1546214400000,
  				"region": 8,
  				"human": "2018",
  				"y": 2018,
  				"m": 12
  			},
  			{
  				"category": 2,
  				"platform": 6,
  				"date": 1546214400000,
  				"region": 8,
  				"human": "2018",
  				"y": 2018,
  				"m": 12
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/a3ckiodahmo0eazdpph7.jpg",
  				"cloudinary_id": "a3ckiodahmo0eazdpph7",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/rgkfrlvspn8wexb6w1ze.jpg",
  				"cloudinary_id": "rgkfrlvspn8wexb6w1ze",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/loymywb2lx8kmwungbpd.jpg",
  				"cloudinary_id": "loymywb2lx8kmwungbpd",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/aftcengql0jpss7cifnf.jpg",
  				"cloudinary_id": "aftcengql0jpss7cifnf",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/hrihe9wnq35bymgfc8y6.jpg",
  				"cloudinary_id": "hrihe9wnq35bymgfc8y6",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/ycgw8p2s8szooeeu2xh0.jpg",
  				"cloudinary_id": "ycgw8p2s8szooeeu2xh0",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/dmah3ynjyd8nu5ilp37f.jpg",
  				"cloudinary_id": "dmah3ynjyd8nu5ilp37f",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/as37a2bjm9m16lvglltm.jpg",
  				"cloudinary_id": "as37a2bjm9m16lvglltm",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/rtlgtzqhf8uwaarvpoiv.jpg",
  				"cloudinary_id": "rtlgtzqhf8uwaarvpoiv",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/r0p3nbctopamdizmo7sf.jpg",
  				"cloudinary_id": "r0p3nbctopamdizmo7sf",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/dtofectalrggetah1lbe.jpg",
  				"cloudinary_id": "dtofectalrggetah1lbe",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/madivzpsljc81qlegqkj.jpg",
  				"cloudinary_id": "madivzpsljc81qlegqkj",
  				"width": 1920,
  				"height": 1080
  			}
  		],
  		"videos": [
  			{
  				"name": "Battle Intro Gameplay video",
  				"video_id": "k_FDy97TLwQ"
  			},
  			{
  				"name": "Trailer",
  				"video_id": "3jitnm_Yc6k"
  			},
  			{
  				"name": "PAX 2018 Trailer",
  				"video_id": "HkgJ0rCKXUA"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/xh4n7erlmy6zonin9q7o.jpg",
  			"cloudinary_id": "xh4n7erlmy6zonin9q7o",
  			"width": 793,
  			"height": 793
  		}
  	},
  	{
  		"igdbId": 20180,
  		"name": "The Piano",
  		"summary": "The Piano is a third-person singleplayer adventure game set in Paris in the late 1940’s. \nAfter the murders of his formerly famous brothers, John Barnerway, a failed pianist, \ntries to solve the mystery behind their deaths while he himself struggles with his mental illness and the accusations by the people and press.",
  		"popularity": 1.666666666666667,
  		"release_dates": [
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
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/hxyc5iolynztrjlkenuq.jpg",
  				"cloudinary_id": "hxyc5iolynztrjlkenuq",
  				"width": 1600,
  				"height": 900
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/zyo6uldtjpjeihwrx3pm.jpg",
  				"cloudinary_id": "zyo6uldtjpjeihwrx3pm",
  				"width": 1600,
  				"height": 900
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/edmqiwkyfqdd9aqhwel0.jpg",
  				"cloudinary_id": "edmqiwkyfqdd9aqhwel0",
  				"width": 1527,
  				"height": 859
  			}
  		],
  		"videos": [
  			{
  				"name": "Trailer",
  				"video_id": "kj6ZJfDCBjA"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/r1ykkrfvawhmivhhydix.jpg",
  			"cloudinary_id": "r1ykkrfvawhmivhhydix",
  			"width": 726,
  			"height": 1024
  		}
  	},
  	{
  		"igdbId": 81355,
  		"name": "Monster Hunter: World - Steelbook Edition",
  		"popularity": 1.0,
  		"release_dates": [
  			{
  				"category": 0,
  				"platform": 49,
  				"date": 1516924800000,
  				"region": 1,
  				"human": "2018-Jan-26",
  				"y": 2018,
  				"m": 1
  			},
  			{
  				"category": 0,
  				"platform": 48,
  				"date": 1516924800000,
  				"region": 1,
  				"human": "2018-Jan-26",
  				"y": 2018,
  				"m": 1
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/bdlysvtwbfe0kbs1iznr.jpg",
  			"cloudinary_id": "bdlysvtwbfe0kbs1iznr",
  			"width": 1500,
  			"height": 1214
  		}
  	},
  	{
  		"igdbId": 54681,
  		"name": "Nightmarchers",
  		"summary": "\"Nightmarchers is an open world, post-apocalyptic RPG shooter where you tap into the power of the spirit world to become a demigod and clear Oahu of the army that has taken control. Now it’s up to you to work with the survivors, find favor of the gods, choose your skills and weapons, and remake the island in your own way. \n \nWill you use stealth, modified guns or super-natural powers from the gods to fight for the island and take it back from the raiders who have overrun Oahu?\"",
  		"popularity": 1.333333333333333,
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/xt0fzpae1cjeyfyoury3.jpg",
  				"cloudinary_id": "xt0fzpae1cjeyfyoury3",
  				"width": 960,
  				"height": 540
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/qeqyqarbp9bif5pg8p6m.jpg",
  				"cloudinary_id": "qeqyqarbp9bif5pg8p6m",
  				"width": 960,
  				"height": 540
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/ri3hcz4ibp9jbvhr4foa.jpg",
  				"cloudinary_id": "ri3hcz4ibp9jbvhr4foa",
  				"width": 761,
  				"height": 540
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/mpnw6ejizxrqqff4tbga.jpg",
  				"cloudinary_id": "mpnw6ejizxrqqff4tbga",
  				"width": 960,
  				"height": 540
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/yyd0pfvgjdxfet78jhfd.jpg",
  				"cloudinary_id": "yyd0pfvgjdxfet78jhfd",
  				"width": 960,
  				"height": 540
  			}
  		],
  		"videos": [
  			{
  				"name": "Trailer",
  				"video_id": "StM3y1IKw5Q"
  			},
  			{
  				"name": "Trailer",
  				"video_id": "8Ma7hJGRE4w"
  			},
  			{
  				"name": "Pre-Alpha Trailer",
  				"video_id": "1RVeQGuCXQI"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/anr7m7442n0qxnfacdxl.jpg",
  			"cloudinary_id": "anr7m7442n0qxnfacdxl",
  			"width": 1280,
  			"height": 720
  		}
  	},
  	{
  		"igdbId": 1321,
  		"name": "Turok: Dinosaur Hunter",
  		"summary": "A world where time has no meaning - and evil knows no bounds. Torn from a world long gone, the time traveling warrior Turok has found himself thrust into a savage land torn by conflict.",
  		"rating": 72.3226460246985,
  		"popularity": 3.666666666666667,
  		"release_dates": [
  			{
  				"category": 0,
  				"platform": 4,
  				"date": 1496102400000,
  				"region": 5,
  				"human": "2017-May-30",
  				"y": 2017,
  				"m": 5
  			},
  			{
  				"category": 2,
  				"platform": 6,
  				"date": 883526400000,
  				"region": 1,
  				"human": "1997",
  				"y": 1997,
  				"m": 12
  			},
  			{
  				"category": 0,
  				"platform": 4,
  				"date": 857433600000,
  				"region": 1,
  				"human": "1997-Mar-04",
  				"y": 1997,
  				"m": 3
  			},
  			{
  				"category": 0,
  				"platform": 6,
  				"date": 880502400000,
  				"region": 2,
  				"human": "1997-Nov-26",
  				"y": 1997,
  				"m": 11
  			},
  			{
  				"category": 0,
  				"platform": 4,
  				"date": 857088000000,
  				"region": 2,
  				"human": "1997-Feb-28",
  				"y": 1997,
  				"m": 2
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/ggrux3nc4ju3ectvsexo.jpg",
  				"cloudinary_id": "ggrux3nc4ju3ectvsexo",
  				"width": 540,
  				"height": 405
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/il4fgzcxdcus9qx3dqop.jpg",
  				"cloudinary_id": "il4fgzcxdcus9qx3dqop",
  				"width": 540,
  				"height": 405
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/wywrcaclbp5ilwohufl6.jpg",
  				"cloudinary_id": "wywrcaclbp5ilwohufl6",
  				"width": 540,
  				"height": 405
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/ujdk2heomjyp13wgufix.jpg",
  				"cloudinary_id": "ujdk2heomjyp13wgufix",
  				"width": 540,
  				"height": 405
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/rmlxrctnqsvwxscjs9rh.jpg",
  				"cloudinary_id": "rmlxrctnqsvwxscjs9rh",
  				"width": 540,
  				"height": 405
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/b8kbp3cutsjejwuyakj1.jpg",
  				"cloudinary_id": "b8kbp3cutsjejwuyakj1",
  				"width": 540,
  				"height": 405
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/dnm69m0beniqzz1cezvm.jpg",
  				"cloudinary_id": "dnm69m0beniqzz1cezvm",
  				"width": 540,
  				"height": 405
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/rzpdwlfu64amf2kmd9wh.jpg",
  				"cloudinary_id": "rzpdwlfu64amf2kmd9wh",
  				"width": 540,
  				"height": 405
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/imbl1p4fklejj9eizhb8.jpg",
  				"cloudinary_id": "imbl1p4fklejj9eizhb8",
  				"width": 540,
  				"height": 405
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/al8ugahu8a8eud1roqis.jpg",
  				"cloudinary_id": "al8ugahu8a8eud1roqis",
  				"width": 540,
  				"height": 405
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/q9bu3ljz0pymxjhft1u6.jpg",
  				"cloudinary_id": "q9bu3ljz0pymxjhft1u6",
  				"width": 540,
  				"height": 405
  			}
  		],
  		"videos": [
  			{
  				"name": "Trailer",
  				"video_id": "gJlkp_cxkco"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/osceqzv62kdyl8ubineo.jpg",
  			"cloudinary_id": "osceqzv62kdyl8ubineo",
  			"width": 1642,
  			"height": 1200
  		}
  	},
  	{
  		"igdbId": 18852,
  		"name": "Odell Down Under",
  		"summary": "Edutainment game that transports players into a thriving coral reef ecosystem. Odell Down Under features several game modes which invite the player to learn about the myriad creatures of the coral reef.",
  		"popularity": 1.333333333333333,
  		"release_dates": [
  			{
  				"category": 2,
  				"platform": 14,
  				"date": 820368000000,
  				"region": 2,
  				"human": "1995",
  				"y": 1995,
  				"m": 12
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/ub8rbq7owzfnwynvtdgj.jpg",
  				"cloudinary_id": "ub8rbq7owzfnwynvtdgj",
  				"width": 480,
  				"height": 300
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/kovt7hmhzqu0msodcz5c.jpg",
  			"cloudinary_id": "kovt7hmhzqu0msodcz5c",
  			"width": 250,
  			"height": 250
  		}
  	},
  	{
  		"igdbId": 63933,
  		"name": "EZ2ON",
  		"summary": "EZ2ON is an online music game based on the arcade game called \"EZ2DJ.\"",
  		"popularity": 2.0,
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/rwcywztumjgc0lndzcko.jpg",
  			"cloudinary_id": "rwcywztumjgc0lndzcko",
  			"width": 486,
  			"height": 393
  		}
  	},
  	{
  		"igdbId": 9568,
  		"name": "Pako",
  		"summary": "Pako is a car chase simulator that focuses on you evading cops. The aim of the game is to survive as long as possible without crashing and ending the game.",
  		"popularity": 1.333333333333333,
  		"release_dates": [
  			{
  				"category": 0,
  				"platform": 55,
  				"date": 1388534400000,
  				"region": 8,
  				"human": "2014-Jan-01",
  				"y": 2014,
  				"m": 1
  			},
  			{
  				"category": 7,
  				"platform": 55,
  				"human": "TBD"
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/l855xu3bhwj7c44iaob2.jpg",
  				"cloudinary_id": "l855xu3bhwj7c44iaob2",
  				"width": 750,
  				"height": 563
  			}
  		],
  		"videos": [
  			{
  				"name": "Trailer",
  				"video_id": "EkGyYWcyJGE"
  			},
  			{
  				"name": "Trailer",
  				"video_id": "EkGyYWcyJGE"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/glndkc0cieoqwrlcnzwl.jpg",
  			"cloudinary_id": "glndkc0cieoqwrlcnzwl",
  			"width": 1024,
  			"height": 1024
  		}
  	},
  	{
  		"igdbId": 22077,
  		"name": "Dead Reckoning: The Brassfield Manor Collector's Edition",
  		"summary": "From Eipix Entertainment, makers of Dead Reckoning: Silvermoon Isle and the Final Cut series!\n\nOn the eve of his annual murder mystery party, wealthy businessman Reginald Greer is found dead at his home. You’ve been called to Brassfield Manor to solve the case… but it won’t be easy. There are plenty of clues and suspects to keep you guessing who killed Reginald Greer. Was it his spoiled daughter? His jealous son? His disgruntled business partner? It could be any one of the guests who arrived for a game… and stayed for a murder. Use a unique deduction fea",
  		"popularity": 1.333333333333333,
  		"release_dates": [
  			{
  				"category": 0,
  				"platform": 6,
  				"date": 1463529600000,
  				"human": "2016-May-18",
  				"y": 2016,
  				"m": 5
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/gtjvesie9xkroor1ru7n.jpg",
  				"cloudinary_id": "gtjvesie9xkroor1ru7n",
  				"width": 1280,
  				"height": 768
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/qvs6abwbmovsfihifqqa.jpg",
  				"cloudinary_id": "qvs6abwbmovsfihifqqa",
  				"width": 1280,
  				"height": 768
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/wtoztkugikucg2tilfbv.jpg",
  				"cloudinary_id": "wtoztkugikucg2tilfbv",
  				"width": 1280,
  				"height": 768
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/fi7znb95n3oyicdjyhwp.jpg",
  				"cloudinary_id": "fi7znb95n3oyicdjyhwp",
  				"width": 1280,
  				"height": 768
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/qnpe34ucgsffg1danr1o.jpg",
  				"cloudinary_id": "qnpe34ucgsffg1danr1o",
  				"width": 1280,
  				"height": 768
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/qkskiueoymsfcdvu3z8w.jpg",
  			"cloudinary_id": "qkskiueoymsfcdvu3z8w",
  			"width": 175,
  			"height": 150
  		}
  	},
  	{
  		"igdbId": 62165,
  		"name": "Crazy Flasher 3",
  		"summary": "Crazy Flasher 3 is the third installment of the Crazy Flasher series, which was originally started by chinese flash game developer bbplayer.net. It is centered around deathmatch-style battles in an urban setting, telling the story of \"Andy Law\" who becomes the kind of deathmatch.",
  		"popularity": 1.333333333333333,
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/b4ivw8fjwtbg6mkyf4qm.jpg",
  			"cloudinary_id": "b4ivw8fjwtbg6mkyf4qm",
  			"width": 600,
  			"height": 351
  		}
  	},
  	{
  		"igdbId": 27785,
  		"name": "Time Recoil",
  		"summary": "Time Recoil is a top-down shooter by 10tons - the creators of Crimsonland and Neon Chrome. In Time Recoil you'll kill to slow time, witness top-down Hollywood-style slow motion gunfights, trigger devastating special moves, and travel in time via wormholes.",
  		"rating": 70.0,
  		"popularity": 1.333333333333333,
  		"release_dates": [
  			{
  				"category": 0,
  				"platform": 45,
  				"date": 1505174400000,
  				"region": 1,
  				"human": "2017-Sep-12",
  				"y": 2017,
  				"m": 9
  			},
  			{
  				"category": 0,
  				"platform": 45,
  				"date": 1505174400000,
  				"region": 2,
  				"human": "2017-Sep-12",
  				"y": 2017,
  				"m": 9
  			},
  			{
  				"category": 0,
  				"platform": 130,
  				"date": 1508976000000,
  				"region": 2,
  				"human": "2017-Oct-26",
  				"y": 2017,
  				"m": 10
  			},
  			{
  				"category": 0,
  				"platform": 48,
  				"date": 1505174400000,
  				"region": 2,
  				"human": "2017-Sep-12",
  				"y": 2017,
  				"m": 9
  			},
  			{
  				"category": 0,
  				"platform": 6,
  				"date": 1502323200000,
  				"region": 2,
  				"human": "2017-Aug-10",
  				"y": 2017,
  				"m": 8
  			},
  			{
  				"category": 0,
  				"platform": 6,
  				"date": 1502323200000,
  				"region": 8,
  				"human": "2017-Aug-10",
  				"y": 2017,
  				"m": 8
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/ibwzcka2t25jlxdjnzp7.jpg",
  				"cloudinary_id": "ibwzcka2t25jlxdjnzp7",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/skz1an4josxc6ivmtsui.jpg",
  				"cloudinary_id": "skz1an4josxc6ivmtsui",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/dplteunrygzwfxawitso.jpg",
  				"cloudinary_id": "dplteunrygzwfxawitso",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/vucegby3kyttbb5cwscf.jpg",
  				"cloudinary_id": "vucegby3kyttbb5cwscf",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/ljwoc3edkaazrrwtm75y.jpg",
  				"cloudinary_id": "ljwoc3edkaazrrwtm75y",
  				"width": 1920,
  				"height": 1080
  			}
  		],
  		"videos": [
  			{
  				"name": "Trailer",
  				"video_id": "yd8HacH4ZaE"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/ehlh0icv7qdbu1jh7wuc.jpg",
  			"cloudinary_id": "ehlh0icv7qdbu1jh7wuc",
  			"width": 513,
  			"height": 640
  		}
  	},
  	{
  		"igdbId": 65820,
  		"name": "Feudal Alloy",
  		"summary": "It's a metroidvania-style action RPG with fishbowl-powered medieval robots! \nExplore a huge medieval world, improve your combat skills by smashing a lot of mechanic creatures and talk to other robots using unique animated dialogues.",
  		"popularity": 2.0,
  		"release_dates": [
  			{
  				"category": 5,
  				"platform": 130,
  				"date": 1538265600000,
  				"region": 8,
  				"human": "2018-Q3",
  				"y": 2018,
  				"m": 9
  			},
  			{
  				"category": 5,
  				"platform": 49,
  				"date": 1538265600000,
  				"region": 8,
  				"human": "2018-Q3",
  				"y": 2018,
  				"m": 9
  			},
  			{
  				"category": 5,
  				"platform": 48,
  				"date": 1538265600000,
  				"region": 8,
  				"human": "2018-Q3",
  				"y": 2018,
  				"m": 9
  			},
  			{
  				"category": 5,
  				"platform": 92,
  				"date": 1538265600000,
  				"region": 8,
  				"human": "2018-Q3",
  				"y": 2018,
  				"m": 9
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
  				"category": 5,
  				"platform": 14,
  				"date": 1538265600000,
  				"region": 8,
  				"human": "2018-Q3",
  				"y": 2018,
  				"m": 9
  			},
  			{
  				"category": 5,
  				"platform": 3,
  				"date": 1538265600000,
  				"region": 8,
  				"human": "2018-Q3",
  				"y": 2018,
  				"m": 9
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/pgbjjmt6twplunzuggxb.jpg",
  				"cloudinary_id": "pgbjjmt6twplunzuggxb",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/ohz4otkdvadtmf4hmyns.jpg",
  				"cloudinary_id": "ohz4otkdvadtmf4hmyns",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/oobmgvfv8txtjoa2z699.jpg",
  				"cloudinary_id": "oobmgvfv8txtjoa2z699",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/tlsysl8oar0ealng0zv4.jpg",
  				"cloudinary_id": "tlsysl8oar0ealng0zv4",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/a2q2yw1chy0otkilsv4d.jpg",
  				"cloudinary_id": "a2q2yw1chy0otkilsv4d",
  				"width": 1920,
  				"height": 1080
  			}
  		],
  		"videos": [
  			{
  				"name": "Teaser",
  				"video_id": "H_NG-nQPh8A"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/xtpcgblsm7mizlbgmkjd.jpg",
  			"cloudinary_id": "xtpcgblsm7mizlbgmkjd",
  			"width": 1024,
  			"height": 644
  		}
  	},
  	{
  		"igdbId": 25641,
  		"name": "Tom Clancy's Rainbow Six Siege: Operation Red Crow",
  		"summary": "Operation Red Crow is the fourth expansion to be released for Tom Clancy's Rainbow Six Siege. It adds two new Operators from the Japanese SAT CTU and new map Skyscraper.",
  		"popularity": 1.333333333333333,
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/a6lsrvt0tq4ltcafnfg5.jpg",
  				"cloudinary_id": "a6lsrvt0tq4ltcafnfg5",
  				"width": 1110,
  				"height": 655
  			}
  		],
  		"videos": [
  			{
  				"name": "Launch Trailer",
  				"video_id": "KCdmSwMlXMo"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/h0efvegxoucndv3cpeu4.jpg",
  			"cloudinary_id": "h0efvegxoucndv3cpeu4",
  			"width": 731,
  			"height": 749
  		}
  	},
  	{
  		"igdbId": 66086,
  		"name": "Creeper World 2",
  		"summary": "Eschewing the top-down perspective of its predecessor, Creeper World 2 remains a strategy title where the main enemy is a deadly fluid flowing around the map.",
  		"popularity": 1.333333333333333,
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/bwiixamvhbn71fjiorun.jpg",
  			"cloudinary_id": "bwiixamvhbn71fjiorun",
  			"width": 816,
  			"height": 638
  		}
  	},
  	{
  		"igdbId": 52198,
  		"name": "Middle-earth: Shadow of War Mobile",
  		"summary": "Middle-earth: Shadow of War Mobile is a free-to-play real-time RPG continuing Talion’s journey through Mordor. \n \nThe game features iconic characters from Middle-earth: Shadow of Mordor and The Lord of the Rings trilogy, including Celebrimbor, Eltariel, Gimli, Boromir and many more fan-favorites.",
  		"popularity": 1.333333333333333,
  		"release_dates": [
  			{
  				"category": 0,
  				"platform": 39,
  				"date": 1506470400000,
  				"region": 2,
  				"human": "2017-Sep-27",
  				"y": 2017,
  				"m": 9
  			},
  			{
  				"category": 0,
  				"platform": 39,
  				"date": 1506556800000,
  				"region": 8,
  				"human": "2017-Sep-28",
  				"y": 2017,
  				"m": 9
  			},
  			{
  				"category": 0,
  				"platform": 34,
  				"date": 1506556800000,
  				"region": 8,
  				"human": "2017-Sep-28",
  				"y": 2017,
  				"m": 9
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/vsaqrr013bvz2ze7aa8k.jpg",
  				"cloudinary_id": "vsaqrr013bvz2ze7aa8k",
  				"width": 270,
  				"height": 480
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/rzub2ovzugrq7emwrpfw.jpg",
  				"cloudinary_id": "rzub2ovzugrq7emwrpfw",
  				"width": 270,
  				"height": 480
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/dnp0nhv1nu0lqbcci4xf.jpg",
  				"cloudinary_id": "dnp0nhv1nu0lqbcci4xf",
  				"width": 270,
  				"height": 480
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/krjaxznxb1tc5hm7okzw.jpg",
  				"cloudinary_id": "krjaxznxb1tc5hm7okzw",
  				"width": 270,
  				"height": 480
  			}
  		],
  		"videos": [
  			{
  				"name": "Announcement Trailer",
  				"video_id": "a7YtekQ-QAk"
  			},
  			{
  				"name": "Trailer",
  				"video_id": "S8Cyo6953xI"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/oepr6rqhkenx37qn0nz8.jpg",
  			"cloudinary_id": "oepr6rqhkenx37qn0nz8",
  			"width": 512,
  			"height": 512
  		}
  	},
  	{
  		"igdbId": 2902,
  		"name": "Dead Island: Epidemic",
  		"summary": "The closed beta for Dead Island: Epidemic has gone live and can be played \"24/7,\" on the off chance you signed up for it at the beginning of the month and haven't since lost interest. \n \nIn this multiplayer online battle arena game, three teams of four survivors attempt to gather supplies and take control points while zombies do their best to make these tasks challenging. I missed hearing that players will have direct control over their character (WASD + mouse), which had me slightly more open-minded about Epidemic until I saw a few videos on YouTube. I was hoping for faster, more arcade-like gameplay, not this. \n \nDo I have much hope for the game? Do any of us? Not particularly. But there's still a part of my brain that is perhaps foolishly curious to see how a Dead Island MOBA will turn out.",
  		"rating": 40.0678204377799,
  		"popularity": 1.333333333333333,
  		"release_dates": [
  			{
  				"category": 0,
  				"platform": 6,
  				"date": 1416441600000,
  				"region": 8,
  				"human": "2014-Nov-20",
  				"y": 2014,
  				"m": 11
  			}
  		],
  		"screenshots": [
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/ge5cq4dld6h0iemhbwob.jpg",
  				"cloudinary_id": "ge5cq4dld6h0iemhbwob",
  				"width": 944,
  				"height": 531
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/is9ghnakyruk2kijcsyp.jpg",
  				"cloudinary_id": "is9ghnakyruk2kijcsyp",
  				"width": 944,
  				"height": 531
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/q3b0otbvntkgbu3nuhgi.jpg",
  				"cloudinary_id": "q3b0otbvntkgbu3nuhgi",
  				"width": 1920,
  				"height": 1080
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/umcvsiluhnt8wre78hgx.jpg",
  				"cloudinary_id": "umcvsiluhnt8wre78hgx",
  				"width": 1920,
  				"height": 1137
  			},
  			{
  				"url": "//images.igdb.com/igdb/image/upload/t_720p/hdcdwpu2ofwo8fnly81d.jpg",
  				"cloudinary_id": "hdcdwpu2ofwo8fnly81d",
  				"width": 1920,
  				"height": 1080
  			}
  		],
  		"videos": [
  			{
  				"name": "Gameplay Trailer",
  				"video_id": "ryY17g2dszU"
  			}
  		],
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/s4m5cucbhebrkzwiiprs.jpg",
  			"cloudinary_id": "s4m5cucbhebrkzwiiprs",
  			"width": 500,
  			"height": 704
  		}
  	},
  	{
  		"igdbId": 56262,
  		"name": "Grand Chase M: Action RPG",
  		"summary": "Grand Chase M: Action RPG",
  		"popularity": 1.666666666666667,
  		"cover": {
  			"url": "//images.igdb.com/igdb/image/upload/t_720p/wobuqik6kpdbkvsyctlj.jpg",
  			"cloudinary_id": "wobuqik6kpdbkvsyctlj",
  			"width": 5906,
  			"height": 7875
  		}
  	}
  ])
    .then(games => console.log(`${games.length} games created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
