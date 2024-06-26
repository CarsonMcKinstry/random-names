export default function dyings() {
    const nm1 = [
        "I can feel blood sliding along my arm and down to my fingers. It's warmth soon turns cold and, as it reaches the tips of my finger, the drops let go and fall to the ground",
        "Blood, there's blood everywhere. It's drenched my clothes, they're sticky and heavy and red. Red, everything is red, even the ground below me is turning red with blood. My blood",
        "My hands! They're covered in blood! Wait, it's my blood? Yes, yes it is. I can feel it dripping down my body, down to the floor beneath me. Oh god, this is bad, this is really bad",
        "Blood slides along my body, beneath my clothes and down to the floor. It's warm, somehow it feels kind of nice. But it shouldn't, surely this is the end of me, surely I'm dying",
        "It's warm, it's warm and it tickles as it makes its way down my body in small rivers of crimson red. What an odd sensation, I'm dying, but it feels warm and ticklish",
        "Blood, more and more blood. It just keeps seeping out, why won't it stop? There's a puddle of my own blood beneath me and it just keeps coming, it just keeps flowing",
        "It hurts! It hurts so much! Please, make it stop, it hurts so much! I.. I can't make it stop! There's too much blood and it hurts so much, please make it stop",
        "Blood, my clothes are drenched in blood. What happened? Is this mine? Where am I? Oh god, I remember now, please, no! This can't be happening to me, please no",
        "This is it. This is the end, isn't it? Blood keeps dripping to the floor beneath me, hundreds of drops like a crimson rain of death. Yes, this is it, this is the end",
        "I'm dizzy, oh so dizzy. Why won't the room stop spinning, please make it stop. Wait, there's blood. My blood! Oh god, I remember now. No, this can't be the end, right? Yet I feel so weak",
        "Crushed, everything is broken. My body is one big mess, I can feel it. There's a puddle of my own blood and I'm lying in it. I guess this is the end of the line for me",
        "Everything is so sticky and warm and soaked in red. It feels so heavy, but where's the pain? I don't feel any pain. Will I be alright? Will I make it out alive? But, this is my blood",
        "When will the pain stop? Somebody, please make it stop, I can't take it anymore! The ground beneath me is drenched in my own blood, yet still I feel the pain. I can't take this anymore",
        "My body is broken, I can feel it. Weak, crushed and beyond repair. Surely this is the end, surely there's no coming back from this. No, it can't be, it musn't be",
        'I never thought it would end like this, lying in a puddle of my own blood. But so be it, the end of my life, crushed in an instant. Fine then, let it be',
        'Weak, I feel so weak. I can feel blood running along my body, but my head is too heavy to take a look, my arm is too heavy to lift, everything is too heavy. I feel so weak',
        'So this is my end? What a joke. lying on the floor in a puddle of filth and my own blood. Pathetic. Fine, whatever. Let it be over with then, let this be the end',
        "It hurts! It hurts so much! I can't take this anymore! Somebody make it stop! I can't. I can't move, it's too heavy. My arms are too heavy. Somebody, please make it stop",
        "My body is shattered, I can see it clearly. A body shouldn't be able to lay in this position, but I am. So, this'll be my end then. Warped and twisted, with nobody to help me",
        "Where am I? Oh. I'm still here. Alone. Forgotten. Blood is still flowing out of my body, I wish it would stop. I wish it would just end already, please make it end",
    ];
    const nm2 = [
        "But I'm standing, I'm still standing. My legs beg me to give in, to let go and drop to the soft grass below, but I'm still standing.",
        "How am I even still standing? Does this mean I will be okay? No, impossible. There's no fixing this. How am I still standing?",
        "I'm down on my knees, soon I will probably be down on my back. I want to stand up, but I can't. My legs, they won't move. My body, it won't move.",
        "The only thing holding me up is this stupid chair beneath me. Maybe I can use it to stand up, walk away and find help. No, it's no use. I'm too weak.",
        "I already fell down to my knees and I'm getting weaker by the minute. Perhaps I should lay down, I am kind of tired anyway. Move body, move. Fall over, come on.",
        "Somehow I'm still standing, so maybe, just maybe I will make it. I just have to walk, one step at a time. Come on body, you can do this. Move! It's no use.",
        "I should move, there's no point standing like this. If I can stand I can move, now come on body, move! Move! Why won't it move? Is this really me end?",
        'I cannot give in. I may be down on my knees, but I cannot give in. No further. No more. But my entire body tells me lay down and rest for a while. I guess I am pretty tired.',
        "I can survive this, I know I can. I'm still standing, that counts for something right? Right. So now what? I can't move, I'm too tired, too weak. ",
        "I should lay down, why am I still standing? I'm so tired, yet somehow I'm still standing. It makes no sense. Body, please, I want to rest. Lay down already, it's okay",
        "At least I'm lying comfortably. And it'll be over soon, I just have to lay here and wait for the end. It'll be over soon, I'm sure of it.",
        "Everything hurts. My body is dying, the floor feels like rocks and my soul is crying. Everything hurts, but it'll be over soon.",
        "I can't move my body, I can't even move my head. All I can do is look, look up at the sky and wait for my end. At least it's a beautiful sky, I guess.",
        "Will this just end already. I'm exhausted. I'm dying and I know it. I'm lying in my own blood, waiting for my own end. Will it just end already.",
        "How long has it been? Minutes? Hours? Who knows. Somebody will find me soon though. Ha, as if. This is no time for jokes, stupid mind. I'm dying.",
        "I'm getting weaker by the minute, I can feel my strength diminish. I can't take it anymore, but soon it'll all be over. At last.",
        "The floor is getting colder and stickier. My blood is drying. How long have I been here? It doesn't matter, it won't be much longer.",
        "My body feels heavier and heavier. I can't move my legs, I can't move my arms, I can't even move my head. Surely this'll be over any second now.",
        "I wish I could just move my body, even if just a little. If I'm going to die I at least want to die comfortably. Ah, it's pointless anyway. Soon I'll be dead.",
        "I'm on the floor, dying and in pain and to make matters worse something is poking me in the back. It seems I can't even die comfortably.",
    ];
    const nm3 = [
        "No! No, I cannot die, not today. Not ever. I must survive, surely there must be a way. How did this happen to me, what have I done wrong? I can't.. Somebody please help me. There must be somebody nearby, please help whoever you are, wherever you are",
        "No, I refuse. I will not die today. I was strong. I am strong. I will make it out of this, you'll see. Somebody will find me and if not, I'll make it on my own. I don't need anybody anyway, I am strong. You'll see",
        "No! No way, there's no way I'm going out like this! There's no way! This is pathetic, I'm better than this. I'm stronger than this. I'll get out of here, yes, I just need to find a way. That can't be too difficult",
        "No. No! I cannot die. I will not die. I will find a way out of this mess, I will survive. There's no way I'm going out like this, this is pathetic. All I need is a little strength and to find help, that's not too hard",
        'No, I cannot give up. Giving up means I lose, I will never give up. There must be a way out of this, there must be a way I can live. Surely there must be somebody around here, somebody who can help me. Save me',
        "Wait, where am I? Oh. Right. Still here, alone. Why hasn't anybody found me yet? Am I really that lost? I don't want to die alone, somebody please find me, anybody. Please, I'm so alone",
        "How did I end up like this? When did I take a wrong turn? I can't remember, why can't I remember? I'm fading, I know it. I can't think straight anymore, somebody help me please. I need somebody, anybody",
        'How long have I been here? How much longer will this take? There must be something I can do, right? There must be a way I can still live, I just need to find it. Think, think. There must be a way',
        "Why hasn't anybody found me yet? Does no one love me? Does no one miss me? No, they must be looking for me in the wrong place. I'm sure somebody will find me soon, somebody will find me and save me",
        "Why? Why must it end like this? I'm not ready to die yet. I'm not ready. End, it musn't end. I can make it out, I can still live. I just need.. Something. Somebody. I need help, I need to live",
        "I can't take this anymore, somebody find me already, please! Aah, this is driving me insane. I can't.. Somebody.. I don't want to die, please help. I can't do this on my own, I'm to weak, I'm too broken",
        "This is driving me crazy! Move body, move! We need to get out of here, we need to live. Why are you failing me now when I need you most? Move already! We're dying! Don't give up, please",
        "There must be something I can do. Anything. I want to live, I need to live. Come on, come on, I can't die like this. How can I get out of this mess? There must be a way out, there has to be",
        "I can't.. I can't take this any longer. Live or die, just choose one already, body. I can't take this anymore. Please choose live. I don't want to die. I'm sure we can make it out of here, please choose live",
        'This is so annoying! Why am I so weak? I can make it out of this mess, I know I can. So why am I still here? Come on stupid body, stop being so weak. I can make it. We can make it, just stop being weak',
        "Is there really no way out of this mess? No way for me to live? I'm not ready to die, I'm not ready for it all to end. Somebody please find me, I need help. Somebody, please save me. I don't want to die",
        "Somebody please find me. I don't want to die, I don't want to die. There's still so much I want to do, so much I still need to do. Somebody, please save me. I can't do this on my own. I need to live",
        "Help me. Somebody, please. I need to live, I have to live. There's still so much I need to do, there are still many people who need me and I need them. I must live. I need to live",
        "Hopeless, this is absolutely hopeless. I'm going to die, I know it. But I don't want to, I don't want to die I want to live. Please, I want to live. Is there nobody out there? Please, save me",
        "There's no way out. I'm going to die, oh god I'm going to die. No, please, I want to live. I can't die, I musn't die. Somebody, anybody, please help me. I don't want to die. I don't want to die",
    ];
    const nm4 = [
        "I'm tired, so tired. But I cannot give in, I cannot sleep. To sleep means to die, I must stay strong. But my body can't take it anymore, perhaps I should just lie down for a while, save my strength until help arrives. Yes, yes that would be best. Save my strength. Help will be here soon",
        "I can't take this much longer. My entire body screams, telling me to lie down and sleep. I must resist. If I sleep I'll surely die, but I can't take this much longer. I'll just.. I'll just lie down for a little while. Save my energy, I'll make it out of this mess soon enough",
        "Everything feels so heavy. My entire body is trying to force me to the ground, to lay down and close my eyes, but I can't. I can't give in, not yet. I can still make it, I just need some rest. I guess I will lay down for a little while, but I will not close my eyes. Do not close my eyes",
        "Exhausted. I'm absolutely exhausted. Perhaps I should lay down, it'll be easier. Yes, this is more comfortable, yet I still feel exhausted. No, I cannot give in, I cannot die just yet. Help will be here soon. I'm sure of it. I just need to keep my eyes open and wait for help",
        "I'm so dizzy, everything is spinning around me. I feel like.. I think I might pass out. No, no I can't pass out. I'll lay down on the floor to save my energy. This'll do, for now. But everything is still spinning. No matter, somebody will find me soon and then everything will be alright",
        "I can't feel my legs anymore. Everything is starting to feel numb. Maybe I should lay down, yes that would be best. I need to save my energy, there's no use in wasting it like this. If I lay down I will make it out of here alive, I'm sure of it. Somebody will find me soon, so I'll just lay down for now",
        "I can't breathe, I can't breathe. Everything is so heavy, I can't breathe. I must lay down, yes, I'll just lay down. Much better, at least now I can breathe. A little anyway. That's fine, help will be here soon, I'll just lay here and wait. At least this way I'll spare my energy",
        "I'm tired. My entire body is shaking, I can't keep this up any longer. I must lay down. It's okay, I just need to make sure I keep my eyes open. Yes, that's all. This'll save me energy too, I just need to make sure I do not fall asleep. That can't be too difficult, besides, help will be here soon. I hope",
        "My entire body is aching, I can't take this anymore. I want to sleep, but I can't, it'll be my death. But I can rest, right? Yes, I'll just lay down for a while and rest, but not sleep. No, not sleep. I'm sure somebody will be here to help me soon anyway, so it's okay to just rest",
        "I can't think straight anymore, everything's becoming a blur. I should lay down, let the blood flow back to my brain. Yes, I will lay down. This'll help me figure out how to make it out or at the very least it'll save my energy until somebody finds me. Surely somebody will find me soon",
        "I'm so tired. I can no longer feel my legs, this isn't good. I need to get up, get out of here and live, but my body refuses to move. I guess I have no choice but to lay here, helpless. Somebody will help me soon though, I'm sure of it. Somebody will find me soon and save me from this mess",
        "Everything hurts, my entire body is screaming in pain. I can't take this much longer. I have to get out of here, but I can't move. My body is too weak, too tired. Somebody better find me soon, somebody better find me and get me out of here, or else I won't make it. I don't want to die",
        "Sleepy, I'm so sleepy. I just want to close my eyes and rest, but I can't. Sleeping means I die, I must resist. But I'm so tired, my eyes are like lead. No, I must keep them open, I must keep on fighting. Help is on its way, I'm sure of it. Soon I will be found and saved from this mess",
        "It's getting harder to breathe, why is it getting harder to breathe? I should move, but I can't make my body move at all. I'm too weak, too tired. All I can do is lay here and wait, wait for my end or for somebody to find me. Somebody better find me. It's getting harder to breathe",
        "I'm so exhausted, I'm so weak. I can't lift my arms, I can't even move my feet. I just want to sleep and wake up in my own bed, leave all of this behind as a mere nightmare. But I can't. I can't escape and I can't sleep, if I sleep I die. Somebody find me please, I can't sleep, but I can still escape",
        "My mind is going blank, I can barely think. I'm so exhausted, I just want to close my eyes and sleep. No! No, if I sleep it means the end. I musn't sleep. I must get out of here, but how? I can't think. Tired, oh so tired. Somebody find me please, find me and carry me home. Save me so I can sleep",
        "It's very quiet out here, or maybe my mind is just failing me. It's peaceful though, I guess. But I still need to get out of here, but how? I'm too tired and too broken to do anything, I'll need help. Oh please let help be on the way, I don't want to die out here. All alone, lost and forgotten",
        "It's actually quite peaceful here, I could stay here for hours. Not that I have a choice right now. No, I do have a choice. Give up or fight and I choose to fight. I will get away from here, as far away as possible until I've found help. Help, I need help to get out of here. I can't do it on my own, it's no use",
        "I feel so lonely. All this wouldn't be half as bad if I just had somebody with me, somebody to talk to, somebody to hold me. Why hasn't anybody found me yet? Are they even looking? Maybe they gave up. No, they'd never give up. They'll continue to look for me until they've found me, dead or alive",
        "I hope I'm not forgotten, or worse, abandoned. People are still looking for me, right? It hasn't been very long I don't think, surely there are still people looking for me. Yes, they must be. Somebody will find me soon, I just need to hang in there for just a while longer. I haven't been forgotten",
    ];
    const nm5 = [
        "This is it, isn't it? I'm going to die, I know it now. Oh god, I'm going to die right here, all alone. I don't want to die, I don't want to die. There's too much.. There's too many people.. I don't want to die",
        "This is the end, I can see it clearly. I'm beyond saving, beyond the point of no return. I'm going to die. No, please, I don't want to die. There must be something that can be done. I need.. I need a miracle",
        "Oh god, I'm going to die. I'm going to die! I know I am, look at me, there's no coming back from this. Oh god, oh god, I'm going to die. I don't want to. What do I do? What can I do? I'm going to die",
        "I can't move, I can't think, I can't do anything. This can only mean the end for me, I'm beyond the point of no return. I'm going to die.. I'm going to die! No, no, no, no, no! Please, I don't want to die",
        "I can't.. I won't.. I'm not going to make it. I can't be saved, it's too late. It's far too late. I'm going to die. Oh no, I'm going to die! Please, not yet, I don't want to die. I don't want to die",
        "Oh god, please, somebody find me, I'm going to die. I don't want to die alone, somebody find me please. I know I will die, so be it, just don't let me die all alone. Somebody, please, hurry up and find me",
        "I can't be saved anymore, I know that now. I can feel it, my body is too broken to be saved. But please, somebody, find me anyway. I don't want to die alone. I need somebody by my side until my very end",
        "I'm going to die. Oh god, I'm going to die! I can feel it, I'm going to die! Nobody has found me yet. No, please, I don't want to die all alone. Somebody, please find me. I'm so alone. I don't want to die",
        "This is the end of the line for me, isn't it? Yes, I will die soon. Alone. Oh god, I'm going to die alone. Why hasn't anybody found me yet? What if they never find me? Oh god, I don't want to die like this, please find me",
        "It'll be over soon. There's no saving me anymore, I'm too broken. I just wish I wasn't alone. Maybe.. maybe somebody will still find me, there's still time. Yes, please find me, I don't want to die alone",
        "This is it. I know it. This is the end of me, there's no saving me, not anymore. So be it. I'm going to die, I accept it. I have no choice anyway, so I might as well. Just let it be over quickly, I don't want to linger",
        "I'm.. I'm going to die. Right here, any minute now. I can feel it, my body is growing weaker by the second, there's no fixing this. Fine. Let this be the end then, but let it be a quick one. Just let go",
        "Oh god, I can see it now. This is my end. My body is broken beyond repair, I grow weaker by the minute and nobody is going to find me. It would be too late even if they did. I'm going to die. That's okay, I give up",
        "I don't think I'm going to make it. No, I know I'm not going to make it. It all ends here, this is where I die. That's okay, I don't have the strength to fight anymore anyway. I'll just wait then, wait for my final breath",
        "This isn't going to end well, is it? No. No, it's not. So.. I'm going to die.. This is my end, my final stop. I never thought it would be like this, but so be it. I can't fight any longer, I'm too tired. Too weak",
        "I'm going to die, I know it. I know there's no saving me, not anymore, it's too late. Fine, come and get me death. I'm not afraid, not anymore. Just be quick about it, I don't have all the time in the world",
        "I never thought I'd die like this, but I am. I know there's nothing that can be done for me now, I'm too far gone. Whatever. Just let it be over already, I'm tired of all of this. Just let me die in peace",
        "Why must it end like this? This is not how I wanted it to end, this is not how I want to die. But it's not like I have a choice now, there's nothing I can do. I just wish it was over already, just let me die",
        "I'm going to die. Shame it's not like in the movies, I have yet to see flashes of my life as I slowly pass away. Maybe they're yet to come. It should be soon though, I know I have little time left. Best get ready for the show",
        "It'll be over soon, I can feel it. My end is coming and there's nothing I can do. Fine. I'm too exhausted anyway. I just wish I could've done things differently. But none of that matters now, it'll be over soon. At last",
    ];
    const nm6 = [
        "I'm so sleepy. I guess I'll rest my eyes for a little while, just a little while. I may never open them again, but we'll find out soon enough. First I must rest",
        "I'm exhausted, my eyes are heavy and my body is numb. I'm going to take a quick nap, I hope it's just a quick nap. But I really need to close my eyes and rest for a while",
        "Tired, I'm so tired. I'll take a nap, a quick power nap. Or my last nap. Either way, I can't keep my eyes open any longer, I need to rest. A quick nap will be fine",
        "I'm exhausted, I need to sleep. It may be my last, but I need to sleep. I'll just take a quick nap, after that we'll see what happens. I just really need to sleep",
        "Sleepy, I feel so sleepy. A quick nap can't hurt, can it? Ah, it doesn't matter. It may be the last nap I take, but it'll be the best. I'm just too tired, I need to sleep",
        "It's getting cold, really cold. My body shivers, I can't help it. There's no way to warm up either, it's not like I can exercise. I don't think I've ever felt this cold",
        "I'm freezing. When did it get this cold? I wish I could move my body to warm up or wrap a blanket around me. At least I feel no pain, everything is numb. Numb and cold",
        "I'm getting colder, uncomfortably cold. My body is shivering uncontrollably, I wish I could make it stop. A warm bed would be amazing right now, or anything warm. It's so cold",
        "I'm cold. I wish there was somebody to hold me or something to warm me. I feel no pain, not any longer, but my body keeps shivering to warm itself up. But I'm still cold",
        "I'm so cold, I didn't notice it before, but my body started to shiver. It wasn't cold here before I don't think. It doesn't matter. My body feels numb, but I still feel cold",
        "I feel woozy. Everything is distorted and hazy. It's hard to make sense of everything, I can't focus. My head's too heavy to lift, I'll just close my eyes instead",
        "I can't focus, everything is spinning. It doesn't matter which way I look, with 1 or 2 eyes, everything keeps spinning. I feel dizzy. Even with my eyes closed I feel dizzy",
        "Everything is hazy, I can't make sense of it all. I feel light-headed, but my head's too heavy to lift. The irony. This is not the time. I must close my eyes, I can't take this",
        "I feel drowsy and dizzy, everything is spinning around me. It won't stop. I can't focus on anything, it keeps moving away from me. It's no use. I guess I'll close my eyes for now",
        "My mind is numb, I'm feeling drowsy. I can't think straight anymore, I'm too tired. The world looks distorted, I can't make sense of any of it anymore. My mind is numb",
        "I can't feel anything, anything at all. Everything is numb, it's oddly comfortable. I can't move anything either, but at least there's no pain. I can't feel anything",
        "My entire body is numb, I can't feel any pain, no discomfort, nothing at all. It's kind of nice. It's like my body is sleeping, but I'm not. Maybe I should be sleeping",
        "I can't feel my legs or my arms, in fact I can't feel anything anymore. Nothing at all. It's somewhat comforting, at least I feel no pain. I feel nothing at all",
        "Everything is numb. My body, my mind, everything. I can't feel pain or think straight, in a way it's a relief. Soon everything will be over and I can rest forever",
        "I can't feel.. anything. How wonderful, how comforting. No pain, no discomfort, no anything. Just sweet nothingness. Soon it'll all be over. Soon I'll feel nothing forever",
    ];
    const nm7 = [
        'Goodbye world',
        "I'm sorry",
        'Goodbye',
        'Forgive me',
        'So long world',
        'I love you all',
        "I'll miss you",
        'Bye',
        'Remember me',
        'Love you',
    ];
    const rnd1 = Math.floor(Math.random() * nm1.length);
    let rnd2 = Math.floor(Math.random() * nm2.length);
    const rnd3 = Math.floor(Math.random() * nm3.length);
    let rnd4 = Math.floor(Math.random() * nm4.length);
    if (rnd1 < 10) {
        while (rnd2 > 9) {
            rnd2 = Math.floor(Math.random() * nm2.length);
        }
        while (rnd4 > 9) {
            rnd4 = Math.floor(Math.random() * nm4.length);
        }
    }
    const rnd5 = Math.floor(Math.random() * nm5.length);
    const rnd6 = Math.floor(Math.random() * nm6.length);
    const rnd7 = Math.floor(Math.random() * nm7.length);
    const name = `${nm1[rnd1]}.`;
    const name2 = nm2[rnd2];
    const name3 = `${nm3[rnd3]}.`;
    const name4 = `${nm4[rnd4]}.`;
    const name5 = `${nm5[rnd5]}.`;
    const name6 = `${nm6[rnd6]}.`;
    const name7 = `${nm7[rnd7]}.`;
    let result = '';
    result += name;
    result += '\n';
    result += name2;
    result += '\n';
    result += name3;
    result += '\n';
    result += '\n';
    result += name4;
    result += '\n';
    result += '\n';
    result += name5;
    result += '\n';
    result += '\n';
    result += name6;
    result += '\n';
    result += '\n';
    result += name7;
    return result;
}
