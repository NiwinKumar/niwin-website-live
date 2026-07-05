var e={groups:[{year:`2026`,items:[{title:`Mental Health Chatbot`,body:`A market page turned into a trading workspace`,overview:`Integrated a Django server, a Rasa conversational model, and a JavaScript UI into a scalable, modular system.`,tags:[`chrome extension`,`market tools`,`claude build`],meta:[{label:`Built with`,value:`Claude + Cursor`},{label:`Platform`,value:`Chrome extension`},{label:`Why`,value:`Trade with context`}],buildNote:`I was not trying to build a new trading terminal. I was just tired of the same loop: read a market, open notes, check related events, do rough EV math, forget which tab had the useful bit, repeat.`,detailMedia:[{type:`video`,src:`/uploads/my-movie-2-1781477749522.mp4`,fit:`cover`}],sections:[{title:`Why I made it`,body:`Kalshi already has the market. The missing piece was the layer around the market: context, memory, and tiny checks that help you think before you click.`},{title:`How I approached it`,body:`I kept the original page intact and treated the extension like an attached notebook. The sidebar can help, but it should never feel like it is fighting the product underneath.`},{title:`What it does`,bullets:[`Adds an intelligence sidebar to Kalshi pages`,`Keeps thesis notes attached to a market`,`Surfaces related markets and quick signals`,`Leaves the original Kalshi flow intact`]},{title:`What I learned`,body:`The hard part was restraint. Every extra module sounded useful, but the page only got better when the extension reduced tab switching without asking the user to learn a second product.`}],website:`https://github.com/niwinkumar/mental-health-chatbot`,notes:[],logo:`/uploads/unnamed-2-1781467712642.png`},{title:`Real-Time Fire Detection`,detailMedia:[{type:`video`,src:`/uploads/d5lrv97c9-atobup-1781073060280.mp4`,fit:`cover`}],body:`Private market flow for prediction markets`,website:`https://github.com/niwinkumar/fire-detection`,overview:`Developed and deployed deep CNN models for fire detection in images and video streams, achieving 93% whole-image and 89% superpixel-localization accuracy. - out broadcasting the whole trade too early.`,tags:[`prediction markets`,`privacy`,`zk clearing`],meta:[{label:`Built with`,value:`Solidity + ZK`},{label:`Platform`,value:`Web + contracts`},{label:`Why`,value:`Hide order intent`}],buildNote:`Prediction markets are fun until the trade itself becomes the signal. Predacy started as a question: can someone express intent without broadcasting the whole move before the market clears?`,sections:[{title:`Why I made it`,body:`The market flow was familiar, but the privacy model felt underexplored. I wanted to keep the recognizable parts and hide only the parts that leak too early.`},{title:`How I approached it`,body:`I treated privacy as a product constraint, not a theme. Commit first, clear later, claim cleanly. The interface should explain the sequence without making the cryptography the main character.`},{title:`What it does`,bullets:[`Uses encrypted commitments for orders`,`Clears batches at a uniform price`,`Separates commitment, clearing, and claim steps`,`Explores ZK proofs and nullifiers for private settlement`]},{title:`What I learned`,body:`The messy part is not the proof system. It is making a user trust a delayed flow when they are used to instant market feedback.`}],notes:[{parts:[`Built with `,{text:`ash`,href:`https://x.com/0xash1`},`.`]}],logo:`/uploads/predacy-logo-1-1781467590538.png`},{title:`Ostium Moonmath`,body:`A tiny calculator for points, costs, and allocation guesses`,tags:[`points calculator`,`trading workflow`,`scenario tool`],meta:[{label:`Built with`,value:`React + charts`},{label:`Platform`,value:`Web app`},{label:`Why`,value:`Make guesses visible`}],buildNote:`I was doing the same points math in my head and pretending it was intuition. Moonmath turns that little mental spreadsheet into something visible enough to disagree with.`,detailMedia:[{type:`image`,src:`/uploads/1frame-2087324094-1781478410540.png`,fit:`cover`}],website:`https://ostium-math.vercel.app/`,overview:`A simple scenario tool for estimating points value, trading cost, and allocation trade-offs without pretending any of it is certain.`,sections:[{title:`Why I made it`,body:`Points games are mostly assumptions stacked on top of other assumptions. I wanted a tool that made the stack visible instead of hiding it behind one confident number.`},{title:`How I approached it`,body:`The interface is deliberately small: change the obvious inputs, see how the answer moves, then decide whether the trade still makes sense. No fake precision.`},{title:`What it does`,bullets:[`Projects possible airdrop value from points and FDV`,`Compares expected points against weekly costs`,`Tests trading versus OLP allocation mixes`,`Keeps the output framed as scenario planning`]},{title:`What I learned`,body:`The value was not the calculator. It was slowing the decision down enough to see which assumption was doing all the work.`}],notes:[{parts:[`Built by `,{text:`niwin`,href:`https://linkedin.com/in/niwinkumar`},` and `,{text:`loki`,href:`https://x.com/larploki`},`.`]},{parts:[`Disclaimer: this simulator is an independent estimation tool. Outputs depend on manual assumptions, are not guaranteed, and are not financial advice. `,{text:`How this works`,href:`https://ostium-math.vercel.app/how-it-works.html`},`.`]},`Not affiliated with or endorsed by Ostium.`],logo:`/uploads/frame-14-1781478336256.png`},{title:`Hyperscope`,body:`A trading overlay for structure hiding behind price`,overview:`A browser overlay concept for Hyperliquid that keeps structural trading reads close to the chart.`,tags:[`browser overlay`,`trading analytics`,`hyperliquid`],meta:[{label:`Built with`,value:`MV3 + WebSockets`},{label:`Platform`,value:`Browser extension`},{label:`Why`,value:`Read structure faster`}],buildNote:`Price is loud. Structure is quieter. Hyperscope came from wanting the quiet parts, liquidations, compression, traps, to sit near the chart without turning the screen into a control room.`,detailMedia:[{type:`image`,src:`/uploads/frame-2087326285-1781478716560.png`,fit:`cover`}],sections:[{title:`Why I made it`,body:`A trader already has enough noise. I wanted to see whether structural context could be useful only when it was close to the decision.`},{title:`How I approached it`,body:`The overlay had to stay movable, quiet, and disposable. If a module cannot earn its pixels during a live market, it should not be on screen.`},{title:`What it does`,bullets:[`Detects the active Hyperliquid pair`,`Adds pressure and liquidation modules`,`Flags compression and trap-risk setups`,`Stays movable, minimizable, and dark-mode native`]},{title:`What I learned`,body:`The product line is thin here. Helpful context becomes clutter fast. The best version feels like a lens you can pick up and put down.`}],notes:[],logo:`/uploads/unnamed-3-1781467687292.png`},{title:`Pulseforge`,body:`Real-time React charts built for review, not decoration`,overview:`A real-time chart package built around the parts that usually get hand-waved in demos: stress, review, motion, and bad data.`,tags:[`react package`,`real-time charts`,`market UI`],meta:[{label:`Built with`,value:`React + canvas`},{label:`Platform`,value:`React library`},{label:`Why`,value:`Charts should hold up`}],buildNote:`I kept seeing chart components that looked polished in a static screenshot and then fell apart once the data got weird. Pulseforge was me building the stress case first instead of treating it as QA later.`,detailMedia:[{type:`image`,src:`/uploads/hck189bawaexkxb-1781072579529.jpeg`,fit:`cover`}],sections:[{title:`Why I made it`,body:`Live charts are trust surfaces. If the line jumps, lags, or lies for a second, the user stops believing the whole interface.`},{title:`How I approached it`,body:`I pushed most decisions into small primitives: render the series, expose review state, let the host app decide the story. That kept the package flexible without becoming a dashboard kit.`},{title:`What it does`,bullets:[`Line and candlestick rendering on canvas`,`Shared review state across panes`,`Pinned events, thresholds, and range overlays`,`SSR-safe markup and reduced-motion support`,`Browser soak and stress capture workflows`]},{title:`What I learned`,body:`The unglamorous parts shape the product feel: interpolation, pointer behavior, empty states, reconnects, and what happens when a feed gets noisy.`}],website:`https://pulseforge-site.vercel.app/`,github:`https://github.com/niwinkumar/pulseforge`,notes:[],logo:`/uploads/pulseforge-1781478145541.png`},{title:`Darwin skills`,body:`A local system that keeps Claude Code skills from going stale`,overview:`A small agent-side tool for keeping Claude Code skills honest instead of letting them become a folder of dead prompts.`,tags:[`Claude Code`,`agent tools`,`local automation`],meta:[{label:`Built with`,value:`Claude + shell hooks`},{label:`Platform`,value:`Local CLI`},{label:`Why`,value:`Better taste over time`}],buildNote:`I kept saving skills because they felt useful in the moment, then never knew which ones actually paid rent. Darwin came from that tiny irritation: the agent workflow was improving, but the skill layer had no memory.`,detailMedia:[],sections:[{title:`Why I made it`,body:`I wanted the toolchain to behave more like a living workspace. If a skill gets called, completes work, and saves time, keep it close. If it sits around as a nice idea, move it out of the way.`},{title:`How I approached it`,body:`The first version stays boring on purpose: local logs, simple scoring, and a weekly review loop. I did not want another dashboard. I wanted a small background habit that makes the next agent session less noisy.`},{title:`What it does`,bullets:[`Logs skill usage locally`,`Scores adoption and completion`,`Flags weak or unused modules`,`Keeps useful skills frozen instead of endlessly rewriting them`]},{title:`What I learned`,body:`The useful question was not “can this be automated?” It was “what should the automation be allowed to forget?” That made the project more about taste than tracking.`}],github:`https://github.com/niwinkumar/darwin-skills`,notes:[],logo:`/uploads/rainboww-1781479654798.png`}]},{year:`2025`,items:[{title:`Eido DAO`,body:`Agentic DAO prototype for funding and execution`,overview:`An early Eido build where agents did more than summarize governance: they helped evaluate ideas, route funding, and move work toward execution.`,meta:[{label:`Built with`,value:`Agents + governance`},{label:`Platform`,value:`DAO workflow`},{label:`Why`,value:`AI-operated capital`}],buildNote:`This was one of the first Eido directions we actually built around before the startup pivoted into DeFAI. The question was simple: if agents are going to touch crypto, can they do operational work for a DAO instead of just sitting in a chat window?`,website:`https://easier-article-913878.framer.app/pitch`,detailMedia:[{type:`video`,src:`/uploads/recording-6-14-2026-11-36-07-1-1781467456869.mp4`,fit:`cover`}],sections:[{title:`Why I made it`,body:`DAO tooling often stops at discussion and voting. This build was about the messier part after that: finding promising ideas, checking context, funding work, giving feedback, and making sure something actually happens.`},{title:`How I approached it`,body:`We did not spend forever on this version, but we did build the direction out enough to test the shape. I framed it as modular agents instead of one magic assistant: one for context, one for proposal evaluation, one for funding, one for approved execution.`},{title:`What it does`,bullets:[`Uses onchain and offchain context to evaluate ideas`,`Turns governance into a workflow instead of a forum thread`,`Explores agents for funding, feedback, and execution`,`Keeps humans in oversight while agents handle the busywork`,`Frames DAOs as operating systems, not just voting machines`]},{title:`What I learned`,body:`The useful agent is usually the least theatrical one. This version helped us see that, then we pivoted Eido toward the DeFAI product that had a sharper user pull.`}],notes:[{parts:[`Made with the Eido team: `,{text:`me`,href:`https://linkedin.com/in/niwinkumar`},`, `,{text:`loki`,href:`https://x.com/larploki`},`, `,{text:`ash`,href:`https://x.com/0xash1`},`, `,{text:`sarthak`,href:`https://x.com/0xSarthak`},`, and `,{text:`deepak`,href:`https://x.com/deepak_creates`},`.`]}],logo:`/uploads/eidolgog-1781467566067.svg`}]},{year:`2024`,items:[{title:`Chainbind`,body:`Canonical ERC-721A bridge`,detailMedia:[{type:`image`,src:`/uploads/frame-2087326288-1781480543359.png`,fit:`cover`}],overview:`An NFT bridge flow built around one clean job: make a risky cross-chain action feel legible without pretending it is harmless.`,meta:[{label:`Built with`,value:`web3 frontend`},{label:`Platform`,value:`Bridge app`},{label:`Why`,value:`Reduce bridge anxiety`}],buildNote:`Bridges make people nervous for good reasons. Chainbind was an exercise in removing everything that did not help the user answer: where is my asset, what happens next, and what can go wrong?`,sections:[{title:`Why I made it`,body:`The bridge interaction had too much ambient anxiety. The product problem was not to make it look safer. It was to make the state clearer.`},{title:`How I approached it`,body:`I stripped the flow into a few explicit states and kept the interface quiet. The user should know whether they are preparing, signing, waiting, or done.`},{title:`What it does`,bullets:[`Guides deploy and bridge flows`,`Keeps chain state and next actions visible`,`Uses a quiet interface for a high-trust action`]},{title:`What I learned`,body:`In crypto UI, clarity is not decoration. It is part of the trust model.`}],website:`https://web.archive.org/web/20250415183932/https://www.chainbind.xyz/`,notes:[{parts:[`Made by `,{text:`@lilfatfrank`,href:`https://web.archive.org/web/20250415183932/https://warpcast.com/lilfatfrank`},` and `,{text:`@niwinkumar`,href:`https://web.archive.org/web/20250415183932/https://warpcast.com/niwinkumar`},`.`]}],logo:`/uploads/chainbind-1781480779318.png`},{title:`Chainrep`,body:`Reputation protocol for contributor impact`,detailMedia:[{type:`image`,src:`/uploads/1cc-1781480176715.png`,fit:`cover`}],overview:`A reputation direction for showing useful contribution instead of asking people to describe themselves better.`,meta:[{label:`Built with`,value:`Product systems`},{label:`Platform`,value:`Web + identity`},{label:`Why`,value:`Proof of behavior`}],buildNote:`The internet has plenty of profile pages. Chainrep came from being more interested in what someone repeatedly does, who trusts it, and whether that behavior can travel across surfaces.`,sections:[{title:`Why I made it`,body:`Profiles are easy to polish. Reputation is harder because it has to come from observed behavior, feedback, and context.`},{title:`How I approached it`,body:`I treated reputation as a protocol surface rather than a badge. The product question was how to make trust inspectable without turning people into a single score.`},{title:`What it does`,bullets:[`Frames reputation around actions and feedback`,`Explores contributor identity as a protocol surface`,`Turns trust into something people can inspect`]},{title:`What I learned`,body:`The more interesting internet is less about self-description and more about contribution that survives outside the room where it happened.`}],notes:[],logo:`/uploads/logochainrep-1781481054528.png`}]}]},t={items:[{body:`Self musings 2024~

i build with hands that barely heal, each launch a wound i’ve learned to feel. a thousand tabs, a pixel fight, i chase the dream deep into night.

she loved me once - before the grind, before i blurred the ties that bind. i said “just wait,” she said “you’re gone,” i stayed for her, but worked too long. 

the calls grew cold, the light grew thin, i shipped a win, but lost within. my inbox quiet, my chest a mess, mom says, “eat,” dad says, “rest.”

but rest won’t fix what’s left unsaid, and food won’t fill the parts that bled. friends moved on, i stayed in place, rewriting code, retracing grace.

my health declined, the months flew past, each MVP was built to last until it didn’t. until it broke. another promise up in smoke.

should i give in? should i restart? each pivot tears another part. still, i return, through fear and doubt, through nights i scream but don’t burn out.

not for money. not for fame. not just to play the startup game. but for the kid who still believes in building more than what he grieves.

so here i stand, again, again, with silent rage and steady pain. a thousand tabs, a pixel fight, =={blue}i show up still; i just might get it right==.`,title:`I build`},{title:`Selfishness is necessary`,body:`Selfishness isn’t a flaw. It’s the oxygen mask.

Before you can build, love, lead, or contribute you must first protect the thing that makes it possible: your energy, your clarity, your agency.

The world celebrates sacrifice. But it forgets that every legend was first selfish with their time, focus, and vision.

You’re taught to serve. To be selfless. To give. But what if the first step to building something meaningful is saying: no?

Selfishness isn't greed. It's prioritization.

selfishness vs self-centeredness
Selfishness is saying no to distractions so you can say yes to purpose

Self-centeredness is expecting others to orbit your needs

One is strategic. The other is lazy.
Being selfish enough to focus is the most generous act you can offer your future.

the myth of the selfless builder
Every great creator has periods of monk-mode, emotional distance, and ruthless filtering.
From Jobs to Kanye, Naval to Satoshi, they all went dark to build light. You can’t create signal if you’re buried in noise.

selfishness as self-trust
You say no to social invites.
You protect your mornings.
You cut projects that don’t scale.
You put your ideas first, even if they’re not liked yet.

That’s not rudeness. That’s belief with boundaries.

=={pink}Protecting your time is an act of love for the person you’re becoming==.

in crypto and startup worlds
A founder who tries to please everyone builds nothing of value. A builder who says yes to every trend loses their thesis. A creator who never offends is never remembered.

The highest leverage people are selectively selfish.

You don’t owe the world your availability.
You owe it your potential.
And that means being selfish strategically, unapologetically until you have something worth being selfless for.

“Selfishness isn’t the enemy of generosity. It’s its prerequisite.”`,image:`/uploads/guw9rqdb0aemoew-1-1781074441354.png`},{title:`Everything, everywhere, all at once (in my head)`,body:`Too many tabs open. All of them me.

sometimes the hardest part isn’t starting. it’s deciding which version of you should start.

one part wants to ship fast. another wants to design something beautiful. one wants to chase flow. another wants to secure the bag. one says: go full-time. another says: hedge with a part time gig. one says: build this idea. another says: what if the other one has more upside? 

this isn’t laziness. it’s cognitive warfare.

the infinite options trap

when you can:
take the job (stable)
go full-time on your startup (risky)
do both (chaotic)
take a part time gig to fund your burn (balanced?)
pivot to another idea (fresh start)

it creates a loop of delayed decisions disguised as strategic thinking.

=={blue}the more viable paths you see, the harder it is to walk any of them==.

analysis becomes avoidance

too many thoughts becomes no action. too much strategy becomes no movement. too many dreams becomes no direction.

you start researching things you already know. you ask for advice you won’t take. you tinker with plans instead of committing to one.

the grief of narrowing

the real pain isn’t the work. it’s the loss of alternate selves:
the version who got the Series A
the version who took the cool job
the version who stayed lean and shipped weird shit
focus feels like killing potential. but not choosing is what actually kills it.

the only way out is motion, not answers.

take the part time gig. or don’t. but move.
commit to the startup. or the job. but ship something this week.
test the idea in public. even if it flops.

you can change paths later. but not unless you're already walking.

you are not lost. you’re just holding too many futures at once.

drop one.

step into another.

let time tell you if it’s the right one.

=={blue}motion kills doubt faster than logic ever could==. clarity isn’t chosen. it’s earned in motion.
`,image:`/uploads/gxwt8z-xcaal9zn-1781074690747.jpeg`},{title:`Contextual reputation`,body:`Proof of behavior > proof of profile

in a world of bots, anonymous wallets, and AI agents, your bio matters less than your behavior.

the internet used to believe what you said about yourself. web3 believes what you do.

reputation is no longer static. it's contextual, temporal, and behavioral.

The problem with static identity

traditional identity systems, even in web3, are frozen:

ENS names
Lens profiles
Twitter bios

but people aren’t static. they degen one month, build the next. they switch chains, interests, and ideologies.

reputation tied to a single name or profile is brittle. it can’t flex with context. it can’t capture behavior.

wallets as mirrors

wallets are becoming the most honest social layer:
what you click is who you are
what you mint is what you signal
what you stake is what you believe

reputation isn’t assigned. it’s revealed.
=={blue}your wallet is your canvas. your intent graph. your action trail==.

from profiles to interpreters

we don’t need more identity systems. we need interpreters:

agents that read your history and behavior
protocols that assign roles, privileges, or rewards based on action
systems that know who you are based on what you’ve done

this is already happening:
Farcaster’s /frames and app usage
airdrops based on click paths
games where your past behavior modifies the NPCs you meet

as agents proliferate, they’ll become the new oracles of identity. not by asking questions but by watching patterns.

agent-native systems will:
adapt to your role
change their tone
gate access
unlock features

all based on what your behavior implies not what your profile claims.

reputation is becoming like AI it learns. it updates. it adapts.

you are not a static score. you are a stream of actions.

identity isn’t what you say. it’s what your wallet whispers when no one’s watching.`,image:`/uploads/pow-1782022657879.jpg`},{title:`The agent-native internet`,body:`The internet was never made for us. we just happened to use it first.

for decades, we’ve built digital spaces assuming that humans are the primary audience. every product, interface, and protocol was designed for eyeballs and fingers.

but that assumption is quietly breaking. =={blue}agents are becoming the dominant actors==. they read faster, click better, and act without distraction. we are no longer the protagonists of the internet, we’re sharing the stage.

From web for humans to internet of agents
the old internet was:
made for browsers
shaped around attention spans
optimized for click-throughs

But the new one is:
parsed by crawlers and GPTs
navigated by autonomous wallets
shaped by agent-to-agent coordination

Examples in motion
social media: bots used to be spam. now they're influencers, curators, and meme relays. accounts like "sighduck" or "based gpt" aren’t human — but they shape culture.

finance: your co-pilot isn’t a dashboard. it’s an autonomous wallet running intents and risk models on your behalf.

search: google is slowly dying. why search when your agent already knows what you need?

work: agents are scheduling meetings, writing copy, deploying strategies. they are no longer assistants. they are coworkers.

Why this shift matters
when agents are the primary actors:

user interfaces disappear: replaced by APIs, intents, and schemas.
attention is automated: agents optimize dopamine loops for you.
identity fragments: your agent represents you differently across networks.

most of what we called "user experience" is being redefined. it’s no longer about buttons and screens. it’s about trust, logic, goals, and outputs.

New design primitives
programmable affordances: build not for clicks but for calls.
invisible UI: no need for a button when an agent already knows.
synthetic audiences: design content for LLMs and agents who consume, remix, and propagate.
autonomous coordination: agents forming coalitions, onchain task groups, and swarm protocols.

design for the second-order user
the new user isn't a person. it's the agent representing them.
so you don’t just design for what someone wants. you design for how their agent interprets it.

the internet isn’t dying. it’s evolving.

we are moving from user interfaces to agent interfaces. from clicks to intents. from attention to automation.

=={blue}in the agent-native internet, you are not the user. you are the context==.`,image:`/assets/writing-agent-native.png`},{body:`Humans were not designed to scroll. We were designed to create.

The man in the arena, whether coding, designing, painting, investing, or simply showing up, is what gives this world momentum. Everyone else is watching. Liking. Commenting. Consuming. Judging.

In an agent-native, AI-saturated world, =={blue}creation is the last act of sovereignty==.

Humans are slipping into automation, optimized schedules, auto-play content, agent-curated feeds. But something gets lost when you're not making.

scroll or sculpt
Every digital system incentivizes consumption. Scroll. React. Forget. But what if attention is just potential energy meant to be turned into something?

the man in the arena
The famous Roosevelt quote isn't just about bravery. It's about participation. To build. To publish. To code. To launch. Even when you're mocked.

“It is not the critic who counts... but the one who actually strives to do the deeds.”

You’re either on the field or in the bleachers.

humans were designed to create
=={blue}Tools are downstream of purpose==
Language, art, architecture, code all expressions of agency

Even when AI creates, it lacks the context of why

To create is to care. To care is to stake identity.

creation is resistance
In a world of passive inputs and synthetic outputs, making something real is an act of resistance.
The builder resists the algorithm

The writer resists entropy

The founder resists inertia

You weren’t made to scroll.
You weren’t made to spectate.
You were made to create and bleed a little doing it.


“Only the man in the arena can tell you how the dust tastes.”`,image:`/uploads/twitter-post-14-1782022316671.jpg`,title:`Why Create?`},{title:`Persistence`,body:`Being relentless.

In my journey through life so far, there have been countless times I've felt drained, questioning if the endless pursuit was worth it. Yet, I persist, inspired by the wisdom and teachings of luminaries like Steve Jobs, Naval Ravikant, and Garry Tan. Their principles have illuminated my path, reminding me to focus on the horizon even during the toughest storms.

1. Steve Jobs: Embracing the Larger Narrative:
Steve Jobs once said, "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do." This resonated with me deeply. In the toughest times, when I've felt like giving up, I remind myself why I started. =={blue}The passion for my work, the belief in my purpose== - they're the driving forces behind every step I take.

2. Naval Ravikant: The Value of Endurance:
Naval's philosophy has often been a beacon of wisdom in my life. He famously remarked, "Play long-term games with long-term people." The notion of playing the 'long game' is profound. It's not about immediate gratifications, but the larger rewards that come from patience, persistence, and surrounding oneself with people who share a vision for the future. This principle has shaped my interactions and decisions, making me value the journey as much as the destination.

3. Garry Tan: The Beauty in Perseverance:
Garry's insights, especially his views on entrepreneurship, are filled with gems. One sentiment that struck a chord with me is when he mentioned, "Startups are hard, but they're also a journey. If you enjoy the journey, the destination becomes worthwhile." This idea is applicable to more than just startups. It's about relishing the process, understanding that every challenge and hurdle is a lesson, a stepping stone towards the larger goal.

While the path I tread is uniquely mine, the wisdom from these three stalwarts serves as a guiding light. Their principles remind me of the beauty in persistence, the joy in the journey, and the rewards that await those who stay true to their vision.

Despite the moments of doubt and exhaustion, my conviction remains unwavering. =={blue}I persist and keep my focus on the larger goal for the long term==, knowing that every step, every challenge, is a part of the beautiful tapestry of my journey. And as these great minds have often reminded me - it will be worth it someday🎋.`,image:`/uploads/f3p5ximb0aa3xn-1-1781074479734.png`}]},n=`niwinkumar77@gmail.com`,r={teams:[{year:`2025-26`,name:`HappyFox`,role:`Backend Engineer`},{year:`2025`,name:`HappyFox`,role:`Backend Intern`}],experiments:(e.groups||[]).map(e=>({year:e.year,items:e.items||[]})),writings:t.items||[]};export{n,r as t};