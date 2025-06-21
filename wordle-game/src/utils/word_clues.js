const wordClues = [
    {
        "word": "aback",
        "clue": "\"Taken off guard, literally.\""
    },
    {
        "word": "assay",
        "clue": "\"Test or evaluate something's quality, as in a chemical analysis process\""
    },
    {
        "word": "blurb",
        "clue": "Here's a possible clue:\n\n\"Fleeting summary\""
    },
    {
        "word": "chafe",
        "clue": "\"Irritation that wears thin over time\""
    },
    {
        "word": "craze",
        "clue": "\"Fad of the moment, perhaps in fashion.\""
    },
    {
        "word": "draft",
        "clue": "\"Unfinished work, often literally, as in the first version of this word.\""
    },
    {
        "word": "faint",
        "clue": "\"Weak signal\""
    },
    {
        "word": "front",
        "clue": "\"Leading position or surface feature.\""
    },
    {
        "word": "guess",
        "clue": "\"Take an educated stab at, often literally.\""
    },
    {
        "word": "itchy",
        "clue": "\"Prickly feeling that won't quit.\""
    },
    {
        "word": "lucky",
        "clue": "\"Having an unexpectedly favorable outcome.\""
    },
    {
        "word": "music",
        "clue": "\"Felt by many, but heard by few.\""
    },
    {
        "word": "perch",
        "clue": "\"Resting place on a bird's back, perhaps.\""
    },
    {
        "word": "queer",
        "clue": "\"Feeling of uncertainty or confusion about one's identity\""
    },
    {
        "word": "rupee",
        "clue": "\"Indian currency unit\""
    },
    {
        "word": "shrug",
        "clue": "\"Dismissive gesture often accompanied by a 'I don't know' response.\""
    },
    {
        "word": "sperm",
        "clue": "\"Tiny male reproductive cell\""
    },
    {
        "word": "swear",
        "clue": "\" Express strong displeasure or frustration, often with an oath\"."
    },
    {
        "word": "track",
        "clue": "\"Path that's often followed by athletes or trains?\""
    },
    {
        "word": "vital",
        "clue": "\"Essential to life or success.\""
    },
    {
        "word": "abase",
        "clue": "\"Reduce to a state of low esteem or discredit utterly.\""
    },
    {
        "word": "asset",
        "clue": "\"Favorable investment, perhaps.\""
    },
    {
        "word": "blurt",
        "clue": "\"Spontaneously utter something, often with regret.\""
    },
    {
        "word": "chaff",
        "clue": "\"Remnant of grain after harvesting.\""
    },
    {
        "word": "crazy",
        "clue": "\"Unhinged and out of control\""
    },
    {
        "word": "drain",
        "clue": "\"Faucet function that keeps water away.\""
    },
    {
        "word": "fairy",
        "clue": "Floral dweller, often of myth and legend."
    },
    {
        "word": "frost",
        "clue": "\"Early morning chill\""
    },
    {
        "word": "guest",
        "clue": "\"Visitor to someone else's home?\""
    },
    {
        "word": "ivory",
        "clue": "\"Material prized in piano keys and decorative art.\""
    },
    {
        "word": "lumen",
        "clue": "\"Light measurement unit, literally meaning 'light' in Latin.\""
    },
    {
        "word": "musky",
        "clue": "\"Unpleasantly sweet or earthy, like damp fur.\""
    },
    {
        "word": "peril",
        "clue": "\"Harbinger of trouble or risk in a challenging situation.\""
    },
    {
        "word": "quell",
        "clue": "\"Temper with force to avoid unrest\""
    },
    {
        "word": "rural",
        "clue": "\"Country landscape feature, not typically in a city\""
    },
    {
        "word": "shuck",
        "clue": "Remove the outer layer of something, such as an ear of corn?"
    },
    {
        "word": "spice",
        "clue": "\"A pinch of this adds flavor to many dishes.\""
    },
    {
        "word": "sweat",
        "clue": "\"Perspiration's byproduct, often on a summer hike.\""
    },
    {
        "word": "tract",
        "clue": "\"Piece of land, literally and figuratively\""
    },
    {
        "word": "vivid",
        "clue": "Vibrant scene or artist's touch"
    },
    {
        "word": "abate",
        "clue": "\"Reduce in severity, as a storm's intensity\""
    },
    {
        "word": "atoll",
        "clue": "Island formation that often forms in coral reefs?"
    },
    {
        "word": "blush",
        "clue": "Feminine flush of color?"
    },
    {
        "word": "chain",
        "clue": "\"Connection that links together, literally or figuratively.\""
    },
    {
        "word": "creak",
        "clue": "\"Faint sound of old wood under pressure\""
    },
    {
        "word": "drake",
        "clue": "\"Rapper whose stage name is a nod to his hometown, Toronto's nickname\""
    },
    {
        "word": "faith",
        "clue": "Belief in something or someone, especially when held strongly and without question."
    },
    {
        "word": "froth",
        "clue": "\"Foamy topping on a cappuccino or beer?\""
    },
    {
        "word": "guide",
        "clue": "\"Pathfinder in a literal or figurative sense.\""
    },
    {
        "word": "jaunt",
        "clue": "\"Leisurely trip or excursion, often taken with friends?\""
    },
    {
        "word": "lumpy",
        "clue": "\"A rough, uneven texture.\""
    },
    {
        "word": "musty",
        "clue": "\"Foul-smelling as an old attic.\""
    },
    {
        "word": "perky",
        "clue": "\"Feeling or demeanor like a bouncy spring?\""
    },
    {
        "word": "query",
        "clue": "\"Question or inquiry, often prefaced with 'what'?\""
    },
    {
        "word": "rusty",
        "clue": "\"Like old farm equipment after years of disuse.\""
    },
    {
        "word": "shunt",
        "clue": "\"Redirect or divert, often in an informal or unexpected way.\""
    },
    {
        "word": "spicy",
        "clue": "\"Adding to the heat of this dish.\""
    },
    {
        "word": "sweep",
        "clue": "\"Cleaning tool, literally?\""
    },
    {
        "word": "trade",
        "clue": "\"Deal made in exchange for something of value\""
    },
    {
        "word": "vixen",
        "clue": "Feminine feline figure in folklore, often depicted as sly and cunning."
    },
    {
        "word": "abbey",
        "clue": "\"A monastery's structure, often historic and imposing\""
    },
    {
        "word": "atone",
        "clue": "\"Make amends to erase past regrets\""
    },
    {
        "word": "board",
        "clue": "\"Surface used to play cards or build something?\""
    },
    {
        "word": "chair",
        "clue": "\"Furniture piece often found in a study or home office.\""
    },
    {
        "word": "cream",
        "clue": "\"Richer by half, this dairy product is often used in coffee.\""
    },
    {
        "word": "drama",
        "clue": "\"Type of play or scene characterized by intense emotions and conflict.\""
    },
    {
        "word": "fancy",
        "clue": "\"Elegant or ornate style\""
    },
    {
        "word": "frown",
        "clue": "\"Furrowed face expression\""
    },
    {
        "word": "guild",
        "clue": "\"Organization with its own code of conduct and often exclusive membership requirements.\""
    },
    {
        "word": "jazzy",
        "clue": "\"Impressively funky and cool\""
    },
    {
        "word": "lunar",
        "clue": "\"Associated with the moon's cycles, in space.\""
    },
    {
        "word": "myrrh",
        "clue": "\"Aromatic resin from the Commiphora tree, often used in perfumes and incense.\""
    },
    {
        "word": "pesky",
        "clue": "\"This persistent annoyance might just get on your nerves.\""
    },
    {
        "word": "quest",
        "clue": "\"Journey to fulfill a noble goal, often with great effort and perseverance.\""
    },
    {
        "word": "sadly",
        "clue": "\"Fateful outcome, literally\""
    },
    {
        "word": "shush",
        "clue": "\"Quietly ask someone to fall silent\""
    },
    {
        "word": "spied",
        "clue": "\"Caught in the act of spying\""
    },
    {
        "word": "sweet",
        "clue": "\"Describing something that's pleasingly pleasant.\""
    },
    {
        "word": "trail",
        "clue": "\"Path that nature has worn over time\""
    },
    {
        "word": "vocal",
        "clue": "\"Expressing emotions, literally.\""
    },
    {
        "word": "abbot",
        "clue": "\"High-ranking cleric in a monastery.\""
    },
    {
        "word": "attic",
        "clue": "\"Increased storage space often found above a house.\""
    },
    {
        "word": "boast",
        "clue": "\"Talk excessively about one's accomplishments\""
    },
    {
        "word": "chalk",
        "clue": "\"Write-on writing tool, often found on blackboards.\""
    },
    {
        "word": "credo",
        "clue": "Philosophical stance often found in the writings of a particular individual or school of thought."
    },
    {
        "word": "drank",
        "clue": "\"Fermented beverage that I may have consumed.\""
    },
    {
        "word": "fanny",
        "clue": "\"Part of the human anatomy that's often the subject of discomfort during long bike rides.\""
    },
    {
        "word": "froze",
        "clue": "\"Stopped in its tracks due to icy conditions\""
    },
    {
        "word": "guile",
        "clue": "\"Crafty trick or deceitful tactic, often used to gain an advantage.\""
    },
    {
        "word": "jelly",
        "clue": "\"Soft spread often served on toast.\""
    },
    {
        "word": "lunch",
        "clue": "\"Filling between breakfast and dinner\""
    },
    {
        "word": "nadir",
        "clue": "\"Lowest point in a life's journey or fortunes.\""
    },
    {
        "word": "pesto",
        "clue": "\"Classic Italian sauce, often served with pasta.\""
    },
    {
        "word": "queue",
        "clue": "Long line of people waiting, often in a public place?"
    },
    {
        "word": "safer",
        "clue": "\"More secure in an accident?\""
    },
    {
        "word": "shyly",
        "clue": "\"Blushing in quiet reserve, this adverb describes a modest demeanor.\""
    },
    {
        "word": "spiel",
        "clue": "\"Sales pitch often associated with a snake oil salesman.\""
    },
    {
        "word": "swell",
        "clue": "\"Increasing in size or value\""
    },
    {
        "word": "train",
        "clue": "\"Ferocious beast with sharp tusks and a long trunk.\""
    },
    {
        "word": "vodka",
        "clue": "\"Strong spirit from Russia\"."
    },
    {
        "word": "abhor",
        "clue": "\"Strongly disapprove of, as a politician might\""
    },
    {
        "word": "audio",
        "clue": "\"Sound source that's always on the beat.\""
    },
    {
        "word": "bobby",
        "clue": "\"Nickname for Bobby Fischer, the American chess champion.\""
    },
    {
        "word": "champ",
        "clue": "\"Winner of a boxing title, or perhaps a student's boast?\""
    },
    {
        "word": "creed",
        "clue": "\"Belief that forms the foundation of a person or group.\""
    },
    {
        "word": "drape",
        "clue": "\"Folded piece of fabric that's draped across furniture\""
    },
    {
        "word": "farce",
        "clue": "\"Comedy of exaggerated proportions\""
    },
    {
        "word": "fruit",
        "clue": "\"Eating companion of many breakfasts.\""
    },
    {
        "word": "guilt",
        "clue": "\"Regret that lingers long after a past mistake.\""
    },
    {
        "word": "jerky",
        "clue": "\"Dried meat snack, often carried on long hikes\""
    },
    {
        "word": "lunge",
        "clue": "\"A long, athletic leap forward\""
    },
    {
        "word": "naive",
        "clue": "\"Uninformed in worldly matters, perhaps.\""
    },
    {
        "word": "petal",
        "clue": "\"Delicate part of a flower?\""
    },
    {
        "word": "quick",
        "clue": "\"Moving rapidly, like a speeding bullet.\""
    },
    {
        "word": "saint",
        "clue": "\"Inspiring figure often depicted in art or revered by Catholics\""
    },
    {
        "word": "siege",
        "clue": "\"Blockade of sorts, as in prolonged investment of a fortified place.\""
    },
    {
        "word": "spike",
        "clue": "\"Pointed protrusion on a cactus or sword.\""
    },
    {
        "word": "swept",
        "clue": "\"Cleaned away with great efficiency, like autumn leaves.\""
    },
    {
        "word": "trait",
        "clue": "\"Characteristic that defines someone or something.\""
    },
    {
        "word": "vogue",
        "clue": "Fashionably forward, this verb has been a defining feature of high society since 1892."
    },
    {
        "word": "abide",
        "clue": "\"Respectfully accept or follow a rule or instruction\""
    },
    {
        "word": "audit",
        "clue": "\"Official review of financial records, often required by law.\""
    },
    {
        "word": "boney",
        "clue": "\"Relating to skeletal remains.\""
    },
    {
        "word": "chant",
        "clue": "\"Repeating phrase often led by a group or crowd.\""
    },
    {
        "word": "creek",
        "clue": "\"Small stream often found in woodland areas.\""
    },
    {
        "word": "drawl",
        "clue": "Southern accent flair."
    },
    {
        "word": "fatal",
        "clue": "Cause of a character's demise in a novel or film?"
    },
    {
        "word": "fudge",
        "clue": "\"Rich dessert with nuts and chocolate chips.\""
    },
    {
        "word": "guise",
        "clue": "\"Disguise, literally\""
    },
    {
        "word": "jetty",
        "clue": "\"Structure built out over water?\""
    },
    {
        "word": "lupus",
        "clue": "\"Autoimmune disease also known as the 'wolf's curse'\""
    },
    {
        "word": "nanny",
        "clue": "\"Female caregiver in charge of young children.\""
    },
    {
        "word": "petty",
        "clue": "Small in importance or size, like a trifle."
    },
    {
        "word": "quiet",
        "clue": "\"Unobtrusive sound level, or afternoon nap time\""
    },
    {
        "word": "salad",
        "clue": "\"Green and crunchy dish often served with dressing.\""
    },
    {
        "word": "sieve",
        "clue": "\"Tool used to separate grains from liquid.\""
    },
    {
        "word": "spiky",
        "clue": "\"Like a cactus, or a punk's hairstyle\""
    },
    {
        "word": "swift",
        "clue": "\"Agile and fleet-footed, like a deer\""
    },
    {
        "word": "tramp",
        "clue": "\"Person living on the streets, or a rustic traveler.\""
    },
    {
        "word": "voice",
        "clue": "\"Sound that carries through the air.\""
    },
    {
        "word": "abled",
        "clue": "\"Empowered or gifted in some way\""
    },
    {
        "word": "augur",
        "clue": "\"Fellowship of ancient Roman augurs\"?"
    },
    {
        "word": "bongo",
        "clue": "\"Sound made on an African drum.\""
    },
    {
        "word": "chaos",
        "clue": "\"State of utter disorder or confusion\"."
    },
    {
        "word": "creep",
        "clue": "\"Movement that makes someone feel uneasy\""
    },
    {
        "word": "drawn",
        "clue": "\"Moved with the pencil?\""
    },
    {
        "word": "fatty",
        "clue": "\"Rich in grease or oil.\""
    },
    {
        "word": "fugue",
        "clue": "\"Complex musical piece with repeated melodic themes.\""
    },
    {
        "word": "gulch",
        "clue": "\"Small, secluded valley or ravine\""
    },
    {
        "word": "jewel",
        "clue": "\"Treasured gem, often set in a ring.\""
    },
    {
        "word": "lurch",
        "clue": "\"Stiffen up, as if from a dream\""
    },
    {
        "word": "nasal",
        "clue": "\"Mouth's neighboring area\""
    },
    {
        "word": "phase",
        "clue": "\"Stage in a project's development?\""
    },
    {
        "word": "quill",
        "clue": "\"Focal point of a writer's tool.\""
    },
    {
        "word": "sally",
        "clue": "Flapper's nickname, or \"soul sister\" colloquially."
    },
    {
        "word": "sight",
        "clue": "View from a high point."
    },
    {
        "word": "spill",
        "clue": "\"Drop something unexpectedly\""
    },
    {
        "word": "swill",
        "clue": "\"Unappetizing drink often associated with sailors.\""
    },
    {
        "word": "trash",
        "clue": "\"Disposal remnants, often found in alleys.\""
    },
    {
        "word": "voila",
        "clue": "French culinary gesture, literally translated as \"there it is\""
    },
    {
        "word": "abode",
        "clue": "\"Home address, literally,\""
    },
    {
        "word": "aunty",
        "clue": "\"Relative of your parent who's often associated with baking and bad jokes.\""
    },
    {
        "word": "bonus",
        "clue": "\"Additional payment beyond what's expected\""
    },
    {
        "word": "chard",
        "clue": "\"Green leafy vegetable often paired with lentils.\""
    },
    {
        "word": "creme",
        "clue": "Flaky pastry delight."
    },
    {
        "word": "dread",
        "clue": "\"Fearful anticipation of something unpleasant\""
    },
    {
        "word": "fault",
        "clue": "\"Gap in the argument or geological formation.\""
    },
    {
        "word": "fully",
        "clue": "\"Completely, without exception.\""
    },
    {
        "word": "gully",
        "clue": "\"Rural feature with steep sides, often prone to flooding.\""
    },
    {
        "word": "jiffy",
        "clue": "\"Famous fast food brand, often ordered with extra speed.\""
    },
    {
        "word": "lurid",
        "clue": "\"Colorful to a fault, like a lurid movie poster\"."
    },
    {
        "word": "nasty",
        "clue": "\"Unpleasantly disposed or feeling, like a spoiled meal.\""
    },
    {
        "word": "phone",
        "clue": "\"Device used to make calls and access info?\""
    },
    {
        "word": "quilt",
        "clue": "\"Layered textile for warmth and decoration.\""
    },
    {
        "word": "salon",
        "clue": "\"Where hair stylists hold court, figuratively or literally.\""
    },
    {
        "word": "sigma",
        "clue": "\"Math symbol indicating variation or spread\""
    },
    {
        "word": "spilt",
        "clue": "\"Lost liquid, like coffee from an open cup\""
    },
    {
        "word": "swine",
        "clue": "\"Farm animals often raised for their meat.\""
    },
    {
        "word": "trawl",
        "clue": "Fisherman's method of slowly dragging a net along the ocean floor."
    },
    {
        "word": "vomit",
        "clue": "\"Regretful expulsion of contents\"."
    },
    {
        "word": "abort",
        "clue": "\"Interrupt or terminate a pregnancy\""
    },
    {
        "word": "avail",
        "clue": "\"Have access to something at your disposal\""
    },
    {
        "word": "booby",
        "clue": "\"A decoy trap used by sailors to protect themselves from pirates.\""
    },
    {
        "word": "charm",
        "clue": "\"Captivating quality that wins hearts.\""
    },
    {
        "word": "crepe",
        "clue": "\"Thin French pancake delight.\""
    },
    {
        "word": "dream",
        "clue": "\"Sleepytime vision or fantasy\"?"
    },
    {
        "word": "fauna",
        "clue": "\"Class of living creatures found in nature and the wild.\""
    },
    {
        "word": "fungi",
        "clue": "\"Type of organism that causes mold and mildew.\""
    },
    {
        "word": "gumbo",
        "clue": "\"Louisiana dish made with okra and dark roux.\""
    },
    {
        "word": "joint",
        "clue": "\"Point where two bones meet?\""
    },
    {
        "word": "lusty",
        "clue": "\"Feeling of unbridled passion, literally.\""
    },
    {
        "word": "natal",
        "clue": "\"Pertaining to or occurring at birth\""
    },
    {
        "word": "phony",
        "clue": "\"Fake or deceitful in nature, like a counterfeit bill.\""
    },
    {
        "word": "quirk",
        "clue": "\"Fascinating individual trait\""
    },
    {
        "word": "salsa",
        "clue": "\"Spicy condiment often served with tortilla chips.\""
    },
    {
        "word": "silky",
        "clue": "\"Like smooth skin or fine fabric?\""
    },
    {
        "word": "spine",
        "clue": "\"Supportive feature of the back, also found in architecture and music.\""
    },
    {
        "word": "swing",
        "clue": "\"Recreational motion on a hammock or playground equipment.\""
    },
    {
        "word": "tread",
        "clue": "\"Step by step, literally\""
    },
    {
        "word": "voter",
        "clue": "Person who casts a ballot in an election."
    },
    {
        "word": "about",
        "clue": "\"Surrounding or encompassing something, literally and figuratively.\""
    },
    {
        "word": "avert",
        "clue": "\"Away from danger or trouble\""
    },
    {
        "word": "boost",
        "clue": "\"Give an extra energy surge to\""
    },
    {
        "word": "chart",
        "clue": "\"Graphical record of earnings or expenses, often displayed monthly.\""
    },
    {
        "word": "crept",
        "clue": "\"Slowly moved in a stealthy manner, as if unseen.\""
    },
    {
        "word": "dress",
        "clue": "\"Fashionable article of clothing\""
    },
    {
        "word": "favor",
        "clue": "\"Thing that is in someone's debt to you\""
    },
    {
        "word": "funky",
        "clue": "\"Far-out, in a musical sense, or a vibe that's offbeat.\""
    },
    {
        "word": "gummy",
        "clue": "\"Like the candy often eaten as a sweet treat.\""
    },
    {
        "word": "joist",
        "clue": "\"Horizontal beam in a frame or structure\""
    },
    {
        "word": "lying",
        "clue": "\"Taking something for more than it's worth\""
    },
    {
        "word": "naval",
        "clue": "\"Fitting to sail on the seas\""
    },
    {
        "word": "photo",
        "clue": "\"Image captured by a camera.\""
    },
    {
        "word": "quite",
        "clue": "\"Extremely or very\""
    },
    {
        "word": "salty",
        "clue": "Flavor often found in seaweed or pretzels?"
    },
    {
        "word": "silly",
        "clue": "\"Acting foolishly, perhaps in a comedic role.\""
    },
    {
        "word": "spiny",
        "clue": "Prickly in appearance, as some cacti or thistles might be."
    },
    {
        "word": "swirl",
        "clue": "\"Motion of water or smoke around an object?\""
    },
    {
        "word": "treat",
        "clue": "\"Something sweet or special to receive\""
    },
    {
        "word": "vouch",
        "clue": "\"Assert with confidence\""
    },
    {
        "word": "above",
        "clue": "\"Position over or overlooking something\""
    },
    {
        "word": "avian",
        "clue": "\"Relating to or characteristic of birds.\""
    },
    {
        "word": "booth",
        "clue": "\"Small enclosed space, often with back support.\""
    },
    {
        "word": "chase",
        "clue": "\"Follower in pursuit of something or someone\""
    },
    {
        "word": "cress",
        "clue": "\"Tiny, peppery green often used in salads.\""
    },
    {
        "word": "dried",
        "clue": "\"Desiccated to the point of being shriveled, this state is often used to describe a piece of leather.\""
    },
    {
        "word": "feast",
        "clue": "\"Formal occasion with abundant food and drink.\""
    },
    {
        "word": "funny",
        "clue": "\"Amusingly ridiculous\""
    },
    {
        "word": "guppy",
        "clue": "Small freshwater fish often kept as a pet, also used to describe something tiny or insignificant."
    },
    {
        "word": "joker",
        "clue": "\"Person who's always good for a laugh, often in a card game.\""
    },
    {
        "word": "lymph",
        "clue": "Fluid connection to the immune system"
    },
    {
        "word": "navel",
        "clue": "\"Body part that's the center of your belly button.\""
    },
    {
        "word": "piano",
        "clue": "Instrument often played in classical music and homes alike."
    },
    {
        "word": "quota",
        "clue": "\"Share of a limit, perhaps imposed by an employer.\""
    },
    {
        "word": "salve",
        "clue": "\"Medicinal ointment or balm, often used to soothe skin irritations.\""
    },
    {
        "word": "since",
        "clue": "\"Time period of interest or attention\""
    },
    {
        "word": "spire",
        "clue": "\"Heightened architectural feature\"."
    },
    {
        "word": "swish",
        "clue": "\"Sound of a paddle or tennis racket in motion.\""
    },
    {
        "word": "trend",
        "clue": "\"Pattern that's catching on in fashion or popular culture?\""
    },
    {
        "word": "vowel",
        "clue": "\"Sound that's often paired with consonants in words\""
    },
    {
        "word": "abuse",
        "clue": "\"Unwanted treatment of someone or something, often with negative consequences.\""
    },
    {
        "word": "avoid",
        "clue": "\"Avoid, as pitfalls or temptations\""
    },
    {
        "word": "booty",
        "clue": "\"Part of the lower back?\""
    },
    {
        "word": "chasm",
        "clue": "\"Deep, usually narrow, opening in the earth's surface?\""
    },
    {
        "word": "crest",
        "clue": "\"Fancy monogram often on a royal family's shield\""
    },
    {
        "word": "drier",
        "clue": "\"Less humid than usual\""
    },
    {
        "word": "fecal",
        "clue": "\"Relating to dung or excrement\"."
    },
    {
        "word": "furor",
        "clue": "\"Frenzied outcry, often followed by 'and'.\""
    },
    {
        "word": "gusto",
        "clue": "\"This Spanish phrase roughly translates to 'with great enthusiasm'\"."
    },
    {
        "word": "jolly",
        "clue": "\"Feeling of festive cheer\""
    },
    {
        "word": "lyric",
        "clue": "\"Song's poetic part\""
    },
    {
        "word": "needy",
        "clue": "Desire for constant attention or support?"
    },
    {
        "word": "picky",
        "clue": "\"Highly finicky, like a gourmet eater.\""
    },
    {
        "word": "quote",
        "clue": "\"Statement that's often set in stone.\""
    },
    {
        "word": "salvo",
        "clue": "\"Firefighter's explosive signal, in a row.\""
    },
    {
        "word": "sinew",
        "clue": "\"Fiber that makes muscles strong\""
    },
    {
        "word": "spite",
        "clue": "\"Feeling of bitter resentment, especially towards someone who has wronged you.\""
    },
    {
        "word": "swoon",
        "clue": "\"Feminine flutter in a romantic drama.\""
    },
    {
        "word": "triad",
        "clue": "\"Group of three, often in harmony.\""
    },
    {
        "word": "vying",
        "clue": "\"Engaging in competition, often literally.\""
    },
    {
        "word": "abyss",
        "clue": "\"Deep hole in the earth or sea\"."
    },
    {
        "word": "await",
        "clue": "\"Sit in silence, awaiting an event or person.\""
    },
    {
        "word": "booze",
        "clue": "\"Adult's evening libation, in a nutshell.\""
    },
    {
        "word": "cheap",
        "clue": "\"Frugal in nature, fitting this description.\""
    },
    {
        "word": "crick",
        "clue": "\"Folks in England, often outdoors.\""
    },
    {
        "word": "drift",
        "clue": "\"Falling or moving slowly away from a center point.\""
    },
    {
        "word": "feign",
        "clue": "\"Act out pretending to be something or someone you're not, for example.\""
    },
    {
        "word": "furry",
        "clue": "\"Characteristics of a cuddly pet, literally.\""
    },
    {
        "word": "gusty",
        "clue": "\"Frequent blustery atmosphere, perhaps after a storm\""
    },
    {
        "word": "joust",
        "clue": "\"Tournament test of medieval knightly prowess.\""
    },
    {
        "word": "macaw",
        "clue": "\"Vibrant bird of tropical regions.\""
    },
    {
        "word": "neigh",
        "clue": "\"Sound made by a horse in distress\"."
    },
    {
        "word": "piece",
        "clue": "\"Small part of something often included in a puzzle.\""
    },
    {
        "word": "quoth",
        "clue": "\"A phrase used to express a quoted statement.\""
    },
    {
        "word": "sandy",
        "clue": "\"Coastal terrain description, often found in beach scenes.\""
    },
    {
        "word": "singe",
        "clue": "Clue: \"Remove all of your eyebrows, briefly\""
    },
    {
        "word": "splat",
        "clue": "\"Sound of something hitting a wall with great impact.\""
    },
    {
        "word": "swoop",
        "clue": "\"A swift, sweeping movement of the arm\""
    },
    {
        "word": "trial",
        "clue": "\"A test of guilt or innocence\""
    },
    {
        "word": "wacky",
        "clue": "Flaky or unconventional character."
    },
    {
        "word": "acorn",
        "clue": "\"Tiny tree seed often used in baking.\""
    },
    {
        "word": "awake",
        "clue": "\"Morning state of being\"."
    },
    {
        "word": "boozy",
        "clue": "\"Drunk to the core, with an affinity for beer?\""
    },
    {
        "word": "cheat",
        "clue": "\"Deceiver in a game of chance or wits.\""
    },
    {
        "word": "cried",
        "clue": "\"Expression of sadness or despair, often accompanied by tears.\""
    },
    {
        "word": "drill",
        "clue": "\"Tool used to make holes quickly.\""
    },
    {
        "word": "fella",
        "clue": "\"Colloquial term for a man or gentleman?\""
    },
    {
        "word": "fussy",
        "clue": "\"Highly particular in habits or tastes.\""
    },
    {
        "word": "gypsy",
        "clue": "\"Free-spirited traveler from Eastern Europe.\""
    },
    {
        "word": "judge",
        "clue": "\"A person who hears cases in court\""
    },
    {
        "word": "macho",
        "clue": "\"Characteristic of a man's ego?\""
    },
    {
        "word": "nerdy",
        "clue": "\"Bookworm-like, in a certain social circle.\""
    },
    {
        "word": "piety",
        "clue": "\"Devout behavior, perhaps displayed on Sundays.\""
    },
    {
        "word": "rabbi",
        "clue": "\"Title given to a Jewish spiritual leader.\""
    },
    {
        "word": "saner",
        "clue": "\"Out of control, in a more level head\""
    },
    {
        "word": "siren",
        "clue": "\"Song of a sea monster?\""
    },
    {
        "word": "split",
        "clue": "\"Divide into two parts\""
    },
    {
        "word": "sword",
        "clue": "\"A cutting tool often worn by knights in olden times\""
    },
    {
        "word": "tribe",
        "clue": "\"Group of people with shared ancestry or culture\""
    },
    {
        "word": "wafer",
        "clue": "\"Thin, crisp treat often used as a cookie base.\""
    },
    {
        "word": "acrid",
        "clue": "\"Having a harsh, biting quality.\""
    },
    {
        "word": "award",
        "clue": "\"Recognition given to outstanding achievement.\""
    },
    {
        "word": "borax",
        "clue": "\"Sodium-based mineral often used as laundry detergent booster.\""
    },
    {
        "word": "check",
        "clue": "\"Verify or confirm, as with a bank statement\""
    },
    {
        "word": "crier",
        "clue": "\"Sound of a loudmouthed public figure.\""
    },
    {
        "word": "drink",
        "clue": "\"Fountain's output, perhaps\""
    },
    {
        "word": "felon",
        "clue": "\"Convicted offender with a permanent record.\""
    },
    {
        "word": "fuzzy",
        "clue": "\"Soft to the touch, like a pet's coat?\""
    },
    {
        "word": "habit",
        "clue": "\"Routine behavior that's easy to get stuck on.\""
    },
    {
        "word": "juice",
        "clue": "\"Freshly extracted drink, perhaps after breakfast.\""
    },
    {
        "word": "macro",
        "clue": "\"Scale factor in science and design\""
    },
    {
        "word": "nerve",
        "clue": "\"Bundle of fibers that transmits signals within the body.\""
    },
    {
        "word": "piggy",
        "clue": "\"Small pig's home, often found under beds.\""
    },
    {
        "word": "rabid",
        "clue": "\"Frenzied with a deadly bite.\""
    },
    {
        "word": "sappy",
        "clue": "\"Overly sentimental, as a romantic comedy.\""
    },
    {
        "word": "sissy",
        "clue": "Flaky or overly delicate person, often in a teasing manner."
    },
    {
        "word": "spoil",
        "clue": "\"Ruining something's quality with rottenness or excess.\""
    },
    {
        "word": "swore",
        "clue": "\"I vowed to behave, but ended up\""
    },
    {
        "word": "trice",
        "clue": "\"A pause, as in 'wait a minute, trice'\""
    },
    {
        "word": "wager",
        "clue": "\"Bet or gamble, perhaps at a casino.\""
    },
    {
        "word": "actor",
        "clue": "\"Stage presence expert\"."
    },
    {
        "word": "aware",
        "clue": "\"Having knowledge of or perception of something, or being in the know.\""
    },
    {
        "word": "borne",
        "clue": "\"Carried or originated from a place, as a child was born.\""
    },
    {
        "word": "cheek",
        "clue": "\"Facial feature that blushes easily.\""
    },
    {
        "word": "crime",
        "clue": "\"Act that's punishable by law, literally.\""
    },
    {
        "word": "drive",
        "clue": "\"Powering forward with this verb.\""
    },
    {
        "word": "femme",
        "clue": "French term for \"woman\" or \"girlishly feminine\"."
    },
    {
        "word": "gaffe",
        "clue": "\"Faux pas, or embarrassing mistake\""
    },
    {
        "word": "hairy",
        "clue": "\"Covered in a thick, fuzzy coat.\""
    },
    {
        "word": "juicy",
        "clue": "\"Freshly picked, this adjective describes a ripe and succulent treat.\""
    },
    {
        "word": "madam",
        "clue": "Title of respect in certain formal settings?"
    },
    {
        "word": "never",
        "clue": "\"Something that will always be lacking.\""
    },
    {
        "word": "pilot",
        "clue": "\"Person in charge of an aircraft.\""
    },
    {
        "word": "racer",
        "clue": "\"Speedster in a sports car?\""
    },
    {
        "word": "sassy",
        "clue": "\"Fiercely confident attitude often accompanied by a sharp tongue.\""
    },
    {
        "word": "sixth",
        "clue": "\"Position in a counting sequence that's always half way between odd and even.\""
    },
    {
        "word": "spoke",
        "clue": "\"Like the wheel of a bicycle.\""
    },
    {
        "word": "sworn",
        "clue": "\"Having made an oath or vow\""
    },
    {
        "word": "trick",
        "clue": "\"Deception tactic with a sly or cunning edge.\""
    },
    {
        "word": "wagon",
        "clue": "\"Vehicle often used to haul farm equipment, furniture, or other heavy loads.\""
    },
    {
        "word": "acute",
        "clue": "\"Sharp in both senses, or a certain medical condition.\""
    },
    {
        "word": "awash",
        "clue": "\"Overwhelmed by water, as in a flooded area.\""
    },
    {
        "word": "bosom",
        "clue": "\"Close companion's area of warmth and affection\""
    },
    {
        "word": "cheer",
        "clue": "\"Expression of enthusiasm, as in 'Go team!'\""
    },
    {
        "word": "crimp",
        "clue": "\"In music, a hairstyle that's often associated with 80s rock.\""
    },
    {
        "word": "droit",
        "clue": "French for \"right\" or \"law\", often associated with the concept of habeas corpus."
    },
    {
        "word": "femur",
        "clue": "\"Long bone of the human leg, literally 'femur' in Latin\""
    },
    {
        "word": "gaily",
        "clue": "\"Flirtatiously, or with bright cheer\""
    },
    {
        "word": "halve",
        "clue": "\"Divide into two equal parts\""
    },
    {
        "word": "jumbo",
        "clue": "Flavor of Jolly Green Giant?"
    },
    {
        "word": "madly",
        "clue": "\"Fondly and intensely, as in a passionate crush.\""
    },
    {
        "word": "newer",
        "clue": "\"Fresh from the factory, this term describes something that has been recently produced.\""
    },
    {
        "word": "pinch",
        "clue": "\"Small grip, as in a delicate hold?\""
    },
    {
        "word": "radar",
        "clue": "\"System used to detect and locate objects using radio waves.\""
    },
    {
        "word": "satin",
        "clue": "Silk fabric with a smooth, lustrous finish."
    },
    {
        "word": "sixty",
        "clue": "\"Number of years in a six-decade cycle.\""
    },
    {
        "word": "spoof",
        "clue": "\"Mimicking someone or something, often in a humorous way.\""
    },
    {
        "word": "swung",
        "clue": "\"Moved with a rhythmic motion, like a pendulum.\""
    },
    {
        "word": "tried",
        "clue": "Fruit often picked from the tree that bore it?"
    },
    {
        "word": "waist",
        "clue": "\"Area around your natural mid-section, perhaps where a belt is often found.\""
    },
    {
        "word": "adage",
        "clue": "\"Common saying or phrase?\""
    },
    {
        "word": "awful",
        "clue": "\"Terrible or repulsive, like a bad hangover.\""
    },
    {
        "word": "bossy",
        "clue": "\"Firmly dictating the terms\""
    },
    {
        "word": "chess",
        "clue": "\"Game of strategy played on a square board with pieces.\""
    },
    {
        "word": "crisp",
        "clue": "\"Freshly baked treat.\""
    },
    {
        "word": "droll",
        "clue": "\"With a wry smile, this adjective describes humor that's a bit dry.\""
    },
    {
        "word": "fence",
        "clue": "\"Boundary marker that keeps things contained?\""
    },
    {
        "word": "gamer",
        "clue": "\"Person who beats all the levels.\""
    },
    {
        "word": "handy",
        "clue": "\"Useful to have around.\""
    },
    {
        "word": "jumpy",
        "clue": "\"Frail in temperament, or nervous habit.\""
    },
    {
        "word": "mafia",
        "clue": "\"Secret society with a reputation for ruthless loyalty.\""
    },
    {
        "word": "newly",
        "clue": "\"Recently acquired or changed\""
    },
    {
        "word": "piney",
        "clue": "\"Freshly cut Christmas tree scent often associated with this descriptor.\""
    },
    {
        "word": "radii",
        "clue": "\"Measure of distance from center\""
    },
    {
        "word": "satyr",
        "clue": "\"Moon-god's mythical companion\""
    },
    {
        "word": "skate",
        "clue": "\"Movement achieved with blades.\""
    },
    {
        "word": "spook",
        "clue": "\"Frighten someone with an eerie presence\""
    },
    {
        "word": "synod",
        "clue": "\"A gathering of church leaders\""
    },
    {
        "word": "tripe",
        "clue": "\"Organ with a potentially off-putting texture.\""
    },
    {
        "word": "waive",
        "clue": "\"Release or relinquish an obligation, as in 'to waive your right to appeal'\""
    },
    {
        "word": "adapt",
        "clue": "Fit in or adjust to changing circumstances."
    },
    {
        "word": "awoke",
        "clue": "\"Lost sleep and became aware\""
    },
    {
        "word": "botch",
        "clue": "\"Make a mistake, ruining an otherwise successful outcome\""
    },
    {
        "word": "chest",
        "clue": "\"Where you might stash your summer vacation clothes?\""
    },
    {
        "word": "croak",
        "clue": "\"Sound made by an annoyed frog.\""
    },
    {
        "word": "drone",
        "clue": "\"Flying device controlled from afar\""
    },
    {
        "word": "feral",
        "clue": "\"Describing an animal that's lost its domesticated instincts.\""
    },
    {
        "word": "gamma",
        "clue": "\"In astronomy, a type of radiation that is invisible to the human eye.\""
    },
    {
        "word": "happy",
        "clue": "\"Feeling content or joyful?\""
    },
    {
        "word": "junta",
        "clue": "\"Ruling body in some Latin American countries.\""
    },
    {
        "word": "magic",
        "clue": "\"Spellbinding power with a touch of wonder.\""
    },
    {
        "word": "nicer",
        "clue": "\"More agreeable than before, perhaps.\""
    },
    {
        "word": "pinky",
        "clue": "\"Little finger on the hand\""
    },
    {
        "word": "radio",
        "clue": "Device that broadcasts music and news."
    },
    {
        "word": "sauce",
        "clue": "\"Tasty accompaniment to pasta or pizza.\""
    },
    {
        "word": "skier",
        "clue": "\"Mountain sports enthusiast.\""
    },
    {
        "word": "spool",
        "clue": "\"Round storage container often found in craft rooms.\""
    },
    {
        "word": "syrup",
        "clue": "\"Sweetener often used on pancakes.\""
    },
    {
        "word": "trite",
        "clue": "\"Overused phrase that lacks originality\""
    },
    {
        "word": "waltz",
        "clue": "\"Form of dance often associated with ballgowns and orchestral music\""
    },
    {
        "word": "adept",
        "clue": "\"Skilled in many areas, like a master craftsman.\""
    },
    {
        "word": "axial",
        "clue": "\"Related to the center or spine of something\""
    },
    {
        "word": "bough",
        "clue": "\"Tree branch or part of an evergreen's foliage?\""
    },
    {
        "word": "chick",
        "clue": "\"Female young bird, often found in Easter baskets.\""
    },
    {
        "word": "crock",
        "clue": "\"Potter's vessel with a handle.\""
    },
    {
        "word": "drool",
        "clue": "\"Filthy, sloppy secretions from an overactive salivary gland\""
    },
    {
        "word": "ferry",
        "clue": "\"Vessel that carries people and vehicles across water.\""
    },
    {
        "word": "gamut",
        "clue": "\"Range of emotions or musical notes, often quite extensive.\""
    },
    {
        "word": "hardy",
        "clue": "\"Resilient in the face of adversity.\""
    },
    {
        "word": "junto",
        "clue": "\"Location or place, literally 'together'\""
    },
    {
        "word": "magma",
        "clue": "\"Furnace-like substance beneath the Earth's surface.\""
    },
    {
        "word": "niche",
        "clue": "\"Specialized space or position\""
    },
    {
        "word": "pinto",
        "clue": "\"Small-spotted bean variety.\""
    },
    {
        "word": "rainy",
        "clue": "\"Weather condition often accompanied by an umbrella.\""
    },
    {
        "word": "saucy",
        "clue": "\"Flirtatiously charming, like a sly sauce maker.\""
    },
    {
        "word": "skiff",
        "clue": "\"Small, open boat used for fishing or recreation.\""
    },
    {
        "word": "spoon",
        "clue": "\"Utensil commonly used to scoop and stir food.\""
    },
    {
        "word": "tabby",
        "clue": "\"Furry feline pattern\""
    },
    {
        "word": "troll",
        "clue": "\"Small, typically mischievous creature from European folklore.\""
    },
    {
        "word": "warty",
        "clue": "\"Having or covered in small, bumpy growths.\""
    },
    {
        "word": "adieu",
        "clue": "\"French way of saying goodbye\""
    },
    {
        "word": "axiom",
        "clue": "\"A fundamental principle or statement that is considered self-evidently true.\""
    },
    {
        "word": "boule",
        "clue": "French term for a round loaf of bread."
    },
    {
        "word": "chide",
        "clue": "\"Verbal rebuke, short and sharp\""
    },
    {
        "word": "crone",
        "clue": "\"Aged woman in folklore, often associated with witchcraft.\""
    },
    {
        "word": "droop",
        "clue": "\"Fallen or sagging, like a flower's petals\""
    },
    {
        "word": "fetal",
        "clue": "\"Relating to a baby in its early stages of development.\""
    },
    {
        "word": "gassy",
        "clue": "\" Characterized by unpleasant odors or toots?\""
    },
    {
        "word": "harem",
        "clue": "\"Exotic household arrangement often associated with royal courts.\""
    },
    {
        "word": "juror",
        "clue": "\"Investigator in a trial setting.\""
    },
    {
        "word": "maize",
        "clue": "Flower of the American staple crop."
    },
    {
        "word": "niece",
        "clue": "\"Relative of an aunt.\""
    },
    {
        "word": "piper",
        "clue": "\"Person who leads a band of birds, typically associated with Columbus and his voyage.\""
    },
    {
        "word": "raise",
        "clue": "\"Boost or elevate, perhaps in salary.\""
    },
    {
        "word": "sauna",
        "clue": "\"Cozy heat chamber in many Finnish homes.\""
    },
    {
        "word": "skill",
        "clue": "\"Natural aptitude or talent.\""
    },
    {
        "word": "spore",
        "clue": "\"Tiny reproductive unit of certain plants.\""
    },
    {
        "word": "table",
        "clue": "\"Surface where meals and conversations often take place.\""
    },
    {
        "word": "troop",
        "clue": "\"A group of soldiers or followers?\""
    },
    {
        "word": "waste",
        "clue": "\"Throwaway leftovers, in a colloquial sense.\""
    },
    {
        "word": "admin",
        "clue": "\"Behind-the-scenes office title.\""
    },
    {
        "word": "axion",
        "clue": "\"Rare particle in physics theory, often likened to an invisible force.\""
    },
    {
        "word": "bound",
        "clue": "\"Physically or emotionally tied to something\""
    },
    {
        "word": "chief",
        "clue": "\"Leader in title or position, often with great authority.\""
    },
    {
        "word": "crony",
        "clue": "\"Close friend of questionable loyalty.\""
    },
    {
        "word": "dross",
        "clue": "\"Metallic impurities, often found in the bottom of a furnace.\""
    },
    {
        "word": "fetch",
        "clue": "\"Bring back to its owner, like a dog doing its job\""
    },
    {
        "word": "gaudy",
        "clue": "\"Overly flashy or tawdry, like a Vegas casino lobby.\""
    },
    {
        "word": "harpy",
        "clue": "\"Fairy-like creature from Greek mythology known for its sharp talons and shrill scream.\""
    },
    {
        "word": "kappa",
        "clue": "\"In Japanese folklore, a mischievous water spirit\""
    },
    {
        "word": "major",
        "clue": "\"Main course in a musical scale.\""
    },
    {
        "word": "night",
        "clue": "\"Dusk to dawn, or perhaps just dinner\""
    },
    {
        "word": "pique",
        "clue": "\"Fascination that gets under your skin\""
    },
    {
        "word": "rajah",
        "clue": "\"Regal title in Southeast Asian monarchies\""
    },
    {
        "word": "saute",
        "clue": "\"French cooking technique involving rapid frying in hot oil.\""
    },
    {
        "word": "skimp",
        "clue": "\"Cut corners to save money, in effect\""
    },
    {
        "word": "sport",
        "clue": "\"Activity that's often played in teams with rules and equipment.\""
    },
    {
        "word": "taboo",
        "clue": "\"Socially frowned upon subject\""
    },
    {
        "word": "trope",
        "clue": "\"Familiar literary or cinematic convention\""
    },
    {
        "word": "watch",
        "clue": "\"Monitor life's events, literally?\""
    },
    {
        "word": "admit",
        "clue": "\"Own up to an error, as in 'I apologize'?\""
    },
    {
        "word": "azure",
        "clue": "\"Color of clear summer skies.\""
    },
    {
        "word": "bowel",
        "clue": "\"Digestive system component where waste is stored.\""
    },
    {
        "word": "child",
        "clue": "Miniature version of an adult."
    },
    {
        "word": "crook",
        "clue": "\"Thief with an untrustworthy bent.\""
    },
    {
        "word": "drove",
        "clue": "\"Moved with force, like a farmer's plow.\""
    },
    {
        "word": "fetid",
        "clue": "\"Strongly disagreeing with pleasant surroundings?\""
    },
    {
        "word": "gauge",
        "clue": "\"Fitter's tool, figuratively\""
    },
    {
        "word": "harry",
        "clue": "\"Boy wizard in J.K. Rowling's tales\""
    },
    {
        "word": "karma",
        "clue": "\"Reincarnation concept based on cause-and-effect principles.\""
    },
    {
        "word": "maker",
        "clue": "\"Person responsible for creating something, like an artisan or inventor.\""
    },
    {
        "word": "ninja",
        "clue": "Stealthy warrior of Japanese legend, often trained in the art of disguise and deception."
    },
    {
        "word": "pitch",
        "clue": "\"Music term referring to a singer's tone and quality.\""
    },
    {
        "word": "rally",
        "clue": "\"Call to action, such as at a protest\""
    },
    {
        "word": "savor",
        "clue": "\"Indulge in slowly and thoroughly.\""
    },
    {
        "word": "skirt",
        "clue": "\"Feminine garment that falls just below the knee.\""
    },
    {
        "word": "spout",
        "clue": "\"Device on a faucet that controls water flow.\""
    },
    {
        "word": "tacit",
        "clue": "Unspoken agreement or implication."
    },
    {
        "word": "trout",
        "clue": "\"Fish often found in mountain streams.\""
    },
    {
        "word": "water",
        "clue": "\"Source of aquatic life, often found in the bathroom.\""
    },
    {
        "word": "adobe",
        "clue": "\"Type of earthy building material originally made from sun-dried clay.\""
    },
    {
        "word": "bacon",
        "clue": "\"Breakfast staple often found in a BLT\""
    },
    {
        "word": "boxer",
        "clue": "Fisticuffs often produce one of these."
    },
    {
        "word": "chili",
        "clue": "\"Spicy dish often served at social gatherings.\""
    },
    {
        "word": "cross",
        "clue": "\"Symbol of intersection or a place to meet in the middle.\""
    },
    {
        "word": "drown",
        "clue": "\"Be submerged to the point of distress, literally\"."
    },
    {
        "word": "fetus",
        "clue": "\" unborn baby in development\""
    },
    {
        "word": "gaunt",
        "clue": "\"Thinly lined, like a ghost's face\""
    },
    {
        "word": "harsh",
        "clue": "\"Unyielding in opinion or demeanor.\""
    },
    {
        "word": "kayak",
        "clue": "\"Small watercraft often paddled by two\""
    },
    {
        "word": "mambo",
        "clue": "\"Latin dance style known for its energetic rhythms.\""
    },
    {
        "word": "ninny",
        "clue": "\"Old-fashioned term for an annoying or foolish person, perhaps.\""
    },
    {
        "word": "pithy",
        "clue": "\"Sharp-witted and to the point, like this phrase's meaning.\""
    },
    {
        "word": "ralph",
        "clue": "\"Actor who played Uncle Fester in The Addams Family series\"."
    },
    {
        "word": "savoy",
        "clue": "Famous London theater venue."
    },
    {
        "word": "skulk",
        "clue": "\"Move stealthily, like a prowling animal\""
    },
    {
        "word": "spray",
        "clue": "\"Aurora effect in the sky\""
    },
    {
        "word": "tacky",
        "clue": "\"Impulsively flashy, like a bad holiday sweater.\""
    },
    {
        "word": "trove",
        "clue": "\"Fountain of wealth and treasure\"."
    },
    {
        "word": "waver",
        "clue": "\"Fluctuate in mood or resolve, as a person's confidence may.\""
    },
    {
        "word": "adopt",
        "clue": "\"Take in as a new family member.\""
    },
    {
        "word": "badge",
        "clue": "\"Symbol of authority or honor, often worn on the chest.\""
    },
    {
        "word": "brace",
        "clue": "\"Supportive device often worn after an injury or surgery\""
    },
    {
        "word": "chill",
        "clue": "\"Feel relaxed and calm, like an icy breeze.\""
    },
    {
        "word": "croup",
        "clue": "\"Illness characterized by a distinctive hoarse cough.\""
    },
    {
        "word": "druid",
        "clue": "\"Practitioner of ancient pagan mysticism.\""
    },
    {
        "word": "fever",
        "clue": "\"Malady characterized by elevated body temperature.\""
    },
    {
        "word": "gauze",
        "clue": "\"Medical fabric used for wound dressings and bandages.\""
    },
    {
        "word": "haste",
        "clue": "\"Rushed or hurried, with a hint of urgency.\""
    },
    {
        "word": "kebab",
        "clue": "\"Typical Middle Eastern street food on a stick.\""
    },
    {
        "word": "mamma",
        "clue": "\"Sound a mother could make with love and nurturing.\""
    },
    {
        "word": "ninth",
        "clue": "\"Position in a sequence of ten items.\""
    },
    {
        "word": "pivot",
        "clue": "\"Rotate or shift direction with ease\""
    },
    {
        "word": "ramen",
        "clue": "\"Japanese noodle soup dish.\""
    },
    {
        "word": "savvy",
        "clue": "\"Perceptive and worldly, like a seasoned investor.\""
    },
    {
        "word": "skull",
        "clue": "\"Focal point of a fossil record.\""
    },
    {
        "word": "spree",
        "clue": "\"Frenzied outburst of behavior\""
    },
    {
        "word": "taffy",
        "clue": "\"Famous seaside attraction made from pulled sugar.\""
    },
    {
        "word": "truce",
        "clue": "\"Agreement to stop fighting, often used after a bitter dispute\""
    },
    {
        "word": "waxen",
        "clue": "\"Describing skin that's pale and sallow\"."
    },
    {
        "word": "adore",
        "clue": "\"Love with intensity\""
    },
    {
        "word": "badly",
        "clue": "\"Adequate description of one's driving skills.\""
    },
    {
        "word": "braid",
        "clue": "\"Style that weaves hair into intricate patterns.\""
    },
    {
        "word": "chime",
        "clue": "\"Ring out in a musical tone\""
    },
    {
        "word": "crowd",
        "clue": "\"Mass of people gathered in a public place?\""
    },
    {
        "word": "drunk",
        "clue": "\"Feeling rather worse than better after a night out.\""
    },
    {
        "word": "fewer",
        "clue": "\"Less abundant than\""
    },
    {
        "word": "gavel",
        "clue": "\"Tool used to bang out a decision?\""
    },
    {
        "word": "hasty",
        "clue": "\"Moving quickly, with no time to spare.\""
    },
    {
        "word": "khaki",
        "clue": "\"Color of military uniforms and casual pants, often with earthy undertones.\""
    },
    {
        "word": "mammy",
        "clue": "\"Traditional term for an elderly black female caregiver.\""
    },
    {
        "word": "noble",
        "clue": "\" Title or character often associated with knights.\""
    },
    {
        "word": "pixel",
        "clue": "\"Tiny unit of digital image detail.\""
    },
    {
        "word": "ranch",
        "clue": "\"Where cowboys often spend their days.\""
    },
    {
        "word": "scald",
        "clue": "\"Inflict a severe burn on something or someone.\""
    },
    {
        "word": "skunk",
        "clue": "\"Fragrant forest dweller with a distinctive defense mechanism.\""
    },
    {
        "word": "sprig",
        "clue": "\"Tiny bunch of herbs or greens.\""
    },
    {
        "word": "taint",
        "clue": "\"Poison that corrupts or spoils something\""
    },
    {
        "word": "truck",
        "clue": "\"Large vehicle used for hauling and towing.\""
    },
    {
        "word": "weary",
        "clue": "\"Feeling exhausted after a long day?\""
    },
    {
        "word": "adorn",
        "clue": "\"Add a touch to something or someone\""
    },
    {
        "word": "bagel",
        "clue": "\"This ring-shaped bread is often toasted with cream cheese.\""
    },
    {
        "word": "brain",
        "clue": "\"Location of thoughts and memories, often found in the cranium.\""
    },
    {
        "word": "china",
        "clue": "\"Type of ceramic known for fine tableware.\""
    },
    {
        "word": "crown",
        "clue": "Regal ornament."
    },
    {
        "word": "dryer",
        "clue": "\"Appliance used to remove wrinkles from clothes.\""
    },
    {
        "word": "fiber",
        "clue": "\"Textile thread component\"."
    },
    {
        "word": "gawky",
        "clue": "Clue: \"Uncoordinated in manner\""
    },
    {
        "word": "hatch",
        "clue": "\"Outcome of a chicken's egg-laying process\"."
    },
    {
        "word": "kinky",
        "clue": "\"Whimsically playful, as a hairstyle or romantic encounter.\""
    },
    {
        "word": "manga",
        "clue": "\"Japanese style of comics that often feature action-packed storylines and colorful artwork.\""
    },
    {
        "word": "nobly",
        "clue": "\"Aristocratic bearing, literally\""
    },
    {
        "word": "pixie",
        "clue": "\"Small, mischievous fairy-like figure in folklore and mythology.\""
    },
    {
        "word": "randy",
        "clue": "Desiring intense physical intimacy."
    },
    {
        "word": "scale",
        "clue": "\"Instrument used by musicians\""
    },
    {
        "word": "slack",
        "clue": "\"Feeling or condition of being inactive\""
    },
    {
        "word": "spunk",
        "clue": "\"Feisty spirit, often used to describe someone's personality or attitude.\""
    },
    {
        "word": "taken",
        "clue": "\"Seized or acquired with care?\""
    },
    {
        "word": "truer",
        "clue": "\"More accurate in its assessment\""
    },
    {
        "word": "weave",
        "clue": "\"Thread the way, literally and figuratively.\""
    },
    {
        "word": "adult",
        "clue": "\"Responsible for paychecks and mortgages.\""
    },
    {
        "word": "baggy",
        "clue": "\"A fashionably loose fit\""
    },
    {
        "word": "brake",
        "clue": "\"Device that slows or stops a vehicle's motion.\""
    },
    {
        "word": "chirp",
        "clue": "\"Fragile bird sound\""
    },
    {
        "word": "crude",
        "clue": "\"Unrefined or lacking refinement\""
    },
    {
        "word": "dryly",
        "clue": "\"Delivered in an unenthusiastic tone, perhaps.\""
    },
    {
        "word": "ficus",
        "clue": "\"Exotic houseplant often found in Asian cultures.\""
    },
    {
        "word": "gayer",
        "clue": "\"More flamboyant or effeminate than usual.\""
    },
    {
        "word": "hater",
        "clue": "\"Person who dislikes someone or something intensely\"."
    },
    {
        "word": "kiosk",
        "clue": "\"Small booth or information stand, often found at airports or tourist areas\"."
    },
    {
        "word": "mange",
        "clue": "\"Skin disease common in dogs, often caused by fleas or poor nutrition.\""
    },
    {
        "word": "noise",
        "clue": "Sound that can be heard in a crowded office or at a rock concert."
    },
    {
        "word": "pizza",
        "clue": "\"Foldable Italian dinner specialty\""
    },
    {
        "word": "range",
        "clue": "\"Scale of distances, e.g.\""
    },
    {
        "word": "scalp",
        "clue": "\"Area of the head where hair grows.\""
    },
    {
        "word": "slain",
        "clue": "\"Murdered, or victim of defeat\""
    },
    {
        "word": "spurn",
        "clue": "\"Rejection of an offer or request, as in 'turning down a job'.\""
    },
    {
        "word": "taker",
        "clue": "\"Person who claims an award or prize?\""
    },
    {
        "word": "truly",
        "clue": "\"Expression of absolute sincerity\""
    },
    {
        "word": "wedge",
        "clue": "\"Edge tool often used in golf or ice hockey.\""
    },
    {
        "word": "affix",
        "clue": "\"Attach to something, like a label on an envelope.\""
    },
    {
        "word": "baker",
        "clue": "\"Person skilled in making sweet treats?\""
    },
    {
        "word": "brand",
        "clue": "\"Label or identity associated with something distinctive.\""
    },
    {
        "word": "chock",
        "clue": "\"Stop or halt, like traffic due to an accident\""
    },
    {
        "word": "cruel",
        "clue": "\"Callous to the point of heartlessness\""
    },
    {
        "word": "duchy",
        "clue": "\"A title of nobility ranking below a dukedom.\""
    },
    {
        "word": "field",
        "clue": "\"A green expanse where crops or sports take place\""
    },
    {
        "word": "gayly",
        "clue": "Flirtatiously, or in a charming manner, fittingly \"in a gay way\"."
    },
    {
        "word": "haunt",
        "clue": "\"Make a dwelling in someone's mind or house.\""
    },
    {
        "word": "kitty",
        "clue": "\"Furry little ball of affection\""
    },
    {
        "word": "mango",
        "clue": "\"Fruit often eaten at tropical BBQs.\""
    },
    {
        "word": "noisy",
        "clue": "\" Causing a ruckus, as the loudmouthed neighbor next door\"."
    },
    {
        "word": "place",
        "clue": "\"Location, as in 'where is it?'\""
    },
    {
        "word": "rapid",
        "clue": "\"Faster than lightning\""
    },
    {
        "word": "scaly",
        "clue": "\"Like an armadillo's hide, this adjective describes something rough to the touch.\""
    },
    {
        "word": "slang",
        "clue": "Informal style of language, often used in conversation."
    },
    {
        "word": "spurt",
        "clue": "\"Short burst of energy or fluid\""
    },
    {
        "word": "tally",
        "clue": "Counted sum of votes in an election often leads to this outcome."
    },
    {
        "word": "trump",
        "clue": "\"Famous 'The Apprentice' host\""
    },
    {
        "word": "weedy",
        "clue": "\"Overgrown with unwanted plants.\""
    },
    {
        "word": "afire",
        "clue": "\"Inferno situation\""
    },
    {
        "word": "baler",
        "clue": "Device used to compress and bundle hay or other materials?"
    },
    {
        "word": "brash",
        "clue": "\"Overly confident, often to the point of rudeness.\""
    },
    {
        "word": "choir",
        "clue": "Group of singers, often led by a conductor?"
    },
    {
        "word": "crumb",
        "clue": "\"A small piece left over\""
    },
    {
        "word": "dully",
        "clue": "\" dull sensation or feeling\""
    },
    {
        "word": "fiend",
        "clue": "\"Malevolent spirit of legend or fiction\"."
    },
    {
        "word": "gazer",
        "clue": "Person who can't look away, often due to fascination or boredom."
    },
    {
        "word": "haute",
        "clue": "French term for high style or luxury, often used to describe fashion."
    },
    {
        "word": "knack",
        "clue": "\"Skill or aptitude that comes with practice, literally.\""
    },
    {
        "word": "mangy",
        "clue": "\"Fur condition of a neglected pet\""
    },
    {
        "word": "nomad",
        "clue": "\"Desert dweller, often by choice.\""
    },
    {
        "word": "plaid",
        "clue": "\"Traditional Scottish pattern also known as 'tartan'.\""
    },
    {
        "word": "rarer",
        "clue": "\"Less common than usual\""
    },
    {
        "word": "scamp",
        "clue": "\"Mischievous youngster, or a trickster at heart.\""
    },
    {
        "word": "slant",
        "clue": "\"Angle that's not directly horizontal or vertical.\""
    },
    {
        "word": "squad",
        "clue": "Group of friends or teammates working together."
    },
    {
        "word": "talon",
        "clue": "\"Claw-like feature on birds of prey.\""
    },
    {
        "word": "trunk",
        "clue": "\"Container of a suitcase's sturdy core.\""
    },
    {
        "word": "weigh",
        "clue": "\"Measure up to the task\""
    },
    {
        "word": "afoot",
        "clue": "\"On foot, literally\""
    },
    {
        "word": "balmy",
        "clue": "\"Desert climate atmosphere, in a nutshell.\""
    },
    {
        "word": "brass",
        "clue": "\"Metal alloy often used in musical instruments\""
    },
    {
        "word": "choke",
        "clue": "\"Ignite a fire in someone's throat with this action.\""
    },
    {
        "word": "crump",
        "clue": "\"A messy collision, figuratively.\""
    },
    {
        "word": "dummy",
        "clue": "\"Fake or test object, often found in comedy routines.\""
    },
    {
        "word": "fiery",
        "clue": "\"Passionately intense, like a blazing wildfire.\""
    },
    {
        "word": "gecko",
        "clue": "Small, nocturnal lizard often found in tropical climates."
    },
    {
        "word": "haven",
        "clue": "\"A place of refuge from turmoil\""
    },
    {
        "word": "knave",
        "clue": "\"Person of dubious character, as in Shakespeare's 'Richard III'\"."
    },
    {
        "word": "mania",
        "clue": "\"Frenzied emotional state, often accompanied by reckless behavior.\""
    },
    {
        "word": "noose",
        "clue": "Tightening fate, like a hangman's device."
    },
    {
        "word": "plain",
        "clue": "\"Open landscape feature\""
    },
    {
        "word": "raspy",
        "clue": "\"Voice quality of a chain-smoker, e.g.\""
    },
    {
        "word": "scant",
        "clue": "\"Insufficient in amount or degree.\""
    },
    {
        "word": "slash",
        "clue": "\"Movement that cuts through, like a mark on a page.\""
    },
    {
        "word": "squat",
        "clue": "\"Physical exercise that works your legs.\""
    },
    {
        "word": "tamer",
        "clue": "\"Person who has broken wild beasts, often to the circus.\""
    },
    {
        "word": "truss",
        "clue": "Structural framework that provides support, often in building construction."
    },
    {
        "word": "weird",
        "clue": "\"Unconventional or unsettling experience.\""
    },
    {
        "word": "afoul",
        "clue": "\"Defiled or placed in a state of disrepute.\""
    },
    {
        "word": "banal",
        "clue": "\"Dullly ordinary, like office small talk\""
    },
    {
        "word": "brave",
        "clue": "\"Taking bold action in the face of danger.\""
    },
    {
        "word": "chord",
        "clue": "\"Harmonic interval, often used in music\""
    },
    {
        "word": "crush",
        "clue": "\"Infatuated with someone or something\""
    },
    {
        "word": "dumpy",
        "clue": "\"Unimpressive or dowdy, in appearance.\""
    },
    {
        "word": "fifth",
        "clue": "\"Position in a group of five.\""
    },
    {
        "word": "geeky",
        "clue": "\"Character often found at comic book conventions.\""
    },
    {
        "word": "havoc",
        "clue": "\"Chaos and destruction, often following a party.\""
    },
    {
        "word": "knead",
        "clue": "\"Rise to the challenge of this pastry baker's task, literally\""
    },
    {
        "word": "manic",
        "clue": "\"Manic's emotional state, in a bad way.\""
    },
    {
        "word": "north",
        "clue": "\"Direction opposite to south, often where polar bears reside\""
    },
    {
        "word": "plait",
        "clue": "\"Twisted hairstyle feature, for short.\""
    },
    {
        "word": "ratio",
        "clue": "\"Measure of proportion, often expressed as a fraction.\""
    },
    {
        "word": "scare",
        "clue": "\"Frighten someone terribly, like a horror movie\""
    },
    {
        "word": "slate",
        "clue": "\"Surface often used for writing or drawing\""
    },
    {
        "word": "squib",
        "clue": "\"Person who often fumbles or has an unfortunate turn of events.\""
    },
    {
        "word": "tango",
        "clue": "\"Argentine dance style that's hot stuff.\""
    },
    {
        "word": "trust",
        "clue": "\"Feeling of reliance on someone's integrity?\""
    },
    {
        "word": "welch",
        "clue": "\"Refuse to accept or participate in something, as seen on a US Supreme Court case involving a famous actress.\""
    },
    {
        "word": "after",
        "clue": "\"Following in sequence\""
    },
    {
        "word": "banjo",
        "clue": "\"Musical instrument with a distinctive twang.\""
    },
    {
        "word": "bravo",
        "clue": "\"Audience reaction to a showstopper\""
    },
    {
        "word": "chore",
        "clue": "\"Cleaning task assigned by others, perhaps.\""
    },
    {
        "word": "crust",
        "clue": "\"Outer layer of a pie or bread?\""
    },
    {
        "word": "dunce",
        "clue": "\"Foolish student, perhaps.\""
    },
    {
        "word": "fifty",
        "clue": "\"Number of years in a dozen birthdays.\""
    },
    {
        "word": "geese",
        "clue": "\"Flock of birds often seen on lakes and ponds.\""
    },
    {
        "word": "hazel",
        "clue": "\"Type of tree with distinctive nuts.\""
    },
    {
        "word": "kneed",
        "clue": "\"Agitated or worked to exhaustion\""
    },
    {
        "word": "manly",
        "clue": "\"Describing a rugged, masculine character.\""
    },
    {
        "word": "nosey",
        "clue": "Intriguing behavior often associated with a nosy person?"
    },
    {
        "word": "plane",
        "clue": "\"Aircraft that flies through the air\""
    },
    {
        "word": "ratty",
        "clue": "\"Frayed and worn, like an old coat.\""
    },
    {
        "word": "scarf",
        "clue": "\"Wrap around your neck in winter style.\""
    },
    {
        "word": "sleek",
        "clue": "\"Smooth and streamlined, like a sports car's exterior.\""
    },
    {
        "word": "stack",
        "clue": "\"Tall pile of items, perhaps in an office setting.\""
    },
    {
        "word": "tangy",
        "clue": "\"Having an acidic or pungent flavor.\""
    },
    {
        "word": "truth",
        "clue": "\"Outright declaration in all but name\""
    },
    {
        "word": "welsh",
        "clue": "\"Cultural heritage of Wales, figuratively\""
    },
    {
        "word": "again",
        "clue": "\"Second time around, literally.\""
    },
    {
        "word": "barge",
        "clue": "\"Large, flat vessel often used on waterways.\""
    },
    {
        "word": "brawl",
        "clue": "\"Clash of tempers, figuratively or literally.\""
    },
    {
        "word": "chose",
        "clue": "\"Selected option, for short.\""
    },
    {
        "word": "crypt",
        "clue": "\"Place where treasures or remains are stored beneath ground.\""
    },
    {
        "word": "dusky",
        "clue": "\"Shaded or muted color, like a forest at dusk.\""
    },
    {
        "word": "fight",
        "clue": "\"Engaging in a violent dispute, often with a punching bag.\""
    },
    {
        "word": "genie",
        "clue": "\"Wish-granting being from Middle Eastern folklore.\""
    },
    {
        "word": "heady",
        "clue": "\"Fragrant and intoxicating, like a fine wine.\""
    },
    {
        "word": "kneel",
        "clue": "\"Falling to one's knees in prayer or submission\""
    },
    {
        "word": "manor",
        "clue": "\"Fancy residence of an aristocrat, perhaps\""
    },
    {
        "word": "notch",
        "clue": "\"Indentation in wood or metal?\""
    },
    {
        "word": "plank",
        "clue": "\"Surface on which a ship sails?\""
    },
    {
        "word": "raven",
        "clue": "\"Symbol associated with Edgar Allan Poe's 'The Raven'\""
    },
    {
        "word": "scary",
        "clue": "\"Frightening in a way that's hard to shake.\""
    },
    {
        "word": "sleep",
        "clue": "\"I need to take after watching that horror movie\""
    },
    {
        "word": "staff",
        "clue": "\"Employees of an organization, figuratively\""
    },
    {
        "word": "taper",
        "clue": "\"Shape of a candle, for instance\""
    },
    {
        "word": "tryst",
        "clue": "\"Secret romantic encounter\""
    },
    {
        "word": "whack",
        "clue": "\"Hit with force, fittingly\""
    },
    {
        "word": "agape",
        "clue": "\"Unconditional love, as seen in Christian theology\"."
    },
    {
        "word": "baron",
        "clue": "\"Title of nobility held by a British peer below an earl.\""
    },
    {
        "word": "brawn",
        "clue": "\"Physical strength in a person, often at odds with book smarts.\""
    },
    {
        "word": "chuck",
        "clue": "\"Firmly grasp or handle something\""
    },
    {
        "word": "cubic",
        "clue": "\"Three-dimensional shape, literally.\""
    },
    {
        "word": "dusty",
        "clue": "\"Coated with something dry and powdery, like a desert relic?\""
    },
    {
        "word": "filer",
        "clue": "\"Device used to sift through papers or data?\""
    },
    {
        "word": "genre",
        "clue": "\"Category or classification, often used to describe a particular style of music or film.\""
    },
    {
        "word": "heard",
        "clue": "\"A phrase that describes a sound's origin, often literally\""
    },
    {
        "word": "knelt",
        "clue": "\"Kneeling down, as in prayer or respect?\""
    },
    {
        "word": "maple",
        "clue": "\"Tree whose sap is tapped for syrup.\""
    },
    {
        "word": "novel",
        "clue": "Fictional tale's foundation, with a \"novel\" approach."
    },
    {
        "word": "plant",
        "clue": "Flourish in a garden setting, often."
    },
    {
        "word": "rayon",
        "clue": "Fiber often used in inexpensive fabrics."
    },
    {
        "word": "scene",
        "clue": "\"Setting of a play or movie\"."
    },
    {
        "word": "sleet",
        "clue": "\"Frozen rain that's too cold to melt.\""
    },
    {
        "word": "stage",
        "clue": "\"Platform where performers take center spot.\""
    },
    {
        "word": "tapir",
        "clue": "\"Large mammal with a distinctive snout and love of forest habitats.\""
    },
    {
        "word": "tubal",
        "clue": "\"Feminine tube in the reproductive system.\""
    },
    {
        "word": "whale",
        "clue": "\"Large sea mammal often sung about in songs.\""
    },
    {
        "word": "agate",
        "clue": "\"Gemstone often found in layered or banded patterns.\""
    },
    {
        "word": "basal",
        "clue": "\"Found at the bottom or starting point of something\"."
    },
    {
        "word": "bread",
        "clue": "\"Stuffing that's often served with soup or sandwiches\""
    },
    {
        "word": "chump",
        "clue": "\" Person who's easily taken advantage of\""
    },
    {
        "word": "cumin",
        "clue": "\"Spice often used in Mexican and Indian cuisine.\""
    },
    {
        "word": "dutch",
        "clue": "\"Land of windmills and canals\"."
    },
    {
        "word": "filet",
        "clue": "\"Thinly cut piece of beef, often served rare.\""
    },
    {
        "word": "ghost",
        "clue": "\"Ethereal apparition often associated with eerie mansions.\""
    },
    {
        "word": "heart",
        "clue": "\"Symbol of love and Valentine's Day affection\""
    },
    {
        "word": "knife",
        "clue": "\"Blunt edge wielder.\""
    },
    {
        "word": "march",
        "clue": "\"Month of St. Patrick's Day\""
    },
    {
        "word": "nudge",
        "clue": "\"Give a gentle push or prompt.\""
    },
    {
        "word": "plate",
        "clue": "\"Tableware item where you serve your meal.\""
    },
    {
        "word": "razor",
        "clue": "\"Shaving tool with a sharp edge.\""
    },
    {
        "word": "scent",
        "clue": "\"A fragrant aroma that can evoke memories.\""
    },
    {
        "word": "slept",
        "clue": "\"Lost a full night's rest, literally.\""
    },
    {
        "word": "staid",
        "clue": "\"Formal and unadventurous, like a stuffy board member.\""
    },
    {
        "word": "tardy",
        "clue": "\"Late for work, literally\""
    },
    {
        "word": "tuber",
        "clue": "Fruit with eyes, literally."
    },
    {
        "word": "wharf",
        "clue": "\"Dock area along a body of water\""
    },
    {
        "word": "agent",
        "clue": "\"Representative with a mission to carry out orders from a higher authority.\""
    },
    {
        "word": "basic",
        "clue": "\"Simple in its nature or approach.\""
    },
    {
        "word": "break",
        "clue": "\"Shatter or split, like a fragile vase.\""
    },
    {
        "word": "chunk",
        "clue": "\"Piece of something larger, often with a rough edge.\""
    },
    {
        "word": "curio",
        "clue": "\"Oddly interesting collectible?\""
    },
    {
        "word": "duvet",
        "clue": "\"Soft bedding covering\""
    },
    {
        "word": "filly",
        "clue": "\"Unmanned horse, often a young female\""
    },
    {
        "word": "ghoul",
        "clue": "\"Frightful creature often associated with Halloween.\""
    },
    {
        "word": "heath",
        "clue": "\"Fragrant, peat-rich ground found in moors\""
    },
    {
        "word": "knock",
        "clue": "\"Sound made by a raised fist or handle.\""
    },
    {
        "word": "marry",
        "clue": "\"Form an enduring bond with, as in 'he's going to __ the woman of his dreams'\""
    },
    {
        "word": "nurse",
        "clue": "\"Medical professional with a caring bedside manner.\""
    },
    {
        "word": "plaza",
        "clue": "\"Public square in a city, often featuring shops and cafes.\""
    },
    {
        "word": "reach",
        "clue": "\"Stretch out to attain something\""
    },
    {
        "word": "scion",
        "clue": "\"Inheritable descendant of a noble or royal family\""
    },
    {
        "word": "slice",
        "clue": "\"Something you might cut from a pizza or a pie.\""
    },
    {
        "word": "stain",
        "clue": "Flaw or discoloration on a surface?"
    },
    {
        "word": "tarot",
        "clue": "\"Set of ancient cards used for divination and fortune-telling.\""
    },
    {
        "word": "tulip",
        "clue": "Flower often associated with spring and Dutch heritage, for short?"
    },
    {
        "word": "wheat",
        "clue": "\"Grain often used to make bread.\""
    },
    {
        "word": "agile",
        "clue": "\"Quickly adaptable or nimble in movement, like a gymnast.\""
    },
    {
        "word": "basil",
        "clue": "\"Fern-like herb often used in Italian cooking\"."
    },
    {
        "word": "breed",
        "clue": "\"Fancy or pure strain\""
    },
    {
        "word": "churn",
        "clue": "\"Agitate a mixture, like cream in a milkshake.\""
    },
    {
        "word": "curly",
        "clue": "\"Wavy in appearance.\""
    },
    {
        "word": "dwarf",
        "clue": "Tiny mountain dweller"
    },
    {
        "word": "filmy",
        "clue": "\"Like a soap opera plotline.\""
    },
    {
        "word": "giant",
        "clue": "\"Enormous in scale or size, literally.\""
    },
    {
        "word": "heave",
        "clue": "\"Strong effort to lift something\""
    },
    {
        "word": "knoll",
        "clue": "\"Small hill or rounded mound, e.g.\""
    },
    {
        "word": "marsh",
        "clue": "\"Foggy wetland area\""
    },
    {
        "word": "nutty",
        "clue": "\"Unhinged and slightly quirky, like a certain type of tree.\""
    },
    {
        "word": "plead",
        "clue": "\"Make a formal request, often in court\""
    },
    {
        "word": "react",
        "clue": "\"Falling into a reaction\""
    },
    {
        "word": "scoff",
        "clue": "Laughed dismissively at something?"
    },
    {
        "word": "slick",
        "clue": "Smooth talker's claim to fame?"
    },
    {
        "word": "stair",
        "clue": "\"Path up to the loft.\""
    },
    {
        "word": "taste",
        "clue": "\"Flavor or sensation experienced when eating or drinking?\""
    },
    {
        "word": "tulle",
        "clue": "\"Delicate fabric often used in ball gowns.\""
    },
    {
        "word": "wheel",
        "clue": "\"Round of motion, figuratively or literally.\""
    },
    {
        "word": "aging",
        "clue": "\"Process that gradually wears down an object's quality.\""
    },
    {
        "word": "basin",
        "clue": "\"Faucet location, often at the sink's center.\""
    },
    {
        "word": "briar",
        "clue": "\"Prickly plant often associated with wild roses?\""
    },
    {
        "word": "chute",
        "clue": "\"Slippery slope feature often found in water parks.\""
    },
    {
        "word": "curry",
        "clue": "\"Spicy dish often served with rice.\""
    },
    {
        "word": "dwell",
        "clue": "\"Frequent residence for many animals\""
    },
    {
        "word": "filth",
        "clue": "\"Unsanitary condition, often found in an alleyway.\""
    },
    {
        "word": "giddy",
        "clue": "\"Feeling light-headed, as if on air.\""
    },
    {
        "word": "heavy",
        "clue": "\"Weighty burden\""
    },
    {
        "word": "known",
        "clue": "\"Familiar as the face on your morning coffee mug\""
    },
    {
        "word": "mason",
        "clue": "\"Craftsman of stone and brickwork\""
    },
    {
        "word": "nylon",
        "clue": "\"Material often used in stockings and parachutes.\""
    },
    {
        "word": "pleat",
        "clue": "\"Crinkle in fabric, e.g.\""
    },
    {
        "word": "ready",
        "clue": "\"Having taken the final steps to be prepared\""
    },
    {
        "word": "scold",
        "clue": "Verb with which a parent might address their disobedient child?"
    },
    {
        "word": "slide",
        "clue": "\"Slippery slope or playground feature\""
    },
    {
        "word": "stake",
        "clue": "\"Firm foundation or wager.\""
    },
    {
        "word": "tasty",
        "clue": "\"Having an appealing flavor or aroma, like a delicious dessert.\""
    },
    {
        "word": "tumor",
        "clue": "\"Medical term for an abnormal growth of tissue.\""
    },
    {
        "word": "whelp",
        "clue": "Newcomer to society, literally or figuratively."
    },
    {
        "word": "aglow",
        "clue": "\"Radiating warmth, like a fire that's steadily lit.\""
    },
    {
        "word": "basis",
        "clue": "\"Foundation of a fact or theory?\""
    },
    {
        "word": "bribe",
        "clue": "\"Payoff to influence someone's decision\""
    },
    {
        "word": "cider",
        "clue": "\"Apple-based beverage that's often cloudy and refreshing.\""
    },
    {
        "word": "curse",
        "clue": "\"Aftershock of a bitter dispute\""
    },
    {
        "word": "dwelt",
        "clue": "\"Former tenant, perhaps.\""
    },
    {
        "word": "final",
        "clue": "\"Lasting beyond the end of a chapter.\""
    },
    {
        "word": "gipsy",
        "clue": "\"Nomadic traveler of European folklore\""
    },
    {
        "word": "hedge",
        "clue": "\"Boundary plant, often formal or decorative.\""
    },
    {
        "word": "koala",
        "clue": "Australian marsupial native to eucalyptus trees."
    },
    {
        "word": "masse",
        "clue": "\"French massage term\""
    },
    {
        "word": "nymph",
        "clue": "\"Nature's enchanting female spirit, often depicted in ancient Greek art.\""
    },
    {
        "word": "plied",
        "clue": "\"Was industriously occupied\""
    },
    {
        "word": "realm",
        "clue": "\"Domain of a monarch's power\""
    },
    {
        "word": "scone",
        "clue": "Flaky pastry often served with tea."
    },
    {
        "word": "slime",
        "clue": "\"Messy, gooey substance often found in science labs.\""
    },
    {
        "word": "stale",
        "clue": "\"Left out too long, this bread is no longer fresh.\""
    },
    {
        "word": "tatty",
        "clue": "\"Faded or worn, as in a tattered seam.\""
    },
    {
        "word": "tunic",
        "clue": "\"Traditional garment worn by knights and ancient Greeks, also known as a 'tunica' in Latin.\""
    },
    {
        "word": "where",
        "clue": "\"General location, perhaps of a party?\""
    },
    {
        "word": "agony",
        "clue": "\"Emotional state of intense, lingering pain or distress.\""
    },
    {
        "word": "baste",
        "clue": "\"Brush over with liquid to add flavor.\""
    },
    {
        "word": "brick",
        "clue": "\"Material often used in building construction.\""
    },
    {
        "word": "cigar",
        "clue": "\"Smoker's indulgence, often paired with whiskey.\""
    },
    {
        "word": "curve",
        "clue": "\"A smooth bend in a road or a figure's physique.\""
    },
    {
        "word": "dying",
        "clue": "\"Final stage of life's journey\""
    },
    {
        "word": "finch",
        "clue": "Small songbird often seen at bird feeders."
    },
    {
        "word": "girly",
        "clue": "\"Characteristic of a dainty princess.\""
    },
    {
        "word": "hefty",
        "clue": "\"Fatally impressive in weight\""
    },
    {
        "word": "krill",
        "clue": "Small crustacean often found in schools, typically eaten by whales."
    },
    {
        "word": "match",
        "clue": "\"Item used to ignite a fire or spark an argument.\""
    },
    {
        "word": "oaken",
        "clue": "\"Characterizing something made from sturdy wood\"."
    },
    {
        "word": "plier",
        "clue": "\"A handheld tool with jaws used to grip and twist objects.\""
    },
    {
        "word": "rearm",
        "clue": "\"Put new ammunition in\""
    },
    {
        "word": "scoop",
        "clue": "\"Tool used by journalists to get an exclusive story.\""
    },
    {
        "word": "slimy",
        "clue": "\"Mire-dwelling condition\""
    },
    {
        "word": "stalk",
        "clue": "\"Branch or pole, figuratively\""
    },
    {
        "word": "taunt",
        "clue": "\"Iceberg threat to shipmate's ego\""
    },
    {
        "word": "turbo",
        "clue": "\"A device that boosts engine power\""
    },
    {
        "word": "which",
        "clue": "\"Which, as in 'which one of these options is correct'?\""
    },
    {
        "word": "agree",
        "clue": "\"Respectfully nod in approval?\""
    },
    {
        "word": "batch",
        "clue": "\"Group of items made or baked together.\""
    },
    {
        "word": "bride",
        "clue": "\"Person exchanging vows in a wedding ceremony\"."
    },
    {
        "word": "cinch",
        "clue": "\"Ideal solution to a tricky problem\""
    },
    {
        "word": "curvy",
        "clue": "Flattering figure, fitting this term."
    },
    {
        "word": "eager",
        "clue": "\"Ideal quality for someone waiting in line at a concert.\""
    },
    {
        "word": "finer",
        "clue": "\"More delicate or nuanced than average?\""
    },
    {
        "word": "girth",
        "clue": "\"Measure of a horse's waistline, or a belt size.\""
    },
    {
        "word": "heist",
        "clue": "\"Thief's daring plan, perhaps.\""
    },
    {
        "word": "label",
        "clue": "\"Fancy for a designer's brand name\""
    },
    {
        "word": "matey",
        "clue": "\"Familiar term for a pirate's companion\""
    },
    {
        "word": "obese",
        "clue": "\"Overweight condition\""
    },
    {
        "word": "pluck",
        "clue": "\"Remove with force or cleverness.\""
    },
    {
        "word": "rebar",
        "clue": "\"Reinforcing material often used in concrete construction.\""
    },
    {
        "word": "scope",
        "clue": "\"Viewing area or field of expertise, often literally\""
    },
    {
        "word": "sling",
        "clue": "\"Packaging method for a fragile object.\""
    },
    {
        "word": "stall",
        "clue": "\"Place where vendors set up to sell goods?\""
    },
    {
        "word": "tawny",
        "clue": "\"Golden hue\""
    },
    {
        "word": "tutor",
        "clue": "\"Person guiding another through academic studies.\""
    },
    {
        "word": "whiff",
        "clue": "\"Fleeting scent or faint smell\""
    },
    {
        "word": "ahead",
        "clue": "\"Direction in which progress or success is made, often literally and figuratively.\""
    },
    {
        "word": "bathe",
        "clue": "\"Dip or immerse oneself, perhaps after exercise\""
    },
    {
        "word": "brief",
        "clue": "\"Short and to the point, this description fits a concise note or conversation.\""
    },
    {
        "word": "circa",
        "clue": "\"Approximate time of birth, as in 'circa 1950'\""
    },
    {
        "word": "cutie",
        "clue": "Flirtatious term of endearment."
    },
    {
        "word": "eagle",
        "clue": "\"A symbol of freedom in many countries' coats of arms.\""
    },
    {
        "word": "first",
        "clue": "\"Initial position or point in time.\""
    },
    {
        "word": "given",
        "clue": "\"Provided in advance, or offered at no extra charge\""
    },
    {
        "word": "helix",
        "clue": "\"Twisted shape found in DNA molecules.\""
    },
    {
        "word": "labor",
        "clue": "\"Work that's often backbreaking and never-ending.\""
    },
    {
        "word": "mauve",
        "clue": "\"Color reminiscent of dusty flowers and old lace.\""
    },
    {
        "word": "occur",
        "clue": "\" Happen to someone or something regularly.\""
    },
    {
        "word": "plumb",
        "clue": "\"Digging to the bottom of something?\""
    },
    {
        "word": "rebel",
        "clue": "\"Opponent of authority, often with a fiery spirit\""
    },
    {
        "word": "score",
        "clue": "\"Result of a competition or game.\""
    },
    {
        "word": "slink",
        "clue": "\"Feline movement\""
    },
    {
        "word": "stamp",
        "clue": "\"Official postal marking\""
    },
    {
        "word": "teach",
        "clue": "\"Instructing a student, for example\""
    },
    {
        "word": "twang",
        "clue": "\"A sound often associated with country music\"."
    },
    {
        "word": "while",
        "clue": "\"Time period or circumstance\""
    },
    {
        "word": "aider",
        "clue": "\"Person who lends a helping hand, literally.\""
    },
    {
        "word": "baton",
        "clue": "Symbol wielded by drum majors and other performers."
    },
    {
        "word": "brine",
        "clue": "\"Salty liquid used to preserve food, often in a bucket or tub.\""
    },
    {
        "word": "civic",
        "clue": "\"Constituent of local government.\""
    },
    {
        "word": "cyber",
        "clue": "\"Online network or system, in short.\""
    },
    {
        "word": "early",
        "clue": "\"Before its time, literally.\""
    },
    {
        "word": "fishy",
        "clue": "\"Suspiciously similar to a cod\""
    },
    {
        "word": "giver",
        "clue": "\"Person who provides something in abundance.\""
    },
    {
        "word": "hello",
        "clue": "\"Common greeting used by people around the world.\""
    },
    {
        "word": "laden",
        "clue": "\"Overloaded, like a traveler with too many bags.\""
    },
    {
        "word": "maxim",
        "clue": "\"Latin phrase meaning 'greatest' or 'highest ideal'\""
    },
    {
        "word": "ocean",
        "clue": "\"Large body of saltwater that covers much of our planet.\""
    },
    {
        "word": "plume",
        "clue": "\"Elegantly feathered adornment\""
    },
    {
        "word": "rebus",
        "clue": "Punny phrase or riddle that uses images and words in an unconventional way."
    },
    {
        "word": "scorn",
        "clue": "\"Words of strong dislike, often spoken behind someone's back.\""
    },
    {
        "word": "sloop",
        "clue": "\"Cruiser that's often lightweight and easy to handle\""
    },
    {
        "word": "stand",
        "clue": "\"Supporting structure, or thing to be still\""
    },
    {
        "word": "teary",
        "clue": "\"Filling someone's eyes with tears\""
    },
    {
        "word": "tweak",
        "clue": "\"Make a minor adjustment to something\""
    },
    {
        "word": "whine",
        "clue": "\"A sound often associated with an overindulged child.\""
    },
    {
        "word": "aisle",
        "clue": "\"Pathway between rows of seats.\""
    },
    {
        "word": "batty",
        "clue": "\"Unhinged, as a person with eccentric behavior.\""
    },
    {
        "word": "bring",
        "clue": "\"Take or transport something, often physically\""
    },
    {
        "word": "civil",
        "clue": "\"Related to government or society\""
    },
    {
        "word": "cycle",
        "clue": "\"Movement that repeats over and over.\""
    },
    {
        "word": "earth",
        "clue": "\"Planet where humans call home\""
    },
    {
        "word": "fixer",
        "clue": "\"Person who makes necessary repairs or adjustments.\""
    },
    {
        "word": "glade",
        "clue": "\"A quiet, natural clearing\""
    },
    {
        "word": "hence",
        "clue": "\"Originating from a particular place or situation\""
    },
    {
        "word": "ladle",
        "clue": "\"Folding utensil often used to scoop soup.\""
    },
    {
        "word": "maybe",
        "clue": "\"Possibly true\""
    },
    {
        "word": "octal",
        "clue": "\"Base used in computer coding with names like Zero and Eight.\""
    },
    {
        "word": "plump",
        "clue": "\"Full of life, or perhaps full of dinner.\""
    },
    {
        "word": "rebut",
        "clue": "\"Oppose with logic and reason.\""
    },
    {
        "word": "scour",
        "clue": "\"Cleanse with intense effort, often literally\""
    },
    {
        "word": "slope",
        "clue": "\"Incline of a hill or mountain, literally.\""
    },
    {
        "word": "stank",
        "clue": "\"Foul odor that lingers\""
    },
    {
        "word": "tease",
        "clue": "\"Flirtatiously mock or tantalize someone\""
    },
    {
        "word": "tweed",
        "clue": "\"Fashionably rustic fabric choice.\""
    },
    {
        "word": "whiny",
        "clue": "\"This annoying habit can grate on anyone's nerves.\""
    },
    {
        "word": "alarm",
        "clue": "\"Warning signal or wake-up call.\""
    },
    {
        "word": "bawdy",
        "clue": "\"Raucously humorous or flirtatious, often in a suggestive way.\""
    },
    {
        "word": "brink",
        "clue": "\"Edge or precipice, often literally\""
    },
    {
        "word": "clack",
        "clue": "\"Sound of a keyboard key striking another\""
    },
    {
        "word": "cynic",
        "clue": "\"A person who expects to be disappointed.\""
    },
    {
        "word": "easel",
        "clue": "\"Artist's stand, literally\"."
    },
    {
        "word": "fizzy",
        "clue": "\"Carbonated drink, in effect.\""
    },
    {
        "word": "gland",
        "clue": "\"Body part that produces sweat and other secretions?\""
    },
    {
        "word": "heron",
        "clue": "Flapper's feathered equivalent."
    },
    {
        "word": "lager",
        "clue": "\"Fizzy European beer style\""
    },
    {
        "word": "mayor",
        "clue": "\"Leader of a city or town, in short.\""
    },
    {
        "word": "octet",
        "clue": "Group of eight, like a musical scale."
    },
    {
        "word": "plunk",
        "clue": "\"Fling or drop with a splat sound\""
    },
    {
        "word": "recap",
        "clue": "\"Summarize again, like reviewing a sports game.\""
    },
    {
        "word": "scout",
        "clue": "\"Explorer who helps plan outdoor adventures?\""
    },
    {
        "word": "slosh",
        "clue": "\"Make a mess by sloppily moving liquids around\"."
    },
    {
        "word": "stare",
        "clue": "\"Fixing one's gaze intensely on something\""
    },
    {
        "word": "teddy",
        "clue": "\"Small companion, especially for children?\""
    },
    {
        "word": "tweet",
        "clue": "\"Social media post's brevity requirement.\""
    },
    {
        "word": "whirl",
        "clue": "\"Spin into chaos with this movement.\""
    },
    {
        "word": "album",
        "clue": "\"Collection of music or art\""
    },
    {
        "word": "bayou",
        "clue": "\"Swampy waterway in Louisiana's countryside.\""
    },
    {
        "word": "briny",
        "clue": "\"Salty, like seawater\""
    },
    {
        "word": "claim",
        "clue": "\"Statement of right or entitlement, often challenged in court.\""
    },
    {
        "word": "daddy",
        "clue": "\"Title given to a father figure in a family or institution.\""
    },
    {
        "word": "eaten",
        "clue": "\"Consumed something?\""
    },
    {
        "word": "fjord",
        "clue": "\"Norwegian waterway feature\""
    },
    {
        "word": "glare",
        "clue": "\"Hostile eye contact, or shine with intensity.\""
    },
    {
        "word": "hilly",
        "clue": "\"Characterized by rolling or sloping terrain.\""
    },
    {
        "word": "lance",
        "clue": "\"King Arthur's trusty spearhead, for short.\""
    },
    {
        "word": "mealy",
        "clue": "\"Moisture-sucking texture, often found in corn on the cob.\""
    },
    {
        "word": "odder",
        "clue": "\"Folkloric term for an unusual or strange creature.\""
    },
    {
        "word": "plush",
        "clue": "\"Furniture texture that's soft to the touch.\""
    },
    {
        "word": "recur",
        "clue": "\"Repeat, as in 'her words kept on recursing'\""
    },
    {
        "word": "scowl",
        "clue": "\"Frown with displeasure, or look of disdain\""
    },
    {
        "word": "sloth",
        "clue": "Animal known for its slow pace and arboreal lifestyle."
    },
    {
        "word": "stark",
        "clue": "\"Frozen landscape feature\""
    },
    {
        "word": "teeth",
        "clue": "\"Points that pierce and define one's smile.\""
    },
    {
        "word": "twice",
        "clue": "\"A number of times, figuratively.\""
    },
    {
        "word": "whisk",
        "clue": "\"Kitchen tool often used to mix sauces.\""
    },
    {
        "word": "alert",
        "clue": "\"Situation requiring immediate attention, literally or figuratively.\""
    },
    {
        "word": "beach",
        "clue": "\"Coastal spot where sunbathing is often a major activity.\""
    },
    {
        "word": "brisk",
        "clue": "\"Frosty morning atmosphere\""
    },
    {
        "word": "clamp",
        "clue": "\"Tool used to hold something in place firmly?\""
    },
    {
        "word": "daily",
        "clue": "\"Something you typically do every morning and night.\""
    },
    {
        "word": "eater",
        "clue": "Person who consumes food?"
    },
    {
        "word": "flack",
        "clue": "\"Publicist's unwanted tag.\""
    },
    {
        "word": "glass",
        "clue": "\"Clear container or mirror material\"."
    },
    {
        "word": "hinge",
        "clue": "\"Joining part of a door or gate.\""
    },
    {
        "word": "lanky",
        "clue": "\"A lean and gangly figure\""
    },
    {
        "word": "meant",
        "clue": "\"Indicated a purpose or intention, perhaps in writing.\""
    },
    {
        "word": "oddly",
        "clue": "\"Something that doesn't quite add up\""
    },
    {
        "word": "poesy",
        "clue": "Florid literary style often associated with romance and emotion."
    },
    {
        "word": "recut",
        "clue": "\"Rework or reassemble, as if editing film footage.\""
    },
    {
        "word": "scram",
        "clue": "\"Disorder caused by a loud outburst.\""
    },
    {
        "word": "slump",
        "clue": "\"Loss of momentum, or decline in performance\""
    },
    {
        "word": "start",
        "clue": "\"Begin with this initial letter?\""
    },
    {
        "word": "tempo",
        "clue": "\"Rhythm of life, as in 'toe-tappin' time'\""
    },
    {
        "word": "twine",
        "clue": "\"Stringy cordage commonly used for tying packages.\""
    },
    {
        "word": "white",
        "clue": "\"Color of freshly fallen snow.\""
    },
    {
        "word": "algae",
        "clue": "\"Green growth found in ponds and aquariums\""
    },
    {
        "word": "beady",
        "clue": "Furtive eye feature."
    },
    {
        "word": "broad",
        "clue": "\"Wide in scope or perspective.\""
    },
    {
        "word": "clang",
        "clue": "\"A loud, metallic sound\""
    },
    {
        "word": "dairy",
        "clue": "\"Where milk is often made.\""
    },
    {
        "word": "ebony",
        "clue": "Darkly polished wood finish, often used in furniture-making."
    },
    {
        "word": "flail",
        "clue": "\"Fruitless attempt at self-defense, literally.\""
    },
    {
        "word": "glaze",
        "clue": "\"Coating that gives something a glossy finish.\""
    },
    {
        "word": "hippo",
        "clue": "Fluffy river dweller, also known as a water buffalo."
    },
    {
        "word": "lapel",
        "clue": "\"Part of a jacket where pins or badges are worn.\""
    },
    {
        "word": "meaty",
        "clue": "\"Richly flavored, like a hearty steak.\""
    },
    {
        "word": "offal",
        "clue": "\"Organ parts considered unrefined by many, but prized by chefs.\""
    },
    {
        "word": "point",
        "clue": "\"End of a journey or a sharp edge?\""
    },
    {
        "word": "reedy",
        "clue": "\"Grassy lake shore habitat, often with papyrus plants.\""
    },
    {
        "word": "scrap",
        "clue": "\"Discarded material from a demolition site\""
    },
    {
        "word": "slung",
        "clue": "\"Thrown over or held carelessly, like an old backpack.\""
    },
    {
        "word": "stash",
        "clue": "\"Hidden collection of valuable items?\""
    },
    {
        "word": "tenet",
        "clue": "\"Philosophical principle that's held dear.\""
    },
    {
        "word": "twirl",
        "clue": "\"Spin around in a lively, carefree motion.\""
    },
    {
        "word": "whole",
        "clue": "\"Complete as a set of pieces in a puzzle.\""
    },
    {
        "word": "alibi",
        "clue": "\"Explanation for an absence at a pivotal time.\""
    },
    {
        "word": "beard",
        "clue": "\" Facial feature often trimmed by barbers?\""
    },
    {
        "word": "broil",
        "clue": "\"Heat setting on a grill\""
    },
    {
        "word": "clank",
        "clue": "Noisy sound, like metal hitting stone"
    },
    {
        "word": "daisy",
        "clue": "\"Common flower with a yellow center and white petals.\""
    },
    {
        "word": "eclat",
        "clue": "\"Radiant feeling, in French or fashion circles.\""
    },
    {
        "word": "flair",
        "clue": "\"Style or charisma that sets someone apart\""
    },
    {
        "word": "gleam",
        "clue": "\"Faint shine or sparkle\""
    },
    {
        "word": "hippy",
        "clue": "\"Free-spirited member of a 1960s counterculture movement.\""
    },
    {
        "word": "lapse",
        "clue": "\"Failure to maintain continuity or attention.\""
    },
    {
        "word": "mecca",
        "clue": "Pilgrim's holy destination, often in the Middle East."
    },
    {
        "word": "offer",
        "clue": "\"Furnish with something desirable or attractive\""
    },
    {
        "word": "poise",
        "clue": "\"Regal demeanor, in royal terms\""
    },
    {
        "word": "refer",
        "clue": "\"Send someone to talk on your behalf\""
    },
    {
        "word": "scree",
        "clue": "\"Sound of rushing snow or rock underfoot.\""
    },
    {
        "word": "slunk",
        "clue": "\"Movement that suggests retreat or avoidance, like an animal's posture after being startled.\""
    },
    {
        "word": "state",
        "clue": "\"Condition in which your finances are typically ailing.\""
    },
    {
        "word": "tenor",
        "clue": "\"Male vocalist in opera and musical theater.\""
    },
    {
        "word": "twist",
        "clue": "\"Fiber in a rope or hair\""
    },
    {
        "word": "whoop",
        "clue": "\"Sound of triumph or excitement, often let out in sports or parties.\""
    },
    {
        "word": "alien",
        "clue": "\"Space visitor from another world\"."
    },
    {
        "word": "beast",
        "clue": "Creature of myth and legend, or woodland resident?"
    },
    {
        "word": "broke",
        "clue": "\"Lost money, figuratively\""
    },
    {
        "word": "clash",
        "clue": "\"Conflict's sound effect\""
    },
    {
        "word": "dally",
        "clue": "\"Put off until later, in a procrastination sense\""
    },
    {
        "word": "edict",
        "clue": "\"Royal decree, in a historical sense,\""
    },
    {
        "word": "flake",
        "clue": "\"Snowfall's light and airy feature\""
    },
    {
        "word": "glean",
        "clue": "\"Harvesting small amounts from a larger collection\""
    },
    {
        "word": "hitch",
        "clue": "\"Ride-hailing service fee, often required as an upfront cost.\""
    },
    {
        "word": "large",
        "clue": "\"Encompassing an entire landscape, literally.\""
    },
    {
        "word": "medal",
        "clue": "\"Reward for achievement, often displayed on the chest.\""
    },
    {
        "word": "often",
        "clue": "\"Something you might say after that new restaurant really hits the spot.\""
    },
    {
        "word": "poker",
        "clue": "\"Popular card game that involves betting and strategy.\""
    },
    {
        "word": "refit",
        "clue": "\"Make over or update, as a ship's engine\""
    },
    {
        "word": "screw",
        "clue": "\"Tightening device with a threaded shaft.\""
    },
    {
        "word": "slurp",
        "clue": "Noisily drinking from a bowl, as with noodles."
    },
    {
        "word": "stave",
        "clue": "\"Bar used in a stringed instrument, perhaps.\""
    },
    {
        "word": "tense",
        "clue": "\"Fruit often associated with anxiety.\""
    },
    {
        "word": "twixt",
        "clue": "\"Division or midpoint, in a geographical sense, with 5 letters.\""
    },
    {
        "word": "whose",
        "clue": "\"Who's possessive partner?\""
    },
    {
        "word": "align",
        "clue": "\"To bring things into a straight line\""
    },
    {
        "word": "beech",
        "clue": "\"Tree often used in outdoor furniture, symbolizing good luck in Chinese culture.\""
    },
    {
        "word": "brood",
        "clue": "\"Clue for 'brood': Flock of young animals.\""
    },
    {
        "word": "clasp",
        "clue": "\"Fastening that holds something in place tightly.\""
    },
    {
        "word": "dance",
        "clue": "\"Form of expression often seen at weddings and ballroom events.\""
    },
    {
        "word": "edify",
        "clue": "\"Improve someone's knowledge or character\""
    },
    {
        "word": "flaky",
        "clue": "\"Frittering away with an unreliable edge.\""
    },
    {
        "word": "glide",
        "clue": "Across: Move smoothly and quietly, like an airplane in flight"
    },
    {
        "word": "hoard",
        "clue": "\"Store in secret or hidden away\""
    },
    {
        "word": "larva",
        "clue": "\"Stage of life before becoming a butterfly\""
    },
    {
        "word": "media",
        "clue": "\"Outlets through which news and information flow.\""
    },
    {
        "word": "olden",
        "clue": "\"Archaic or antiquated in style, as in 'olden days'\""
    },
    {
        "word": "polar",
        "clue": "\"Extreme or icy region found near the North or South.\""
    },
    {
        "word": "regal",
        "clue": "\"Dignified with royal bearing.\""
    },
    {
        "word": "scrub",
        "clue": "\"Able-bodied gardener's tool\""
    },
    {
        "word": "slush",
        "clue": "\"Frozen precipitation that's often shoveled.\""
    },
    {
        "word": "stead",
        "clue": "\"Firm or stable situation\""
    },
    {
        "word": "tenth",
        "clue": "\"Place where a ten is usually found\""
    },
    {
        "word": "tying",
        "clue": "\"Securing with a knot.\""
    },
    {
        "word": "widen",
        "clue": "\"Make something broader, literally or figuratively.\""
    },
    {
        "word": "alike",
        "clue": "\"Similar in nature or character, as two peas in a pod.\""
    },
    {
        "word": "beefy",
        "clue": "\"Muscular in build or tone, like a cut of high-quality meat.\""
    },
    {
        "word": "brook",
        "clue": "\"Small stream in the countryside.\""
    },
    {
        "word": "class",
        "clue": "\"Social group category, often requiring tuition.\""
    },
    {
        "word": "dandy",
        "clue": "\"Refined and fastidious gentleman, often with an air of elegance.\""
    },
    {
        "word": "eerie",
        "clue": "\"Frighteningly atmospheric, like a haunted mansion\""
    },
    {
        "word": "flame",
        "clue": "\"Flickering beacon in the dark\""
    },
    {
        "word": "glint",
        "clue": "\"Flicker of light on metal\""
    },
    {
        "word": "hobby",
        "clue": "\"Fascination pursued in spare time\""
    },
    {
        "word": "lasso",
        "clue": "\"Western tool used to catch or restrain livestock.\""
    },
    {
        "word": "medic",
        "clue": "\"Medic's patient, literally.\""
    },
    {
        "word": "older",
        "clue": "\"Describing someone or something now surpassed in age.\""
    },
    {
        "word": "polka",
        "clue": "\"Polish folk dance, often with a lively tempo.\""
    },
    {
        "word": "rehab",
        "clue": "\"A program or facility aimed at helping those with addiction.\""
    },
    {
        "word": "scrum",
        "clue": "\"Agile team framework, often used in software development.\""
    },
    {
        "word": "slyly",
        "clue": "\"Moved with cunning subtlety\"."
    },
    {
        "word": "steak",
        "clue": "\"Cut of meat often served rare or well done\"."
    },
    {
        "word": "tepee",
        "clue": "\"Traditional Native American dwelling structure\""
    },
    {
        "word": "udder",
        "clue": "\"Farm animal's milk-producing area\""
    },
    {
        "word": "wider",
        "clue": "\"Enlarging feature of a landscape\""
    },
    {
        "word": "alive",
        "clue": "\"Currently in possession of a pulse.\""
    },
    {
        "word": "befit",
        "clue": "\"Fit someone's role or situation perfectly, literally.\""
    },
    {
        "word": "broom",
        "clue": "\"Cleaning tool with bristles and handle\"."
    },
    {
        "word": "clean",
        "clue": "\"Free of impurities or stains, fittingly\""
    },
    {
        "word": "datum",
        "clue": "\"Data point or statistical figure.\""
    },
    {
        "word": "egret",
        "clue": "\"White heron of marshes and lakes.\""
    },
    {
        "word": "flank",
        "clue": "\"Side of an animal or wall, often referred to as its 'sided' area.\""
    },
    {
        "word": "gloat",
        "clue": "\"Take pleasure in someone else's misfortune?\""
    },
    {
        "word": "hoist",
        "clue": "\"Device used to lift heavy loads quickly and efficiently\""
    },
    {
        "word": "latch",
        "clue": "\"Fastening mechanism that holds something in place.\""
    },
    {
        "word": "melee",
        "clue": "\"Clash of arms or arguments\"."
    },
    {
        "word": "olive",
        "clue": "\"Small, green stone often used as a garnish or in Mediterranean cuisine.\""
    },
    {
        "word": "polyp",
        "clue": "\"Tumor-like growth on an organ or tissue.\""
    },
    {
        "word": "reign",
        "clue": "\"Fate's duration\""
    },
    {
        "word": "scuba",
        "clue": "\"Dive into the ocean with this specialized breathing equipment.\""
    },
    {
        "word": "smack",
        "clue": "\"Sound of a kiss or a loud slap?\""
    },
    {
        "word": "steal",
        "clue": "\"Take something without permission, often in a sneaky manner.\""
    },
    {
        "word": "tepid",
        "clue": "\"Mildly lukewarm, fitting a person's emotional state after a breakup.\""
    },
    {
        "word": "ulcer",
        "clue": "\"Digestive issue often requiring medical attention\"."
    },
    {
        "word": "widow",
        "clue": "\"Lonely woman after a loss\""
    },
    {
        "word": "allay",
        "clue": "\"Calming concern\""
    },
    {
        "word": "began",
        "clue": "\"Started something new?\""
    },
    {
        "word": "broth",
        "clue": "\"Soup's savory base, often served with grains or meat.\""
    },
    {
        "word": "clear",
        "clue": "\"Free from obstruction, like an open mind.\""
    },
    {
        "word": "daunt",
        "clue": "\"Unnerve or intimidate with trepidation\""
    },
    {
        "word": "eight",
        "clue": "Form of numbers in music notation"
    },
    {
        "word": "flare",
        "clue": "\"Tiny spark in a firework display\""
    },
    {
        "word": "globe",
        "clue": "\"World map's central feature, often decorated with festive lights.\""
    },
    {
        "word": "holly",
        "clue": "\"Evergreen shrub often used in holiday decorations.\""
    },
    {
        "word": "later",
        "clue": "\"Event that will happen after this moment.\""
    },
    {
        "word": "melon",
        "clue": "\"Fruit often sliced into sweet summer salads.\""
    },
    {
        "word": "ombre",
        "clue": "\"Color transition from dark to light in a fashionable hair dye effect.\""
    },
    {
        "word": "pooch",
        "clue": "\"Small dog breed\""
    },
    {
        "word": "relax",
        "clue": "\"Unwind with a calm demeanor, or so it's often implied.\""
    },
    {
        "word": "sedan",
        "clue": "\"Autmobile with rear seats and trunk space, often carrying families or road trips.\""
    },
    {
        "word": "small",
        "clue": "\"Tiny in size or amount\""
    },
    {
        "word": "steam",
        "clue": "\"Ethereal mist often seen at train stations.\""
    },
    {
        "word": "terra",
        "clue": "\"Land type in Italy's northern region.\""
    },
    {
        "word": "ultra",
        "clue": "\"A prefix meaning beyond or exceeding normal limits\""
    },
    {
        "word": "width",
        "clue": "\"Measure from side to side, for example.\""
    },
    {
        "word": "alley",
        "clue": "\" Narrow passage between buildings, often with trash cans and graffiti.\""
    },
    {
        "word": "begat",
        "clue": "\"Progeny or offspring, in biblical terms\""
    },
    {
        "word": "brown",
        "clue": "\"Tint of chocolate or earth tones.\""
    },
    {
        "word": "cleat",
        "clue": "\"Insole component that digs into shoes.\""
    },
    {
        "word": "dealt",
        "clue": "\"Fate's decision, perhaps\""
    },
    {
        "word": "eject",
        "clue": "\"Remove forcibly, as unwanted guests from a party.\""
    },
    {
        "word": "flash",
        "clue": "\"Short-lived burst of light or energy\""
    },
    {
        "word": "gloom",
        "clue": "\"Felicitous weather forecast\""
    },
    {
        "word": "homer",
        "clue": "\"Author of The Iliad, often in a state of epic drunkenness.\""
    },
    {
        "word": "lathe",
        "clue": "Tool often used in woodworking, with a rotational motion to shape materials."
    },
    {
        "word": "mends",
        "clue": "\"Fix or repair something\""
    },
    {
        "word": "omega",
        "clue": "\"A final letter in the Greek alphabet's sequence.\""
    },
    {
        "word": "poppy",
        "clue": "\"Flower that's also the name of a state flower and a symbol of remembrance.\""
    },
    {
        "word": "relay",
        "clue": "\"Handover of a task or object in quick succession.\""
    },
    {
        "word": "seedy",
        "clue": "\"Shady or of poor moral character, like a used car lot?\""
    },
    {
        "word": "smart",
        "clue": "\"Ingenious\" is also a possible fit, but I'll give you another option: \"Intellectually gifted.\""
    },
    {
        "word": "steed",
        "clue": "\" Horse that's often a noble companion\""
    },
    {
        "word": "terse",
        "clue": "\"Characterized by few words, literally.\""
    },
    {
        "word": "umbra",
        "clue": "\"Shadow's darkest, coolest part\""
    },
    {
        "word": "wield",
        "clue": "\"Control or direct with force, like a sword or pen.\""
    },
    {
        "word": "allot",
        "clue": "\"Divide or allocate a share of something, such as land or resources.\""
    },
    {
        "word": "beget",
        "clue": "\"Parentally influence\""
    },
    {
        "word": "brunt",
        "clue": "\"Falling impact or force taken by someone\""
    },
    {
        "word": "cleft",
        "clue": "\"Divide or split, as a lip\""
    },
    {
        "word": "death",
        "clue": "Fatal event or end of life's journey"
    },
    {
        "word": "eking",
        "clue": "\"Pretending to struggle for financial survival\""
    },
    {
        "word": "flask",
        "clue": "\"Item often found in a hiker's backpack or on a desk.\""
    },
    {
        "word": "glory",
        "clue": "\"Feeling of pride or achievement that lasts a lifetime?\""
    },
    {
        "word": "honey",
        "clue": "Flawlessly golden substance made by bees."
    },
    {
        "word": "latte",
        "clue": "\"Coffee drink that's 'steamy' about its popularity.\""
    },
    {
        "word": "mercy",
        "clue": "\"Compassionate act towards a wrongdoer\""
    },
    {
        "word": "onion",
        "clue": "Layer of flavor, in many a dish?"
    },
    {
        "word": "porch",
        "clue": "\"Outdoor space surrounding a house\""
    },
    {
        "word": "relic",
        "clue": "\"Something left behind by an ancient civilization.\""
    },
    {
        "word": "segue",
        "clue": "\"Smooth transition after a musical performance, also a transitional phrase.\""
    },
    {
        "word": "smash",
        "clue": "\"Make a sudden, violent impact.\""
    },
    {
        "word": "steel",
        "clue": "\"Material often used in skyscrapers and swords.\""
    },
    {
        "word": "testy",
        "clue": "\"Irked or annoyed, in a bad mood\""
    },
    {
        "word": "uncle",
        "clue": "\"Relative who often spoils kids at holidays.\""
    },
    {
        "word": "wight",
        "clue": "\"Ghostly creature, as in Edgar Allan Poe's 'The System of Doctor Tarr and Professor Fether'\""
    },
    {
        "word": "allow",
        "clue": "\"Permission granted to someone, literally.\""
    },
    {
        "word": "begin",
        "clue": "Start something new."
    },
    {
        "word": "brush",
        "clue": "\"Tool for painting or cleaning?\""
    },
    {
        "word": "clerk",
        "clue": "Office worker's role, in a nutshell."
    },
    {
        "word": "debar",
        "clue": "\"Verb meaning to keep someone from doing something they want to do\""
    },
    {
        "word": "elate",
        "clue": "Feeling on top of the world?"
    },
    {
        "word": "fleck",
        "clue": "\"Small particle or speck\""
    },
    {
        "word": "gloss",
        "clue": "\"Fine surface quality on a newly polished instrument\""
    },
    {
        "word": "honor",
        "clue": "\"Reward given to someone who has demonstrated great loyalty or service.\""
    },
    {
        "word": "laugh",
        "clue": "\"Sound that can be heard at a comedy club.\""
    },
    {
        "word": "merge",
        "clue": "\"Combine forces, as in business or social circles.\""
    },
    {
        "word": "onset",
        "clue": "\"Beginning of something, such as an illness or a trend\"."
    },
    {
        "word": "poser",
        "clue": "\"Someone who pretends to be more accomplished than they actually are.\""
    },
    {
        "word": "remit",
        "clue": "\"Authority's directive\""
    },
    {
        "word": "seize",
        "clue": "\"Take control or grasp something suddenly.\""
    },
    {
        "word": "smear",
        "clue": "\"Faulty or inaccurate impression\""
    },
    {
        "word": "steep",
        "clue": "\"Slope or incline can make this description apt.\""
    },
    {
        "word": "thank",
        "clue": "\"Show gratitude with this expression.\""
    },
    {
        "word": "uncut",
        "clue": "\"Intact without alteration\"."
    },
    {
        "word": "willy",
        "clue": "\"English name for Willy Wonka from Roald Dahl's classic tale.\""
    },
    {
        "word": "alloy",
        "clue": "\"Mix of metals in a blend?\""
    },
    {
        "word": "begun",
        "clue": "\"Started something, perhaps with a spark of motivation\""
    },
    {
        "word": "brute",
        "clue": "\"Rough-around-the-edges person or animal.\""
    },
    {
        "word": "click",
        "clue": "\"Finger press that makes a sound\""
    },
    {
        "word": "debit",
        "clue": "\"Funds taken from your account.\""
    },
    {
        "word": "elbow",
        "clue": "\"Location where you often bend or scrape.\""
    },
    {
        "word": "fleet",
        "clue": "\"Large group of ships\""
    },
    {
        "word": "glove",
        "clue": "\"Finger covering, often in leather or synthetic materials.\""
    },
    {
        "word": "horde",
        "clue": "Flock of ravaging warriors, perhaps?"
    },
    {
        "word": "layer",
        "clue": "\"Thin coating of something\""
    },
    {
        "word": "merit",
        "clue": "\"Deserved distinction earned through hard work and achievement.\""
    },
    {
        "word": "opera",
        "clue": "\"Dramatic musical genre, often performed in fancy venues.\""
    },
    {
        "word": "posit",
        "clue": "\"Expression of confidence or conviction, such as 'I have no doubt'\""
    },
    {
        "word": "renal",
        "clue": "\"Related to the kidneys\""
    },
    {
        "word": "semen",
        "clue": "\"A male reproductive fluid\""
    },
    {
        "word": "smell",
        "clue": "\"Aromatic sensation that can evoke emotions\""
    },
    {
        "word": "steer",
        "clue": "\"Control the direction of a horse or vehicle, literally.\""
    },
    {
        "word": "theft",
        "clue": "\"Crime of taking something that isn't yours.\""
    },
    {
        "word": "under",
        "clue": "\"Below or in a lower position\""
    },
    {
        "word": "wimpy",
        "clue": "Flaky character often used to describe someone lacking confidence or courage."
    },
    {
        "word": "aloft",
        "clue": "\"Up in the air, literally\""
    },
    {
        "word": "being",
        "clue": "\"State of existence, figuratively or literally.\""
    },
    {
        "word": "buddy",
        "clue": "\"Sidekick with whom you'd share a laugh or a secret.\""
    },
    {
        "word": "cliff",
        "clue": "Edge of a precipice?"
    },
    {
        "word": "debug",
        "clue": "\"Test code repeatedly to identify errors\"\n\n(Answer: DEBUG)"
    },
    {
        "word": "elder",
        "clue": "\"Respected elderly member of a community or family\"."
    },
    {
        "word": "flesh",
        "clue": "\"Part of the human body, or stuffing in a pillow?\""
    },
    {
        "word": "glyph",
        "clue": "Symbolic representation in an ancient language."
    },
    {
        "word": "horny",
        "clue": "\"Feeling of intense longing or attraction\""
    },
    {
        "word": "leach",
        "clue": "\"Slowly drain away water from something, literally\""
    },
    {
        "word": "merry",
        "clue": "\"Feeling joyful and festive, as in 'a merry Christmas'\""
    },
    {
        "word": "opine",
        "clue": "Form an opinion, literally."
    },
    {
        "word": "posse",
        "clue": "\"Group of law enforcement officials on the trail.\""
    },
    {
        "word": "renew",
        "clue": "\"Recharge one's commitment, figuratively\""
    },
    {
        "word": "sense",
        "clue": "\"F feeling, intuition, or instinct\""
    },
    {
        "word": "smelt",
        "clue": "\"Process metal ore into a malleable form, like this crafty activity.\""
    },
    {
        "word": "stein",
        "clue": "\"German vessel, often filled with beer\"."
    },
    {
        "word": "their",
        "clue": "\"Form of polite possession, akin to 'ours'\""
    },
    {
        "word": "undid",
        "clue": "\"Reversed a previous action or decision\""
    },
    {
        "word": "wince",
        "clue": "Flinch with sudden pain or discomfort, literally."
    },
    {
        "word": "alone",
        "clue": "\"Falling to only one person in a crowded space.\""
    },
    {
        "word": "belch",
        "clue": "\"Emphatically expressing regret over dinner.\""
    },
    {
        "word": "budge",
        "clue": "\"Be prepared to yield an inch\""
    },
    {
        "word": "climb",
        "clue": "\"Astronaut's ascent, for short\""
    },
    {
        "word": "debut",
        "clue": "\"First appearance in showbiz.\""
    },
    {
        "word": "elect",
        "clue": "\"Choose to support a candidate in an election.\""
    },
    {
        "word": "flick",
        "clue": "\"Movement of a wrist or finger, often involuntarily.\""
    },
    {
        "word": "gnash",
        "clue": "\"Grind your teeth with frustration, fittingly.\""
    },
    {
        "word": "horse",
        "clue": "\"Stable resident, e.g.\""
    },
    {
        "word": "leafy",
        "clue": "\"Vegetation characteristic of a forest glade?\""
    },
    {
        "word": "metal",
        "clue": "\"Common material for tools and jewelry.\""
    },
    {
        "word": "opium",
        "clue": "\"Medicinal extract derived from poppy plants.\""
    },
    {
        "word": "pouch",
        "clue": "\"Bag-like structure often used to carry small items\"."
    },
    {
        "word": "repay",
        "clue": "\"Return to someone who's been owed money or kindness\""
    },
    {
        "word": "sepia",
        "clue": "\"Color reminiscent of old photographs\""
    },
    {
        "word": "smile",
        "clue": "\"Facial expression that conveys joy or amusement.\""
    },
    {
        "word": "stern",
        "clue": "Form of expression that can imply a disapproving or authoritative tone."
    },
    {
        "word": "theme",
        "clue": "\"Subject of a movie or musical?\""
    },
    {
        "word": "undue",
        "clue": "\"Unfairly excessive, perhaps unfairly gained\""
    },
    {
        "word": "winch",
        "clue": "\"Device that's often used to haul heavy loads with a pull, rather than a push.\""
    },
    {
        "word": "along",
        "clue": "\"A path or route that stretches from start to finish\""
    },
    {
        "word": "belie",
        "clue": "\"Trust something implicitly\"."
    },
    {
        "word": "buggy",
        "clue": "\"Flawed or temperamental, like a childhood ride vehicle.\""
    },
    {
        "word": "cling",
        "clue": "\"Finger's stubborn hold\""
    },
    {
        "word": "decal",
        "clue": "\"Label or sticker attached to an object?\""
    },
    {
        "word": "elegy",
        "clue": "\"Painful song of remembrance\""
    },
    {
        "word": "flier",
        "clue": "\"Person distributing leaflets or advertising materials in public areas.\""
    },
    {
        "word": "gnome",
        "clue": "Small, mischievous forest dweller often depicted as short and bearded."
    },
    {
        "word": "hotel",
        "clue": "\"Location where weary travelers usually stay overnight.\""
    },
    {
        "word": "leaky",
        "clue": "\"Prone to unexpected water drips.\""
    },
    {
        "word": "meter",
        "clue": "\"Measure of poetry, music, or time\""
    },
    {
        "word": "optic",
        "clue": "\"Relating to sight or vision, as in 'optical' lenses.\""
    },
    {
        "word": "pound",
        "clue": "\"Unit of weight equal to 16 ounces.\""
    },
    {
        "word": "repel",
        "clue": "\"Drive away, as a skunk might\""
    },
    {
        "word": "serif",
        "clue": "\"In typography, this font's characteristic is its small lines that add to its 'elegance'.\""
    },
    {
        "word": "smirk",
        "clue": "\"A hint of condescension on someone's face.\""
    },
    {
        "word": "stick",
        "clue": "\"Branch or rod used in golf or crafts?\""
    },
    {
        "word": "there",
        "clue": "Across: Direction to take (5 letters)."
    },
    {
        "word": "unfed",
        "clue": "\"Starving due to lack of sustenance\""
    },
    {
        "word": "windy",
        "clue": "\"Icy air that makes you cling to your hat.\""
    },
    {
        "word": "aloof",
        "clue": "\"Unyielding in emotional approach, like a distant star.\""
    },
    {
        "word": "belle",
        "clue": "French word for \"beautiful\" or \"lovely lady\"."
    },
    {
        "word": "bugle",
        "clue": "\"Sound maker often associated with military parades\""
    },
    {
        "word": "clink",
        "clue": "Sound made when metal strikes another, often at a bar or tavern."
    },
    {
        "word": "decay",
        "clue": "\"Process that brings old materials to ruin over time.\""
    },
    {
        "word": "elfin",
        "clue": "\"Antlered forest dweller's supposed trait.\""
    },
    {
        "word": "fling",
        "clue": "\"Whirlwind romance, in social circles\""
    },
    {
        "word": "godly",
        "clue": "\"Divine in nature and character, fitting a saint or superhero.\""
    },
    {
        "word": "hotly",
        "clue": "\"Heated debate topic\""
    },
    {
        "word": "leant",
        "clue": "\"Fruit that's often bent or twisted in nature.\""
    },
    {
        "word": "metro",
        "clue": "\"Underground urban transportation system, often abbreviated.\""
    },
    {
        "word": "orbit",
        "clue": "\"Path that a planet or satellite follows around another celestial body.\""
    },
    {
        "word": "pouty",
        "clue": "\"Folding arms with displeasure\""
    },
    {
        "word": "reply",
        "clue": "\"Outlet of verbal dissatisfaction or agreement\""
    },
    {
        "word": "serum",
        "clue": "\"Medical liquid applied to wounds or ailments\""
    },
    {
        "word": "smite",
        "clue": "\"Strike with divine or superhuman force, as a god might.\""
    },
    {
        "word": "stiff",
        "clue": "\"Unyielding in resistance or demeanor.\""
    },
    {
        "word": "these",
        "clue": "\"What people often use to address a crowd?\""
    },
    {
        "word": "unfit",
        "clue": "\"Unqualified to participate.\""
    },
    {
        "word": "wiser",
        "clue": "\"Having gained experience over time, perhaps literally through gray hair.\""
    },
    {
        "word": "aloud",
        "clue": "\"Making your voice heard in public\"."
    },
    {
        "word": "belly",
        "clue": "\"Part of the body where stomachs reside?\""
    },
    {
        "word": "build",
        "clue": "\"Form or construct something, often over time.\""
    },
    {
        "word": "cloak",
        "clue": "\"Warm outer layer, often worn by royalty.\""
    },
    {
        "word": "decor",
        "clue": "\"Finish that gives a room its unique style.\""
    },
    {
        "word": "elide",
        "clue": "\"Verb meaning to avoid or dodge a question or issue, often in a subtle or evasive manner.\""
    },
    {
        "word": "flint",
        "clue": "\"Spark-producing material often used as a fire starter.\""
    },
    {
        "word": "going",
        "clue": "\"Direction or movement, e.g.\""
    },
    {
        "word": "hound",
        "clue": "\"Type of dog often used for hunting, such as coon or beagle.\""
    },
    {
        "word": "leapt",
        "clue": "\"Made a sudden, energetic jump.\""
    },
    {
        "word": "micro",
        "clue": "\"Tiny scale, literally\""
    },
    {
        "word": "order",
        "clue": "\"Lineup of items or people, for short.\""
    },
    {
        "word": "power",
        "clue": "\"This energy source can fuel a home\""
    },
    {
        "word": "rerun",
        "clue": "\"Show that's given an encore performance.\""
    },
    {
        "word": "serve",
        "clue": "\"Pour out a drink, literally\"."
    },
    {
        "word": "smith",
        "clue": "\"Blacksmith's trade, literally\""
    },
    {
        "word": "still",
        "clue": "\"Remaining motionless in time.\""
    },
    {
        "word": "theta",
        "clue": "\"Letters of the Greek alphabet, in order from E to B.\""
    },
    {
        "word": "unify",
        "clue": "\"Join forces to create a sense of unity.\""
    },
    {
        "word": "wispy",
        "clue": "\"Faintly perceptible\""
    },
    {
        "word": "alpha",
        "clue": "\"A letter of the Greek alphabet that's first in line.\""
    },
    {
        "word": "below",
        "clue": "\"Underneath something or person\""
    },
    {
        "word": "built",
        "clue": "\"Formed over time, literally or figuratively.\""
    },
    {
        "word": "clock",
        "clue": "\"Time-keeping device often found on walls.\""
    },
    {
        "word": "decoy",
        "clue": "Fakes a call to lure in the competition?"
    },
    {
        "word": "elite",
        "clue": "\"Top-tier group or category\"."
    },
    {
        "word": "flirt",
        "clue": "\"Slyly wooing someone with charm.\""
    },
    {
        "word": "golem",
        "clue": "\"Creation from Jewish mythology with supernatural strength.\""
    },
    {
        "word": "house",
        "clue": "\"Residence or home, e.g.\""
    },
    {
        "word": "learn",
        "clue": "\"Acquire knowledge through study or experience.\""
    },
    {
        "word": "midge",
        "clue": "\"Flying pest that can ruin a summer evening.\""
    },
    {
        "word": "organ",
        "clue": "\"Key component of a pipe or piano.\""
    },
    {
        "word": "prank",
        "clue": "Mischievous trick or joke."
    },
    {
        "word": "reset",
        "clue": "\"Reboot option, literally\""
    },
    {
        "word": "setup",
        "clue": "\"Establishing a routine, as in organizing your day's tasks?\""
    },
    {
        "word": "smock",
        "clue": "\"Protective garment worn by artists and craftsmen.\""
    },
    {
        "word": "stilt",
        "clue": "\"Supporting member of a circus performer.\""
    },
    {
        "word": "thick",
        "clue": "\"Rich in texture, literally.\""
    },
    {
        "word": "union",
        "clue": "\"Agreement formed by collective effort.\""
    },
    {
        "word": "witch",
        "clue": "\"Magical being often depicted as old and eccentric\"."
    },
    {
        "word": "altar",
        "clue": "\"Place where sacrifices or prayers are made, in short form\"."
    },
    {
        "word": "bench",
        "clue": "\"Sit pretty on this piece of furniture.\""
    },
    {
        "word": "bulge",
        "clue": "\"Swollen area on the body, often a sign of pregnancy or an injury.\""
    },
    {
        "word": "clone",
        "clue": "\"Genetically engineered duplicate\""
    },
    {
        "word": "decry",
        "clue": "Flawed praise, or verbal criticism of something."
    },
    {
        "word": "elope",
        "clue": "\"Discreetly leave without fanfare\""
    },
    {
        "word": "float",
        "clue": "Across, \"stay afloat\""
    },
    {
        "word": "golly",
        "clue": "\"Frequent expression of surprise or excitement\""
    },
    {
        "word": "hovel",
        "clue": "\"Small, rustic dwelling, often with makeshift features.\""
    },
    {
        "word": "lease",
        "clue": "\"Agreement to rent property temporarily?\""
    },
    {
        "word": "midst",
        "clue": "\"Icy winter landscape feature\""
    },
    {
        "word": "other",
        "clue": "Flipping side of the coin."
    },
    {
        "word": "prawn",
        "clue": "\"Seafood delicacy often served as sushi or in curries.\""
    },
    {
        "word": "resin",
        "clue": "\" Sticky substance used in crafting and woodworking.\""
    },
    {
        "word": "seven",
        "clue": "\"Number that's one more than six.\""
    },
    {
        "word": "smoke",
        "clue": "\"Fumes rising from a dying fire\""
    },
    {
        "word": "sting",
        "clue": "Painful memory that lingers, perhaps?"
    },
    {
        "word": "thief",
        "clue": "\"Person who's always looking for an easy score.\""
    },
    {
        "word": "unite",
        "clue": "\"Join forces, as in coming together to form an alliance.\""
    },
    {
        "word": "witty",
        "clue": "\"Quick-witted and clever in repartee.\""
    },
    {
        "word": "alter",
        "clue": "\"Change something, as a mood or a course in life\""
    },
    {
        "word": "beret",
        "clue": "French military hat?"
    },
    {
        "word": "bulky",
        "clue": "\"Overly large or cumbersome, often physically demanding to handle.\""
    },
    {
        "word": "close",
        "clue": "\"Nearness to heart or mind, e.g.\""
    },
    {
        "word": "defer",
        "clue": "\"Postpone a decision or appointment\""
    },
    {
        "word": "elude",
        "clue": "\"Escape or slip away from capture.\""
    },
    {
        "word": "flock",
        "clue": "\"Group of birds, often in sync\""
    },
    {
        "word": "gonad",
        "clue": "\"Male reproductive organ, often referred to in polite conversation as 'down under'\""
    },
    {
        "word": "hover",
        "clue": "\"Float or drift in mid-air, with some ease.\""
    },
    {
        "word": "leash",
        "clue": "\"Attachment for a dog walk\""
    },
    {
        "word": "might",
        "clue": "\"May be considered possible in an uncertain situation.\""
    },
    {
        "word": "otter",
        "clue": "\"River dweller with a playful reputation.\""
    },
    {
        "word": "preen",
        "clue": "Fluff out your feathers, literally and figuratively."
    },
    {
        "word": "retch",
        "clue": "\"Make a quick exit, often with dinner.\""
    },
    {
        "word": "sever",
        "clue": "\"End or cut off abruptly\""
    },
    {
        "word": "smoky",
        "clue": "\"Aroma often associated with campfires or BBQs.\""
    },
    {
        "word": "stink",
        "clue": "Smelly secret to your neighbor's delight?"
    },
    {
        "word": "thigh",
        "clue": "\"Part of the lower extremity, literally and figuratively.\""
    },
    {
        "word": "unity",
        "clue": "\"Coming together in harmony?\""
    },
    {
        "word": "woken",
        "clue": "\"Awakened from sleep\""
    },
    {
        "word": "amass",
        "clue": "\"Gather wealth or assets over time, figuratively.\""
    },
    {
        "word": "berry",
        "clue": "Tiny fruit often used in baked goods and smoothies."
    },
    {
        "word": "bully",
        "clue": "\"Person who consistently takes advantage of others' weaknesses.\""
    },
    {
        "word": "cloth",
        "clue": "\"Soft material used to make dresses and shirts.\""
    },
    {
        "word": "deign",
        "clue": "\"Lower one's standards, as a superior might\"."
    },
    {
        "word": "email",
        "clue": "\"Electronic communication method, often used to share documents and messages.\""
    },
    {
        "word": "flood",
        "clue": "\"Water surge that overflows its banks?\""
    },
    {
        "word": "goner",
        "clue": "\"Felled by misfortune, literally\""
    },
    {
        "word": "howdy",
        "clue": "\"Southern greeting to a stranger?\""
    },
    {
        "word": "least",
        "clue": "\"Smallest of its kind\""
    },
    {
        "word": "milky",
        "clue": "\"Like an infant's first bottle\""
    },
    {
        "word": "ought",
        "clue": "\"Something one should consider doing or feeling, literally.\""
    },
    {
        "word": "press",
        "clue": "\"Force or squeeze, as in an ironing board\""
    },
    {
        "word": "retro",
        "clue": "\"Characterizing something as having an old-fashioned flair.\""
    },
    {
        "word": "sewer",
        "clue": "\"Pipe system beneath cities.\""
    },
    {
        "word": "smote",
        "clue": "Ancient verb meaning to punish or afflict, as in \"God smote the Egyptians\"."
    },
    {
        "word": "stint",
        "clue": "\"Short-term engagement, often in a job or endeavor.\""
    },
    {
        "word": "thing",
        "clue": "\"Common noun for an object or entity\""
    },
    {
        "word": "unlit",
        "clue": "Darkened by lack of light."
    },
    {
        "word": "woman",
        "clue": "\"Female of the species.\""
    },
    {
        "word": "amaze",
        "clue": "\"Leave someone utterly astonished, as if speechless.\""
    },
    {
        "word": "berth",
        "clue": "\"Place to board a ship or plane.\""
    },
    {
        "word": "bunch",
        "clue": "\"Group of flowers or grapes, perhaps?\""
    },
    {
        "word": "cloud",
        "clue": "\"Fluffy white mass in the sky\""
    },
    {
        "word": "deity",
        "clue": "\"Divine being in a mythological pantheon, often worshiped by many.\""
    },
    {
        "word": "embed",
        "clue": "Insert a message or idea into something."
    },
    {
        "word": "floor",
        "clue": "\"Surface beneath your feet, literally?\""
    },
    {
        "word": "goody",
        "clue": "\"Person who's always on their best behavior.\""
    },
    {
        "word": "human",
        "clue": "\"Species to which you belong, literally.\""
    },
    {
        "word": "leave",
        "clue": "\"Depart from a place, perhaps with regret.\""
    },
    {
        "word": "mimic",
        "clue": "\"Copy someone's mannerisms with skill.\""
    },
    {
        "word": "ounce",
        "clue": "Measure that's equal to eight fluid ounces."
    },
    {
        "word": "price",
        "clue": "\"Cost of something essential to buying it.\""
    },
    {
        "word": "retry",
        "clue": "\"Take another shot at something that didn't work out.\""
    },
    {
        "word": "shack",
        "clue": "\"Small, humble dwelling in the countryside.\""
    },
    {
        "word": "snack",
        "clue": "\"Temporary sustenance option.\""
    },
    {
        "word": "stock",
        "clue": "\"Funds invested in a company\""
    },
    {
        "word": "think",
        "clue": "\"Idea forms in my mind\""
    },
    {
        "word": "unmet",
        "clue": "\"Remaining to be fulfilled, figuratively or literally\""
    },
    {
        "word": "women",
        "clue": "\"Female sex, in general\""
    },
    {
        "word": "amber",
        "clue": "\"Resin formed from tree sap, often used in jewelry.\""
    },
    {
        "word": "beset",
        "clue": "\"Surrounded with troubles, or caught in a difficult situation.\""
    },
    {
        "word": "bunny",
        "clue": "Furry forest dweller."
    },
    {
        "word": "clout",
        "clue": "\"Influence or social standing, e.g.\""
    },
    {
        "word": "delay",
        "clue": "\"Pause in progress\""
    },
    {
        "word": "ember",
        "clue": "\"Remainder of a dying fire.\""
    },
    {
        "word": "flora",
        "clue": "\"Greenery of a garden or forest\""
    },
    {
        "word": "gooey",
        "clue": "\"Melted to the touch\""
    },
    {
        "word": "humid",
        "clue": "\"Foggy morning atmosphere\""
    },
    {
        "word": "ledge",
        "clue": "\"Surface that's often slippery?\""
    },
    {
        "word": "mince",
        "clue": "\"Small piece of something minced or chopped.\""
    },
    {
        "word": "outdo",
        "clue": "\"Exceed or surpass someone else's achievement with greater skill or success.\""
    },
    {
        "word": "prick",
        "clue": "\"Needle-like object that may cause discomfort.\""
    },
    {
        "word": "reuse",
        "clue": "\"Make something useful again, as in repurposing an old item.\""
    },
    {
        "word": "shade",
        "clue": "\"Lightening of an area, perhaps due to overhanging trees?\""
    },
    {
        "word": "snail",
        "clue": "Slow mover of the garden."
    },
    {
        "word": "stoic",
        "clue": "\"Unfazed by turmoil, this temperament is often associated with ancient Greek warriors.\""
    },
    {
        "word": "third",
        "clue": "\"Position in a sequence or series.\""
    },
    {
        "word": "unset",
        "clue": "\"Unsettled, perhaps in one's circumstances\""
    },
    {
        "word": "woody",
        "clue": "\"Woodland inhabitant, in short.\""
    },
    {
        "word": "amble",
        "clue": "\"Take it easy, with every step?\""
    },
    {
        "word": "betel",
        "clue": "\"Spit-wad or Indian snack, often wrapped in a leaf.\""
    },
    {
        "word": "burly",
        "clue": "\"Large and physically imposing, often used to describe someone's build.\""
    },
    {
        "word": "clove",
        "clue": "Small, aromatic bud used in cooking and perfumery."
    },
    {
        "word": "delta",
        "clue": "\"Fleming's fictional spy's surname\""
    },
    {
        "word": "emcee",
        "clue": "Host of a party or stage show"
    },
    {
        "word": "floss",
        "clue": "\"Twisted thread used to clean between teeth?\""
    },
    {
        "word": "goofy",
        "clue": "\"Clumsy or awkwardly humorous, like Homer Simpson.\""
    },
    {
        "word": "humor",
        "clue": "Laughter's underlying quality, often found in jests and witty remarks."
    },
    {
        "word": "leech",
        "clue": "\"This bloodsucking parasite often attaches to fish.\""
    },
    {
        "word": "miner",
        "clue": "\"Digging operator, perhaps.\""
    },
    {
        "word": "outer",
        "clue": "Flaky crust on a pie?"
    },
    {
        "word": "pride",
        "clue": "\"Feeling of satisfaction with accomplishments\""
    },
    {
        "word": "revel",
        "clue": "\"Dance with abandon\""
    },
    {
        "word": "shady",
        "clue": "\"Deceptively suspicious character, perhaps?\""
    },
    {
        "word": "snake",
        "clue": "\"Reptilian creature often found in the grass.\""
    },
    {
        "word": "stoke",
        "clue": "\"Feed a fire or one's passion\""
    },
    {
        "word": "thong",
        "clue": "\"Type of shoe strap commonly worn in warm weather.\""
    },
    {
        "word": "untie",
        "clue": "\"Loosen the knot on a rope, literally?\""
    },
    {
        "word": "wooer",
        "clue": "\"Person who flirts with someone to win them over romantically.\""
    },
    {
        "word": "amend",
        "clue": "\"Alter or change, as a policy or law.\""
    },
    {
        "word": "bevel",
        "clue": "\"Shaping tool's angled cut\""
    },
    {
        "word": "burnt",
        "clue": "\"Overcooked to a crisp, as an egg.\""
    },
    {
        "word": "clown",
        "clue": "\"Jester or circus performer.\""
    },
    {
        "word": "delve",
        "clue": "\"Start digging into, like a detective solving a case.\""
    },
    {
        "word": "empty",
        "clue": "\"Space left vacant, or what's found in an unused drawer?\""
    },
    {
        "word": "flour",
        "clue": "\"Key ingredient in baking bread.\""
    },
    {
        "word": "goose",
        "clue": "Fowl often seen on parks and ponds."
    },
    {
        "word": "humph",
        "clue": "\"Exaggerated expression of satisfaction or annoyance, often made with a raised eyebrow.\""
    },
    {
        "word": "leery",
        "clue": "Cautioned by skepticism?"
    },
    {
        "word": "minim",
        "clue": "\"A measure of something that's as much as it is little\""
    },
    {
        "word": "outgo",
        "clue": "\"Cost, expense, or expenditure\""
    },
    {
        "word": "pried",
        "clue": "\"Force open with effort and persistence\""
    },
    {
        "word": "revue",
        "clue": "\"Entertainment format often featuring song and dance numbers?\""
    },
    {
        "word": "shaft",
        "clue": "\"Rod in a drill or axe handle\"."
    },
    {
        "word": "snaky",
        "clue": "\"Winding like a serpent's path\""
    },
    {
        "word": "stole",
        "clue": "\"Taken without permission, as in 'the museum stole our attention'\""
    },
    {
        "word": "thorn",
        "clue": "\"Poisonous part of a plant's stem or branch\""
    },
    {
        "word": "until",
        "clue": "\"Duration of time, literally\""
    },
    {
        "word": "wooly",
        "clue": "\"Fuzzy in appearance, like a sheep's coat\""
    },
    {
        "word": "amiss",
        "clue": "\"Away from what's intended or correct, literally\""
    },
    {
        "word": "bezel",
        "clue": "\"Ring feature, often set with gemstones.\""
    },
    {
        "word": "burst",
        "clue": "Flower part that suddenly opens."
    },
    {
        "word": "cluck",
        "clue": "\"Fowl sound typically made in the morning\""
    },
    {
        "word": "demon",
        "clue": "\"Malevolent entity from mythology or folklore.\""
    },
    {
        "word": "enact",
        "clue": "\"Away with idle habits, this verb means to bring something into being\""
    },
    {
        "word": "flout",
        "clue": "\"Ignoring a rule or custom, perhaps literally\""
    },
    {
        "word": "gorge",
        "clue": "\"Long, narrow valley carved by a river\"."
    },
    {
        "word": "humus",
        "clue": "\"Rich soil component, literally the result of decay.\""
    },
    {
        "word": "lefty",
        "clue": "\"Southpaw or preferred throwing hand, for short.\""
    },
    {
        "word": "minor",
        "clue": "\"Smaller in scale or importance than a major issue\""
    },
    {
        "word": "ovary",
        "clue": "Female reproductive organ containing eggs."
    },
    {
        "word": "prime",
        "clue": "\"Most favored or at its best\""
    },
    {
        "word": "rhino",
        "clue": "\"Large African mammal with a distinctive horn.\""
    },
    {
        "word": "shake",
        "clue": "\"Rock back and forth in a fit of laughter\""
    },
    {
        "word": "snare",
        "clue": "\"Trap that's laid in wait.\""
    },
    {
        "word": "stomp",
        "clue": "\"Sound made by a dancing footstep, perhaps.\""
    },
    {
        "word": "those",
        "clue": "Fellowship of people, e.g."
    },
    {
        "word": "unwed",
        "clue": "\"Single by circumstance, not choice\""
    },
    {
        "word": "woozy",
        "clue": "\"Feeling faintly unsteady, as after too many drinks.\""
    },
    {
        "word": "amity",
        "clue": "\"Friendship or alliance between nations?\""
    },
    {
        "word": "bible",
        "clue": "\"Religious text that's also known as the Old and New Testaments combined.\""
    },
    {
        "word": "bused",
        "clue": "\"Transported by urban bus route, literally\""
    },
    {
        "word": "clued",
        "clue": "\"Figured out, as in 'I finally ______'\""
    },
    {
        "word": "demur",
        "clue": "\"Express hesitation or refusal, literally 'to express doubt'\""
    },
    {
        "word": "endow",
        "clue": "\"Investing in someone or something's future\""
    },
    {
        "word": "flown",
        "clue": "\"Traveling by air, for short.\""
    },
    {
        "word": "gouge",
        "clue": "\"Carve out of something with force, perhaps unintentionally\""
    },
    {
        "word": "hunch",
        "clue": "\"A notion that's not entirely on the level.\""
    },
    {
        "word": "legal",
        "clue": "\"Following the rules of law\""
    },
    {
        "word": "minty",
        "clue": "\"Like a refreshing toothpaste flavor.\""
    },
    {
        "word": "ovate",
        "clue": "\"Describing an egg shape, or having this symmetrical curve\""
    },
    {
        "word": "primo",
        "clue": "\"Music term referring to a lead vocalist's solo performance.\""
    },
    {
        "word": "rhyme",
        "clue": "\"Fitting meter in poetry\""
    },
    {
        "word": "shaky",
        "clue": "\"Feeling quite unsteady, perhaps after a few too many glasses of wine.\""
    },
    {
        "word": "snarl",
        "clue": "\"Growl with a raised lip\""
    },
    {
        "word": "stone",
        "clue": "Rocky foundation (5 letters)."
    },
    {
        "word": "three",
        "clue": "\"Small number that's often a trifling matter.\""
    },
    {
        "word": "unzip",
        "clue": "\"Open with a pull at the top.\""
    },
    {
        "word": "wordy",
        "clue": "Fond of verbosity?"
    },
    {
        "word": "among",
        "clue": "\"Where you might find yourself in the crowd\""
    },
    {
        "word": "bicep",
        "clue": "Muscle that flexes to reveal an elbow's inner workings?"
    },
    {
        "word": "bushy",
        "clue": "\"Thickly coated like a forest dweller's hair?\""
    },
    {
        "word": "clump",
        "clue": "\"Agglomeration of plants or hair, often awkwardly positioned.\""
    },
    {
        "word": "denim",
        "clue": "\"Fabric often used to make jeans.\""
    },
    {
        "word": "enema",
        "clue": "\"Medical procedure to clear out the bowels\""
    },
    {
        "word": "fluff",
        "clue": "\"Filling or padding that gives things a soft appearance.\""
    },
    {
        "word": "gourd",
        "clue": "\"Type of vine that produces edible, hard-shelled fruit.\""
    },
    {
        "word": "hunky",
        "clue": "\"Charismatic in a ruggedly handsome way.\""
    },
    {
        "word": "leggy",
        "clue": "\"Long-limbed or gangly, like a model with too much time to grow.\""
    },
    {
        "word": "minus",
        "clue": "\"A number less than another\""
    },
    {
        "word": "overt",
        "clue": "\"Blatantly noticeable, in a loud voice.\""
    },
    {
        "word": "print",
        "clue": "\"Result of inking and pressing paper together?\""
    },
    {
        "word": "rider",
        "clue": "\"Person who tames a wild mustang, literally.\""
    },
    {
        "word": "shale",
        "clue": "\"Rock formation that's often quarried for stone.\""
    },
    {
        "word": "sneak",
        "clue": "\"Move stealthily or escape detection\""
    },
    {
        "word": "stony",
        "clue": "\"Hard as rock, fitting this adjective\""
    },
    {
        "word": "threw",
        "clue": "\"Action implied by a tossed coin.\""
    },
    {
        "word": "upper",
        "clue": "\"Higher than usual, in an upward direction\""
    },
    {
        "word": "world",
        "clue": "\"Global sphere of human existence.\""
    },
    {
        "word": "ample",
        "clue": "\"Having more than enough of something.\""
    },
    {
        "word": "biddy",
        "clue": "\"Colloquial term for an elderly woman\""
    },
    {
        "word": "butch",
        "clue": "\"Patriarchal style of dress, often associated with masculinity.\""
    },
    {
        "word": "clung",
        "clue": "\"Cling tightly to something or someone\""
    },
    {
        "word": "dense",
        "clue": "\"Thick as thieves, this word describes something heavy with weight.\""
    },
    {
        "word": "enemy",
        "clue": "\"Person who opposes you in battle or argument?\""
    },
    {
        "word": "fluid",
        "clue": "\"Liquid state of matter.\""
    },
    {
        "word": "grace",
        "clue": "\"Characteristic of elegance or refinement.\""
    },
    {
        "word": "hurry",
        "clue": "\"Rush with urgency, like a tardy commuter.\""
    },
    {
        "word": "lemon",
        "clue": "\"Citrus fruit often squeezed for its juice.\""
    },
    {
        "word": "mirth",
        "clue": "\"Laughter and joy, often the subject of whimsical poetry.\""
    },
    {
        "word": "ovine",
        "clue": "\"Type of sheep often associated with wool production.\""
    },
    {
        "word": "prior",
        "clue": "\"Earlier in time or hierarchy\""
    },
    {
        "word": "ridge",
        "clue": "\"Mountainous outcropping or line of hills\""
    },
    {
        "word": "shall",
        "clue": "Futile option, as in \"I'll ________ to you if I get my way.\""
    },
    {
        "word": "sneer",
        "clue": "\"Express contempt with an upward twist of the lip.\""
    },
    {
        "word": "stood",
        "clue": "\"Position or location\""
    },
    {
        "word": "throb",
        "clue": "Feverish pulse."
    },
    {
        "word": "upset",
        "clue": "\"Feeling of dismay or discontent that's usually accompanied by a scowl.\""
    },
    {
        "word": "worry",
        "clue": "\"A persistent mental concern\""
    },
    {
        "word": "amply",
        "clue": "\"Providing sufficient quantity, or a synonym for 'enough'\""
    },
    {
        "word": "bigot",
        "clue": "\"Person who holds prejudicial views against others because of their group membership.\""
    },
    {
        "word": "butte",
        "clue": "\"Rock formation often seen in the American West.\""
    },
    {
        "word": "coach",
        "clue": "\"Leader who guides and motivates athletes.\""
    },
    {
        "word": "depot",
        "clue": "\"Station where trains stop to load or unload cargo\"."
    },
    {
        "word": "enjoy",
        "clue": "\"Indulge in with great pleasure\""
    },
    {
        "word": "fluke",
        "clue": "\"Fish's unusual catch\""
    },
    {
        "word": "grade",
        "clue": "\"Scale of academic achievement, perhaps.\""
    },
    {
        "word": "husky",
        "clue": "\"Furry breed with piercing eyes, often associated with Siberian origins.\""
    },
    {
        "word": "lemur",
        "clue": "\"Primate native to Madagascar, known for its tail\""
    },
    {
        "word": "miser",
        "clue": "\"Person with a penchant for pinching pennies?\""
    },
    {
        "word": "ovoid",
        "clue": "Shape resembling an egg or oval, often used to describe something curvaceous and symmetrical."
    },
    {
        "word": "prism",
        "clue": "\"Object that refracts light into its component colors\""
    },
    {
        "word": "rifle",
        "clue": "\"Firearm often used in hunting and military operations.\""
    },
    {
        "word": "shalt",
        "clue": "\"Formal way to say 'you should'\""
    },
    {
        "word": "snide",
        "clue": "Sneering remark maker."
    },
    {
        "word": "stool",
        "clue": "\"Furniture often placed beside a chair.\""
    },
    {
        "word": "throw",
        "clue": "\"Cast your lot, literally.\""
    },
    {
        "word": "urban",
        "clue": "\"City dweller's common habitat, in a nutshell.\""
    },
    {
        "word": "worse",
        "clue": "\"Fashionably speaking, this adjective describes an outfit or style that's out of date.\""
    },
    {
        "word": "amuse",
        "clue": "\"Entertain in a way that's pleasingly diverting\""
    },
    {
        "word": "bilge",
        "clue": "\"Part of a ship's lowest compartment, often foul-smelling.\""
    },
    {
        "word": "buxom",
        "clue": "Flawless figure, in Shakespearean parlance."
    },
    {
        "word": "coast",
        "clue": "\"Edge of land bordering a body of water?\""
    },
    {
        "word": "depth",
        "clue": "\"Measure of how far something is from the surface.\""
    },
    {
        "word": "ennui",
        "clue": "Feeling of listless discontent that pervades daily life?"
    },
    {
        "word": "flume",
        "clue": "\"Man-made channel for irrigation or water supply\"."
    },
    {
        "word": "graft",
        "clue": "\"Athlete's medical procedure that's also an office plant issue\""
    },
    {
        "word": "hussy",
        "clue": "Flirtatious woman, or term of endearment in some circles?"
    },
    {
        "word": "leper",
        "clue": "\"Famous biblical figure afflicted with skin disease.\""
    },
    {
        "word": "missy",
        "clue": "\"Southern belle nickname, perhaps.\""
    },
    {
        "word": "owing",
        "clue": "\"Indebted, or in financial trouble\""
    },
    {
        "word": "privy",
        "clue": "\"Private location with a seat of honor\"."
    },
    {
        "word": "right",
        "clue": "\"Direction or alignment\""
    },
    {
        "word": "shame",
        "clue": "\"A feeling of regret or self-blame that can leave you feeling low.\""
    },
    {
        "word": "sniff",
        "clue": "\"Familiar scent or sound\""
    },
    {
        "word": "stoop",
        "clue": "\"Low step leading up to an entrance.\""
    },
    {
        "word": "thrum",
        "clue": "\"Vibrant sound, like a cello string\""
    },
    {
        "word": "urine",
        "clue": "\"Fluid byproduct of the body's metabolic process\"."
    },
    {
        "word": "worst",
        "clue": "\"Most inferior of many options?\""
    },
    {
        "word": "angel",
        "clue": "\"Divine messenger in many faiths and folklore.\""
    },
    {
        "word": "billy",
        "clue": "\"Small size, as in a billy goat\""
    },
    {
        "word": "buyer",
        "clue": "\"Individual who pays the price.\""
    },
    {
        "word": "cobra",
        "clue": "\"Snake with a deadly hood, often associated with ancient Egypt.\""
    },
    {
        "word": "derby",
        "clue": "\"English horse racing event\""
    },
    {
        "word": "ensue",
        "clue": "\"Fate's next step after you do something\""
    },
    {
        "word": "flung",
        "clue": "\"Thrown with great force, like a punch\""
    },
    {
        "word": "grail",
        "clue": "\"Legendary vessel said to possess divine power.\""
    },
    {
        "word": "hutch",
        "clue": "\"Cozy enclosure for a pet, often kept in a backyard.\""
    },
    {
        "word": "level",
        "clue": "\"Height or degree of something, often indicated by a number\""
    },
    {
        "word": "mocha",
        "clue": "\"Brown drink made with espresso and chocolate\""
    },
    {
        "word": "owner",
        "clue": "\"Person with a stake in something?\""
    },
    {
        "word": "prize",
        "clue": "\"Reward for achieving something excellent, perhaps at an awards ceremony?\""
    },
    {
        "word": "rigid",
        "clue": "\"Firm to the touch, figuratively speaking.\""
    },
    {
        "word": "shank",
        "clue": "\"Part of a shoe, often in a prison setting\""
    },
    {
        "word": "snipe",
        "clue": "\"Fowl that's known for its sharp beak, often used to describe someone or something as unfair or critical.\""
    },
    {
        "word": "store",
        "clue": "\"Retail space or department\"."
    },
    {
        "word": "thumb",
        "clue": "Flippable digit on a hand."
    },
    {
        "word": "usage",
        "clue": "\"Reason why something is needed or applied.\""
    },
    {
        "word": "worth",
        "clue": "\"Reflects a person's standing or value.\""
    },
    {
        "word": "anger",
        "clue": "Irritation that's hard to shake."
    },
    {
        "word": "binge",
        "clue": "\"Excessive consumption in a short space of time.\""
    },
    {
        "word": "bylaw",
        "clue": "\"Regulation that's typically set by a governing body.\""
    },
    {
        "word": "cocoa",
        "clue": "\"Rich and chocolatey base of many treats?\""
    },
    {
        "word": "deter",
        "clue": "\"Repel or turn off, as a foul smell might\""
    },
    {
        "word": "enter",
        "clue": "\"Get inside, figuratively or literally\""
    },
    {
        "word": "flunk",
        "clue": "\"Failed miserably in an academic test.\""
    },
    {
        "word": "grain",
        "clue": "\"Type of cereal found in oatmeal or bread.\""
    },
    {
        "word": "hydro",
        "clue": "Flower with water as its symbol, in Greek mythology."
    },
    {
        "word": "lever",
        "clue": "\"Device used to turn or control something, often with a handle or knob.\""
    },
    {
        "word": "modal",
        "clue": "Fittingly, this musical term also describes a way of thinking."
    },
    {
        "word": "oxide",
        "clue": "\"Colorful compound, often in minerals\"."
    },
    {
        "word": "probe",
        "clue": "\"Investigator's tool, literally and figuratively.\""
    },
    {
        "word": "rigor",
        "clue": "\"Intense discipline or mental strain.\""
    },
    {
        "word": "shape",
        "clue": "\"Form that defines the outline of an object\""
    },
    {
        "word": "snoop",
        "clue": "\"Prolonged observation, as in 'I was just snoop-ing around the corner'\""
    },
    {
        "word": "stork",
        "clue": "\"Symbol of new life on a gift-giving delivery?\""
    },
    {
        "word": "thump",
        "clue": "\"Sound made by an impact, often preceded by a loud crash.\""
    },
    {
        "word": "usher",
        "clue": "\"Lady or gentleman of honor at a theater performance.\""
    },
    {
        "word": "would",
        "clue": "\"Common expression of intention, such as 'I'll ______ to the concert'\""
    },
    {
        "word": "angle",
        "clue": "\"Corner of a room, or a point where two lines meet.\""
    },
    {
        "word": "bingo",
        "clue": "\"A popular game of chance involving marking numbers on cards.\""
    },
    {
        "word": "cabal",
        "clue": "\"Secretly plotting group, often with ulterior motives.\""
    },
    {
        "word": "colon",
        "clue": "\"Symbol used to indicate a pause in writing or to introduce a list.\""
    },
    {
        "word": "detox",
        "clue": "\"Get rid of unwanted habits or substances with this cleansing process.\""
    },
    {
        "word": "entry",
        "clue": "\"Something you might put on an application or in a journal.\""
    },
    {
        "word": "flush",
        "clue": "\"Riverbed change\""
    },
    {
        "word": "grand",
        "clue": "\"Formal title given to royalty or nobility, often used to describe something impressive or majestic.\""
    },
    {
        "word": "hyena",
        "clue": "\"Laughing creature of the savannah.\""
    },
    {
        "word": "libel",
        "clue": "\"Act that damages someone's reputation, often through false statements.\""
    },
    {
        "word": "model",
        "clue": "Example of an ideal person, or figure used as a basis for others to emulate."
    },
    {
        "word": "ozone",
        "clue": "Layer of the atmosphere with a deadly scent, also known as \"oxygen's nasty cousin\"."
    },
    {
        "word": "prone",
        "clue": "\"Likely to fall into bad habits or behaviors\""
    },
    {
        "word": "rinse",
        "clue": "\"Cleanse with water, or the final step in washing dishes?\""
    },
    {
        "word": "shard",
        "clue": "\"Broken piece of glass, often found in a shattered mirror.\""
    },
    {
        "word": "snore",
        "clue": "\"Sound made by someone who's resting their head on a pillow\"."
    },
    {
        "word": "storm",
        "clue": "\"Fury of nature\""
    },
    {
        "word": "thyme",
        "clue": "Herb often used in French cooking to add depth and flavor to dishes."
    },
    {
        "word": "using",
        "clue": "\"Employing a particular skill or method.\""
    },
    {
        "word": "wound",
        "clue": "\"Physical hurt or injury, often requiring medical attention.\""
    },
    {
        "word": "angry",
        "clue": "Feeling that's sure to make your temper flare."
    },
    {
        "word": "biome",
        "clue": "\"Type of ecosystem found in rainforests and savannas?\""
    },
    {
        "word": "cabby",
        "clue": "\"Driver of a hansom horse?\""
    },
    {
        "word": "color",
        "clue": "\"Shade or hue, literally.\""
    },
    {
        "word": "deuce",
        "clue": "\"Number that's often taken in card games.\""
    },
    {
        "word": "envoy",
        "clue": "\"Ambassador's representative\""
    },
    {
        "word": "flute",
        "clue": "\"Musical instrument often played at weddings and in orchestras.\""
    },
    {
        "word": "grant",
        "clue": "\"Permission to proceed with a plan or project, perhaps literally.\""
    },
    {
        "word": "hymen",
        "clue": "\"A membrane surrounding the vaginal opening in young females\"."
    },
    {
        "word": "liege",
        "clue": "\"Feudal lord, often holding sway over a vassal\""
    },
    {
        "word": "modem",
        "clue": "\"Furniture device used to connect to the internet at home.\""
    },
    {
        "word": "paddy",
        "clue": "\"Type of Irish grain often used to make whiskey.\""
    },
    {
        "word": "prong",
        "clue": "\"Tip of a fork, often sharp enough to pierce.\""
    },
    {
        "word": "ripen",
        "clue": "\"Become sweeter or more mature, like a fruit left to its full potential.\""
    },
    {
        "word": "share",
        "clue": "\"Divide an inheritance, or express willingness to collaborate.\""
    },
    {
        "word": "snort",
        "clue": "\"Ill-fitting dinner experience\""
    },
    {
        "word": "story",
        "clue": "\"Narrative that unfolds over time\""
    },
    {
        "word": "tiara",
        "clue": "\"Fanciful headpiece often associated with royal crowns.\""
    },
    {
        "word": "usual",
        "clue": "\"Common or everyday standard, in many cases.\""
    },
    {
        "word": "woven",
        "clue": "\"Like a tapestry, literally or figuratively.\""
    },
    {
        "word": "angst",
        "clue": "\"Turbulent emotions, often set to music\""
    },
    {
        "word": "birch",
        "clue": "Tree species native to northern Europe, known for its white or yellowish bark that peels in horizontal layers."
    },
    {
        "word": "cabin",
        "clue": "\"Cozy retreat in the woods, perhaps.\""
    },
    {
        "word": "comet",
        "clue": "\"Spacebody often seen with a bright tail?\""
    },
    {
        "word": "devil",
        "clue": "\"Symbol of evil in Christian tradition, often depicted with horns.\""
    },
    {
        "word": "epoch",
        "clue": "\"Age of dinosaur discovery\""
    },
    {
        "word": "flyer",
        "clue": "\"Small advertisement distributed in public places, often at events or locations.\""
    },
    {
        "word": "grape",
        "clue": "\"Purple treasure often turned into wine.\""
    },
    {
        "word": "hyper",
        "clue": "\"Exceeding normal limits, as in 'the hyperactive child'\""
    },
    {
        "word": "light",
        "clue": "\"Bright spot in an otherwise darkened room\""
    },
    {
        "word": "mogul",
        "clue": "\"Ruthless entrepreneur with wealth and power.\""
    },
    {
        "word": "pagan",
        "clue": "\"Belonging to ancient polytheistic traditions, not of Christianity.\""
    },
    {
        "word": "proof",
        "clue": "\"Facts that stand in opposition to a claim\""
    },
    {
        "word": "riper",
        "clue": "\"Having reached its full stage of maturity.\""
    },
    {
        "word": "shark",
        "clue": "\"Fearsome sea creature often found in deep waters.\""
    },
    {
        "word": "snout",
        "clue": "\"Feature of a pig or polar bear?\""
    },
    {
        "word": "stout",
        "clue": "\"Fermentation process for beer\""
    },
    {
        "word": "tibia",
        "clue": "\"Fibula's counterpart in the human leg.\""
    },
    {
        "word": "usurp",
        "clue": "\"Take someone's rightful place or power, often without permission.\""
    },
    {
        "word": "wrack",
        "clue": "\"Remainder of a shipwreck\""
    },
    {
        "word": "anime",
        "clue": "\"Style of Japanese animation often featuring colorful characters and fantasy storylines.\""
    },
    {
        "word": "birth",
        "clue": "Fateful occasion that brings a new life into the world."
    },
    {
        "word": "cable",
        "clue": "\"Type of fiber-optic connection that brings TV and internet to your doorstep.\""
    },
    {
        "word": "comfy",
        "clue": "\"Cozy feeling in your favorite armchair?\""
    },
    {
        "word": "diary",
        "clue": "\"Personal record keeper, often scribbled in by night.\""
    },
    {
        "word": "epoxy",
        "clue": "\"Resin used in crafting and industrial projects.\""
    },
    {
        "word": "foamy",
        "clue": "\"Like a freshly poured beer head.\""
    },
    {
        "word": "graph",
        "clue": "\"Chart your course with this graphical term.\""
    },
    {
        "word": "icily",
        "clue": "\"Frozen in demeanor\""
    },
    {
        "word": "liken",
        "clue": "\"Imitate or copy, as in 'he likened his friend's smile to a work of art'\""
    },
    {
        "word": "moist",
        "clue": "\"Dampen someone's appetite\""
    },
    {
        "word": "paint",
        "clue": "\"Colorful coating applied to walls and canvases alike.\""
    },
    {
        "word": "prose",
        "clue": "\"Form of writing that differs from poetry in its narrative style.\""
    },
    {
        "word": "risen",
        "clue": "\"Arise from sleep\""
    },
    {
        "word": "sharp",
        "clue": "\"Having a pointed edge, like a knife.\""
    },
    {
        "word": "snowy",
        "clue": "\"Covered in white winter precipitation.\""
    },
    {
        "word": "stove",
        "clue": "\"Device used to cook and heat in a home setting.\""
    },
    {
        "word": "tidal",
        "clue": "\"Following the pull of the sea's ebb and flow\""
    },
    {
        "word": "utile",
        "clue": "\"Useful, or a virtue in character?\""
    },
    {
        "word": "wrath",
        "clue": "\"Anger that's seething beneath the surface.\""
    },
    {
        "word": "ankle",
        "clue": "\"Part of the leg, below the knee.\""
    },
    {
        "word": "bison",
        "clue": "\"Large, shaggy-haired American mammal native to grasslands.\""
    },
    {
        "word": "cacao",
        "clue": "\"Fruit source of chocolate.\""
    },
    {
        "word": "comic",
        "clue": "Striped with humor, this term describes a light-hearted or humorous drawing."
    },
    {
        "word": "dicey",
        "clue": "\"Uncertain situation, like a roll of the dice.\""
    },
    {
        "word": "equal",
        "clue": "\"Same as, in harmony\""
    },
    {
        "word": "focal",
        "clue": "\"A main point of interest\"."
    },
    {
        "word": "grasp",
        "clue": "\"Firm hold on something is described by this word.\""
    },
    {
        "word": "icing",
        "clue": "\"Sweetener often used to decorate cakes.\""
    },
    {
        "word": "lilac",
        "clue": "Floral hue reminiscent of first spring showers."
    },
    {
        "word": "molar",
        "clue": "\"Typically located in the back of the human mouth.\""
    },
    {
        "word": "paler",
        "clue": "\"Lessening in brightness or tone, fittingly.\""
    },
    {
        "word": "proud",
        "clue": "Feeling of self-satisfaction and accomplishment."
    },
    {
        "word": "riser",
        "clue": "\"Person who gets ahead in life's pace\""
    },
    {
        "word": "shave",
        "clue": "\"Remove unwanted facial hair with this action.\""
    },
    {
        "word": "snuck",
        "clue": "\"Slipped away secretly, like a stealthy thief.\""
    },
    {
        "word": "strap",
        "clue": "\"Part of a saddle or backpack, e.g.\""
    },
    {
        "word": "tiger",
        "clue": "\"Fierce creature of the jungle, often found in Asian forests.\""
    },
    {
        "word": "utter",
        "clue": "\"Completely, as in an unvarnished confession.\""
    },
    {
        "word": "wreak",
        "clue": "\"Causing trouble, as a result of an action\""
    },
    {
        "word": "annex",
        "clue": "\"A small addition to a larger building or territory\""
    },
    {
        "word": "bitty",
        "clue": "\"Small or tiny in scale, like a dollhouse figurine.\""
    },
    {
        "word": "cache",
        "clue": "\"Hidden store of digital or physical treasures\"."
    },
    {
        "word": "comma",
        "clue": "\"Mark that pauses dialogue, perhaps?\""
    },
    {
        "word": "digit",
        "clue": "\"Finger or keystroke unit\""
    },
    {
        "word": "equip",
        "clue": "\"Provide with necessary resources or tools\""
    },
    {
        "word": "focus",
        "clue": "\"Imparting attention to, or keeping eyes on\""
    },
    {
        "word": "grass",
        "clue": "\"Common ground beneath your feet\"."
    },
    {
        "word": "ideal",
        "clue": "\"A perfect match, in every way.\""
    },
    {
        "word": "limbo",
        "clue": "\"State of suspended animation, literally or figuratively.\""
    },
    {
        "word": "moldy",
        "clue": "\"A smell often associated with old bread or damp basements\""
    },
    {
        "word": "palsy",
        "clue": "\"Condition characterized by weakness or paralysis.\""
    },
    {
        "word": "prove",
        "clue": "\"Show as evidence, often legally\"\n\n(Answer: PROVE)"
    },
    {
        "word": "risky",
        "clue": "\"A gamble that could result in financial loss.\""
    },
    {
        "word": "shawl",
        "clue": "\"Warm layer draped elegantly around the neck.\""
    },
    {
        "word": "snuff",
        "clue": "\"Smoking substance often used to relieve congestion.\""
    },
    {
        "word": "straw",
        "clue": "Filling material found in many summer drinks."
    },
    {
        "word": "tight",
        "clue": "\"Fittingly small, with no room to spare.\""
    },
    {
        "word": "vague",
        "clue": "\"Indistinct in definition or intention\"."
    },
    {
        "word": "wreck",
        "clue": "\"Maritime disaster, figuratively\""
    },
    {
        "word": "annoy",
        "clue": "\"Frustratingly, to say the least\""
    },
    {
        "word": "black",
        "clue": "\"Color of a raven's plumage, or the darkest shade on a scale\""
    },
    {
        "word": "cacti",
        "clue": "\"Fleshy plants native to arid regions.\""
    },
    {
        "word": "conch",
        "clue": "\"Shells that, in some cuisines, become appetizing?\""
    },
    {
        "word": "dilly",
        "clue": "\"Something you might say after being asked to do something you'd rather not do.\""
    },
    {
        "word": "erase",
        "clue": "\"Remove from memory, as mistakes are corrected.\""
    },
    {
        "word": "foggy",
        "clue": "\"Icy weather condition that reduces visibility\""
    },
    {
        "word": "grate",
        "clue": "\"Screen that catches food bits, often found in kitchen settings.\""
    },
    {
        "word": "idiom",
        "clue": "\"Colloquial phrase that conveys meaning beyond its literal words.\""
    },
    {
        "word": "limit",
        "clue": "\"Set a boundary within, or finally stop something from going?\""
    },
    {
        "word": "money",
        "clue": "\"Cash in hand, literally!\""
    },
    {
        "word": "panel",
        "clue": "\"Surface area for a work of art or a politician's statement?\""
    },
    {
        "word": "prowl",
        "clue": "\"Stalking sound in the night\""
    },
    {
        "word": "rival",
        "clue": "\"Foe or opponent who competes for attention\""
    },
    {
        "word": "shear",
        "clue": "\"A barber's tool\""
    },
    {
        "word": "soapy",
        "clue": "\"Cleanliness aid, literally.\""
    },
    {
        "word": "stray",
        "clue": "\"Lost its way, figuratively.\""
    },
    {
        "word": "tilde",
        "clue": "\"Accent mark used in Spanish to indicate a change in pronunciation, or a horizontal line above a letter.\""
    },
    {
        "word": "valet",
        "clue": "\"Attendant to a wealthy patron's needs?\""
    },
    {
        "word": "wrest",
        "clue": "\"Engage in hand-to-hand combat\""
    },
    {
        "word": "annul",
        "clue": "\"Cancel or void legally, as a marriage.\""
    },
    {
        "word": "blade",
        "clue": "\"Sharp edge, often part of a sword or knife.\""
    },
    {
        "word": "caddy",
        "clue": "Golfer's trusted companion"
    },
    {
        "word": "condo",
        "clue": "\"Unit in an upscale residential complex.\""
    },
    {
        "word": "dimly",
        "clue": "\"Lighting situation, literally,\""
    },
    {
        "word": "erect",
        "clue": "\"Stand tall, like a newly mounted flagpole.\""
    },
    {
        "word": "foist",
        "clue": "\"Make someone else take something unwanted\""
    },
    {
        "word": "grave",
        "clue": "\"Dignitary's final resting place, perhaps\""
    },
    {
        "word": "idiot",
        "clue": "Person who often needs to be told twice?"
    },
    {
        "word": "linen",
        "clue": "\"Material often used in tablecloths and wedding dresses.\""
    },
    {
        "word": "month",
        "clue": "\"Time period between seasons, for instance.\""
    },
    {
        "word": "panic",
        "clue": "\"Fear that grips like a sudden chill.\""
    },
    {
        "word": "proxy",
        "clue": "Representation in place of another person or thing, often used in voting matters."
    },
    {
        "word": "river",
        "clue": "\"Famous Colorado waterway\""
    },
    {
        "word": "sheen",
        "clue": "\"Sparkling coat on a polished surface.\""
    },
    {
        "word": "sober",
        "clue": "\"Unimpaired by drink\"."
    },
    {
        "word": "strip",
        "clue": "\"Long, narrow section of fabric or surface?\""
    },
    {
        "word": "timer",
        "clue": "\"Device that measures time, often with an audible chime.\""
    },
    {
        "word": "valid",
        "clue": "\"Compliant with the law or norm\""
    },
    {
        "word": "wring",
        "clue": "\"Twist to get rid of excess moisture.\""
    },
    {
        "word": "anode",
        "clue": "\"Where an electric current begins in a battery.\""
    },
    {
        "word": "blame",
        "clue": "\"Fault to be laid at someone's door.\""
    },
    {
        "word": "cadet",
        "clue": "\"Training ground for an officer?\""
    },
    {
        "word": "conic",
        "clue": "\"Like a mountain's peak, often in astronomy.\""
    },
    {
        "word": "diner",
        "clue": "\"Familiar spot to grab a late-night bite.\""
    },
    {
        "word": "erode",
        "clue": "\"Nature's gradual wear and tear process, literally.\""
    },
    {
        "word": "folio",
        "clue": "\"Large, multi-part section of a book or manuscript.\""
    },
    {
        "word": "gravy",
        "clue": "\"Rich sauce often served over meat and potatoes.\""
    },
    {
        "word": "idler",
        "clue": "\"Person prone to doing little or nothing.\""
    },
    {
        "word": "liner",
        "clue": "\"Material used to line a suitcase or book.\""
    },
    {
        "word": "moody",
        "clue": "\"Emotionally prone to fits of sulky behavior.\""
    },
    {
        "word": "pansy",
        "clue": "Flower often associated with forgetfulness, in name and color?"
    },
    {
        "word": "prude",
        "clue": "Self-proclaimed moralist with a strict sense of propriety."
    },
    {
        "word": "rivet",
        "clue": "\"Fastening device, often used in sewing or machinery.\""
    },
    {
        "word": "sheep",
        "clue": "\"Fleecy farm dweller\""
    },
    {
        "word": "soggy",
        "clue": "Flaccid condition of a poorly toasted slice of bread."
    },
    {
        "word": "strut",
        "clue": "\"Catwalk movement, in a manner of speaking.\""
    },
    {
        "word": "timid",
        "clue": "This shrinking violet tends to be low-key and lacking in confidence."
    },
    {
        "word": "valor",
        "clue": "Fruitful endeavor requires noble courage"
    },
    {
        "word": "wrist",
        "clue": "\"Arm region where a watch often resides.\""
    },
    {
        "word": "antic",
        "clue": "This French artist's nickname translates to \"anti,\" indicating he created artworks that mocked royalty, often with satirical and ironic themes."
    },
    {
        "word": "bland",
        "clue": "\"Unremarkable in flavor or character, like a plain cracker.\""
    },
    {
        "word": "cagey",
        "clue": "\"Cautioned to keep an eye on this character's answers.\""
    },
    {
        "word": "copse",
        "clue": "\"Small cluster of trees\""
    },
    {
        "word": "dingo",
        "clue": "\"Native Australian wild dog with a haunting howl.\""
    },
    {
        "word": "error",
        "clue": "\"Mistake made during calculations\""
    },
    {
        "word": "folly",
        "clue": "\"Foolish or rash decision, often used to describe something that's impractical or misguided.\""
    },
    {
        "word": "graze",
        "clue": "\"Pasture experience, in a way\""
    },
    {
        "word": "idyll",
        "clue": "\"A serene and peaceful scene\""
    },
    {
        "word": "lingo",
        "clue": "Familiar slang expression."
    },
    {
        "word": "moose",
        "clue": "\"Large, hoofed mammal native to northern forests.\""
    },
    {
        "word": "papal",
        "clue": "\"Relating to or associated with a Pope.\""
    },
    {
        "word": "prune",
        "clue": "\"Treat with clippers to prevent overgrowth\""
    },
    {
        "word": "roach",
        "clue": "Small, unwanted insect often found in dark corners?"
    },
    {
        "word": "sheer",
        "clue": "\"A thin, transparent layer\""
    },
    {
        "word": "solar",
        "clue": "\"Energy source in space, often harnessed at home\"."
    },
    {
        "word": "stuck",
        "clue": "\"Trapped in an inconvenient situation.\""
    },
    {
        "word": "tipsy",
        "clue": "Intoxicated to the point of wobbliness?"
    },
    {
        "word": "value",
        "clue": "\"Priceless asset or monetary worth?\""
    },
    {
        "word": "write",
        "clue": "\"Put pen to paper, literally\""
    },
    {
        "word": "anvil",
        "clue": "\"Tool used to shape metal, often in a blacksmith's shop.\""
    },
    {
        "word": "blank",
        "clue": "\"Empty space waiting to be filled.\""
    },
    {
        "word": "cairn",
        "clue": "\"Monument built by nature's hand\""
    },
    {
        "word": "coral",
        "clue": "\"Treasured substance in the ocean, often formed by tiny marine creatures.\""
    },
    {
        "word": "dingy",
        "clue": "\"Dimly lit room, perhaps.\""
    },
    {
        "word": "erupt",
        "clue": "\"Fissure opens suddenly, for example.\""
    },
    {
        "word": "foray",
        "clue": "Exploratory journey is often marked with this action."
    },
    {
        "word": "great",
        "clue": "\"Exceptional in size or quality, literally\""
    },
    {
        "word": "igloo",
        "clue": "\"A structure often built by Arctic residents to provide winter shelter.\""
    },
    {
        "word": "lipid",
        "clue": "Fatty substance found in food and the human body."
    },
    {
        "word": "moral",
        "clue": "\"Guided by a sense of right and wrong, fittingly?\""
    },
    {
        "word": "paper",
        "clue": "\"Material commonly used to create cards and take notes.\""
    },
    {
        "word": "psalm",
        "clue": "\"Instrument of worship and poetic expression.\""
    },
    {
        "word": "roast",
        "clue": "\"Grilled to perfection, like Thanksgiving dinner.\""
    },
    {
        "word": "sheet",
        "clue": "\"Large flat surface often used for bed or desk work\"."
    },
    {
        "word": "solid",
        "clue": "\" Firmly established, like a steady foundation.\""
    },
    {
        "word": "study",
        "clue": "\"Sit down with a book?\""
    },
    {
        "word": "titan",
        "clue": "\"Greek deity of immense power and strength\"."
    },
    {
        "word": "valve",
        "clue": "\"Fittings component that regulates fluid flow.\""
    },
    {
        "word": "wrong",
        "clue": "\"Erroneous judgment, or something that doesn't quite fit.\""
    },
    {
        "word": "aorta",
        "clue": "\"This major artery's 'A' is literal\""
    },
    {
        "word": "blare",
        "clue": "\"Intrusive sound, like a car horn\""
    },
    {
        "word": "camel",
        "clue": "\"Desert-dwelling mammal known for its humps.\""
    },
    {
        "word": "corer",
        "clue": "\"Tool used to extract core samples from trees.\""
    },
    {
        "word": "diode",
        "clue": "\"Electrical component that controls the flow of current, often used in light-emitting diodes (LEDs)\""
    },
    {
        "word": "essay",
        "clue": "\"Academic writing project of varying length.\""
    },
    {
        "word": "force",
        "clue": "\"Power that makes something happen, or pressure applied to an object.\""
    },
    {
        "word": "greed",
        "clue": "\"Excessive desire for wealth or material possessions.\""
    },
    {
        "word": "iliac",
        "clue": "\"Region near the base of the lower spine.\""
    },
    {
        "word": "lithe",
        "clue": "\"Fitting description of an athlete in peak condition.\""
    },
    {
        "word": "moron",
        "clue": "\"Person of limited intelligence or foolishness, often used in an informal or derogatory manner.\""
    },
    {
        "word": "parer",
        "clue": "\"Tool used to trim branches, literally\""
    },
    {
        "word": "pubic",
        "clue": "\"Area of concern at the Olympics, often referred to in a humorous or awkward context.\""
    },
    {
        "word": "robin",
        "clue": "\"Small bird often seen in backyards with worms.\""
    },
    {
        "word": "sheik",
        "clue": "\"In Middle Eastern attire, this title is often held by a wealthy ruler.\""
    },
    {
        "word": "solve",
        "clue": "\"Decipher or figure out the answer to, perhaps after some careful thought.\""
    },
    {
        "word": "stuff",
        "clue": "\"Common term for unwanted items around the house.\""
    },
    {
        "word": "tithe",
        "clue": "\"A portion of income given to the church\""
    },
    {
        "word": "vapid",
        "clue": "\"Affectless and lacking depth, or a personality that's dull and uninteresting.\""
    },
    {
        "word": "wrote",
        "clue": "\"Composed a literary work, literally.\""
    },
    {
        "word": "apart",
        "clue": "\"Divided from others, or physically separated\""
    },
    {
        "word": "blast",
        "clue": "Exploding outburst is the answer to \"blast\"."
    },
    {
        "word": "cameo",
        "clue": "\"Famous film actress's appearance in another actor's movie\""
    },
    {
        "word": "corny",
        "clue": "\"Predominantly cheesy or overly sentimental, like a Hallmark card.\""
    },
    {
        "word": "dirge",
        "clue": "\"Mournful song or solemn lament\"."
    },
    {
        "word": "ester",
        "clue": "\"Type of chemical compound often found in perfumes and cleaning products?\""
    },
    {
        "word": "forge",
        "clue": "\"Smelting metal, or shaping one's life\"\n\n(Answer: FORGE)"
    },
    {
        "word": "green",
        "clue": "\"Color of grass and emeralds, or a certain holiday outfit.\""
    },
    {
        "word": "image",
        "clue": "\"Reflection of reality\""
    },
    {
        "word": "liver",
        "clue": "\"Organ responsible for detoxifying and metabolizing food and drinks.\""
    },
    {
        "word": "morph",
        "clue": "\"Change in form or shape, as if through magic\""
    },
    {
        "word": "parka",
        "clue": "\"Type of insulated jacket often worn in cold climates.\""
    },
    {
        "word": "pudgy",
        "clue": "\"Portly, perhaps like a certain cartoon character.\""
    },
    {
        "word": "robot",
        "clue": "\"Autonomous mechanical device with artificial intelligence.\""
    },
    {
        "word": "shelf",
        "clue": "\"Structure for storing books and decorative items.\""
    },
    {
        "word": "sonar",
        "clue": "\"Device used to detect and track objects underwater.\""
    },
    {
        "word": "stump",
        "clue": "\"Tree that remains after being cut down\""
    },
    {
        "word": "title",
        "clue": "\"Headline or name of a role, perhaps.\""
    },
    {
        "word": "vapor",
        "clue": "\"Stealthy, gaseous substance rising from boiling liquids.\""
    },
    {
        "word": "wrung",
        "clue": "\"Squeezed dry, like a towel\""
    },
    {
        "word": "aphid",
        "clue": "Small, plant-sucking insect often found in gardens?"
    },
    {
        "word": "blaze",
        "clue": "Flaming inferno or intense passion."
    },
    {
        "word": "canal",
        "clue": "\"Waterway with a lock system, often in a rural setting.\""
    },
    {
        "word": "couch",
        "clue": "\"Piece of furniture where you can sit and relax.\""
    },
    {
        "word": "dirty",
        "clue": "\"Filthy state of affairs.\""
    },
    {
        "word": "ether",
        "clue": "\"Gas formerly thought to be a fundamental element of the universe.\""
    },
    {
        "word": "forgo",
        "clue": "\"Abandon or give up a right or interest\""
    },
    {
        "word": "greet",
        "clue": "\"Social gesture made when meeting someone new, such as 'hello'\""
    },
    {
        "word": "imbue",
        "clue": "\"Give a person or thing a special quality\""
    },
    {
        "word": "livid",
        "clue": "\"Furiously angry\" or \"Enraged to a degree of intense redness\"."
    },
    {
        "word": "mossy",
        "clue": "\"Frosted landscape feature\""
    },
    {
        "word": "parry",
        "clue": "\"Deflect an attack, literally\""
    },
    {
        "word": "puffy",
        "clue": "\"Full of air, like a marshmallow.\""
    },
    {
        "word": "rocky",
        "clue": "\"Mountainous terrain, literally.\""
    },
    {
        "word": "shell",
        "clue": "\"Outer covering of a snail or clam\""
    },
    {
        "word": "sonic",
        "clue": "\"Like the sound of Jimi Hendrix's guitar.\""
    },
    {
        "word": "stung",
        "clue": "\"Feeling left red and swollen after a run-in with a bee?\""
    },
    {
        "word": "toast",
        "clue": "\"Eggy breakfast staple\""
    },
    {
        "word": "vault",
        "clue": "\"Secure storage space, like a bank's treasure room\"."
    },
    {
        "word": "wryly",
        "clue": "Smiling behind a mask of disdain?"
    },
    {
        "word": "aping",
        "clue": "\"Imitating someone or something with exaggerated mannerisms\""
    },
    {
        "word": "bleak",
        "clue": "\"Felicitous description of a post-apocalyptic landscape\""
    },
    {
        "word": "candy",
        "clue": "\"Sweet treat commonly enjoyed by children.\""
    },
    {
        "word": "cough",
        "clue": "\"A hacking fit often accompanied by mucus production.\""
    },
    {
        "word": "disco",
        "clue": "\"Groovy genre of music from the 1970s and beyond\"."
    },
    {
        "word": "ethic",
        "clue": "\"Code of conduct that guides moral behavior and decision-making.\""
    },
    {
        "word": "forte",
        "clue": "\"This musical term denotes loudness.\""
    },
    {
        "word": "grief",
        "clue": "\"Emotion that follows loss, often felt for a long time.\""
    },
    {
        "word": "impel",
        "clue": "\"Give a strong urge or push in a certain direction.\""
    },
    {
        "word": "llama",
        "clue": "\"Fuzzy South American camelid, often used as a pack animal.\""
    },
    {
        "word": "motel",
        "clue": "\"Roadside lodging with separate rooms.\""
    },
    {
        "word": "parse",
        "clue": "\"Break down into its component parts\""
    },
    {
        "word": "pulpy",
        "clue": "Fuzzy texture, literally (7 letters)."
    },
    {
        "word": "rodeo",
        "clue": "\"Western event where riders show off their skills.\""
    },
    {
        "word": "shied",
        "clue": "\"Stepped back or hesitated, literally\""
    },
    {
        "word": "sooth",
        "clue": "\"Calming phrase that means to quiet or assuage a troubled mind.\""
    },
    {
        "word": "stunk",
        "clue": "\"A pungent aroma that's often difficult to ignore.\""
    },
    {
        "word": "today",
        "clue": "\"Current day's number, or calendar page count\""
    },
    {
        "word": "vaunt",
        "clue": "\"Fancifully boast about\""
    },
    {
        "word": "yacht",
        "clue": "\"Luxury vessel often found on a billionaire's summer retreat.\""
    },
    {
        "word": "apnea",
        "clue": "\"Frequent breathing pause during sleep.\""
    },
    {
        "word": "bleat",
        "clue": "\"Sound made by an annoyed sheep\"."
    },
    {
        "word": "canny",
        "clue": "\"Perceptive and clever, like a successful entrepreneur.\""
    },
    {
        "word": "could",
        "clue": "\"Possible outcome in a gamble?\""
    },
    {
        "word": "ditch",
        "clue": "\"A path left by someone or something that's fallen\""
    },
    {
        "word": "ethos",
        "clue": "\"Code of conduct guiding personal behavior.\""
    },
    {
        "word": "forth",
        "clue": "\"With step, direction is indicated\""
    },
    {
        "word": "grill",
        "clue": "\"Outdoor cooking vessel, often made of metal or stone.\""
    },
    {
        "word": "imply",
        "clue": "\"Convey a message without saying so directly\""
    },
    {
        "word": "loamy",
        "clue": "\"Rich in nutrients, this earthy term describes fertile soil.\""
    },
    {
        "word": "motif",
        "clue": "\"Design element that recurs in art or literature.\""
    },
    {
        "word": "party",
        "clue": "\"Social gathering that's always a bash\"."
    },
    {
        "word": "pulse",
        "clue": "\"Rhythm of the heart\""
    },
    {
        "word": "roger",
        "clue": "\"French composer behind 'Carmina Burana' and 'Daphnis et Chlo\u00e9'\""
    },
    {
        "word": "shift",
        "clue": "\"Income change that's a daily adjustment\""
    },
    {
        "word": "sooty",
        "clue": "\"Darkened by smoke, literally.\""
    },
    {
        "word": "stunt",
        "clue": "\"Foolhardy performance in a show or film\""
    },
    {
        "word": "toddy",
        "clue": "\"Cozy winter drink often enjoyed with a slice of lemon.\""
    },
    {
        "word": "vegan",
        "clue": "\"Adhering to a plant-based diet and lifestyle.\""
    },
    {
        "word": "yearn",
        "clue": "\"Desire intensely\""
    },
    {
        "word": "apple",
        "clue": "Fruit often eaten with peanut butter or as a snack?"
    },
    {
        "word": "bleed",
        "clue": "\"Flowing with pain or injury\""
    },
    {
        "word": "canoe",
        "clue": "\"Small watercraft often paddled by two\""
    },
    {
        "word": "count",
        "clue": "\"Take stock or tally something, literally.\""
    },
    {
        "word": "ditto",
        "clue": "\"Same as, in a word of affirmation\""
    },
    {
        "word": "etude",
        "clue": "Musical study, often marked by difficult passages."
    },
    {
        "word": "forty",
        "clue": "\"Number of years in a queen's coronation period, literally.\""
    },
    {
        "word": "grime",
        "clue": "\"Filth or pollution in an urban setting.\""
    },
    {
        "word": "inane",
        "clue": "Foolish or lacking substance, often in an amusingly tedious way."
    },
    {
        "word": "loath",
        "clue": "\"Feeling a strong dislike for something\""
    },
    {
        "word": "motor",
        "clue": "\"Power source for most vehicles, often hidden within.\""
    },
    {
        "word": "pasta",
        "clue": "\"Long, thin Italian dish often served with sauce.\""
    },
    {
        "word": "punch",
        "clue": "\"A sudden, forceful blow from the hand\""
    },
    {
        "word": "rogue",
        "clue": "\"Untrustworthy individual, often found in a western film or fairy tale\"."
    },
    {
        "word": "shine",
        "clue": "\"Radiating light, literally.\""
    },
    {
        "word": "sorry",
        "clue": "\"Expression of regret after a mishap\""
    },
    {
        "word": "style",
        "clue": "\"Fashion or aesthetic characteristic.\""
    },
    {
        "word": "token",
        "clue": "\"Small symbol representing something in a group or collection.\""
    },
    {
        "word": "venom",
        "clue": "Toxic substance, like a snake's bite."
    },
    {
        "word": "yeast",
        "clue": "Tiny microorganism used in baking and brewing."
    },
    {
        "word": "apply",
        "clue": "\"Submit a request or suggestion, formally.\""
    },
    {
        "word": "bleep",
        "clue": "\"Familiar sound from a police radio\""
    },
    {
        "word": "canon",
        "clue": "\"Authorized musical composition, perhaps.\""
    },
    {
        "word": "coupe",
        "clue": "\"French term for a sporty two-door car.\""
    },
    {
        "word": "ditty",
        "clue": "Song or tune that's catchy, but perhaps not too clever."
    },
    {
        "word": "evade",
        "clue": "\"Shun or beat a path around something\""
    },
    {
        "word": "forum",
        "clue": "\"Online gathering place, often with discussion forums.\""
    },
    {
        "word": "grimy",
        "clue": "\"Dirtied surface\" or \"Filthy state\"."
    },
    {
        "word": "inbox",
        "clue": "\"Digital space where emails and messages accumulate.\""
    },
    {
        "word": "lobby",
        "clue": "\"Area of a building where visitors often gather and make an impression.\""
    },
    {
        "word": "motto",
        "clue": "\"Philosophical phrase that guides one's actions or organization.\""
    },
    {
        "word": "paste",
        "clue": "\"Glue-like substance used to fill gaps.\""
    },
    {
        "word": "pupil",
        "clue": "\"Small window in an eye?\""
    },
    {
        "word": "roomy",
        "clue": "\"Spacious, with plenty of elbow room.\""
    },
    {
        "word": "shiny",
        "clue": "\"Reflecting light with elegance.\""
    },
    {
        "word": "sound",
        "clue": "\"Aural experience, or what you hear when your neighbors have a loud argument\""
    },
    {
        "word": "suave",
        "clue": "Smooth talker"
    },
    {
        "word": "tonal",
        "clue": "\"Pitchy in tone\""
    },
    {
        "word": "venue",
        "clue": "Place where an event takes place?"
    },
    {
        "word": "yield",
        "clue": "\"Outcome or harvest of efforts, literally.\""
    },
    {
        "word": "apron",
        "clue": "\"Protective garment worn over clothing.\""
    },
    {
        "word": "blend",
        "clue": "\"Mix together to create a harmonious whole.\""
    },
    {
        "word": "caper",
        "clue": "\"Thief's sly move, or a quick change of pace?\""
    },
    {
        "word": "court",
        "clue": "\"Location where a trial is held, often under law's authority.\""
    },
    {
        "word": "diver",
        "clue": "\"Person who explores the ocean floor.\""
    },
    {
        "word": "event",
        "clue": "\"Something that occurs, often with notice or celebration\""
    },
    {
        "word": "found",
        "clue": "\"Location of a discovery\""
    },
    {
        "word": "grind",
        "clue": "\"Daily routine that can wear down even the toughest shoes.\""
    },
    {
        "word": "incur",
        "clue": "\"Pay with interest, as a loan or debt\""
    },
    {
        "word": "local",
        "clue": "\"Found in your neighborhood or community.\""
    },
    {
        "word": "moult",
        "clue": "\"Change in a bird's life cycle, fittingly\""
    },
    {
        "word": "pasty",
        "clue": "\"Filling commonly found in a traditional Cornish savory tart.\""
    },
    {
        "word": "puppy",
        "clue": "Fluffy bundle of energy."
    },
    {
        "word": "roost",
        "clue": "\"Where birds like to settle in at night?\""
    },
    {
        "word": "shire",
        "clue": "\"Geographic region in England, often associated with hobbits.\""
    },
    {
        "word": "south",
        "clue": "\"Direction opposite to north\""
    },
    {
        "word": "sugar",
        "clue": "\"Sweet treat that's often used in baking.\""
    },
    {
        "word": "tonga",
        "clue": "Island nation in the Pacific, also known as \"Friendly Islands\"?"
    },
    {
        "word": "verge",
        "clue": "\"Edge or boundary, literally\""
    },
    {
        "word": "young",
        "clue": "\"Unaged to perfection.\""
    },
    {
        "word": "aptly",
        "clue": "\"Fittingly suited to describe something that matches perfectly.\""
    },
    {
        "word": "bless",
        "clue": "\"Expressing gratitude or good wishes to someone\""
    },
    {
        "word": "caput",
        "clue": "\"Latin term for 'head'\"."
    },
    {
        "word": "coven",
        "clue": "\"Sorceress gathering\""
    },
    {
        "word": "dizzy",
        "clue": "\"Feling faint and off-balance, like after spinning\""
    },
    {
        "word": "every",
        "clue": "\"Used to describe an experience that's common or typical.\""
    },
    {
        "word": "foyer",
        "clue": "\"Entrance hall or first space encountered upon entering a building\"."
    },
    {
        "word": "gripe",
        "clue": "\"Implication of being under the weather.\""
    },
    {
        "word": "index",
        "clue": "\" Cataloging system or computer setting\""
    },
    {
        "word": "locus",
        "clue": "\"Where a particular event or phenomenon occurs, often literally, with an emphasis on location.\""
    },
    {
        "word": "mound",
        "clue": "\"Earth formation that's often home to a golf ball.\""
    },
    {
        "word": "patch",
        "clue": "Small repair, as on an outfit or wall?"
    },
    {
        "word": "puree",
        "clue": "\"Smoothed mixture, often served at baby's first meal.\""
    },
    {
        "word": "rotor",
        "clue": "\"Blade of an engine's turning part.\""
    },
    {
        "word": "shirk",
        "clue": "\"Act with deliberate indifference, like a slacker on summer break.\""
    },
    {
        "word": "sower",
        "clue": "\"Person who spreads seeds, often in a rural setting.\""
    },
    {
        "word": "suing",
        "clue": "\"Bringing a lawsuit against someone\""
    },
    {
        "word": "tonic",
        "clue": "\"Restorative ingredient in a classic cocktail?\""
    },
    {
        "word": "verse",
        "clue": "\"Poetic line or lyrical refrain\""
    },
    {
        "word": "youth",
        "clue": "\"Adolescent stage of life.\""
    },
    {
        "word": "arbor",
        "clue": "\"Tall tree\" or \"garden feature\"."
    },
    {
        "word": "blimp",
        "clue": "\"Floating advertisement that travels slowly through the air.\""
    },
    {
        "word": "carat",
        "clue": "\"Unit of weight used to measure diamonds, often symbolized by 'ct'\""
    },
    {
        "word": "cover",
        "clue": "\"Protective layer on a book or object?\""
    },
    {
        "word": "dodge",
        "clue": "\"Evade or sidestep, often to avoid trouble\""
    },
    {
        "word": "evict",
        "clue": "\"Expel someone from a rental property\""
    },
    {
        "word": "frail",
        "clue": "\"Thin and vulnerable, often used to describe someone's physical or emotional state.\""
    },
    {
        "word": "groan",
        "clue": "\"Ill-fated sigh\""
    },
    {
        "word": "inept",
        "clue": "\"Unskilled in some regard, literally.\""
    },
    {
        "word": "lodge",
        "clue": "\"Cozy cabin in the woods, or place to stay overnight\""
    },
    {
        "word": "mount",
        "clue": "\"Peak in terrain or stature\""
    },
    {
        "word": "patio",
        "clue": "\"Outdoor space often surrounded by stairs or railings.\""
    },
    {
        "word": "purer",
        "clue": "Clue: \"More refined in character\""
    },
    {
        "word": "rouge",
        "clue": "\"Flame-red lip color, also a French term for a skillful deception or deceit\""
    },
    {
        "word": "shirt",
        "clue": "\"A garment typically worn under jackets.\""
    },
    {
        "word": "space",
        "clue": "\"Where stars and planets reside\""
    },
    {
        "word": "suite",
        "clue": "\"A set of rooms in a hotel\""
    },
    {
        "word": "tooth",
        "clue": "\"Filling that gives you a smile\""
    },
    {
        "word": "verso",
        "clue": "\"Back of an art piece, or poem's opposite page?\""
    },
    {
        "word": "zebra",
        "clue": "\"Animal with black and white stripes.\""
    },
    {
        "word": "ardor",
        "clue": "Flame of passion."
    },
    {
        "word": "blind",
        "clue": "\"Unable to see, or having no sight.\""
    },
    {
        "word": "cargo",
        "clue": "\"Items carried by ship or plane, often in bulk.\""
    },
    {
        "word": "covet",
        "clue": "\"Desire intensely\""
    },
    {
        "word": "dodgy",
        "clue": "\"Unreliable or questionable in nature, like a sketchy business deal.\""
    },
    {
        "word": "evoke",
        "clue": "\"Inspire feelings or memories in someone\""
    },
    {
        "word": "frame",
        "clue": "\"Structural part of a picture or window\"?"
    },
    {
        "word": "groin",
        "clue": "\"Area between the legs, or source of athletic strain.\""
    },
    {
        "word": "inert",
        "clue": "\"Unresponsive to stimulation, like a statue in a museum.\""
    },
    {
        "word": "lofty",
        "clue": "\"Fanciful in demeanor\""
    },
    {
        "word": "mourn",
        "clue": "\"Expressing sorrow or regret\""
    },
    {
        "word": "patsy",
        "clue": "\"Unwitting target of blame or ridicule.\""
    },
    {
        "word": "purge",
        "clue": "\"Get rid of unwanted things, as in a fastener or a detox regimen.\""
    },
    {
        "word": "rough",
        "clue": "\"Coarse in texture or tone\""
    },
    {
        "word": "shoal",
        "clue": "\"Group of fish in the ocean?\""
    },
    {
        "word": "spade",
        "clue": "\"Garden tool with a curved or angled blade.\""
    },
    {
        "word": "sulky",
        "clue": "\"This moodiness often causes someone to pout.\""
    },
    {
        "word": "topaz",
        "clue": "Flower or gemstone also found in Arizona's topsoil?"
    },
    {
        "word": "verve",
        "clue": "\"Fiery energy or enthusiasm that's missing from an outfit.\""
    },
    {
        "word": "zesty",
        "clue": "\"Flavorful and lively as a citrus slice.\""
    },
    {
        "word": "arena",
        "clue": "\"Location where a gladiator fights\""
    },
    {
        "word": "blink",
        "clue": "\"Pupil's rapid motion, literally.\""
    },
    {
        "word": "carol",
        "clue": "Festive song sung by choirs around the holidays?"
    },
    {
        "word": "covey",
        "clue": "\"Flock of turkeys, informally\""
    },
    {
        "word": "dogma",
        "clue": "\"Firmly held conviction\""
    },
    {
        "word": "exact",
        "clue": "\"Word that precisely fits the bill.\""
    },
    {
        "word": "frank",
        "clue": "\"French in origin, this name also means 'free' or 'honest'.\""
    },
    {
        "word": "groom",
        "clue": "\"Elegant attire choice\""
    },
    {
        "word": "infer",
        "clue": "\"Make an educated guess about something\""
    },
    {
        "word": "logic",
        "clue": "\"Reason's foundation, or the mind's inner guiding principle.\""
    },
    {
        "word": "mouse",
        "clue": "Small furry rodent often found in computer laboratories?"
    },
    {
        "word": "patty",
        "clue": "\"Form of ground meat often served on a bun.\""
    },
    {
        "word": "purse",
        "clue": "\"Handbag holder, often carried by ladies.\""
    },
    {
        "word": "round",
        "clue": "\"Circular in shape or turn of events\""
    },
    {
        "word": "shock",
        "clue": "\"Emotional jolt\""
    },
    {
        "word": "spank",
        "clue": "\"Effectively discipline with a swift hit.\""
    },
    {
        "word": "sully",
        "clue": "\"Influencing someone's reputation\""
    },
    {
        "word": "topic",
        "clue": "\"Subject matter, in short?\""
    },
    {
        "word": "vicar",
        "clue": "\"Man of the cloth, often with a church address\"?"
    },
    {
        "word": "zonal",
        "clue": "\"Insect's geographic region\""
    },
    {
        "word": "argue",
        "clue": "\"Disagreeing with someone, like a debate in school.\""
    },
    {
        "word": "bliss",
        "clue": "\"State of ultimate happiness and contentment.\""
    },
    {
        "word": "carry",
        "clue": "\"Transport something from one place to another, perhaps with great effort.\""
    },
    {
        "word": "cower",
        "clue": "Faintly move away from something intimidating."
    },
    {
        "word": "doing",
        "clue": "\"Engaging in an activity\""
    },
    {
        "word": "exalt",
        "clue": "\"Elevate to a state of great admiration\""
    },
    {
        "word": "fraud",
        "clue": "\"Deceptive scheme to gain an unfair advantage.\""
    },
    {
        "word": "grope",
        "clue": "\"Feel your way through a dark space\""
    },
    {
        "word": "ingot",
        "clue": "\"Smooth, solid mass of metal\""
    },
    {
        "word": "login",
        "clue": "\"Online access procedure\""
    },
    {
        "word": "mouth",
        "clue": "\"Place where words and wisdom often start.\""
    },
    {
        "word": "pause",
        "clue": "\"Break in a rhythm or discussion\""
    },
    {
        "word": "pushy",
        "clue": "\"Overzealous, like a salesperson at your doorstep.\""
    },
    {
        "word": "rouse",
        "clue": "\"Awaken from sleep with a sudden noise\""
    },
    {
        "word": "shone",
        "clue": "\"Form of glowing illumination in the past.\""
    },
    {
        "word": "spare",
        "clue": "\"Left over or additional amount\""
    },
    {
        "word": "sumac",
        "clue": "\"Middle Eastern spice with tart flavor.\""
    },
    {
        "word": "torch",
        "clue": "\"Flickering source of light\""
    },
    {
        "word": "video",
        "clue": "\"Digital recording or screen show.\""
    },
    {
        "word": "arise",
        "clue": "\"Rise up, or take its name, figuratively and literally.\""
    },
    {
        "word": "blitz",
        "clue": "\"Rapid military assault.\""
    },
    {
        "word": "carve",
        "clue": "\"Shaping something with skill and precision\""
    },
    {
        "word": "coyly",
        "clue": "\"This sly expression suggests you're being ____\""
    },
    {
        "word": "dolly",
        "clue": "\"Childhood toy with a wheelbarrow, often carried by young girls.\""
    },
    {
        "word": "excel",
        "clue": "\"Succeeding with distinction\""
    },
    {
        "word": "freak",
        "clue": "\"Person seen as unusual or extraordinary.\""
    },
    {
        "word": "gross",
        "clue": "\"Off-putting or repulsive, as a dirty kitchen counter.\""
    },
    {
        "word": "inlay",
        "clue": "\"Intricately woven piece of art set into a larger whole.\""
    },
    {
        "word": "loopy",
        "clue": "\"Unsteadily tilted, like someone who's been drinking.\""
    },
    {
        "word": "mover",
        "clue": "\"Person who transports goods, often for hire.\""
    },
    {
        "word": "payee",
        "clue": "\"Person who receives payment, often listed on a check.\""
    },
    {
        "word": "putty",
        "clue": "\"Modeling material often used by children.\""
    },
    {
        "word": "route",
        "clue": "\"Path or course taken, often marked by signs along the way.\""
    },
    {
        "word": "shook",
        "clue": "\"Felt an earthquake, literally\""
    },
    {
        "word": "spark",
        "clue": "Flame's smallest flicker, literally."
    },
    {
        "word": "sunny",
        "clue": "\"Brightening up an otherwise gloomy day?\""
    },
    {
        "word": "torso",
        "clue": "\"Section of the body around which limbs attach, figuratively also referring to the central part of an object or structure.\""
    },
    {
        "word": "vigil",
        "clue": "\"A state of watchfulness or attention, often at night.\""
    },
    {
        "word": "armor",
        "clue": "\"Protective covering worn by knights and soldiers.\""
    },
    {
        "word": "bloat",
        "clue": "\"Swollen feeling, like after eating too much.\""
    },
    {
        "word": "caste",
        "clue": "Social hierarchy system in some South Asian countries."
    },
    {
        "word": "crack",
        "clue": "\"Sound made by breaking something apart\""
    },
    {
        "word": "donor",
        "clue": "Person who provides something of value, often with an emotional connection."
    },
    {
        "word": "exert",
        "clue": "\"Physical activity required to achieve a goal\""
    },
    {
        "word": "freed",
        "clue": "\"Released from captivity or obligation, as in 'set free'\""
    },
    {
        "word": "group",
        "clue": "\"Collection of people or things, like a squad.\""
    },
    {
        "word": "inlet",
        "clue": "\"Small body of water opening to the sea.\""
    },
    {
        "word": "loose",
        "clue": "\"Unrestrained or free from constraint, as a thread's texture.\""
    },
    {
        "word": "movie",
        "clue": "\"Form of scripted entertainment shown on screen.\""
    },
    {
        "word": "payer",
        "clue": "\"Person responsible for covering expenses.\""
    },
    {
        "word": "pygmy",
        "clue": "\"Small in stature, like some African tribes.\""
    },
    {
        "word": "rover",
        "clue": "\"Spacecraft vehicle used for exploration on other planets.\""
    },
    {
        "word": "shoot",
        "clue": "\"Fire a bow, or perhaps a warning shot.\""
    },
    {
        "word": "spasm",
        "clue": "\"Unwanted muscle contraction, often painful.\""
    },
    {
        "word": "super",
        "clue": "\"Extremely talented or impressive, as in 'super model'\""
    },
    {
        "word": "torus",
        "clue": "\"Ring-shaped structure, like a doughnut hole\""
    },
    {
        "word": "vigor",
        "clue": "\"Fitting description for someone who's bursting with energy.\""
    },
    {
        "word": "aroma",
        "clue": "\"Perfume or scented candle's enticing feature.\""
    },
    {
        "word": "block",
        "clue": "\"Building material with letters that can be stacked.\""
    },
    {
        "word": "catch",
        "clue": "\"Grasp or snare something unexpectedly\""
    },
    {
        "word": "craft",
        "clue": "\"Skill or expertise required to create something of value.\""
    },
    {
        "word": "donut",
        "clue": "\"Ring-shaped pastry treat with glaze.\""
    },
    {
        "word": "exile",
        "clue": "\"Person forced to leave their homeland\""
    },
    {
        "word": "freer",
        "clue": "\"More carefree, as in relaxed circumstances.\""
    },
    {
        "word": "grout",
        "clue": "\"Material used to fill gaps between tiles.\""
    },
    {
        "word": "inner",
        "clue": "\"Located within something's core or center.\""
    },
    {
        "word": "lorry",
        "clue": "\"Large truck used for haulage, often seen on British roads.\""
    },
    {
        "word": "mower",
        "clue": "\"Tool used to trim lawns and gardens?\""
    },
    {
        "word": "peace",
        "clue": "\"State of serene harmony, often sought in international relations.\""
    },
    {
        "word": "quack",
        "clue": "\"Sound made by a duck or used in some medical pitches?\""
    },
    {
        "word": "rowdy",
        "clue": "\" unruly and loud, like a noisy crowd\""
    },
    {
        "word": "shore",
        "clue": "\"Edge of land where waves meet?\""
    },
    {
        "word": "spawn",
        "clue": "\"Something that hatches from an egg or grows from seed, for example.\""
    },
    {
        "word": "surer",
        "clue": "Flawlessly confident, or what?"
    },
    {
        "word": "total",
        "clue": "\"Entire sum of something, perhaps in a financial transaction.\""
    },
    {
        "word": "villa",
        "clue": "\"Estate in Italy or Spain, often with an elegant facade\""
    },
    {
        "word": "arose",
        "clue": "\"Rise to prominence, literally or figuratively?\""
    },
    {
        "word": "bloke",
        "clue": "\"Colloquialism for 'guy' or 'fellow'\""
    },
    {
        "word": "cater",
        "clue": "\"Prepare for a honey of a dinner party, literally!\""
    },
    {
        "word": "cramp",
        "clue": "\"Muscle spasm that's painful and persistent.\""
    },
    {
        "word": "dopey",
        "clue": "\"Foolishly charming, like Goofy\""
    },
    {
        "word": "exist",
        "clue": "\"Be in a state of reality or presence, as it were.\""
    },
    {
        "word": "fresh",
        "clue": "Newly acquired or recently opened."
    },
    {
        "word": "grove",
        "clue": "\"Group of trees, often in a peaceful setting.\""
    },
    {
        "word": "input",
        "clue": "\"Provide information or data, often in exchange for something else.\""
    },
    {
        "word": "loser",
        "clue": "\"Person who's often on the receiving end of a consolation prize.\""
    },
    {
        "word": "mucky",
        "clue": "\"Smelly and dirty, like a pond after a storm.\""
    },
    {
        "word": "peach",
        "clue": "\"Fruit often served as a topping for ice cream.\""
    },
    {
        "word": "quail",
        "clue": "Small, ground-dwelling bird species often hunted for its eggs and meat."
    },
    {
        "word": "rower",
        "clue": "\"Person who rows a boat?\""
    },
    {
        "word": "shorn",
        "clue": "\"This result of frequent shearing is common to sheep, but can also apply to people.\""
    },
    {
        "word": "speak",
        "clue": "\"Icebreaker event where I normally make my presence known.\""
    },
    {
        "word": "surge",
        "clue": "\"Swollen river's rapid movement, literally\""
    },
    {
        "word": "totem",
        "clue": "Symbolic object from an ancestral tribe's heritage."
    },
    {
        "word": "vinyl",
        "clue": "\"Type of record material, often collectible\""
    },
    {
        "word": "array",
        "clue": "\"Collection of things on display or in use\"."
    },
    {
        "word": "blond",
        "clue": "\"Famous hair color of Pamela Anderson.\""
    },
    {
        "word": "catty",
        "clue": "\"Characterized by backhanded compliments?\""
    },
    {
        "word": "crane",
        "clue": "Bird known for its distinctive call that sounds like laughter?"
    },
    {
        "word": "doubt",
        "clue": "\"Fear of missing out, figuratively.\""
    },
    {
        "word": "expel",
        "clue": "\"Force to remove from a place or position\""
    },
    {
        "word": "friar",
        "clue": "\"Order of monks, often portrayed in media.\""
    },
    {
        "word": "growl",
        "clue": "\"Low, rumbling sound made by an animal in distress.\""
    },
    {
        "word": "inter",
        "clue": "\"Middle of something, literally\""
    },
    {
        "word": "louse",
        "clue": "\"Unwanted six-legged inhabitant of your hair.\""
    },
    {
        "word": "mucus",
        "clue": "Thick, viscous secretion often found in respiratory passages and nasal cavities."
    },
    {
        "word": "pearl",
        "clue": "\"Treasured gem often found inside an oyster shell.\""
    },
    {
        "word": "quake",
        "clue": "\"Fear that causes the earth to shake\""
    },
    {
        "word": "royal",
        "clue": "\"Monarch's title, in short.\""
    },
    {
        "word": "short",
        "clue": "\"Of little length or duration\""
    },
    {
        "word": "spear",
        "clue": "\"Tool used in hunting or combat, often featuring a long shaft and pointed tip.\""
    },
    {
        "word": "surly",
        "clue": "\"Grumpy demeanor, in a nutshell.\""
    },
    {
        "word": "touch",
        "clue": "\"A gentle contact that sends a signal\""
    },
    {
        "word": "viola",
        "clue": "Musical instrument often used in orchestras, this stringed instrument is smaller than a cello but larger than a fiddle."
    },
    {
        "word": "arrow",
        "clue": "\"Shaft of a projectile?\""
    },
    {
        "word": "blood",
        "clue": "\"Red liquid vital to the body's survival, or 'lifeblood'\""
    },
    {
        "word": "caulk",
        "clue": "\"Sealant used to fill gaps in a building's exterior.\""
    },
    {
        "word": "crank",
        "clue": "\"Device that turns a handle to produce motion or power?\""
    },
    {
        "word": "dough",
        "clue": "\"Stuffing for pizza, bread, or pastries.\""
    },
    {
        "word": "extol",
        "clue": "\"Speak highly of someone or something in praise\""
    },
    {
        "word": "fried",
        "clue": "\"Golden result of a sizzling cooking method.\""
    },
    {
        "word": "grown",
        "clue": "\"Formed or developed over time, often literally\""
    },
    {
        "word": "intro",
        "clue": "\"A brief beginning or opening statement\""
    },
    {
        "word": "lousy",
        "clue": "\"A disappointing assessment of something\""
    },
    {
        "word": "muddy",
        "clue": "\"Dirty, like a puddle left outside.\""
    },
    {
        "word": "pecan",
        "clue": "\"Famous nut associated with Southern cuisine.\""
    },
    {
        "word": "qualm",
        "clue": "\"Feeling of hesitation or doubt?\""
    },
    {
        "word": "ruddy",
        "clue": "\"Shaded with red, like a forest floor.\""
    },
    {
        "word": "shout",
        "clue": "\"Fistful of emotion, perhaps.\""
    },
    {
        "word": "speck",
        "clue": "Small amount or particle, often barely noticeable (5 letters)."
    },
    {
        "word": "sushi",
        "clue": "\"Japanese dish often served with wasabi and soy sauce.\""
    },
    {
        "word": "tough",
        "clue": "\"Resistant to compromise, in a strained relationship.\""
    },
    {
        "word": "viper",
        "clue": "\"Snake with a deadly bite.\""
    },
    {
        "word": "arson",
        "clue": "\"Calamitous act of fire-setting, often with intent to cover up another crime.\""
    },
    {
        "word": "bloom",
        "clue": "\"Flower's blossoming moment, briefly.\""
    },
    {
        "word": "cause",
        "clue": "\"Reason behind something's occurrence or effect.\""
    },
    {
        "word": "crash",
        "clue": "\"Vehicle collision that can be loud and frightening, literally.\""
    },
    {
        "word": "dowdy",
        "clue": "\"Fashionably out of style.\""
    },
    {
        "word": "extra",
        "clue": "\"More than needed, or an overstay guest.\""
    },
    {
        "word": "frill",
        "clue": "Flamboyant fashion accessory often found on peacocks."
    },
    {
        "word": "gruel",
        "clue": "\"Mediocre porridge, often served to prisoners\""
    },
    {
        "word": "ionic",
        "clue": "\"Characterized by charged particles.\""
    },
    {
        "word": "lover",
        "clue": "\"Person with whom you share affection and tenderness\""
    },
    {
        "word": "mulch",
        "clue": "Layer of organic material covering garden beds?"
    },
    {
        "word": "pedal",
        "clue": "\"Foot-operated control mechanism, often on a bicycle.\""
    },
    {
        "word": "quark",
        "clue": "\"Tiny particle with three main properties, named after a Norse god.\""
    },
    {
        "word": "ruder",
        "clue": "\"Coarser in manners than usual.\""
    },
    {
        "word": "shove",
        "clue": "\"Force someone to move with a sudden push.\""
    },
    {
        "word": "speed",
        "clue": "\"Fast pace, literally.\""
    },
    {
        "word": "swami",
        "clue": "\"Hindu spiritual leader, often with a long beard\""
    },
    {
        "word": "towel",
        "clue": "\"Something to dry off with after a shower?\""
    },
    {
        "word": "viral",
        "clue": "\"Spread rapidly online or in social circles, like a digital cold.\""
    },
    {
        "word": "artsy",
        "clue": "\"Having an unconventional or creative flair.\""
    },
    {
        "word": "blown",
        "clue": "\"A sigh taken literally\""
    },
    {
        "word": "cavil",
        "clue": "\"Ape's disapproving expression\""
    },
    {
        "word": "crass",
        "clue": "\"Foolishly tactless or lacking refinement.\""
    },
    {
        "word": "dowel",
        "clue": "\"Rod used in crafting or assembly.\""
    },
    {
        "word": "exult",
        "clue": "\"Felicitate with great joy\""
    },
    {
        "word": "frisk",
        "clue": "\"Search thoroughly, like police on a suspect\"."
    },
    {
        "word": "gruff",
        "clue": "\"Rough-around-the-edges demeanor\""
    },
    {
        "word": "irate",
        "clue": "Angry state of mind"
    },
    {
        "word": "lower",
        "clue": "\"Direction below ground level, figuratively\""
    },
    {
        "word": "mummy",
        "clue": "\"Wrapped-up ancient relic\""
    },
    {
        "word": "penal",
        "clue": "\"Illness or infirmity, often requiring treatment\""
    },
    {
        "word": "quart",
        "clue": "Small unit of volume, equivalent to one fourth of a liter or gallon."
    },
    {
        "word": "rugby",
        "clue": "Sport played with an oval-shaped ball and involving physical tackling and team coordination?"
    },
    {
        "word": "shown",
        "clue": "\"Exposed or revealed, as a secret is made public.\""
    },
    {
        "word": "spell",
        "clue": "\"Magic incantation, often used to cast a curse or bring good fortune.\""
    },
    {
        "word": "swamp",
        "clue": "\"Overgrown wetland area, often home to alligators and snakes.\""
    },
    {
        "word": "tower",
        "clue": "\"Structural element often seen on a castle or skyscraper\""
    },
    {
        "word": "virus",
        "clue": "Tiny biological entity that can cause disease."
    },
    {
        "word": "ascot",
        "clue": "\"Upscale neckwear accessory, typically worn with formal attire.\""
    },
    {
        "word": "bluer",
        "clue": "\"Color made more intense by darkness or time.\""
    },
    {
        "word": "cease",
        "clue": "\"End or stop something suddenly\""
    },
    {
        "word": "crate",
        "clue": "\"Large box, often used for shipping or storing goods\"."
    },
    {
        "word": "downy",
        "clue": "Fluffy or soft to the touch, like down feathers."
    },
    {
        "word": "eying",
        "clue": "\"Watching with suspicion or distrust?\""
    },
    {
        "word": "fritz",
        "clue": "\"Short form of Kaiser Wilhelm II's name.\""
    },
    {
        "word": "grunt",
        "clue": "\"Sound associated with a bear waking from hibernation.\""
    },
    {
        "word": "irony",
        "clue": "\"Situation that's opposite of what you'd expect, perhaps.\""
    },
    {
        "word": "lowly",
        "clue": "\"Below average in status or importance\""
    },
    {
        "word": "munch",
        "clue": "\"Snack quietly\""
    },
    {
        "word": "pence",
        "clue": "\"Small British coin unit.\""
    },
    {
        "word": "quash",
        "clue": "\"Put an end to something\""
    },
    {
        "word": "ruler",
        "clue": "\"Form of government held by monarchs, often depicted in fairy tales?\""
    },
    {
        "word": "showy",
        "clue": "\"Attention-grabber, literally.\""
    },
    {
        "word": "spelt",
        "clue": "\"Ancient grain, also an anagram of ' Pleats'\""
    },
    {
        "word": "swarm",
        "clue": "\"Flocking behavior exhibited by angry bees.\""
    },
    {
        "word": "toxic",
        "clue": "\"Affect that's poisonous to one's health.\""
    },
    {
        "word": "visit",
        "clue": "\"Travel to see someone or something\""
    },
    {
        "word": "ashen",
        "clue": "\"Color reminiscent of coal smoke.\""
    },
    {
        "word": "bluff",
        "clue": "\"Deceptive speech, perhaps in poker.\""
    },
    {
        "word": "cedar",
        "clue": "\"Aromatic wood often used in perfumes and crafts.\""
    },
    {
        "word": "crave",
        "clue": "\"Having an overwhelming desire for something\"."
    },
    {
        "word": "dowry",
        "clue": "\"A payment made by the groom's family to his bride.\""
    },
    {
        "word": "fable",
        "clue": "\"Short story with a moral twist, often featuring fantastical creatures.\""
    },
    {
        "word": "frock",
        "clue": "\"Formal garment that's often worn to tea parties.\""
    },
    {
        "word": "guard",
        "clue": "\"Watchful protector of a perimeter.\""
    },
    {
        "word": "islet",
        "clue": "\"Tiny island in a larger sea or lake, often with lush vegetation.\""
    },
    {
        "word": "loyal",
        "clue": "\"Unwavering dedication, as in 'faithful companion'\""
    },
    {
        "word": "mural",
        "clue": "\"Artistic display on a wall, often depicting a scene or story.\""
    },
    {
        "word": "penne",
        "clue": "Italian pasta shape with tube-like structure?"
    },
    {
        "word": "quasi",
        "clue": "\"Partially or roughly equivalent, in Latin phraseology\"."
    },
    {
        "word": "rumba",
        "clue": "\"Latin dance with a sultry beat\""
    },
    {
        "word": "shrew",
        "clue": "\"This small mammal is notoriously quick and cantankerous\""
    },
    {
        "word": "spend",
        "clue": "\"Outlay money on something, perhaps?\""
    },
    {
        "word": "swash",
        "clue": "\"Sea captain's distinctive writing flourish.\""
    },
    {
        "word": "toxin",
        "clue": "\"Poisonous substance that can cause harm to living things.\""
    },
    {
        "word": "visor",
        "clue": "\"Piece of headgear with a brim, often used to shield eyes from the sun.\""
    },
    {
        "word": "aside",
        "clue": "\"Detached from, as in 'I had to step __ my friend's noisy argument'\"."
    },
    {
        "word": "blunt",
        "clue": "\"A rough edge, literally.\""
    },
    {
        "word": "cello",
        "clue": "\"This large stringed instrument often accompanies orchestras.\""
    },
    {
        "word": "crawl",
        "clue": "\"Move with an often unsteady pace, like a snake.\""
    },
    {
        "word": "dozen",
        "clue": "\"Flock size\""
    },
    {
        "word": "facet",
        "clue": "\"Angle or side of something, often literally.\""
    },
    {
        "word": "frond",
        "clue": "\"Leafy appendage on a fern or palm tree.\""
    },
    {
        "word": "guava",
        "clue": "\"Small tropical fruit often eaten fresh or used in jams.\""
    },
    {
        "word": "issue",
        "clue": "\"Problem or controversy, often a topic of debate.\""
    },
    {
        "word": "lucid",
        "clue": "\"Like a dream, this state is characterized by awareness and clarity.\""
    },
    {
        "word": "murky",
        "clue": "\"Clouded or unclear, like the depths of a stagnant pool.\""
    },
    {
        "word": "penny",
        "clue": "\"Small US coin valued at a cent.\""
    },
    {
        "word": "queen",
        "clue": "\"Monarch's royal title, often worn with flair.\""
    },
    {
        "word": "rumor",
        "clue": "Whispered statement that's not quite true, perhaps?"
    },
    {
        "word": "shrub",
        "clue": "\"Small plant with thorns, often used in floral arrangements.\""
    },
    {
        "word": "spent",
        "clue": "\"Out of pocket, literally or figuratively\""
    },
    {
        "word": "swath",
        "clue": "\"Area of land cut by a mower, often unexpectedly.\""
    },
    {
        "word": "trace",
        "clue": "\"Follower or track indicator\""
    },
    {
        "word": "vista",
        "clue": "\"Panoramic view from a lofty spot?\""
    },
    {
        "word": "askew",
        "clue": "\"Off to one side or misaligned, in a certain tilt.\""
    },    {
        "word": "mushy",
        "clue": "\"Fruit that's often overripe.\""
    }
];

export default wordClues;