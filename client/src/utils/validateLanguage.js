function validateLanguage(content) {
    // List of offensive words
    const offensiveWords = ["bomb", "explosion",
        "explosives",
        "explosive",
        "killing",
        "kill",
        "pay",
        "deadly",
        "murder",
        "death",
        "hate",
        "violence",
        "attack",
        "assault",
        "threat",
        "dangerous",
        "weapon",
        "war",
        "fight",
        "hurt",
        "injure",
        "pain",
        "suffering",
        "destroy",
        "damage",
        "harm",
        "abuse",
        "racist",
        "sexist",
        "homophobic",
        "transphobic",
        "xenophobic",
        "bigot",
        "nazi",
        "terrorist",
        "suicide",
        "threatening",
        "harassment",
        "bully",
        "rape",
        "sexual",
        "abusive",
        "offensive",
        "disgusting",
        "vulgar",
        "obscene",
        "profanity",
        "obscenity",
        "blasphemy",
        "curse",
        "damn",
        "hell",
        "damnation",
        "hellfire",
        "satan",
        "devil",
        "demon",
        "witch",
        "cult",
        "evil",
        "sinister",
        "wicked",
        "demonic",
        "satanic",
        "hellish",
        "fiendish",
        "diabolical",
        "macabre",
        "morbid",
        "grotesque",
        "gruesome",
        "ghastly",
        "horrific",
        "frightening",
        "terrifying",
        "menacing",
        "scary",
        "creepy",
        "spooky",
        "eerie",
        "haunted",
        "sin",
        "vice",
        "corruption",
        "depravity",
        "decadence",
        "immorality",
        "perversion",
        "degenerate",
        "perverse",
        "deviant",
        "twisted",
        "sick",
        "disturbed",
        "psychotic",
        "mad",
        "insane",
        "crazy",
        "lunatic",
        "maniac",
        "deranged",
        "unhinged",
        "delusional",
        "paranoid",
        "schizophrenic",
        "antisocial",
        "psychopath",
        "sociopath",
        "narcissist",
        "egotistical",
        "selfish",
        "egotistic",
        "self-centered",
        "self-absorbed",
        "conceited",
        "arrogant",
        "pompous",
        "smug",
        "haughty",
        "snobbish",
        "pretentious",
        "holier-than-thou",
        "condescending",
        "patronizing",
        "disrespectful",
        "rude",
        "insulting",
        "offensive",
        "vulgar",
        "crude",
        "obscene",
        "coarse",
        "indecent",
        "lewd",
        "lascivious",
        "salacious",
        "perverted",
        "degenerate",
        "immoral",
        "corrupt",
        "vicious",
        "wicked",
        "sinful",
        "evil",
        "malicious",
        "cruel",
        "brutal",
        "savage",
        "ferocious",
        "barbaric",
        "inhumane",
        "monstrous",
        "diabolical",
        "demonic",
        "devilish",
        "fiendish",
        "vile",
        "repulsive",
        "disgusting",
        "revolting",
        "abhorrent",
        "appalling",
        "hateful",
        "obnoxious",
        "noxious",
        "noxious",
        "repugnant",
        "detestable",
        "despicable",
        "contemptible",
        "odious",
        "unsavory",
        "unpleasant",
        "grotesque",
        "horrible",
        "dreadful",
        "awful",
        "hideous",
        "frightful",
        "terrifying",
        "ghastly",
        "macabre",
        "gruesome",
        "horrifying",
        "nightmarish",
        "shocking",
        "fuck",
        "mf",
        "motherfucker",
        "mother-fucker",
        "motherfucker",
        "sister-fucker",
        "fucker",
        "bkl",
        "bsdk",
        "abominable",
        "lousy",
        "atrocious",
        "outrageous",
        "infamous",
        "villainous",
        "nefarious",
        "perfidious",
        "treacherous",
        "unscrupulous",
        "dishonest",
        "deceitful",
        "untrustworthy",
        "corrupt",
        "immoral",
        "unethical",
        "sinister",
        "underhanded",
        "sneaky",
        "sly",
        "cunning",
        "crafty",
        "wily",
        "bhosidke",
        "madarchod",
        "chod",
        "devious",
        "duplicitous",
        "twisted",
        "diabolical",
        "villainous",
        "cruel",
        "sadistic",
        "wicked",
        "heinous",
        "vile",
        "brutal",
        "barbaric",
        "inhumane",
        "malevolent",
        "malicious",
        "evil",
        "pernicious",
        "destructive",
        "harmful",
        "deadly",
        "lethal",
        "fatal",
        "murderous",
        "homicidal",
        "suicidal",
        "malignant",
        "venomous",
        "toxic",
        "poisonous",
        "noxious",
        "corrosive",
        "deleterious",
        "injurious",
        "damaging",
        "destructive",
        "devastating",
        "ruinous",
        "disastrous",
        "catastrophic",
        "calamitous",
        "tragic",
        "cataclysmic",
        "apocalyptic",
        "cancerous",
        "malignant",
        "corrupt",
        "rotten",
        "decaying",
        "putrid",
        "foul",
        "rancid",
        "moldy",
        "spoiled",
        "infected",
        "diseased",
        "pestilent",
        "contaminated",
        "viral",
        "bacterial",
        "parasitic",
        "fungus",
        "worm",
        "vermin",
        "pest",
        "insect",
        "bug",
        "roach",
        "fly",
        "mosquito",
        "gnat",
        "flea",
        "tick",
        "louse",
        "maggot",
        "spider",
        "scorpion",
        "snake",
        "rat",
        "mouse",
        "rodent",
        "squirrel",
        "bat",
        "bird",
        "crow",
        "pigeon",
        "seagull",
        "vulture",
        "owl",
        "hawk",
        "eagle",
        "falcon",
        "raven",
        "parrot",
        "songbird",
        "swallow",
        "finch",
        "sparrow",
        "warbler",
        "bitch",
        "slut",
        "thrush",
        "wren",
        "robin",
        "blackbird",
        "starling",
        "oriole",
        "titmouse",
        "chickadee",
        "bluebird",
        "cardinal",
        "jays",
        "magpie",
        "woodpecker",
        "nuthatch",
        "kingfisher",
        "heron",
        "egret",
        "stork",
        "crane",
        "pelican",
        "ibis",
        "flamingo",
        "duck",
        "goose",
        "swan",
        "cormorant",
        "albatross",
        "petrel",
        "tern",
        "gull",
        "puffin",
        "auk",
        "guillemot",
        "murre",
        "dove",
        "pigeon",
        "quail",
        "partridge",
        "pheasant",
        "grouse",
        "turkey",
        "chicken",
        "duck",
        "goose",
        "swan",
        "cum",
        "penguin",
        "albatross",
        "pelican",
        "heron",
        "stork",
        "crane",
        "egret",
        "flamingo",
        "vulture",
        "buzzard",
        "condor",
        "kite",
        "osprey",
        "harrier",
        "eagle",
        "hawk",
        "falcon",
        "kestrel",
        "merlin",
        "sparrowhawk",
        "goshawk",
        "red-tailed hawk",
        "cooper's hawk",
        "sharp-shinned hawk",
        "red-shouldered hawk",
        "bald eagle",
        "golden eagle",
        "osprey",
        "black vulture",
        "turkey vulture",
        "gyrfalcon",
        "peregrine falcon",
        "kestrel",
        "merlin",
        "goshawk",
        "sparrowhawk",
        "hawk",
        "buzzard",
        "vulture",
        "eagle",
        "falcon",
        "harrier",
        "osprey",
        "kite",
        "semen",
        "boobs",
        "breast",
        "landa",
        "jhant ke bal",
        "jhant",
        "augur buzzard",
        "jackal buzzard",
        "honey buzzard",
        "black-shouldered kite",
        "white-tailed kite",
        "red kite",
        "black kite",
        "lammergeier",
        "bearded vulture",
        "egyptian vulture",
        "griffon vulture",
        "hawk",
        "buteo",
        "eagle",
        "accipiter",
        "falcon",
        "osprey",
        "kite",
        "vulture",
        "maa dar chod",
        "harrier",
        "falconiform",
        "accipitriform",
        "hieron hawk",
        "shrike",
        "kestrel",
        "red kite",
        "harrier",
        "owl",
        "vulture"];

    // Convert content to lowercase for case-insensitive comparison
    const lowerContent = content.toLowerCase();

    // console.log(lowerContent);

    // Check if any offensive word is present in the content
    for (const word of offensiveWords) {
        if (lowerContent.includes(word)) {
            return true;
        }
    }

    // No offensive word found
    return false;
}
export default validateLanguage;