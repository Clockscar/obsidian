/*
Star Icons for Obsidian — built from source
MIT License
*/
"use strict";var Nl=Object.defineProperty;var wf=Object.getOwnPropertyDescriptor;var Ef=Object.getOwnPropertyNames;var Tf=Object.prototype.hasOwnProperty;var Af=(n,e)=>{for(var t in e)Nl(n,t,{get:e[t],enumerable:!0})},Cf=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Ef(e))!Tf.call(n,s)&&s!==t&&Nl(n,s,{get:()=>e[s],enumerable:!(i=wf(e,s))||i.enumerable});return n};var If=n=>Cf(Nl({},"__esModule",{value:!0}),n);var t_={};Af(t_,{StarIconsPlugin:()=>Pl,default:()=>e_});module.exports=If(t_);var kt=require("obsidian");var ti=require("obsidian");var Bh=[{name:"star-sparkle",tags:["star","sparkle","brand","logo"],viewBox:"0 0 24 24",svg:`
    <path d="M12 2.8l2.1 4.6 5 .7-3.6 3.5.9 5-4.4-2.3-4.4 2.3.9-5-3.6-3.5 5-.7L12 2.8z"/>
    <path d="M18.5 3.5l.4.9.9.4-.9.4-.4.9-.4-.9-.9-.4.9-.4.4-.9z" fill="currentColor" stroke="none"/>
    <path d="M6 16l.5 1.1 1.1.5-1.1.5L6 19.2l-.5-1.1-1.1-.5 1.1-.5L6 16z" fill="currentColor" stroke="none"/>`.trim()},{name:"star-filled",tags:["star","filled","solid","rating"],viewBox:"0 0 24 24",svg:`
    <path d="M12 2.6l2.9 5.9 6.5 1-4.7 4.6 1.1 6.5L12 17.5l-5.8 3.1 1.1-6.5-4.7-4.6 6.5-1L12 2.6z" fill="currentColor" stroke="none"/>`.trim()},{name:"star-badge",tags:["star","badge","medal","award"],viewBox:"0 0 24 24",svg:`
    <circle cx="12" cy="12" r="8.5"/>
    <path d="M12 6.8l1.7 3.4 3.8.5-2.7 2.7.6 3.8L12 15.7l-3.4 1.5.6-3.8-2.7-2.7 3.8-.5L12 6.8z"/>`.trim()},{name:"star-cross",tags:["star","cross","compass","rose","navigation"],viewBox:"0 0 24 24",svg:`
    <path d="M12 2.5v19M2.5 12h19M5.3 5.3l13.4 13.4M18.7 5.3L5.3 18.7"/>
    <path d="M12 2.5L13.5 10.5 21.5 12 13.5 13.5 12 21.5 10.5 13.5 2.5 12 10.5 10.5 12 2.5z"/>`.trim()},{name:"comet",tags:["comet","space","star","tail"],viewBox:"0 0 24 24",svg:`
    <circle cx="16.5" cy="7.5" r="4.2"/>
    <path d="M2.5 21.5c4.5-6.5 9-10.5 13-12.5"/>
    <path d="M2.5 21.5c5-.5 9.5-2 12.5-4.5"/>
    <path d="M2.5 21.5c4-3 7-4.5 10-5.5"/>`.trim()},{name:"constellation",tags:["constellation","stars","space","connect"],viewBox:"0 0 24 24",svg:`
    <path d="M5 5l4 3-2 5 4 2"/>
    <path d="M11 15l6-9"/>
    <path d="M19 12l-8 3"/>
    <circle cx="5" cy="5" r="1.7"/>
    <circle cx="9" cy="8" r="1.7"/>
    <circle cx="7" cy="13" r="1.7"/>
    <circle cx="11" cy="15" r="1.7"/>
    <circle cx="17" cy="6" r="1.7"/>
    <circle cx="19" cy="12" r="1.7"/>`.trim()},{name:"galaxy",tags:["galaxy","space","spiral","cosmos"],viewBox:"0 0 24 24",svg:`
    <path d="M12 3a9 9 0 0 1 9 9 6.5 6.5 0 0 1-6.5 6.5A4.5 4.5 0 0 1 10 14a3 3 0 0 1 3-3"/>
    <path d="M3 12a9 9 0 0 0 9 9 6 6 0 0 0 6-6"/>
    <circle cx="7.5" cy="6.5" r="0.7" fill="currentColor" stroke="none"/>
    <circle cx="17" cy="17.5" r="0.7" fill="currentColor" stroke="none"/>
    <circle cx="5" cy="15.5" r="0.7" fill="currentColor" stroke="none"/>`.trim()},{name:"orbit",tags:["orbit","satellite","space","orbit"],viewBox:"0 0 24 24",svg:`
    <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-24 12 12)"/>
    <circle cx="12" cy="12" r="2.2"/>
    <circle cx="19.8" cy="9.6" r="1.5"/>
    <path d="M4.5 14.5c-.8 2.5-.3 4.8 1.5 6" opacity="0.5"/>`.trim()},{name:"shooting-star",tags:["shooting","star","falling","wish"],viewBox:"0 0 24 24",svg:`
    <path d="M19 5.5L6.5 18"/>
    <path d="M19 5.5l-5.6.8 4.8 4.8.8-5.6z"/>
    <path d="M14 14.5c-2.5 2.5-5.5 4-9 4.5"/>
    <path d="M3.5 19c.7-1.5 1.7-2.7 3-3.5"/>`.trim()},{name:"nova",tags:["nova","star","burst","explosion","flash"],viewBox:"0 0 24 24",svg:`
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>
    <path d="M12 7.2l1.4 2.9 3.2.5-2.3 2.3.6 3.2L12 14.6l-2.9 1.5.6-3.2-2.3-2.3 3.2-.5L12 7.2z"/>`.trim()},{name:"satellite",tags:["satellite","space","antenna","signal"],viewBox:"0 0 24 24",svg:`
    <rect x="7.5" y="7.5" width="9" height="9" rx="1.5"/>
    <path d="M10.5 4.5h3M12 4.5V3"/>
    <path d="M4.5 10.5h-1.5M4.5 13.5h-1.5M19.5 10.5h1.5M19.5 13.5h1.5"/>
    <path d="M9 13.5l3 3 3-3"/>`.trim()},{name:"meteor",tags:["meteor","space","fire","falling"],viewBox:"0 0 24 24",svg:`
    <circle cx="15" cy="9" r="4.5"/>
    <path d="M15 4.5V3"/>
    <path d="M12.2 6.2L10.5 4.5"/>
    <path d="M17.8 6.2L19.5 4.5"/>
    <path d="M10 12.5c-3.5 2.5-6 5-7 8"/>
    <path d="M10.5 13.5c-2.8 2-4.5 4-5 6.5"/>`.trim()},{name:"star-wand",tags:["wand","magic","star","sparkle"],viewBox:"0 0 24 24",svg:`
    <path d="M15 4l5 5-3.5 3.5-5-5L15 4z"/>
    <path d="M13.5 5.5L5 14v5h5l8.5-8.5"/>
    <path d="M8 5.5l.6 1.4 1.4.6-1.4.6L8 9.5l-.6-1.4L6 7.5l1.4-.6L8 5.5z" fill="currentColor" stroke="none"/>`.trim()},{name:"supernova",tags:["supernova","star","rings","explosion"],viewBox:"0 0 24 24",svg:`
    <circle cx="12" cy="12" r="2.2"/>
    <path d="M12 2.5l1.3 2.7 3 .4-2.2 2.1.5 3-2.6-1.4-2.6 1.4.5-3-2.2-2.1 3-.4L12 2.5z"/>
    <circle cx="12" cy="12" r="6" opacity="0.6"/>
    <circle cx="12" cy="12" r="9.5" opacity="0.35"/>`.trim()}];var Rf=[{name:"dog",emoji:"\u{1F436}",tags:["pet","puppy","canine"]},{name:"cat",emoji:"\u{1F431}",tags:["pet","kitten","feline"]},{name:"mouse",emoji:"\u{1F42D}",tags:["pet","rodent"]},{name:"hamster",emoji:"\u{1F439}",tags:["pet","rodent"]},{name:"rabbit",emoji:"\u{1F430}",tags:["bunny","pet"]},{name:"fox",emoji:"\u{1F98A}",tags:["wild","canine"]},{name:"bear",emoji:"\u{1F43B}",tags:["wild","forest"]},{name:"polar-bear",emoji:"\u{1F43B}\u200D\u2744\uFE0F",tags:["wild","arctic","ice"]},{name:"panda",emoji:"\u{1F43C}",tags:["bear","bamboo"]},{name:"koala",emoji:"\u{1F428}",tags:["bear","australia"]},{name:"tiger",emoji:"\u{1F42F}",tags:["wild","big-cat"]},{name:"lion",emoji:"\u{1F981}",tags:["wild","big-cat","king"]},{name:"cow",emoji:"\u{1F42E}",tags:["farm","livestock"]},{name:"pig",emoji:"\u{1F437}",tags:["farm","livestock"]},{name:"boar",emoji:"\u{1F417}",tags:["wild"]},{name:"frog",emoji:"\u{1F438}",tags:["amphibian","pond"]},{name:"monkey",emoji:"\u{1F435}",tags:["primate","jungle"]},{name:"gorilla",emoji:"\u{1F98D}",tags:["primate","jungle"]},{name:"orangutan",emoji:"\u{1F9A7}",tags:["primate","ape"]},{name:"chimpanzee",emoji:"\u{1F412}",tags:["primate","ape"]},{name:"chicken",emoji:"\u{1F414}",tags:["farm","poultry"]},{name:"rooster",emoji:"\u{1F413}",tags:["farm","poultry"]},{name:"baby-chick",emoji:"\u{1F423}",tags:["poultry","spring"]},{name:"chick",emoji:"\u{1F424}",tags:["poultry","spring"]},{name:"bird",emoji:"\u{1F426}",tags:["songbird"]},{name:"penguin",emoji:"\u{1F427}",tags:["arctic","bird"]},{name:"duck",emoji:"\u{1F986}",tags:["waterfowl","pond"]},{name:"eagle",emoji:"\u{1F985}",tags:["raptor","bird-of-prey"]},{name:"owl",emoji:"\u{1F989}",tags:["raptor","night"]},{name:"bat",emoji:"\u{1F987}",tags:["night","mammal"]},{name:"wolf",emoji:"\u{1F43A}",tags:["wild","canine"]},{name:"horse",emoji:"\u{1F434}",tags:["farm","equine"]},{name:"unicorn",emoji:"\u{1F984}",tags:["fantasy","magic"]},{name:"bee",emoji:"\u{1F41D}",tags:["insect","honey"]},{name:"caterpillar",emoji:"\u{1F41B}",tags:["insect","garden"]},{name:"butterfly",emoji:"\u{1F98B}",tags:["insect","garden"]},{name:"snail",emoji:"\u{1F40C}",tags:["garden","mollusk"]},{name:"ladybug",emoji:"\u{1F41E}",tags:["insect","garden"]},{name:"ant",emoji:"\u{1F41C}",tags:["insect"]},{name:"beetle",emoji:"\u{1FAB2}",tags:["insect"]},{name:"cricket",emoji:"\u{1F997}",tags:["insect"]},{name:"spider",emoji:"\u{1F577}\uFE0F",tags:["arachnid"]},{name:"scorpion",emoji:"\u{1F982}",tags:["arachnid","desert"]},{name:"turtle",emoji:"\u{1F422}",tags:["reptile","slow"]},{name:"snake",emoji:"\u{1F40D}",tags:["reptile"]},{name:"lizard",emoji:"\u{1F98E}",tags:["reptile"]},{name:"t-rex",emoji:"\u{1F996}",tags:["dinosaur","prehistoric"]},{name:"dinosaur",emoji:"\u{1F995}",tags:["dinosaur","prehistoric"]},{name:"octopus",emoji:"\u{1F419}",tags:["sea","ocean"]},{name:"squid",emoji:"\u{1F991}",tags:["sea","ocean"]},{name:"shrimp",emoji:"\u{1F990}",tags:["sea","seafood"]},{name:"lobster",emoji:"\u{1F99E}",tags:["sea","seafood"]},{name:"crab",emoji:"\u{1F980}",tags:["sea","seafood"]},{name:"blowfish",emoji:"\u{1F421}",tags:["fish","sea"]},{name:"fish",emoji:"\u{1F41F}",tags:["fish","sea"]},{name:"tropical-fish",emoji:"\u{1F420}",tags:["fish","aquarium"]},{name:"dolphin",emoji:"\u{1F42C}",tags:["mammal","sea"]},{name:"whale",emoji:"\u{1F433}",tags:["mammal","sea"]},{name:"shark",emoji:"\u{1F988}",tags:["fish","sea"]},{name:"crocodile",emoji:"\u{1F40A}",tags:["reptile"]},{name:"leopard",emoji:"\u{1F406}",tags:["wild","big-cat"]},{name:"buffalo",emoji:"\u{1F9AC}",tags:["wild","livestock"]},{name:"ox",emoji:"\u{1F402}",tags:["farm","zodiac"]},{name:"ram",emoji:"\u{1F40F}",tags:["farm","zodiac"]},{name:"sheep",emoji:"\u{1F411}",tags:["farm","wool"]},{name:"goat",emoji:"\u{1F410}",tags:["farm","zodiac"]},{name:"camel",emoji:"\u{1F42A}",tags:["desert"]},{name:"llama",emoji:"\u{1F999}",tags:["farm","andes"]},{name:"giraffe",emoji:"\u{1F992}",tags:["wild","savanna"]},{name:"elephant",emoji:"\u{1F418}",tags:["wild","savanna"]},{name:"mammoth",emoji:"\u{1F9A3}",tags:["prehistoric","ice-age"]},{name:"rhinoceros",emoji:"\u{1F98F}",tags:["wild","savanna"]},{name:"hippopotamus",emoji:"\u{1F99B}",tags:["wild","river"]},{name:"kangaroo",emoji:"\u{1F998}",tags:["australia","marsupial"]},{name:"rat",emoji:"\u{1F400}",tags:["rodent"]},{name:"turkey",emoji:"\u{1F983}",tags:["farm","poultry"]},{name:"peacock",emoji:"\u{1F99A}",tags:["bird","colorful"]},{name:"parrot",emoji:"\u{1F99C}",tags:["bird","tropical"]},{name:"swan",emoji:"\u{1F9A2}",tags:["waterfowl"]},{name:"flamingo",emoji:"\u{1F9A9}",tags:["bird","tropical"]},{name:"dove",emoji:"\u{1F54A}\uFE0F",tags:["bird","peace"]},{name:"otter",emoji:"\u{1F9A6}",tags:["river","mammal"]},{name:"skunk",emoji:"\u{1F9A8}",tags:["wild"]},{name:"badger",emoji:"\u{1F9A1}",tags:["wild"]},{name:"hedgehog",emoji:"\u{1F994}",tags:["garden","mammal"]},{name:"squirrel",emoji:"\u{1F43F}\uFE0F",tags:["forest","rodent"]},{name:"beaver",emoji:"\u{1F9AB}",tags:["river","rodent"]},{name:"seal",emoji:"\u{1F9AD}",tags:["sea","mammal"]},{name:"sloth",emoji:"\u{1F9A5}",tags:["jungle","slow"]},{name:"dodo",emoji:"\u{1F9A4}",tags:["extinct","bird"]},{name:"goose",emoji:"\u{1FABF}",tags:["farm","waterfowl"]},{name:"jellyfish",emoji:"\u{1FABC}",tags:["sea","ocean"]},{name:"feather",emoji:"\u{1FAB6}",tags:["bird","flight"]},{name:"paw-prints",emoji:"\u{1F43E}",tags:["track","pet"]}],Pf=[{name:"rose",emoji:"\u{1F339}",tags:["flower","garden","romance"]},{name:"wilted-rose",emoji:"\u{1F940}",tags:["flower","wilted"]},{name:"hibiscus",emoji:"\u{1F33A}",tags:["flower","tropical"]},{name:"sunflower",emoji:"\u{1F33B}",tags:["flower","summer"]},{name:"blossom",emoji:"\u{1F33C}",tags:["flower","spring"]},{name:"tulip",emoji:"\u{1F337}",tags:["flower","spring","holland"]},{name:"cherry-blossom",emoji:"\u{1F338}",tags:["flower","sakura","spring"]},{name:"lotus",emoji:"\u{1FAB7}",tags:["flower","pond"]},{name:"white-flower",emoji:"\u{1F4AE}",tags:["flower","stamp"]},{name:"rosette",emoji:"\u{1F3F5}\uFE0F",tags:["flower","decoration"]},{name:"bouquet",emoji:"\u{1F490}",tags:["flowers","gift"]},{name:"seedling",emoji:"\u{1F331}",tags:["plant","grow","spring"]},{name:"potted-plant",emoji:"\u{1FAB4}",tags:["plant","home"]},{name:"evergreen",emoji:"\u{1F332}",tags:["tree","forest"]},{name:"deciduous",emoji:"\u{1F333}",tags:["tree","forest"]},{name:"palm",emoji:"\u{1F334}",tags:["tree","tropical","beach"]},{name:"cactus",emoji:"\u{1F335}",tags:["plant","desert"]},{name:"sheaf-of-rice",emoji:"\u{1F33E}",tags:["grain","farm"]},{name:"herb",emoji:"\u{1F33F}",tags:["plant","herb"]},{name:"shamrock",emoji:"\u2618\uFE0F",tags:["clover","ireland","luck"]},{name:"four-leaf-clover",emoji:"\u{1F340}",tags:["clover","luck"]},{name:"maple-leaf",emoji:"\u{1F341}",tags:["leaf","autumn","canada"]},{name:"fallen-leaf",emoji:"\u{1F342}",tags:["leaf","autumn"]},{name:"leaf",emoji:"\u{1F343}",tags:["leaf","wind"]},{name:"mushroom",emoji:"\u{1F344}",tags:["fungus","forest"]},{name:"chestnut",emoji:"\u{1F330}",tags:["nut","autumn"]},{name:"shell",emoji:"\u{1F41A}",tags:["sea","beach"]},{name:"rock",emoji:"\u{1FAA8}",tags:["stone","nature"]},{name:"wood",emoji:"\u{1FAB5}",tags:["forest","log"]},{name:"bamboo",emoji:"\u{1F38D}",tags:["plant","japan"]},{name:"pine-decoration",emoji:"\u{1F384}",tags:["tree","christmas"]}],Df=[{name:"microscope",emoji:"\u{1F52C}",tags:["lab","research","biology"]},{name:"telescope",emoji:"\u{1F52D}",tags:["space","astronomy"]},{name:"test-tube",emoji:"\u{1F9EA}",tags:["lab","chemistry","experiment"]},{name:"petri-dish",emoji:"\u{1F9EB}",tags:["lab","biology"]},{name:"dna",emoji:"\u{1F9EC}",tags:["genetics","biology"]},{name:"alembic",emoji:"\u2697\uFE0F",tags:["chemistry","distill"]},{name:"atom",emoji:"\u269B\uFE0F",tags:["physics","nuclear"]},{name:"microbe",emoji:"\u{1F9A0}",tags:["germ","virus","bacteria"]},{name:"magnet",emoji:"\u{1F9F2}",tags:["physics","magnetism"]},{name:"abacus",emoji:"\u{1F9EE}",tags:["math","calculator"]},{name:"thermometer",emoji:"\u{1F321}\uFE0F",tags:["temperature","weather"]},{name:"syringe",emoji:"\u{1F489}",tags:["medicine","vaccine"]},{name:"pill",emoji:"\u{1F48A}",tags:["medicine","pharmacy"]},{name:"stethoscope",emoji:"\u{1FA7A}",tags:["medicine","doctor"]},{name:"bone",emoji:"\u{1F9B4}",tags:["anatomy","skeleton"]},{name:"brain",emoji:"\u{1F9E0}",tags:["anatomy","mind"]},{name:"anatomical-heart",emoji:"\u{1FAC0}",tags:["anatomy","heart"]},{name:"lungs",emoji:"\u{1FAC1}",tags:["anatomy","breathing"]},{name:"eye",emoji:"\u{1F441}\uFE0F",tags:["anatomy","vision"]},{name:"ear",emoji:"\u{1F442}",tags:["anatomy","hearing"]},{name:"tooth",emoji:"\u{1F9B7}",tags:["anatomy","dental"]},{name:"foot",emoji:"\u{1F9B6}",tags:["anatomy"]},{name:"leg",emoji:"\u{1F9B5}",tags:["anatomy"]},{name:"muscle",emoji:"\u{1F4AA}",tags:["anatomy","strength"]},{name:"lightbulb",emoji:"\u{1F4A1}",tags:["idea","energy"]},{name:"battery",emoji:"\u{1F50B}",tags:["energy","power"]},{name:"electric-plug",emoji:"\u{1F50C}",tags:["energy","electricity"]},{name:"gear",emoji:"\u2699\uFE0F",tags:["mechanics","settings"]},{name:"satellite",emoji:"\u{1F6F0}\uFE0F",tags:["space","orbit"]},{name:"rocket",emoji:"\u{1F680}",tags:["space","launch"]},{name:"flying-saucer",emoji:"\u{1F6F8}",tags:["space","ufo"]},{name:"robot",emoji:"\u{1F916}",tags:["ai","tech"]},{name:"satellite-antenna",emoji:"\u{1F4E1}",tags:["signal","radar"]},{name:"ruler",emoji:"\u{1F4CF}",tags:["math","measure"]},{name:"protractor",emoji:"\u{1F4D0}",tags:["math","geometry"]},{name:"magnifying-glass",emoji:"\u{1F50D}",tags:["search","inspect"]},{name:"crystal-ball",emoji:"\u{1F52E}",tags:["future","mystic"]},{name:"infinity",emoji:"\u267E\uFE0F",tags:["math","limit"]},{name:"radioactive",emoji:"\u2622\uFE0F",tags:["hazard","nuclear"]},{name:"biohazard",emoji:"\u2623\uFE0F",tags:["hazard","safety"]},{name:"saturn",emoji:"\u{1FA90}",tags:["planet","space"]},{name:"milky-way",emoji:"\u{1F30C}",tags:["space","galaxy"]},{name:"comet",emoji:"\u2604\uFE0F",tags:["space","asteroid"]},{name:"globe",emoji:"\u{1F30D}",tags:["earth","planet"]},{name:"moon",emoji:"\u{1F319}",tags:["moon","night"]},{name:"full-moon",emoji:"\u{1F315}",tags:["moon","night"]},{name:"explosion",emoji:"\u{1F4A5}",tags:["boom","impact"]}],Kr={animals:Rf,nature:Pf,science:Df};var Rt=["lucide","material","material-outlined","material-sharp","star","tabler","tabler-filled","unicons","unicons-solid","unicons-monochrome","unicons-thinline","remix","phosphor","phosphor-bold","phosphor-fill","phosphor-light","phosphor-thin","phosphor-duotone","bootstrap","boxicons","boxicons-solid","boxicons-logos","heroicons","heroicons-solid","fontawesome","simple-icons","ionicons","antd","line-awesome","eva","octicons","openmoji","openmoji-black","twemoji","fluent","animals","nature","science","mdi","hugeicons","iconoir","mingcute","carbon","tdesign","gravity-ui","feather","radix-icons","jam","pixelarticons","teenyicons","majesticons","circle-flags","vscode-icons"],Ul=["#e93147","#ff7a45","#f5b301","#e5c07b","#98c379","#0bbf7a","#40c4ff","#61dafb","#3b82f6","#7289da","#a78bfa","#c678dd","#f472b6","#ff6b81","#d29922","#8b949e"],zh=[{id:"8bit",label:"8-bit",desc:"Square-wave bleeps \u2014 retro arcade vibes."},{id:"cinematic",label:"Cinematic",desc:"Soft, spacious tones with a subtle echo."},{id:"minimal",label:"Minimal",desc:"Quiet sine blips \u2014 barely there."}],Fl=[{title:"Interactions",kinds:["click","select","transition"]},{title:"Themed",kinds:["twinkle","crash","ding","pop","chime"]},{title:"Animals",kinds:["bark","meow","roar","howl","chatter","chirp","cluck","quack","hoot","moo","neigh","oink","baa","ribbit","squeak","buzz","trumpet"]}],r_=Fl.flatMap(n=>n.kinds),Ol={click:"Hover",select:"Click / select",transition:"Icon change",twinkle:"Twinkle (stars)",crash:"Crash (trash)",ding:"Ding (bells)",pop:"Pop (add)",chime:"Chime (hearts)",bark:"Bark (dogs)",meow:"Meow (cats)",roar:"Roar (lions, tigers, bears)",howl:"Howl (wolves)",chatter:"Chatter (monkeys)",chirp:"Chirp (songbirds)",cluck:"Cluck (chickens)",quack:"Quack (ducks)",hoot:"Hoot (owls)",moo:"Moo (cows)",neigh:"Neigh (horses)",oink:"Oink (pigs)",baa:"Baa (sheep)",ribbit:"Ribbit (frogs)",squeak:"Squeak (mice, hamsters)",buzz:"Buzz (bees, flies)",trumpet:"Trumpet (elephants)"},is="https://github.com/Stef4678/star-icons/issues",Vh={fileExplorerIcons:!0,tabIcons:!0,inlineTitleIcons:!1,inlineTitleEditMode:!1,showSourceTooltips:!0,statusBarIndicator:!0,enabledPacks:{lucide:!0,material:!0,star:!0,tabler:!0,"tabler-filled":!0,unicons:!0,remix:!0,phosphor:!0,bootstrap:!0,boxicons:!0,heroicons:!0,openmoji:!0,animals:!0,nature:!0,science:!0,"material-outlined":!1,"material-sharp":!1,"phosphor-bold":!1,"phosphor-fill":!1,"phosphor-light":!1,"phosphor-thin":!1,"phosphor-duotone":!1,"unicons-solid":!1,"unicons-monochrome":!1,"unicons-thinline":!1,"boxicons-solid":!1,"boxicons-logos":!1,"heroicons-solid":!1,"openmoji-black":!1,fontawesome:!1,"simple-icons":!1,ionicons:!1,antd:!1,"line-awesome":!1,eva:!1,octicons:!1,twemoji:!1,fluent:!1,mdi:!1,hugeicons:!1,iconoir:!1,mingcute:!1,carbon:!1,tdesign:!1,"gravity-ui":!1,feather:!1,"radix-icons":!1,jam:!1,pixelarticons:!1,teenyicons:!1,majesticons:!1,"circle-flags":!1,"vscode-icons":!1},overrides:{},overrideColors:{},rules:[],fileTypeDefaults:{},fileTypeDefaultColors:{},defaultIcon:null,defaultIconColor:null,favoriteIconIds:[],collections:[],dataviewCollections:[],iconTags:{},recentIconIds:[],userIcons:[],lastPackFilter:"all",iconGridDensity:"comfortable",reportUrl:is,soundscapesEnabled:!1,soundPack:"minimal",soundIntensity:40,soundHover:!0,soundClick:!0,soundTransition:!0,customSounds:{}},qt={lucide:"Lucide",material:"Material Symbols","material-outlined":"Material Outlined","material-sharp":"Material Sharp",star:"Star Icons",tabler:"Tabler","tabler-filled":"Tabler Filled",unicons:"Unicons","unicons-solid":"Unicons Solid","unicons-monochrome":"Unicons Mono","unicons-thinline":"Unicons Thinline",remix:"Remix Icon",phosphor:"Phosphor","phosphor-bold":"Phosphor Bold","phosphor-fill":"Phosphor Fill","phosphor-light":"Phosphor Light","phosphor-thin":"Phosphor Thin","phosphor-duotone":"Phosphor Duotone",bootstrap:"Bootstrap Icons",boxicons:"Boxicons","boxicons-solid":"Boxicons Solid","boxicons-logos":"Boxicons Logos",heroicons:"Heroicons","heroicons-solid":"Heroicons Solid",fontawesome:"Font Awesome","simple-icons":"Simple Icons",ionicons:"Ionicons",antd:"Ant Design","line-awesome":"Line Awesome",eva:"Eva Icons",octicons:"Octicons",openmoji:"OpenMoji Color","openmoji-black":"OpenMoji Mono",twemoji:"Twemoji",fluent:"Fluent Emoji",animals:"Animals",nature:"Nature & Flowers",science:"Science",mdi:"Material Design Icons",hugeicons:"Hugeicons",iconoir:"Iconoir",mingcute:"MingCute",carbon:"Carbon",tdesign:"TDesign Icons","gravity-ui":"Gravity UI",feather:"Feather","radix-icons":"Radix Icons",jam:"Jam Icons",pixelarticons:"Pixelarticons",teenyicons:"Teenyicons",majesticons:"Majesticons","circle-flags":"Circle Flags","vscode-icons":"VSCode Icons",user:"My Icons"},Xs={star:"star-sparkle",lucide:"sparkles",material:"home","material-outlined":"home","material-sharp":"home",tabler:"layout-grid","tabler-filled":"home",unicons:"apps","unicons-solid":"home","unicons-monochrome":"home","unicons-thinline":"home",remix:"home-line",phosphor:"house","phosphor-bold":"house-bold","phosphor-fill":"house-fill","phosphor-light":"house-light","phosphor-thin":"house-thin","phosphor-duotone":"house-duotone",bootstrap:"house",boxicons:"home","boxicons-solid":"home","boxicons-logos":"github",heroicons:"home","heroicons-solid":"home",fontawesome:"house","simple-icons":"github",ionicons:"home",antd:"home-outlined","line-awesome":"home",eva:"home-outline",octicons:"home-16",openmoji:"grinning-face","openmoji-black":"grinning-face",twemoji:"grinning-face",fluent:"smiling-face",animals:"dog",nature:"rose",science:"microscope",mdi:"home",hugeicons:"home-01",iconoir:"home",mingcute:"home-1-line",carbon:"home",tdesign:"home","gravity-ui":"house",feather:"home","radix-icons":"home",jam:"home",pixelarticons:"home",teenyicons:"home-outline",majesticons:"home","circle-flags":"un","vscode-icons":"default-folder"},Zr=[{title:"Essentials \xB7 on by default",open:!0,packs:["lucide","material","star","tabler","tabler-filled","unicons","remix","phosphor","bootstrap","boxicons","heroicons","openmoji","animals","nature","science"]},{title:"More icon sets",open:!0,packs:["fontawesome","simple-icons","ionicons","antd","line-awesome","eva","octicons","twemoji","fluent"]},{title:"Weights & variants",open:!1,packs:["material-outlined","material-sharp","phosphor-bold","phosphor-fill","phosphor-light","phosphor-thin","phosphor-duotone","unicons-solid","unicons-monochrome","unicons-thinline","boxicons-solid","boxicons-logos","heroicons-solid","openmoji-black"]},{title:"More modern sets",open:!1,packs:["mdi","hugeicons","iconoir","mingcute","carbon","tdesign","gravity-ui"]},{title:"Compact & pixel",open:!1,packs:["feather","radix-icons","jam","pixelarticons","teenyicons","majesticons"]},{title:"Flags & file types",open:!1,packs:["circle-flags","vscode-icons"]}],kl={filename:"File name",path:"File path",extension:"Extension",folder:"Folder",tag:"Tag",property:"Property",heading:"Heading",time:"Time"},Hh={equals:"is equal to",contains:"contains",startsWith:"starts with",endsWith:"ends with",matches:"matches regex",isIn:"is in",isNotIn:"is not in",exists:"exists",notExists:"does not exist"};function Jr(n,e="0 0 24 24"){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${e}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${n}</svg>`}function ot(n,e){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${e}" fill="currentColor">${n}</svg>`}function Lf(n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><text x="12" y="12" font-size="19" text-anchor="middle" dominant-baseline="central">${n}</text></svg>`}function ns(n,e){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${e}">${n}</svg>`}function Yt(n,e){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${e}" fill="currentColor">${n}</svg>`}function Bl(n,e){return`si-${n}-${e}`}function Gh(n,e,t){return e.map(i=>{let s=[...i.tags??[],...i.name.split(/[-_]/)].filter(Boolean);return{id:Bl(n,i.name),pack:n,name:i.name,tags:Array.from(new Set(s)),svg:t(i.svg,i.viewBox)}})}function zl(n,e){return e.map(t=>({id:Bl(n,t.name),pack:n,name:t.name,tags:Array.from(new Set([...t.tags,...t.name.split(/[-_]/)])),svg:Lf(t.emoji)}))}var Wh=Gh("star",Bh,Jr),Xh=zl("animals",Kr.animals),qh=zl("nature",Kr.nature),Yh=zl("science",Kr.science),jh=["star","animals","nature","science"],$h=Rt.filter(n=>!jh.includes(n)),an=[...Wh,...Xh,...qh,...Yh],Ln={star:Wh,animals:Xh,nature:qh,science:Yh},Vl=new Map(an.map(n=>[n.id,n]));function bt(n){if(n)return Vl.get(n)}var Kh={star:"1.0.0",animals:"system emoji",nature:"system emoji",science:"system emoji"},Nf={lucide:Jr,tabler:Jr,heroicons:Jr,"tabler-filled":ot,material:ot,"material-outlined":ot,"material-sharp":ot,unicons:ot,"unicons-solid":ot,"unicons-monochrome":ot,"unicons-thinline":ot,remix:ot,phosphor:ot,"phosphor-bold":ot,"phosphor-fill":ot,"phosphor-light":ot,"phosphor-thin":ot,"phosphor-duotone":ot,bootstrap:ot,boxicons:ot,"boxicons-solid":ot,"boxicons-logos":ot,"heroicons-solid":ot,fontawesome:ot,"simple-icons":ot,antd:ot,"line-awesome":ot,eva:ot,octicons:ot,ionicons:ns,openmoji:ns,"openmoji-black":ns,twemoji:ns,fluent:ns,mdi:Yt,hugeicons:Yt,iconoir:Yt,mingcute:Yt,carbon:Yt,tdesign:Yt,"gravity-ui":Yt,feather:Yt,"radix-icons":Yt,jam:Yt,pixelarticons:Yt,teenyicons:Yt,majesticons:Yt,"circle-flags":Yt,"vscode-icons":Yt};function Zh(n,e){let t=Nf[n]??ns;return Gh(n,e.icons??[],t)}function Hl(n,e){Ln[n]=e;for(let t of e)Vl.set(t.id,t);an=[...an,...e]}function Uf(n){let e=Ln[n];if(e){for(let t of e)Vl.delete(t.id);an=an.filter(t=>t.pack!==n),delete Ln[n]}}function Qr(n){return jh.includes(n)}function eo(n){return!!Ln[n]}function Jh(n){return n.map(e=>({id:Bl("user",e.name),pack:"user",name:e.name,tags:Array.from(new Set(["user",...e.tags??[],...e.name.split(/[-_]/)])),svg:e.svg}))}function Qh(n){Uf("user"),n.length&&Hl("user",n)}var Ys=require("obsidian");var eu=0;function Nn(n="id"){return eu+=1,`${n}-${Date.now().toString(36)}-${eu.toString(36)}-${Math.random().toString(36).slice(2,7)}`}function ln(n){let e=5381;for(let t=0;t<n.length;t++)e=e*33^n.charCodeAt(t);return e>>>0}function Gl(n,e){return e<=0?0:ln(n)%e}function Pi(n,e){let t=null;return(...i)=>{t!==null&&window.clearTimeout(t),t=window.setTimeout(()=>{t=null,n(...i)},e)}}function tu(n,e){let t=n.toLowerCase(),i=e.toLowerCase();if(!t)return 1;if(i.includes(t))return 100+(i.length-t.length)*-1;let s=0,r=0,o=0;for(let a=0;a<i.length&&s<t.length;a++)i[a]===t[s]?(s++,o++,r+=2+o):(o=0,r-=1);return s===t.length?Math.max(1,r):0}function iu(n,e,t=200){let i=e.trim();if(!i)return n.slice(0,t);let s=[];for(let r of n){let o=tu(i,r.name.replace(/[-_]/g," ")),a;if(o>0)a=o+1e4;else{a=0;for(let l of r.tags){let c=tu(i,l);c>a&&(a=c)}}a>0&&s.push({icon:r,score:a})}return s.sort((r,o)=>o.score-r.score||r.icon.name.localeCompare(o.icon.name)),s.slice(0,t).map(r=>r.icon)}function nu(n,e){let t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),i=URL.createObjectURL(t),s=document.body.createEl("a",{attr:{href:i,download:n}});s.click(),s.remove(),window.setTimeout(()=>URL.revokeObjectURL(i),2e3)}function Wl(n){if(!n)return null;let e=/^(\d{1,2}):(\d{2})$/.exec(n.trim());if(!e)return null;let t=parseInt(e[1],10),i=parseInt(e[2],10);return t>23||i>59?null:t*60+i}function su(n){return n.getHours()*60+n.getMinutes()}function Xl(n){try{return new RegExp(n),!0}catch{return!1}}function ql(n,e,t){return Math.min(t,Math.max(e,n))}function ru(n){return n.trim().toLowerCase().replace(/^\./,"")}function ou(n){return n.trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function au(n){let e=n.trim();return/<svg[\s>]/i.test(e)?e:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${e}</svg>`}function Di(n,e=24){return/\swidth=|\sheight=/i.test(n)?n:n.replace(/^<svg/i,`<svg width="${e}" height="${e}"`)}function to(n,e,t=new Date){let i=n instanceof Ys.TFolder,s=n.name,r=n instanceof Ys.TFile?n.extension.toLowerCase():"",o=i?s:r?s.slice(0,-(r.length+1)):s,a=n.parent?n.parent.path:"/",l=[],c={},h=[];if(n instanceof Ys.TFile&&e.metadataCache){let d=e.metadataCache.getFileCache(n);if(d){if(d.tags&&(l=d.tags.map(u=>u.tag.replace(/^#/,""))),d.frontmatter){let u={};for(let g of Object.keys(d.frontmatter))u[g]=d.frontmatter[g];c=u;let p=d.frontmatter.tags;Array.isArray(p)?l=l.concat(p.map(String)):typeof p=="string"&&l.push(p)}d.headings&&(h=d.headings.map(u=>u.heading))}}return{path:n.path,basename:o,name:s,extension:r,isFolder:i,folderPath:a,tags:l,properties:c,headings:h,now:t}}function ss(n,e,t){switch(e){case"equals":return n===t;case"contains":return n.includes(t);case"startsWith":return n.startsWith(t);case"endsWith":return n.endsWith(t);case"matches":return Xl(t)&&new RegExp(t).test(n);case"isIn":return t.split(",").map(i=>i.trim()).filter(Boolean).includes(n);case"isNotIn":return!t.split(",").map(i=>i.trim()).filter(Boolean).includes(n);default:return!1}}function lu(n,e,t){return n.length===0?e==="notExists":n.some(i=>ss(i,e,t))}function Yl(n,e){let t=n.value?.trim()??"";switch(n.type){case"filename":return ss(e.basename,n.op,t);case"path":return ss(e.path,n.op,t);case"extension":return ss(e.extension,n.op,t);case"folder":{let i=e.isFolder?e.path:e.folderPath,s=t.replace(/[\\/]+$/,"");switch(n.op){case"isIn":return s==="/"||i===s||i.startsWith(s+"/");case"isNotIn":return!(s==="/"||i===s||i.startsWith(s+"/"));case"contains":return i.includes(t);case"matches":return Xl(t)&&new RegExp(t).test(i);default:return ss(i,n.op,t)}}case"tag":{let i=e.tags.map(r=>r.replace(/^#/,"").toLowerCase()),s=t.replace(/^#/,"").toLowerCase();switch(n.op){case"equals":return i.includes(s);case"contains":return i.some(r=>r.includes(s));case"startsWith":return i.some(r=>r.startsWith(s));default:return lu(i,n.op,s)}}case"property":{let i=n.key?.trim()??"";if(!i)return!1;let s=Object.prototype.hasOwnProperty.call(e.properties,i);switch(n.op){case"exists":return s;case"notExists":return!s;case"equals":return s&&String(e.properties[i])===t;case"contains":return s&&String(e.properties[i]).includes(t);default:return s&&ss(String(e.properties[i]),n.op,t)}}case"heading":return lu(e.headings,n.op,t);case"time":return Ff(n,e.now);default:return!1}}function Ff(n,e){if(n.days?.length&&!n.days.includes(e.getDay()))return!1;let t=su(e),i=Wl(n.from),s=Wl(n.to);return i!==null&&s!==null?i<=s?t>=i&&t<=s:t>=i||t<=s:i!==null?t>=i:s!==null?t<=s:!0}function Of(n,e){if(n.conditions.length===0)return!0;let t=n.conditions.map(i=>Yl(i,e));return n.match==="all"?t.every(Boolean):t.some(Boolean)}function cu(n,e,t){let i=n.overrides[e.path];if(i)return qs(n,i)?{iconId:i,color:n.overrideColors?.[e.path],source:"override",detail:"Manual override"}:{iconId:null,source:"override",detail:"Manual override (icon unavailable)"};for(let s of n.rules){if(!s.enabled||!Of(s,e))continue;let r=s.action;if(r.type==="icon")return qs(n,r.iconId)?{iconId:r.iconId,color:r.color,source:"rule",detail:s.name,ruleId:s.id}:{iconId:null,source:"rule",detail:`${s.name} (icon unavailable)`,ruleId:s.id};if(r.type==="clear")return{iconId:null,source:"rule",detail:s.name,ruleId:s.id};if(r.type==="random"){let o=n.collections.find(l=>l.id===r.collectionId),a=o?.iconIds??[];if(a.length)return{iconId:a[Gl(`${e.path}:${s.id}`,a.length)],color:r.color,source:"rule",detail:`${s.name} (random from "${o?.name??"collection"}")`,ruleId:s.id};continue}if(r.type==="randomDataview"){let o=t?.[r.dataviewCollectionId]??[];if(o.length){let a=o[Gl(`${e.path}:${s.id}`,o.length)];if(qs(n,a)){let l=n.dataviewCollections.find(c=>c.id===r.dataviewCollectionId);return{iconId:a,color:r.color,source:"rule",detail:`${s.name} (random from dataview "${l?.name??"query"}")`,ruleId:s.id}}}continue}}if(!e.isFolder){let s=n.fileTypeDefaults[e.extension];if(s&&qs(n,s))return{iconId:s,color:n.fileTypeDefaultColors?.[e.extension],source:"filetype",detail:`File type .${e.extension}`}}return n.defaultIcon?qs(n,n.defaultIcon)?{iconId:n.defaultIcon,color:n.defaultIconColor,source:"default",detail:"Default icon"}:{iconId:null,source:"default",detail:"Default icon (unavailable)"}:{iconId:null,source:"none",detail:"Obsidian default"}}function qs(n,e){let t=bt(e);return t?n.enabledPacks[t.pack]!==!1:!1}function hu(n,e,t){return i=>{if(i){let s=e(i);if(s.iconId)return s.iconId}return t?t.call(n,i):void 0}}var io=class n{constructor(e,t){this.plugin=e;this.app=t;this.patchedViews=new Set;this.leafProtoPatched=!1;this.originalUpdateHeaderIcon=null}refreshAll(){this.plugin.settings.fileExplorerIcons?this.patchExplorers():this.unpatchExplorers(),this.plugin.settings.tabIcons&&this.patchLeafPrototype(),this.updateTabs(),this.updateInlineTitle()}dispose(){this.unpatchExplorers(),this.originalUpdateHeaderIcon&&this.leafProtoPatched&&(ti.WorkspaceLeaf.prototype.updateHeaderIcon=this.originalUpdateHeaderIcon,this.leafProtoPatched=!1);for(let e of this.app.workspace.getLeavesOfType("markdown"))e.view.contentEl.querySelectorAll(".si-inline-icon").forEach(t=>t.remove());this.updateTabs()}resolve(e){if(!e)return{iconId:null,source:"none",detail:"No file"};let t=to(e,this.app);return cu(this.plugin.settings,t,this.plugin.getDataviewResults())}patchExplorers(){for(let e of this.app.workspace.getLeavesOfType("file-explorer")){let t=e.view;if(!t||this.patchedViews.has(t))continue;this.patchedViews.add(t);let i=t.getIcon,s=t.getFolderIcon,r=t.isIconVisible;t.__siOriginals={getIcon:i,getFolderIcon:s,isIconVisible:r},t.getIcon=hu(t,o=>this.resolve(o),i),typeof t.getFolderIcon=="function"&&(t.getFolderIcon=hu(t,o=>this.resolve(o),s)),t.isIconVisible=()=>!0}this.refreshExplorerDom()}unpatchExplorers(){for(let e of this.patchedViews){if(!e)continue;let t=e.__siOriginals;t&&(t.getIcon!==void 0&&(e.getIcon=t.getIcon),t.getFolderIcon!==void 0&&(e.getFolderIcon=t.getFolderIcon),t.isIconVisible!==void 0&&(e.isIconVisible=t.isIconVisible))}this.patchedViews.clear()}refreshExplorerDom(){if(!this.plugin.settings.fileExplorerIcons)return;let e=this.plugin.settings.showSourceTooltips;for(let t of this.app.workspace.getLeavesOfType("file-explorer")){let s=t.view.fileItems;if(s)for(let r of Object.keys(s)){let o=s[r],a=o?.file;if(!a)continue;let l=o.selfEl?.querySelector(".tree-item-icon");if(!l)continue;let c=this.resolve(a);if(c.iconId)try{(0,ti.setIcon)(l,c.iconId)}catch{}if(n.applyResolutionColor(l,c.iconId?c.color:null),e&&o.selfEl){let h=c.iconId?js(c.iconId):"Default icon";o.selfEl.title=`${h} \u2014 ${c.detail}`}else o.selfEl&&(o.selfEl.title="")}}}patchLeafPrototype(){if(this.leafProtoPatched)return;let e=ti.WorkspaceLeaf.prototype,t=e.updateHeaderIcon;if(typeof t!="function")return;this.leafProtoPatched=!0,this.originalUpdateHeaderIcon=t;let i=this.plugin;e.updateHeaderIcon=function(){let s=t.call(this);try{n.applyToLeaf(i,this)}catch{}return s}}static applyToLeaf(e,t){if(!e.settings.tabIcons)return;let i=t.view;if(!i)return;let s=i.file;if(!(s instanceof ti.TFile)&&!(s instanceof ti.TFolder))return;let r=t.tabHeaderInnerIconEl;if(!r)return;let o=e.applier.resolve(s);if(o.iconId){try{(0,ti.setIcon)(r,o.iconId)}catch{}n.applyResolutionColor(r,o.color),e.settings.showSourceTooltips&&(r.title=`${js(o.iconId)} \u2014 ${o.detail}`)}else n.applyResolutionColor(r,null)}updateTabs(){let e=this.app.workspace,t=typeof e.getLeaves=="function"?e.getLeaves():this.app.workspace.getLeavesOfType("markdown");for(let i of t)this.plugin.settings.tabIcons&&n.applyToLeaf(this.plugin,i)}updateInlineTitle(){let e=this.app.workspace.getActiveViewOfType(ti.MarkdownView);if(!e||!e.file)return;for(let a of this.app.workspace.getLeavesOfType("markdown")){let l=a.view;l!==e&&l.contentEl.querySelectorAll(".si-inline-icon").forEach(c=>c.remove())}let t=e.contentEl.querySelector(".inline-title");if(!t)return;let i=e.getMode()==="source",s=this.plugin.settings.inlineTitleIcons&&(!i||this.plugin.settings.inlineTitleEditMode),r=t.querySelector(":scope > .si-inline-icon");if(!s){r?.remove();return}let o=this.resolve(e.file);if(!o.iconId){r?.remove();return}r||(r=t.createSpan({cls:"si-inline-icon"}),r.setAttribute("contenteditable","false"),t.prepend(r));try{(0,ti.setIcon)(r,o.iconId)}catch{}n.applyResolutionColor(r,o.color),this.plugin.settings.showSourceTooltips&&(r.title=`${js(o.iconId)} \u2014 ${o.detail}`)}static applyResolutionColor(e,t){e.style.color=t??""}};function js(n){let e=bt(n);return e?`${e.pack} \xB7 ${e.name}`:n}function uu(n){try{return n.plugins?.plugins?.dataview?.api??null}catch{return null}}function no(n){return uu(n)!==null}async function kf(n,e){let t=uu(n);if(!t)throw new Error("Dataview is not installed or enabled");let i=await t.query(e);if(!i||typeof i!="object"||i.successful===!1)throw new Error("Dataview query failed");return i.value}function Bf(n,e="icon"){let t=new Set;if(!n||typeof n!="object")return[];let i=n;if(i.type==="table"&&Array.isArray(i.value)){let o=(Array.isArray(i.header)?i.header:[]).indexOf(e);for(let a of i.value){if(!Array.isArray(a)){Un(t,a);continue}if(o>=0)Un(t,a[o]);else for(let l of a)Un(t,l)}return Array.from(t)}let s=Array.isArray(i.value)?i.value:[];for(let r of s)if(r&&typeof r=="object"&&"value"in r){let o=r.value;o&&typeof o=="object"&&!Array.isArray(o)?Un(t,o[e]):Un(t,o)}else Un(t,r);return Array.from(t)}function Un(n,e){if(typeof e=="string")e.trim()&&n.add(e.trim());else if(Array.isArray(e))for(let t of e)Un(n,t)}async function so(n,e,t="icon"){try{let i=await kf(n,e);return Bf(i,t)}catch{return[]}}var mi=require("obsidian");var ro=class{constructor(e,t,i,s){this.app=e;this.getPluginManifest=t;this.getSettingsFn=i;this.save=s;this.listeners=new Set;this.manifest={packs:{}};this.pending=new Map}registerIcons(){for(let e of an)try{(0,mi.addIcon)(e.id,e.svg)}catch{}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){for(let e of this.listeners)e()}async mutate(e){e(this.getSettingsFn()),await this.save(),this.notify()}packDataPath(e){return(0,mi.normalizePath)(`${this.app.vault.configDir}/plugins/${this.getPluginManifest().id}/packs/${e}`)}async readPackFile(e){try{let t=await this.app.vault.adapter.read(this.packDataPath(e));return JSON.parse(t)}catch(t){try{let i=await this.fetchPackFromCdn(e);return await this.cachePackFile(e,i),JSON.parse(i)}catch(i){throw console.warn(`[Star Icons] pack data unavailable for "${e}"`,t,i),new Error(`pack data unavailable: ${e}`)}}}packCdnUrl(e){return`https://cdn.jsdelivr.net/gh/Stef4678/star-icons@${encodeURIComponent(this.getPluginManifest().version)}/src/data/generated/${encodeURIComponent(e)}`}async fetchPackFromCdn(e){let t=this.packCdnUrl(e),i=await(0,mi.requestUrl)({url:t,method:"GET"});if(i.status===200)return i.text;if(i.status===404){let s=await(0,mi.requestUrl)({url:`https://cdn.jsdelivr.net/gh/Stef4678/star-icons@main/src/data/generated/${encodeURIComponent(e)}`,method:"GET"});if(s.status===200)return s.text;throw new Error(`CDN returned HTTP ${s.status} for ${e}`)}throw new Error(`CDN returned HTTP ${i.status} for ${e}`)}async cachePackFile(e,t){let i=this.app.vault.adapter,s=(0,mi.normalizePath)(`${this.app.vault.configDir}/plugins/${this.getPluginManifest().id}/packs`);try{await i.mkdir(s)}catch{}await i.write((0,mi.normalizePath)(`${s}/${e}`),t)}async loadManifest(){try{this.manifest=await this.readPackFile("manifest.json")}catch(e){console.warn("[Star Icons] could not read packs/manifest.json",e),this.manifest={packs:{}}}this.notify()}loadPack(e){if(Qr(e)||eo(e))return Promise.resolve();let t=this.pending.get(e);if(t)return t;let i=(async()=>{try{let s=await this.readPackFile(`${e}.json`),r=Zh(e,s);for(let o of r)try{(0,mi.addIcon)(o.id,o.svg)}catch{}Hl(e,r)}catch(s){console.warn(`[Star Icons] failed to load pack "${e}"`,s)}finally{this.pending.delete(e),this.notify()}})();return this.pending.set(e,i),i}loadEnabledPacks(){let e=this.getSettingsFn(),t=$h.filter(i=>e.enabledPacks[i]!==!1);return Promise.allSettled(t.map(i=>this.loadPack(i))).then(()=>{})}async enablePack(e){let t=this.getSettingsFn();t.enabledPacks[e]===!0&&eo(e)||(t.enabledPacks[e]=!0,await this.save(),await this.loadPack(e),this.notify())}async disablePack(e){let t=this.getSettingsFn();t.enabledPacks[e]!==!1&&(t.enabledPacks[e]=!1,await this.save(),this.notify())}getPackInfo(e){return this.manifest.packs[e]??{version:"?",count:0}}getPackCount(e){return Qr(e)?Ln[e]?.length??0:this.manifest.packs[e]?.count??Ln[e]?.length??0}getPackVersion(e){return Qr(e)?Kh[e]??"1.0.0":this.manifest.packs[e]?.version??"?"}totalCount(){let e=this.getSettingsFn();return Rt.reduce((i,s)=>i+(e.enabledPacks[s]!==!1?this.getPackCount(s):0),0)+e.userIcons.length}isPackLoaded(e){return eo(e)}isPackLoading(e){return this.pending.has(e)}getSettings(){return this.getSettingsFn()}packEnabled(e){return this.getSettingsFn().enabledPacks[e]!==!1}availableIcons(){let e=this.getSettingsFn();return an.filter(t=>e.enabledPacks[t.pack]!==!1)}search(e,t="all",i=300){let s=this.availableIcons();return t!=="all"&&(s=s.filter(r=>r.pack===t)),iu(s,e,i)}userIcons(){return this.getSettingsFn().userIcons}mountUserIcons(){let e=Jh(this.userIcons());for(let t of e)try{(0,mi.addIcon)(t.id,t.svg)}catch{}Qh(e)}async addUserIcons(e){if(!e.length)return 0;let t=0;return await this.mutate(i=>{let s=new Set(i.userIcons.map(r=>r.name));for(let r of e){let o=ou(r.name);o||(o="icon");let a=o,l=2;for(;s.has(a);)a=`${o}-${l++}`;s.add(a),i.userIcons.push({name:a,svg:au(r.svg)}),t++}}),this.mountUserIcons(),t}async removeUserIcon(e){let t=e.replace(/^si-user-/,"");await this.mutate(i=>{i.userIcons=i.userIcons.filter(s=>s.name!==t)}),this.mountUserIcons()}isFavorite(e){return this.getSettingsFn().favoriteIconIds.includes(e)}async toggleFavorite(e){await this.mutate(t=>{let i=t.favoriteIconIds.indexOf(e);i>=0?t.favoriteIconIds.splice(i,1):t.favoriteIconIds.unshift(e)})}favoriteIcons(){return this.getSettings().favoriteIconIds.map(bt).filter(e=>!!e)}async pushRecent(e){await this.mutate(t=>{t.recentIconIds=[e,...t.recentIconIds.filter(i=>i!==e)].slice(0,48)})}recentIcons(){return this.getSettings().recentIconIds.map(bt).filter(e=>!!e)}createCollection(e){let t={id:Nn("col"),name:e,iconIds:[],createdAt:Date.now()};return this.mutate(i=>i.collections.push(t)).then(()=>t)}async renameCollection(e,t){await this.mutate(i=>{let s=i.collections.find(r=>r.id===e);s&&(s.name=t)})}async deleteCollection(e){await this.mutate(t=>{t.collections=t.collections.filter(i=>i.id!==e);for(let i of t.rules)i.action.type==="random"&&i.action.collectionId===e&&(i.action={type:"clear"})})}async addToCollection(e,t){await this.mutate(i=>{let s=i.collections.find(r=>r.id===e);s&&!s.iconIds.includes(t)&&s.iconIds.push(t)})}async removeFromCollection(e,t){await this.mutate(i=>{let s=i.collections.find(r=>r.id===e);s&&(s.iconIds=s.iconIds.filter(r=>r!==t))})}async moveInCollection(e,t,i){await this.mutate(s=>{let r=s.collections.find(l=>l.id===e);if(!r||t<0||t>=r.iconIds.length)return;let[o]=r.iconIds.splice(t,1),a=Math.max(0,Math.min(i,r.iconIds.length));r.iconIds.splice(a,0,o)})}collectionsContaining(e){return this.getSettings().collections.filter(t=>t.iconIds.includes(e))}userTagsFor(e){return this.getSettings().iconTags[e]??[]}allUserTags(){let e=new Set;for(let t of Object.values(this.getSettings().iconTags))for(let i of t)e.add(i);return Array.from(e).sort()}async addUserTag(e,t){let i=t.trim().toLowerCase().replace(/\s+/g,"-");i&&await this.mutate(s=>{s.iconTags[e]=s.iconTags[e]??[],s.iconTags[e].includes(i)||s.iconTags[e].push(i)})}async removeUserTag(e,t){await this.mutate(i=>{i.iconTags[e]=(i.iconTags[e]??[]).filter(s=>s!==t)})}async renameUserTag(e,t){let i=t.trim().toLowerCase().replace(/\s+/g,"-");!i||i===e||await this.mutate(s=>{for(let r of Object.keys(s.iconTags))s.iconTags[r]=s.iconTags[r].map(o=>o===e?i:o)})}async deleteUserTag(e){await this.mutate(t=>{for(let i of Object.keys(t.iconTags))t.iconTags[i]=t.iconTags[i].filter(s=>s!==e)})}async clearAllUserTags(){await this.mutate(e=>{e.iconTags={}})}};var zf=[[/(star|sparkle|glitter|twinkle|shine|shiny|spark)/,"twinkle"],[/(trash|delete|remove|bomb|explosion|destroy|boom|dump)/,"crash"],[/(bell|notification|alert|alarm|ring|notif|siren)/,"ding"],[/(heart|love|romance|kiss)/,"chime"],[/(plus|add|new|create|bubble)/,"pop"],[/(music|note|song|melody|audio|sound|headphone)/,"chime"],[/(wolf|coyote)/,"howl"],[/(dog|fox|puppy|canine|husky|bark)/,"bark"],[/(cat|kitten|feline|meow)/,"meow"],[/(lion|tiger|bear|panda|leopard|jaguar|lynx|panther|cheetah|roar)/,"roar"],[/(monkey|chimpanzee|gorilla|orangutan|primate|ape|chimp)/,"chatter"],[/(bird|sparrow|robin|wren|finch|canary|swallow|dove|parrot|eagle|penguin|peacock|chirp|tweet)/,"chirp"],[/(chicken|hen|rooster|chick|turkey|cluck)/,"cluck"],[/(duck|goose|swan|quack)/,"quack"],[/(owl|hoot)/,"hoot"],[/(cow|bull|ox|bison|buffalo|yak|moo)/,"moo"],[/(horse|pony|donkey|zebra|mule|neigh)/,"neigh"],[/(pig|boar|hog|sow|oink)/,"oink"],[/(sheep|goat|ram|lamb|baa)/,"baa"],[/(frog|toad|ribbit)/,"ribbit"],[/(mouse|hamster|rat|squirrel|chipmunk|guinea|mole|squeak)/,"squeak"],[/(bee|fly|wasp|hornet|mosquito|insect|bug|beetle|buzz)/,"buzz"],[/(elephant|mammoth|trumpet)/,"trumpet"]];function $l(n){let e=n.toLowerCase();for(let[t,i]of zf)if(t.test(e))return i;return"click"}var Ze="sine",hi="square",jl={...Kl(Ze,void 0,.8),click:{tones:[{f:880,t:0,d:.05,w:Ze,g:.5}],master:.5,attack:.003,release:.04},select:{tones:[{f:660,t:0,d:.09,w:Ze},{f:990,t:.05,d:.12,w:Ze}],master:.6,attack:.003,release:.08},transition:{noise:.16,noiseFilter:{type:"bandpass",freq:500,freq2:1500,q:1.2},noiseGain:.35,master:.7,attack:.005,release:.1},twinkle:{tones:[{f:1046,t:0,d:.22,w:Ze,g:.5},{f:1318,t:.06,d:.24,w:Ze,g:.5},{f:1568,t:.12,d:.28,w:Ze,g:.55},{f:2093,t:.2,d:.4,w:Ze,g:.6}],master:.55,attack:.004,release:.15},crash:{noise:.28,noiseFilter:{type:"lowpass",freq:1500,freq2:250,q:.6},noiseGain:.6,thud:70,master:.6,attack:.003,release:.2},ding:{tones:[{f:1568,t:0,d:.55,w:Ze,g:.55}],master:.6,attack:.002,release:.3},pop:{tones:[{f:520,f2:780,t:0,d:.09,w:Ze,g:.6}],master:.55,attack:.003,release:.06},chime:{tones:[{f:784,t:0,d:.25,w:Ze,g:.5},{f:988,t:.09,d:.35,w:Ze,g:.5}],master:.55,attack:.004,release:.2}},Vf={...Kl(hi,void 0,.7),click:{tones:[{f:660,t:0,d:.04,w:hi,g:.45}],master:.5,attack:.002,release:.03},select:{tones:[{f:523,f2:784,t:0,d:.1,w:hi,g:.5}],master:.55,attack:.002,release:.05},transition:{tones:[{f:220,f2:880,t:0,d:.18,w:hi,g:.45}],master:.6,attack:.002,release:.06},twinkle:{tones:[{f:1318,t:0,d:.1,w:hi,g:.5},{f:1568,t:.05,d:.1,w:hi,g:.5},{f:1976,t:.1,d:.12,w:hi,g:.55},{f:2637,t:.16,d:.2,w:hi,g:.6}],master:.5,attack:.002,release:.08},crash:{noise:.22,noiseFilter:{type:"lowpass",freq:900,freq2:150,q:.8},noiseGain:.6,thud:60,master:.55,attack:.002,release:.15},ding:{tones:[{f:1318,t:0,d:.3,w:hi,g:.5}],master:.55,attack:.002,release:.15},pop:{tones:[{f:440,f2:660,t:0,d:.07,w:hi,g:.5}],master:.5,attack:.002,release:.04},chime:{tones:[{f:880,t:0,d:.12,w:hi,g:.5},{f:1108,t:.06,d:.16,w:hi,g:.5}],master:.5,attack:.002,release:.08}},Hf={...Kl(Ze,{delay:.22,feedback:.28},.85),click:{tones:[{f:440,t:0,d:.08,w:Ze,g:.5}],master:.55,attack:.006,release:.12,echo:{delay:.18,feedback:.25}},select:{tones:[{f:392,t:0,d:.16,w:Ze,g:.5},{f:587,t:.1,d:.24,w:Ze,g:.5}],master:.6,attack:.008,release:.2,echo:{delay:.22,feedback:.3}},transition:{noise:.4,noiseFilter:{type:"bandpass",freq:300,freq2:900,q:1.1},noiseGain:.4,tones:[{f:196,f2:392,t:.05,d:.35,w:Ze,g:.3}],master:.7,attack:.01,release:.3,echo:{delay:.28,feedback:.35}},twinkle:{tones:[{f:784,t:0,d:.45,w:Ze,g:.5},{f:988,t:.1,d:.5,w:Ze,g:.5},{f:1175,t:.2,d:.55,w:Ze,g:.55},{f:1568,t:.32,d:.7,w:Ze,g:.6}],master:.55,attack:.008,release:.3,echo:{delay:.25,feedback:.3}},crash:{noise:.45,noiseFilter:{type:"lowpass",freq:2e3,freq2:150,q:.7},noiseGain:.6,thud:55,master:.65,attack:.005,release:.35,echo:{delay:.24,feedback:.3}},ding:{tones:[{f:1174,t:0,d:.9,w:Ze,g:.55}],master:.6,attack:.003,release:.45,echo:{delay:.3,feedback:.35}},pop:{tones:[{f:330,f2:494,t:0,d:.14,w:Ze,g:.55}],master:.55,attack:.006,release:.14,echo:{delay:.2,feedback:.25}},chime:{tones:[{f:587,t:0,d:.4,w:Ze,g:.5},{f:740,t:.1,d:.45,w:Ze,g:.5},{f:880,t:.2,d:.5,w:Ze,g:.5}],master:.55,attack:.008,release:.3,echo:{delay:.26,feedback:.3}}};function Gf(){return{bark:{tones:[{f:170,t:0,d:.08,g:.9},{f:150,t:.12,d:.1,g:.8}],noise:.06,noiseFilter:{type:"lowpass",freq:900,q:.7},noiseGain:.4,master:.7,attack:.004,release:.05},meow:{tones:[{f:420,f2:880,t:0,d:.16,g:.7},{f:880,f2:520,t:.16,d:.22,g:.6}],master:.65,attack:.01,release:.08},roar:{tones:[{f:95,t:0,d:.5,g:.9},{f:110,t:.12,d:.45,g:.7}],noise:.5,noiseFilter:{type:"lowpass",freq:300,freq2:150,q:.7},noiseGain:.7,master:.8,attack:.02,release:.2},howl:{tones:[{f:480,f2:760,t:0,d:.35,g:.6},{f:760,f2:500,t:.35,d:.4,g:.6}],master:.6,attack:.02,release:.2},chatter:{tones:[{f:1300,t:0,d:.04,g:.5},{f:1500,t:.05,d:.04,g:.5},{f:1200,t:.1,d:.04,g:.5},{f:1500,t:.15,d:.05,g:.5}],master:.55,attack:.002,release:.03},chirp:{tones:[{f:2400,f2:3400,t:0,d:.06,g:.6},{f:2600,f2:3600,t:.1,d:.06,g:.6}],master:.5,attack:.002,release:.04},cluck:{tones:[{f:520,t:0,d:.05,g:.7},{f:470,t:.07,d:.05,g:.6},{f:520,t:.14,d:.05,g:.6}],master:.6,attack:.002,release:.03},quack:{tones:[{f:330,f2:210,t:0,d:.14,g:.7}],noise:.14,noiseFilter:{type:"bandpass",freq:900,q:1},noiseGain:.35,master:.65,attack:.005,release:.06},hoot:{tones:[{f:420,f2:330,t:0,d:.28,g:.7}],master:.6,attack:.01,release:.15},moo:{tones:[{f:190,f2:120,t:0,d:.4,g:.8}],master:.7,attack:.02,release:.2},neigh:{tones:[{f:760,f2:320,t:0,d:.34,g:.6}],noise:.3,noiseFilter:{type:"bandpass",freq:1400,q:1},noiseGain:.25,master:.6,attack:.01,release:.15},oink:{tones:[{f:260,t:0,d:.07,g:.7},{f:230,t:.1,d:.09,g:.7}],master:.6,attack:.003,release:.05},baa:{tones:[{f:520,f2:360,t:0,d:.2,g:.7},{f:500,f2:340,t:.24,d:.22,g:.6}],master:.6,attack:.008,release:.1},ribbit:{tones:[{f:220,t:0,d:.06,g:.7},{f:150,t:.09,d:.08,g:.7}],master:.6,attack:.003,release:.05},squeak:{tones:[{f:3e3,f2:4200,t:0,d:.09,g:.5}],master:.5,attack:.003,release:.06},buzz:{tones:[{f:210,t:0,d:.28,g:.5},{f:226,t:0,d:.28,g:.5}],master:.6,attack:.01,release:.15},trumpet:{tones:[{f:210,f2:140,t:0,d:.32,g:.8}],noise:.3,noiseFilter:{type:"lowpass",freq:700,q:.8},noiseGain:.35,master:.7,attack:.015,release:.2}}}function Kl(n,e,t){let i={},s=Gf();for(let r of Object.keys(s)){let o=s[r];i[r]={tones:(o.tones??[]).map(a=>({...a,w:n})),...o.noise?{noise:o.noise,noiseFilter:o.noiseFilter,noiseGain:o.noiseGain}:{},master:(o.master??1)*t,attack:o.attack??.005,release:o.release??.08,...e?{echo:e}:{}}}return i}var Wf={"8bit":Vf,cinematic:Hf,minimal:jl},du=new WeakMap;function Xf(n){let e=du.get(n);if(e)return e;let t=Math.floor(n.sampleRate*.5);e=n.createBuffer(1,t,n.sampleRate);let i=e.getChannelData(0);for(let s=0;s<t;s++)i[s]=Math.random()*2-1;return du.set(n,e),e}function fu(n,e,t,i,s,r){let o=n.currentTime+Math.max(0,e.t),a=n.createOscillator();a.type=e.w??Ze,a.frequency.setValueAtTime(Math.max(1,e.f),o),e.f2&&a.frequency.exponentialRampToValueAtTime(Math.max(1,e.f2),o+e.d);let l=n.createGain(),c=Math.max(2e-4,(e.g??1)*r);l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(c,o+i),l.gain.exponentialRampToValueAtTime(1e-4,o+e.d),a.connect(l),l.connect(t),a.start(o),a.stop(o+e.d+s+.05)}function qf(n,e,t,i){let s=e.noise??.1,r=n.currentTime,o=n.createBufferSource();o.buffer=Xf(n);let a=n.createBiquadFilter();a.type=e.noiseFilter?.type??"lowpass",a.Q.value=e.noiseFilter?.q??.7,a.frequency.setValueAtTime(e.noiseFilter?.freq??1200,r),e.noiseFilter?.freq2&&a.frequency.exponentialRampToValueAtTime(e.noiseFilter.freq2,r+s);let l=n.createGain(),c=Math.max(2e-4,(e.noiseGain??.5)*i);l.gain.setValueAtTime(1e-4,r),l.gain.exponentialRampToValueAtTime(c,r+.01),l.gain.exponentialRampToValueAtTime(1e-4,r+s),o.connect(a),a.connect(l),l.connect(t),o.start(r),o.stop(r+s+.05)}function Yf(n,e,t,i){let s=e.attack??.004,r=e.release??.12,o=(e.master??1)*i,a=n.createGain();if(a.gain.value=1,e.echo){let l=n.createDelay(1);l.delayTime.value=e.echo.delay;let c=n.createGain();c.gain.value=e.echo.feedback;let h=n.createGain();h.gain.value=.28,l.connect(c),c.connect(l),l.connect(h),h.connect(t),a.connect(l)}a.connect(t),e.noise&&qf(n,e,a,o),e.thud&&fu(n,{f:e.thud,t:0,d:Math.max(.18,e.noise??.12),w:Ze,g:.7},a,.004,.15,o);for(let l of e.tones??[])fu(n,l,a,s,r,o)}var oo=class{constructor(){this.ctx=null;this.custom=new Map}ensureCtx(){try{let e=window,t=e.AudioContext??e.webkitAudioContext;return t?(this.ctx||(this.ctx=new t),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx):null}catch{return null}}async decode(e,t){let i=this.ensureCtx();if(!i)return!1;try{let s=await i.decodeAudioData(t.slice(0));return this.custom.set(e,s),!0}catch{return!1}}setCustom(e,t){this.custom.set(e,t)}clearCustom(e){this.custom.delete(e)}hasCustom(e){return this.custom.has(e)}play(e,t,i){if(i<=.01||typeof document<"u"&&document.hidden)return!1;let s=this.ensureCtx();if(!s)return!1;let r=s.createGain();r.gain.value=Math.min(1,.9*i),r.connect(s.destination);let o=this.custom.get(e);if(o){let a=s.createBufferSource();return a.buffer=o,a.connect(r),a.start(),!0}return Yf(s,Wf[t]?.[e]??jl[e]??jl.click,r,i),!0}};var ao=class{constructor(e,t){this.getSettings=e;this.app=t;this.engine=new oo;this.lastHoverAt=0}intensity(){return this.getSettings().soundIntensity/100}hover(e){let t=this.getSettings();if(!t.soundscapesEnabled||!t.soundHover)return;let i=Date.now();i-this.lastHoverAt<130||(this.lastHoverAt=i,this.engine.play("click",t.soundPack,this.intensity()*.45))}pick(e){let t=this.getSettings();if(!t.soundscapesEnabled||!t.soundClick)return;let i=e?$l(e.id):"select";this.engine.play(i,t.soundPack,Math.min(1,this.intensity()*1.25))}transition(){let e=this.getSettings();!e.soundscapesEnabled||!e.soundTransition||this.engine.play("transition",e.soundPack,this.intensity()*.9)}playKind(e,t){let i=this.getSettings();i.soundscapesEnabled&&this.engine.play(e,i.soundPack,t??Math.min(1,this.intensity()*1.1))}playIcon(e,t=.7){let i=this.getSettings();i.soundscapesEnabled&&this.engine.play($l(e.id),i.soundPack,t)}async preloadCustom(){let e=this.getSettings();for(let[t,i]of Object.entries(e.customSounds))i&&await this.loadCustom(t,i)}async loadCustom(e,t){try{let i=await this.app.vault.adapter.readBinary(t);return await this.engine.decode(e,i)}catch{return!1}}clearCustom(e){this.engine.clearCustom(e)}hasCustom(e){return this.engine.hasCustom(e)}currentPack(){return this.getSettings().soundPack}};var $s=require("obsidian");function Vi(){try{return(0,$s.getIcon)("si-star-sparkle")?"si-star-sparkle":"star"}catch{return"star"}}function ze(n,e,t){try{(0,$s.setIcon)(n,e)}catch{n.empty();return}let i=n.querySelector("svg");i&&t&&(i.setAttribute("width",String(t)),i.setAttribute("height",String(t)))}function lo(n,e,t,i=300,s=180){let r=t.getBoundingClientRect(),o=e.getBoundingClientRect(),a=r.right-o.left,l=o.right-r.left,c=Math.min(i,Math.max(s,t.clientWidth-24));a>=c?n.setCssStyles({maxWidth:`${c}px`,left:"0",right:"auto"}):l>=c?n.setCssStyles({maxWidth:`${c}px`,left:"auto",right:"0"}):(c=Math.max(120,Math.max(l,a)-8),n.setCssStyles({maxWidth:`${c}px`}),l>=a?n.setCssStyles({left:"auto",right:"0"}):n.setCssStyles({left:"0",right:"auto"}))}function ii(n,e=""){let t=createDiv({cls:"si-empty"});return t.createDiv({cls:"si-empty-icon"}).textContent="\u2726",t.createDiv({cls:"si-empty-text",text:n}),e&&t.createDiv({cls:"si-empty-hint",text:e}),t}function co(n,e={}){let t=createEl("button",{cls:"si-tile"+(e.selected?" is-selected":""),attr:{"data-icon-id":n.id,type:"button"}}),i=t.createDiv({cls:"si-tile-icon"});if(ze(i,n.id),t.createDiv({cls:"si-tile-name"}).textContent=n.name,e.onPick&&t.addEventListener("click",()=>e.onPick?.(n)),e.onHover&&t.addEventListener("mouseenter",()=>e.onHover?.(n)),e.onStar){let s=t.createDiv({cls:"si-tile-star",attr:{"aria-label":"Favorite"}});(0,$s.setIcon)(s,"star"),s.addEventListener("click",r=>{r.stopPropagation(),e.onStar?.(n,r)})}return e.onContext&&t.addEventListener("contextmenu",s=>{s.preventDefault(),e.onContext?.(n,s)}),t}function Ks(n,e,t){let i=createDiv({cls:"si-segmented"}),s=[];for(let r of n){let o=createEl("button",{cls:"si-seg"+(r.value===e?" is-active":""),attr:{type:"button"}});o.textContent=r.label,o.addEventListener("click",()=>{for(let a of s)a.classList.remove("is-active");o.classList.add("is-active"),t(r.value)}),i.appendChild(o),s.push(o)}return i}function ho(n,e){let t=-1,i=e.handleSelector??".si-drag-handle",s=e.dragClass??"is-dragging";n.addEventListener("dragstart",r=>{let o=r.target instanceof HTMLElement?r.target:null,a=o?o.closest("[data-index]"):null;if(a){if(i&&!(o?o.closest(i):null)){r.preventDefault();return}t=parseInt(a.dataset.index??"-1",10),r.dataTransfer?.setData("text/plain",String(t)),r.dataTransfer&&(r.dataTransfer.effectAllowed="move"),a.classList.add(s)}}),n.addEventListener("dragover",r=>{r.preventDefault();let o=r.target instanceof HTMLElement?r.target.closest("[data-index]"):null;!o||parseInt(o.dataset.index??"-1",10)===t||o.classList.add("is-drag-over")}),n.addEventListener("dragleave",r=>{(r.target instanceof HTMLElement?r.target.closest("[data-index]"):null)?.classList.remove("is-drag-over")}),n.addEventListener("drop",r=>{r.preventDefault();let o=r.target instanceof HTMLElement?r.target.closest("[data-index]"):null;if(o?.classList.remove("is-drag-over"),t<0||!o)return;let a=parseInt(o.dataset.index??"-1",10);a>=0&&a!==t&&e.onReorder(t,a),t=-1}),n.addEventListener("dragend",()=>{t=-1,n.querySelectorAll(".is-dragging, .is-drag-over").forEach(r=>{r.classList.remove("is-dragging","is-drag-over")})})}var uo=require("obsidian");function Fn(n,e){let t=e.value||null,i=t!==null&&!Ul.includes(t),s=n.createDiv({cls:"si-color-picker"});e.label&&s.createSpan({cls:"si-color-label",text:e.label});let r=s.createDiv({cls:"si-color-swatches"}),o=r.createEl("button",{cls:"si-color-swatch si-color-auto"+(t===null?" is-active":""),attr:{type:"button","aria-label":"Auto \u2014 theme default color"},title:"Auto (theme default)"});o.createSpan({text:"A"}),o.addEventListener("click",()=>e.onChange(null));for(let h of Ul){let d=r.createEl("button",{cls:"si-color-swatch"+(t===h?" is-active":""),attr:{type:"button","aria-label":h},title:h});d.style.background=h,d.addEventListener("click",()=>e.onChange(h)),r.appendChild(d)}let a=r.createEl("label",{cls:"si-color-swatch si-color-custom"+(i?" is-active":""),attr:{title:"Custom color\u2026","aria-label":"Custom color\u2026"}}),l=a.createSpan({cls:"si-color-custom-plus",text:"+"}),c=a.createEl("input",{cls:"si-color-input",attr:{type:"color"}});a.toggleClass("is-custom",i),i&&a.setCssProps({"--si-swatch":t}),c.addEventListener("input",()=>{a.toggleClass("is-custom",!0),a.setCssProps({"--si-swatch":c.value}),e.onChange(c.value)}),r.appendChild(a)}function fo(n,e){return new Promise(t=>{let i=new uo.Modal(n);i.titleEl.setText(e.title);let s=e.initial??null,r=i.contentEl.createDiv({cls:"si-color-modal"});Fn(r,{value:s,onChange:o=>{s=o}}),r.createDiv({cls:"si-hint",text:"Colors tint stroke/fill icons (Lucide, Tabler, Material\u2026). Full-color packs (emoji) keep their own colors."}),new uo.Setting(i.contentEl).addButton(o=>o.setButtonText("Cancel").onClick(()=>{i.close(),t(null)})).addButton(o=>o.setButtonText("OK").setCta().onClick(()=>{i.close(),t({color:s})})),i.open()})}var gi=require("obsidian");function pu(n,e){return new Promise(t=>{let i=new gi.Modal(n);i.titleEl.setText(e.title);let s=e.initial??"";new gi.Setting(i.contentEl).addText(r=>{r.setPlaceholder(e.placeholder??""),r.setValue(s),r.onChange(o=>s=o),window.setTimeout(()=>r.inputEl.focus(),30),r.inputEl.addEventListener("keydown",o=>{o.key==="Enter"&&(o.preventDefault(),i.close(),t(s.trim()||null))})}),new gi.Setting(i.contentEl).addButton(r=>r.setButtonText("Cancel").onClick(()=>{i.close(),t(null)})).addButton(r=>r.setButtonText(e.okLabel??"OK").setCta().onClick(()=>{i.close(),t(s.trim()||null)})),i.open()})}function vi(n,e){return new Promise(t=>{let i=new gi.Modal(n);i.titleEl.setText(e.title),e.message&&i.contentEl.createDiv({cls:"setting-item-description",text:e.message}),new gi.Setting(i.contentEl).addButton(s=>s.setButtonText("Cancel").onClick(()=>{i.close(),t(!1)})).addButton(s=>{let r=s.setButtonText(e.confirmLabel??"Confirm");e.danger?r.setDestructive():r.setCta(),r.onClick(()=>{i.close(),t(!0)})}),i.open()})}function mu(n,e){return new Promise(t=>{let i=new gi.Modal(n);i.titleEl.setText(e.title);let s="",r=i.contentEl.createEl("textarea",{cls:"si-textarea",attr:{placeholder:e.placeholder??"",spellcheck:"false",rows:"8"}});r.addEventListener("input",()=>s=r.value),r.addEventListener("keydown",o=>{o.key==="Enter"&&(o.ctrlKey||o.metaKey)&&(o.preventDefault(),i.close(),t(s.trim()||null))}),window.setTimeout(()=>r.focus(),30),new gi.Setting(i.contentEl).addButton(o=>o.setButtonText("Cancel").onClick(()=>{i.close(),t(null)})).addButton(o=>o.setButtonText(e.okLabel??"OK").setCta().onClick(()=>{i.close(),t(s.trim()||null)})),i.open()})}function po(n,e={}){return new Promise(t=>{let i=new gi.Modal(n);i.titleEl.setText(e.title??"Icon size");let s=e.presets??[16,24,32,48,64,96],r=e.initial??24,o=i.contentEl.createDiv({cls:"si-chips si-size-picker"}),a=[];for(let h of s){let d=o.createEl("button",{cls:"si-chip"+(h===r?" is-active":""),attr:{type:"button"}});d.createSpan({text:`${h}px`}),d.addEventListener("click",()=>{r=h,c.value=String(h),a.forEach(u=>u.removeClass("is-active")),d.addClass("is-active")}),a.push(d)}let l=i.contentEl.createDiv({cls:"si-size-custom"});l.createSpan({cls:"si-label",text:"Custom"});let c=l.createEl("input",{cls:"si-text-input",attr:{type:"number",min:"1",max:"512",placeholder:"24"}});c.value=String(r),c.addEventListener("keydown",h=>{if(h.key==="Enter"){h.preventDefault();let d=parseInt(c.value,10);i.close(),t(!isNaN(d)&&d>0?d:null)}}),window.setTimeout(()=>c.select(),30),new gi.Setting(i.contentEl).addButton(h=>h.setButtonText("Cancel").onClick(()=>{i.close(),t(null)})).addButton(h=>h.setButtonText("Insert").setCta().onClick(()=>{let d=parseInt(c.value,10);i.close(),t(!isNaN(d)&&d>0?d:null)})),i.open()})}var ni=require("obsidian");function Zs(n){return n.manifest?.version??"unknown"}function jf(n){let e=ni.Platform.isMobileApp?"Mobile":ni.Platform.isDesktopApp?"Desktop":"Unknown",t=ni.Platform.isMacOS?"macOS":ni.Platform.isWin?"Windows":ni.Platform.isLinux?"Linux":"Unknown";return["Star Icons \u2014 bug report","=======================","",`Plugin version : ${n.pluginVersion}`,`Obsidian       : ${n.appVersion}`,`Platform       : ${e} \xB7 ${t}`,`Packs available: ${n.packs} (${n.icons.toLocaleString()} icons)`,`Packs enabled  : ${n.enabledPacks}`,"","Please describe what you did, what you expected, and what happened:","","1. Steps to reproduce:","   - ","2. Expected:","   - ","3. Actual:","   - ","4. Any console errors (Ctrl+Shift+I \u2192 Console):","   - "].join(`
`)}var On=class extends ni.Modal{constructor(t,i){super(t);this.ctx=i}onOpen(){let{contentEl:t}=this;this.titleEl.setText("Report a bug"),t.createDiv({cls:"setting-item-description",text:"Copy the diagnostic report below, fill in what happened, and paste it into a GitHub issue (or the Obsidian forum thread)."});let i=jf(this.ctx),s=t.createEl("textarea",{cls:"si-textarea",attr:{rows:"16",readonly:"",spellcheck:"false"}});s.value=i,new ni.Setting(t).addButton(r=>r.setButtonText("Copy report").setCta().onClick(()=>{navigator.clipboard.writeText(i),new ni.Notice("Bug report copied to clipboard")})).addButton(r=>r.setButtonText("Close").onClick(()=>this.close())),this.ctx.reportUrl&&new ni.Setting(t).setDesc("Open the project's issue tracker in your browser.").addButton(r=>r.setButtonText("Open issue page").onClick(()=>{window.open(this.ctx.reportUrl,"_blank")}))}onClose(){this.contentEl.empty()}};var at=require("obsidian");var gu=[[245,179,1],[255,122,69],[152,195,121],[64,196,255],[59,130,246],[167,139,250],[198,120,221],[244,114,182],[233,49,71],[64,224,208],[255,214,102],[136,148,158]];function xu(n){return gu[ln(n)%gu.length]}function rs(n){if(!n||n==="all")return["#f5b301","#40c4ff"];let[e,t,i]=xu(n);return[`rgb(${e}, ${t}, ${i})`,`rgb(${i}, ${e}, ${t})`]}var $f=3,vu=16,Kf=58;function _u(n){let e=new Map;for(let h of n){let d=e.get(h.pack);d?d.push(h):e.set(h.pack,[h])}let t=Array.from(e.keys()),i=n.length,s=new Float32Array(i*3),r=new Float32Array(i*3),o=[],a=new Map,l=[],c=Math.max(1,t.length);return t.forEach((h,d)=>{let u=c===1?0:d/(c-1),p=u*Math.PI*2*$f+ln(h+":a")%1e3/1e3*.6,g=vu+u*(Kf-vu),y=Math.cos(p)*g,m=Math.sin(p)*g,f=ln(h+":y")%120/120*6-3,M=xu(h);l.push({pack:h,label:h,x:y,y:f,z:m,color:M});let A=e.get(h)??[],b=1.4+Math.min(4.2,Math.sqrt(A.length)*.09),E=Math.PI*(3-Math.sqrt(5));A.forEach((S,C)=>{let x=ln(S.id),T=ln(S.id+":r"),I=ln(S.id+":y"),R=x%628/628*Math.PI*2+C*E,F=.5+T%1e3/1e3*(b-.5),W=o.length;s[W*3]=y+Math.cos(R)*F,s[W*3+1]=f+I%100/100*1.6-.8,s[W*3+2]=m+Math.sin(R)*F,r[W*3]=M[0]/255,r[W*3+1]=M[1]/255,r[W*3+2]=M[2]/255,a.set(S.id,W),o.push(S.id)})}),{positions:s,colors:r,planets:l,indexById:a,iconIds:o}}var Zl=require("obsidian");var os=class{constructor(e){this.opts=e;this.root=null;this.btn=null;this.popover=null;this.search="";this.searchInput=null;this.onDocMouseDown=e=>{this.root&&!this.root.contains(e.target)&&this.close()};this.onKeyDown=e=>{e.key==="Escape"&&this.close()}}mount(e){return this.root=e.createDiv({cls:"si-pack-filter"}),this.btn=this.root.createEl("button",{cls:"si-pack-filter-btn",attr:{type:"button","aria-label":"Filter by pack"}}),this.btn.addEventListener("click",t=>{t.stopPropagation(),this.toggle()}),this.updateLabel(),this.root}update(){this.updateLabel(),this.popover&&this.renderPopover()}close(){this.popover?.remove(),this.popover=null,document.removeEventListener("mousedown",this.onDocMouseDown),document.removeEventListener("keydown",this.onKeyDown)}updateLabel(){if(!this.btn)return;this.btn.empty();let e=this.opts.store,t=this.opts.getCurrent(),i=this.btn.createSpan({cls:"si-pack-filter-icon"});t==="all"?(ze(i,"layers"),this.btn.createSpan({text:`All packs \xB7 ${e.totalCount().toLocaleString()}`})):(ze(i,`si-${t}-${Xs[t]??"home"}`),this.btn.createSpan({text:qt[t]??t}));let s=this.btn.createSpan({cls:"si-pack-filter-chev"});(0,Zl.setIcon)(s,"chevron-down")}toggle(){this.popover?this.close():this.open()}open(){if(!this.root||!this.btn)return;this.popover=this.root.createDiv({cls:"si-pack-filter-pop"});let e=this.root.closest(".si-manager");e&&lo(this.popover,this.btn,e);let t=this.popover.createDiv({cls:"si-pf-head"});t.createSpan({cls:"si-pf-title",text:"Packs"});let i=t.createEl("button",{cls:"si-icon-btn",attr:{type:"button"}});(0,Zl.setIcon)(i,"x"),i.addEventListener("click",()=>this.close());let s=this.popover.createDiv({cls:"si-search si-pf-search"}),r=s.createSpan({cls:"si-search-icon"});ze(r,"search"),this.searchInput=s.createEl("input",{cls:"si-search-input",attr:{placeholder:"Search packs\u2026",spellcheck:"false"}}),this.searchInput.addEventListener("input",()=>{this.search=this.searchInput?.value??"",this.popover&&this.renderPopover()}),this.popover.createDiv({cls:"si-pf-list"}),this.renderPopover(),document.addEventListener("mousedown",this.onDocMouseDown),document.addEventListener("keydown",this.onKeyDown),window.setTimeout(()=>this.searchInput?.focus(),30)}renderPopover(){if(!this.popover)return;let e=this.popover.querySelector(".si-pf-list");if(!e)return;e.empty();let t=this.search.trim().toLowerCase(),i=r=>{if(t&&!(qt[r]??r).toLowerCase().includes(t))return;let o=this.opts.store,a=o.packEnabled(r),l=e.createDiv({cls:"si-pf-row"+(this.opts.getCurrent()===r?" is-current":"")+(a?"":" is-off")}),c=l.createEl("input",{attr:{type:"checkbox"}});c.checked=a,c.addEventListener("change",d=>{d.stopPropagation(),(async()=>(c.checked?await o.enablePack(r):await o.disablePack(r),this.update()))()});let h=l.createSpan({cls:"si-pf-icon"});ze(h,`si-${r}-${Xs[r]??"home"}`),l.createSpan({cls:"si-pf-label",text:qt[r]??r}),l.createSpan({cls:"si-pf-count",text:o.getPackCount(r).toLocaleString()}),l.addEventListener("click",()=>{a||o.enablePack(r),this.opts.onSelect(r),this.close()})},s=()=>{let r=e.createDiv({cls:"si-pf-row"+(this.opts.getCurrent()==="all"?" is-current":"")}),o=r.createSpan({cls:"si-pf-icon"});ze(o,"layers"),r.createSpan({cls:"si-pf-label",text:"All packs"}),r.createSpan({cls:"si-pf-count",text:this.opts.store.totalCount().toLocaleString()}),r.addEventListener("click",()=>{this.opts.onSelect("all"),this.close()})};if(t)for(let r of Rt)i(r);else{s();let r=this.opts.store.userIcons().length;r>0&&(e.createDiv({cls:"si-pf-group-title",text:`My icons (${r})`}),i("user"));for(let o of Zr){let a=e.createDiv({cls:"si-pf-group-title",text:o.title});for(let l of o.packs)i(l)}}e.children.length===0&&e.createDiv({cls:"si-empty",text:"No packs match"})}};var Jl=require("obsidian");var mo=class{constructor(e){this.opts=e;this.root=null;this.btn=null;this.popover=null;this.onDocMouseDown=e=>{this.root&&!this.root.contains(e.target)&&this.close()};this.onKeyDown=e=>{e.key==="Escape"&&this.close()}}mount(e){return this.root=e.createDiv({cls:"si-pack-filter"}),this.btn=this.root.createEl("button",{cls:"si-pack-filter-btn",attr:{type:"button","aria-label":"Browse collections"}}),this.btn.addEventListener("click",t=>{t.stopPropagation(),this.toggle()}),this.updateLabel(),this.root}update(){this.updateLabel(),this.popover&&this.renderPopover()}close(){this.popover?.remove(),this.popover=null,document.removeEventListener("mousedown",this.onDocMouseDown),document.removeEventListener("keydown",this.onKeyDown)}updateLabel(){if(!this.btn)return;this.btn.empty();let e=this.opts.getCurrent(),t=this.btn.createSpan({cls:"si-pack-filter-icon"});e?(ze(t,e.iconIds[0]??"si-lucide-folder"),this.btn.createSpan({text:e.name})):(ze(t,"folder"),this.btn.createSpan({text:"Collections"}));let i=this.btn.createSpan({cls:"si-pack-filter-chev"});(0,Jl.setIcon)(i,"chevron-down")}toggle(){this.popover?this.close():this.open()}open(){if(!this.root||!this.btn)return;this.popover=this.root.createDiv({cls:"si-pack-filter-pop"});let e=this.root.closest(".si-manager");e&&lo(this.popover,this.btn,e);let t=this.popover.createDiv({cls:"si-pf-head"});t.createSpan({cls:"si-pf-title",text:"Collections"});let i=t.createEl("button",{cls:"si-icon-btn",attr:{type:"button"}});(0,Jl.setIcon)(i,"x"),i.addEventListener("click",()=>this.close()),this.popover.createDiv({cls:"si-pf-list"}),this.renderPopover(),document.addEventListener("mousedown",this.onDocMouseDown),document.addEventListener("keydown",this.onKeyDown)}renderPopover(){if(!this.popover)return;let e=this.popover.querySelector(".si-pf-list");if(!e)return;e.empty();let t=this.opts.store,i=this.opts.getCurrent(),s=(l,c,h,d,u)=>{let p=e.createDiv({cls:"si-pf-row"+(d?" is-current":"")}),g=p.createSpan({cls:"si-pf-icon"});ze(g,c),p.createSpan({cls:"si-pf-label",text:l}),h!==null&&p.createSpan({cls:"si-pf-count",text:h}),p.addEventListener("click",u)};s("All icons","layers",null,i===null,()=>{this.opts.onSelect(null),this.close()});let r=t.getSettings().collections;r.length===0&&e.createDiv({cls:"si-empty",text:"No collections yet"});for(let l of r)s(l.name,l.iconIds[0]??"si-lucide-folder",String(l.iconIds.length),i?.id===l.id,()=>{this.opts.onSelect(l),this.close()});let o=e.createDiv({cls:"si-pf-row si-pf-new"}),a=o.createSpan({cls:"si-pf-icon"});ze(a,"plus"),o.createSpan({cls:"si-pf-label",text:"New collection\u2026"}),o.addEventListener("click",()=>{(async()=>{let l=await this.opts.onCreate();l&&(this.opts.onSelect(l),this.close())})()})}};var cn=require("obsidian");var si=class extends cn.Modal{constructor(t,i,s){super(t);this.storeProvider=i;this.opts=s;this.query="";this.showFavoritesOnly=!1;this.selectedIndex=0;this.selectedColor=null;this.pickerLimit=400;this.results=[];this.store=i(),this.packFilter=s.packFilter??"all",this.selectedColor=s.color??null}onOpen(){let{contentEl:t}=this;t.addClass("si-picker si-aurora"),this.applyAurora(),t.createDiv({cls:"si-picker-header"}).createDiv({cls:"si-picker-title",text:this.opts.title??"Pick an icon"});let s=t.createDiv({cls:"si-search-row"}),r=s.createDiv({cls:"si-search"}),o=r.createSpan({cls:"si-search-icon"});ze(o,"search");let a=r.createEl("input",{cls:"si-search-input",attr:{placeholder:"Search icons\u2026 (try \u201Cfolder\u201D, \u201Cstar\u201D, \u201Chome\u201D)",spellcheck:"false"}});s.appendChild(r);let l=t.createDiv({cls:"si-chips si-picker-chips"});new os({store:this.store,getCurrent:()=>this.packFilter,onSelect:M=>{this.packFilter=M,this.pickerLimit=400,this.selectedIndex=0,this.applyAurora(),this.renderGrid()}}).mount(l);let h=l.createEl("button",{cls:"si-chip"+(this.showFavoritesOnly?" is-active":""),attr:{type:"button"}}),d=h.createSpan({cls:"si-chip-icon"});if((0,cn.setIcon)(d,"star"),h.createSpan({text:"Favorites"}),h.addEventListener("click",()=>{this.showFavoritesOnly=!this.showFavoritesOnly,h.toggleClass("is-active",this.showFavoritesOnly),this.selectedIndex=0,this.renderGrid()}),this.opts.allowNone){let M=l.createEl("button",{cls:"si-chip",attr:{type:"button"}});M.createSpan({text:"\u2715 No icon"}),M.addEventListener("click",()=>{this.opts.onPick(null),this.close()})}if(this.opts.allowColor){let A=t.createDiv({cls:"si-picker-color"}).createDiv({cls:"si-picker-color-host"});Fn(A,{value:this.selectedColor,onChange:b=>{this.selectedColor=b,this.updateFooter()}})}this.gridEl=t.createDiv({cls:"si-picker-grid"});let u=t.createDiv({cls:"si-picker-footer"});this.footerIconEl=u.createSpan({cls:"si-footer-icon"}),this.footerNameEl=u.createSpan({cls:"si-footer-name",text:"No selection"});let p=u.createDiv({cls:"si-footer-actions"}),g=p.createEl("button",{cls:"si-btn",attr:{type:"button"}});g.createSpan({text:"Copy name"}),g.addEventListener("click",()=>this.copySelected("name"));let y=p.createEl("button",{cls:"si-btn",attr:{type:"button"}});y.createSpan({text:"Copy SVG"}),y.addEventListener("click",()=>this.copySelected("svg"));let m=p.createEl("button",{cls:"si-btn si-btn-primary",attr:{type:"button"}});m.createSpan({text:"Select"}),m.addEventListener("click",()=>{let M=this.results[this.selectedIndex];M&&this.pick(M)});let f=Pi(()=>{this.selectedIndex=0,this.renderGrid()},120);a.addEventListener("input",()=>{this.query=a.value,this.pickerLimit=400,f()}),a.addEventListener("keydown",M=>this.onKey(M,a)),this.renderGrid(),window.setTimeout(()=>a.focus(),50)}onClose(){this.contentEl.empty()}applyAurora(){let[t,i]=rs(this.packFilter);this.contentEl.style.setProperty("--aurora",t),this.contentEl.style.setProperty("--aurora-2",i)}onKey(t,i){if(t.key==="ArrowDown"||t.key==="ArrowUp"){t.preventDefault();let s=t.key==="ArrowDown"?1:-1;this.selectedIndex=ql(this.selectedIndex+s,0,Math.max(0,this.results.length-1)),this.highlight()}else if(t.key==="ArrowLeft"||t.key==="ArrowRight"){t.preventDefault();let s=t.key==="ArrowRight"?1:-1;this.selectedIndex=ql(this.selectedIndex+s*6,0,Math.max(0,this.results.length-1)),this.highlight()}else if(t.key==="Enter"){t.preventDefault();let s=this.results[this.selectedIndex];s&&this.pick(s)}else t.key==="Escape"&&this.close()}pick(t){this.opts.sound?.pick?.(t),this.store.pushRecent(t.id),this.opts.onPick(t,this.selectedColor),this.close()}copySelected(t){let i=this.results[this.selectedIndex];i&&navigator.clipboard.writeText(t==="name"?i.id:Di(i.svg)).then(()=>{new cn.Notice("Copied "+(t==="name"?i.id:"SVG")+" to clipboard")})}highlight(){this.gridEl.querySelectorAll(".si-tile.is-selected").forEach(s=>s.removeClass("is-selected"));let i=this.gridEl.querySelectorAll(".si-tile")[this.selectedIndex];i?.addClass("is-selected"),i?.scrollIntoView({block:"nearest"}),this.updateFooter()}updateFooter(){let t=this.results[this.selectedIndex];if(!t){this.footerIconEl.empty(),this.footerNameEl.setText("No selection");return}ze(this.footerIconEl,t.id,18),this.footerIconEl.style.color=this.selectedColor??"",this.footerNameEl.setText(`${t.id}  \xB7  ${t.tags.slice(0,4).join(", ")}`)}renderGrid(){this.gridEl.empty();let t=this.showFavoritesOnly?this.store.favoriteIcons():this.store.search(this.query,this.packFilter,5e3),i=t.slice(0,this.pickerLimit),s=[];if(!this.query.trim()&&!this.showFavoritesOnly){let o=this.store.recentIcons().filter(l=>this.packFilter==="all"||l.pack===this.packFilter);o.length&&s.push({title:"Recent",icons:o.slice(0,18)});let a=this.store.favoriteIcons().filter(l=>this.packFilter==="all"||l.pack===this.packFilter);a.length&&s.push({title:"Favorites",icons:a.slice(0,24)}),s.push({title:"All icons",icons:i})}else s.push({title:this.query.trim()?`Results (${t.length})`:"Icons",icons:i});if(this.results=s.flatMap(o=>o.icons),this.results.length===0){let o=this.packFilter;if(o!=="all"&&!this.store.packEnabled(o)){let a=this.gridEl.createDiv({cls:"si-empty"});a.createDiv({cls:"si-empty-text",text:`${qt[o]??o} is not enabled`}),a.createDiv({cls:"si-empty-hint",text:"Enable the pack to pick from it."});let l=a.createEl("button",{cls:"si-btn si-btn-primary",attr:{type:"button"}});l.createSpan({text:"Enable pack"}),l.addEventListener("click",()=>{this.store.enablePack(o).then(()=>this.renderGrid())});return}this.gridEl.appendChild(ii("No icons found","Try a different search or pack."));return}let r=0;for(let o of s){if(o.icons.length===0)continue;let a=this.gridEl.createDiv({cls:"si-section-title",text:o.title}),l=this.gridEl.createDiv({cls:"si-grid"});for(let c of o.icons){let h=r++,d=this.store.isFavorite(c.id),u=co(c,{selected:h===this.selectedIndex,onPick:p=>this.pick(p),onHover:this.opts.sound?.hover,onStar:p=>{this.store.toggleFavorite(p.id)},onContext:(p,g)=>{g.preventDefault(),this.selectedIndex=h,this.highlight(),new cn.Menu().addItem(y=>{y.setTitle(d?"Remove from favorites":"Add to favorites").setIcon("star").onClick(()=>{this.store.toggleFavorite(p.id),this.renderGrid()})}).addItem(y=>{y.setTitle("Copy icon name").onClick(()=>{navigator.clipboard.writeText(p.id)})}).addItem(y=>{y.setTitle("Copy SVG").onClick(()=>{navigator.clipboard.writeText(p.svg)})}).showAtMouseEvent(g)}});h===this.selectedIndex&&u.addClass("is-selected"),l.appendChild(u)}}if(t.length>this.pickerLimit){let o=this.gridEl.createDiv({cls:"si-more-row"});o.createSpan({cls:"si-more-count",text:`Showing ${this.pickerLimit.toLocaleString()} of ${t.length.toLocaleString()}`});let a=o.createEl("button",{cls:"si-btn",attr:{type:"button"}});a.createSpan({text:"Show more"}),a.addEventListener("click",()=>{this.pickerLimit+=500,this.renderGrid()})}this.updateFooter()}};var as="star-icons-manager",go=class extends at.ItemView{constructor(t,i){super(t);this.plugin=i;this.filter={pack:"all",tag:null,query:""};this.selectedCollection=null;this.selectedDataview=null;this.selectedId=null;this.visibleLimit=600;this.filterSignature="";this.renderMainDebounced=Pi(()=>this.renderMain(),120)}getViewType(){return as}getDisplayText(){return"Star Icons"}getIcon(){return Vi()}async onOpen(){this.buildDom(),this.unsub=this.plugin.store.subscribe(()=>this.render()),this.render(),this.resizeObserver=new ResizeObserver(()=>this.handleResize()),this.resizeObserver.observe(this.contentEl),this.handleResize()}async onClose(){this.unsub?.(),this.resizeObserver?.disconnect(),this.contentEl.empty()}handleResize(){let t=this.contentEl.clientWidth;this.contentEl.toggleClass("is-narrow",t>0&&t<720)}closeSideIfNarrow(){this.contentEl.hasClass("is-narrow")&&this.contentEl.removeClass("si-side-open")}selectIcon(t){this.selectedId=t,this.selectedCollection=null,this.selectedDataview=null,this.renderDetail(),this.renderMain()}buildDom(){let t=this.contentEl;t.addClass("si-manager"),t.empty();let i=t.createDiv({cls:"si-manager-header"}),s=i.createDiv({cls:"si-manager-title"}),r=s.createSpan({cls:"si-manager-brand"});ze(r,Vi(),22),s.createSpan({cls:"si-manager-name",text:"Star Icons"}),this.headerTitleEl=s.createSpan({cls:"si-manager-sub"});let o=i.createDiv({cls:"si-search si-manager-search"}),a=o.createSpan({cls:"si-search-icon"});ze(a,"search"),this.searchEl=o.createEl("input",{cls:"si-search-input",attr:{placeholder:"Search icons\u2026",spellcheck:"false"}}),this.searchEl.addEventListener("input",()=>{this.filter.query=this.searchEl.value,this.renderMainDebounced()});let l=i.createDiv({cls:"si-manager-toolbar"});this.packFilterControl=new os({store:this.plugin.store,getCurrent:()=>this.filter.pack,onSelect:m=>{this.filter.pack=m,this.render()}}),this.packFilterControl.mount(l),this.collectionFilterControl=new mo({store:this.plugin.store,getCurrent:()=>this.selectedCollection,onSelect:m=>{this.selectedCollection=m,this.selectedDataview=null,this.selectedId=null,m&&(this.filter={...this.filter,tag:null}),this.closeSideIfNarrow(),this.render()},onCreate:async()=>{let m=await this.promptText("Collection name","My icons");return m?this.plugin.store.createCollection(m):null}}),this.collectionFilterControl.mount(l);let c=l.createDiv({cls:"si-manager-toolbar-right"}),h=c.createEl("button",{cls:"si-btn si-btn-small",attr:{type:"button","aria-label":"Add your own icon"}});(0,at.setIcon)(h,"upload"),h.createSpan({text:"Add icon"}),h.addEventListener("click",m=>{new at.Menu().addItem(f=>f.setTitle("Import SVG file(s)\u2026").setIcon("upload").onClick(()=>this.importSvgFiles())).addItem(f=>f.setTitle("Paste SVG code\u2026").setIcon("clipboard").onClick(()=>{this.pasteSvg()})).showAtMouseEvent(m)});let d=c.createEl("button",{cls:"si-btn si-btn-small",attr:{type:"button","aria-label":"Galaxy View \u2014 browse icons in 3D"}});d.createSpan({text:"\u{1F30C} Galaxy"}),d.addEventListener("click",()=>{this.plugin.openGalaxy()});let u=c.createEl("button",{cls:"si-btn si-btn-small si-side-toggle",attr:{type:"button","aria-label":"Toggle collections panel"}});ze(u,"panel-left"),u.addEventListener("click",()=>{this.contentEl.classList.toggle("si-side-open")});let p=c.createEl("button",{cls:"si-btn si-btn-small"+(this.plugin.settings.soundscapesEnabled?" is-active":""),attr:{type:"button","aria-label":"Toggle icon sounds"}});p.createSpan({text:"\u{1F50A}"}),p.addEventListener("click",()=>{this.plugin.settings.soundscapesEnabled=!this.plugin.settings.soundscapesEnabled,this.plugin.saveSettings(),p.toggleClass("is-active",this.plugin.settings.soundscapesEnabled),this.plugin.soundscape?.playKind("select")}),c.createDiv({cls:"si-manager-density"}).appendChild(Ks([{value:"comfortable",label:"Comfortable"},{value:"compact",label:"Compact"}],this.plugin.settings.iconGridDensity,m=>{this.plugin.settings.iconGridDensity=m,this.plugin.saveSettings(),this.renderMain()}));let y=t.createDiv({cls:"si-manager-body"});this.sideEl=y.createDiv({cls:"si-manager-side"}),this.mainEl=y.createDiv({cls:"si-manager-main si-aurora"}),this.detailEl=y.createDiv({cls:"si-manager-detail"})}render(){this.applyAurora(),this.renderHeader(),this.renderSidebar(),this.renderMain(),this.renderDetail(),this.packFilterControl?.update(),this.collectionFilterControl?.update()}applyAurora(){let[t,i]=rs(this.filter.pack);this.mainEl.style.setProperty("--aurora",t),this.mainEl.style.setProperty("--aurora-2",i)}renderHeader(){let i=this.plugin.store.totalCount();this.headerTitleEl.setText(`${i.toLocaleString()} icons \xB7 ${Rt.length} packs \xB7 on demand`)}renderSidebar(){let t=this.sideEl;t.empty();let i=this.plugin.store,s=t.createDiv({cls:"si-side-section"}),r=s.createDiv({cls:"si-side-head"});r.createSpan({cls:"si-side-title",text:"Collections"});let o=r.createEl("button",{cls:"si-icon-btn",attr:{type:"button","aria-label":"New collection"}});(0,at.setIcon)(o,"plus"),o.addEventListener("click",()=>{(async()=>{let f=await this.promptText("Collection name","My icons");if(!f)return;let M=await i.createCollection(f);this.selectedCollection=M,this.filter={...this.filter,tag:null},this.closeSideIfNarrow(),this.render()})()}),s.appendChild(r);let a=s.createDiv({cls:"si-side-list"});this.plugin.settings.collections.length===0&&a.appendChild(ii("No collections yet","Drag icons here or use +"));for(let f of i.getSettings().collections){let M=a.createDiv({cls:"si-side-item"+(this.selectedCollection?.id===f.id?" is-active":""),attr:{draggable:"false"}}),A=M.createSpan({cls:"si-side-item-icon"});ze(A,f.iconIds[0]??"si-lucide-folder"),M.createSpan({cls:"si-side-item-label",text:f.name}),M.createSpan({cls:"si-side-item-count",text:String(f.iconIds.length)}),M.addEventListener("click",()=>{this.selectedCollection=f,this.selectedId=null,this.closeSideIfNarrow(),this.render()}),M.addEventListener("dragover",b=>{b.preventDefault(),M.addClass("is-drag-target")}),M.addEventListener("dragleave",()=>M.removeClass("is-drag-target")),M.addEventListener("drop",b=>{b.preventDefault(),M.removeClass("is-drag-target");let E=b.dataTransfer?.getData("text/plain");E&&bt(E)&&i.addToCollection(f.id,E)}),M.addEventListener("contextmenu",b=>{b.preventDefault(),new at.Menu().addItem(E=>{E.setTitle("Rename").setIcon("pencil").onClick(async()=>{let S=await this.promptText("Rename collection",f.name);S&&i.renameCollection(f.id,S)})}).addItem(E=>{E.setTitle("Delete").setIcon("trash").onClick(()=>{i.deleteCollection(f.id)})}).showAtMouseEvent(b)})}let l=t.createDiv({cls:"si-side-section"}),c=l.createDiv({cls:"si-side-head"});c.createSpan({cls:"si-side-title",text:"Tags"});let h=c.createEl("button",{cls:"si-icon-btn",attr:{type:"button","aria-label":"Delete all tags"}});(0,at.setIcon)(h,"trash"),h.addEventListener("click",()=>{(async()=>await vi(this.app,{title:"Delete all user tags?",message:"Every custom tag will be removed from all icons.",confirmLabel:"Delete all",danger:!0})&&(this.filter.tag=null,await i.clearAllUserTags()))()});let d=l.createDiv({cls:"si-side-list"}),u=i.allUserTags();u.length===0&&d.appendChild(ii("No user tags","Tag icons from the detail panel"));for(let f of u){let M=d.createDiv({cls:"si-side-item"+(this.filter.tag===f?" is-active":"")}),A=M.createSpan({cls:"si-side-item-icon"});ze(A,"tag"),M.createSpan({cls:"si-side-item-label",text:f}),M.addEventListener("click",()=>{this.filter.tag=this.filter.tag===f?null:f,this.selectedCollection=null,this.selectedDataview=null,this.closeSideIfNarrow(),this.render()}),M.addEventListener("contextmenu",b=>{b.preventDefault(),new at.Menu().addItem(E=>E.setTitle("Filter by this tag").setIcon("tag").onClick(()=>{this.filter.tag=this.filter.tag===f?null:f,this.selectedCollection=null,this.selectedDataview=null,this.render()})).addItem(E=>E.setTitle("Rename tag").setIcon("pencil").onClick(async()=>{let S=await this.promptText("Rename tag",f);S&&S!==f&&await i.renameUserTag(f,S)})).addItem(E=>E.setTitle("Delete tag").setIcon("trash").onClick(async()=>{await vi(this.app,{title:`Delete tag \u201C${f}\u201D?`,message:"It will be removed from every icon that uses it.",confirmLabel:"Delete",danger:!0})&&await i.deleteUserTag(f)})).addSeparator().addItem(E=>E.setTitle("Delete ALL tags").setIcon("trash").onClick(async()=>{await vi(this.app,{title:"Delete all user tags?",message:"Every custom tag will be removed from all icons.",confirmLabel:"Delete all",danger:!0})&&(this.filter.tag=null,await i.clearAllUserTags())})).showAtMouseEvent(b)})}let g=t.createDiv({cls:"si-side-section"}).createEl("details",{cls:"si-side-details"});g.setAttr("open",""),g.createEl("summary",{cls:"si-side-title"}).createSpan({text:`Packs (${Rt.length})`});for(let f of Rt){let M=g.createDiv({cls:"si-side-item si-side-static"}),A=M.createSpan({cls:"si-side-item-icon"});ze(A,`si-${f}-${Xs[f]??"home"}`),M.createSpan({cls:"si-side-item-label",text:`${qt[f]??f} v${this.plugin.store.getPackVersion(f)}`}),M.createSpan({cls:"si-side-item-count",text:String(this.plugin.store.getPackCount(f))})}let m=this.plugin.settings.dataviewCollections;if(m.length>0){let f=t.createDiv({cls:"si-side-section"});f.createDiv({cls:"si-side-head"}).createSpan({cls:"si-side-title",text:"Dataview"});let A=f.createDiv({cls:"si-side-list"});for(let b of m){let E=A.createDiv({cls:"si-side-item"+(this.selectedDataview?.id===b.id?" is-active":"")}),S=E.createSpan({cls:"si-side-item-icon",text:"\u{1F4CA}"});E.createSpan({cls:"si-side-item-label",text:b.name});let C=this.plugin.getDataviewResults()[b.id]?.length??0;E.createSpan({cls:"si-side-item-count",text:String(C)}),E.addEventListener("click",()=>{this.selectedDataview=this.selectedDataview?.id===b.id?null:b,this.selectedCollection=null,this.selectedId=null,this.closeSideIfNarrow(),this.render()})}}}renderMain(){let t=this.mainEl;t.empty();let i=this.plugin.store;if(this.selectedDataview){let a=this.plugin.settings.dataviewCollections.find(l=>l.id===this.selectedDataview?.id);if(a){this.selectedDataview=a,this.renderDataviewDetail(t,a);return}this.selectedDataview=null}if(this.selectedCollection){let a=i.getSettings().collections.find(l=>l.id===this.selectedCollection?.id);if(a){this.renderCollectionDetail(t,a);return}this.selectedCollection=null}let s=this.collectIcons();if(s.length===0){let a=this.filter.pack;if(a!=="all"){if(!i.packEnabled(a)){let l=t.createDiv({cls:"si-empty"});l.createDiv({cls:"si-empty-icon",text:"\u{1F512}"}),l.createDiv({cls:"si-empty-text",text:`${qt[a]??a} is not enabled`}),l.createDiv({cls:"si-empty-hint",text:`${i.getPackCount(a).toLocaleString()} icons are available \u2014 enable the pack to browse them.`});let c=l.createEl("button",{cls:"si-btn si-btn-primary",attr:{type:"button"}});c.createSpan({text:"Enable pack"}),c.addEventListener("click",()=>{i.enablePack(a).then(()=>this.render())}),t.appendChild(l);return}if(!i.isPackLoaded(a)){t.appendChild(ii("Loading icons\u2026",`${qt[a]??a} is loading from disk.`)),i.loadPack(a);return}}t.appendChild(ii("No icons match","Clear the search or switch packs."));return}let r=s.slice(0,this.visibleLimit),o=t.createDiv({cls:"si-grid "+this.plugin.settings.iconGridDensity});for(let a of r)o.appendChild(this.buildTile(a));if(s.length>r.length){let a=t.createDiv({cls:"si-more-row"});a.createSpan({cls:"si-more-count",text:`Showing ${r.length.toLocaleString()} of ${s.length.toLocaleString()} icons`});let l=a.createEl("button",{cls:"si-btn",attr:{type:"button"}});l.createSpan({text:"Show more"}),l.addEventListener("click",()=>{this.visibleLimit+=1e3,this.renderMain()}),t.appendChild(a)}o.addEventListener("dragstart",a=>{let l=a.target instanceof HTMLElement?a.target.closest(".si-tile"):null;l&&(a.dataTransfer?.setData("text/plain",l.getAttribute("data-icon-id")??""),a.dataTransfer&&(a.dataTransfer.effectAllowed="copy"))})}renderCollectionDetail(t,i){let s=this.plugin.store,r=t.createDiv({cls:"si-col-head"}),o=r.createEl("button",{cls:"si-btn si-btn-small",attr:{type:"button"}});o.createSpan({text:"\u2190 All icons"}),o.addEventListener("click",()=>{this.selectedCollection=null,this.render()});let a=r.createDiv({cls:"si-col-title"});a.createSpan({text:i.name}),a.createSpan({cls:"si-col-count",text:`${i.iconIds.length} icons`});let l=r.createEl("button",{cls:"si-btn si-btn-small",attr:{type:"button"}});l.createSpan({text:"+ Add icon"}),l.addEventListener("click",()=>{new si(this.app,()=>s,{title:`Add to \u201C${i.name}\u201D`,onPick:d=>{d&&s.addToCollection(i.id,d.id)}}).open()});let c=r.createEl("button",{cls:"si-btn si-btn-small is-danger",attr:{type:"button"}});(0,at.setIcon)(c,"trash"),c.createSpan({text:"Delete"}),c.addEventListener("click",()=>{(async()=>await vi(this.app,{title:`Delete collection \u201C${i.name}\u201D?`,message:"The collection will be removed. Its icons stay in your library.",confirmLabel:"Delete",danger:!0})&&(this.selectedCollection=null,await s.deleteCollection(i.id)))()}),r.appendChild(l),r.appendChild(c);let h=t.createDiv({cls:"si-col-list"});i.iconIds.length===0&&h.appendChild(ii("Collection is empty","Click \u201C+ Add icon\u201D or drag tiles from the grid onto a collection.")),i.iconIds.forEach((d,u)=>{let p=bt(d),g=h.createDiv({cls:"si-col-item",attr:{draggable:"true","data-index":String(u)}}),y=g.createSpan({cls:"si-drag-handle"});(0,at.setIcon)(y,"grip-vertical");let m=g.createSpan({cls:"si-col-item-icon"});p&&ze(m,p.id);let f=g.createSpan({cls:"si-col-item-name",text:p?p.id:d}),M=g.createEl("button",{cls:"si-icon-btn",attr:{type:"button"}});(0,at.setIcon)(M,"x"),M.addEventListener("click",()=>{s.removeFromCollection(i.id,d)}),h.appendChild(g)}),ho(h,{onReorder:(d,u)=>{s.moveInCollection(i.id,d,u)}})}renderDataviewDetail(t,i){let s=t.createDiv({cls:"si-col-head"}),r=s.createEl("button",{cls:"si-btn si-btn-small",attr:{type:"button"}});r.createSpan({text:"\u2190 All icons"}),r.addEventListener("click",()=>{this.selectedDataview=null,this.render()});let o=s.createDiv({cls:"si-col-title"});o.createSpan({text:i.name});let a=this.plugin.getDataviewResults()[i.id]??[];o.createSpan({cls:"si-col-count",text:`${a.length} icons \xB7 dataview`});let l=s.createEl("button",{cls:"si-btn si-btn-small",attr:{type:"button"}});if(l.createSpan({text:"Refresh"}),l.addEventListener("click",()=>{this.plugin.refreshDataviewNow()}),s.appendChild(l),a.length===0){t.appendChild(ii("This query returned no icons yet","Check the query and the icon property in Settings \u2192 Dataview collections."));return}let c=t.createDiv({cls:"si-grid"});for(let h of a){let d=bt(h);d&&c.appendChild(this.buildTile(d))}}collectIcons(){let t=this.plugin.store,i=t.availableIcons();if(this.filter.pack!=="all"&&(i=i.filter(r=>r.pack===this.filter.pack)),this.filter.tag){let r=this.filter.tag;i=i.filter(o=>t.userTagsFor(o.id).includes(r))}if(this.filter.query.trim()){let r=this.filter.query.trim().toLowerCase();i=i.filter(o=>o.name.includes(r)||o.tags.some(a=>a.includes(r))||o.id.includes(r))}let s=`${this.filter.pack}|${this.filter.tag??""}|${this.filter.query.trim()}|${this.selectedCollection?.id??""}|${this.selectedDataview?.id??""}`;return s!==this.filterSignature&&(this.filterSignature=s,this.visibleLimit=600),i}buildTile(t){let i=this.plugin.store,s=co(t,{selected:this.selectedId===t.id,onPick:r=>{this.plugin.soundscape?.pick(r),this.selectedId=this.selectedId===r.id?null:r.id,this.renderDetail(),this.renderMain()},onHover:r=>this.plugin.soundscape?.hover(r),onStar:r=>{i.toggleFavorite(r.id)},onContext:(r,o)=>{o.preventDefault(),new at.Menu().addItem(a=>{a.setTitle(i.isFavorite(r.id)?"Remove from favorites":"Add to favorites").setIcon("star").onClick(()=>{i.toggleFavorite(r.id)})}).addItem(a=>{a.setTitle("Add to collection\u2026").setIcon("folder-plus").onClick(()=>this.showAddToCollection(r,o))}).addItem(a=>{a.setTitle("Copy icon name").onClick(()=>{navigator.clipboard.writeText(r.id)})}).addItem(a=>{a.setTitle("Copy SVG").onClick(()=>{navigator.clipboard.writeText(Di(r.svg))})}).addItem(a=>{a.setTitle("Insert in note").onClick(()=>this.insertIconAtCursor(r))}).addItem(a=>{r.pack==="user"&&a.setTitle("Delete icon").setIcon("trash").onClick(()=>{this.deleteUserIcon(r)})}).showAtMouseEvent(o)}});return s.setAttribute("draggable","true"),s}showAddToCollection(t,i){let s=this.plugin.store,r=new at.Menu;for(let o of s.getSettings().collections)r.addItem(a=>{a.setTitle(o.iconIds.includes(t.id)?`${o.name} \u2713`:o.name).setIcon(o.iconIds.includes(t.id)?"check":"folder").onClick(()=>{s.addToCollection(o.id,t.id)})});r.addItem(o=>{o.setTitle("\uFF0B New collection\u2026").setIcon("plus").onClick(async()=>{let a=await this.promptText("Collection name","My icons");if(!a)return;let l=await s.createCollection(a);s.addToCollection(l.id,t.id)})}),r.showAtMouseEvent(i)}renderDetail(){let t=this.detailEl;t.empty();let i=this.plugin.store,s=this.selectedId;if(!s){t.addClass("is-empty");let x=t.createDiv({cls:"si-detail-hint"});ze(x,Vi(),40),x.createDiv({cls:"si-detail-hint-text",text:"Select an icon"});return}t.removeClass("is-empty");let r=bt(s);if(!r){this.selectedId=null;return}let o=t.createDiv({cls:"si-detail-head"});o.createSpan({cls:"si-detail-head-title",text:"Icon details"});let a=o.createEl("button",{cls:"si-icon-btn",attr:{type:"button","aria-label":"Close details"}});(0,at.setIcon)(a,"x"),a.addEventListener("click",()=>{this.selectedId=null,this.renderDetail(),this.renderMain()});let l=t.createDiv({cls:"si-detail-preview"});ze(l,r.id,56),t.createDiv({cls:"si-detail-name",text:r.name}),t.createDiv({cls:"si-detail-id"}).setText(r.id);let c=t.createDiv({cls:"si-detail-actions"}),h=c.createEl("button",{cls:"si-btn"+(i.isFavorite(s)?" is-active":""),attr:{type:"button"}});(0,at.setIcon)(h,(i.isFavorite(s),"star")),h.createSpan({text:i.isFavorite(s)?"Favorited":"Favorite"}),h.addEventListener("click",()=>{i.toggleFavorite(s),this.renderDetail(),this.renderMain()});let d=c.createEl("button",{cls:"si-btn si-btn-primary",attr:{type:"button"}});d.createSpan({text:"Apply to active note"}),d.addEventListener("click",()=>{this.plugin.setOverrideForActiveFile(s)});let u=c.createEl("button",{cls:"si-btn",attr:{type:"button"}});(0,at.setIcon)(u,"palette"),u.createSpan({text:"Color\u2026"}),u.addEventListener("click",()=>{this.plugin.pickColorForActiveFile()});let p=c.createEl("button",{cls:"si-btn",attr:{type:"button"}});p.createSpan({text:"\u{1F50A} Play sound"}),p.addEventListener("click",()=>this.plugin.soundscape?.playIcon(r));let g=c.createEl("button",{cls:"si-btn",attr:{type:"button"}});if(g.createSpan({text:"Insert in note"}),g.addEventListener("click",()=>{this.insertIconAtCursor(r)}),r.pack==="user"){let x=c.createEl("button",{cls:"si-btn is-danger",attr:{type:"button"}});(0,at.setIcon)(x,"trash"),x.createSpan({text:"Delete icon"}),x.addEventListener("click",()=>{this.deleteUserIcon(r)})}let y=t.createDiv({cls:"si-detail-copy"}),m=y.createEl("button",{cls:"si-btn si-btn-small",attr:{type:"button"}});m.createSpan({text:"Copy name"}),m.addEventListener("click",()=>{navigator.clipboard.writeText(r.id)});let f=y.createEl("button",{cls:"si-btn si-btn-small",attr:{type:"button"}});f.createSpan({text:"Copy SVG"}),f.addEventListener("click",()=>{navigator.clipboard.writeText(Di(r.svg))});let M=t.createDiv({cls:"si-detail-section"});M.createDiv({cls:"si-detail-section-title",text:"Tags"});let A=M.createDiv({cls:"si-tag-wrap"}),b=r.tags.slice(0,8);for(let x of b)A.createSpan({cls:"si-tag is-pack",text:x});for(let x of i.userTagsFor(s)){let T=A.createSpan({cls:"si-tag"});T.createSpan({text:x});let I=T.createSpan({cls:"si-tag-x"});(0,at.setIcon)(I,"x"),I.addEventListener("click",()=>{i.removeUserTag(s,x)})}let E=M.createEl("input",{cls:"si-text-input",attr:{placeholder:"add tag\u2026",spellcheck:"false"}});E.addEventListener("keydown",x=>{x.key==="Enter"&&E.value.trim()&&(i.addUserTag(s,E.value),E.value="")});let S=t.createDiv({cls:"si-detail-section"});S.createDiv({cls:"si-detail-section-title",text:"Collections"});let C=S.createDiv({cls:"si-detail-cols"});for(let x of i.getSettings().collections){let T=x.iconIds.includes(s),I=C.createEl("button",{cls:"si-btn si-btn-small"+(T?" is-active":""),attr:{type:"button"}});I.createSpan({text:`${T?"\u2713 ":""}${x.name}`}),I.addEventListener("click",()=>{T?i.removeFromCollection(x.id,s):i.addToCollection(x.id,s)})}}async promptText(t,i){return pu(this.app,{title:t,initial:i})}importSvgFiles(){let t=createEl("input",{parent:document.body,attr:{type:"file",accept:".svg,image/svg+xml",multiple:!0}});t.addEventListener("change",()=>{let i=Array.from(t.files??[]);t.remove(),i.length&&(async()=>{let s=await Promise.all(i.map(async o=>({name:o.name.replace(/\.svg$/i,""),svg:await o.text()}))),r=await this.plugin.store.addUserIcons(s);new at.Notice(`Added ${r} icon${r===1?"":"s"} to My Icons`)})()}),t.click()}async pasteSvg(){let t=await mu(this.app,{title:"Paste SVG code",placeholder:"<svg \u2026>\u2026</svg>  (Ctrl/Cmd+Enter to add)",okLabel:"Add icon"});if(!t)return;let i=await this.plugin.store.addUserIcons([{name:"pasted-icon",svg:t}]);new at.Notice(`Added ${i} icon${i===1?"":"s"} to My Icons`)}async insertIconAtCursor(t){let i=this.app.workspace.getActiveViewOfType(at.MarkdownView)??this.lastMarkdownView();if(!i){new at.Notice("Open a note first.");return}let s=await po(this.app,{title:`Insert \u201C${t.name}\u201D`});s&&i.editor.replaceSelection(Di(t.svg,s))}lastMarkdownView(){let t=this.app.workspace.getLeavesOfType("markdown");if(!t.length)return null;let i=this.app.workspace.getLastOpenFiles();for(let s of i){let r=t.find(o=>o.view.file?.path===s);if(r)return r.view}return t[t.length-1].view}async deleteUserIcon(t){await vi(this.app,{title:`Delete \u201C${t.name}\u201D?`,message:"This removes your custom icon. This cannot be undone.",confirmLabel:"Delete",danger:!0})&&(await this.plugin.store.removeUserIcon(t.id),this.selectedId===t.id&&(this.selectedId=null))}};var Qn=require("obsidian");var wn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},En={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zu=0,Nc=1,Ju=2;var Dr=1,Qu=2,Fs=3,Zi=0,Kt=1,Oi=2,fi=0,Wn=1,ki=2,Uc=3,Fc=4,ed=5;var gn=100,td=101,id=102,nd=103,sd=104,rd=200,od=201,ad=202,ld=203,Xo=204,qo=205,cd=206,hd=207,ud=208,dd=209,fd=210,pd=211,md=212,gd=213,vd=214,Yo=0,jo=1,$o=2,Xn=3,Ko=4,Zo=5,Jo=6,Qo=7,Oc=0,xd=1,_d=2,wi=0,kc=1,Bc=2,zc=3,Vc=4,Hc=5,Gc=6,Wc=7;var Xc=300,Tn=301,$n=302,Ia=303,Ra=304,Lr=306,ea=1e3,Ni=1001,ta=1002,Lt=1003,yd=1004;var Nr=1005;var Ot=1006,Pa=1007;var An=1008;var Jt=1009,qc=1010,Yc=1011,Os=1012,Da=1013,Ei=1014,Ti=1015,Wt=1016,La=1017,Na=1018,ks=1020,jc=35902,$c=35899,Kc=1021,Zc=1022,pi=1023,Ui=1026,Cn=1027,Jc=1028,Ua=1029,In=1030,Fa=1031;var Oa=1033,Ur=33776,Fr=33777,Or=33778,kr=33779,ka=35840,Ba=35841,za=35842,Va=35843,Ha=36196,Ga=37492,Wa=37496,Xa=37488,qa=37489,Br=37490,Ya=37491,ja=37808,$a=37809,Ka=37810,Za=37811,Ja=37812,Qa=37813,el=37814,tl=37815,il=37816,nl=37817,sl=37818,rl=37819,ol=37820,al=37821,ll=36492,cl=36494,hl=36495,ul=36283,dl=36284,zr=36285,fl=36286;var lr=2300,ia=2301,Wo=2302,Mc=2303,wc=2400,Ec=2401,Tc=2402;var bd=3200;var Qc=0,Sd=1,nn="",Ut="srgb",cr="srgb-linear",hr="linear",Ye="srgb";var Hn=7680;var Ac=519,Md=512,wd=513,Ed=514,pl=515,Td=516,Ad=517,ml=518,Cd=519,na=35044;var eh="300 es",Si=2e3,Es=2001;function Zf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Jf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ur(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Id(){let n=ur("canvas");return n.style.display="block",n}var yu={},Ts=null;function dr(...n){let e="THREE."+n.shift();Ts?Ts("log",e,...n):console.log(e,...n)}function Rd(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Te(...n){n=Rd(n);let e="THREE."+n.shift();if(Ts)Ts("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ce(...n){n=Rd(n);let e="THREE."+n.shift();if(Ts)Ts("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Gn(...n){let e=n.join(" ");e in yu||(yu[e]=!0,Te(...n))}function Pd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Dd={[Yo]:jo,[$o]:Jo,[Ko]:Qo,[Xn]:Zo,[jo]:Yo,[Jo]:$o,[Qo]:Ko,[Zo]:Xn},Mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bu=1234567,or=Math.PI/180,As=180/Math.PI;function $i(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function ke(n,e,t){return Math.max(e,Math.min(t,n))}function th(n,e){return(n%e+e)%e}function Qf(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function ep(n,e,t){return n!==e?(t-n)/(e-n):0}function ar(n,e,t){return(1-t)*n+t*e}function tp(n,e,t,i){return ar(n,e,1-Math.exp(-t*i))}function ip(n,e=1){return e-Math.abs(th(n,e*2)-e)}function np(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function sp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function rp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function op(n,e){return n+Math.random()*(e-n)}function ap(n){return n*(.5-Math.random())}function lp(n){n!==void 0&&(bu=n);let e=bu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cp(n){return n*or}function hp(n){return n*As}function up(n){return(n&n-1)===0&&n!==0}function dp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function fp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function pp(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),u=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*d,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*h,a*c);break;default:Te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $e(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ih={DEG2RAD:or,RAD2DEG:As,generateUUID:$i,clamp:ke,euclideanModulo:th,mapLinear:Qf,inverseLerp:ep,lerp:ar,damp:tp,pingpong:ip,smoothstep:np,smootherstep:sp,randInt:rp,randFloat:op,randFloatSpread:ap,seededRandom:lp,degToRad:cp,radToDeg:hp,isPowerOfTwo:up,ceilPowerOfTwo:dp,floorPowerOfTwo:fp,setQuaternionFromProperEuler:pp,normalize:$e,denormalize:bi},ah=class ah{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ah.prototype.isVector2=!0;var me=ah,ai=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],p=r[o+1],g=r[o+2],y=r[o+3];if(d!==y||l!==u||c!==p||h!==g){let m=l*u+c*p+h*g+d*y;m<0&&(u=-u,p=-p,g=-g,y=-y,m=-m);let f=1-a;if(m<.9995){let M=Math.acos(m),A=Math.sin(M);f=Math.sin(f*M)/A,a=Math.sin(a*M)/A,l=l*f+u*a,c=c*f+p*a,h=h*f+g*a,d=d*f+y*a}else{l=l*f+u*a,c=c*f+p*a,h=h*f+g*a,d=d*f+y*a;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-a*p,e[t+2]=c*g+h*p+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},lh=class lh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Su.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Su.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ql.copy(this).projectOnVector(e),this.sub(Ql)}reflect(e){return this.sub(Ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lh.prototype.isVector3=!0;var D=lh,Ql=new D,Su=new ai,ch=class ch{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],y=s[0],m=s[3],f=s[6],M=s[1],A=s[4],b=s[7],E=s[2],S=s[5],C=s[8];return r[0]=o*y+a*M+l*E,r[3]=o*m+a*A+l*S,r[6]=o*f+a*b+l*C,r[1]=c*y+h*M+d*E,r[4]=c*m+h*A+d*S,r[7]=c*f+h*b+d*C,r[2]=u*y+p*M+g*E,r[5]=u*m+p*A+g*S,r[8]=u*f+p*b+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,g=t*d+i*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(s*c-h*i)*y,e[2]=(a*i-s*o)*y,e[3]=u*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Gn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ec.makeScale(e,t)),this}rotate(e){return Gn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ec.makeRotation(-e)),this}translate(e,t){return Gn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ch.prototype.isMatrix3=!0;var De=ch,ec=new De,Mu=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wu=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mp(){let n={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ye&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ye&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===nn?hr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Gn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Gn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[cr]:{primaries:e,whitePoint:i,transfer:hr,toXYZ:Mu,fromXYZ:wu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:i,transfer:Ye,toXYZ:Mu,fromXYZ:wu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),n}var Ve=mp();function Ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ls,sa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ls===void 0&&(ls=ur("canvas")),ls.width=e.width,ls.height=e.height;let s=ls.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ls}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ur("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ki(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ki(t[i]/255)*255):t[i]=Ki(t[i]);return{data:t,width:e.width,height:e.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gp=0,Cs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=$i(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(tc(s[o].image)):r.push(tc(s[o]))}else r=tc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function tc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}var vp=0,ic=new D,$t=class n extends Mi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ni,s=Ni,r=Ot,o=An,a=pi,l=Jt,c=n.DEFAULT_ANISOTROPY,h=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=$i(),this.name="",this.source=new Cs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ic).x}get height(){return this.source.getSize(ic).y}get depth(){return this.source.getSize(ic).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Te(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Te(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ea:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ea:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Xc;$t.DEFAULT_ANISOTROPY=1;var hh=class hh{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,b=(p+1)/2,E=(f+1)/2,S=(h+u)/4,C=(d+y)/4,x=(g+m)/4;return A>b&&A>E?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=S/i,r=C/i):b>E?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=S/s,r=x/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=C/r,s=x/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-y)/M,this.z=(u-h)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hh.prototype.isVector4=!0;var ct=hh,ra=class extends Mi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new $t(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Cs(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Et=class extends ra{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},fr=class extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var oa=class extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ca=class Ca{constructor(e,t,i,s,r,o,a,l,c,h,d,u,p,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,u,p,g,y,m)}set(e,t,i,s,r,o,a,l,c,h,d,u,p,g,y,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ca().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/cs.setFromMatrixColumn(e,0).length(),r=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,p=o*d,g=a*h,y=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-y*c,t[9]=-a*l,t[2]=y-u*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,g=c*h,y=c*d;t[0]=u+y*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=y+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,g=c*h,y=c*d;t[0]=u-y*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=y-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,p=o*d,g=a*h,y=a*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+y,t[1]=l*d,t[5]=y*c+u,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=y-u*d,t[8]=g*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-y*d}else if(e.order==="XZY"){let u=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+y,t[5]=o*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xp,e,_p)}lookAt(e,t,i){let s=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),hn.crossVectors(i,ri),hn.lengthSq()===0&&(Math.abs(i.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),hn.crossVectors(i,ri)),hn.normalize(),vo.crossVectors(ri,hn),s[0]=hn.x,s[4]=vo.x,s[8]=ri.x,s[1]=hn.y,s[5]=vo.y,s[9]=ri.y,s[2]=hn.z,s[6]=vo.z,s[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],y=i[6],m=i[10],f=i[14],M=i[3],A=i[7],b=i[11],E=i[15],S=s[0],C=s[4],x=s[8],T=s[12],I=s[1],R=s[5],F=s[9],W=s[13],$=s[2],B=s[6],q=s[10],H=s[14],Z=s[3],Q=s[7],he=s[11],pe=s[15];return r[0]=o*S+a*I+l*$+c*Z,r[4]=o*C+a*R+l*B+c*Q,r[8]=o*x+a*F+l*q+c*he,r[12]=o*T+a*W+l*H+c*pe,r[1]=h*S+d*I+u*$+p*Z,r[5]=h*C+d*R+u*B+p*Q,r[9]=h*x+d*F+u*q+p*he,r[13]=h*T+d*W+u*H+p*pe,r[2]=g*S+y*I+m*$+f*Z,r[6]=g*C+y*R+m*B+f*Q,r[10]=g*x+y*F+m*q+f*he,r[14]=g*T+y*W+m*H+f*pe,r[3]=M*S+A*I+b*$+E*Z,r[7]=M*C+A*R+b*B+E*Q,r[11]=M*x+A*F+b*q+E*he,r[15]=M*T+A*W+b*H+E*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],y=e[7],m=e[11],f=e[15],M=l*p-c*u,A=a*p-c*d,b=a*u-l*d,E=o*p-c*h,S=o*u-l*h,C=o*d-a*h;return t*(y*M-m*A+f*b)-i*(g*M-m*E+f*S)+s*(g*A-y*E+f*C)-r*(g*b-y*S+m*C)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],y=e[13],m=e[14],f=e[15],M=t*a-i*o,A=t*l-s*o,b=t*c-r*o,E=i*l-s*a,S=i*c-r*a,C=s*c-r*l,x=h*y-d*g,T=h*m-u*g,I=h*f-p*g,R=d*m-u*y,F=d*f-p*y,W=u*f-p*m,$=M*W-A*F+b*R+E*I-S*T+C*x;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/$;return e[0]=(a*W-l*F+c*R)*B,e[1]=(s*F-i*W-r*R)*B,e[2]=(y*C-m*S+f*E)*B,e[3]=(u*S-d*C-p*E)*B,e[4]=(l*I-o*W-c*T)*B,e[5]=(t*W-s*I+r*T)*B,e[6]=(m*b-g*C-f*A)*B,e[7]=(h*C-u*b+p*A)*B,e[8]=(o*F-a*I+c*x)*B,e[9]=(i*I-t*F-r*x)*B,e[10]=(g*S-y*b+f*M)*B,e[11]=(d*b-h*S-p*M)*B,e[12]=(a*T-o*R-l*x)*B,e[13]=(t*R-i*T+s*x)*B,e[14]=(y*A-g*E-m*M)*B,e[15]=(h*E-d*A+u*M)*B,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,g=r*d,y=o*h,m=o*d,f=a*d,M=l*c,A=l*h,b=l*d,E=i.x,S=i.y,C=i.z;return s[0]=(1-(y+f))*E,s[1]=(p+b)*E,s[2]=(g-A)*E,s[3]=0,s[4]=(p-b)*S,s[5]=(1-(u+f))*S,s[6]=(m+M)*S,s[7]=0,s[8]=(g+A)*C,s[9]=(m-M)*C,s[10]=(1-(u+y))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=cs.set(s[0],s[1],s[2]).length(),a=cs.set(s[4],s[5],s[6]).length(),l=cs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),xi.copy(this);let c=1/o,h=1/a,d=1/l;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=h,xi.elements[5]*=h,xi.elements[6]*=h,xi.elements[8]*=d,xi.elements[9]*=d,xi.elements[10]*=d,t.setFromRotationMatrix(xi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Si,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),p=(i+s)/(i-s),g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===Si)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Es)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Si,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),p=-(i+s)/(i-s),g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===Si)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===Es)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ca.prototype.isMatrix4=!0;var it=Ca,cs=new D,xi=new it,xp=new D(0,0,0),_p=new D(1,1,1),hn=new D,vo=new D,ri=new D,Eu=new it,Tu=new ai,vn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tu.setFromEuler(this),this.setFromQuaternion(Tu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var Is=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},yp=0,Au=new D,hs=new ai,Hi=new it,xo=new D,Js=new D,bp=new D,Sp=new ai,Cu=new D(1,0,0),Iu=new D(0,1,0),Ru=new D(0,0,1),Pu={type:"added"},Mp={type:"removed"},us={type:"childadded",child:null},nc={type:"childremoved",child:null},Ht=class n extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new vn,i=new ai,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new De}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(Cu,e)}rotateY(e){return this.rotateOnAxis(Iu,e)}rotateZ(e){return this.rotateOnAxis(Ru,e)}translateOnAxis(e,t){return Au.copy(e).applyQuaternion(this.quaternion),this.position.add(Au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cu,e)}translateY(e){return this.translateOnAxis(Iu,e)}translateZ(e){return this.translateOnAxis(Ru,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xo.copy(e):xo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Js,xo,this.up):Hi.lookAt(xo,Js,this.up),this.quaternion.setFromRotationMatrix(Hi),s&&(Hi.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(Hi),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ce("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pu),us.child=e,this.dispatchEvent(us),us.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mp),nc.child=e,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pu),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,bp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,Sp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ht.DEFAULT_UP=new D(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ji=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},wp={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ji;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},_o={h:0,s:0,l:0};function sc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ae=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ve.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ve.workingColorSpace){if(e=th(e,1),t=ke(t,0,1),i=ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=sc(o,r,e+1/3),this.g=sc(o,r,e),this.b=sc(o,r,e-1/3)}return Ve.colorSpaceToWorking(this,s),this}setStyle(e,t=Ut){function i(r){r!==void 0&&parseFloat(r)<1&&Te("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Te("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Te("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let i=Ld[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Te("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return Ve.workingToColorSpace(Vt.copy(this),e),Math.round(ke(Vt.r*255,0,255))*65536+Math.round(ke(Vt.g*255,0,255))*256+Math.round(ke(Vt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.workingToColorSpace(Vt.copy(this),t);let i=Vt.r,s=Vt.g,r=Vt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ve.workingColorSpace){return Ve.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Ut){Ve.workingToColorSpace(Vt.copy(this),e);let t=Vt.r,i=Vt.g,s=Vt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(un),this.setHSL(un.h+e,un.s+t,un.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(un),e.getHSL(_o);let i=ar(un.h,_o.h,t),s=ar(un.s,_o.s,t),r=ar(un.l,_o.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new Ae;Ae.NAMES=Ld;var pr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ae(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},mr=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},_i=new D,Gi=new D,rc=new D,Wi=new D,ds=new D,fs=new D,Du=new D,oc=new D,ac=new D,lc=new D,cc=new ct,hc=new ct,uc=new ct,Yi=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),_i.subVectors(e,t),s.cross(_i);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){_i.subVectors(s,t),Gi.subVectors(i,t),rc.subVectors(e,t);let o=_i.dot(_i),a=_i.dot(Gi),l=_i.dot(rc),c=Gi.dot(Gi),h=Gi.dot(rc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wi.x),l.addScaledVector(o,Wi.y),l.addScaledVector(a,Wi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return cc.setScalar(0),hc.setScalar(0),uc.setScalar(0),cc.fromBufferAttribute(e,t),hc.fromBufferAttribute(e,i),uc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(cc,r.x),o.addScaledVector(hc,r.y),o.addScaledVector(uc,r.z),o}static isFrontFacing(e,t,i,s){return _i.subVectors(i,t),Gi.subVectors(e,t),_i.cross(Gi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),_i.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;ds.subVectors(s,i),fs.subVectors(r,i),oc.subVectors(e,i);let l=ds.dot(oc),c=fs.dot(oc);if(l<=0&&c<=0)return t.copy(i);ac.subVectors(e,s);let h=ds.dot(ac),d=fs.dot(ac);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ds,o);lc.subVectors(e,r);let p=ds.dot(lc),g=fs.dot(lc);if(g>=0&&p<=g)return t.copy(r);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(fs,a);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Du.subVectors(r,s),a=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(Du,a);let f=1/(m+y+u);return o=y*f,a=u*f,t.copy(i).addScaledVector(ds,o).addScaledVector(fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yi):yi.fromBufferAttribute(r,o),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yo.copy(i.boundingBox)),yo.applyMatrix4(e.matrixWorld),this.union(yo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),bo.subVectors(this.max,Qs),ps.subVectors(e.a,Qs),ms.subVectors(e.b,Qs),gs.subVectors(e.c,Qs),dn.subVectors(ms,ps),fn.subVectors(gs,ms),kn.subVectors(ps,gs);let t=[0,-dn.z,dn.y,0,-fn.z,fn.y,0,-kn.z,kn.y,dn.z,0,-dn.x,fn.z,0,-fn.x,kn.z,0,-kn.x,-dn.y,dn.x,0,-fn.y,fn.x,0,-kn.y,kn.x,0];return!dc(t,ps,ms,gs,bo)||(t=[1,0,0,0,1,0,0,0,1],!dc(t,ps,ms,gs,bo))?!1:(So.crossVectors(dn,fn),t=[So.x,So.y,So.z],dc(t,ps,ms,gs,bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xi=[new D,new D,new D,new D,new D,new D,new D,new D],yi=new D,yo=new xn,ps=new D,ms=new D,gs=new D,dn=new D,fn=new D,kn=new D,Qs=new D,bo=new D,So=new D,Bn=new D;function dc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Bn.fromArray(n,r);let a=s.x*Math.abs(Bn.x)+s.y*Math.abs(Bn.y)+s.z*Math.abs(Bn.z),l=e.dot(Bn),c=t.dot(Bn),h=i.dot(Bn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var St=new D,Mo=new me,Ep=0,Dt=class extends Mi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ep++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=na,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Mo.fromBufferAttribute(this,t),Mo.applyMatrix3(e),this.setXY(t,Mo.x,Mo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=bi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$e(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),s=$e(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==na&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var gr=class extends Dt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var vr=class extends Dt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var pt=class extends Dt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Tp=new xn,er=new D,fc=new D,_n=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Tp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;er.subVectors(e,this.center);let t=er.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(er,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(er.copy(e.center).add(fc)),this.expandByPoint(er.copy(e.center).sub(fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ap=0,ui=new it,pc=new Ht,vs=new D,oi=new xn,tr=new xn,Pt=new D,Mt=class n extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zf(e)?vr:gr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new De().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,i){return ui.makeTranslation(e,t,i),this.applyMatrix4(ui),this}scale(e,t,i){return ui.makeScale(e,t,i),this.applyMatrix4(ui),this}lookAt(e){return pc.lookAt(e),pc.updateMatrix(),this.applyMatrix4(pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];oi.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];tr.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(oi.min,tr.min),oi.expandByPoint(Pt),Pt.addVectors(oi.max,tr.max),oi.expandByPoint(Pt)):(oi.expandByPoint(tr.min),oi.expandByPoint(tr.max))}oi.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pt.fromBufferAttribute(a,c),l&&(vs.fromBufferAttribute(e,c),Pt.add(vs)),s=Math.max(s,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Dt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new D,l[x]=new D;let c=new D,h=new D,d=new D,u=new me,p=new me,g=new me,y=new D,m=new D;function f(x,T,I){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,I),u.fromBufferAttribute(r,x),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,I),h.sub(c),d.sub(c),p.sub(u),g.sub(u);let R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),a[x].add(y),a[T].add(y),a[I].add(y),l[x].add(m),l[T].add(m),l[I].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,T=M.length;x<T;++x){let I=M[x],R=I.start,F=I.count;for(let W=R,$=R+F;W<$;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let A=new D,b=new D,E=new D,S=new D;function C(x){E.fromBufferAttribute(s,x),S.copy(E);let T=a[x];A.copy(T),A.sub(E.multiplyScalar(E.dot(T))).normalize(),b.crossVectors(S,T);let R=b.dot(l[x])<0?-1:1;o.setXYZW(x,A.x,A.y,A.z,R)}for(let x=0,T=M.length;x<T;++x){let I=M[x],R=I.start,F=I.count;for(let W=R,$=R+F;W<$;W+=3)C(e.getX(W+0)),C(e.getX(W+1)),C(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let u=0,p=e.count;u<p;u+=3){let g=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new Dt(u,h,d)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=e(u,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},aa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=na,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},jt=new D,xr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=bi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$e(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),s=$e(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){dr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){dr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Cp=0,Fi=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=Wn,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xo,this.blendDst=qo,this.blendEquation=gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Xn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hn,this.stencilZFail=Hn,this.stencilZPass=Hn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Te(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Te(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wn&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xo&&(i.blendSrc=this.blendSrc),this.blendDst!==qo&&(i.blendDst=this.blendDst),this.blendEquation!==gn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ac&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ae().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new me().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new me().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ji=class extends Fi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xs,ir=new D,_s=new D,ys=new D,bs=new me,nr=new me,Nd=new it,wo=new D,sr=new D,Eo=new D,Lu=new me,mc=new me,Nu=new me,yn=class extends Ht{constructor(e=new Ji){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new Mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new aa(t,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new xr(i,3,0,!1)),xs.setAttribute("uv",new xr(i,2,3,!1))}this.geometry=xs,this.material=e,this.center=new me(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ce('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),Nd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-ys.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;To(wo.set(-.5,-.5,0),ys,o,_s,s,r),To(sr.set(.5,-.5,0),ys,o,_s,s,r),To(Eo.set(.5,.5,0),ys,o,_s,s,r),Lu.set(0,0),mc.set(1,0),Nu.set(1,1);let a=e.ray.intersectTriangle(wo,sr,Eo,!1,ir);if(a===null&&(To(sr.set(-.5,.5,0),ys,o,_s,s,r),mc.set(0,1),a=e.ray.intersectTriangle(wo,Eo,sr,!1,ir),a===null))return;let l=e.ray.origin.distanceTo(ir);l<e.near||l>e.far||t.push({distance:l,point:ir.clone(),uv:Yi.getInterpolation(ir,wo,sr,Eo,Lu,mc,Nu,new me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function To(n,e,t,i,s,r){bs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(nr.x=r*bs.x-s*bs.y,nr.y=s*bs.x+r*bs.y):nr.copy(bs),n.copy(e),n.x+=nr.x,n.y+=nr.y,n.applyMatrix4(Nd)}var qi=new D,gc=new D,Ao=new D,pn=new D,vc=new D,Co=new D,xc=new D,Qi=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){gc.copy(e).add(t).multiplyScalar(.5),Ao.copy(t).sub(e).normalize(),pn.copy(this.origin).sub(gc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ao),a=pn.dot(this.direction),l=-pn.dot(Ao),c=pn.lengthSq(),h=Math.abs(1-o*o),d,u,p,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(gc).addScaledVector(Ao,u),p}intersectSphere(e,t){qi.subVectors(e.center,this.origin);let i=qi.dot(this.direction),s=qi.dot(qi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,i,s,r){vc.subVectors(t,e),Co.subVectors(i,e),xc.crossVectors(vc,Co);let o=this.direction.dot(xc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pn.subVectors(this.origin,e);let l=a*this.direction.dot(Co.crossVectors(pn,Co));if(l<0)return null;let c=a*this.direction.dot(vc.cross(pn));if(c<0||l+c>o)return null;let h=-a*pn.dot(xc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},en=class extends Fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Uu=new it,zn=new Qi,Io=new _n,Fu=new D,Ro=new D,Po=new D,Do=new D,_c=new D,Lo=new D,Ou=new D,No=new D,Gt=class extends Ht{constructor(e=new Mt,t=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(_c.fromBufferAttribute(d,e),o?Lo.addScaledVector(_c,h):Lo.addScaledVector(_c.sub(t),h))}t.add(Lo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(r),zn.copy(e.ray).recast(e.near),!(Io.containsPoint(zn.origin)===!1&&(zn.intersectSphere(Io,Fu)===null||zn.origin.distanceToSquared(Fu)>(e.far-e.near)**2))&&(Uu.copy(r).invert(),zn.copy(e.ray).applyMatrix4(Uu),!(i.boundingBox!==null&&zn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=M,E=A;b<E;b+=3){let S=a.getX(b),C=a.getX(b+1),x=a.getX(b+2);s=Uo(this,f,e,i,c,h,d,S,C,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let M=a.getX(m),A=a.getX(m+1),b=a.getX(m+2);s=Uo(this,o,e,i,c,h,d,M,A,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=M,E=A;b<E;b+=3){let S=b,C=b+1,x=b+2;s=Uo(this,f,e,i,c,h,d,S,C,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let M=m,A=m+1,b=m+2;s=Uo(this,o,e,i,c,h,d,M,A,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Ip(n,e,t,i,s,r,o,a){let l;if(e.side===Kt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Zi,a),l===null)return null;No.copy(a),No.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(No);return c<t.near||c>t.far?null:{distance:c,point:No.clone(),object:n}}function Uo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ro),n.getVertexPosition(l,Po),n.getVertexPosition(c,Do);let h=Ip(n,e,t,i,Ro,Po,Do,Ou);if(h){let d=new D;Yi.getBarycoord(Ou,Ro,Po,Do,d),s&&(h.uv=Yi.getInterpolatedAttribute(s,a,l,c,d,new me)),r&&(h.uv1=Yi.getInterpolatedAttribute(r,a,l,c,d,new me)),o&&(h.normal=Yi.getInterpolatedAttribute(o,a,l,c,d,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new D,materialIndex:0};Yi.getNormal(Ro,Po,Do,u.normal),h.face=u,h.barycoord=d}return h}var la=class extends $t{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Lt,h=Lt,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yc=new D,Rp=new D,Pp=new De,di=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=yc.subVectors(i,t).cross(Rp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(yc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Pp.getNormalMatrix(e),s=this.coplanarPoint(yc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vn=new _n,Dp=new me(.5,.5),Fo=new D,Ps=class{constructor(e=new di,t=new di,i=new di,s=new di,r=new di,o=new di){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Si,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],p=r[7],g=r[8],y=r[9],m=r[10],f=r[11],M=r[12],A=r[13],b=r[14],E=r[15];if(s[0].setComponents(c-o,p-h,f-g,E-M).normalize(),s[1].setComponents(c+o,p+h,f+g,E+M).normalize(),s[2].setComponents(c+a,p+d,f+y,E+A).normalize(),s[3].setComponents(c-a,p-d,f-y,E-A).normalize(),i)s[4].setComponents(l,u,m,b).normalize(),s[5].setComponents(c-l,p-u,f-m,E-b).normalize();else if(s[4].setComponents(c-l,p-u,f-m,E-b).normalize(),t===Si)s[5].setComponents(c+l,p+u,f+m,E+b).normalize();else if(t===Es)s[5].setComponents(l,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(e){Vn.center.set(0,0,0);let t=Dp.distanceTo(e.center);return Vn.radius=.7071067811865476+t,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Fo.x=s.normal.x>0?e.max.x:e.min.x,Fo.y=s.normal.y>0?e.max.y:e.min.y,Fo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ds=class extends Fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ca=new D,ha=new D,ku=new it,rr=new Qi,Oo=new _n,bc=new D,Bu=new D,ua=class extends Ht{constructor(e=new Mt,t=new Ds){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ca.fromBufferAttribute(t,s-1),ha.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ca.distanceTo(ha);e.setAttribute("lineDistance",new pt(i,1))}else Te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(s),Oo.radius+=r,e.ray.intersectsSphere(Oo)===!1)return;ku.copy(s).invert(),rr.copy(e.ray).applyMatrix4(ku);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=c){let f=h.getX(y),M=h.getX(y+1),A=ko(this,e,rr,l,f,M,y);A&&t.push(A)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(p),f=ko(this,e,rr,l,y,m,g-1);f&&t.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=c){let f=ko(this,e,rr,l,y,y+1,y);f&&t.push(f)}if(this.isLineLoop){let y=ko(this,e,rr,l,g-1,p,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ko(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(ca.fromBufferAttribute(a,s),ha.fromBufferAttribute(a,r),t.distanceSqToSegment(ca,ha,bc,Bu)>i)return;bc.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(bc);if(!(c<e.near||c>e.far))return{distance:c,point:Bu.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var zu=new D,Vu=new D,_r=class extends ua{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)zu.fromBufferAttribute(t,s),Vu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+zu.distanceTo(Vu);e.setAttribute("lineDistance",new pt(i,1))}else Te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var qn=class extends Fi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hu=new it,Cc=new Qi,Bo=new _n,zo=new D,Ls=class extends Ht{constructor(e=new Mt,t=new qn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=r,e.ray.intersectsSphere(Bo)===!1)return;Hu.copy(s).invert(),Cc.copy(e.ray).applyMatrix4(Hu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,y=p;g<y;g++){let m=c.getX(g);zo.fromBufferAttribute(d,m),Gu(zo,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=u,y=p;g<y;g++)zo.fromBufferAttribute(d,g),Gu(zo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Gu(n,e,t,i,s,r,o){let a=Cc.distanceSqToPoint(n);if(a<t){let l=new D;Cc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var yr=class extends $t{constructor(e=[],t=Tn,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yn=class extends $t{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var tn=class extends $t{constructor(e,t,i=Ei,s,r,o,a=Lt,l=Lt,c,h=Ui,d=1){if(h!==Ui&&h!==Cn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},da=class extends tn{constructor(e,t=Ei,i=Tn,s,r,o=Lt,a=Lt,l,c=Ui){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},br=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ns=class n extends Mt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(d,2));function g(y,m,f,M,A,b,E,S,C,x,T){let I=b/C,R=E/x,F=b/2,W=E/2,$=S/2,B=C+1,q=x+1,H=0,Z=0,Q=new D;for(let he=0;he<q;he++){let pe=he*R-W;for(let xe=0;xe<B;xe++){let We=xe*I-F;Q[y]=We*M,Q[m]=pe*A,Q[f]=$,c.push(Q.x,Q.y,Q.z),Q[y]=0,Q[m]=0,Q[f]=S>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(xe/C),d.push(1-he/x),H+=1}}for(let he=0;he<x;he++)for(let pe=0;pe<C;pe++){let xe=u+pe+B*he,We=u+pe+B*(he+1),ht=u+(pe+1)+B*(he+1),Xe=u+(pe+1)+B*he;l.push(xe,We,Xe),l.push(We,ht,Xe),Z+=6}a.addGroup(p,Z,T),p+=Z,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Sr=class n extends Mt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,p=[],g=[],y=[],m=[];for(let f=0;f<h;f++){let M=f*u-o;for(let A=0;A<c;A++){let b=A*d-r;g.push(b,-M,0),y.push(0,0,1),m.push(A/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){let A=M+c*f,b=M+c*(f+1),E=M+1+c*(f+1),S=M+1+c*f;p.push(A,b,S),p.push(b,E,S)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(y,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Mr=class n extends Mt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new D,u=new D,p=[],g=[],y=[],m=[];for(let f=0;f<=i;f++){let M=[],A=f/i,b=o+A*a,E=e*Math.cos(b),S=Math.sqrt(e*e-E*E),C=0;f===0&&o===0?C=.5/t:f===i&&l===Math.PI&&(C=-.5/t);for(let x=0;x<=t;x++){let T=x/t,I=s+T*r;d.x=-S*Math.cos(I),d.y=E,d.z=S*Math.sin(I),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(T+C,1-A),M.push(c++)}h.push(M)}for(let f=0;f<i;f++)for(let M=0;M<t;M++){let A=h[f][M+1],b=h[f][M],E=h[f+1][M],S=h[f+1][M+1];(f!==0||o>0)&&p.push(A,b,S),(f!==i-1||l<Math.PI)&&p.push(b,E,S)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(y,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Kn(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Wu(s))s.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Wu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Xt(n){let e={};for(let t=0;t<n.length;t++){let i=Kn(n[t]);for(let s in i)e[s]=i[s]}return e}function Wu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Lp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function nh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}var Zn={clone:Kn,merge:Xt},Np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xt=class extends Fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Np,this.fragmentShader=Up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kn(e.uniforms),this.uniformsGroups=Lp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ae().setHex(s.value);break;case"v2":this.uniforms[i].value=new me().fromArray(s.value);break;case"v3":this.uniforms[i].value=new D().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ct().fromArray(s.value);break;case"m3":this.uniforms[i].value=new De().fromArray(s.value);break;case"m4":this.uniforms[i].value=new it().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},fa=class extends xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var pa=class extends Fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ma=class extends Fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Vo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var bn=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];i:{e:{let o;t:{n:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break i}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ga=class extends bn{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wc,endingEnd:wc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ec:r=e,a=2*t-i;break;case Tc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ec:o=e,l=2*i-t;break;case Tc:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),y=g*g,m=y*g,f=-u*m+2*u*y-u*g,M=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,A=(-1-p)*m+(1.5+p)*y+.5*g,b=p*m-p*y;for(let E=0;E!==a;++E)r[E]=f*o[h+E]+M*o[c+E]+A*o[l+E]+b*o[d+E];return r}},va=class extends bn{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},xa=class extends bn{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},_a=class extends bn{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-t)/(s-t),y=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*y+o[l+m]*g;return r}let u=a*2,p=e-1;for(let g=0;g!==a;++g){let y=o[c+g],m=o[l+g],f=p*u+g*2,M=d[f],A=d[f+1],b=e*u+g*2,E=h[b],S=h[b+1],C=(i-t)/(s-t),x,T,I,R,F;for(let W=0;W<8;W++){x=C*C,T=x*C,I=1-C,R=I*I,F=R*I;let B=F*t+3*R*C*M+3*I*x*E+T*s-i;if(Math.abs(B)<1e-10)break;let q=3*R*(M-t)+6*I*C*(E-M)+3*x*(s-E);if(Math.abs(q)<1e-10)break;C=C-B/q,C=Math.max(0,Math.min(1,C))}r[g]=F*y+3*R*C*A+3*I*x*S+T*m}return r}},li=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vo(t,this.TimeBufferType),this.values=Vo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Vo(e.times,Array),values:Vo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new xa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new _a(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case lr:t=this.InterpolantFactoryMethodDiscrete;break;case ia:t=this.InterpolantFactoryMethodLinear;break;case Wo:t=this.InterpolantFactoryMethodSmooth;break;case Mc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Te("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return ia;case this.InterpolantFactoryMethodSmooth:return Wo;case this.InterpolantFactoryMethodBezier:return Mc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ce("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ce("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Ce("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ce("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Jf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ce("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Wo,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,p=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[u+g]||y!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let p=0;p!==i;++p)t[u+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};li.prototype.ValueTypeName="";li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=ia;var Sn=class extends li{constructor(e,t,i){super(e,t,i)}};Sn.prototype.ValueTypeName="bool";Sn.prototype.ValueBufferType=Array;Sn.prototype.DefaultInterpolation=lr;Sn.prototype.InterpolantFactoryMethodLinear=void 0;Sn.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends li{constructor(e,t,i,s){super(e,t,i,s)}};ya.prototype.ValueTypeName="color";var ba=class extends li{constructor(e,t,i,s){super(e,t,i,s)}};ba.prototype.ValueTypeName="number";var Sa=class extends bn{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)ai.slerpFlat(r,0,o,c-a,o,c,l);return r}},wr=class extends li{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Sa(this.times,this.values,this.getValueSize(),e)}};wr.prototype.ValueTypeName="quaternion";wr.prototype.InterpolantFactoryMethodSmooth=void 0;var Mn=class extends li{constructor(e,t,i){super(e,t,i)}};Mn.prototype.ValueTypeName="string";Mn.prototype.ValueBufferType=Array;Mn.prototype.DefaultInterpolation=lr;Mn.prototype.InterpolantFactoryMethodLinear=void 0;Mn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ma=class extends li{constructor(e,t,i,s){super(e,t,i,s)}};Ma.prototype.ValueTypeName="vector";var wa=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ud=new wa,Ea=class{constructor(e){this.manager=e!==void 0?e:Ud,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ea.DEFAULT_MATERIAL_NAME="__DEFAULT";var Er=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Sc=new it,Xu=new D,qu=new D,Ic=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=Jt,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ps,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Xu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xu),qu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qu),t.updateMatrixWorld(),Sc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Es||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ho=new D,Go=new ai,Li=new D,Tr=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ho,Go,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Go,Li.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ho,Go,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Go,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},mn=new D,Yu=new me,ju=new me,Ft=class extends Tr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mn.x,mn.y).multiplyScalar(-e/mn.z),mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mn.x,mn.y).multiplyScalar(-e/mn.z)}getViewSize(e,t){return this.getViewBounds(e,Yu,ju),t.subVectors(ju,Yu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(or*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Rc=class extends Ic{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0}},Ar=class extends Er{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Rc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},jn=class extends Tr{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Cr=class extends Er{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ss=-90,Ms=1,Ta=class extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ft(Ss,Ms,e,t);s.layers=this.layers,this.add(s);let r=new Ft(Ss,Ms,e,t);r.layers=this.layers,this.add(r);let o=new Ft(Ss,Ms,e,t);o.layers=this.layers,this.add(o);let a=new Ft(Ss,Ms,e,t);a.layers=this.layers,this.add(a);let l=new Ft(Ss,Ms,e,t);l.layers=this.layers,this.add(l);let c=new Ft(Ss,Ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Es)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Aa=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ir=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Fp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Fp(){this._document.hidden===!1&&this.reset()}var sh="\\[\\]\\.:\\/",Op=new RegExp("["+sh+"]","g"),rh="[^"+sh+"]",kp="[^"+sh.replace("\\.","")+"]",Bp=/((?:WC+[\/:])*)/.source.replace("WC",rh),zp=/(WCOD+)?/.source.replace("WCOD",kp),Vp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rh),Hp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rh),Gp=new RegExp("^"+Bp+zp+Vp+Hp+"$"),Wp=["material","materials","bones","map"],Pc=class{constructor(e,t,i){let s=i||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Op,"")}static parseTrackName(e){let t=Gp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Wp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Te("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ce("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=Pc;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cy=new Float32Array(1);var $u=new it,Rr=class{constructor(e,t,i=0,s=1/0){this.ray=new Qi(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Is,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ce("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $u.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($u),this}intersectObject(e,t=!0,i=[]){return Dc(e,this,i,t),i.sort(Ku),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Dc(e[s],this,i,t);return i.sort(Ku),i}};function Ku(n,e){return n.distance-e.distance}function Dc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Dc(r[o],e,t,!0)}}var Us=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var uh=class uh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};uh.prototype.isMatrix2=!0;var Lc=uh;var Pr=class extends Mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Te("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function oh(n,e,t,i){let s=Xp(i);switch(t){case Kc:return n*e;case Jc:return n*e/s.components*s.byteLength;case Ua:return n*e/s.components*s.byteLength;case In:return n*e*2/s.components*s.byteLength;case Fa:return n*e*2/s.components*s.byteLength;case Zc:return n*e*3/s.components*s.byteLength;case pi:return n*e*4/s.components*s.byteLength;case Oa:return n*e*4/s.components*s.byteLength;case Ur:case Fr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Or:case kr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ba:case Va:return Math.max(n,16)*Math.max(e,8)/4;case ka:case za:return Math.max(n,8)*Math.max(e,8)/2;case Ha:case Ga:case Xa:case qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wa:case Br:case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $a:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Za:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case el:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case tl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case il:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case nl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ol:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case al:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ll:case cl:case hl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ul:case dl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case zr:case fl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xp(n){switch(n){case Jt:case qc:return{byteLength:1,components:1};case Os:case Yc:case Wt:return{byteLength:2,components:1};case La:case Na:return{byteLength:2,components:4};case Ei:case Da:case Ti:return{byteLength:4,components:1};case jc:case $c:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function rf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Yp(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],y=d[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let y=d[p];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$p=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,em=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,im=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,om=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,am=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,vm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_m=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Um=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,zm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ym=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$m=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Km=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ig=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_g=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ig=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ug=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Og=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$g=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,t0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,i0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,n0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,c0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,f0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,m0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,g0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,M0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:jp,alphahash_pars_fragment:$p,alphamap_fragment:Kp,alphamap_pars_fragment:Zp,alphatest_fragment:Jp,alphatest_pars_fragment:Qp,aomap_fragment:em,aomap_pars_fragment:tm,batching_pars_vertex:im,batching_vertex:nm,begin_vertex:sm,beginnormal_vertex:rm,bsdfs:om,iridescence_fragment:am,bumpmap_pars_fragment:lm,clipping_planes_fragment:cm,clipping_planes_pars_fragment:hm,clipping_planes_pars_vertex:um,clipping_planes_vertex:dm,color_fragment:fm,color_pars_fragment:pm,color_pars_vertex:mm,color_vertex:gm,common:vm,cube_uv_reflection_fragment:xm,defaultnormal_vertex:_m,displacementmap_pars_vertex:ym,displacementmap_vertex:bm,emissivemap_fragment:Sm,emissivemap_pars_fragment:Mm,colorspace_fragment:wm,colorspace_pars_fragment:Em,envmap_fragment:Tm,envmap_common_pars_fragment:Am,envmap_pars_fragment:Cm,envmap_pars_vertex:Im,envmap_physical_pars_fragment:zm,envmap_vertex:Rm,fog_vertex:Pm,fog_pars_vertex:Dm,fog_fragment:Lm,fog_pars_fragment:Nm,gradientmap_pars_fragment:Um,lightmap_pars_fragment:Fm,lights_lambert_fragment:Om,lights_lambert_pars_fragment:km,lights_pars_begin:Bm,lights_toon_fragment:Vm,lights_toon_pars_fragment:Hm,lights_phong_fragment:Gm,lights_phong_pars_fragment:Wm,lights_physical_fragment:Xm,lights_physical_pars_fragment:qm,lights_fragment_begin:Ym,lights_fragment_maps:jm,lights_fragment_end:$m,lightprobes_pars_fragment:Km,logdepthbuf_fragment:Zm,logdepthbuf_pars_fragment:Jm,logdepthbuf_pars_vertex:Qm,logdepthbuf_vertex:eg,map_fragment:tg,map_pars_fragment:ig,map_particle_fragment:ng,map_particle_pars_fragment:sg,metalnessmap_fragment:rg,metalnessmap_pars_fragment:og,morphinstance_vertex:ag,morphcolor_vertex:lg,morphnormal_vertex:cg,morphtarget_pars_vertex:hg,morphtarget_vertex:ug,normal_fragment_begin:dg,normal_fragment_maps:fg,normal_pars_fragment:pg,normal_pars_vertex:mg,normal_vertex:gg,normalmap_pars_fragment:vg,clearcoat_normal_fragment_begin:xg,clearcoat_normal_fragment_maps:_g,clearcoat_pars_fragment:yg,iridescence_pars_fragment:bg,opaque_fragment:Sg,packing:Mg,premultiplied_alpha_fragment:wg,project_vertex:Eg,dithering_fragment:Tg,dithering_pars_fragment:Ag,roughnessmap_fragment:Cg,roughnessmap_pars_fragment:Ig,shadowmap_pars_fragment:Rg,shadowmap_pars_vertex:Pg,shadowmap_vertex:Dg,shadowmask_pars_fragment:Lg,skinbase_vertex:Ng,skinning_pars_vertex:Ug,skinning_vertex:Fg,skinnormal_vertex:Og,specularmap_fragment:kg,specularmap_pars_fragment:Bg,tonemapping_fragment:zg,tonemapping_pars_fragment:Vg,transmission_fragment:Hg,transmission_pars_fragment:Gg,uv_pars_fragment:Wg,uv_pars_vertex:Xg,uv_vertex:qg,worldpos_vertex:Yg,background_vert:jg,background_frag:$g,backgroundCube_vert:Kg,backgroundCube_frag:Zg,cube_vert:Jg,cube_frag:Qg,depth_vert:e0,depth_frag:t0,distance_vert:i0,distance_frag:n0,equirect_vert:s0,equirect_frag:r0,linedashed_vert:o0,linedashed_frag:a0,meshbasic_vert:l0,meshbasic_frag:c0,meshlambert_vert:h0,meshlambert_frag:u0,meshmatcap_vert:d0,meshmatcap_frag:f0,meshnormal_vert:p0,meshnormal_frag:m0,meshphong_vert:g0,meshphong_frag:v0,meshphysical_vert:x0,meshphysical_frag:_0,meshtoon_vert:y0,meshtoon_frag:b0,points_vert:S0,points_frag:M0,shadow_vert:w0,shadow_frag:E0,sprite_vert:T0,sprite_frag:A0},ce={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},zi={basic:{uniforms:Xt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Xt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ae(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Xt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Xt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Xt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Xt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Xt([ce.points,ce.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Xt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Xt([ce.common,ce.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Xt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Xt([ce.sprite,ce.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:Xt([ce.common,ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:Xt([ce.lights,ce.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};zi.physical={uniforms:Xt([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};var gl={r:0,b:0,g:0},C0=new it,of=new De;of.set(-1,0,0,0,1,0,0,0,1);function I0(n,e,t,i,s,r){let o=new Ae(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function p(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let b=M.backgroundBlurriness>0;A=e.get(A,b)}return A}function g(M){let A=!1,b=p(M);b===null?m(o,a):b&&b.isColor&&(m(b,1),A=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(M,A){let b=p(A);b&&(b.isCubeTexture||b.mapping===Lr)?(c===void 0&&(c=new Gt(new Ns(1,1,1),new xt({name:"BackgroundCubeMaterial",uniforms:Kn(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(C0.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(of),c.material.toneMapped=Ve.getTransfer(b.colorSpace)!==Ye,(h!==b||d!==b.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Gt(new Sr(2,2),new xt({name:"BackgroundMaterial",uniforms:Kn(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Ve.getTransfer(b.colorSpace)!==Ye,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,A){M.getRGB(gl,nh(n)),t.buffers.color.setClear(gl.r,gl.g,gl.b,A,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,A=1){o.set(M),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:y,dispose:f}}function R0(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(R,F,W,$,B){let q=!1,H=d(R,$,W,F);r!==H&&(r=H,c(r.object)),q=p(R,$,W,B),q&&g(R,$,W,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,b(R,F,W,$),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return n.createVertexArray()}function c(R){return n.bindVertexArray(R)}function h(R){return n.deleteVertexArray(R)}function d(R,F,W,$){let B=$.wireframe===!0,q=i[F.id];q===void 0&&(q={},i[F.id]=q);let H=R.isInstancedMesh===!0?R.id:0,Z=q[H];Z===void 0&&(Z={},q[H]=Z);let Q=Z[W.id];Q===void 0&&(Q={},Z[W.id]=Q);let he=Q[B];return he===void 0&&(he=u(l()),Q[B]=he),he}function u(R){let F=[],W=[],$=[];for(let B=0;B<t;B++)F[B]=0,W[B]=0,$[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:$,object:R,attributes:{},index:null}}function p(R,F,W,$){let B=r.attributes,q=F.attributes,H=0,Z=W.getAttributes();for(let Q in Z)if(Z[Q].location>=0){let pe=B[Q],xe=q[Q];if(xe===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(xe=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(xe=R.instanceColor)),pe===void 0||pe.attribute!==xe||xe&&pe.data!==xe.data)return!0;H++}return r.attributesNum!==H||r.index!==$}function g(R,F,W,$){let B={},q=F.attributes,H=0,Z=W.getAttributes();for(let Q in Z)if(Z[Q].location>=0){let pe=q[Q];pe===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(pe=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(pe=R.instanceColor));let xe={};xe.attribute=pe,pe&&pe.data&&(xe.data=pe.data),B[Q]=xe,H++}r.attributes=B,r.attributesNum=H,r.index=$}function y(){let R=r.newAttributes;for(let F=0,W=R.length;F<W;F++)R[F]=0}function m(R){f(R,0)}function f(R,F){let W=r.newAttributes,$=r.enabledAttributes,B=r.attributeDivisors;W[R]=1,$[R]===0&&(n.enableVertexAttribArray(R),$[R]=1),B[R]!==F&&(n.vertexAttribDivisor(R,F),B[R]=F)}function M(){let R=r.newAttributes,F=r.enabledAttributes;for(let W=0,$=F.length;W<$;W++)F[W]!==R[W]&&(n.disableVertexAttribArray(W),F[W]=0)}function A(R,F,W,$,B,q,H){H===!0?n.vertexAttribIPointer(R,F,W,B,q):n.vertexAttribPointer(R,F,W,$,B,q)}function b(R,F,W,$){y();let B=$.attributes,q=W.getAttributes(),H=F.defaultAttributeValues;for(let Z in q){let Q=q[Z];if(Q.location>=0){let he=B[Z];if(he===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(he=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(he=R.instanceColor)),he!==void 0){let pe=he.normalized,xe=he.itemSize,We=e.get(he);if(We===void 0)continue;let ht=We.buffer,Xe=We.type,K=We.bytesPerElement,ne=Xe===n.INT||Xe===n.UNSIGNED_INT||he.gpuType===Da;if(he.isInterleavedBufferAttribute){let ee=he.data,Pe=ee.stride,Le=he.offset;if(ee.isInstancedInterleavedBuffer){for(let Ie=0;Ie<Q.locationSize;Ie++)f(Q.location+Ie,ee.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ie=0;Ie<Q.locationSize;Ie++)m(Q.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let Ie=0;Ie<Q.locationSize;Ie++)A(Q.location+Ie,xe/Q.locationSize,Xe,pe,Pe*K,(Le+xe/Q.locationSize*Ie)*K,ne)}else{if(he.isInstancedBufferAttribute){for(let ee=0;ee<Q.locationSize;ee++)f(Q.location+ee,he.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ee=0;ee<Q.locationSize;ee++)m(Q.location+ee);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let ee=0;ee<Q.locationSize;ee++)A(Q.location+ee,xe/Q.locationSize,Xe,pe,xe*K,xe/Q.locationSize*ee*K,ne)}}else if(H!==void 0){let pe=H[Z];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(Q.location,pe);break;case 3:n.vertexAttrib3fv(Q.location,pe);break;case 4:n.vertexAttrib4fv(Q.location,pe);break;default:n.vertexAttrib1fv(Q.location,pe)}}}}M()}function E(){T();for(let R in i){let F=i[R];for(let W in F){let $=F[W];for(let B in $){let q=$[B];for(let H in q)h(q[H].object),delete q[H];delete $[B]}}delete i[R]}}function S(R){if(i[R.id]===void 0)return;let F=i[R.id];for(let W in F){let $=F[W];for(let B in $){let q=$[B];for(let H in q)h(q[H].object),delete q[H];delete $[B]}}delete i[R.id]}function C(R){for(let F in i){let W=i[F];for(let $ in W){let B=W[$];if(B[R.id]===void 0)continue;let q=B[R.id];for(let H in q)h(q[H].object),delete q[H];delete B[R.id]}}}function x(R){for(let F in i){let W=i[F],$=R.isInstancedMesh===!0?R.id:0,B=W[$];if(B!==void 0){for(let q in B){let H=B[q];for(let Z in H)h(H[Z].object),delete H[Z];delete B[q]}delete W[$],Object.keys(W).length===0&&delete i[F]}}}function T(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function P0(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function D0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==pi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let x=C===Wt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Jt&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ti&&!x)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Te("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:b,maxSamples:E,samples:S}}function L0(n){let e=this,t=null,i=0,s=!1,r=!1,o=new di,a=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:i,A=M*4,b=f.clippingState||null;l.value=b,b=h(g,u,A,p);for(let E=0;E!==A;++E)b[E]=t[E];f.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let f=p+y*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let A=0,b=p;A!==y;++A,b+=4)o.copy(d[A]).applyMatrix4(M,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var Rn=4,Fd=[.125,.215,.35,.446,.526,.582],Jn=20,N0=256,Vr=new jn,Od=new Ae,dh=null,fh=0,ph=0,mh=!1,U0=new D,xl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=U0}=r;dh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dh,fh,ph),this._renderer.xr.enabled=mh,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Tn||e.mapping===$n?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Wt,format:pi,colorSpace:cr,depthBuffer:!1},s=kd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kd(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=F0(r)),this._blurMaterial=k0(r,e,t),this._ggxMaterial=O0(r,e,t)}return s}_compileMaterial(e){let t=new Gt(new Mt,e);this._renderer.compile(t,Vr)}_sceneToCubeUV(e,t,i,s,r){let l=new Ft(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(Od),d.toneMapping=wi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gt(new Ns,new en({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,f=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,f=!0):(m.color.copy(Od),f=!0);for(let A=0;A<6;A++){let b=A%3;b===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):b===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));let E=this._cubeSize;Bs(s,b*E,A>2?E:0,E,E),d.setRenderTarget(s),f&&d.render(y,l),d.render(e,l)}d.toneMapping=p,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Tn||e.mapping===$n;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Bs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Vr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,p=d*u,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-Rn?i-g+Rn:0),f=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,Bs(r,m,f,3*y,2*y),s.setRenderTarget(r),s.render(a,Vr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Bs(e,m,f,3*y,2*y),s.setRenderTarget(e),s.render(a,Vr)}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[s];d.material=c;let u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Jn-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Jn;m>Jn&&Te(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jn}`);let f=[],M=0;for(let C=0;C<Jn;++C){let x=C/y,T=Math.exp(-x*x/2);f.push(T),C===0?M+=T:C<m&&(M+=2*T)}for(let C=0;C<f.length;C++)f[C]=f[C]/M;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:A}=this;u.dTheta.value=g,u.mipInt.value=A-i;let b=this._sizeLods[s],E=3*b*(s>A-Rn?s-A+Rn:0),S=4*(this._cubeSize-b);Bs(t,E,S,3*b,2*b),l.setRenderTarget(t),l.render(d,Vr)}};function F0(n){let e=[],t=[],i=[],s=n,r=n-Rn+1+Fd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Rn?l=Fd[o-n+Rn-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,y=3,m=2,f=1,M=new Float32Array(y*g*p),A=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let S=0;S<p;S++){let C=S%3*2/3-1,x=S>2?0:-1,T=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];M.set(T,y*g*S),A.set(u,m*g*S);let I=[S,S,S,S,S,S];b.set(I,f*g*S)}let E=new Mt;E.setAttribute("position",new Dt(M,y)),E.setAttribute("uv",new Dt(A,m)),E.setAttribute("faceIndex",new Dt(b,f)),i.push(new Gt(E,null)),s>Rn&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function kd(n,e,t){let i=new Et(n,e,t);return i.texture.mapping=Lr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function O0(n,e,t){return new xt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:N0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function k0(n,e,t){let i=new Float32Array(Jn),s=new D(0,1,0);return new xt({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Bd(){return new xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function zd(){return new xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function bl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var _l=class extends Et{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new yr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ns(5,5,5),r=new xt({name:"CubemapFromEquirect",uniforms:Kn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:fi});r.uniforms.tEquirect.value=t;let o=new Gt(s,r),a=t.minFilter;return t.minFilter===An&&(t.minFilter=Ot),new Ta(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function B0(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,p=!1){return u==null?null:p?o(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Ia||p===Ra)if(e.has(u)){let g=e.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new _l(g.height);return y.fromEquirectangularTexture(n,u),e.set(u,y),u.addEventListener("dispose",c),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let p=u.mapping,g=p===Ia||p===Ra,y=p===Tn||p===$n;if(g||y){let m=t.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new xl(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return g&&M&&M.height>0||y&&M&&l(M)?(i===null&&(i=new xl(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,p){return p===Ia?u.mapping=Tn:p===Ra&&(u.mapping=$n),u}function l(u){let p=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&p++;return p===g}function c(u){let p=u.target;p.removeEventListener("dispose",c);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function z0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Gn("WebGLRenderer: "+i+" extension not supported."),s}}}function V0(n,e,t,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)e.update(u[p],n.ARRAY_BUFFER)}function c(d){let u=[],p=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(p!==null){let M=p.array;y=p.version;for(let A=0,b=M.length;A<b;A+=3){let E=M[A+0],S=M[A+1],C=M[A+2];u.push(E,S,S,C,C,E)}}else{let M=g.array;y=g.version;for(let A=0,b=M.length/3-1;A<b;A+=3){let E=A+0,S=A+1,C=A+2;u.push(E,S,S,C,C,E)}}let m=new(g.count>=65535?vr:gr)(u,1);m.version=y;let f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function H0(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*o),t.update(u,i,1)}function c(d,u,p){p!==0&&(n.drawElementsInstanced(i,u,r,d*o,p),t.update(u,i,p))}function h(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,p);let y=0;for(let m=0;m<p;m++)y+=u[m];t.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function G0(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Ce("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function W0(n,e,t){let i=new WeakMap,s=new ct;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let T=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],A=0;p===!0&&(A=1),g===!0&&(A=2),y===!0&&(A=3);let b=a.attributes.position.count*A,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*E*4*d),C=new fr(S,b,E,d);C.type=Ti,C.needsUpdate=!0;let x=A*4;for(let I=0;I<d;I++){let R=m[I],F=f[I],W=M[I],$=b*E*4*I;for(let B=0;B<R.count;B++){let q=B*x;p===!0&&(s.fromBufferAttribute(R,B),S[$+q+0]=s.x,S[$+q+1]=s.y,S[$+q+2]=s.z,S[$+q+3]=0),g===!0&&(s.fromBufferAttribute(F,B),S[$+q+4]=s.x,S[$+q+5]=s.y,S[$+q+6]=s.z,S[$+q+7]=0),y===!0&&(s.fromBufferAttribute(W,B),S[$+q+8]=s.x,S[$+q+9]=s.y,S[$+q+10]=s.z,S[$+q+11]=W.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new me(b,E)},i.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function X0(n,e,t,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var q0={[kc]:"LINEAR_TONE_MAPPING",[Bc]:"REINHARD_TONE_MAPPING",[zc]:"CINEON_TONE_MAPPING",[Vc]:"ACES_FILMIC_TONE_MAPPING",[Gc]:"AGX_TONE_MAPPING",[Wc]:"NEUTRAL_TONE_MAPPING",[Hc]:"CUSTOM_TONE_MAPPING"};function Y0(n,e,t,i,s,r){let o=new Et(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new tn(e,t):void 0}),a=new Et(e,t,{type:Wt,depthBuffer:!1,stencilBuffer:!1}),l=new Mt;l.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new pt([0,2,0,0,2,0],2));let c=new fa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Gt(l,c),d=new jn(-1,1,1,-1,0,1),u=null,p=null,g=!1,y,m=null,f=[],M=!1;this.setSize=function(A,b){o.setSize(A,b),a.setSize(A,b);for(let E=0;E<f.length;E++){let S=f[E];S.setSize&&S.setSize(A,b)}},this.setEffects=function(A){f=A,M=f.length>0&&f[0].isRenderPass===!0;let b=o.width,E=o.height;for(let S=0;S<f.length;S++){let C=f[S];C.setSize&&C.setSize(b,E)}},this.begin=function(A,b){if(g||A.toneMapping===wi&&f.length===0)return!1;if(m=b,b!==null){let E=b.width,S=b.height;(o.width!==E||o.height!==S)&&this.setSize(E,S)}return M===!1&&A.setRenderTarget(o),y=A.toneMapping,A.toneMapping=wi,!0},this.hasRenderPass=function(){return M},this.end=function(A,b){A.toneMapping=y,g=!0;let E=o,S=a;for(let C=0;C<f.length;C++){let x=f[C];if(x.enabled!==!1&&(x.render(A,S,E,b),x.needsSwap!==!1)){let T=E;E=S,S=T}}if(u!==A.outputColorSpace||p!==A.toneMapping){u=A.outputColorSpace,p=A.toneMapping,c.defines={},Ve.getTransfer(u)===Ye&&(c.defines.SRGB_TRANSFER="");let C=q0[p];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,A.setRenderTarget(m),A.render(h,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}var af=new $t,xh=new tn(1,1),lf=new fr,cf=new oa,hf=new yr,Vd=[],Hd=[],Gd=new Float32Array(16),Wd=new Float32Array(9),Xd=new Float32Array(4);function Vs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Vd[s];if(r===void 0&&(r=new Float32Array(s),Vd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Sl(n,e){let t=Hd[e];t===void 0&&(t=new Int32Array(e),Hd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function j0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function K0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function Z0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function J0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;Xd.set(i),n.uniformMatrix2fv(this.addr,!1,Xd),At(t,i)}}function Q0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;Wd.set(i),n.uniformMatrix3fv(this.addr,!1,Wd),At(t,i)}}function ev(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;Gd.set(i),n.uniformMatrix4fv(this.addr,!1,Gd),At(t,i)}}function tv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function iv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function nv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function sv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function rv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ov(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function av(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function lv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function cv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(xh.compareFunction=t.isReversedDepthBuffer()?ml:pl,r=xh):r=af,t.setTexture2D(e||r,s)}function hv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||cf,s)}function uv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||hf,s)}function dv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||lf,s)}function fv(n){switch(n){case 5126:return j0;case 35664:return $0;case 35665:return K0;case 35666:return Z0;case 35674:return J0;case 35675:return Q0;case 35676:return ev;case 5124:case 35670:return tv;case 35667:case 35671:return iv;case 35668:case 35672:return nv;case 35669:case 35673:return sv;case 5125:return rv;case 36294:return ov;case 36295:return av;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return cv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return uv;case 36289:case 36303:case 36311:case 36292:return dv}}function pv(n,e){n.uniform1fv(this.addr,e)}function mv(n,e){let t=Vs(e,this.size,2);n.uniform2fv(this.addr,t)}function gv(n,e){let t=Vs(e,this.size,3);n.uniform3fv(this.addr,t)}function vv(n,e){let t=Vs(e,this.size,4);n.uniform4fv(this.addr,t)}function xv(n,e){let t=Vs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _v(n,e){let t=Vs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function yv(n,e){let t=Vs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function bv(n,e){n.uniform1iv(this.addr,e)}function Sv(n,e){n.uniform2iv(this.addr,e)}function Mv(n,e){n.uniform3iv(this.addr,e)}function wv(n,e){n.uniform4iv(this.addr,e)}function Ev(n,e){n.uniform1uiv(this.addr,e)}function Tv(n,e){n.uniform2uiv(this.addr,e)}function Av(n,e){n.uniform3uiv(this.addr,e)}function Cv(n,e){n.uniform4uiv(this.addr,e)}function Iv(n,e,t){let i=this.cache,s=e.length,r=Sl(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=xh:o=af;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Rv(n,e,t){let i=this.cache,s=e.length,r=Sl(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||cf,r[o])}function Pv(n,e,t){let i=this.cache,s=e.length,r=Sl(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||hf,r[o])}function Dv(n,e,t){let i=this.cache,s=e.length,r=Sl(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||lf,r[o])}function Lv(n){switch(n){case 5126:return pv;case 35664:return mv;case 35665:return gv;case 35666:return vv;case 35674:return xv;case 35675:return _v;case 35676:return yv;case 5124:case 35670:return bv;case 35667:case 35671:return Sv;case 35668:case 35672:return Mv;case 35669:case 35673:return wv;case 5125:return Ev;case 36294:return Tv;case 36295:return Av;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Iv;case 35679:case 36299:case 36307:return Rv;case 35680:case 36300:case 36308:case 36293:return Pv;case 36289:case 36303:case 36311:case 36292:return Dv}}var _h=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=fv(t.type)}},yh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lv(t.type)}},bh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},gh=/(\w+)(\])?(\[|\.)?/g;function qd(n,e){n.seq.push(e),n.map[e.id]=e}function Nv(n,e,t){let i=n.name,s=i.length;for(gh.lastIndex=0;;){let r=gh.exec(i),o=gh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qd(t,c===void 0?new _h(a,n,e):new yh(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new bh(a),qd(t,d)),t=d}}}var zs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Nv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Yd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Uv=37297,Fv=0;function Ov(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var jd=new De;function kv(n){Ve._getMatrix(jd,Ve.workingColorSpace,n);let e=`mat3( ${jd.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(n)){case hr:return[e,"LinearTransferOETF"];case Ye:return[e,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function $d(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Ov(n.getShaderSource(e),a)}else return r}function Bv(n,e){let t=kv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var zv={[kc]:"Linear",[Bc]:"Reinhard",[zc]:"Cineon",[Vc]:"ACESFilmic",[Gc]:"AgX",[Wc]:"Neutral",[Hc]:"Custom"};function Vv(n,e){let t=zv[e];return t===void 0?(Te("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var vl=new D;function Hv(){Ve.getLuminanceCoefficients(vl);let n=vl.x.toFixed(4),e=vl.y.toFixed(4),t=vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function Wv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Xv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Gr(n){return n!==""}function Kd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sh(n){return n.replace(qv,jv)}var Yv=new Map;function jv(n,e){let t=Fe[e];if(t===void 0){let i=Yv.get(e);if(i!==void 0)t=Fe[i],Te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Sh(t)}var $v=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jd(n){return n.replace($v,Kv)}function Kv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Zv={[Dr]:"SHADOWMAP_TYPE_PCF",[Fs]:"SHADOWMAP_TYPE_VSM"};function Jv(n){return Zv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Qv={[Tn]:"ENVMAP_TYPE_CUBE",[$n]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE_UV"};function ex(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Qv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var tx={[$n]:"ENVMAP_MODE_REFRACTION"};function ix(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":tx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var nx={[Oc]:"ENVMAP_BLENDING_MULTIPLY",[xd]:"ENVMAP_BLENDING_MIX",[_d]:"ENVMAP_BLENDING_ADD"};function sx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":nx[n.combine]||"ENVMAP_BLENDING_NONE"}function rx(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ox(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Jv(t),c=ex(t),h=ix(t),d=sx(t),u=rx(t),p=Gv(t),g=Wv(r),y=s.createProgram(),m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gr).join(`
`),f.length>0&&(f+=`
`)):(m=[Qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),f=[Qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?Fe.tonemapping_pars_fragment:"",t.toneMapping!==wi?Vv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Bv("linearToOutputTexel",t.outputColorSpace),Hv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gr).join(`
`)),o=Sh(o),o=Kd(o,t),o=Zd(o,t),a=Sh(a),a=Kd(a,t),a=Zd(a,t),o=Jd(o),a=Jd(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let A=M+m+o,b=M+f+a,E=Yd(s,s.VERTEX_SHADER,A),S=Yd(s,s.FRAGMENT_SHADER,b);s.attachShader(y,E),s.attachShader(y,S),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(R){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(y)||"",W=s.getShaderInfoLog(E)||"",$=s.getShaderInfoLog(S)||"",B=F.trim(),q=W.trim(),H=$.trim(),Z=!0,Q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,E,S);else{let he=$d(s,E,"vertex"),pe=$d(s,S,"fragment");Ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+he+`
`+pe)}else B!==""?Te("WebGLProgram: Program Info Log:",B):(q===""||H==="")&&(Q=!1);Q&&(R.diagnostics={runnable:Z,programLog:B,vertexShader:{log:q,prefix:m},fragmentShader:{log:H,prefix:f}})}s.deleteShader(E),s.deleteShader(S),x=new zs(s,y),T=Xv(s,y)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(y,Uv)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fv++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=S,this}var ax=0,Mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new wh(e),t.set(e,i)),i}},wh=class{constructor(e){this.id=ax++,this.code=e,this.usedTimes=0}};function lx(n){return n===In||n===Br||n===zr}function cx(n,e,t,i,s,r){let o=new Is,a=new Mh,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,T,I,R,F,W){let $=R.fog,B=F.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=e.get(x.envMap||q,H),Q=Z&&Z.mapping===Lr?Z.image.height:null,he=p[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Te("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let pe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,xe=pe!==void 0?pe.length:0,We=0;B.morphAttributes.position!==void 0&&(We=1),B.morphAttributes.normal!==void 0&&(We=2),B.morphAttributes.color!==void 0&&(We=3);let ht,Xe,K,ne;if(he){let _e=zi[he];ht=_e.vertexShader,Xe=_e.fragmentShader}else{ht=x.vertexShader,Xe=x.fragmentShader;let _e=a.getVertexShaderStage(x),dt=a.getFragmentShaderStage(x);a.update(x,_e,dt),K=_e.id,ne=dt.id}let ee=n.getRenderTarget(),Pe=n.state.buffers.depth.getReversed(),Le=F.isInstancedMesh===!0,Ie=F.isBatchedMesh===!0,mt=!!x.map,Be=!!x.matcap,Qe=!!Z,qe=!!x.aoMap,He=!!x.lightMap,_t=!!x.bumpMap&&x.wireframe===!1,wt=!!x.normalMap,It=!!x.displacementMap,Nt=!!x.emissiveMap,ut=!!x.metalnessMap,yt=!!x.roughnessMap,L=x.anisotropy>0,Zt=x.clearcoat>0,je=x.dispersion>0,w=x.iridescence>0,v=x.sheen>0,U=x.transmission>0,z=L&&!!x.anisotropyMap,G=Zt&&!!x.clearcoatMap,te=Zt&&!!x.clearcoatNormalMap,se=Zt&&!!x.clearcoatRoughnessMap,X=w&&!!x.iridescenceMap,j=w&&!!x.iridescenceThicknessMap,re=v&&!!x.sheenColorMap,Se=v&&!!x.sheenRoughnessMap,le=!!x.specularMap,oe=!!x.specularColorMap,Ee=!!x.specularIntensityMap,Re=U&&!!x.transmissionMap,Ne=U&&!!x.thicknessMap,P=!!x.gradientMap,ie=!!x.alphaMap,Y=x.alphaTest>0,ae=!!x.alphaHash,fe=!!x.extensions,J=wi;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(J=n.toneMapping);let be={shaderID:he,shaderType:x.type,shaderName:x.name,vertexShader:ht,fragmentShader:Xe,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:ne,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Ie,batchingColor:Ie&&F._colorsTexture!==null,instancing:Le,instancingColor:Le&&F.instanceColor!==null,instancingMorph:Le&&F.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ve.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:mt,matcap:Be,envMap:Qe,envMapMode:Qe&&Z.mapping,envMapCubeUVHeight:Q,aoMap:qe,lightMap:He,bumpMap:_t,normalMap:wt,displacementMap:It,emissiveMap:Nt,normalMapObjectSpace:wt&&x.normalMapType===Sd,normalMapTangentSpace:wt&&x.normalMapType===Qc,packedNormalMap:wt&&x.normalMapType===Qc&&lx(x.normalMap.format),metalnessMap:ut,roughnessMap:yt,anisotropy:L,anisotropyMap:z,clearcoat:Zt,clearcoatMap:G,clearcoatNormalMap:te,clearcoatRoughnessMap:se,dispersion:je,iridescence:w,iridescenceMap:X,iridescenceThicknessMap:j,sheen:v,sheenColorMap:re,sheenRoughnessMap:Se,specularMap:le,specularColorMap:oe,specularIntensityMap:Ee,transmission:U,transmissionMap:Re,thicknessMap:Ne,gradientMap:P,opaque:x.transparent===!1&&x.blending===Wn&&x.alphaToCoverage===!1,alphaMap:ie,alphaTest:Y,alphaHash:ae,combine:x.combine,mapUv:mt&&g(x.map.channel),aoMapUv:qe&&g(x.aoMap.channel),lightMapUv:He&&g(x.lightMap.channel),bumpMapUv:_t&&g(x.bumpMap.channel),normalMapUv:wt&&g(x.normalMap.channel),displacementMapUv:It&&g(x.displacementMap.channel),emissiveMapUv:Nt&&g(x.emissiveMap.channel),metalnessMapUv:ut&&g(x.metalnessMap.channel),roughnessMapUv:yt&&g(x.roughnessMap.channel),anisotropyMapUv:z&&g(x.anisotropyMap.channel),clearcoatMapUv:G&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:te&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:j&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:re&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(x.sheenRoughnessMap.channel),specularMapUv:le&&g(x.specularMap.channel),specularColorMapUv:oe&&g(x.specularColorMap.channel),specularIntensityMapUv:Ee&&g(x.specularIntensityMap.channel),transmissionMapUv:Re&&g(x.transmissionMap.channel),thicknessMapUv:Ne&&g(x.thicknessMap.channel),alphaMapUv:ie&&g(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(wt||L),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(mt||ie),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&wt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Pe,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:We,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:J,decodeVideoTexture:mt&&x.map.isVideoTexture===!0&&Ve.getTransfer(x.map.colorSpace)===Ye,decodeVideoTextureEmissive:Nt&&x.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(x.emissiveMap.colorSpace)===Ye,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Oi,flipSided:x.side===Kt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:fe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&x.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)T.push(I),T.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(f(T,x),M(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function f(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function A(x){let T=p[x.type],I;if(T){let R=zi[T];I=Zn.clone(R.uniforms)}else I=x.uniforms;return I}function b(x,T){let I=h.get(T);return I!==void 0?++I.usedTimes:(I=new ox(n,T,x,s),c.push(I),h.set(T,I)),I}function E(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function C(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:A,acquireProgram:b,releaseProgram:E,releaseShaderCache:S,programs:c,dispose:C}}function hx(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ux(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ef(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function tf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,g,y,m,f){let M=n[e];return M===void 0?(M={id:u.id,object:u,geometry:p,material:g,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:f},n[e]=M):(M.id=u.id,M.object=u,M.geometry=p,M.material=g,M.materialVariant=o(u),M.groupOrder=y,M.renderOrder=u.renderOrder,M.z=m,M.group=f),e++,M}function l(u,p,g,y,m,f){let M=a(u,p,g,y,m,f);g.transmission>0?i.push(M):g.transparent===!0?s.push(M):t.push(M)}function c(u,p,g,y,m,f){let M=a(u,p,g,y,m,f);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,p,g){t.length>1&&t.sort(u||ux),i.length>1&&i.sort(p||ef),s.length>1&&s.sort(p||ef),g&&(t.reverse(),i.reverse(),s.reverse())}function d(){for(let u=e,p=n.length;u<p;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function dx(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new tf,n.set(i,[o])):s>=r.length?(o=new tf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function fx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ae};break;case"SpotLight":t={position:new D,direction:new D,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function px(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var mx=0;function gx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vx(n){let e=new fx,t=px(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,r=new it,o=new it;function a(c){let h=0,d=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,M=0,A=0,b=0,E=0,S=0,C=0;c.sort(gx);for(let T=0,I=c.length;T<I;T++){let R=c[T],F=R.color,W=R.intensity,$=R.distance,B=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===In?B=R.shadow.map.texture:B=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=F.r*W,d+=F.g*W,u+=F.b*W;else if(R.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(R.sh.coefficients[q],W);C++}else if(R.isDirectionalLight){let q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let H=R.shadow,Z=t.get(R);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,i.directionalShadow[p]=Z,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=R.shadow.matrix,M++}i.directional[p]=q,p++}else if(R.isSpotLight){let q=e.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(F).multiplyScalar(W),q.distance=$,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,i.spot[y]=q;let H=R.shadow;if(R.map&&(i.spotLightMap[E]=R.map,E++,H.updateMatrices(R),R.castShadow&&S++),i.spotLightMatrix[y]=H.matrix,R.castShadow){let Z=t.get(R);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,i.spotShadow[y]=Z,i.spotShadowMap[y]=B,b++}y++}else if(R.isRectAreaLight){let q=e.get(R);q.color.copy(F).multiplyScalar(W),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=q,m++}else if(R.isPointLight){let q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){let H=R.shadow,Z=t.get(R);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,Z.shadowCameraNear=H.camera.near,Z.shadowCameraFar=H.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=R.shadow.matrix,A++}i.point[g]=q,g++}else if(R.isHemisphereLight){let q=e.get(R);q.skyColor.copy(R.color).multiplyScalar(W),q.groundColor.copy(R.groundColor).multiplyScalar(W),i.hemi[f]=q,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let x=i.hash;(x.directionalLength!==p||x.pointLength!==g||x.spotLength!==y||x.rectAreaLength!==m||x.hemiLength!==f||x.numDirectionalShadows!==M||x.numPointShadows!==A||x.numSpotShadows!==b||x.numSpotMaps!==E||x.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=b+E-S,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=C,x.directionalLength=p,x.pointLength=g,x.spotLength=y,x.rectAreaLength=m,x.hemiLength=f,x.numDirectionalShadows=M,x.numPointShadows=A,x.numSpotShadows=b,x.numSpotMaps=E,x.numLightProbes=C,i.version=mx++)}function l(c,h){let d=0,u=0,p=0,g=0,y=0,m=h.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){let A=c[f];if(A.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(A.isSpotLight){let b=i.spot[p];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(A.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){let b=i.point[u];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),u++}else if(A.isHemisphereLight){let b=i.hemi[y];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function nf(n){let e=new vx(n),t=[],i=[],s=[];function r(u){d.camera=u,t.length=0,i.length=0,s.length=0}function o(u){t.push(u)}function a(u){i.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function xx(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new nf(n),e.set(s,[a])):r>=o.length?(a=new nf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var _x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,bx=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Sx=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],sf=new it,Hr=new D,vh=new D;function Mx(n,e,t){let i=new Ps,s=new me,r=new me,o=new ct,a=new pa,l=new ma,c={},h=t.maxTextureSize,d={[Zi]:Kt,[Kt]:Zi,[Oi]:Oi},u=new xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:_x,fragmentShader:yx}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Mt;g.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Gt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dr;let f=this.type;this.render=function(S,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Qu&&(Te("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Dr);let T=n.getRenderTarget(),I=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),F=n.state;F.setBlending(fi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let W=f!==this.type;W&&C.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(B=>B.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,B=S.length;$<B;$++){let q=S[$],H=q.shadow;if(H===void 0){Te("WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let Z=H.getFrameExtents();s.multiply(Z),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,H.mapSize.y=r.y));let Q=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Q,H.map===null||W===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Fs){if(q.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Et(s.x,s.y,{format:In,type:Wt,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),H.map.texture.name=q.name+".shadowMap",H.map.depthTexture=new tn(s.x,s.y,Ti),H.map.depthTexture.name=q.name+".shadowMapDepth",H.map.depthTexture.format=Ui,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Lt,H.map.depthTexture.magFilter=Lt}else q.isPointLight?(H.map=new _l(s.x),H.map.depthTexture=new da(s.x,Ei)):(H.map=new Et(s.x,s.y),H.map.depthTexture=new tn(s.x,s.y,Ei)),H.map.depthTexture.name=q.name+".shadowMap",H.map.depthTexture.format=Ui,this.type===Dr?(H.map.depthTexture.compareFunction=Q?ml:pl,H.map.depthTexture.minFilter=Ot,H.map.depthTexture.magFilter=Ot):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Lt,H.map.depthTexture.magFilter=Lt);H.camera.updateProjectionMatrix()}let he=H.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<he;pe++){if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,pe),n.clear();else{pe===0&&(n.setRenderTarget(H.map),n.clear());let xe=H.getViewport(pe);o.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),F.viewport(o)}if(q.isPointLight){let xe=H.camera,We=H.matrix,ht=q.distance||xe.far;ht!==xe.far&&(xe.far=ht,xe.updateProjectionMatrix()),Hr.setFromMatrixPosition(q.matrixWorld),xe.position.copy(Hr),vh.copy(xe.position),vh.add(bx[pe]),xe.up.copy(Sx[pe]),xe.lookAt(vh),xe.updateMatrixWorld(),We.makeTranslation(-Hr.x,-Hr.y,-Hr.z),sf.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),H._frustum.setFromProjectionMatrix(sf,xe.coordinateSystem,xe.reversedDepth)}else H.updateMatrices(q);i=H.getFrustum(),b(C,x,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===Fs&&M(H,x),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(T,I,R)};function M(S,C){let x=e.update(y);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Et(s.x,s.y,{format:In,type:Wt})),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(C,null,x,u,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(C,null,x,p,y,null)}function A(S,C,x,T){let I=null,R=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)I=R;else if(I=x.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let F=I.uuid,W=C.uuid,$=c[F];$===void 0&&($={},c[F]=$);let B=$[W];B===void 0&&(B=I.clone(),$[W]=B,C.addEventListener("dispose",E)),I=B}if(I.visible=C.visible,I.wireframe=C.wireframe,T===Fs?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:d[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let F=n.properties.get(I);F.light=x}return I}function b(S,C,x,T,I){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&I===Fs)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let W=e.update(S),$=S.material;if(Array.isArray($)){let B=W.groups;for(let q=0,H=B.length;q<H;q++){let Z=B[q],Q=$[Z.materialIndex];if(Q&&Q.visible){let he=A(S,Q,T,I);S.onBeforeShadow(n,S,C,x,W,he,Z),n.renderBufferDirect(x,null,W,he,S,Z),S.onAfterShadow(n,S,C,x,W,he,Z)}}}else if($.visible){let B=A(S,$,T,I);S.onBeforeShadow(n,S,C,x,W,B,null),n.renderBufferDirect(x,null,W,B,S,null),S.onAfterShadow(n,S,C,x,W,B,null)}}let F=S.children;for(let W=0,$=F.length;W<$;W++)b(F[W],C,x,T,I)}function E(S){S.target.removeEventListener("dispose",E);for(let x in c){let T=c[x],I=S.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function wx(n,e){function t(){let P=!1,ie=new ct,Y=null,ae=new ct(0,0,0,0);return{setMask:function(fe){Y!==fe&&!P&&(n.colorMask(fe,fe,fe,fe),Y=fe)},setLocked:function(fe){P=fe},setClear:function(fe,J,be,_e,dt){dt===!0&&(fe*=_e,J*=_e,be*=_e),ie.set(fe,J,be,_e),ae.equals(ie)===!1&&(n.clearColor(fe,J,be,_e),ae.copy(ie))},reset:function(){P=!1,Y=null,ae.set(-1,0,0,0)}}}function i(){let P=!1,ie=!1,Y=null,ae=null,fe=null;return{setReversed:function(J){if(ie!==J){let be=e.get("EXT_clip_control");J?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ie=J;let _e=fe;fe=null,this.setClear(_e)}},getReversed:function(){return ie},setTest:function(J){J?ee(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(J){Y!==J&&!P&&(n.depthMask(J),Y=J)},setFunc:function(J){if(ie&&(J=Dd[J]),ae!==J){switch(J){case Yo:n.depthFunc(n.NEVER);break;case jo:n.depthFunc(n.ALWAYS);break;case $o:n.depthFunc(n.LESS);break;case Xn:n.depthFunc(n.LEQUAL);break;case Ko:n.depthFunc(n.EQUAL);break;case Zo:n.depthFunc(n.GEQUAL);break;case Jo:n.depthFunc(n.GREATER);break;case Qo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=J}},setLocked:function(J){P=J},setClear:function(J){fe!==J&&(fe=J,ie&&(J=1-J),n.clearDepth(J))},reset:function(){P=!1,Y=null,ae=null,fe=null,ie=!1}}}function s(){let P=!1,ie=null,Y=null,ae=null,fe=null,J=null,be=null,_e=null,dt=null;return{setTest:function(st){P||(st?ee(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(st){ie!==st&&!P&&(n.stencilMask(st),ie=st)},setFunc:function(st,Ci,Ii){(Y!==st||ae!==Ci||fe!==Ii)&&(n.stencilFunc(st,Ci,Ii),Y=st,ae=Ci,fe=Ii)},setOp:function(st,Ci,Ii){(J!==st||be!==Ci||_e!==Ii)&&(n.stencilOp(st,Ci,Ii),J=st,be=Ci,_e=Ii)},setLocked:function(st){P=st},setClear:function(st){dt!==st&&(n.clearStencil(st),dt=st)},reset:function(){P=!1,ie=null,Y=null,ae=null,fe=null,J=null,be=null,_e=null,dt=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},p=new WeakMap,g=[],y=null,m=!1,f=null,M=null,A=null,b=null,E=null,S=null,C=null,x=new Ae(0,0,0),T=0,I=!1,R=null,F=null,W=null,$=null,B=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Z=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Q)[1]),H=Z>=1):Q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),H=Z>=2);let he=null,pe={},xe=n.getParameter(n.SCISSOR_BOX),We=n.getParameter(n.VIEWPORT),ht=new ct().fromArray(xe),Xe=new ct().fromArray(We);function K(P,ie,Y,ae){let fe=new Uint8Array(4),J=n.createTexture();n.bindTexture(P,J),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let be=0;be<Y;be++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,ae,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(ie+be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return J}let ne={};ne[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(n.DEPTH_TEST),o.setFunc(Xn),_t(!1),wt(Nc),ee(n.CULL_FACE),qe(fi);function ee(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function Pe(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function Le(P,ie){return u[P]!==ie?(n.bindFramebuffer(P,ie),u[P]=ie,P===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ie),P===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ie(P,ie){let Y=g,ae=!1;if(P){Y=p.get(ie),Y===void 0&&(Y=[],p.set(ie,Y));let fe=P.textures;if(Y.length!==fe.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let J=0,be=fe.length;J<be;J++)Y[J]=n.COLOR_ATTACHMENT0+J;Y.length=fe.length,ae=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,ae=!0);ae&&n.drawBuffers(Y)}function mt(P){return y!==P?(n.useProgram(P),y=P,!0):!1}let Be={[gn]:n.FUNC_ADD,[td]:n.FUNC_SUBTRACT,[id]:n.FUNC_REVERSE_SUBTRACT};Be[nd]=n.MIN,Be[sd]=n.MAX;let Qe={[rd]:n.ZERO,[od]:n.ONE,[ad]:n.SRC_COLOR,[Xo]:n.SRC_ALPHA,[fd]:n.SRC_ALPHA_SATURATE,[ud]:n.DST_COLOR,[cd]:n.DST_ALPHA,[ld]:n.ONE_MINUS_SRC_COLOR,[qo]:n.ONE_MINUS_SRC_ALPHA,[dd]:n.ONE_MINUS_DST_COLOR,[hd]:n.ONE_MINUS_DST_ALPHA,[pd]:n.CONSTANT_COLOR,[md]:n.ONE_MINUS_CONSTANT_COLOR,[gd]:n.CONSTANT_ALPHA,[vd]:n.ONE_MINUS_CONSTANT_ALPHA};function qe(P,ie,Y,ae,fe,J,be,_e,dt,st){if(P===fi){m===!0&&(Pe(n.BLEND),m=!1);return}if(m===!1&&(ee(n.BLEND),m=!0),P!==ed){if(P!==f||st!==I){if((M!==gn||E!==gn)&&(n.blendEquation(n.FUNC_ADD),M=gn,E=gn),st)switch(P){case Wn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ki:n.blendFunc(n.ONE,n.ONE);break;case Uc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ce("WebGLState: Invalid blending: ",P);break}else switch(P){case Wn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Uc:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fc:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",P);break}A=null,b=null,S=null,C=null,x.set(0,0,0),T=0,f=P,I=st}return}fe=fe||ie,J=J||Y,be=be||ae,(ie!==M||fe!==E)&&(n.blendEquationSeparate(Be[ie],Be[fe]),M=ie,E=fe),(Y!==A||ae!==b||J!==S||be!==C)&&(n.blendFuncSeparate(Qe[Y],Qe[ae],Qe[J],Qe[be]),A=Y,b=ae,S=J,C=be),(_e.equals(x)===!1||dt!==T)&&(n.blendColor(_e.r,_e.g,_e.b,dt),x.copy(_e),T=dt),f=P,I=!1}function He(P,ie){P.side===Oi?Pe(n.CULL_FACE):ee(n.CULL_FACE);let Y=P.side===Kt;ie&&(Y=!Y),_t(Y),P.blending===Wn&&P.transparent===!1?qe(fi):qe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);let ae=P.stencilWrite;a.setTest(ae),ae&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Nt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function _t(P){R!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),R=P)}function wt(P){P!==Zu?(ee(n.CULL_FACE),P!==F&&(P===Nc?n.cullFace(n.BACK):P===Ju?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),F=P}function It(P){P!==W&&(H&&n.lineWidth(P),W=P)}function Nt(P,ie,Y){P?(ee(n.POLYGON_OFFSET_FILL),($!==ie||B!==Y)&&($=ie,B=Y,o.getReversed()&&(ie=-ie),n.polygonOffset(ie,Y))):Pe(n.POLYGON_OFFSET_FILL)}function ut(P){P?ee(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function yt(P){P===void 0&&(P=n.TEXTURE0+q-1),he!==P&&(n.activeTexture(P),he=P)}function L(P,ie,Y){Y===void 0&&(he===null?Y=n.TEXTURE0+q-1:Y=he);let ae=pe[Y];ae===void 0&&(ae={type:void 0,texture:void 0},pe[Y]=ae),(ae.type!==P||ae.texture!==ie)&&(he!==Y&&(n.activeTexture(Y),he=Y),n.bindTexture(P,ie||ne[P]),ae.type=P,ae.texture=ie)}function Zt(){let P=pe[he];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function je(){try{n.compressedTexImage2D(...arguments)}catch(P){Ce("WebGLState:",P)}}function w(){try{n.compressedTexImage3D(...arguments)}catch(P){Ce("WebGLState:",P)}}function v(){try{n.texSubImage2D(...arguments)}catch(P){Ce("WebGLState:",P)}}function U(){try{n.texSubImage3D(...arguments)}catch(P){Ce("WebGLState:",P)}}function z(){try{n.compressedTexSubImage2D(...arguments)}catch(P){Ce("WebGLState:",P)}}function G(){try{n.compressedTexSubImage3D(...arguments)}catch(P){Ce("WebGLState:",P)}}function te(){try{n.texStorage2D(...arguments)}catch(P){Ce("WebGLState:",P)}}function se(){try{n.texStorage3D(...arguments)}catch(P){Ce("WebGLState:",P)}}function X(){try{n.texImage2D(...arguments)}catch(P){Ce("WebGLState:",P)}}function j(){try{n.texImage3D(...arguments)}catch(P){Ce("WebGLState:",P)}}function re(P){return d[P]!==void 0?d[P]:n.getParameter(P)}function Se(P,ie){d[P]!==ie&&(n.pixelStorei(P,ie),d[P]=ie)}function le(P){ht.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),ht.copy(P))}function oe(P){Xe.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Xe.copy(P))}function Ee(P,ie){let Y=c.get(ie);Y===void 0&&(Y=new WeakMap,c.set(ie,Y));let ae=Y.get(P);ae===void 0&&(ae=n.getUniformBlockIndex(ie,P.name),Y.set(P,ae))}function Re(P,ie){let ae=c.get(ie).get(P);l.get(ie)!==ae&&(n.uniformBlockBinding(ie,ae,P.__bindingPointIndex),l.set(ie,ae))}function Ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},he=null,pe={},u={},p=new WeakMap,g=[],y=null,m=!1,f=null,M=null,A=null,b=null,E=null,S=null,C=null,x=new Ae(0,0,0),T=0,I=!1,R=null,F=null,W=null,$=null,B=null,ht.set(0,0,n.canvas.width,n.canvas.height),Xe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:Pe,bindFramebuffer:Le,drawBuffers:Ie,useProgram:mt,setBlending:qe,setMaterial:He,setFlipSided:_t,setCullFace:wt,setLineWidth:It,setPolygonOffset:Nt,setScissorTest:ut,activeTexture:yt,bindTexture:L,unbindTexture:Zt,compressedTexImage2D:je,compressedTexImage3D:w,texImage2D:X,texImage3D:j,pixelStorei:Se,getParameter:re,updateUBOMapping:Ee,uniformBlockBinding:Re,texStorage2D:te,texStorage3D:se,texSubImage2D:v,texSubImage3D:U,compressedTexSubImage2D:z,compressedTexSubImage3D:G,scissor:le,viewport:oe,reset:Ne}}function Ex(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,h=new WeakMap,d=new Set,u,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,v){return g?new OffscreenCanvas(w,v):ur("canvas")}function m(w,v,U){let z=1,G=je(w);if((G.width>U||G.height>U)&&(z=U/Math.max(G.width,G.height)),z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let te=Math.floor(z*G.width),se=Math.floor(z*G.height);u===void 0&&(u=y(te,se));let X=v?y(te,se):u;return X.width=te,X.height=se,X.getContext("2d").drawImage(w,0,0,te,se),Te("WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+te+"x"+se+")."),X}else return"data"in w&&Te("WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),w;return w}function f(w){return w.generateMipmaps}function M(w){n.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(w,v,U,z,G,te=!1){if(w!==null){if(n[w]!==void 0)return n[w];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let se;z&&(se=e.get("EXT_texture_norm16"),se||Te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=v;if(v===n.RED&&(U===n.FLOAT&&(X=n.R32F),U===n.HALF_FLOAT&&(X=n.R16F),U===n.UNSIGNED_BYTE&&(X=n.R8),U===n.UNSIGNED_SHORT&&se&&(X=se.R16_EXT),U===n.SHORT&&se&&(X=se.R16_SNORM_EXT)),v===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(X=n.R8UI),U===n.UNSIGNED_SHORT&&(X=n.R16UI),U===n.UNSIGNED_INT&&(X=n.R32UI),U===n.BYTE&&(X=n.R8I),U===n.SHORT&&(X=n.R16I),U===n.INT&&(X=n.R32I)),v===n.RG&&(U===n.FLOAT&&(X=n.RG32F),U===n.HALF_FLOAT&&(X=n.RG16F),U===n.UNSIGNED_BYTE&&(X=n.RG8),U===n.UNSIGNED_SHORT&&se&&(X=se.RG16_EXT),U===n.SHORT&&se&&(X=se.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(X=n.RG8UI),U===n.UNSIGNED_SHORT&&(X=n.RG16UI),U===n.UNSIGNED_INT&&(X=n.RG32UI),U===n.BYTE&&(X=n.RG8I),U===n.SHORT&&(X=n.RG16I),U===n.INT&&(X=n.RG32I)),v===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(X=n.RGB8UI),U===n.UNSIGNED_SHORT&&(X=n.RGB16UI),U===n.UNSIGNED_INT&&(X=n.RGB32UI),U===n.BYTE&&(X=n.RGB8I),U===n.SHORT&&(X=n.RGB16I),U===n.INT&&(X=n.RGB32I)),v===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),U===n.UNSIGNED_INT&&(X=n.RGBA32UI),U===n.BYTE&&(X=n.RGBA8I),U===n.SHORT&&(X=n.RGBA16I),U===n.INT&&(X=n.RGBA32I)),v===n.RGB&&(U===n.UNSIGNED_SHORT&&se&&(X=se.RGB16_EXT),U===n.SHORT&&se&&(X=se.RGB16_SNORM_EXT),U===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),v===n.RGBA){let j=te?hr:Ve.getTransfer(G);U===n.FLOAT&&(X=n.RGBA32F),U===n.HALF_FLOAT&&(X=n.RGBA16F),U===n.UNSIGNED_BYTE&&(X=j===Ye?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT&&se&&(X=se.RGBA16_EXT),U===n.SHORT&&se&&(X=se.RGBA16_SNORM_EXT),U===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function E(w,v){let U;return w?v===null||v===Ei||v===ks?U=n.DEPTH24_STENCIL8:v===Ti?U=n.DEPTH32F_STENCIL8:v===Os&&(U=n.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ei||v===ks?U=n.DEPTH_COMPONENT24:v===Ti?U=n.DEPTH_COMPONENT32F:v===Os&&(U=n.DEPTH_COMPONENT16),U}function S(w,v){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==Lt&&w.minFilter!==Ot?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function C(w){let v=w.target;v.removeEventListener("dispose",C),T(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function x(w){let v=w.target;v.removeEventListener("dispose",x),R(v)}function T(w){let v=i.get(w);if(v.__webglInit===void 0)return;let U=w.source,z=p.get(U);if(z){let G=z[v.__cacheKey];G.usedTimes--,G.usedTimes===0&&I(w),Object.keys(z).length===0&&p.delete(U)}i.remove(w)}function I(w){let v=i.get(w);n.deleteTexture(v.__webglTexture);let U=w.source,z=p.get(U);delete z[v.__cacheKey],o.memory.textures--}function R(w){let v=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(v.__webglFramebuffer[z]))for(let G=0;G<v.__webglFramebuffer[z].length;G++)n.deleteFramebuffer(v.__webglFramebuffer[z][G]);else n.deleteFramebuffer(v.__webglFramebuffer[z]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[z])}else{if(Array.isArray(v.__webglFramebuffer))for(let z=0;z<v.__webglFramebuffer.length;z++)n.deleteFramebuffer(v.__webglFramebuffer[z]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let z=0;z<v.__webglColorRenderbuffer.length;z++)v.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[z]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let U=w.textures;for(let z=0,G=U.length;z<G;z++){let te=i.get(U[z]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove(U[z])}i.remove(w)}let F=0;function W(){F=0}function $(){return F}function B(w){F=w}function q(){let w=F;return w>=s.maxTextures&&Te("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),F+=1,w}function H(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function Z(w,v){let U=i.get(w);if(w.isVideoTexture&&L(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&U.__version!==w.version){let z=w.image;if(z===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(U,w,v);return}}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+v)}function Q(w,v){let U=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){Pe(U,w,v);return}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+v)}function he(w,v){let U=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){Pe(U,w,v);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+v)}function pe(w,v){let U=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&U.__version!==w.version){Le(U,w,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+v)}let xe={[ea]:n.REPEAT,[Ni]:n.CLAMP_TO_EDGE,[ta]:n.MIRRORED_REPEAT},We={[Lt]:n.NEAREST,[yd]:n.NEAREST_MIPMAP_NEAREST,[Nr]:n.NEAREST_MIPMAP_LINEAR,[Ot]:n.LINEAR,[Pa]:n.LINEAR_MIPMAP_NEAREST,[An]:n.LINEAR_MIPMAP_LINEAR},ht={[Md]:n.NEVER,[Cd]:n.ALWAYS,[wd]:n.LESS,[pl]:n.LEQUAL,[Ed]:n.EQUAL,[ml]:n.GEQUAL,[Td]:n.GREATER,[Ad]:n.NOTEQUAL};function Xe(w,v){if(v.type===Ti&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ot||v.magFilter===Pa||v.magFilter===Nr||v.magFilter===An||v.minFilter===Ot||v.minFilter===Pa||v.minFilter===Nr||v.minFilter===An)&&Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,xe[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,xe[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,xe[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,We[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,We[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,ht[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Lt||v.minFilter!==Nr&&v.minFilter!==An||v.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function K(w,v){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",C));let z=v.source,G=p.get(z);G===void 0&&(G={},p.set(z,G));let te=H(v);if(te!==w.__cacheKey){G[te]===void 0&&(G[te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),G[te].usedTimes++;let se=G[w.__cacheKey];se!==void 0&&(G[w.__cacheKey].usedTimes--,se.usedTimes===0&&I(v)),w.__cacheKey=te,w.__webglTexture=G[te].texture}return U}function ne(w,v,U){return Math.floor(Math.floor(w/U)/v)}function ee(w,v,U,z){let te=w.updateRanges;if(te.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,U,z,v.data);else{te.sort((Se,le)=>Se.start-le.start);let se=0;for(let Se=1;Se<te.length;Se++){let le=te[se],oe=te[Se],Ee=le.start+le.count,Re=ne(oe.start,v.width,4),Ne=ne(le.start,v.width,4);oe.start<=Ee+1&&Re===Ne&&ne(oe.start+oe.count-1,v.width,4)===Re?le.count=Math.max(le.count,oe.start+oe.count-le.start):(++se,te[se]=oe)}te.length=se+1;let X=t.getParameter(n.UNPACK_ROW_LENGTH),j=t.getParameter(n.UNPACK_SKIP_PIXELS),re=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Se=0,le=te.length;Se<le;Se++){let oe=te[Se],Ee=Math.floor(oe.start/4),Re=Math.ceil(oe.count/4),Ne=Ee%v.width,P=Math.floor(Ee/v.width),ie=Re,Y=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(n.UNPACK_SKIP_ROWS,P),t.texSubImage2D(n.TEXTURE_2D,0,Ne,P,ie,Y,U,z,v.data)}w.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,X),t.pixelStorei(n.UNPACK_SKIP_PIXELS,j),t.pixelStorei(n.UNPACK_SKIP_ROWS,re)}}function Pe(w,v,U){let z=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(z=n.TEXTURE_3D);let G=K(w,v),te=v.source;t.bindTexture(z,w.__webglTexture,n.TEXTURE0+U);let se=i.get(te);if(te.version!==se.__version||G===!0){if(t.activeTexture(n.TEXTURE0+U),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let Y=Ve.getPrimaries(Ve.workingColorSpace),ae=v.colorSpace===nn?null:Ve.getPrimaries(v.colorSpace),fe=v.colorSpace===nn||Y===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let j=m(v.image,!1,s.maxTextureSize);j=Zt(v,j);let re=r.convert(v.format,v.colorSpace),Se=r.convert(v.type),le=b(v.internalFormat,re,Se,v.normalized,v.colorSpace,v.isVideoTexture);Xe(z,v);let oe,Ee=v.mipmaps,Re=v.isVideoTexture!==!0,Ne=se.__version===void 0||G===!0,P=te.dataReady,ie=S(v,j);if(v.isDepthTexture)le=E(v.format===Cn,v.type),Ne&&(Re?t.texStorage2D(n.TEXTURE_2D,1,le,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,le,j.width,j.height,0,re,Se,null));else if(v.isDataTexture)if(Ee.length>0){Re&&Ne&&t.texStorage2D(n.TEXTURE_2D,ie,le,Ee[0].width,Ee[0].height);for(let Y=0,ae=Ee.length;Y<ae;Y++)oe=Ee[Y],Re?P&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,oe.width,oe.height,re,Se,oe.data):t.texImage2D(n.TEXTURE_2D,Y,le,oe.width,oe.height,0,re,Se,oe.data);v.generateMipmaps=!1}else Re?(Ne&&t.texStorage2D(n.TEXTURE_2D,ie,le,j.width,j.height),P&&ee(v,j,re,Se)):t.texImage2D(n.TEXTURE_2D,0,le,j.width,j.height,0,re,Se,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Re&&Ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,le,Ee[0].width,Ee[0].height,j.depth);for(let Y=0,ae=Ee.length;Y<ae;Y++)if(oe=Ee[Y],v.format!==pi)if(re!==null)if(Re){if(P)if(v.layerUpdates.size>0){let fe=oh(oe.width,oe.height,v.format,v.type);for(let J of v.layerUpdates){let be=oe.data.subarray(J*fe/oe.data.BYTES_PER_ELEMENT,(J+1)*fe/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,J,oe.width,oe.height,1,re,be)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,oe.width,oe.height,j.depth,re,oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,le,oe.width,oe.height,j.depth,0,oe.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?P&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,oe.width,oe.height,j.depth,re,Se,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,le,oe.width,oe.height,j.depth,0,re,Se,oe.data)}else{Re&&Ne&&t.texStorage2D(n.TEXTURE_2D,ie,le,Ee[0].width,Ee[0].height);for(let Y=0,ae=Ee.length;Y<ae;Y++)oe=Ee[Y],v.format!==pi?re!==null?Re?P&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,oe.width,oe.height,re,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,le,oe.width,oe.height,0,oe.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?P&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,oe.width,oe.height,re,Se,oe.data):t.texImage2D(n.TEXTURE_2D,Y,le,oe.width,oe.height,0,re,Se,oe.data)}else if(v.isDataArrayTexture)if(Re){if(Ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,le,j.width,j.height,j.depth),P)if(v.layerUpdates.size>0){let Y=oh(j.width,j.height,v.format,v.type);for(let ae of v.layerUpdates){let fe=j.data.subarray(ae*Y/j.data.BYTES_PER_ELEMENT,(ae+1)*Y/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,j.width,j.height,1,re,Se,fe)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,re,Se,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,le,j.width,j.height,j.depth,0,re,Se,j.data);else if(v.isData3DTexture)Re?(Ne&&t.texStorage3D(n.TEXTURE_3D,ie,le,j.width,j.height,j.depth),P&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,re,Se,j.data)):t.texImage3D(n.TEXTURE_3D,0,le,j.width,j.height,j.depth,0,re,Se,j.data);else if(v.isFramebufferTexture){if(Ne)if(Re)t.texStorage2D(n.TEXTURE_2D,ie,le,j.width,j.height);else{let Y=j.width,ae=j.height;for(let fe=0;fe<ie;fe++)t.texImage2D(n.TEXTURE_2D,fe,le,Y,ae,0,re,Se,null),Y>>=1,ae>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let Y=n.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),j.parentNode!==Y){Y.appendChild(j),d.add(v),Y.onpaint=ae=>{let fe=ae.changedElements;for(let J of d)fe.includes(J.image)&&(J.needsUpdate=!0)},Y.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,j);else{let fe=n.RGBA,J=n.RGBA,be=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,fe,J,be,j)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(Re&&Ne){let Y=je(Ee[0]);t.texStorage2D(n.TEXTURE_2D,ie,le,Y.width,Y.height)}for(let Y=0,ae=Ee.length;Y<ae;Y++)oe=Ee[Y],Re?P&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,re,Se,oe):t.texImage2D(n.TEXTURE_2D,Y,le,re,Se,oe);v.generateMipmaps=!1}else if(Re){if(Ne){let Y=je(j);t.texStorage2D(n.TEXTURE_2D,ie,le,Y.width,Y.height)}P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re,Se,j)}else t.texImage2D(n.TEXTURE_2D,0,le,re,Se,j);f(v)&&M(z),se.__version=te.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Le(w,v,U){if(v.image.length!==6)return;let z=K(w,v),G=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+U);let te=i.get(G);if(G.version!==te.__version||z===!0){t.activeTexture(n.TEXTURE0+U);let se=Ve.getPrimaries(Ve.workingColorSpace),X=v.colorSpace===nn?null:Ve.getPrimaries(v.colorSpace),j=v.colorSpace===nn||se===X?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let re=v.isCompressedTexture||v.image[0].isCompressedTexture,Se=v.image[0]&&v.image[0].isDataTexture,le=[];for(let J=0;J<6;J++)!re&&!Se?le[J]=m(v.image[J],!0,s.maxCubemapSize):le[J]=Se?v.image[J].image:v.image[J],le[J]=Zt(v,le[J]);let oe=le[0],Ee=r.convert(v.format,v.colorSpace),Re=r.convert(v.type),Ne=b(v.internalFormat,Ee,Re,v.normalized,v.colorSpace),P=v.isVideoTexture!==!0,ie=te.__version===void 0||z===!0,Y=G.dataReady,ae=S(v,oe);Xe(n.TEXTURE_CUBE_MAP,v);let fe;if(re){P&&ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,Ne,oe.width,oe.height);for(let J=0;J<6;J++){fe=le[J].mipmaps;for(let be=0;be<fe.length;be++){let _e=fe[be];v.format!==pi?Ee!==null?P?Y&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,be,0,0,_e.width,_e.height,Ee,_e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,be,Ne,_e.width,_e.height,0,_e.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,be,0,0,_e.width,_e.height,Ee,Re,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,be,Ne,_e.width,_e.height,0,Ee,Re,_e.data)}}}else{if(fe=v.mipmaps,P&&ie){fe.length>0&&ae++;let J=je(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,Ne,J.width,J.height)}for(let J=0;J<6;J++)if(Se){P?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,le[J].width,le[J].height,Ee,Re,le[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ne,le[J].width,le[J].height,0,Ee,Re,le[J].data);for(let be=0;be<fe.length;be++){let dt=fe[be].image[J].image;P?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,be+1,0,0,dt.width,dt.height,Ee,Re,dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,be+1,Ne,dt.width,dt.height,0,Ee,Re,dt.data)}}else{P?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ee,Re,le[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ne,Ee,Re,le[J]);for(let be=0;be<fe.length;be++){let _e=fe[be];P?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,be+1,0,0,Ee,Re,_e.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,be+1,Ne,Ee,Re,_e.image[J])}}}f(v)&&M(n.TEXTURE_CUBE_MAP),te.__version=G.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Ie(w,v,U,z,G,te){let se=r.convert(U.format,U.colorSpace),X=r.convert(U.type),j=b(U.internalFormat,se,X,U.normalized,U.colorSpace),re=i.get(v),Se=i.get(U);if(Se.__renderTarget=v,!re.__hasExternalTextures){let le=Math.max(1,v.width>>te),oe=Math.max(1,v.height>>te);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?t.texImage3D(G,te,j,le,oe,v.depth,0,se,X,null):t.texImage2D(G,te,j,le,oe,0,se,X,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),yt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,G,Se.__webglTexture,0,ut(v)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,G,Se.__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(w,v,U){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){let z=v.depthTexture,G=z&&z.isDepthTexture?z.type:null,te=E(v.stencilBuffer,G),se=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;yt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut(v),te,v.width,v.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut(v),te,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,te,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,w)}else{let z=v.textures;for(let G=0;G<z.length;G++){let te=z[G],se=r.convert(te.format,te.colorSpace),X=r.convert(te.type),j=b(te.internalFormat,se,X,te.normalized,te.colorSpace);yt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut(v),j,v.width,v.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut(v),j,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,j,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(w,v,U){let z=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let G=i.get(v.depthTexture);if(G.__renderTarget=v,(!G.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),z){if(G.__webglInit===void 0&&(G.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),G.__webglTexture===void 0){G.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,v.depthTexture);let re=r.convert(v.depthTexture.format),Se=r.convert(v.depthTexture.type),le;v.depthTexture.format===Ui?le=n.DEPTH_COMPONENT24:v.depthTexture.format===Cn&&(le=n.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,le,v.width,v.height,0,re,Se,null)}}else Z(v.depthTexture,0);let te=G.__webglTexture,se=ut(v),X=z?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,j=v.depthTexture.format===Cn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ui)yt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,X,te,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,j,X,te,0);else if(v.depthTexture.format===Cn)yt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,X,te,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,j,X,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qe(w){let v=i.get(w),U=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){let z=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),z){let G=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,z.removeEventListener("dispose",G)};z.addEventListener("dispose",G),v.__depthDisposeCallback=G}v.__boundDepthTexture=z}if(w.depthTexture&&!v.__autoAllocateDepthBuffer)if(U)for(let z=0;z<6;z++)Be(v.__webglFramebuffer[z],w,z);else{let z=w.texture.mipmaps;z&&z.length>0?Be(v.__webglFramebuffer[0],w,0):Be(v.__webglFramebuffer,w,0)}else if(U){v.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[z]),v.__webglDepthbuffer[z]===void 0)v.__webglDepthbuffer[z]=n.createRenderbuffer(),mt(v.__webglDepthbuffer[z],w,!1);else{let G=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=v.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,te)}}else{let z=w.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),mt(v.__webglDepthbuffer,w,!1);else{let G=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,te)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function qe(w,v,U){let z=i.get(w);v!==void 0&&Ie(z.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Qe(w)}function He(w){let v=w.texture,U=i.get(w),z=i.get(v);w.addEventListener("dispose",x);let G=w.textures,te=w.isWebGLCubeRenderTarget===!0,se=G.length>1;if(se||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=v.version,o.memory.textures++),te){U.__webglFramebuffer=[];for(let X=0;X<6;X++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[X]=[];for(let j=0;j<v.mipmaps.length;j++)U.__webglFramebuffer[X][j]=n.createFramebuffer()}else U.__webglFramebuffer[X]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let X=0;X<v.mipmaps.length;X++)U.__webglFramebuffer[X]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(se)for(let X=0,j=G.length;X<j;X++){let re=i.get(G[X]);re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&yt(w)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let X=0;X<G.length;X++){let j=G[X];U.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[X]);let re=r.convert(j.format,j.colorSpace),Se=r.convert(j.type),le=b(j.internalFormat,re,Se,j.normalized,j.colorSpace,w.isXRRenderTarget===!0),oe=ut(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,le,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,U.__webglColorRenderbuffer[X])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),mt(U.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,v);for(let X=0;X<6;X++)if(v.mipmaps&&v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)Ie(U.__webglFramebuffer[X][j],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,j);else Ie(U.__webglFramebuffer[X],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);f(v)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let X=0,j=G.length;X<j;X++){let re=G[X],Se=i.get(re),le=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,Se.__webglTexture),Xe(le,re),Ie(U.__webglFramebuffer,w,re,n.COLOR_ATTACHMENT0+X,le,0),f(re)&&M(le)}t.unbindTexture()}else{let X=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(X=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(X,z.__webglTexture),Xe(X,v),v.mipmaps&&v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)Ie(U.__webglFramebuffer[j],w,v,n.COLOR_ATTACHMENT0,X,j);else Ie(U.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,X,0);f(v)&&M(X),t.unbindTexture()}w.depthBuffer&&Qe(w)}function _t(w){let v=w.textures;for(let U=0,z=v.length;U<z;U++){let G=v[U];if(f(G)){let te=A(w),se=i.get(G).__webglTexture;t.bindTexture(te,se),M(te),t.unbindTexture()}}}let wt=[],It=[];function Nt(w){if(w.samples>0){if(yt(w)===!1){let v=w.textures,U=w.width,z=w.height,G=n.COLOR_BUFFER_BIT,te=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(w),X=v.length>1;if(X)for(let re=0;re<v.length;re++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);let j=w.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let re=0;re<v.length;re++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),X){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[re]);let Se=i.get(v[re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Se,0)}n.blitFramebuffer(0,0,U,z,0,0,U,z,G,n.NEAREST),l===!0&&(wt.length=0,It.length=0,wt.push(n.COLOR_ATTACHMENT0+re),w.depthBuffer&&w.resolveDepthBuffer===!1&&(wt.push(te),It.push(te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,It)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,wt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),X)for(let re=0;re<v.length;re++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,se.__webglColorRenderbuffer[re]);let Se=i.get(v[re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,Se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function ut(w){return Math.min(s.maxSamples,w.samples)}function yt(w){let v=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function L(w){let v=o.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function Zt(w,v){let U=w.colorSpace,z=w.format,G=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||U!==cr&&U!==nn&&(Ve.getTransfer(U)===Ye?(z!==pi||G!==Jt)&&Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",U)),v}function je(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=W,this.getTextureUnits=$,this.setTextureUnits=B,this.setTexture2D=Z,this.setTexture2DArray=Q,this.setTexture3D=he,this.setTextureCube=pe,this.rebindTextures=qe,this.setupRenderTarget=He,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=yt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Tx(n,e){function t(i,s=nn){let r,o=Ve.getTransfer(s);if(i===Jt)return n.UNSIGNED_BYTE;if(i===La)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Na)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$c)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===qc)return n.BYTE;if(i===Yc)return n.SHORT;if(i===Os)return n.UNSIGNED_SHORT;if(i===Da)return n.INT;if(i===Ei)return n.UNSIGNED_INT;if(i===Ti)return n.FLOAT;if(i===Wt)return n.HALF_FLOAT;if(i===Kc)return n.ALPHA;if(i===Zc)return n.RGB;if(i===pi)return n.RGBA;if(i===Ui)return n.DEPTH_COMPONENT;if(i===Cn)return n.DEPTH_STENCIL;if(i===Jc)return n.RED;if(i===Ua)return n.RED_INTEGER;if(i===In)return n.RG;if(i===Fa)return n.RG_INTEGER;if(i===Oa)return n.RGBA_INTEGER;if(i===Ur||i===Fr||i===Or||i===kr)if(o===Ye)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ka||i===Ba||i===za||i===Va)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ha||i===Ga||i===Wa||i===Xa||i===qa||i===Br||i===Ya)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ha||i===Ga)return o===Ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wa)return o===Ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xa)return r.COMPRESSED_R11_EAC;if(i===qa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Br)return r.COMPRESSED_RG11_EAC;if(i===Ya)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ja||i===$a||i===Ka||i===Za||i===Ja||i===Qa||i===el||i===tl||i===il||i===nl||i===sl||i===rl||i===ol||i===al)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ja)return o===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$a)return o===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ka)return o===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Za)return o===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ja)return o===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qa)return o===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===el)return o===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tl)return o===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===il)return o===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nl)return o===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sl)return o===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rl)return o===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ol)return o===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===al)return o===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ll||i===cl||i===hl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ll)return o===Ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ul||i===dl||i===zr||i===fl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ul)return r.COMPRESSED_RED_RGTC1_EXT;if(i===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new br(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new xt({vertexShader:Ax,fragmentShader:Cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new Sr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Th=class extends Mi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,y=typeof XRWebGLBinding<"u",m=new Eh,f={},M=t.getContextAttributes(),A=null,b=null,E=[],S=[],C=new me,x=null,T=new Ft;T.viewport=new ct;let I=new Ft;I.viewport=new ct;let R=[T,I],F=new Aa,W=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=E[K];return ne===void 0&&(ne=new Rs,E[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=E[K];return ne===void 0&&(ne=new Rs,E[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=E[K];return ne===void 0&&(ne=new Rs,E[K]=ne),ne.getHandSpace()};function B(K){let ne=S.indexOf(K.inputSource);if(ne===-1)return;let ee=E[ne];ee!==void 0&&(ee.update(K.inputSource,K.frame,c||o),ee.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",H);for(let K=0;K<E.length;K++){let ne=S[K];ne!==null&&(S[K]=null,E[K].disconnect(ne))}W=null,$=null,m.reset();for(let K in f)delete f[K];e.setRenderTarget(A),p=null,u=null,d=null,s=null,b=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",q),s.addEventListener("inputsourceschange",H),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Pe=null,Le=null;M.depth&&(Le=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=M.stencil?Cn:Ui,Pe=M.stencil?ks:Ei);let Ie={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ie),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Et(u.textureWidth,u.textureHeight,{format:pi,type:Jt,depthTexture:new tn(u.textureWidth,u.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let ee={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Et(p.framebufferWidth,p.framebufferHeight,{format:pi,type:Jt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Xe.setContext(s),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(K){for(let ne=0;ne<K.removed.length;ne++){let ee=K.removed[ne],Pe=S.indexOf(ee);Pe>=0&&(S[Pe]=null,E[Pe].disconnect(ee))}for(let ne=0;ne<K.added.length;ne++){let ee=K.added[ne],Pe=S.indexOf(ee);if(Pe===-1){for(let Ie=0;Ie<E.length;Ie++)if(Ie>=S.length){S.push(ee),Pe=Ie;break}else if(S[Ie]===null){S[Ie]=ee,Pe=Ie;break}if(Pe===-1)break}let Le=E[Pe];Le&&Le.connect(ee)}}let Z=new D,Q=new D;function he(K,ne,ee){Z.setFromMatrixPosition(ne.matrixWorld),Q.setFromMatrixPosition(ee.matrixWorld);let Pe=Z.distanceTo(Q),Le=ne.projectionMatrix.elements,Ie=ee.projectionMatrix.elements,mt=Le[14]/(Le[10]-1),Be=Le[14]/(Le[10]+1),Qe=(Le[9]+1)/Le[5],qe=(Le[9]-1)/Le[5],He=(Le[8]-1)/Le[0],_t=(Ie[8]+1)/Ie[0],wt=mt*He,It=mt*_t,Nt=Pe/(-He+_t),ut=Nt*-He;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ut),K.translateZ(Nt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Le[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let yt=mt+Nt,L=Be+Nt,Zt=wt-ut,je=It+(Pe-ut),w=Qe*Be/L*yt,v=qe*Be/L*yt;K.projectionMatrix.makePerspective(Zt,je,w,v,yt,L),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function pe(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ne=K.near,ee=K.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(ee=m.depthFar)),F.near=I.near=T.near=ne,F.far=I.far=T.far=ee,(W!==F.near||$!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),W=F.near,$=F.far),F.layers.mask=K.layers.mask|6,T.layers.mask=F.layers.mask&-5,I.layers.mask=F.layers.mask&-3;let Pe=K.parent,Le=F.cameras;pe(F,Pe);for(let Ie=0;Ie<Le.length;Ie++)pe(Le[Ie],Pe);Le.length===2?he(F,T,I):F.projectionMatrix.copy(T.projectionMatrix),xe(K,F,Pe)};function xe(K,ne,ee){ee===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(ee.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=As*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(K){return f[K]};let We=null;function ht(K,ne){if(h=ne.getViewerPose(c||o),g=ne,h!==null){let ee=h.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let Pe=!1;ee.length!==F.cameras.length&&(F.cameras.length=0,Pe=!0);for(let Be=0;Be<ee.length;Be++){let Qe=ee[Be],qe=null;if(p!==null)qe=p.getViewport(Qe);else{let _t=d.getViewSubImage(u,Qe);qe=_t.viewport,Be===0&&(e.setRenderTargetTextures(b,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(b))}let He=R[Be];He===void 0&&(He=new Ft,He.layers.enable(Be),He.viewport=new ct,R[Be]=He),He.matrix.fromArray(Qe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Qe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(qe.x,qe.y,qe.width,qe.height),Be===0&&(F.matrix.copy(He.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Pe===!0&&F.cameras.push(He)}let Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let Be=d.getDepthInformation(ee[0]);Be&&Be.isValid&&Be.texture&&m.init(Be,s.renderState)}if(Le&&Le.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let Be=0;Be<ee.length;Be++){let Qe=ee[Be].camera;if(Qe){let qe=f[Qe];qe||(qe=new br,f[Qe]=qe);let He=d.getCameraImage(Qe);qe.sourceTexture=He}}}}for(let ee=0;ee<E.length;ee++){let Pe=S[ee],Le=E[ee];Pe!==null&&Le!==void 0&&Le.update(Pe,ne,c||o)}We&&We(K,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}let Xe=new rf;Xe.setAnimationLoop(ht),this.setAnimationLoop=function(K){We=K},this.dispose=function(){}}},Ix=new it,uf=new De;uf.set(-1,0,0,0,1,0,0,0,1);function Rx(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,nh(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,A,b){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,A):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Kt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Kt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=e.get(f),A=M.envMap,b=M.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Ix.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(uf),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,A){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=A*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Kt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Px(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){let S=E.program;i.uniformBlockBinding(b,S)}function c(b,E){let S=s[b.id];S===void 0&&(m(b),S=h(b),s[b.id]=S,b.addEventListener("dispose",M));let C=E.program;i.updateUBOMapping(b,C);let x=e.render.frame;r[b.id]!==x&&(u(b),r[b.id]=x)}function h(b){let E=d();b.__bindingPointIndex=E;let S=n.createBuffer(),C=b.__size,x=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,S),S}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let E=s[b.id],S=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let x=0,T=S.length;x<T;x++){let I=S[x];if(Array.isArray(I))for(let R=0,F=I.length;R<F;R++)p(I[R],x,R,C);else p(I,x,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,E,S,C){if(y(b,E,S,C)===!0){let x=b.__offset,T=b.value;if(Array.isArray(T)){let I=0;for(let R=0;R<T.length;R++){let F=T[R],W=f(F);g(F,b.__data,I),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(I+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,b.__data)}}function g(b,E,S){typeof b=="number"||typeof b=="boolean"?E[0]=b:b.isMatrix3?(E[0]=b.elements[0],E[1]=b.elements[1],E[2]=b.elements[2],E[3]=0,E[4]=b.elements[3],E[5]=b.elements[4],E[6]=b.elements[5],E[7]=0,E[8]=b.elements[6],E[9]=b.elements[7],E[10]=b.elements[8],E[11]=0):ArrayBuffer.isView(b)?E.set(new b.constructor(b.buffer,b.byteOffset,E.length)):b.toArray(E,S)}function y(b,E,S,C){let x=b.value,T=E+"_"+S;if(C[T]===void 0)return typeof x=="number"||typeof x=="boolean"?C[T]=x:ArrayBuffer.isView(x)?C[T]=x.slice():C[T]=x.clone(),!0;{let I=C[T];if(typeof x=="number"||typeof x=="boolean"){if(I!==x)return C[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(I.equals(x)===!1)return I.copy(x),!0}}return!1}function m(b){let E=b.uniforms,S=0,C=16;for(let T=0,I=E.length;T<I;T++){let R=Array.isArray(E[T])?E[T]:[E[T]];for(let F=0,W=R.length;F<W;F++){let $=R[F],B=Array.isArray($.value)?$.value:[$.value];for(let q=0,H=B.length;q<H;q++){let Z=B[q],Q=f(Z),he=S%C,pe=he%Q.boundary,xe=he+pe;S+=pe,xe!==0&&C-xe<Q.storage&&(S+=C-xe),$.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=S,S+=Q.storage}}}let x=S%C;return x>0&&(S+=C-x),b.__size=S,b.__cache={},this}function f(b){let E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(E.boundary=16,E.storage=b.byteLength):Te("WebGLRenderer: Unsupported uniform value type.",b),E}function M(b){let E=b.target;E.removeEventListener("dispose",M);let S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function A(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:A}}var Dx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bi=null;function Lx(){return Bi===null&&(Bi=new la(Dx,16,16,In,Wt),Bi.name="DFG_LUT",Bi.minFilter=Ot,Bi.magFilter=Ot,Bi.wrapS=Ni,Bi.wrapT=Ni,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}var yl=class{constructor(e={}){let{canvas:t=Id(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Jt}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let y=p,m=new Set([Oa,Fa,Ua]),f=new Set([Jt,Ei,Os,ks,La,Na]),M=new Uint32Array(4),A=new Int32Array(4),b=new D,E=null,S=null,C=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,R=!1,F=null,W=null,$=null,B=null;this._outputColorSpace=Ut;let q=0,H=0,Z=null,Q=-1,he=null,pe=new ct,xe=new ct,We=null,ht=new Ae(0),Xe=0,K=t.width,ne=t.height,ee=1,Pe=null,Le=null,Ie=new ct(0,0,K,ne),mt=new ct(0,0,K,ne),Be=!1,Qe=new Ps,qe=!1,He=!1,_t=new it,wt=new D,It=new ct,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function yt(){return Z===null?ee:1}let L=i;function Zt(_,N){return t.getContext(_,N)}try{let _={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",dt,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Ci,!1),L===null){let N="webgl2";if(L=Zt(N,_),L===null)throw Zt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(_){throw Ce("WebGLRenderer: "+_.message),_}let je,w,v,U,z,G,te,se,X,j,re,Se,le,oe,Ee,Re,Ne,P,ie,Y,ae,fe,J;function be(){je=new z0(L),je.init(),ae=new Tx(L,je),w=new D0(L,je,e,ae),v=new wx(L,je),w.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),W=L.createFramebuffer(),$=L.createFramebuffer(),B=L.createFramebuffer(),U=new G0(L),z=new hx,G=new Ex(L,je,v,z,w,ae,U),te=new B0(I),se=new Yp(L),fe=new R0(L,se),X=new V0(L,se,U,fe),j=new X0(L,X,se,fe,U),P=new W0(L,w,G),Ee=new L0(z),re=new cx(I,te,je,w,fe,Ee),Se=new Rx(I,z),le=new dx,oe=new xx(je),Ne=new I0(I,te,v,j,g,l),Re=new Mx(I,j,w),J=new Px(L,U,w,v),ie=new P0(L,je,U),Y=new H0(L,je,U),U.programs=re.programs,I.capabilities=w,I.extensions=je,I.properties=z,I.renderLists=le,I.shadowMap=Re,I.state=v,I.info=U}be(),y!==Jt&&(T=new Y0(y,t.width,t.height,a,s,r));let _e=new Th(I,L);this.xr=_e,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let _=je.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=je.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(_){_!==void 0&&(ee=_,this.setSize(K,ne,!1))},this.getSize=function(_){return _.set(K,ne)},this.setSize=function(_,N,V=!0){if(_e.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}K=_,ne=N,t.width=Math.floor(_*ee),t.height=Math.floor(N*ee),V===!0&&(t.style.width=_+"px",t.style.height=N+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,_,N)},this.getDrawingBufferSize=function(_){return _.set(K*ee,ne*ee).floor()},this.setDrawingBufferSize=function(_,N,V){K=_,ne=N,ee=V,t.width=Math.floor(_*V),t.height=Math.floor(N*V),this.setViewport(0,0,_,N)},this.setEffects=function(_){if(y===Jt){Ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let N=0;N<_.length;N++)if(_[N].isOutputPass===!0){Te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(pe)},this.getViewport=function(_){return _.copy(Ie)},this.setViewport=function(_,N,V,O){_.isVector4?Ie.set(_.x,_.y,_.z,_.w):Ie.set(_,N,V,O),v.viewport(pe.copy(Ie).multiplyScalar(ee).round())},this.getScissor=function(_){return _.copy(mt)},this.setScissor=function(_,N,V,O){_.isVector4?mt.set(_.x,_.y,_.z,_.w):mt.set(_,N,V,O),v.scissor(xe.copy(mt).multiplyScalar(ee).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(_){v.setScissorTest(Be=_)},this.setOpaqueSort=function(_){Pe=_},this.setTransparentSort=function(_){Le=_},this.getClearColor=function(_){return _.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(_=!0,N=!0,V=!0){let O=0;if(_){let k=!1;if(Z!==null){let de=Z.texture.format;k=m.has(de)}if(k){let de=Z.texture.type,ve=f.has(de),ue=Ne.getClearColor(),ye=Ne.getClearAlpha(),Me=ue.r,Ue=ue.g,Oe=ue.b;ve?(M[0]=Me,M[1]=Ue,M[2]=Oe,M[3]=ye,L.clearBufferuiv(L.COLOR,0,M)):(A[0]=Me,A[1]=Ue,A[2]=Oe,A[3]=ye,L.clearBufferiv(L.COLOR,0,A))}else O|=L.COLOR_BUFFER_BIT}N&&(O|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(O|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&L.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),F=_},this.dispose=function(){t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Ci,!1),Ne.dispose(),le.dispose(),oe.dispose(),z.dispose(),te.dispose(),j.dispose(),fe.dispose(),J.dispose(),re.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Ph),_e.removeEventListener("sessionend",Dh),Dn.stop()};function dt(_){_.preventDefault(),dr("WebGLRenderer: Context Lost."),R=!0}function st(){dr("WebGLRenderer: Context Restored."),R=!1;let _=U.autoReset,N=Re.enabled,V=Re.autoUpdate,O=Re.needsUpdate,k=Re.type;be(),U.autoReset=_,Re.enabled=N,Re.autoUpdate=V,Re.needsUpdate=O,Re.type=k}function Ci(_){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Ii(_){let N=_.target;N.removeEventListener("dispose",Ii),vf(N)}function vf(_){xf(_),z.remove(_)}function xf(_){let N=z.get(_).programs;N!==void 0&&(N.forEach(function(V){re.releaseProgram(V)}),_.isShaderMaterial&&re.releaseShaderCache(_))}this.renderBufferDirect=function(_,N,V,O,k,de){N===null&&(N=Nt);let ve=k.isMesh&&k.matrixWorld.determinantAffine()<0,ue=bf(_,N,V,O,k);v.setMaterial(O,ve);let ye=V.index,Me=1;if(O.wireframe===!0){if(ye=X.getWireframeAttribute(V),ye===void 0)return;Me=2}let Ue=V.drawRange,Oe=V.attributes.position,we=Ue.start*Me,Ke=(Ue.start+Ue.count)*Me;de!==null&&(we=Math.max(we,de.start*Me),Ke=Math.min(Ke,(de.start+de.count)*Me)),ye!==null?(we=Math.max(we,0),Ke=Math.min(Ke,ye.count)):Oe!=null&&(we=Math.max(we,0),Ke=Math.min(Ke,Oe.count));let gt=Ke-we;if(gt<0||gt===1/0)return;fe.setup(k,O,ue,V,ye);let ft,et=ie;if(ye!==null&&(ft=se.get(ye),et=Y,et.setIndex(ft)),k.isMesh)O.wireframe===!0?(v.setLineWidth(O.wireframeLinewidth*yt()),et.setMode(L.LINES)):et.setMode(L.TRIANGLES);else if(k.isLine){let Bt=O.linewidth;Bt===void 0&&(Bt=1),v.setLineWidth(Bt*yt()),k.isLineSegments?et.setMode(L.LINES):k.isLineLoop?et.setMode(L.LINE_LOOP):et.setMode(L.LINE_STRIP)}else k.isPoints?et.setMode(L.POINTS):k.isSprite&&et.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(je.get("WEBGL_multi_draw"))et.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Bt=k._multiDrawStarts,ge=k._multiDrawCounts,ei=k._multiDrawCount,Ge=ye?se.get(ye).bytesPerElement:1,ci=z.get(O).currentProgram.getUniforms();for(let Ri=0;Ri<ei;Ri++)ci.setValue(L,"_gl_DrawID",Ri),et.render(Bt[Ri]/Ge,ge[Ri])}else if(k.isInstancedMesh)et.renderInstances(we,gt,k.count);else if(V.isInstancedBufferGeometry){let Bt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ge=Math.min(V.instanceCount,Bt);et.renderInstances(we,gt,ge)}else et.render(we,gt)};function Rh(_,N,V){_.transparent===!0&&_.side===Oi&&_.forceSinglePass===!1?(_.side=Kt,_.needsUpdate=!0,$r(_,N,V),_.side=Zi,_.needsUpdate=!0,$r(_,N,V),_.side=Oi):$r(_,N,V)}this.compile=function(_,N,V=null){V===null&&(V=_),S=oe.get(V),S.init(N),x.push(S),V.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),_!==V&&_.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),S.setupLights();let O=new Set;return _.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let de=k.material;if(de)if(Array.isArray(de))for(let ve=0;ve<de.length;ve++){let ue=de[ve];Rh(ue,V,k),O.add(ue)}else Rh(de,V,k),O.add(de)}),S=x.pop(),O},this.compileAsync=function(_,N,V=null){let O=this.compile(_,N,V);return new Promise(k=>{function de(){if(O.forEach(function(ve){z.get(ve).currentProgram.isReady()&&O.delete(ve)}),O.size===0){k(_);return}setTimeout(de,10)}je.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Dl=null;function _f(_){Dl&&Dl(_)}function Ph(){Dn.stop()}function Dh(){Dn.start()}let Dn=new rf;Dn.setAnimationLoop(_f),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(_){Dl=_,_e.setAnimationLoop(_),_===null?Dn.stop():Dn.start()},_e.addEventListener("sessionstart",Ph),_e.addEventListener("sessionend",Dh),this.render=function(_,N){if(N!==void 0&&N.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;F!==null&&F.renderStart(_,N);let V=_e.enabled===!0&&_e.isPresenting===!0,O=T!==null&&(Z===null||V)&&T.begin(I,Z);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(N),N=_e.getCamera()),_.isScene===!0&&_.onBeforeRender(I,_,N,Z),S=oe.get(_,x.length),S.init(N),S.state.textureUnits=G.getTextureUnits(),x.push(S),_t.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Qe.setFromProjectionMatrix(_t,Si,N.reversedDepth),He=this.localClippingEnabled,qe=Ee.init(this.clippingPlanes,He),E=le.get(_,C.length),E.init(),C.push(E),_e.enabled===!0&&_e.isPresenting===!0){let ve=I.xr.getDepthSensingMesh();ve!==null&&Ll(ve,N,-1/0,I.sortObjects)}Ll(_,N,0,I.sortObjects),E.finish(),I.sortObjects===!0&&E.sort(Pe,Le,N.reversedDepth),ut=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,ut&&Ne.addToRenderList(E,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),qe===!0&&Ee.beginShadows();let k=S.state.shadowsArray;if(Re.render(k,_,N),qe===!0&&Ee.endShadows(),(O&&T.hasRenderPass())===!1){let ve=E.opaque,ue=E.transmissive;if(S.setupLights(),N.isArrayCamera){let ye=N.cameras;if(ue.length>0)for(let Me=0,Ue=ye.length;Me<Ue;Me++){let Oe=ye[Me];Nh(ve,ue,_,Oe)}ut&&Ne.render(_);for(let Me=0,Ue=ye.length;Me<Ue;Me++){let Oe=ye[Me];Lh(E,_,Oe,Oe.viewport)}}else ue.length>0&&Nh(ve,ue,_,N),ut&&Ne.render(_),Lh(E,_,N)}Z!==null&&H===0&&(G.updateMultisampleRenderTarget(Z),G.updateRenderTargetMipmap(Z)),O&&T.end(I),_.isScene===!0&&_.onAfterRender(I,_,N),fe.resetDefaultState(),Q=-1,he=null,x.pop(),x.length>0?(S=x[x.length-1],G.setTextureUnits(S.state.textureUnits),qe===!0&&Ee.setGlobalState(I.clippingPlanes,S.state.camera)):S=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,F!==null&&F.renderEnd()};function Ll(_,N,V,O){if(_.visible===!1)return;if(_.layers.test(N.layers)){if(_.isGroup)V=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(N);else if(_.isLightProbeGrid)S.pushLightProbeGrid(_);else if(_.isLight)S.pushLight(_),_.castShadow&&S.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Qe.intersectsSprite(_)){O&&It.setFromMatrixPosition(_.matrixWorld).applyMatrix4(_t);let ve=j.update(_),ue=_.material;ue.visible&&E.push(_,ve,ue,V,It.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Qe.intersectsObject(_))){let ve=j.update(_),ue=_.material;if(O&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),It.copy(_.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),It.copy(ve.boundingSphere.center)),It.applyMatrix4(_.matrixWorld).applyMatrix4(_t)),Array.isArray(ue)){let ye=ve.groups;for(let Me=0,Ue=ye.length;Me<Ue;Me++){let Oe=ye[Me],we=ue[Oe.materialIndex];we&&we.visible&&E.push(_,ve,we,V,It.z,Oe)}}else ue.visible&&E.push(_,ve,ue,V,It.z,null)}}let de=_.children;for(let ve=0,ue=de.length;ve<ue;ve++)Ll(de[ve],N,V,O)}function Lh(_,N,V,O){let{opaque:k,transmissive:de,transparent:ve}=_;S.setupLightsView(V),qe===!0&&Ee.setGlobalState(I.clippingPlanes,V),O&&v.viewport(pe.copy(O)),k.length>0&&jr(k,N,V),de.length>0&&jr(de,N,V),ve.length>0&&jr(ve,N,V),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Nh(_,N,V,O){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[O.id]===void 0){let we=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[O.id]=new Et(1,1,{generateMipmaps:!0,type:we?Wt:Jt,minFilter:An,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}let de=S.state.transmissionRenderTarget[O.id],ve=O.viewport||pe;de.setSize(ve.z*I.transmissionResolutionScale,ve.w*I.transmissionResolutionScale);let ue=I.getRenderTarget(),ye=I.getActiveCubeFace(),Me=I.getActiveMipmapLevel();I.setRenderTarget(de),I.getClearColor(ht),Xe=I.getClearAlpha(),Xe<1&&I.setClearColor(16777215,.5),I.clear(),ut&&Ne.render(V);let Ue=I.toneMapping;I.toneMapping=wi;let Oe=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),S.setupLightsView(O),qe===!0&&Ee.setGlobalState(I.clippingPlanes,O),jr(_,V,O),G.updateMultisampleRenderTarget(de),G.updateRenderTargetMipmap(de),je.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let Ke=0,gt=N.length;Ke<gt;Ke++){let ft=N[Ke],{object:et,geometry:Bt,material:ge,group:ei}=ft;if(ge.side===Oi&&et.layers.test(O.layers)){let Ge=ge.side;ge.side=Kt,ge.needsUpdate=!0,Uh(et,V,O,Bt,ge,ei),ge.side=Ge,ge.needsUpdate=!0,we=!0}}we===!0&&(G.updateMultisampleRenderTarget(de),G.updateRenderTargetMipmap(de))}I.setRenderTarget(ue,ye,Me),I.setClearColor(ht,Xe),Oe!==void 0&&(O.viewport=Oe),I.toneMapping=Ue}function jr(_,N,V){let O=N.isScene===!0?N.overrideMaterial:null;for(let k=0,de=_.length;k<de;k++){let ve=_[k],{object:ue,geometry:ye,group:Me}=ve,Ue=ve.material;Ue.allowOverride===!0&&O!==null&&(Ue=O),ue.layers.test(V.layers)&&Uh(ue,N,V,ye,Ue,Me)}}function Uh(_,N,V,O,k,de){_.onBeforeRender(I,N,V,O,k,de),_.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),k.onBeforeRender(I,N,V,O,_,de),k.transparent===!0&&k.side===Oi&&k.forceSinglePass===!1?(k.side=Kt,k.needsUpdate=!0,I.renderBufferDirect(V,N,O,k,_,de),k.side=Zi,k.needsUpdate=!0,I.renderBufferDirect(V,N,O,k,_,de),k.side=Oi):I.renderBufferDirect(V,N,O,k,_,de),_.onAfterRender(I,N,V,O,k,de)}function $r(_,N,V){N.isScene!==!0&&(N=Nt);let O=z.get(_),k=S.state.lights,de=S.state.shadowsArray,ve=k.state.version,ue=re.getParameters(_,k.state,de,N,V,S.state.lightProbeGridArray),ye=re.getProgramCacheKey(ue),Me=O.programs;O.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,O.fog=N.fog;let Ue=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;O.envMap=te.get(_.envMap||O.environment,Ue),O.envMapRotation=O.environment!==null&&_.envMap===null?N.environmentRotation:_.envMapRotation,Me===void 0&&(_.addEventListener("dispose",Ii),Me=new Map,O.programs=Me);let Oe=Me.get(ye);if(Oe!==void 0){if(O.currentProgram===Oe&&O.lightsStateVersion===ve)return Oh(_,ue),Oe}else ue.uniforms=re.getUniforms(_),F!==null&&_.isNodeMaterial&&F.build(_,V,ue),_.onBeforeCompile(ue,I),Oe=re.acquireProgram(ue,ye),Me.set(ye,Oe),O.uniforms=ue.uniforms;let we=O.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(we.clippingPlanes=Ee.uniform),Oh(_,ue),O.needsLights=Mf(_),O.lightsStateVersion=ve,O.needsLights&&(we.ambientLightColor.value=k.state.ambient,we.lightProbe.value=k.state.probe,we.directionalLights.value=k.state.directional,we.directionalLightShadows.value=k.state.directionalShadow,we.spotLights.value=k.state.spot,we.spotLightShadows.value=k.state.spotShadow,we.rectAreaLights.value=k.state.rectArea,we.ltc_1.value=k.state.rectAreaLTC1,we.ltc_2.value=k.state.rectAreaLTC2,we.pointLights.value=k.state.point,we.pointLightShadows.value=k.state.pointShadow,we.hemisphereLights.value=k.state.hemi,we.directionalShadowMatrix.value=k.state.directionalShadowMatrix,we.spotLightMatrix.value=k.state.spotLightMatrix,we.spotLightMap.value=k.state.spotLightMap,we.pointShadowMatrix.value=k.state.pointShadowMatrix),O.lightProbeGrid=S.state.lightProbeGridArray.length>0,O.currentProgram=Oe,O.uniformsList=null,Oe}function Fh(_){if(_.uniformsList===null){let N=_.currentProgram.getUniforms();_.uniformsList=zs.seqWithValue(N.seq,_.uniforms)}return _.uniformsList}function Oh(_,N){let V=z.get(_);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function yf(_,N){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;b.setFromMatrixPosition(N.matrixWorld);for(let V=0,O=_.length;V<O;V++){let k=_[V];if(k.texture!==null&&k.boundingBox.containsPoint(b))return k}return null}function bf(_,N,V,O,k){N.isScene!==!0&&(N=Nt),G.resetTextureUnits();let de=N.fog,ve=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?N.environment:null,ue=Z===null?I.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ve.workingColorSpace,ye=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Me=te.get(O.envMap||ve,ye),Ue=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Oe=!!V.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),we=!!V.morphAttributes.position,Ke=!!V.morphAttributes.normal,gt=!!V.morphAttributes.color,ft=wi;O.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ft=I.toneMapping);let et=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Bt=et!==void 0?et.length:0,ge=z.get(O),ei=S.state.lights;if(qe===!0&&(He===!0||_!==he)){let rt=_===he&&O.id===Q;Ee.setState(O,_,rt)}let Ge=!1;O.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==ei.state.version||ge.outputColorSpace!==ue||k.isBatchedMesh&&ge.batching===!1||!k.isBatchedMesh&&ge.batching===!0||k.isBatchedMesh&&ge.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ge.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ge.instancing===!1||!k.isInstancedMesh&&ge.instancing===!0||k.isSkinnedMesh&&ge.skinning===!1||!k.isSkinnedMesh&&ge.skinning===!0||k.isInstancedMesh&&ge.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ge.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ge.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ge.instancingMorph===!1&&k.morphTexture!==null||ge.envMap!==Me||O.fog===!0&&ge.fog!==de||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Ee.numPlanes||ge.numIntersection!==Ee.numIntersection)||ge.vertexAlphas!==Ue||ge.vertexTangents!==Oe||ge.morphTargets!==we||ge.morphNormals!==Ke||ge.morphColors!==gt||ge.toneMapping!==ft||ge.morphTargetsCount!==Bt||!!ge.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Ge=!0):(Ge=!0,ge.__version=O.version);let ci=ge.currentProgram;Ge===!0&&(ci=$r(O,N,k),F&&O.isNodeMaterial&&F.onUpdateProgram(O,ci,ge));let Ri=!1,sn=!1,es=!1,tt=ci.getUniforms(),vt=ge.uniforms;if(v.useProgram(ci.program)&&(Ri=!0,sn=!0,es=!0),O.id!==Q&&(Q=O.id,sn=!0),ge.needsLights){let rt=yf(S.state.lightProbeGridArray,k);ge.lightProbeGrid!==rt&&(ge.lightProbeGrid=rt,sn=!0)}if(Ri||he!==_){v.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),tt.setValue(L,"projectionMatrix",_.projectionMatrix),tt.setValue(L,"viewMatrix",_.matrixWorldInverse);let on=tt.map.cameraPosition;on!==void 0&&on.setValue(L,wt.setFromMatrixPosition(_.matrixWorld)),w.logarithmicDepthBuffer&&tt.setValue(L,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&tt.setValue(L,"isOrthographic",_.isOrthographicCamera===!0),he!==_&&(he=_,sn=!0,es=!0)}if(ge.needsLights&&(ei.state.directionalShadowMap.length>0&&tt.setValue(L,"directionalShadowMap",ei.state.directionalShadowMap,G),ei.state.spotShadowMap.length>0&&tt.setValue(L,"spotShadowMap",ei.state.spotShadowMap,G),ei.state.pointShadowMap.length>0&&tt.setValue(L,"pointShadowMap",ei.state.pointShadowMap,G)),k.isSkinnedMesh){tt.setOptional(L,k,"bindMatrix"),tt.setOptional(L,k,"bindMatrixInverse");let rt=k.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),tt.setValue(L,"boneTexture",rt.boneTexture,G))}k.isBatchedMesh&&(tt.setOptional(L,k,"batchingTexture"),tt.setValue(L,"batchingTexture",k._matricesTexture,G),tt.setOptional(L,k,"batchingIdTexture"),tt.setValue(L,"batchingIdTexture",k._indirectTexture,G),tt.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&tt.setValue(L,"batchingColorTexture",k._colorsTexture,G));let rn=V.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&P.update(k,V,ci),(sn||ge.receiveShadow!==k.receiveShadow)&&(ge.receiveShadow=k.receiveShadow,tt.setValue(L,"receiveShadow",k.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&N.environment!==null&&(vt.envMapIntensity.value=N.environmentIntensity),vt.dfgLUT!==void 0&&(vt.dfgLUT.value=Lx()),sn){if(tt.setValue(L,"toneMappingExposure",I.toneMappingExposure),ge.needsLights&&Sf(vt,es),de&&O.fog===!0&&Se.refreshFogUniforms(vt,de),Se.refreshMaterialUniforms(vt,O,ee,ne,S.state.transmissionRenderTarget[_.id]),ge.needsLights&&ge.lightProbeGrid){let rt=ge.lightProbeGrid;vt.probesSH.value=rt.texture,vt.probesMin.value.copy(rt.boundingBox.min),vt.probesMax.value.copy(rt.boundingBox.max),vt.probesResolution.value.copy(rt.resolution)}zs.upload(L,Fh(ge),vt,G)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(zs.upload(L,Fh(ge),vt,G),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&tt.setValue(L,"center",k.center),tt.setValue(L,"modelViewMatrix",k.modelViewMatrix),tt.setValue(L,"normalMatrix",k.normalMatrix),tt.setValue(L,"modelMatrix",k.matrixWorld),O.uniformsGroups!==void 0){let rt=O.uniformsGroups;for(let on=0,ts=rt.length;on<ts;on++){let kh=rt[on];J.update(kh,ci),J.bind(kh,ci)}}return ci}function Sf(_,N){_.ambientLightColor.needsUpdate=N,_.lightProbe.needsUpdate=N,_.directionalLights.needsUpdate=N,_.directionalLightShadows.needsUpdate=N,_.pointLights.needsUpdate=N,_.pointLightShadows.needsUpdate=N,_.spotLights.needsUpdate=N,_.spotLightShadows.needsUpdate=N,_.rectAreaLights.needsUpdate=N,_.hemisphereLights.needsUpdate=N}function Mf(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(_,N,V){let O=z.get(_);O.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),z.get(_.texture).__webglTexture=N,z.get(_.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:V,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,N){let V=z.get(_);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(_,N=0,V=0){Z=_,q=N,H=V;let O=null,k=!1,de=!1;if(_){let ue=z.get(_);if(ue.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(L.FRAMEBUFFER,ue.__webglFramebuffer),pe.copy(_.viewport),xe.copy(_.scissor),We=_.scissorTest,v.viewport(pe),v.scissor(xe),v.setScissorTest(We),Q=-1;return}else if(ue.__webglFramebuffer===void 0)G.setupRenderTarget(_);else if(ue.__hasExternalTextures)G.rebindTextures(_,z.get(_.texture).__webglTexture,z.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Ue=_.depthTexture;if(ue.__boundDepthTexture!==Ue){if(Ue!==null&&z.has(Ue)&&(_.width!==Ue.image.width||_.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(_)}}let ye=_.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(de=!0);let Me=z.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Me[N])?O=Me[N][V]:O=Me[N],k=!0):_.samples>0&&G.useMultisampledRTT(_)===!1?O=z.get(_).__webglMultisampledFramebuffer:Array.isArray(Me)?O=Me[V]:O=Me,pe.copy(_.viewport),xe.copy(_.scissor),We=_.scissorTest}else pe.copy(Ie).multiplyScalar(ee).floor(),xe.copy(mt).multiplyScalar(ee).floor(),We=Be;if(V!==0&&(O=W),v.bindFramebuffer(L.FRAMEBUFFER,O)&&v.drawBuffers(_,O),v.viewport(pe),v.scissor(xe),v.setScissorTest(We),k){let ue=z.get(_.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,ue.__webglTexture,V)}else if(de){let ue=N;for(let ye=0;ye<_.textures.length;ye++){let Me=z.get(_.textures[ye]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ye,Me.__webglTexture,V,ue)}}else if(_!==null&&V!==0){let ue=z.get(_.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ue.__webglTexture,V)}Q=-1},this.readRenderTargetPixels=function(_,N,V,O,k,de,ve,ue=0){if(!(_&&_.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=z.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye){v.bindFramebuffer(L.FRAMEBUFFER,ye);try{let Me=_.textures[ue],Ue=Me.format,Oe=Me.type;if(_.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ue),!w.textureFormatReadable(Ue)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(Oe)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=_.width-O&&V>=0&&V<=_.height-k&&L.readPixels(N,V,O,k,ae.convert(Ue),ae.convert(Oe),de)}finally{let Me=Z!==null?z.get(Z).__webglFramebuffer:null;v.bindFramebuffer(L.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(_,N,V,O,k,de,ve,ue=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=z.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye)if(N>=0&&N<=_.width-O&&V>=0&&V<=_.height-k){v.bindFramebuffer(L.FRAMEBUFFER,ye);let Me=_.textures[ue],Ue=Me.format,Oe=Me.type;if(_.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ue),!w.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let we=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,we),L.bufferData(L.PIXEL_PACK_BUFFER,de.byteLength,L.STREAM_READ),L.readPixels(N,V,O,k,ae.convert(Ue),ae.convert(Oe),0);let Ke=Z!==null?z.get(Z).__webglFramebuffer:null;v.bindFramebuffer(L.FRAMEBUFFER,Ke);let gt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Pd(L,gt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,we),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,de),L.deleteBuffer(we),L.deleteSync(gt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,N=null,V=0){let O=Math.pow(2,-V),k=Math.floor(_.image.width*O),de=Math.floor(_.image.height*O),ve=N!==null?N.x:0,ue=N!==null?N.y:0;G.setTexture2D(_,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,ve,ue,k,de),v.unbindTexture()},this.copyTextureToTexture=function(_,N,V=null,O=null,k=0,de=0){let ve,ue,ye,Me,Ue,Oe,we,Ke,gt,ft=_.isCompressedTexture?_.mipmaps[de]:_.image;if(V!==null)ve=V.max.x-V.min.x,ue=V.max.y-V.min.y,ye=V.isBox3?V.max.z-V.min.z:1,Me=V.min.x,Ue=V.min.y,Oe=V.isBox3?V.min.z:0;else{let vt=Math.pow(2,-k);ve=Math.floor(ft.width*vt),ue=Math.floor(ft.height*vt),_.isDataArrayTexture?ye=ft.depth:_.isData3DTexture?ye=Math.floor(ft.depth*vt):ye=1,Me=0,Ue=0,Oe=0}O!==null?(we=O.x,Ke=O.y,gt=O.z):(we=0,Ke=0,gt=0);let et=ae.convert(N.format),Bt=ae.convert(N.type),ge;N.isData3DTexture?(G.setTexture3D(N,0),ge=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(G.setTexture2DArray(N,0),ge=L.TEXTURE_2D_ARRAY):(G.setTexture2D(N,0),ge=L.TEXTURE_2D),v.activeTexture(L.TEXTURE0),v.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),v.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),v.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let ei=v.getParameter(L.UNPACK_ROW_LENGTH),Ge=v.getParameter(L.UNPACK_IMAGE_HEIGHT),ci=v.getParameter(L.UNPACK_SKIP_PIXELS),Ri=v.getParameter(L.UNPACK_SKIP_ROWS),sn=v.getParameter(L.UNPACK_SKIP_IMAGES);v.pixelStorei(L.UNPACK_ROW_LENGTH,ft.width),v.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft.height),v.pixelStorei(L.UNPACK_SKIP_PIXELS,Me),v.pixelStorei(L.UNPACK_SKIP_ROWS,Ue),v.pixelStorei(L.UNPACK_SKIP_IMAGES,Oe);let es=_.isDataArrayTexture||_.isData3DTexture,tt=N.isDataArrayTexture||N.isData3DTexture;if(_.isDepthTexture){let vt=z.get(_),rn=z.get(N),rt=z.get(vt.__renderTarget),on=z.get(rn.__renderTarget);v.bindFramebuffer(L.READ_FRAMEBUFFER,rt.__webglFramebuffer),v.bindFramebuffer(L.DRAW_FRAMEBUFFER,on.__webglFramebuffer);for(let ts=0;ts<ye;ts++)es&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(_).__webglTexture,k,Oe+ts),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(N).__webglTexture,de,gt+ts)),L.blitFramebuffer(Me,Ue,ve,ue,we,Ke,ve,ue,L.DEPTH_BUFFER_BIT,L.NEAREST);v.bindFramebuffer(L.READ_FRAMEBUFFER,null),v.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||_.isRenderTargetTexture||z.has(_)){let vt=z.get(_),rn=z.get(N);v.bindFramebuffer(L.READ_FRAMEBUFFER,$),v.bindFramebuffer(L.DRAW_FRAMEBUFFER,B);for(let rt=0;rt<ye;rt++)es?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vt.__webglTexture,k,Oe+rt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,vt.__webglTexture,k),tt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,rn.__webglTexture,de,gt+rt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,rn.__webglTexture,de),k!==0?L.blitFramebuffer(Me,Ue,ve,ue,we,Ke,ve,ue,L.COLOR_BUFFER_BIT,L.NEAREST):tt?L.copyTexSubImage3D(ge,de,we,Ke,gt+rt,Me,Ue,ve,ue):L.copyTexSubImage2D(ge,de,we,Ke,Me,Ue,ve,ue);v.bindFramebuffer(L.READ_FRAMEBUFFER,null),v.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else tt?_.isDataTexture||_.isData3DTexture?L.texSubImage3D(ge,de,we,Ke,gt,ve,ue,ye,et,Bt,ft.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(ge,de,we,Ke,gt,ve,ue,ye,et,ft.data):L.texSubImage3D(ge,de,we,Ke,gt,ve,ue,ye,et,Bt,ft):_.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,de,we,Ke,ve,ue,et,Bt,ft.data):_.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,de,we,Ke,ft.width,ft.height,et,ft.data):L.texSubImage2D(L.TEXTURE_2D,de,we,Ke,ve,ue,et,Bt,ft);v.pixelStorei(L.UNPACK_ROW_LENGTH,ei),v.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ge),v.pixelStorei(L.UNPACK_SKIP_PIXELS,ci),v.pixelStorei(L.UNPACK_SKIP_ROWS,Ri),v.pixelStorei(L.UNPACK_SKIP_IMAGES,sn),de===0&&N.generateMipmaps&&L.generateMipmap(ge),v.unbindTexture()},this.initRenderTarget=function(_){z.get(_).__webglFramebuffer===void 0&&G.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?G.setTextureCube(_,0):_.isData3DTexture?G.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?G.setTexture2DArray(_,0):G.setTexture2D(_,0),v.unbindTexture()},this.resetState=function(){q=0,H=0,Z=null,v.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}};var df={type:"change"},Ch={type:"start"},pf={type:"end"},Ml=new Qi,ff=new di,Ux=Math.cos(70*ih.DEG2RAD),Ct=new D,Qt=2*Math.PI,Je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ah=1e-6,wl=class extends Pr{constructor(e,t=null){super(e,t),this.state=Je.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wn.ROTATE,MIDDLE:wn.DOLLY,RIGHT:wn.PAN},this.touches={ONE:En.ROTATE,TWO:En.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new ai,this._lastTargetPosition=new D,this._quat=new ai().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Us,this._sphericalDelta=new Us,this._scale=1,this._panOffset=new D,this._rotateStart=new me,this._rotateEnd=new me,this._rotateDelta=new me,this._panStart=new me,this._panEnd=new me,this._panDelta=new me,this._dollyStart=new me,this._dollyEnd=new me,this._dollyDelta=new me,this._dollyDirection=new D,this._mouse=new me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ox.bind(this),this._onPointerDown=Fx.bind(this),this._onPointerUp=kx.bind(this),this._onContextMenu=Xx.bind(this),this._onMouseWheel=Vx.bind(this),this._onKeyDown=Hx.bind(this),this._onTouchStart=Gx.bind(this),this._onTouchMove=Wx.bind(this),this._onMouseDown=Bx.bind(this),this._onMouseMove=zx.bind(this),this._interceptControlDown=qx.bind(this),this._interceptControlUp=Yx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(df),this.update(),this.state=Je.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Ct.copy(t).sub(this.target),Ct.applyQuaternion(this._quat),this._spherical.setFromVector3(Ct),this.autoRotate&&this.state===Je.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Qt:i>Math.PI&&(i-=Qt),s<-Math.PI?s+=Qt:s>Math.PI&&(s-=Qt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ct.setFromSpherical(this._spherical),Ct.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ct.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ml.origin.copy(this.object.position),Ml.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ml.direction))<Ux?this.object.lookAt(this.target):(ff.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ml.intersectPlane(ff,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ah||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ah||this._lastTargetPosition.distanceToSquared(this.target)>Ah?(this.dispatchEvent(df),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Qt/60*this.autoRotateSpeed*e:Qt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ct.setFromMatrixColumn(t,0),Ct.multiplyScalar(-e),this._panOffset.add(Ct)}_panUp(e,t){this.screenSpacePanning===!0?Ct.setFromMatrixColumn(t,1):(Ct.setFromMatrixColumn(t,0),Ct.crossVectors(this.object.up,Ct)),Ct.multiplyScalar(e),this._panOffset.add(Ct)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ct.copy(s).sub(this.target);let r=Ct.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Fx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Ox(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function kx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pf),this.state=Je.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Bx(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case wn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Je.DOLLY;break;case wn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Je.ROTATE}break;case wn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Je.PAN}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(Ch)}function zx(n){switch(this.state){case Je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Vx(n){this.enabled===!1||this.enableZoom===!1||this.state!==Je.NONE||(n.preventDefault(),this.dispatchEvent(Ch),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(pf))}function Hx(n){this.enabled!==!1&&this._handleKeyDown(n)}function Gx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case En.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Je.TOUCH_ROTATE;break;case En.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Je.TOUCH_PAN;break;default:this.state=Je.NONE}break;case 2:switch(this.touches.TWO){case En.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Je.TOUCH_DOLLY_PAN;break;case En.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Je.TOUCH_DOLLY_ROTATE;break;default:this.state=Je.NONE}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(Ch)}function Wx(n){switch(this._trackPointer(n),this.state){case Je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Je.NONE}}function Xx(n){this.enabled!==!1&&n.preventDefault()}function qx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Yx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Hs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Ai=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},jx=new jn(-1,1,1,-1,0,1),Ih=class extends Mt{constructor(){super(),this.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pt([0,2,0,0,2,0],2))}},$x=new Ih,Gs=class{constructor(e){this._mesh=new Gt($x,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,jx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var El=class extends Ai{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Zn.clone(e.uniforms),this.material=new xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Gs(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Wr=class extends Ai{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Tl=class extends Ai{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Al=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new me);this._width=i.width,this._height=i.height,t=new Et(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new El(Hs),this.copyPass.material.blending=fi,this.timer=new Ir}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Wr!==void 0&&(o instanceof Wr?i=!0:o instanceof Tl&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Cl=class extends Ai{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ae}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var mf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ae(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ws=class n extends Ai{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new me(e.x,e.y):new me(256,256),this.clearColor=new Ae(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Et(r,o,{type:Wt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Et(r,o,{type:Wt});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Et(r,o,{type:Wt});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=mf;this.highPassUniforms=Zn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new me(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Zn.clone(Hs.uniforms),this.blendMaterial=new xt({uniforms:this.copyUniforms,vertexShader:Hs.vertexShader,fragmentShader:Hs.fragmentShader,premultipliedAlpha:!0,blending:ki,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ae,this._oldClearAlpha=1,this._basic=new en,this._fsQuad=new Gs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new me(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new xt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new me(.5,.5)},direction:{value:new me(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Ws.BlurDirectionX=new me(1,0);Ws.BlurDirectionY=new me(0,1);function Kx(){try{let n=createEl("canvas");return n.remove(),!!(window.WebGLRenderingContext&&(n.getContext("webgl2")||n.getContext("webgl")))}catch{return!1}}function Zx(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}var Il=class extends Qn.Modal{constructor(t,i,s={}){super(t);this.store=i;this.opts=s;this.raycaster=new Rr;this.pointer=new me;this.hovered=null;this.selected=null;this.downX=0;this.downY=0;this.rafId=0;this.lastRaycast=0;this.disposed=!1;this.resizeObserver=null;this.objectUrls=[];this.autoOrbitResumeAt=0;this.fly=null;this.onPointerMove=t=>{let i=performance.now();if(i-this.lastRaycast<50)return;this.lastRaycast=i;let s=this.pickAt(t);if(this.hovered=s,this.renderer.domElement.toggleClass("is-hovering",s!==null),s!==null){let r=this.data.iconIds[s];this.tooltipEl.addClass("is-visible"),this.tooltipEl.setCssStyles({left:`${t.clientX+14}px`,top:`${t.clientY+14}px`});let o=bt(r);this.tooltipEl.setText(o?`${o.name} \xB7 ${qt[o.pack]??o.pack}`:r)}else this.tooltipEl.removeClass("is-visible")};this.onPointerLeave=()=>{this.hovered=null,this.tooltipEl.removeClass("is-visible"),this.renderer.domElement.removeClass("is-hovering")};this.onClick=t=>{if(Math.hypot(t.clientX-this.downX,t.clientY-this.downY)>6)return;let i=this.pickAt(t);i!==null&&this.select(i)};this.onResize=()=>{let t=this.contentEl.querySelector(".si-galaxy-canvas");if(!t)return;let i=Math.max(320,t.clientWidth),s=Math.max(240,t.clientHeight);this.camera.aspect=i/s,this.camera.updateProjectionMatrix(),this.renderer.setSize(i,s),this.composer?.setSize(i,s)};this.animate=t=>{if(this.disposed)return;this.rafId=window.requestAnimationFrame(this.animate),!this.controls.autoRotate&&this.autoOrbitResumeAt&&performance.now()>this.autoOrbitResumeAt&&(this.controls.autoRotate=!0),this.controls.update();let i=this.galaxyPoints.parent;if(i&&(i.rotation.y+=35e-5),this.highlight.visible){let s=3.2+Math.sin(t*.004)*.5;this.highlight.scale.set(s,s,1)}this.fly&&this.stepFly(t),this.composer.render()}}onOpen(){let t=this.store.availableIcons();if(t.length===0){new Qn.Notice("No icons available \u2014 enable a pack first."),this.close();return}if(!Kx()){new Qn.Notice("WebGL is not available in this environment."),this.close();return}this.data=_u(t),this.modalEl.addClass("si-galaxy-modal"),this.contentEl.addClass("si-galaxy"),this.buildDom(),this.initScene(),this.rafId=window.requestAnimationFrame(this.animate)}onClose(){this.disposed=!0,window.cancelAnimationFrame(this.rafId),this.resizeObserver?.disconnect(),this.resizeObserver=null,this.controls?.dispose(),this.scene?.traverse(t=>{let i=t;i.geometry&&i.geometry.dispose();let s=t.material;Array.isArray(s)?s.forEach(r=>gf(r)):s&&gf(s)}),this.renderer?.dispose(),this.composer?.dispose();for(let t of this.objectUrls)URL.revokeObjectURL(t);this.objectUrls=[],this.contentEl.empty()}buildConstellations(){let t=this.data;if(t.indexById.size===0)return null;let i=h=>t.indexById.has(h),s=[];for(let h of this.store.getSettings().collections)s.push(h.iconIds);let r=new Map;for(let[h,d]of Object.entries(this.store.getSettings().iconTags??{}))for(let u of d){let p=r.get(u);p?p.push(h):r.set(u,[h])}for(let h of r.values())s.push(h);let o=[],a=t.positions;for(let h of s){let d=h.filter(i).slice(0,40),u=t.indexById.get(d[0]);if(u!==void 0)for(let p=1;p<d.length;p++){let g=t.indexById.get(d[p]);g!==void 0&&o.push(a[u*3],a[u*3+1],a[u*3+2],a[g*3],a[g*3+1],a[g*3+2])}}if(o.length===0)return null;let l=new Mt;l.setAttribute("position",new pt(o,3));let c=new Ds({color:8376575,transparent:!0,opacity:.4,blending:ki,depthWrite:!1});return new _r(l,c)}addNebula(t){let i=[[-60,30,-160,95,.1],[70,-12,-140,115,.09],[-24,42,120,120,.08],[52,10,95,82,.09],[0,-30,-60,70,.07]],[s,r]=rs("all"),o=new Ae(s),a=new Ae(r),l=new Ae("#8b5cf6"),c=new Ae("#0ea5e9"),h=[o.clone(),o.clone().lerp(a,.55),a.clone(),a.clone().lerp(l,.35),o.clone().lerp(c,.45)];i.forEach(([d,u,p,g,y],m)=>{let f=new yn(new Ji({map:this.glowTex,color:h[m%h.length],transparent:!0,opacity:y,depthWrite:!1,blending:ki}));f.position.set(d,u,p),f.scale.set(g,g,1),t.add(f)})}buildDom(){let t=this.contentEl,i=t.createDiv({cls:"si-galaxy-canvas"});this.searchEl=t.createEl("input",{cls:"si-text-input si-galaxy-search",attr:{placeholder:"Search icons\u2026 (camera flies to the match)",spellcheck:"false"}}),this.searchEl.addEventListener("input",Pi(()=>this.runSearch(),250)),this.searchEl.addEventListener("keydown",s=>{s.key==="Enter"&&(s.preventDefault(),this.runSearch())}),this.tooltipEl=t.createDiv({cls:"si-galaxy-tooltip"}),this.panelEl=t.createDiv({cls:"si-galaxy-panel"}),this.panelHintEl=t.createDiv({cls:"si-galaxy-hint",text:"\u{1F5B1} Drag to orbit \xB7 Scroll to zoom \xB7 Click a star to select \xB7 Lines link collections & tags"}),this.panelHintEl}initScene(){let t=this.contentEl.querySelector(".si-galaxy-canvas"),i=Math.max(320,t.clientWidth||900),s=Math.max(240,t.clientHeight||640);this.renderer=new yl({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(i,s),t.appendChild(this.renderer.domElement),this.scene=new mr,this.scene.fog=new pr(329226,90,300),this.scene.background=new Ae(329226),this.camera=new Ft(60,i/s,.1,1200),this.camera.position.set(0,55,100),this.controls=new wl(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=6,this.controls.maxDistance=340,this.controls.maxPolarAngle=Math.PI*.94,this.controls.target.set(0,0,0),this.controls.autoRotate=!0,this.controls.autoRotateSpeed=.5;let r=new ji;this.scene.add(r),this.glowTex=this.glowTexture();let o=new Mt,a=new Float32Array(1500*3);for(let p=0;p<1500;p++){let g=140+Math.random()*260,y=Math.random()*Math.PI*2,m=(Math.random()-.5)*120;a[p*3]=Math.cos(y)*g,a[p*3+1]=m,a[p*3+2]=Math.sin(y)*g}o.setAttribute("position",new Dt(a,3));let l=new qn({color:16777215,size:1.3,map:this.glowTex,transparent:!0,opacity:.65,depthWrite:!1,sizeAttenuation:!0});r.add(new Ls(o,l));let c=new Mt;c.setAttribute("position",new Dt(this.data.positions,3)),c.setAttribute("color",new Dt(this.data.colors,3));let h=new qn({size:3.4,map:this.glowTex,vertexColors:!0,transparent:!0,depthWrite:!1,blending:ki,sizeAttenuation:!0});this.galaxyPoints=new Ls(c,h),r.add(this.galaxyPoints);for(let p of this.data.planets){let[g,y,m]=p.color,f=new Ae(g/255,y/255,m/255),M=new Gt(new Mr(.55,16,16),new en({color:f}));M.position.set(p.x,p.y,p.z),r.add(M);let A=new yn(new Ji({map:this.glowTex,color:f,transparent:!0,opacity:.5,depthWrite:!1,blending:ki}));A.scale.set(7,7,1),A.position.copy(M.position),r.add(A);let b=new yn(new Ji({map:this.labelTexture(qt[p.pack]??p.pack),transparent:!0,depthWrite:!1}));b.position.set(p.x,p.y+1.5,p.z),b.scale.set(5.2,1.3,1),r.add(b)}this.highlight=new yn(new Ji({map:this.glowTex,color:16777215,transparent:!0,depthWrite:!1})),this.highlight.visible=!1,this.highlight.scale.set(3.4,3.4,1),r.add(this.highlight),this.scene.add(new Cr(16777215,.5));let d=new Ar(16765562,1.4,220);d.position.set(0,12,0),this.scene.add(d),this.addNebula(r);let u=this.buildConstellations();u&&r.add(u),this.composer=new Al(this.renderer),this.composer.addPass(new Cl(this.scene,this.camera)),this.bloomPass=new Ws(new me(i,s),.85,.6,.72),this.composer.addPass(this.bloomPass),this.renderer.domElement.addEventListener("pointerdown",p=>{this.downX=p.clientX,this.downY=p.clientY,this.controls.autoRotate=!1,this.autoOrbitResumeAt=performance.now()+8e3}),this.renderer.domElement.addEventListener("pointermove",this.onPointerMove),this.renderer.domElement.addEventListener("pointerleave",this.onPointerLeave),this.renderer.domElement.addEventListener("click",this.onClick),this.resizeObserver=new ResizeObserver(()=>this.onResize()),this.resizeObserver.observe(t)}pickAt(t){let s=this.renderer.domElement.getBoundingClientRect();if(s.width===0||s.height===0)return null;this.pointer.x=(t.clientX-s.left)/s.width*2-1,this.pointer.y=-((t.clientY-s.top)/s.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),this.raycaster.params.Points.threshold=2.4;let r=this.raycaster.intersectObject(this.galaxyPoints,!1);return r.length?r[0].index??null:null}select(t){this.selected=t;let i=this.data.iconIds[t],s=this.data.positions[t*3],r=this.data.positions[t*3+1],o=this.data.positions[t*3+2];this.highlight.position.set(s,r,o),this.highlight.visible=!0;let a=bt(i);this.renderPanel(a),this.loadIconSprite(a),this.opts.onSelect?.(i)}runSearch(){let t=this.searchEl.value.trim();if(!t)return;let s=this.store.search(t,"all",1)[0];if(!s){new Qn.Notice("No icon matches that search.");return}let r=this.data.indexById.get(s.id);if(r===void 0){new Qn.Notice(`\u201C${s.id}\u201D is not in the galaxy (pack not enabled).`);return}this.flyTo(r)}flyTo(t){let i=this.data.positions[t*3],s=this.data.positions[t*3+1],r=this.data.positions[t*3+2],o=new D(i,s,r),a=o.clone().normalize(),l=o.clone().add(a.multiplyScalar(7));this.fly={camFrom:this.camera.position.clone(),camTo:l,tFrom:this.controls.target.clone(),tTo:o.clone(),start:performance.now(),dur:950,targetIndex:t}}stepFly(t){let i=this.fly;if(!i)return;let s=Math.min(1,(t-i.start)/i.dur),r=Zx(s);this.controls.target.lerpVectors(i.tFrom,i.tTo,r),this.camera.position.lerpVectors(i.camFrom,i.camTo,r),s>=1&&(this.fly=null,this.select(i.targetIndex))}renderPanel(t){let i=this.panelEl;if(i.empty(),!t){i.createSpan({cls:"si-galaxy-panel-empty",text:"Icon not loaded"});return}let s=i.createDiv({cls:"si-galaxy-panel-row"}),r=s.createSpan({cls:"si-galaxy-preview"});ze(r,t.id,30);let o=s.createDiv({cls:"si-galaxy-meta"});o.createDiv({cls:"si-galaxy-name",text:t.name}),o.createDiv({cls:"si-galaxy-id",text:t.id});let a=i.createDiv({cls:"si-galaxy-buttons"}),l=a.createEl("button",{cls:"si-btn si-btn-small",attr:{type:"button"}});l.createSpan({text:"Copy name"}),l.addEventListener("click",()=>{navigator.clipboard.writeText(t.id)});let c=a.createEl("button",{cls:"si-btn si-btn-small",attr:{type:"button"}});c.createSpan({text:"Copy SVG"}),c.addEventListener("click",()=>{navigator.clipboard.writeText(Di(t.svg))});let h=a.createEl("button",{cls:"si-btn si-btn-small"+(this.store.isFavorite(t.id)?" is-active":""),attr:{type:"button"}});if(h.createSpan({text:this.store.isFavorite(t.id)?"\u2605 Favorited":"\u2606 Favorite"}),h.addEventListener("click",()=>{this.store.toggleFavorite(t.id).then(()=>{h.toggleClass("is-active",this.store.isFavorite(t.id)),h.setText(this.store.isFavorite(t.id)?"\u2605 Favorited":"\u2606 Favorite")})}),this.opts.onSelect){let d=a.createEl("button",{cls:"si-btn si-btn-small si-btn-primary",attr:{type:"button"}});d.createSpan({text:"Select in Manager"}),d.addEventListener("click",()=>{this.opts.onSelect?.(t.id),this.close()})}}glowTexture(){let t=createEl("canvas");t.remove(),t.width=64,t.height=64;let i=t.getContext("2d"),s=i.createRadialGradient(32,32,0,32,32,32);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.3,"rgba(255,255,255,0.6)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,64,64);let r=new Yn(t);return r.colorSpace=Ut,r}labelTexture(t){let i=createEl("canvas");i.remove(),i.width=512,i.height=128;let s=i.getContext("2d");s.font="bold 44px system-ui, sans-serif",s.textAlign="center",s.textBaseline="middle",s.shadowColor="rgba(0,0,0,0.85)",s.shadowBlur=14,s.fillStyle="#ffffff",s.fillText(t,256,64);let r=new Yn(i);return r.colorSpace=Ut,r}loadIconSprite(t){if(!t)return;let i=URL.createObjectURL(new Blob([t.svg],{type:"image/svg+xml"}));this.objectUrls.push(i);let s=new Image;s.onload=()=>{if(this.disposed)return;let r=createEl("canvas");r.remove(),r.width=128,r.height=128;let o=r.getContext("2d"),a=o.createRadialGradient(64,64,4,64,64,64);a.addColorStop(0,"rgba(255,255,255,0.95)"),a.addColorStop(.35,"rgba(255,255,255,0.28)"),a.addColorStop(1,"rgba(255,255,255,0)"),o.fillStyle=a,o.fillRect(0,0,128,128),o.drawImage(s,30,30,68,68);let l=new Yn(r);l.colorSpace=Ut;let c=this.highlight.material;c.map&&c.map!==this.glowTex&&c.map.dispose(),c.map=l,c.needsUpdate=!0},s.onerror=()=>{},s.src=i}};function gf(n){let e=n.map;e&&e.dispose(),n.dispose()}var nt=require("obsidian");function Xr(n){let e=JSON.parse(JSON.stringify(Vh));if(!n||typeof n!="object")return e;let t=n,i=e;for(let s of Object.keys(e)){let r=t[s];if(r==null)continue;let o=i[s];if(o&&typeof o=="object"&&!Array.isArray(o)){let a=typeof r=="object"&&r!==null?r:{};i[s]={...o,...a}}else if(Array.isArray(o)){let a=Array.isArray(r)?r:[];i[s]=a.filter(l=>l!==null&&typeof l=="object")}else i[s]=r}return e}var Pn=require("obsidian");var qr={filename:["equals","contains","startsWith","endsWith","matches"],path:["equals","contains","startsWith","endsWith","matches"],extension:["equals","isIn","isNotIn"],folder:["isIn","isNotIn","contains","matches"],tag:["equals","contains","startsWith"],property:["exists","notExists","equals","contains"],heading:["equals","contains","startsWith"],time:["equals"]},Jx=["S","M","T","W","T","F","S"],Yr=class extends Pn.Modal{constructor(t,i,s,r,o){super(t);this.store=i;this.getSettings=s;this.saveRule=r;this.rule=o?JSON.parse(JSON.stringify(o)):{id:Nn("rule"),name:"New rule",enabled:!0,match:"all",conditions:[],action:{type:"icon",iconId:"si-lucide-star"},createdAt:Date.now()}}onOpen(){let{contentEl:t}=this;t.addClass("si-rule-editor");let i=t.createDiv({cls:"si-rule-header"}),s=i.createEl("input",{cls:"si-rule-name",attr:{placeholder:"Rule name",spellcheck:"false"},text:this.rule.name});s.value=this.rule.name,s.addEventListener("input",()=>this.rule.name=s.value||"Untitled rule");let r=i.createEl("button",{cls:"si-toggle"+(this.rule.enabled?" is-on":""),attr:{type:"button","aria-label":"Enabled"}});r.addEventListener("click",()=>{this.rule.enabled=!this.rule.enabled,r.toggleClass("is-on",this.rule.enabled)});let o=t.createDiv({cls:"si-rule-match"});o.createSpan({cls:"si-label",text:"Match"});let a=Ks([{value:"all",label:"All conditions"},{value:"any",label:"Any condition"}],this.rule.match,E=>{this.rule.match=E,this.refreshPreview()});o.appendChild(a);let l=t.createDiv({cls:"si-rule-section"}),c=l.createDiv({cls:"si-section-head"});c.createSpan({cls:"si-section-title",text:"Conditions"});let h=c.createEl("button",{cls:"si-btn si-btn-small",attr:{type:"button"}});h.createSpan({text:"+ Add condition"}),h.addEventListener("click",()=>{this.rule.conditions.push({id:Nn("cond"),type:"filename",op:"contains",value:""}),u(l),this.refreshPreview()});let d=l.createDiv({cls:"si-cond-list"}),u=E=>{d.empty(),this.rule.conditions.length===0&&d.appendChild(ii("No conditions yet","Add one \u2014 e.g. file name contains \u201Cnote\u201D.")),this.rule.conditions.forEach((S,C)=>{d.appendChild(this.buildCondRow(S,C,()=>{this.rule.conditions.splice(C,1),u(E),this.refreshPreview()}))})};u(l);let p=t.createDiv({cls:"si-rule-section"});p.createDiv({cls:"si-section-title",text:"Action"});let g=p.createDiv({cls:"si-action-editor"}),y=()=>{g.empty();let E=Ks([{value:"icon",label:"Set icon"},{value:"random",label:"Random from collection"},{value:"randomDataview",label:"Random from Dataview"},{value:"clear",label:"Use Obsidian default"}],this.rule.action.type,S=>{S==="icon"?this.rule.action={type:"icon",iconId:"si-lucide-star"}:S==="random"?this.rule.action={type:"random",collectionId:this.getSettings().collections[0]?.id??""}:S==="randomDataview"?this.rule.action={type:"randomDataview",dataviewCollectionId:this.getSettings().dataviewCollections[0]?.id??""}:this.rule.action={type:"clear"},y(),this.refreshPreview()});if(g.appendChild(E),this.rule.action.type==="icon"){let S=g.createDiv({cls:"si-action-row"}),C=S.createDiv({cls:"si-action-preview"}),x=bt(this.rule.action.iconId);x?(ze(C,x.id,32),this.rule.action.color&&(C.style.color=this.rule.action.color)):C.setText("?");let T=S.createEl("button",{cls:"si-btn",attr:{type:"button"}});T.createSpan({text:x?`Change icon (${x.name})`:"Choose icon\u2026"});let I=this.rule.action;T.addEventListener("click",()=>{new si(this.app,()=>this.store,{title:"Icon for this rule",onPick:R=>{R&&(this.rule.action={type:"icon",iconId:R.id,color:I.type==="icon"?I.color:void 0},y(),this.refreshPreview())}}).open()})}else if(this.rule.action.type==="random"){let S=g.createDiv({cls:"si-action-row"});S.createSpan({cls:"si-label",text:"Collection"});let C=S.createEl("select",{cls:"dropdown"}),x=this.getSettings().collections;x.length===0&&C.createEl("option",{text:"No collections yet \u2014 create one in the Manager",value:""});for(let I of x)C.createEl("option",{text:`${I.name} (${I.iconIds.length})`,value:I.id});C.value=this.rule.action.collectionId;let T=this.rule.action;C.addEventListener("change",()=>{this.rule.action={type:"random",collectionId:C.value,color:T.type==="random"?T.color:void 0}})}else if(this.rule.action.type==="randomDataview"){let S=g.createDiv({cls:"si-action-row"});S.createSpan({cls:"si-label",text:"Dataview collection"});let C=S.createEl("select",{cls:"dropdown"}),x=this.getSettings().dataviewCollections;x.length===0&&C.createEl("option",{text:"No Dataview collections \u2014 add one in Settings",value:""});for(let I of x)C.createEl("option",{text:I.query?`${I.name} (${I.iconProperty||"icon"})`:`${I.name} (no query)`,value:I.id});C.value=this.rule.action.dataviewCollectionId;let T=this.rule.action;C.addEventListener("change",()=>{this.rule.action={type:"randomDataview",dataviewCollectionId:C.value,color:T.type==="randomDataview"?T.color:void 0}}),no(this.app)||g.createDiv({cls:"si-hint",text:"Dataview isn't installed or enabled \u2014 this rule falls through to the next priority until it is."})}else g.createDiv({cls:"si-hint",text:"The file/folder keeps Obsidian's built-in icon."});if(this.rule.action.type!=="clear"){let C=g.createDiv({cls:"si-action-row si-action-color-row"}).createDiv({cls:"si-action-color"});Fn(C,{value:this.rule.action.color,onChange:x=>{this.rule.action.type==="icon"?this.rule.action={type:"icon",iconId:this.rule.action.iconId,color:x??void 0}:this.rule.action.type==="random"&&(this.rule.action={type:"random",collectionId:this.rule.action.collectionId,color:x??void 0}),y(),this.refreshPreview()}})}};y();let m=t.createDiv({cls:"si-rule-section"});m.createDiv({cls:"si-section-head"}).createSpan({cls:"si-section-title",text:"Live preview"}),this.previewEl=m.createDiv({cls:"si-preview-list"}),this.refreshPreview=Pi(()=>this.renderPreview(),180),this.refreshPreview();let M=t.createDiv({cls:"si-rule-footer"}),A=M.createEl("button",{cls:"si-btn",attr:{type:"button"}});A.createSpan({text:"Cancel"}),A.addEventListener("click",()=>this.close());let b=M.createEl("button",{cls:"si-btn si-btn-primary",attr:{type:"button"}});b.createSpan({text:"Save rule"}),b.addEventListener("click",()=>{(async()=>{if(!this.rule.name.trim()){new Pn.Notice("Give the rule a name first.");return}await this.saveRule(this.rule),new Pn.Notice(`Rule \u201C${this.rule.name}\u201D saved`),this.close()})()})}onClose(){this.contentEl.empty()}buildCondRow(t,i,s){let r=createDiv({cls:"si-cond-row",attr:{"data-index":String(i)}}),o=r.createEl("select",{cls:"dropdown si-cond-type"});for(let l of Object.keys(qr))o.createEl("option",{text:kl[l],value:l});o.value=t.type,o.addEventListener("change",()=>{t.type=o.value,t.op=qr[t.type][0],t.value=t.value??"",this.rebuildRow(r,t,i,s),this.refreshPreview()}),r.appendChild(o),this.appendOpAndValue(r,t,s);let a=r.createEl("button",{cls:"si-icon-btn si-cond-remove",attr:{type:"button","aria-label":"Remove condition"}});return(0,Pn.setIcon)(a,"x"),a.addEventListener("click",s),r}rebuildRow(t,i,s,r){t.empty();let o=t.createEl("select",{cls:"dropdown si-cond-type"});for(let l of Object.keys(qr))o.createEl("option",{text:kl[l],value:l});o.value=i.type,o.addEventListener("change",()=>{i.type=o.value,i.op=qr[i.type][0],i.value=i.value??"",this.rebuildRow(t,i,s,r),this.refreshPreview()}),t.appendChild(o),this.appendOpAndValue(t,i,r);let a=t.createEl("button",{cls:"si-icon-btn si-cond-remove",attr:{type:"button"}});(0,Pn.setIcon)(a,"x"),a.addEventListener("click",r)}appendOpAndValue(t,i,s){let r=qr[i.type],o=t.createEl("select",{cls:"dropdown si-cond-op"});for(let c of r)o.createEl("option",{text:Hh[c],value:c});r.includes(i.op)||(i.op=r[0]),o.value=i.op,t.appendChild(o);let a=t.createDiv({cls:"si-cond-value"}),l=()=>{if(a.empty(),i.type==="time"){let h=a.createDiv({cls:"si-day-chips"});for(let p=0;p<7;p++){let g=h.createEl("button",{cls:"si-day-chip"+(i.days?.includes(p)?" is-on":""),attr:{type:"button"},text:Jx[p]});g.addEventListener("click",()=>{i.days=i.days??[];let y=i.days.indexOf(p);y>=0?i.days.splice(y,1):i.days.push(p),g.toggleClass("is-on",i.days.includes(p))})}let d=a.createEl("input",{cls:"si-text-input si-time-input",attr:{type:"time"}});d.value=i.from??"",d.addEventListener("input",()=>i.from=d.value),a.appendChild(d);let u=a.createEl("input",{cls:"si-text-input si-time-input",attr:{type:"time"}});u.value=i.to??"",u.addEventListener("input",()=>i.to=u.value),a.appendChild(u);return}if(i.type==="property"){let h=a.createEl("input",{cls:"si-text-input si-cond-key",attr:{placeholder:"property key (e.g. type)",spellcheck:"false"}});if(h.value=i.key??"",h.addEventListener("input",()=>i.key=h.value),a.appendChild(h),i.op==="equals"||i.op==="contains"){let d=a.createEl("input",{cls:"si-text-input",attr:{placeholder:"value",spellcheck:"false"}});d.value=i.value??"",d.addEventListener("input",()=>{i.value=d.value,this.refreshPreview()}),a.appendChild(d)}return}let c=a.createEl("input",{cls:"si-text-input",attr:{placeholder:i.type==="extension"?"md, pdf, png (comma separated)":"value",spellcheck:"false"}});c.value=i.value??"",c.addEventListener("input",()=>{i.value=c.value,this.refreshPreview()}),a.appendChild(c)};l(),o.addEventListener("change",()=>{i.op=o.value,l(),this.refreshPreview()}),t.appendChild(a)}renderPreview(){this.previewEl.empty();let t=this.app.vault.getFiles(),i=[],s=0;for(let l of t){let c=to(l,this.app),h=this.rule.conditions.filter(p=>Yl(p,c)).length,d=this.rule.conditions.length;if(d===0)break;if((this.rule.match==="all"?h===d:h>0)&&(s++,i.push({name:l.path,iconId:this.rule.action.type==="icon"?this.rule.action.iconId:null,count:h,isFolder:!1}),i.length>=20))break}if(this.rule.conditions.length===0){this.previewEl.appendChild(ii("Add a condition to see matching files","Matches update as you type."));return}let r=this.previewEl.createDiv({cls:"si-preview-head"});if(r.createSpan({cls:"si-preview-count",text:`Matches ${i.length>=20?"20+ of ":""}${s} file${s===1?"":"s"} in this vault`}),i.length===0){this.previewEl.appendChild(ii("Nothing matches yet","Loosen the conditions or add another."));return}let o=this.previewEl.createDiv({cls:"si-preview-items"}),a=this.rule.action.type!=="clear"?this.rule.action.color:void 0;for(let l of i){let c=o.createDiv({cls:"si-preview-item"}),h=c.createSpan({cls:"si-preview-icon"});if(l.iconId)try{ze(h,l.iconId),a&&(h.style.color=a)}catch{}c.createSpan({cls:"si-preview-name",text:l.name}),c.createSpan({cls:"si-preview-count-badge",text:`${l.count}/${this.rule.conditions.length}`})}}};function Qx(n){return n.conditions.length===0?"matches everything":n.conditions.map(t=>{switch(t.type){case"time":return`time ${t.days?.length?t.days.map(s=>"SMTWTFS"[s]).join("")+" ":""}${t.from??"\u2026"}\u2013${t.to??"\u2026"}`;case"property":return`property ${t.key} ${t.op} ${t.value??""}`.trim();default:return`${t.type} ${t.op} \u201C${t.value??""}\u201D`}}).join(n.match==="all"?" AND ":" OR ")}var Rl=class extends nt.PluginSettingTab{constructor(t,i){super(t,i);this.plugin=i;this.packDescriptions={lucide:"The de-facto Obsidian icon set. 2,025 icons, official tags.",material:"Google Material Symbols \u2014 full rounded set (base + fill variants).","material-outlined":"The same Material set in the outlined weight.","material-sharp":"The same Material set in the sharp weight.",star:"Original hand-crafted star icons \u2014 the Star Icons identity.",tabler:"Tabler outline \u2014 5,130 clean, modern icons with categories.","tabler-filled":"Tabler filled \u2014 1,054 solid versions of the outline set.",unicons:"Iconscout Unicons (line style) \u2014 1,215 playful icons.","unicons-solid":"Unicons in the solid style.","unicons-monochrome":"Unicons in the monochrome style.","unicons-thinline":"Unicons in the thinline style.",remix:"Remix Icon \u2014 3,078 icons (line + fill) across 20 categories.",phosphor:"Phosphor (regular weight) \u2014 1,512 geometric icons.","phosphor-bold":"Phosphor in the bold weight.","phosphor-fill":"Phosphor in the fill weight.","phosphor-light":"Phosphor in the light weight.","phosphor-thin":"Phosphor in the thin weight.","phosphor-duotone":"Phosphor in the duotone weight (two-tone).",bootstrap:"Bootstrap Icons \u2014 2,078 crisp, rounded icons.",boxicons:"Boxicons \u2014 814 filled, rounded web icons.","boxicons-solid":"Boxicons in the solid style.","boxicons-logos":"Boxicons brand logos.",heroicons:"Heroicons \u2014 324 outline icons by the Tailwind team.","heroicons-solid":"Heroicons in the solid style.",fontawesome:"Font Awesome Free \u2014 2,274 solid + regular icons (CC BY 4.0).","simple-icons":"Simple Icons \u2014 3,453 brand logos (CC0).",ionicons:"Ionicons \u2014 1,357 icons (base + outline + sharp).",antd:"Ant Design Icons \u2014 outlined/filled/twotone variants.","line-awesome":"Line Awesome \u2014 1,544 line-style icons (includes brands).",eva:"Eva Icons \u2014 490 outline + fill icons.",octicons:"Octicons \u2014 743 GitHub-style icons (all sizes).",openmoji:"OpenMoji Color \u2014 1,718 full-color emoji SVGs (CC BY-SA 4.0).","openmoji-black":"OpenMoji monochrome \u2014 1,860 line-drawn emoji.",twemoji:"Twemoji \u2014 4,009 full-color emoji SVGs (CC BY 4.0).",fluent:"Fluent Emoji \u2014 3,145 full-color flat emoji (MIT).",animals:"Emoji animals \u2014 pets & wildlife, rendered with your system emoji font.",nature:"Emoji flowers & plants \u2014 from your system emoji font.",science:"Emoji science & space \u2014 from your system emoji font."}}getSettingDefinitions(){let t=this.plugin.settings,i=(s,r,o,a)=>({name:s,desc:r,render:l=>{l.addToggle(c=>c.setValue(o()).onChange(h=>a(h)))}});return[{type:"group",heading:"General",items:[i("File explorer icons","Show resolved icons on files and folders in the sidebar.",()=>t.fileExplorerIcons,s=>{t.fileExplorerIcons=s,this.plugin.saveSettings(),this.plugin.refreshIcons()}),i("Tab icons","Show icons in the tab headers of open notes.",()=>t.tabIcons,s=>{t.tabIcons=s,this.plugin.saveSettings(),this.plugin.refreshIcons()}),i("Icon above note title","Show the resolved icon above the note title (reading view).",()=>t.inlineTitleIcons,s=>{t.inlineTitleIcons=s,this.plugin.saveSettings(),this.plugin.refreshIcons()}),{name:"\u2026also in edit mode",desc:"Show the title icon in the editor too (inserted as non-editable content).",render:s=>{s.addToggle(r=>r.setValue(t.inlineTitleEditMode).setDisabled(!t.inlineTitleIcons).onChange(o=>{t.inlineTitleEditMode=o,this.plugin.saveSettings(),this.plugin.refreshIcons()}))}},i("Icon source tooltips","Hover a file to see which icon applies and which rule decided it.",()=>t.showSourceTooltips,s=>{t.showSourceTooltips=s,this.plugin.saveSettings(),this.plugin.refreshIcons()}),i("Status bar indicator","Show the active note's icon + source in the status bar.",()=>t.statusBarIndicator,s=>{t.statusBarIndicator=s,this.plugin.saveSettings(),this.plugin.updateStatusBar()}),{name:"Refresh icons",desc:"Re-apply icons everywhere (after Obsidian updates or UI glitches).",render:s=>{s.addButton(r=>r.setButtonText("Refresh now").onClick(()=>{this.plugin.refreshIcons(),new nt.Notice("Icons refreshed")}))}}]},{type:"group",heading:"Colors",items:[{name:"Default icon color",desc:"Tint every icon that doesn't set its own color (the global default).",render:s=>this.mountSection(s,r=>{Fn(r,{value:t.defaultIconColor,onChange:o=>{t.defaultIconColor=o,this.plugin.saveSettings(),this.plugin.refreshIcons()}})})},{name:"Per file type",desc:"Each file-type icon row below has its own color button.",render:s=>this.mountSection(s,r=>{r.createDiv({cls:"si-hint",text:"Open \u201CFile type icons\u201D below \u2014 every row has a color swatch. Rules and manual overrides get colors from the rule editor and the \u201CSet icon\u2026\u201D dialog."})})}]},{type:"group",heading:"Soundscapes",items:[i("\u{1F50A} Icon Soundscapes","Play synthesized sounds on icon interactions \u2014 hover, click, and automatic icon changes.",()=>t.soundscapesEnabled,s=>{t.soundscapesEnabled=s,this.plugin.saveSettings(),s&&this.plugin.soundscape?.playKind("select")}),{name:"Sound pack",desc:"Synthesis preset for the built-in sounds.",render:s=>{s.addDropdown(r=>{for(let o of zh)r.addOption(o.id,o.label);r.setValue(t.soundPack).onChange(o=>{t.soundPack=o,this.plugin.saveSettings(),this.plugin.soundscape?.playKind("select")})})}},{name:"Intensity",desc:"How loud and pronounced the sounds are (0 = muted).",render:s=>{s.addSlider(r=>r.setLimits(0,100,5).setValue(t.soundIntensity).onChange(o=>{t.soundIntensity=o,this.plugin.saveSettings(),this.plugin.soundscape?.playKind("click")}))}},i("Hover sounds","A subtle sound when hovering icon tiles.",()=>t.soundHover,s=>{t.soundHover=s,this.plugin.saveSettings()}),i("Click sounds","A pronounced sound when picking an icon.",()=>t.soundClick,s=>{t.soundClick=s,this.plugin.saveSettings(),this.plugin.soundscape?.playKind("select")}),i("Icon-change sounds","A transition sound when a file's icon changes automatically.",()=>t.soundTransition,s=>{t.soundTransition=s,this.plugin.saveSettings()}),{name:"Custom sounds",desc:"Override any built-in sound with your own .mp3/.wav file (uploaded into the plugin folder).",render:s=>this.mountSection(s,r=>this.renderCustomSounds(r))}]},{name:`${this.plugin.store.totalCount().toLocaleString()} icons available`,desc:"Packs load on demand when enabled (downloaded once if missing, then cached locally)."},...Zr.map(s=>({type:"group",heading:s.title,items:s.packs.map(r=>this.packSetting(r))})),{name:"File type icons",desc:"Fallback icons for file extensions (used when no rule matches). Priority: override > rules > this > default.",render:s=>this.mountSection(s,r=>this.renderFileTypes(r))},{name:"Rules",desc:"Rules run top-to-bottom; the first enabled match wins. Drag to reorder.",render:s=>this.mountSection(s,r=>this.renderRules(r))},{name:"Collections",desc:"Curate icon sets here; drag & drop in the Icon Manager. Used by \u201Crandom\u201D rule actions.",render:s=>this.mountSection(s,r=>this.renderCollections(r))},{name:"Dataview collections",desc:"Dynamic icon sets generated by Dataview queries \u2014 used by \u201Crandom from Dataview\u201D rule actions.",render:s=>this.mountSection(s,r=>this.renderDataview(r))},{name:"Data",desc:"Export, import, reset and diagnostics.",render:s=>this.mountSection(s,r=>this.renderData(r))},{type:"group",heading:"About",items:[{name:"Licenses and Attribution",desc:"Project license, third-party pack licenses, required credit lines and trademark notices.",render:s=>this.mountSection(s,r=>this.renderAbout(r))}]}]}packSetting(t){let i=this.plugin.settings;return{name:qt[t]??t,desc:`${this.packDescriptions[t]??"Icon pack"} \xB7 v${this.plugin.store.getPackVersion(t)} \xB7 ${this.plugin.store.getPackCount(t).toLocaleString()} icons`,render:s=>{s.addToggle(a=>a.setValue(i.enabledPacks[t]!==!1).onChange(l=>{i.enabledPacks[t]=l,(async()=>(await this.plugin.saveSettings(),l&&await this.plugin.store.loadPack(t),this.plugin.store.notify(),this.plugin.refreshIcons()))()}));let r=s.settingEl.createDiv({cls:"si-pack-preview"}),o=["home","folder","star","heart","settings","file-text","music","cloud"];for(let a of o){let l=bt(`si-${t}-${a}`);if(l){let c=r.createSpan({cls:"si-pack-sample"});ze(c,l.id,16)}}}}}mountSection(t,i){t.settingEl.addClass("si-section"),i(t.settingEl.createDiv({cls:"si-settings-box"}))}renderFileTypes(t){let i=this.plugin.settings,s=t.createDiv({cls:"si-filetype-list"}),r=()=>{s.empty();let o=this.fileTypeRow(s,"*",i.defaultIcon??null,"Default icon");for(let[h,d]of Object.entries(i.fileTypeDefaults))this.fileTypeRow(s,h,d,`.${h} files`);let a=s.createDiv({cls:"si-filetype-add"}),l=a.createEl("input",{cls:"si-text-input",attr:{placeholder:"ext (e.g. md)",spellcheck:"false"}}),c=a.createEl("button",{cls:"si-btn",attr:{type:"button"}});c.createSpan({text:"Add"}),c.addEventListener("click",()=>{let h=ru(l.value);h&&new si(this.app,()=>this.plugin.store,{title:`Icon for .${h} files`,onPick:d=>{d&&(i.fileTypeDefaults[h]=d.id,this.plugin.saveSettings().then(()=>{this.plugin.refreshIcons(),r()}))}}).open()})};r()}fileTypeRow(t,i,s,r){let o=this.plugin.settings,a=i==="*"?o.defaultIconColor:o.fileTypeDefaultColors[i],l=t.createDiv({cls:"si-filetype-row"}),c=l.createSpan({cls:"si-filetype-label",text:r}),h=l.createSpan({cls:"si-filetype-icon"});s?(ze(h,s,18),a&&(h.style.color=a)):h.setText("\u2014");let d=l.createEl("button",{cls:"si-icon-btn",attr:{type:"button","aria-label":"Set icon color"}}),u=d.createSpan({cls:"si-color-dot"+(a?" has-color":"")});a&&(u.style.background=a),d.addEventListener("click",()=>{fo(this.app,{title:`Color for ${r}`,initial:a??null}).then(g=>{g!==null&&(i==="*"?o.defaultIconColor=g.color:g.color?o.fileTypeDefaultColors[i]=g.color:delete o.fileTypeDefaultColors[i],this.plugin.saveSettings().then(()=>{this.plugin.refreshIcons(),this.update()}))})});let p=l.createEl("button",{cls:"si-btn si-btn-small",attr:{type:"button"}});if(p.createSpan({text:"Change"}),p.addEventListener("click",()=>{new si(this.app,()=>this.plugin.store,{title:`Icon for ${r}`,allowColor:!0,color:a??null,onPick:(g,y)=>{i==="*"?(o.defaultIcon=g?g.id:null,o.defaultIconColor=y??o.defaultIconColor):g?(o.fileTypeDefaults[i]=g.id,y?o.fileTypeDefaultColors[i]=y:delete o.fileTypeDefaultColors[i]):(delete o.fileTypeDefaults[i],delete o.fileTypeDefaultColors[i]),this.plugin.saveSettings().then(()=>{this.plugin.refreshIcons(),this.update()})}}).open()}),i!=="*"){let g=l.createEl("button",{cls:"si-icon-btn",attr:{type:"button"}});(0,nt.setIcon)(g,"x"),g.addEventListener("click",()=>{(async()=>(delete o.fileTypeDefaults[i],delete o.fileTypeDefaultColors[i],await this.plugin.saveSettings(),this.plugin.refreshIcons(),this.update()))()})}}renderRules(t){let i=this.plugin.settings,s=t.createDiv({cls:"si-rule-list"}),r=()=>{s.empty(),i.rules.length===0&&s.createDiv({cls:"si-empty",text:"No rules yet \u2014 add your first rule"}),i.rules.forEach((o,a)=>{let l=s.createDiv({cls:"si-rule-row",attr:{draggable:"true","data-index":String(a)}}),c=l.createSpan({cls:"si-drag-handle"});(0,nt.setIcon)(c,"grip-vertical");let h=l.createEl("button",{cls:"si-toggle"+(o.enabled?" is-on":""),attr:{type:"button","aria-label":"Enable rule"}});h.addEventListener("click",()=>{(async()=>(o.enabled=!o.enabled,await this.plugin.saveSettings(),this.plugin.refreshIcons(),r()))()});let d=l.createDiv({cls:"si-rule-body"});d.createDiv({cls:"si-rule-name",text:o.name}),d.createDiv({cls:"si-rule-summary",text:Qx(o)});let u=l.createSpan({cls:"si-rule-action"}),p=o.action;if(p.type==="icon")ze(u,p.iconId,18);else if(p.type==="random"){let m=i.collections.find(f=>f.id===p.collectionId);u.setText(`\u{1F3B2} ${m?.name??"collection"}`)}else if(p.type==="randomDataview"){let m=i.dataviewCollections.find(f=>f.id===p.dataviewCollectionId);u.setText(`\u{1F4CA} ${m?.name??"dataview query"}`)}else u.setText("default");if(p.type!=="clear"&&p.color){u.style.color=p.color;let m=u.createSpan({cls:"si-color-dot has-color"});m.style.background=p.color}let g=l.createEl("button",{cls:"si-icon-btn",attr:{type:"button"}});(0,nt.setIcon)(g,"pencil"),g.addEventListener("click",()=>{new Yr(this.app,this.plugin.store,()=>this.plugin.settings,async m=>{let f=i.rules.findIndex(M=>M.id===m.id);f>=0&&(i.rules[f]=m),await this.plugin.saveSettings(),this.plugin.refreshIcons(),r()},o).open()});let y=l.createEl("button",{cls:"si-icon-btn",attr:{type:"button"}});(0,nt.setIcon)(y,"trash"),y.addEventListener("click",()=>{(async()=>(i.rules=i.rules.filter(m=>m.id!==o.id),await this.plugin.saveSettings(),this.plugin.refreshIcons(),r()))()}),l.appendChild(c),l.appendChild(h),l.appendChild(d),l.appendChild(u),l.appendChild(g),l.appendChild(y)}),ho(s,{onReorder:(o,a)=>{(async()=>{let[l]=i.rules.splice(o,1);i.rules.splice(a,0,l),await this.plugin.saveSettings(),this.plugin.refreshIcons(),r()})()}})};r(),new nt.Setting(t).addButton(o=>o.setButtonText("\uFF0B Add rule").setCta().onClick(()=>{new Yr(this.app,this.plugin.store,()=>this.plugin.settings,async a=>{i.rules.push(a),await this.plugin.saveSettings(),this.plugin.refreshIcons(),this.update()}).open()}))}renderCollections(t){let i=this.plugin.settings,s=t.createDiv({cls:"si-col-summary"});i.collections.length===0&&s.createDiv({cls:"si-empty",text:"No collections yet"});for(let r of i.collections){let o=s.createDiv({cls:"si-col-summary-row"}),a=o.createSpan({cls:"si-side-item-icon"});ze(a,r.iconIds[0]??"si-lucide-folder"),o.createSpan({cls:"si-col-summary-name",text:r.name}),o.createSpan({cls:"si-col-summary-count",text:`${r.iconIds.length} icons`});let l=o.createEl("button",{cls:"si-btn si-btn-small",attr:{type:"button"}});l.createSpan({text:"Manage"}),l.addEventListener("click",()=>{this.plugin.openManager()})}new nt.Setting(t).addButton(r=>r.setButtonText("Open Icon Manager").onClick(()=>{this.plugin.openManager()}))}renderDataview(t){let i=this.plugin.settings,s=t.createDiv({cls:"si-hint si-dv-status"});(()=>{let d=no(this.app);s.setText(d?"\u2713 Dataview detected \u2014 queries run live and refresh automatically on vault changes.":"\u26A0 Dataview is not installed or enabled. Install the \u201CDataview\u201D community plugin to use dynamic collections."),s.toggleClass("is-ok",d)})();let o=t.createDiv({cls:"si-dv-list"}),a=()=>{o.empty(),i.dataviewCollections.length===0&&o.createDiv({cls:"si-empty",text:"No Dataview collections yet"});for(let d of i.dataviewCollections)o.appendChild(this.dataviewCard(d,()=>{this.plugin.saveSettings(),this.plugin.refreshDataviewNow(),a()}))};a();let l=t.createDiv({cls:"si-dv-actions"}),c=l.createEl("button",{cls:"si-btn si-btn-primary",attr:{type:"button"}});c.createSpan({text:"\uFF0B Add Dataview collection"}),c.addEventListener("click",()=>{i.dataviewCollections.push({id:Nn("dvcol"),name:"New collection",query:"LIST icon FROM #project",iconProperty:"icon"}),this.plugin.saveSettings(),a()});let h=l.createEl("button",{cls:"si-btn",attr:{type:"button"}});h.createSpan({text:"Refresh now"}),h.addEventListener("click",()=>{this.plugin.refreshDataviewNow().then(()=>{new nt.Notice("Dataview collections refreshed")})})}dataviewCard(t,i){let s=this.plugin.settings,r=createDiv({cls:"si-dv-card"}),o=r.createDiv({cls:"si-dv-row"});o.createSpan({cls:"si-label si-dv-label",text:"Name"});let a=o.createEl("input",{cls:"si-text-input",attr:{placeholder:"Collection name",spellcheck:"false"}});a.value=t.name,a.addEventListener("change",()=>{t.name=a.value.trim()||"Untitled collection",i()});let l=r.createDiv({cls:"si-dv-row"});l.createSpan({cls:"si-label si-dv-label",text:"Icon property"});let c=l.createEl("input",{cls:"si-text-input si-dv-prop",attr:{placeholder:"icon",spellcheck:"false"}});c.value=t.iconProperty||"icon",c.addEventListener("change",()=>{t.iconProperty=c.value.trim()||"icon",i()});let h=r.createDiv({cls:"si-dv-row si-dv-query-row"});h.createSpan({cls:"si-label si-dv-label",text:"Query"});let d=h.createEl("textarea",{cls:"si-textarea si-dv-query",attr:{rows:"3",placeholder:"LIST icon FROM #project",spellcheck:"false"}});d.value=t.query,d.addEventListener("change",()=>{t.query=d.value.trim(),i()});let u=r.createDiv({cls:"si-dv-buttons"}),p=u.createEl("button",{cls:"si-btn si-btn-small",attr:{type:"button"}});p.createSpan({text:"Test query"});let g=u.createDiv({cls:"si-dv-result"});p.addEventListener("click",()=>{(async()=>{g.empty(),g.setText("Running\u2026");let m=await so(this.app,t.query,t.iconProperty||"icon");g.empty(),g.createSpan({cls:"si-dv-count",text:m.length?`${m.length} icon id${m.length===1?"":"s"}`:"No icon ids found"});let f=g.createSpan({cls:"si-dv-swatches"});for(let M of m.slice(0,24)){let A=bt(M),b=f.createSpan({cls:"si-pack-sample"});A?ze(b,A.id,14):b.setText("?"),b.title=M}})()});let y=u.createEl("button",{cls:"si-btn si-btn-small is-danger",attr:{type:"button"}});return y.createSpan({text:"Delete"}),y.addEventListener("click",()=>{(async()=>{if(await vi(this.app,{title:`Delete Dataview collection \u201C${t.name}\u201D?`,message:"Rules using it will fall back to the next priority.",confirmLabel:"Delete",danger:!0})){s.dataviewCollections=s.dataviewCollections.filter(f=>f.id!==t.id);for(let f of s.rules)f.action.type==="randomDataview"&&f.action.dataviewCollectionId===t.id&&(f.action={type:"clear"});i()}})()}),r}renderCustomSounds(t){let i=this.plugin.settings;t.createDiv({cls:"si-hint",text:"Upload an audio file to replace a built-in sound (animals included \u2014 dog \u2192 bark, cat \u2192 meow\u2026). Files are copied into the plugin folder and used as-is (the intensity slider still controls volume)."});let s=t.createDiv({cls:"si-sound-list"}),r=()=>{s.empty();for(let o of Fl){let a=s.createDiv({cls:"si-sound-group",text:o.title});for(let l of o.kinds)this.soundRow(s,l,i.customSounds[l],r)}};r()}soundRow(t,i,s,r){let o=this.plugin.settings,a=t.createDiv({cls:"si-sound-row"});a.createSpan({cls:"si-sound-kind",text:Ol[i]});let l=a.createSpan({cls:"si-sound-file"+(s?" has-file":""),text:s?s.split("/").pop()??s:"synthesized"});l.title=s??"";let c=a.createEl("button",{cls:"si-btn si-btn-small",attr:{type:"button"}});c.createSpan({text:"Play"}),c.addEventListener("click",()=>this.plugin.soundscape?.playKind(i));let h=a.createEl("button",{cls:"si-btn si-btn-small",attr:{type:"button"}});if(h.createSpan({text:"Upload"}),h.addEventListener("click",()=>{let d=createEl("input",{parent:document.body,attr:{type:"file",accept:"audio/*"}});d.addEventListener("change",()=>{let u=d.files?.[0];d.remove(),u&&(async()=>{try{let p=await u.arrayBuffer(),g=(0,nt.normalizePath)(`${this.plugin.app.vault.configDir}/plugins/${this.plugin.manifest.id}/sounds`);await this.plugin.app.vault.adapter.mkdir(g).catch(()=>{});let y=(u.name.split(".").pop()??"mp3").toLowerCase().replace(/[^a-z0-9]/g,"")||"mp3",m=(0,nt.normalizePath)(`${g}/${i}-${Date.now().toString(36)}.${y}`);await this.plugin.app.vault.adapter.writeBinary(m,p),o.customSounds[i]=m,await this.plugin.saveSettings();let f=await this.plugin.soundscape?.loadCustom(i,m);new nt.Notice(f?`Sound loaded for \u201C${Ol[i]}\u201D`:"Sound file could not be decoded"),r()}catch(p){new nt.Notice("Could not save the sound file"),console.warn("[Star Icons] sound upload failed",p)}})()}),d.click()}),s){let d=a.createEl("button",{cls:"si-btn si-btn-small",attr:{type:"button"}});d.createSpan({text:"Clear"}),d.addEventListener("click",()=>{delete o.customSounds[i],this.plugin.saveSettings(),this.plugin.soundscape?.clearCustom(i),r()})}}renderData(t){new nt.Setting(t).setName("Export").setDesc("Download your overrides, rules, collections, favorites and tags as JSON.").addButton(i=>i.setButtonText("Export JSON").onClick(()=>{nu("star-icons-settings.json",this.plugin.settings)})),new nt.Setting(t).setName("Import").setDesc("Restore from an exported JSON file.").addButton(i=>{i.setButtonText("Import JSON").onClick(()=>{let s=createEl("input",{parent:document.body,attr:{type:"file",accept:"application/json"}});s.addEventListener("change",()=>{let r=s.files?.[0];s.remove(),r&&(async()=>{try{let o=await r.text();this.plugin.settings=Xr(JSON.parse(o)),await this.plugin.saveSettings(),this.plugin.refreshIcons(),this.update(),new nt.Notice("Settings imported")}catch{new nt.Notice("Could not parse that JSON file")}})()}),s.click()})}),new nt.Setting(t).setName("Reset").setDesc("Restore factory defaults (favorites, rules, collections\u2026).").addButton(i=>i.setButtonText("Reset all").setDestructive().onClick(()=>{(async()=>await vi(this.app,{title:"Reset all Star Icons settings?",message:"This cannot be undone.",confirmLabel:"Reset all",danger:!0})&&(this.plugin.settings=Xr(void 0),await this.plugin.saveSettings(),this.plugin.refreshIcons(),this.update()))()})),new nt.Setting(t).setName("Report a bug").setDesc("Copy a diagnostic report (versions, platform, pack state) to paste into an issue.").addButton(i=>i.setButtonText("Open report dialog").onClick(()=>{new On(this.app,{pluginVersion:this.plugin.manifest.version,appVersion:Zs(this.app),packs:Rt.length,enabledPacks:Rt.filter(s=>this.plugin.settings.enabledPacks[s]!==!1).length,icons:this.plugin.store.totalCount(),reportUrl:this.plugin.settings.reportUrl||is}).open()})),new nt.Setting(t).setName("Issue tracker URL (optional)").setDesc("If set, the bug report dialog gets an \u201COpen issue page\u201D button.").addText(i=>i.setPlaceholder("https://github.com/you/star-icons/issues").setValue(this.plugin.settings.reportUrl).onChange(async s=>{this.plugin.settings.reportUrl=s.trim(),await this.plugin.saveSettings()}))}renderAbout(t){new nt.Setting(t).setName("Star Icons").setDesc(`Version ${this.plugin.manifest.version} \xB7 MIT License`).addButton(o=>o.setButtonText("Report a bug").onClick(()=>{new On(this.app,{pluginVersion:this.plugin.manifest.version,appVersion:Zs(this.app),packs:Rt.length,enabledPacks:Rt.filter(a=>this.plugin.settings.enabledPacks[a]!==!1).length,icons:this.plugin.store.totalCount(),reportUrl:this.plugin.settings.reportUrl||is}).open()}));let i=t.createDiv({cls:"si-licenses"}),s=o=>i.createEl("p",{text:o}),r=o=>new nt.Setting(i).setName(o).setHeading();r("Project license"),s("The Star Icons source code and original Star Icons assets are licensed under the MIT License. Third-party icon packs are not relicensed under MIT \u2014 each bundled pack keeps its original license."),r("Third-party packs"),s("Lucide (ISC) \xB7 Material Symbols incl. Outlined/Sharp (Apache 2.0) \xB7 MDI, MingCute and Carbon (Apache 2.0) \xB7 Tabler & Tabler Filled (MIT) \xB7 Bootstrap Icons (MIT) \xB7 Phosphor, all weights (MIT) \xB7 Heroicons & Solid (MIT) \xB7 Ionicons (MIT) \xB7 Ant Design (MIT) \xB7 Line Awesome (MIT) \xB7 Boxicons incl. Solid/Logos (MIT) \xB7 Octicons (MIT) \xB7 Eva Icons (MIT) \xB7 Fluent Emoji (MIT) \xB7 Hugeicons, Iconoir, TDesign, Gravity UI, Feather, Radix Icons, Jam, Pixelarticons, Teenyicons, Majesticons, Circle Flags and VSCode Icons (MIT) \xB7 Remix Icon (Remix Icon License v1.0) \xB7 Unicons, all styles (IconScout Simple License) \xB7 OpenMoji Color/Mono (CC BY-SA 4.0) \xB7 Twemoji (CC BY 4.0) \xB7 Font Awesome Free (CC BY 4.0 \xB7 OFL 1.1 \xB7 MIT) \xB7 Simple Icons (CC0 1.0) \xB7 Animals/Nature/Science (your system emoji font) \xB7 Star Icons (MIT, original)."),r("Required attribution"),s("Twemoji graphics \u2014 Twitter, Inc. (https://twemoji.twitter.com), licensed under CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)."),s("Font Awesome Free \u2014 Fonticons, Inc. (https://fontawesome.com), licensed under CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)."),s("OpenMoji \u2014 https://openmoji.org, licensed under CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/)."),r("Trademarks"),s("Brand icons are trademarks of their respective owners. Their inclusion does not imply sponsorship, endorsement, affiliation, or ownership by Star Icons.")}};var Pl=class extends kt.Plugin{constructor(){super(...arguments);this.statusBarEl=null;this.dataviewIcons={};this.dataviewRefreshTimer=null;this.lastIconByPath=new Map;this.lastTransitionAt=0;this.suppressTransitionNext=!1;this.ribbonAdded=!1}async onload(){this.settings=Xr(await this.loadData()),this.store=new ro(this.app,()=>this.manifest,()=>this.settings,()=>this.saveSettings()),this.store.registerIcons(),this.store.mountUserIcons(),this.applier=new io(this,this.app),this.soundscape=new ao(()=>this.settings,this.app),this.soundscape.preloadCustom(),this.registerView(as,t=>new go(t,this)),this.ensureRibbonIcon(),this.registerCommands(),this.registerMenus(),this.registerEvents(),this.addSettingTab(new Rl(this.app,this)),this.settings.statusBarIndicator&&this.initStatusBar(),this.store.loadManifest().then(()=>this.store.loadEnabledPacks()).then(()=>this.refreshIcons()).catch(t=>console.warn("[Star Icons] background pack load failed",t)),this.refreshDataviewNow(),this.app.workspace.onLayoutReady(()=>this.refreshIcons())}onunload(){this.dataviewRefreshTimer!==null&&(window.clearTimeout(this.dataviewRefreshTimer),this.dataviewRefreshTimer=null),this.applier.dispose()}ensureRibbonIcon(){let t=s=>{try{let r=this.addRibbonIcon(s,"Star Icons \u2014 open the Icon Manager",()=>{this.openManager()});return r&&!r.isConnected?(r.remove(),!1):(this.ribbonAdded=!0,!0)}catch{return!1}},i=()=>{if(this.ribbonAdded)return;let s=[Vi(),"star","sparkles","settings"];for(let r of s)if(t(r))return};i(),this.app.workspace.onLayoutReady(()=>i()),window.setTimeout(()=>i(),1500)}async saveSettings(){await this.saveData(this.settings)}refreshIcons(){this.applier.refreshAll(),this.updateStatusBar(),this.detectActiveIconTransition()}detectActiveIconTransition(){let t=this.app.workspace.getActiveFile();if(!t)return;let i=this.applier.resolve(t).iconId??null,s=this.lastIconByPath.has(t.path),r=this.lastIconByPath.get(t.path)??null;if(this.suppressTransitionNext)this.suppressTransitionNext=!1;else if(s&&i!==null&&i!==r){let o=Date.now();o-this.lastTransitionAt>2e3&&(this.lastTransitionAt=o,this.soundscape?.transition())}this.lastIconByPath.set(t.path,i)}getDataviewResults(){return this.dataviewIcons}hasDataviewCollections(){return this.settings.dataviewCollections.some(t=>t.query?.trim())}async refreshDataviewNow(){let t=this.settings.dataviewCollections.filter(s=>s.query?.trim());if(!t.length){Object.keys(this.dataviewIcons).length&&(this.dataviewIcons={},this.refreshIcons());return}let i={};await Promise.all(t.map(async s=>{i[s.id]=await so(this.app,s.query,s.iconProperty||"icon")})),JSON.stringify(i)!==JSON.stringify(this.dataviewIcons)&&(this.dataviewIcons=i,this.refreshIcons())}scheduleDataviewRefresh(){this.dataviewRefreshTimer===null&&(this.dataviewRefreshTimer=window.setTimeout(()=>{this.dataviewRefreshTimer=null,this.refreshDataviewNow()},3e3))}async openManager(){let t=this.app.workspace.getLeavesOfType(as);if(t.length>0){await this.app.workspace.revealLeaf(t[0]);return}let i=this.app.workspace.getRightLeaf(!1);if(!i){new kt.Notice("Could not open the Icon Manager.");return}await i.setViewState({type:as,active:!0}),await this.app.workspace.revealLeaf(i)}openGalaxy(){new Il(this.app,this.store,{onSelect:t=>{for(let i of this.app.workspace.getLeavesOfType(as)){let s=i.view;typeof s.selectIcon=="function"&&s.selectIcon(t)}}}).open()}async setOverrideForActiveFile(t,i){let s=this.lastActiveFile();if(!s){new kt.Notice("No active file.");return}this.settings.overrides[s.path]=t,i?this.settings.overrideColors[s.path]=i:delete this.settings.overrideColors[s.path],this.suppressTransitionNext=!0,await this.saveSettings(),this.refreshIcons(),new kt.Notice(`Icon set for \u201C${s.basename}\u201D`)}lastActiveFile(){let t=this.app.workspace.getActiveFile();if(t)return t;for(let i of this.app.workspace.getLastOpenFiles()){let s=this.app.vault.getFileByPath(i);if(s)return s}return null}pickerSound(){return{hover:t=>this.soundscape?.hover(t),pick:t=>this.soundscape?.pick(t)}}async pickIconFor(t){let i=!!this.settings.overrides[t.path];new si(this.app,()=>this.store,{title:`Icon for \u201C${t.name}\u201D`,allowNone:i,allowColor:!0,color:this.settings.overrideColors[t.path]??null,sound:this.pickerSound(),onPick:(s,r)=>{s?(this.settings.overrides[t.path]=s.id,r?this.settings.overrideColors[t.path]=r:delete this.settings.overrideColors[t.path]):(delete this.settings.overrides[t.path],delete this.settings.overrideColors[t.path]),this.suppressTransitionNext=!0,this.saveSettings(),this.refreshIcons()}}).open()}async pickColorFor(t){let i=await fo(this.app,{title:`Icon color for \u201C${t.name}\u201D`,initial:this.settings.overrideColors[t.path]??null});i!==null&&(i.color?this.settings.overrideColors[t.path]=i.color:delete this.settings.overrideColors[t.path],await this.saveSettings(),this.refreshIcons())}async pickColorForActiveFile(){let t=this.lastActiveFile();if(!t){new kt.Notice("No active file.");return}await this.pickColorFor(t)}async copyIconName(t){let s=this.applier.resolve(t).iconId??"default";await navigator.clipboard.writeText(s),new kt.Notice(`Copied ${s}`)}initStatusBar(){this.statusBarEl=this.addStatusBarItem(),this.statusBarEl.addClass("si-status"),this.statusBarEl.setAttribute("aria-label","Star Icons \u2014 click to open manager"),this.statusBarEl.addEventListener("click",()=>{this.openManager()}),this.updateStatusBar()}updateStatusBar(){if(!this.statusBarEl)return;this.statusBarEl.empty();let t=this.app.workspace.getActiveFile();if(t){let s=this.applier.resolve(t);if(s.iconId){let r=this.statusBarEl.createSpan({cls:"si-status-icon"});try{(0,kt.setIcon)(r,s.iconId)}catch{}r.style.color=s.color??"",r.querySelector("svg")?.setAttribute("width","14"),r.querySelector("svg")?.setAttribute("height","14"),this.statusBarEl.createSpan({cls:"si-status-text",text:s.detail}),this.statusBarEl.title=`${js(s.iconId)} \u2014 ${s.detail}`;return}}let i=this.statusBarEl.createSpan({cls:"si-status-icon"});try{(0,kt.setIcon)(i,Vi())}catch{}i.querySelector("svg")?.setAttribute("width","14"),i.querySelector("svg")?.setAttribute("height","14"),this.statusBarEl.createSpan({cls:"si-status-text",text:"Star Icons"})}registerCommands(){this.addCommand({id:"open-manager",name:"Open the Icon Manager",callback:()=>{this.openManager()}}),this.addCommand({id:"open-galaxy-view",name:"Open Galaxy View (3D)",callback:()=>this.openGalaxy()}),this.addCommand({id:"set-icon-active-file",name:"Set icon for the active file\u2026",callback:()=>{let t=this.app.workspace.getActiveFile();t&&this.pickIconFor(t)}}),this.addCommand({id:"remove-icon-active-file",name:"Remove icon from the active file",callback:async()=>{let t=this.app.workspace.getActiveFile();t&&(delete this.settings.overrides[t.path],delete this.settings.overrideColors[t.path],await this.saveSettings(),this.refreshIcons())}}),this.addCommand({id:"copy-icon-name-active-file",name:"Copy the active file's icon name",callback:()=>{let t=this.app.workspace.getActiveFile();t&&this.copyIconName(t)}}),this.addCommand({id:"pick-and-copy-icon",name:"Pick an icon and copy its name",callback:()=>{new si(this.app,()=>this.store,{title:"Copy an icon name",sound:this.pickerSound(),onPick:t=>{t&&navigator.clipboard.writeText(t.id).then(()=>{new kt.Notice(`Copied ${t.id}`)})}}).open()}}),this.addCommand({id:"refresh-icons",name:"Refresh icons everywhere",callback:()=>{this.refreshIcons(),new kt.Notice("Icons refreshed")}}),this.addCommand({id:"insert-icon-at-cursor",name:"Insert an icon at the cursor",editorCallback:t=>{new si(this.app,()=>this.store,{title:"Insert an icon",sound:this.pickerSound(),onPick:i=>{i&&po(this.app,{title:`Insert \u201C${i.name}\u201D`}).then(s=>{s&&t.replaceSelection(Di(i.svg,s))})}}).open()}}),this.addCommand({id:"report-bug",name:"Report a bug\u2026",callback:()=>{new On(this.app,{pluginVersion:this.manifest.version,appVersion:Zs(this.app),packs:Rt.length,enabledPacks:Rt.filter(t=>this.settings.enabledPacks[t]!==!1).length,icons:this.store.totalCount(),reportUrl:this.settings.reportUrl||is}).open()}}),this.addCommand({id:"delete-all-user-tags",name:"Delete all user tags",callback:async()=>{await vi(this.app,{title:"Delete all user tags?",message:"Every custom tag will be removed from all icons.",confirmLabel:"Delete all",danger:!0})&&await this.store.clearAllUserTags()}})}registerMenus(){this.registerEvent(this.app.workspace.on("file-menu",(t,i)=>{!(i instanceof kt.TFile)&&!(i instanceof kt.TFolder)||(t.addSeparator(),t.addItem(s=>s.setTitle("Set icon\u2026").setIcon(Vi()).onClick(()=>{this.pickIconFor(i)})),t.addItem(s=>s.setTitle("Copy icon name").setIcon("copy").onClick(()=>{this.copyIconName(i)})),t.addItem(s=>s.setTitle("Set icon color\u2026").setIcon("palette").onClick(()=>{this.pickColorFor(i)})),this.settings.overrides[i.path]&&t.addItem(s=>s.setTitle("Remove icon override").setIcon("trash").onClick(async()=>{delete this.settings.overrides[i.path],delete this.settings.overrideColors[i.path],await this.saveSettings(),this.refreshIcons()})),this.settings.overrideColors[i.path]&&t.addItem(s=>s.setTitle("Remove color override").setIcon("undo").onClick(async()=>{delete this.settings.overrideColors[i.path],await this.saveSettings(),this.refreshIcons()})))})),this.registerEvent(this.app.workspace.on("editor-menu",t=>{let i=this.app.workspace.getActiveFile();i&&t.addItem(s=>s.setTitle("Set icon for this note\u2026").setIcon(Vi()).onClick(()=>{this.pickIconFor(i)}))}))}registerEvents(){let t=Pi(()=>{this.refreshIcons(),this.hasDataviewCollections()&&this.scheduleDataviewRefresh()},200);this.registerEvent(this.app.workspace.on("layout-change",t)),this.registerEvent(this.app.workspace.on("file-open",t)),this.registerEvent(this.app.vault.on("create",t)),this.registerEvent(this.app.vault.on("delete",t)),this.registerEvent(this.app.vault.on("rename",t)),this.registerEvent(this.app.vault.on("modify",t)),this.registerEvent(this.app.metadataCache.on("changed",t))}},e_=Pl;
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

/* nosourcemap */