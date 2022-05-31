const chains = {
	"cosmos":
	{
		"id": "atom",
		"name": "Cosmos Hub",
		"chain_id": "cosmoshub-4",
		"rpc": [
			{
				"address": "https://rpc-cosmoshub.blockapsis.com",
				"provider": "chainapsis"
			},
			{
				"address": "https://cosmoshub.validator.network/",
				"provider": "validatornetwork"
			},
			{
				"address": "https://cosmoshub-4.technofractal.com:443",
				"provider": "strangelove-ventures"
			},
			{
				"address": "https://rpc.cosmos.network:443",
				"provider": "tendermint-inc"
			},
			{
				"address": "https://rpc-cosmoshub.ecostake.com",
				"provider": "ecostake"
			},
			{
				"address": "https://rpc.cosmoshub.pupmos.network",
				"provider": "pupmos"
			},
			{
				"address": "https://cosmos-rpc.polkachu.com",
				"provider": "Polkachu"
			},
			{
				"address": "https://rpc.cosmos.ezstaking.io",
				"provider": "EZStaking.io"
			},
			{
				"address": "https://rpc-cosmoshub-ia.notional.ventures/",
				"provider": "Notional"
			}
		],
		"address": "cosmos1ewn73qp0aqrtya38p0nv5c2xsshdea7a92xsq2",
		"amount": "1",
		"fee": "25000",
		"gas": "80000",
		"denom": "uatom",
		"explorer": "https://www.mintscan.io/cosmos/txs/",
		"merge": 1
	},
	"chihuahua":
	{
		"id": "huahua",
		"name": "Chihuahua",
		"chain_id": "chihuahua-1",
		"rpc": [
			{
				"address":"https://rpc.chihuahua.wtf/",
				"provider":"Chihuahua"
			},
			{
				"address":"https://rpc-chihuahua.ecostake.com/",
				"provider":"ecostake"
			},
			{
				"address":"https://chihuahua-rpc.polkachu.com/",
				"provider":"Polkachu"
			},
			{
				"address":"https://rpc-chihuahua-ia.notional.ventures/",
				"provider":"Notional"
			}
		],
		"address": "chihuahua1ewn73qp0aqrtya38p0nv5c2xsshdea7axlt7pg",
		"amount": "1",
		"fee": "25000",
		"gas": "80000",
		"denom": "uhuahua",
		"explorer": "https://www.mintscan.io/chihuahua/txs/",
		"merge": 1
	},
	"cerberus":
	{
		"id": "crbrus",
		"name": "Cerberus",
		"chain_id": "cerberus-chain-1",
		"rpc": [
			{
				"address": "https://rpc.cerberus.zone:26657",
				"provider": "Cerberus"
			},
			{
				"address": "https://rpc-cerberus.ecostake.com",
				"provider": "ecostake"
			},
			{
				"address": "https://cerberus-rpc.polkachu.com",
				"provider": "Polkachu"
			},
			{
				"address": "https://rpc-cerberus-ia.notional.ventures",
				"provider": "Notional"
			}
		],		
		"address": "cerberus1v4xjvmka36peq6lp2vahxax96540nek5dlfdkt",
		"amount": "1",
		"fee": "5000",
		"gas": "200000",
		"denom": "ucrbrus",
		"explorer": "https://ping.pub/cerberus/tx/",
		"merge": 1
	},
	"comdex":
	{
		"id": "cmdx",
		"name": "Comdex",
		"chain_id": "comdex-1",
		"rpc": [
			{
				"address": "https://api.comdex.audit.one/rpc",
				"provider": "audit"
			},
			{
				"address": "https://rpc.comdex.one",
				"provider": "comdex"
			},
			{
				"address": "http://comdex.node.vitwit.com:26657/",
				"provider": "vitwit"
			},
			{
				"address": "https://rpc-comdex.zenchainlabs.io/",
				"provider": "zenchainlabs"
			},
			{
				"address": "https://comdex-rpc.polkachu.com",
				"provider": "Polkachu"
			},
			{
				"address": "https://rpc.comdex.ezstaking.io",
				"provider": "EZStaking.io"
			},
			{
				"address": "https://rpc-comdex-ia.notional.ventures/",
				"provider": "Notional"
			}
		],
		"address": "comdex1ewn73qp0aqrtya38p0nv5c2xsshdea7az9yjea",
		"amount": "1",
		"fee": "2000",
		"gas": "80000",
		"denom": "ucmdx",
		"explorer": "https://www.mintscan.io/comdex/txs/",
		"merge": 1
	},
	"bostrom":
	{
		"id": "boot",
		"name": "Cyber",
		"chain_id": "bostrom",
		"rpc": [
			{
				"address": "https://rpc.bostrom.cybernode.ai",
				"provider": "cybercongress"
			},
			{
				"address": "https://rpc.cyber.posthuman.digital",
				"provider": "posthuman"
			},
			{
				"address": "https://rpc-cyber-ia.notional.ventures/",
				"provider": "Notional"
			}
		],
		"address": "bostrom1ewn73qp0aqrtya38p0nv5c2xsshdea7axejr7d",
		"amount": "1",
		"fee": "2000",
		"gas": "80000",
		"denom": "boot",
		"explorer": "https://ping.pub/bostrom/tx/",
		"merge": 1
	},
	"fet":
	{
		"id": "fet",
		"name": "Fetch Hub",
		"chain_id": "fetchhub-4",
		"rpc": [
			{
				"address": "https://rpc-fetchhub.fetch.ai:443",
				"provider": "fetch.ai"
			},
			{
				"address": "https://rpc-fetchhub-ia.notional.ventures/",
				"provider": "Notional"
			}
		],
		"address": "fetch1ewn73qp0aqrtya38p0nv5c2xsshdea7akh05za",
		"amount": "1",
		"fee": "2000",
		"gas": "80000",
		"denom": "afet",
		"explorer": "https://www.mintscan.io/fetchai/txs/",
		"merge": 1
	},
	"graviton":
	{
		"id": "graviton",
		"name": "Gravity Bridge",
		"chain_id": "gravity-bridge-3",
		"rpc": [
			{
				"address": "https://gravitychain.io:26657",
				"provider": "althea"
			},
			{
				"address": "http://gravity-bridge-1-08.nodes.amhost.net:26657",
				"provider": "amhost"
			},
			{
				"address": "https://gravity-rpc.polkachu.com",
				"provider": "Polkachu"
			},
			{
				"address": "https://rpc.gravity-bridge.ezstaking.io",
				"provider": "EZStaking.io"
			},
			{
				"address": "https://rpc-gravitybridge-ia.notional.ventures/",
				"provider": "Notional"
			}
		],
		"address": "gravity1ewn73qp0aqrtya38p0nv5c2xsshdea7ap65g9z",
		"amount": "1",
		"fee": "2000",
		"gas": "80000",
		"denom": "ugraviton",
		"explorer": "https://www.mintscan.io/gravity-bridge/txs/",
		"merge": 1
	},
	"juno":
	{
		"id": "juno",
		"name": "Juno",
		"chain_id": "juno-1",
		"rpc": [
			{
				"address": "https://rpc-juno.itastakers.com",
				"provider": "itastakers"
			},
			{
				"address": "https://rpc-juno.ecostake.com",
				"provider": "ecostake"
			},
			{
				"address": "https://juno-rpc.polkachu.com",
				"provider": "Polkachu"
			},
			{
				"address": "https://rpc.juno.pupmos.network",
				"provider": "pupmos"
			},
			{
				"address": "https://rpc.junomint.com",
				"provider": "EZStaking.io"
			},
			{
				"address": "https://rpc-juno-ia.notional.ventures/",
				"provider": "Notional"
			}
		],
		"address": "juno14hj3ecw0wfaylqm4uakgnq48hvzwqxfdzc9hng",
		"amount": "1",
		"fee": "200",
		"gas": "80000",
		"denom": "ujuno",
		"explorer": "https://www.mintscan.io/juno/txs/",
		"merge": 1,
		"merge_main": 1
	},
	"ki":
	{
		"id": "ki",
		"name": "Ki",
		"chain_id": "kichain-2",
		"rpc": [
			{
				"address": "https://rpc-mainnet.blockchain.ki",
				"provider": "kifoundation"
			},
			{
				"address": "https://kichain-rpc.polkachu.com",
				"provider": "Polkachu"
			},
			{
				"address": "https://rpc.kichain.ezstaking.io",
				"provider": "EZStaking.io"
			},
			{
				"address": "https://rpc-kichain-ia.notional.ventures/",
				"provider": "Notional"
			}
		],
		"address": "ki1ewn73qp0aqrtya38p0nv5c2xsshdea7a58hly7",
		"amount": "1",
		"fee": "2000",
		"gas": "80000",
		"denom": "uxki",
		"explorer": "https://www.mintscan.io/ki-chain/txs/",
		"merge": 1
	},
	"like":
	{
		"id": "like",
		"name": "LikeCoin",
		"chain_id": "likecoin-mainnet-2",
		"rpc": [
			{
				"address": "https://mainnet-node.like.co/rpc/",
				"provider": "like.co"
			},
			{
				"address": "https://rpc-likecoin-ia.notional.ventures/",
				"provider": "Notional"
			}
		],
		"address": "cosmos1ewn73qp0aqrtya38p0nv5c2xsshdea7a92xsq2",
		"amount": "1",
		"fee": "2000",
		"gas": "80000",
		"denom": "nanolike",
		"explorer": "https://likecoin.bigdipper.live/transactions/",
		"merge": 1
	},
	"lum":
	{
		"id": "lum",
		"name": "Lum Network",
		"chain_id": "lum-network-1",
		"rpc": [
			{
				"address": "https://node0.mainnet.lum.network/rpc",
				"provider": "Lum Foundation"
			}
		],
		"address": "lum1ewn73qp0aqrtya38p0nv5c2xsshdea7asqme47",
		"amount": "1",
		"fee": "2000",
		"gas": "80000",
		"denom": "ulum",
		"explorer": "https://www.mintscan.io/lum/txs/",
		"merge": 0
	},
	"mantle":
	{
		"id": "mantle",
		"name": "Asset Mantle",
		"chain_id": "mantle-1",
		"rpc": [
			{
				"address": "https://rpc.assetmantle.one/",
				"provider": "AssetMantle"
			},
			{
				"address": "https://rpc-assetmantle.ecostake.com",
				"provider": "ecostake"
			},
			{
				"address": "https://assetmantle-rpc.polkachu.com",
				"provider": "Polkachu"
			},
			{
				"address": "https://rpc.asset-mantle.ezstaking.io",
				"provider": "EZStaking.io"
			},
			{
				"address": "https://rpc-assetmantle-ia.notional.ventures/",
				"provider": "Notional"
			}
		],
		"address": "mantle1ewn73qp0aqrtya38p0nv5c2xsshdea7amwa4lq",
		"amount": "1",
		"fee": "2000",
		"gas": "80000",
		"denom": "umntl",
		"explorer": "https://www.mintscan.io/asset-mantle/txs/",
		"merge": 1
	},
	"panacea":
	{
		"id": "panacea",
		"name": "Panacea",
		"chain_id": "panacea-3",
		"rpc": [
			{
				"address": "https://rpc.gopanacea.org",
				"provider": "medibloc"
			}
		],
		"address": "panacea1vrrak9037p3l5ha25u48dm89esjlc4k86jvtwn",
		"amount": "1",
		"fee": "2000",
		"gas": "80000",
		"denom": "umed",
		"explorer": "https://www.mintscan.io/medibloc/txs/",
		"merge": 0
	},
	"odin":
	{
		"id": "odin",
		"name": "OdinChain",
		"chain_id": "odin-mainnet-freya",
		"rpc": [
			{
				"address": "http://34.79.179.216:26657",
				"provider": "Odin Protocol"
			}
		],
		"address": "odin1ewn73qp0aqrtya38p0nv5c2xsshdea7ap2qnvq",
		"amount": "1",
		"fee": "2000",
		"gas": "80000",
		"denom": "loki",
		"explorer": "https://mainnet.odinprotocol.io/transactions/",
		"merge": 1
	},
	"osmo":
	{
		"id": "osmo",
		"name": "Osmosis",
		"chain_id": "osmosis-1",
		"rpc": [
			{
				"address": "https://rpc.osmosis.zone/",
				"provider": "Osmosis Foundation"
			},
			{
				"address": "https://osmosis.validator.network/",
				"provider": "validatornetwork"
			},
			{
				"address": "https://rpc-osmosis.blockapsis.com",
				"provider": "chainapsis"
			},
			{
				"address": "https://rpc-osmosis.ecostake.com",
				"provider": "ecostake"
			},
			{
				"address": "https://osmosis-rpc.polkachu.com",
				"provider": "Polkachu"
			},
			{
				"address": "https://rpc-osmosis-ia.notional.ventures/",
				"provider": "Notional"
			}			
		],
		"address": "osmo1ewn73qp0aqrtya38p0nv5c2xsshdea7ad34qkc",
		"amount": "1",
		"fee": "2000",
		"gas": "80000",
		"denom": "uosmo",
		"explorer": "https://www.mintscan.io/osmosis/txs/",
		"merge": 1
	},
	"persistence":
	{
		"id": "xprt",
		"name": "Persistence",
		"chain_id": "core-1",
		"rpc": [
			{
				"address": "https://rpc.core.persistence.one",
				"provider": "persistence"
			},
			{
				"address": "https://rpc-persistent-ia.notional.ventures/",
				"provider": "Notional"
			}
		],
		"address": "persistence1hng2gvz7p7983fsw5a8fpzdfqmw6eg7pv46ngk",
		"amount": "1",
		"fee": "2000",
		"gas": "80000",
		"denom": "uxprt",
		"explorer": "https://www.mintscan.io/persistence/txs/",
		"merge": 0
	},
	"rizon":
	{
		"id": "rizon",
		"name": "RIZON",
		"chain_id": "titan-1",
		"rpc": [
			{
				"address": "http://seed-1.mainnet.rizon.world:26657",
				"provider": "HDAC Technology AG"
			}
		],
		"address": "rizon1ewn73qp0aqrtya38p0nv5c2xsshdea7axh6pvj",
		"amount": "1",
		"fee": "2000",
		"gas": "80000",
		"denom": "uatolo",
		"explorer": "https://www.mintscan.io/rizon/txs/",
		"merge": 1
	},
	"sif":
	{
		"id": "sif",
		"name": "Sifchain",
		"chain_id": "sifchain-1",
		"rpc": [
			{
				"address": "https://rpc.sifchain.finance:443"
			},
			{
				"address": "https://rpc-archive.sifchain.finance:443"
			},
			{
				"address": "https://sifchain-rpc.polkachu.com",
				"provider": "Polkachu"
			},
			{
				"address": "https://rpc-sifchain-ia.notional.ventures/",
				"provider": "Notional"
			}
		],
		"address": "sif1ewn73qp0aqrtya38p0nv5c2xsshdea7aqhfx0p",
		"amount": "1",
		"fee": "2000",
		"gas": "80000",
		"denom": "urowan",
		"explorer": "https://ping.pub/sifchain/tx/",
		"merge": 1
	},
	"stars":
	{
		"id": "stars",
		"name": "Stargaze",
		"chain_id": "stargaze-1",
		"rpc": [
			{
				"address": "https://rpc.stargaze.pupmos.network/",
				"provider": "pupmos"
			},
			{
				"address": "https://rpc.stargaze-apis.com/",
				"provider": "Stargaze Foundation"
			},
			{
				"address": "https://rpc.stargaze.ezstaking.io/",
				"provider": "EZStaking.io"
			},
			{
				"address": "https://rpc.stars.kingnodes.com/",
				"provider": "kingnodes"
			},
			{
				"address": "https://stargaze-rpc.polkachu.com",
				"provider": "Polkachu"
			},
			{
				"address": "https://rpc-stargaze-ia.notional.ventures/",
				"provider": "Notional"
			}
		],
		"address": "stars1ewn73qp0aqrtya38p0nv5c2xsshdea7a3k3dtm",
		"amount": "1",
		"fee": "2000",
		"gas": "80000",
		"denom": "ustars",
		"explorer": "https://www.mintscan.io/stargaze/txs/",
		"merge": 1
	},
	"star":
	{
		"id": "star",
		"name": "Starname",
		"chain_id": "iov-mainnet-ibc",
		"rpc": [
			{
				"address": "https://rpc-iov.keplr.app",
				"provider": "chainapsis"
			},
			{
				"address": "https://rpc-starname-ia.notional.ventures/",
				"provider": "Notional"
			}
		],
		"address": "star1nldcp56247psmtnezqga3sqsfc7wha8h5vmpsm",
		"amount": "1",
		"fee": "2000",
		"gas": "80000",
		"denom": "uiov",
		"explorer": "https://www.mintscan.io/starname/txs/",
		"merge": 0
	},
	"umee":
	{
		"id": "umee",
		"name": "Umee",
		"chain_id": "umee-1",
		"rpc": [
			{
				"address": "https://rpc.aphrodite.main.network.umee.cc",
				"provider": "umee Foundation"
			},
			{
				"address": "https://rpc.apollo.main.network.umee.cc",
				"provider": "umee Foundation"
			},
			{
				"address": "https://rpc.artemis.main.network.umee.cc",
				"provider": "umee Foundation"
			},
			{
				"address": "https://rpc.athena.main.network.umee.cc",
				"provider": "umee Foundation"
			},
			{
				"address": "https://rpc.beaked.main.network.umee.cc",
				"provider": "umee Foundation"
			},
			{
				"address": "https://rpc.bottlenose.main.network.umee.cc",
				"provider": "umee Foundation"
			},
			{
				"address": "https://umee-rpc.polkachu.com",
				"provider": "Polkachu"
			}
		],
		"address": "umee1ewn73qp0aqrtya38p0nv5c2xsshdea7ahum0yc",
		"amount": "1",
		"fee": "2000",
		"gas": "80000",
		"denom": "uumee",
		"explorer": "https://www.mintscan.io/umee/txs/",
		"merge": 1
	}
}