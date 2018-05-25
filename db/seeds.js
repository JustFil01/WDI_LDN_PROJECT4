/*eslint-disable */
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Game = require('../models/game');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Game.create(
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/nbpwnalhykwi8gsobelc.jpg",
				"cloudinary_id": "nbpwnalhykwi8gsobelc",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/tnqlf5fyzrl2u4oyyh4c.jpg",
				"cloudinary_id": "tnqlf5fyzrl2u4oyyh4c",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/isj1odo1k1vvl1x8k8vk.jpg",
				"cloudinary_id": "isj1odo1k1vvl1x8k8vk",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/jvsvgobhd4dbjlh7kn2q.jpg",
				"cloudinary_id": "jvsvgobhd4dbjlh7kn2q",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/c109q1sm0rrx95ucmjse.jpg",
				"cloudinary_id": "c109q1sm0rrx95ucmjse",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/poxzku6fghfj04nxynqe.jpg",
				"cloudinary_id": "poxzku6fghfj04nxynqe",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/v6lalq0gwbycborb9ic4.jpg",
				"cloudinary_id": "v6lalq0gwbycborb9ic4",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ghcjheumz1norh0rwaxk.jpg",
				"cloudinary_id": "ghcjheumz1norh0rwaxk",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ojdwmo8mhipudkalaxlo.jpg",
				"cloudinary_id": "ojdwmo8mhipudkalaxlo",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/oydgjnzydmdfwd3vtmp9.jpg",
				"cloudinary_id": "oydgjnzydmdfwd3vtmp9",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/nqmwzj4azjunajjlniy8.jpg",
				"cloudinary_id": "nqmwzj4azjunajjlniy8",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/c9rskkieuhapebstfxys.jpg",
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ojrkfd7qcb2rakrvrddo.jpg",
				"cloudinary_id": "ojrkfd7qcb2rakrvrddo",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/jesopvenn0grenqh0tr7.jpg",
				"cloudinary_id": "jesopvenn0grenqh0tr7",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/jfhbbr87x3fac1qnukor.jpg",
				"cloudinary_id": "jfhbbr87x3fac1qnukor",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/sgo07t9nja0uzcrldgn9.jpg",
				"cloudinary_id": "sgo07t9nja0uzcrldgn9",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/t0jlovq2gc9ghvsyvpgt.jpg",
				"cloudinary_id": "t0jlovq2gc9ghvsyvpgt",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/vh11ez90tgswhzx6ckys.jpg",
				"cloudinary_id": "vh11ez90tgswhzx6ckys",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/rnljjizxuo9odqvvhlw1.jpg",
				"cloudinary_id": "rnljjizxuo9odqvvhlw1",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/sj98v0eoqxxzgalf9mn4.jpg",
				"cloudinary_id": "sj98v0eoqxxzgalf9mn4",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/syug9kgrtmuqynmu7uqg.jpg",
				"cloudinary_id": "syug9kgrtmuqynmu7uqg",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/fgk6jtffidxsn8ovtbqu.jpg",
				"cloudinary_id": "fgk6jtffidxsn8ovtbqu",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/bctz4zjros0pizflz4ha.jpg",
				"cloudinary_id": "bctz4zjros0pizflz4ha",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/dh1tkaotkbtyh978mtag.jpg",
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/zb9ch1qw54a9rddvvbmo.jpg",
				"cloudinary_id": "zb9ch1qw54a9rddvvbmo",
				"width": 2560,
				"height": 1440
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/dykdvcmiwelebe2lff0v.jpg",
				"cloudinary_id": "dykdvcmiwelebe2lff0v",
				"width": 1024,
				"height": 576
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/kito03qskgq8ht8dfpqa.jpg",
				"cloudinary_id": "kito03qskgq8ht8dfpqa",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/kwdt3wa4rqagmy5pvzgm.jpg",
				"cloudinary_id": "kwdt3wa4rqagmy5pvzgm",
				"width": 2560,
				"height": 1440
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/y9s7qv25untipfcirlei.jpg",
				"cloudinary_id": "y9s7qv25untipfcirlei",
				"width": 960,
				"height": 540
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/dlnozlv1jmjv5zrm3iqt.jpg",
				"cloudinary_id": "dlnozlv1jmjv5zrm3iqt",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/wwm17mai4r1jqaiggcvc.jpg",
				"cloudinary_id": "wwm17mai4r1jqaiggcvc",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/mnokrxmkflaianxhsrkd.jpg",
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/k16enea4cmxpiovwian7.jpg",
				"cloudinary_id": "k16enea4cmxpiovwian7",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/mkpuyfxyeqxvz7uo38hi.jpg",
				"cloudinary_id": "mkpuyfxyeqxvz7uo38hi",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/nweuohcyygrldlj1moph.jpg",
				"cloudinary_id": "nweuohcyygrldlj1moph",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/gotc2uayjfzf0axjpcxk.jpg",
				"cloudinary_id": "gotc2uayjfzf0axjpcxk",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/cd2roo4u1ibulpvchvrm.jpg",
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ma9ukpuze8e0qpr9rait.jpg",
				"cloudinary_id": "ma9ukpuze8e0qpr9rait",
				"width": 1600,
				"height": 900
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/qt4cmansbclofu2xc51f.jpg",
				"cloudinary_id": "qt4cmansbclofu2xc51f",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/fgdanj0jqbowyq732dd7.jpg",
				"cloudinary_id": "fgdanj0jqbowyq732dd7",
				"width": 1600,
				"height": 900
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/xldzronepklmzofdt5dv.jpg",
				"cloudinary_id": "xldzronepklmzofdt5dv",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/dpntdfb5lyvgdcv2nham.jpg",
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/kzgu4ywwcyzorcpjnsxq.jpg",
				"cloudinary_id": "kzgu4ywwcyzorcpjnsxq",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ytq9dw8cgnaecekhdcdg.jpg",
				"cloudinary_id": "ytq9dw8cgnaecekhdcdg",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/xpgggartobfrwnkqhtwk.jpg",
				"cloudinary_id": "xpgggartobfrwnkqhtwk",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/pntmmnwn6vzp8uqjeoeo.jpg",
				"cloudinary_id": "pntmmnwn6vzp8uqjeoeo",
				"width": 600,
				"height": 337
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/shotciissmwdisdwqdmg.jpg",
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/sfchhwjgcyxtm8ceyj17.jpg",
				"cloudinary_id": "sfchhwjgcyxtm8ceyj17",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/rg4qqcigwxd9aa7zbsos.jpg",
				"cloudinary_id": "rg4qqcigwxd9aa7zbsos",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/g1jcmromr4x3jwunyb0b.jpg",
				"cloudinary_id": "g1jcmromr4x3jwunyb0b",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/r72spvqvrzfyqncgbspw.jpg",
				"cloudinary_id": "r72spvqvrzfyqncgbspw",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/xqw9h7z7psiuktt9dgos.jpg",
				"cloudinary_id": "xqw9h7z7psiuktt9dgos",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/aa66xisnbagxsepnx2el.jpg",
				"cloudinary_id": "aa66xisnbagxsepnx2el",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ndceepit98cuj5fbgjrs.jpg",
				"cloudinary_id": "ndceepit98cuj5fbgjrs",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/xeqtlwx9f80ekqiyh25w.jpg",
				"cloudinary_id": "xeqtlwx9f80ekqiyh25w",
				"width": 783,
				"height": 440
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/b2k0cvfbzprnuizutgow.jpg",
				"cloudinary_id": "b2k0cvfbzprnuizutgow",
				"width": 783,
				"height": 440
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/u5ldoak74o1yhl2gt6y7.jpg",
				"cloudinary_id": "u5ldoak74o1yhl2gt6y7",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/xrbujdrkuyta8cneqipz.jpg",
				"cloudinary_id": "xrbujdrkuyta8cneqipz",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ikk26u9j3qpug39snuoj.jpg",
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/kpxaegdowcs6qf4daxdb.jpg",
				"cloudinary_id": "kpxaegdowcs6qf4daxdb",
				"width": 1892,
				"height": 1066
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/fgx5lzwlmytqfzhtunzz.jpg",
				"cloudinary_id": "fgx5lzwlmytqfzhtunzz",
				"width": 1915,
				"height": 1077
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/i6uxqudxjjvwupjwt2gl.jpg",
				"cloudinary_id": "i6uxqudxjjvwupjwt2gl",
				"width": 1865,
				"height": 1061
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ns1yco3iwezeav9h6jee.jpg",
				"cloudinary_id": "ns1yco3iwezeav9h6jee",
				"width": 1858,
				"height": 1065
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/zrmbxwlptiyrxw7z9p3x.jpg",
				"cloudinary_id": "zrmbxwlptiyrxw7z9p3x",
				"width": 1919,
				"height": 1079
			}
		],
		"videos": [
			{
				"name": "Trailer",
				"video_id": "5OuKjxAvD6w"
			}
		],
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/sooytuocpokwtngmquvs.jpg",
				"cloudinary_id": "sooytuocpokwtngmquvs",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/uwwuwilnfjzlob0hppmz.jpg",
				"cloudinary_id": "uwwuwilnfjzlob0hppmz",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/dghetbqvsgrnwcqd7ooj.jpg",
				"cloudinary_id": "dghetbqvsgrnwcqd7ooj",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/jycoypp4aqf2vr70vedf.jpg",
				"cloudinary_id": "jycoypp4aqf2vr70vedf",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/bpdjgsf95escq6zzkku2.jpg",
				"cloudinary_id": "bpdjgsf95escq6zzkku2",
				"width": 1920,
				"height": 1080
			}
		],
		"videos": [
			{
				"name": "Trailer",
				"video_id": "2DBBLhmlnZU"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ikpnehvtdaacp4gxng6m.jpg",
				"cloudinary_id": "ikpnehvtdaacp4gxng6m",
				"width": 1920,
				"height": 1068
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/llvkq3gtkln28xpx6qxn.jpg",
				"cloudinary_id": "llvkq3gtkln28xpx6qxn",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/qjwj3w9bqemsidmcj83r.jpg",
				"cloudinary_id": "qjwj3w9bqemsidmcj83r",
				"width": 1920,
				"height": 1068
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/savelze8kxu7f2llffdp.jpg",
				"cloudinary_id": "savelze8kxu7f2llffdp",
				"width": 1920,
				"height": 1068
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ry3ytygf8nqdh52r3ylc.jpg",
				"cloudinary_id": "ry3ytygf8nqdh52r3ylc",
				"width": 1920,
				"height": 1068
			}
		],
		"videos": [
			{
				"name": "Launch Trailer",
				"video_id": "CcehyBnYETs"
			},
			{
				"name": "Clerics Teaser",
				"video_id": "h6pOvzA2r9U"
			},
			{
				"name": "Outlaw Teaser",
				"video_id": "klmTuMFlcAo"
			},
			{
				"name": "Gameplay Trailer",
				"video_id": "judBRBCzxYs"
			},
			{
				"name": "Alb Guild Trailer",
				"video_id": "ATteGV6RsR8"
			},
			{
				"name": "Cinematic trailer",
				"video_id": "xPH5BflHA8Q"
			},
			{
				"name": "Berserker Faction Trailer",
				"video_id": "bnUwAgrEYI8"
			},
			{
				"name": "Prologue Trailer",
				"video_id": "UmrW9Su6EMs"
			},
			{
				"name": "Teaser",
				"video_id": "yXGdbBwuwyE"
			},
			{
				"name": "Trailer",
				"video_id": "AlXZJDVVVxc"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/zegajhpspraxnlooxsui.jpg",
				"cloudinary_id": "zegajhpspraxnlooxsui",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ummebsgjmr9fmtxydpc4.jpg",
				"cloudinary_id": "ummebsgjmr9fmtxydpc4",
				"width": 1433,
				"height": 768
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/oznusesuqeyajcvli2e3.jpg",
				"cloudinary_id": "oznusesuqeyajcvli2e3",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/epyidsnnbzlswjcl3wam.jpg",
				"cloudinary_id": "epyidsnnbzlswjcl3wam",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ssz7jf6at2q0p9eoe1z7.jpg",
				"cloudinary_id": "ssz7jf6at2q0p9eoe1z7",
				"width": 1920,
				"height": 1080
			}
		],
		"videos": [
			{
				"name": "Trailer",
				"video_id": "x_LKP3spy1A"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/qifbztmaielk7l9xayuz.jpg",
				"cloudinary_id": "qifbztmaielk7l9xayuz",
				"width": 892,
				"height": 671
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ijj2lfcvitqmfvqphwbe.jpg",
				"cloudinary_id": "ijj2lfcvitqmfvqphwbe",
				"width": 1020,
				"height": 762
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/wl38bjr8ipzbt5jnl3vj.jpg",
				"cloudinary_id": "wl38bjr8ipzbt5jnl3vj",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/bzyspbtgxqghq4jjzip0.jpg",
				"cloudinary_id": "bzyspbtgxqghq4jjzip0",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/xnv0bxmav7r0e0yhnxch.jpg",
				"cloudinary_id": "xnv0bxmav7r0e0yhnxch",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/usgpx4ir0ooem1rzxyul.jpg",
				"cloudinary_id": "usgpx4ir0ooem1rzxyul",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/km2klmcvgpz8fqwbnc8k.jpg",
				"cloudinary_id": "km2klmcvgpz8fqwbnc8k",
				"width": 1920,
				"height": 1080
			}
		],
		"videos": [
			{
				"name": "Trailer",
				"video_id": "9jBbq6c9EEQ"
			},
			{
				"name": "Reveal Trailer",
				"video_id": "7gCDztu8IHk"
			},
			{
				"name": "E3 2016 Trailer",
				"video_id": "vhG0eEaIozA"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/eictejxujxz3xcmbylgn.jpg",
				"cloudinary_id": "eictejxujxz3xcmbylgn",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/v21jirvyi1yez5p00zj6.jpg",
				"cloudinary_id": "v21jirvyi1yez5p00zj6",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/gotdjgksjbrmmwivxiwt.jpg",
				"cloudinary_id": "gotdjgksjbrmmwivxiwt",
				"width": 1280,
				"height": 720
			}
		],
		"videos": [
			{
				"name": "Trailer",
				"video_id": "H5EjzDHCXLQ"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/m7j8nno7wpfdvxrvnam3.jpg",
				"cloudinary_id": "m7j8nno7wpfdvxrvnam3",
				"width": 2772,
				"height": 1559
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/duzljmjdctiljgu4bzkt.jpg",
				"cloudinary_id": "duzljmjdctiljgu4bzkt",
				"width": 2772,
				"height": 1559
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/fvyd4c4ybhw5asidd0tk.jpg",
				"cloudinary_id": "fvyd4c4ybhw5asidd0tk",
				"width": 2772,
				"height": 1559
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ijoenntauq5gfurpayt1.jpg",
				"cloudinary_id": "ijoenntauq5gfurpayt1",
				"width": 2772,
				"height": 1559
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/uaxzlzruz9be57tq5ayf.jpg",
				"cloudinary_id": "uaxzlzruz9be57tq5ayf",
				"width": 2772,
				"height": 1559
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/snkucsvixsexyfcvi1ks.jpg",
				"cloudinary_id": "snkucsvixsexyfcvi1ks",
				"width": 2772,
				"height": 1559
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ccxizgajbolu4kw5iild.jpg",
				"cloudinary_id": "ccxizgajbolu4kw5iild",
				"width": 2772,
				"height": 1559
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/qslsn7dl1nmjvlidmlc6.jpg",
				"cloudinary_id": "qslsn7dl1nmjvlidmlc6",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/o9mbl0rabu0sazsbxiji.jpg",
				"cloudinary_id": "o9mbl0rabu0sazsbxiji",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/vdmxnihoegzdbyahjpat.jpg",
				"cloudinary_id": "vdmxnihoegzdbyahjpat",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/mno7spxuafapa8ajvixm.jpg",
				"cloudinary_id": "mno7spxuafapa8ajvixm",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/zum4prw3m27jsqv2lobq.jpg",
				"cloudinary_id": "zum4prw3m27jsqv2lobq",
				"width": 1920,
				"height": 1080
			}
		],
		"videos": [
			{
				"name": "PGW 2017 Trailer",
				"video_id": "6Fywv4x5OrI"
			},
			{
				"name": "Story Trailer",
				"video_id": "NnT-AKSRtF4"
			},
			{
				"name": "Headquarters Reveal Trailer",
				"video_id": "k9YMZoNGXlM"
			},
			{
				"name": "Trailer",
				"video_id": "xSB0WCruGgo"
			},
			{
				"name": "E3 2017: Multiplayer Reveal Trailer",
				"video_id": "W_Y6F1c30To"
			},
			{
				"name": "Gameplay Interview",
				"video_id": "DfaCoLn7m4E"
			},
			{
				"name": "Trailer",
				"video_id": "D4Q_XYVescc"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/mq7vg4qwhzbdomdt73oi.jpg",
				"cloudinary_id": "mq7vg4qwhzbdomdt73oi",
				"width": 1920,
				"height": 1078
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/kbgxojqbxer6ujp0zjhj.jpg",
				"cloudinary_id": "kbgxojqbxer6ujp0zjhj",
				"width": 1920,
				"height": 1034
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/l4d50y9lp7ybgmzxeq1b.jpg",
				"cloudinary_id": "l4d50y9lp7ybgmzxeq1b",
				"width": 1920,
				"height": 1016
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/qmbilfki4opsgvxzcggw.jpg",
				"cloudinary_id": "qmbilfki4opsgvxzcggw",
				"width": 1920,
				"height": 1038
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/xwx3lug7qnipmrmkpzrw.jpg",
				"cloudinary_id": "xwx3lug7qnipmrmkpzrw",
				"width": 1920,
				"height": 1042
			}
		],
		"videos": [
			{
				"name": "Teaser",
				"video_id": "K6ntg47q_cM"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/oko3btwuoe0mklfrqhs8.jpg",
				"cloudinary_id": "oko3btwuoe0mklfrqhs8",
				"width": 1600,
				"height": 900
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/mttfyqcmkvjmqr8hu2ea.jpg",
				"cloudinary_id": "mttfyqcmkvjmqr8hu2ea",
				"width": 1600,
				"height": 900
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/whs72ikfxufqyt8mxzo6.jpg",
				"cloudinary_id": "whs72ikfxufqyt8mxzo6",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ewp9bf6aqxc9hsoegyqc.jpg",
				"cloudinary_id": "ewp9bf6aqxc9hsoegyqc",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/h37szhzxeafqu3bsmgp2.jpg",
				"cloudinary_id": "h37szhzxeafqu3bsmgp2",
				"width": 1920,
				"height": 1080
			}
		],
		"videos": [
			{
				"name": "Trailer",
				"video_id": "gm_eiMVTFGo"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/oh4gnocxwpdzrddezdvj.jpg",
				"cloudinary_id": "oh4gnocxwpdzrddezdvj",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/gqstoabsymned4x4k6ac.jpg",
				"cloudinary_id": "gqstoabsymned4x4k6ac",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/o2ssxmxvx8k5a1bgs8ju.jpg",
				"cloudinary_id": "o2ssxmxvx8k5a1bgs8ju",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/wynvjiwppfgrimgekzuh.jpg",
				"cloudinary_id": "wynvjiwppfgrimgekzuh",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/yhsbvwadywpktfuglxvk.jpg",
				"cloudinary_id": "yhsbvwadywpktfuglxvk",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/akcvbqfj1lpqq92ckwey.jpg",
				"cloudinary_id": "akcvbqfj1lpqq92ckwey",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ocmwxmxua3loinc6u5nm.jpg",
				"cloudinary_id": "ocmwxmxua3loinc6u5nm",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/j2rra0iukmzqwtmrogll.jpg",
				"cloudinary_id": "j2rra0iukmzqwtmrogll",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/frjbydflbhgqhj1jmtmj.jpg",
				"cloudinary_id": "frjbydflbhgqhj1jmtmj",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/xvpijqyfw7ctvjwdngqq.jpg",
				"cloudinary_id": "xvpijqyfw7ctvjwdngqq",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/rnd1qfuaikyoppnb0wyu.jpg",
				"cloudinary_id": "rnd1qfuaikyoppnb0wyu",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/hmn98zjzxcikhymnyo3i.jpg",
				"cloudinary_id": "hmn98zjzxcikhymnyo3i",
				"width": 1920,
				"height": 1080
			}
		],
		"videos": [
			{
				"name": "Console Launch Trailer",
				"video_id": "N-UkjxWrEaE"
			},
			{
				"name": "Launch Trailer",
				"video_id": "qUh4XMZqGus"
			},
			{
				"name": "Trailer",
				"video_id": "XcsvdATfXYw"
			},
			{
				"name": "Announcement Trailer",
				"video_id": "YBdrWzitONs"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/oc0u1zyxga0xhv6kwfkf.jpg",
				"cloudinary_id": "oc0u1zyxga0xhv6kwfkf",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/s3dgea4sy4zrmweppxos.jpg",
				"cloudinary_id": "s3dgea4sy4zrmweppxos",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/m9cfsoioyycinnfs2xkx.jpg",
				"cloudinary_id": "m9cfsoioyycinnfs2xkx",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/iaxocroi6hmylgwm7qpt.jpg",
				"cloudinary_id": "iaxocroi6hmylgwm7qpt",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/tpced0yq27mifm5wab5b.jpg",
				"cloudinary_id": "tpced0yq27mifm5wab5b",
				"width": 1920,
				"height": 1080
			}
		],
		"videos": [
			{
				"name": "Trailer",
				"video_id": "qQ8O2sLDClo"
			},
			{
				"name": "Trailer",
				"video_id": "hXYQ4iunOSo"
			},
			{
				"name": "Release Date Announcement Trailer",
				"video_id": "CaPFNmhx4ws"
			},
			{
				"name": "Launch Trailer",
				"video_id": "gOexUH774hY"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/p2lv79jdmlx0s1avbgfp.jpg",
				"cloudinary_id": "p2lv79jdmlx0s1avbgfp",
				"width": 1680,
				"height": 881
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/yauhhv59rftn2bn9vraf.jpg",
				"cloudinary_id": "yauhhv59rftn2bn9vraf",
				"width": 1680,
				"height": 917
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/guzvtrj2axygzzya6il7.jpg",
				"cloudinary_id": "guzvtrj2axygzzya6il7",
				"width": 1680,
				"height": 916
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/w4d1kpeyreyeiz1r5qrb.jpg",
				"cloudinary_id": "w4d1kpeyreyeiz1r5qrb",
				"width": 1680,
				"height": 916
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/o1yijizssajkueng6nkn.jpg",
				"cloudinary_id": "o1yijizssajkueng6nkn",
				"width": 1680,
				"height": 916
			}
		],
		"videos": [
			{
				"name": "Trailer",
				"video_id": "cOP6X6GWZrk"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/mobc8z5fnxljhadccvy6.jpg",
				"cloudinary_id": "mobc8z5fnxljhadccvy6",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/vlhzdqayyne2j3cjvpag.jpg",
				"cloudinary_id": "vlhzdqayyne2j3cjvpag",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/kazgjykzu18dhqjpspko.jpg",
				"cloudinary_id": "kazgjykzu18dhqjpspko",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/rqr5dxxw97zikyhdn2tq.jpg",
				"cloudinary_id": "rqr5dxxw97zikyhdn2tq",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/oh8a5shtmdbqx73cv765.jpg",
				"cloudinary_id": "oh8a5shtmdbqx73cv765",
				"width": 3840,
				"height": 2160
			}
		],
		"videos": [
			{
				"name": "PGW17 Interview Trailer",
				"video_id": "HfxOtvmpsM8"
			},
			{
				"name": "PGW17 Trailer",
				"video_id": "ArAdN5ilVRs"
			},
			{
				"name": "PSX 2016 Announcement Trailer",
				"video_id": "muniWyT4vTg"
			},
			{
				"name": "Discussion",
				"video_id": "gF1EQAtaZEo"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/mptosgjarjlyqxy7lqsm.jpg",
				"cloudinary_id": "mptosgjarjlyqxy7lqsm",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/dorsz0jbcecmkxvzi3t8.jpg",
				"cloudinary_id": "dorsz0jbcecmkxvzi3t8",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/banftd8fgfytbsfx6mjz.jpg",
				"cloudinary_id": "banftd8fgfytbsfx6mjz",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/uyaminfh8sugglvt247u.jpg",
				"cloudinary_id": "uyaminfh8sugglvt247u",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/kcfpf8wa8esalk0qkpo5.jpg",
				"cloudinary_id": "kcfpf8wa8esalk0qkpo5",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/tdxv4zzkqyjnm9pmwxw0.jpg",
				"cloudinary_id": "tdxv4zzkqyjnm9pmwxw0",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/h8f9uojkzvaau8pxsyxi.jpg",
				"cloudinary_id": "h8f9uojkzvaau8pxsyxi",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/dhw6ucx9laj5esv6rngn.jpg",
				"cloudinary_id": "dhw6ucx9laj5esv6rngn",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/x8xczj2a0y6g9rnhboko.jpg",
				"cloudinary_id": "x8xczj2a0y6g9rnhboko",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/qg7gx276z3hsqlr9xpt6.jpg",
				"cloudinary_id": "qg7gx276z3hsqlr9xpt6",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/c9xalka7stjkx4mes7kp.jpg",
				"cloudinary_id": "c9xalka7stjkx4mes7kp",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/xegpfnsvlyeld0zkjnrc.jpg",
				"cloudinary_id": "xegpfnsvlyeld0zkjnrc",
				"width": 1920,
				"height": 1080
			}
		],
		"videos": [
			{
				"name": "Official Trailer 3",
				"video_id": "9_GsrTCslQ4"
			},
			{
				"name": "Official Trailer 2: Ledger",
				"video_id": "t5AdF4uNGus"
			},
			{
				"name": "Announcement Trailer",
				"video_id": "94B-38sX5fs"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/lvei87lsotvlprgjin7z.jpg",
				"cloudinary_id": "lvei87lsotvlprgjin7z",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/vf8riwp5ospyns17gj4k.jpg",
				"cloudinary_id": "vf8riwp5ospyns17gj4k",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/h2xpmkh1njtpl9euevqd.jpg",
				"cloudinary_id": "h2xpmkh1njtpl9euevqd",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/gfgpb7jzptakabfnmuvl.jpg",
				"cloudinary_id": "gfgpb7jzptakabfnmuvl",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/y4xijvytkody2x9f4odr.jpg",
				"cloudinary_id": "y4xijvytkody2x9f4odr",
				"width": 1920,
				"height": 1080
			}
		],
		"videos": [
			{
				"name": "Trailer",
				"video_id": "ZdrAa4rOG1Y"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/wzxstzreelgwjxzw3bug.jpg",
				"cloudinary_id": "wzxstzreelgwjxzw3bug",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/afnvdaospkn9ffpcbjj7.jpg",
				"cloudinary_id": "afnvdaospkn9ffpcbjj7",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/h8scaf27hgdzkzhrstha.jpg",
				"cloudinary_id": "h8scaf27hgdzkzhrstha",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/xx0frswuipbdfby497zp.jpg",
				"cloudinary_id": "xx0frswuipbdfby497zp",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/mj8q0djgtzorncpadobi.jpg",
				"cloudinary_id": "mj8q0djgtzorncpadobi",
				"width": 1920,
				"height": 1080
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/omwijptsnuzexr7v3fe1.jpg",
				"cloudinary_id": "omwijptsnuzexr7v3fe1",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/pcdgcov2nvs7vhllzgnm.jpg",
				"cloudinary_id": "pcdgcov2nvs7vhllzgnm",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/uajwgnkz0lkxkewnv0pg.jpg",
				"cloudinary_id": "uajwgnkz0lkxkewnv0pg",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/nqssj92bs2xtjjakpeee.jpg",
				"cloudinary_id": "nqssj92bs2xtjjakpeee",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/tq40bxrpytlfw0naaqjc.jpg",
				"cloudinary_id": "tq40bxrpytlfw0naaqjc",
				"width": 1920,
				"height": 1080
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/brzujmobwirig2hffd10.jpg",
				"cloudinary_id": "brzujmobwirig2hffd10",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/vznwconbaedplvcd4auk.jpg",
				"cloudinary_id": "vznwconbaedplvcd4auk",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ixyamrma7rqodf5w5nyq.jpg",
				"cloudinary_id": "ixyamrma7rqodf5w5nyq",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/iuvpi11etj5zdoasyazy.jpg",
				"cloudinary_id": "iuvpi11etj5zdoasyazy",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/mxkahnnlpnkt5vzmwuwb.jpg",
				"cloudinary_id": "mxkahnnlpnkt5vzmwuwb",
				"width": 1920,
				"height": 1080
			}
		],
		"videos": [
			{
				"name": "Teaser",
				"video_id": "yr2NMdxU8PE"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/vay962n74abdhky6ehio.jpg",
				"cloudinary_id": "vay962n74abdhky6ehio",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/krunafqf8pxsn2wnvrti.jpg",
				"cloudinary_id": "krunafqf8pxsn2wnvrti",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/fbocgv2ismvvwmzhvaa9.jpg",
				"cloudinary_id": "fbocgv2ismvvwmzhvaa9",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/nql8zp9icj4ma92n0twb.jpg",
				"cloudinary_id": "nql8zp9icj4ma92n0twb",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/sm5fmduudsztcldbskai.jpg",
				"cloudinary_id": "sm5fmduudsztcldbskai",
				"width": 1920,
				"height": 1080
			}
		],
		"videos": [
			{
				"name": "Trailer",
				"video_id": "UnVZFuP6Cng"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/m1cpopxkczkmxgmpertc.jpg",
				"cloudinary_id": "m1cpopxkczkmxgmpertc",
				"width": 600,
				"height": 337
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/kypu1grw5icgybrsuezy.jpg",
				"cloudinary_id": "kypu1grw5icgybrsuezy",
				"width": 600,
				"height": 337
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/thrw9e1la1xg217nepzn.jpg",
				"cloudinary_id": "thrw9e1la1xg217nepzn",
				"width": 600,
				"height": 337
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/bwporxfftunjtfsoemkq.jpg",
				"cloudinary_id": "bwporxfftunjtfsoemkq",
				"width": 600,
				"height": 337
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/x9vyb2e8cxgszzohaz8d.jpg",
				"cloudinary_id": "x9vyb2e8cxgszzohaz8d",
				"width": 600,
				"height": 337
			}
		],
		"videos": [
			{
				"name": "Trailer",
				"video_id": "Flhlo8_qasI"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/oxc88854rvzznpftp9fi.jpg",
				"cloudinary_id": "oxc88854rvzznpftp9fi",
				"width": 576,
				"height": 768
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ujscxmxnehjp7huwhqet.jpg",
				"cloudinary_id": "ujscxmxnehjp7huwhqet",
				"width": 576,
				"height": 768
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/n1oonqpqu8w654x0yxak.jpg",
				"cloudinary_id": "n1oonqpqu8w654x0yxak",
				"width": 392,
				"height": 696
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ds3sshkqyevyddfkzzkl.jpg",
				"cloudinary_id": "ds3sshkqyevyddfkzzkl",
				"width": 392,
				"height": 696
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/goqutpvzsce4woyotten.jpg",
				"cloudinary_id": "goqutpvzsce4woyotten",
				"width": 392,
				"height": 696
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/uaskv3djfpakdn9vrfck.jpg",
				"cloudinary_id": "uaskv3djfpakdn9vrfck",
				"width": 392,
				"height": 696
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/srk5nd25rlgxit42ptzn.jpg",
				"cloudinary_id": "srk5nd25rlgxit42ptzn",
				"width": 392,
				"height": 696
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/gssmdcuuvxoui3ophjat.jpg",
				"cloudinary_id": "gssmdcuuvxoui3ophjat",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/hhjtodsb2h7rwoea8n3o.jpg",
				"cloudinary_id": "hhjtodsb2h7rwoea8n3o",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/m8twz9y5xs8kyouuq3zm.jpg",
				"cloudinary_id": "m8twz9y5xs8kyouuq3zm",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ul16hpwqthbkwe1vbxmt.jpg",
				"cloudinary_id": "ul16hpwqthbkwe1vbxmt",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/isdhrkujwoo6ki3fk4qx.jpg",
				"cloudinary_id": "isdhrkujwoo6ki3fk4qx",
				"width": 1920,
				"height": 1080
			}
		],
		"videos": [
			{
				"name": "Trailer",
				"video_id": "TNzaddydKzg"
			},
			{
				"name": "Trailer",
				"video_id": "wzjuQ3K72u4"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/wtorzpnycbtz8j0skvw4.jpg",
				"cloudinary_id": "wtorzpnycbtz8j0skvw4",
				"width": 400,
				"height": 240
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/wswdqfqeqme0iyvx5y9p.jpg",
				"cloudinary_id": "wswdqfqeqme0iyvx5y9p",
				"width": 400,
				"height": 240
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/auyrudiwbdtmv1gpjq5x.jpg",
				"cloudinary_id": "auyrudiwbdtmv1gpjq5x",
				"width": 400,
				"height": 240
			}
		],
		"videos": [
			{
				"name": "Trailer",
				"video_id": "Ho2aHUf0q-k"
			},
			{
				"name": "Trailer",
				"video_id": "edfK-xzryv4"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/cjnuxitxntxnkjpcrbkd.jpg",
				"cloudinary_id": "cjnuxitxntxnkjpcrbkd",
				"width": 2560,
				"height": 1440
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/v3rrkhc4ygzp6yenwfbp.jpg",
				"cloudinary_id": "v3rrkhc4ygzp6yenwfbp",
				"width": 2560,
				"height": 1440
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/jcixqgqivf9um5ritwcz.jpg",
				"cloudinary_id": "jcixqgqivf9um5ritwcz",
				"width": 2560,
				"height": 1440
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/hjkqircwo6vkljgevmwe.jpg",
				"cloudinary_id": "hjkqircwo6vkljgevmwe",
				"width": 1364,
				"height": 768
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/zqwoeb0jcpzcdmsa1vao.jpg",
				"cloudinary_id": "zqwoeb0jcpzcdmsa1vao",
				"width": 2560,
				"height": 1440
			}
		],
		"videos": [
			{
				"name": "Console Teaser Trailer",
				"video_id": "CH_73PZRkPc"
			},
			{
				"name": "Gameplay Trailer",
				"video_id": "cqJklddIJoY"
			},
			{
				"name": "Story Trailer",
				"video_id": "VuMchwucabo"
			},
			{
				"name": "A Lot of Vices Trailer",
				"video_id": "-HL3LrhFwRU"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/m7d8fc0nsbbgj1htpssq.jpg",
				"cloudinary_id": "m7d8fc0nsbbgj1htpssq",
				"width": 1024,
				"height": 768
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/kuyotrdro1b1i0tevjvp.jpg",
				"cloudinary_id": "kuyotrdro1b1i0tevjvp",
				"width": 1024,
				"height": 768
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/tnt9t6gxk6sgomzyvejo.jpg",
				"cloudinary_id": "tnt9t6gxk6sgomzyvejo",
				"width": 1024,
				"height": 768
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/rmzkqdh4yeooup3nyzf9.jpg",
				"cloudinary_id": "rmzkqdh4yeooup3nyzf9",
				"width": 1024,
				"height": 768
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ldldhzocpgclslaukylr.jpg",
				"cloudinary_id": "ldldhzocpgclslaukylr",
				"width": 1024,
				"height": 768
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/dazhtrzvnw6lwderwjvx.jpg",
				"cloudinary_id": "dazhtrzvnw6lwderwjvx",
				"width": 552,
				"height": 414
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/w0lwnm1yr2p1fbrr4ugy.jpg",
				"cloudinary_id": "w0lwnm1yr2p1fbrr4ugy",
				"width": 552,
				"height": 414
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/yttpqapccrbdm5nodlst.jpg",
				"cloudinary_id": "yttpqapccrbdm5nodlst",
				"width": 406,
				"height": 228
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/tazenbfnbpniarasxedi.jpg",
				"cloudinary_id": "tazenbfnbpniarasxedi",
				"width": 406,
				"height": 228
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/auhkul0hvq8kifrwwsce.jpg",
				"cloudinary_id": "auhkul0hvq8kifrwwsce",
				"width": 406,
				"height": 228
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/jds9eeye16eip2non06t.jpg",
				"cloudinary_id": "jds9eeye16eip2non06t",
				"width": 406,
				"height": 228
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/fx75kbforudie66zxjft.jpg",
				"cloudinary_id": "fx75kbforudie66zxjft",
				"width": 406,
				"height": 228
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/jxaegsf5n2oluuy3jjau.jpg",
				"cloudinary_id": "jxaegsf5n2oluuy3jjau",
				"width": 1136,
				"height": 640
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/nxyhugyszhtv1ggrqq4z.jpg",
				"cloudinary_id": "nxyhugyszhtv1ggrqq4z",
				"width": 1136,
				"height": 640
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/feelb8zxjhik4dzmnnwu.jpg",
				"cloudinary_id": "feelb8zxjhik4dzmnnwu",
				"width": 1136,
				"height": 640
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/xvlehpwxgblpforiagvi.jpg",
				"cloudinary_id": "xvlehpwxgblpforiagvi",
				"width": 1136,
				"height": 640
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/xbxag2j1p2chqge1qbmx.jpg",
				"cloudinary_id": "xbxag2j1p2chqge1qbmx",
				"width": 1136,
				"height": 640
			}
		],
		"videos": [
			{
				"name": "Trailer",
				"video_id": "u4qvU92rBlQ"
			},
			{
				"name": "Teaser",
				"video_id": "yLOaV6HGhWI"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/oh9o0c3d5eo7qnwkm9q2.jpg",
				"cloudinary_id": "oh9o0c3d5eo7qnwkm9q2",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/p5fjuotpkdecuturqw1c.jpg",
				"cloudinary_id": "p5fjuotpkdecuturqw1c",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/wq0tjsduutk6jeaqakrh.jpg",
				"cloudinary_id": "wq0tjsduutk6jeaqakrh",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/dxbpxe7xewmvkz8dnrgp.jpg",
				"cloudinary_id": "dxbpxe7xewmvkz8dnrgp",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/efqqm3t15ey0jlkv0xqv.jpg",
				"cloudinary_id": "efqqm3t15ey0jlkv0xqv",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/wzltqoi9xgmmgimnxsrq.jpg",
				"cloudinary_id": "wzltqoi9xgmmgimnxsrq",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/nfwxynqhormtovylykxr.jpg",
				"cloudinary_id": "nfwxynqhormtovylykxr",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/gxadfrdicxjlraalvltb.jpg",
				"cloudinary_id": "gxadfrdicxjlraalvltb",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/uaxy3tjubonooualy5x8.jpg",
				"cloudinary_id": "uaxy3tjubonooualy5x8",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/l1nbqll4r42lqrz1wesv.jpg",
				"cloudinary_id": "l1nbqll4r42lqrz1wesv",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/bdcceejc2e9vaimn0ngn.jpg",
				"cloudinary_id": "bdcceejc2e9vaimn0ngn",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/giqtb8y4awm9ibt942cn.jpg",
				"cloudinary_id": "giqtb8y4awm9ibt942cn",
				"width": 1920,
				"height": 1080
			}
		],
		"videos": [
			{
				"name": "Discovery Tour Launch Trailer",
				"video_id": "dVotWlthFUE"
			},
			{
				"name": "Launch Trailer",
				"video_id": "axawOROeB-Y"
			},
			{
				"name": "European Launch Trailer",
				"video_id": "nbdhYTSy9Js"
			},
			{
				"name": "Post-Launch Trailer",
				"video_id": "mhGr6uyR7Nw"
			},
			{
				"name": "Sand Cinematic Trailer",
				"video_id": "Q04Cb3A_M2o"
			},
			{
				"name": "Developer Diary: Video Hieroglyphics Project",
				"video_id": "Jm93FuJyQXA"
			},
			{
				"name": "Order of the Ancient Trailer",
				"video_id": "gczocLl14_U"
			},
			{
				"name": "Gamescom 2017: Cinematic Trailer",
				"video_id": "oMK0oVxA_TU"
			},
			{
				"name": "Gamescom 2017: Game of Power Trailer",
				"video_id": "7rbsIDwYW3Y"
			},
			{
				"name": "E3 2017: World Premiere Gameplay Trailer",
				"video_id": "L3wlPbf6JKQ"
			},
			{
				"name": "Trailer",
				"video_id": "YX0fd4q0baQ"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/tqs3n75gsobukdgpfwhg.jpg",
				"cloudinary_id": "tqs3n75gsobukdgpfwhg",
				"width": 1920,
				"height": 1057
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/pmxxwfn6fc9tkmn2g7nn.jpg",
				"cloudinary_id": "pmxxwfn6fc9tkmn2g7nn",
				"width": 1920,
				"height": 1057
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/gqkfxlxvdhhp5kxlti2g.jpg",
				"cloudinary_id": "gqkfxlxvdhhp5kxlti2g",
				"width": 1920,
				"height": 1057
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/enswvcj4rjbrjrytzo8v.jpg",
				"cloudinary_id": "enswvcj4rjbrjrytzo8v",
				"width": 1920,
				"height": 1057
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/xxvslxiqx4fhhhkm6tqh.jpg",
				"cloudinary_id": "xxvslxiqx4fhhhkm6tqh",
				"width": 1920,
				"height": 1057
			}
		],
		"videos": [
			{
				"name": "Trailer",
				"video_id": "U6l0cgd0SoY"
			},
			{
				"name": "Trailer",
				"video_id": "44O5p9tyTeo"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ulmcojxhz6wowpi2aepw.jpg",
				"cloudinary_id": "ulmcojxhz6wowpi2aepw",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/vgm8raladus7nbwgfxvr.jpg",
				"cloudinary_id": "vgm8raladus7nbwgfxvr",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/kulwkgjilisjhwnbc5yq.jpg",
				"cloudinary_id": "kulwkgjilisjhwnbc5yq",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/fzm4fgu3jwt4ea1hsmsi.jpg",
				"cloudinary_id": "fzm4fgu3jwt4ea1hsmsi",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/usko0uy41lmewlolvz7z.jpg",
				"cloudinary_id": "usko0uy41lmewlolvz7z",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/tntt02saxzoz5v2yla2y.jpg",
				"cloudinary_id": "tntt02saxzoz5v2yla2y",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ioggt4uksigl5sgvkqp2.jpg",
				"cloudinary_id": "ioggt4uksigl5sgvkqp2",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/mcyygkfh8axs1gdt5un0.jpg",
				"cloudinary_id": "mcyygkfh8axs1gdt5un0",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/hlnycopxbsfatxqtxmec.jpg",
				"cloudinary_id": "hlnycopxbsfatxqtxmec",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/tep78zhnecmalbk7uiv6.jpg",
				"cloudinary_id": "tep78zhnecmalbk7uiv6",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/kcc43jzagznmzcjiltfg.jpg",
				"cloudinary_id": "kcc43jzagznmzcjiltfg",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/qihbcfxq36li3o51dns3.jpg",
				"cloudinary_id": "qihbcfxq36li3o51dns3",
				"width": 1920,
				"height": 1080
			}
		],
		"videos": [
			{
				"name": "Trailer",
				"video_id": "ambIyxY0t_k"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/xw3g08virdxjothitnyt.jpg",
				"cloudinary_id": "xw3g08virdxjothitnyt",
				"width": 640,
				"height": 480
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/glr1cs3rl76cq8v97w1t.jpg",
				"cloudinary_id": "glr1cs3rl76cq8v97w1t",
				"width": 640,
				"height": 480
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/zb3rs5qmymseswlbdoal.jpg",
				"cloudinary_id": "zb3rs5qmymseswlbdoal",
				"width": 640,
				"height": 480
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ixofjeik0mvfp9sieali.jpg",
				"cloudinary_id": "ixofjeik0mvfp9sieali",
				"width": 963,
				"height": 722
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/eq8oljj1ft75i0zua2mv.jpg",
				"cloudinary_id": "eq8oljj1ft75i0zua2mv",
				"width": 963,
				"height": 722
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/pehtgzvljwjyig0cij4m.jpg",
				"cloudinary_id": "pehtgzvljwjyig0cij4m",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ligjttefrdukizbdrbox.jpg",
				"cloudinary_id": "ligjttefrdukizbdrbox",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/vtoxbyjf1zmwwt9kgqj0.jpg",
				"cloudinary_id": "vtoxbyjf1zmwwt9kgqj0",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/oyjkr5019qkwzvy49c3h.jpg",
				"cloudinary_id": "oyjkr5019qkwzvy49c3h",
				"width": 1280,
				"height": 720
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/cs3qhqguabintk6sxcs1.jpg",
				"cloudinary_id": "cs3qhqguabintk6sxcs1",
				"width": 1280,
				"height": 720
			}
		],
		"videos": [
			{
				"name": "Trailer",
				"video_id": "RnfH0vD9GDk"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/hw9qqyfpwhndi7waanaq.jpg",
				"cloudinary_id": "hw9qqyfpwhndi7waanaq",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ouq0ogrypuvd5h7khxix.jpg",
				"cloudinary_id": "ouq0ogrypuvd5h7khxix",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/wdqkq77z1a6f1koyqzsi.jpg",
				"cloudinary_id": "wdqkq77z1a6f1koyqzsi",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/pftfeecbbknqv5sgmfhq.jpg",
				"cloudinary_id": "pftfeecbbknqv5sgmfhq",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/yzct0jtjavaalwsoksrt.jpg",
				"cloudinary_id": "yzct0jtjavaalwsoksrt",
				"width": 1920,
				"height": 1080
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/fkuj5b3okn70lurbcq4w.jpg",
				"cloudinary_id": "fkuj5b3okn70lurbcq4w",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/dlfhv0fbu6ga9a4obcu4.jpg",
				"cloudinary_id": "dlfhv0fbu6ga9a4obcu4",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/dmcwucnmexmetfyl07ut.jpg",
				"cloudinary_id": "dmcwucnmexmetfyl07ut",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/fxfxvz4htlb5gjao5f9e.jpg",
				"cloudinary_id": "fxfxvz4htlb5gjao5f9e",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/w8ev7ynhhn6z21x4i6mi.jpg",
				"cloudinary_id": "w8ev7ynhhn6z21x4i6mi",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/xw6gspao7h6mcywr42tp.jpg",
				"cloudinary_id": "xw6gspao7h6mcywr42tp",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/bus9ijch2ng9cuhxf5lp.jpg",
				"cloudinary_id": "bus9ijch2ng9cuhxf5lp",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/in7answkgpvbq50tz3xj.jpg",
				"cloudinary_id": "in7answkgpvbq50tz3xj",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/vu8innacggzyaickj5nc.jpg",
				"cloudinary_id": "vu8innacggzyaickj5nc",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/c5zorocgxswmdkkzravo.jpg",
				"cloudinary_id": "c5zorocgxswmdkkzravo",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/hplpn9hsynnoolmde0it.jpg",
				"cloudinary_id": "hplpn9hsynnoolmde0it",
				"width": 3840,
				"height": 2160
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/jkoxjv7qf2wx0hnnl4ad.jpg",
				"cloudinary_id": "jkoxjv7qf2wx0hnnl4ad",
				"width": 3840,
				"height": 2160
			}
		],
		"videos": [
			{
				"name": "Launch Trailer",
				"video_id": "fI8Fq5FjJ_k"
			},
			{
				"name": "Human Faction Trailer",
				"video_id": "rta1okRW8HE"
			},
			{
				"name": "Elvish Faction Trailer",
				"video_id": "3pgCp3gCkFs"
			},
			{
				"name": "Cinematic Trailer",
				"video_id": "_sxUehc6g1Q"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/aljcjzcbkv1cfsizyetb.jpg",
				"cloudinary_id": "aljcjzcbkv1cfsizyetb",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/fwgykf6zduu6xtoyh4ap.jpg",
				"cloudinary_id": "fwgykf6zduu6xtoyh4ap",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/oktni7jnthp8bakgla69.jpg",
				"cloudinary_id": "oktni7jnthp8bakgla69",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/nibagf81e4kpppjcfkuu.jpg",
				"cloudinary_id": "nibagf81e4kpppjcfkuu",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/jjwueagkfkcmw2m0blmk.jpg",
				"cloudinary_id": "jjwueagkfkcmw2m0blmk",
				"width": 1920,
				"height": 1080
			}
		],
		"videos": [
			{
				"name": "Trailer",
				"video_id": "yvsP1svZFKg"
			},
			{
				"name": "Heroes Trailer",
				"video_id": "9zjeOjWtKqs"
			},
			{
				"name": "E3 2017 Game Demo",
				"video_id": "lQnPUAb7cOo"
			},
			{
				"name": "Trailer",
				"video_id": "_q51LZ2HpbE"
			},
			{
				"name": "Trailer",
				"video_id": "Kae-JjbLsgA"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/uols5jinxtna1w9dgxdw.jpg",
				"cloudinary_id": "uols5jinxtna1w9dgxdw",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ta5m1c6vp6226kdblwge.jpg",
				"cloudinary_id": "ta5m1c6vp6226kdblwge",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/opsyuak5nsg11p9wvqcj.jpg",
				"cloudinary_id": "opsyuak5nsg11p9wvqcj",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/nknebu6mov0enphbwxib.jpg",
				"cloudinary_id": "nknebu6mov0enphbwxib",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/bwjri6c8g1n94haoztgm.jpg",
				"cloudinary_id": "bwjri6c8g1n94haoztgm",
				"width": 1920,
				"height": 1080
			}
		],
		"videos": [
			{
				"name": "Gameplay video",
				"video_id": "cyJMA0-3i4U"
			},
			{
				"name": "Teaser",
				"video_id": "wi0Uq7QmKm4"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/z5t0yuhyiiui1ickwhgj.jpg",
				"cloudinary_id": "z5t0yuhyiiui1ickwhgj",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/farvemmmxav0bgt6wx7t.jpg",
				"cloudinary_id": "farvemmmxav0bgt6wx7t",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/em1y2ugcwy2myuhvb9db.jpg",
				"cloudinary_id": "em1y2ugcwy2myuhvb9db",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/usxccsncekxg0wd1v6ee.jpg",
				"cloudinary_id": "usxccsncekxg0wd1v6ee",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/mnljdjtrh44x4snmierh.jpg",
				"cloudinary_id": "mnljdjtrh44x4snmierh",
				"width": 1920,
				"height": 1080
			}
		],
		"videos": [
			{
				"name": "10th Anniversary Video",
				"video_id": "ZpiczsigQto"
			},
			{
				"name": "The Begining trailer",
				"video_id": "5nLipy-Z4yo"
			},
			{
				"name": "Killing Monsters Cinematic Trailer",
				"video_id": "FP7no968jVU"
			},
			{
				"name": "Downwarren Gameplay Video",
				"video_id": "_IBAovRNCuA"
			},
			{
				"name": "Opening Cinematic: The Trail",
				"video_id": "QrwGXAcE6ZA"
			},
			{
				"name": "Elder Blood Trailer",
				"video_id": "6f8TbvsZ5Mk"
			},
			{
				"name": "Recap",
				"video_id": "bcEAsOC_8L0"
			},
			{
				"name": "TV Spot",
				"video_id": "xQGam9OHSUo"
			},
			{
				"name": "Rage & Steel Trailer",
				"video_id": "p14dHAwLOmo"
			},
			{
				"name": "A Night to Remember Trailer",
				"video_id": "8ZLfJjlZKvc"
			},
			{
				"name": "Debut Gameplay Trailer",
				"video_id": "sb81f-ejNSI"
			},
			{
				"name": "Developer Diary: Creating the Sound",
				"video_id": "yowv6_rspoM"
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
		"screenshots": [
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/nmuz3tmvxva1nqhjaxvn.jpg",
				"cloudinary_id": "nmuz3tmvxva1nqhjaxvn",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/r3qos1ovmkboaskqmhtp.jpg",
				"cloudinary_id": "r3qos1ovmkboaskqmhtp",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/ymxy2otllrluvcqwnyhk.jpg",
				"cloudinary_id": "ymxy2otllrluvcqwnyhk",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/d0s5upisfnao3h3jdsib.jpg",
				"cloudinary_id": "d0s5upisfnao3h3jdsib",
				"width": 1920,
				"height": 1080
			},
			{
				"url": "//images.igdb.com/igdb/image/upload/t_thumb/m9mdkmpv1efkc2nmxqlt.jpg",
				"cloudinary_id": "m9mdkmpv1efkc2nmxqlt",
				"width": 1920,
				"height": 1080
			}
		],
		"videos": [
			{
				"name": "Trailer",
				"video_id": "awh2XU3WrWI"
			},
			{
				"name": "Trailer",
				"video_id": "z6ejXKYCZCM"
			},
			{
				"name": "Launch Trailer",
				"video_id": "pKYmtZp2WLI"
			},
			{
				"name": "E3 2017: Our Darkest Hour Trailer",
				"video_id": "7hv_WKKszaQ"
			},
			{
				"name": "Zavala's Prelude Trailer",
				"video_id": "F0XTAagQi80"
			},
			{
				"name": "Featurette 1",
				"video_id": "wGgB7b8CQJA"
			},
			{
				"name": "Featurette 2",
				"video_id": "Bk96j7lH12E"
			},
			{
				"name": "Featurette 3",
				"video_id": "qvwhTQzP9vk"
			},
			{
				"name": "Gameplay Reveal Trailer",
				"video_id": "aBQw8gjnzRs"
			},
			{
				"name": "Rally The Troops Trailer",
				"video_id": "np4Y9PyUUzs"
			},
			{
				"name": "A Long Day Trailer",
				"video_id": "-J5nhJuXO8A"
			}
		],
		"cover": {
			"url": "//images.igdb.com/igdb/image/upload/t_thumb/orklbkpdl7ujiojb9ibf.jpg",
			"cloudinary_id": "orklbkpdl7ujiojb9ibf",
			"width": 1440,
			"height": 2160
		}
  }])
    .then(games => console.log(`${games.length} games created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
