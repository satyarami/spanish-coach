// Spanish — Advanced. Fluent conversation: subjunctive, hypotheticals, idioms, storytelling, debate.
// Lesson ids a01…a30 must never be reused or renumbered (progress is stored by id).
window.CURRICULUM_ES_A = [
{ id: "a01", title: "Ojalá", place: "Hopes and wishes",
  tip: "The subjunctive expresses wishes: 'ojalá que haga buen tiempo' (I hope the weather is good). After 'espero que' and 'ojalá', the verb shifts: haga, sea, tenga, pueda.",
  items: [
    ["I hope the weather is good", "ojalá que haga buen tiempo", "ojalá haga buen tiempo"],
    ["I hope you can come", "espero que puedas venir"],
    ["I hope it's not too late", "ojalá no sea demasiado tarde"],
    ["I want you to tell me the truth", "quiero que me digas la verdad"],
    ["I'd rather you didn't worry", "prefiero que no te preocupes"],
    ["Let's hope so", "esperemos que sí"],
    ["Hopefully nothing will go wrong", "ojalá que no salga nada mal"]
  ],
  scene: { intro: "Planning an outdoor party with Elena.", lines: [
    ["p", "La fiesta es en el jardín el sábado.", "The party is in the garden on Saturday."],
    ["y", "Say you hope the weather is good.", "ojalá que haga buen tiempo", "ojalá haga buen tiempo"],
    ["p", "Y espero que venga mucha gente.", "And I hope lots of people come."],
    ["y", "Say: let's hope so. I hope nothing goes wrong.", "esperemos que sí ojalá que no salga nada mal"]
  ] } },
{ id: "a02", title: "Es importante que", place: "Giving advice",
  tip: "Impersonal phrases also trigger the subjunctive: 'es importante que descanses' (it's important that you rest), 'es mejor que vayas' (it's better that you go).",
  items: [
    ["It's important that you rest", "es importante que descanses"],
    ["It's better that you go early", "es mejor que vayas temprano"],
    ["It's a shame you can't stay", "es una lástima que no te puedas quedar", "qué lástima que no puedas quedarte"],
    ["It's possible that it rains", "es posible que llueva"],
    ["It's normal that you feel tired", "es normal que te sientas cansado"],
    ["I suggest you talk to him", "te sugiero que hables con él"],
    ["I recommend that you not sign yet", "te recomiendo que no firmes todavía"]
  ],
  scene: { intro: "Javier is stressed about a contract.", lines: [
    ["p", "Me ofrecieron un contrato, pero no estoy seguro.", "They offered me a contract, but I'm not sure."],
    ["y", "Advise him not to sign yet.", "te recomiendo que no firmes todavía"],
    ["p", "Tienes razón. Además estoy agotado.", "You're right. Besides, I'm exhausted."],
    ["y", "Say it's normal he feels tired, and it's important that he rests.", "es normal que te sientas cansado es importante que descanses"]
  ] } },
{ id: "a03", title: "Dudo que", place: "Doubts and disbelief",
  tip: "Doubt and denial take the subjunctive: 'dudo que sea verdad' (I doubt it's true), 'no creo que llegue a tiempo' (I don't think he'll make it). But 'creo que es verdad' stays normal.",
  items: [
    ["I doubt it's true", "dudo que sea verdad"],
    ["I don't think he'll arrive on time", "no creo que llegue a tiempo"],
    ["It's unlikely to work", "es poco probable que funcione"],
    ["I'm not sure it's a good idea", "no estoy seguro de que sea buena idea"],
    ["I think it's true", "creo que es verdad"],
    ["Maybe he's right", "tal vez tenga razón", "quizás tenga razón"],
    ["It seems strange to me", "me parece raro"]
  ],
  scene: { intro: "A friend shares a rumour.", lines: [
    ["p", "Dicen que el club va a cerrar el próximo año.", "They say the club will close next year."],
    ["y", "Say you doubt it's true.", "dudo que sea verdad"],
    ["p", "Pues el presidente lo dijo.", "Well, the president said so."],
    ["y", "Say: maybe he's right, but it seems strange to you.", "tal vez tenga razón pero me parece raro", "quizás tenga razón pero me parece raro"]
  ] } },
{ id: "a04", title: "Cuando llegues", place: "Future plans with conditions",
  tip: "Talking about the future after 'cuando', 'en cuanto' and 'antes de que' uses the subjunctive: 'cuando llegues, llámame' (when you arrive, call me).",
  items: [
    ["Call me when you arrive", "llámame cuando llegues"],
    ["As soon as I know, I'll tell you", "en cuanto sepa, te aviso"],
    ["Before you leave, let's have a coffee", "antes de que te vayas, tomemos un café"],
    ["When I retire, I'll travel more", "cuando me jubile, viajaré más"],
    ["Unless it rains", "a menos que llueva"],
    ["As long as you're happy", "con tal de que seas feliz", "mientras seas feliz"],
    ["We'll decide when we have more information", "decidiremos cuando tengamos más información"]
  ],
  scene: { intro: "Carlos asks about your long-term plans.", lines: [
    ["p", "¿Y qué harás cuando dejes de trabajar?", "And what will you do when you stop working?"],
    ["y", "Say: when I retire, I'll travel more.", "cuando me jubile viajaré más", "cuando me jubile voy a viajar más"],
    ["p", "¿Volverás a México?", "Will you come back to Mexico?"],
    ["y", "Say: as soon as I know, I'll tell you.", "en cuanto sepa te aviso"]
  ] } },
{ id: "a05", title: "Si tuviera", place: "Hypotheticals",
  tip: "Unreal situations: 'si tuviera tiempo, aprendería portugués' (if I had time, I would learn Portuguese). Past subjunctive (tuviera, fuera, pudiera) plus conditional (aprendería).",
  items: [
    ["If I had more time, I would learn Portuguese", "si tuviera más tiempo, aprendería portugués"],
    ["If I were you, I would accept", "si yo fuera tú, aceptaría"],
    ["If I could live anywhere, I would choose the sea", "si pudiera vivir en cualquier lugar, elegiría el mar"],
    ["What would you do if you won the lottery?", "¿qué harías si ganaras la lotería?"],
    ["If it were cheaper, I would buy it", "si fuera más barato, lo compraría"],
    ["I would travel around the world", "viajaría por todo el mundo", "daría la vuelta al mundo"],
    ["It would depend on many things", "dependería de muchas cosas"]
  ],
  scene: { intro: "A playful question at dinner.", lines: [
    ["p", "¿Qué harías si ganaras la lotería?", "What would you do if you won the lottery?"],
    ["y", "Say you would travel around the world.", "viajaría por todo el mundo", "daría la vuelta al mundo"],
    ["p", "¿Y dónde vivirías?", "And where would you live?"],
    ["y", "Say: if I could live anywhere, I would choose the sea.", "si pudiera vivir en cualquier lugar elegiría el mar"]
  ] } },
{ id: "a06", title: "Si hubiera sabido", place: "Regrets",
  tip: "Past regrets: 'si hubiera sabido, habría venido antes' (if I had known, I would have come earlier). 'Hubiera' plus past participle, then 'habría' plus past participle.",
  items: [
    ["If I had known, I would have come earlier", "si hubiera sabido, habría venido antes", "si hubiera sabido hubiera venido antes"],
    ["I should have studied Spanish when I was young", "debí haber estudiado español de joven", "debería haber estudiado español de joven"],
    ["If I had listened to you, nothing would have happened", "si te hubiera hecho caso, no habría pasado nada"],
    ["I wish I had seen it", "ojalá lo hubiera visto"],
    ["It would have been better", "habría sido mejor", "hubiera sido mejor"],
    ["What's done is done", "lo hecho, hecho está"],
    ["No regrets", "sin arrepentimientos"]
  ],
  scene: { intro: "Elena tells you about a festival you missed.", lines: [
    ["p", "¡La Guelaguetza estuvo increíble este año!", "The Guelaguetza was incredible this year!"],
    ["y", "Say: I wish I had seen it. If I had known, I would have come earlier.", "ojalá lo hubiera visto si hubiera sabido habría venido antes", "ojalá lo hubiera visto si hubiera sabido hubiera venido antes"],
    ["p", "El próximo año vamos juntos.", "Next year we'll go together."],
    ["y", "Say: what's done is done. Next year, for sure.", "lo hecho hecho está el próximo año seguro"]
  ] } },
{ id: "a07", title: "Me dijo que", place: "Reported speech",
  tip: "Reporting: 'me dijo que vendría' (he told me he would come), 'me preguntó si quería' (she asked me if I wanted), 'me pidió que lo llamara' (he asked me to call him).",
  items: [
    ["He told me he would come", "me dijo que vendría"],
    ["She asked me if I wanted coffee", "me preguntó si quería café"],
    ["He asked me to call him", "me pidió que lo llamara"],
    ["They told us it was closed", "nos dijeron que estaba cerrado"],
    ["I told her I couldn't", "le dije que no podía"],
    ["Apparently he changed his mind", "por lo visto cambió de opinión"],
    ["That's not what he said", "eso no es lo que dijo"]
  ],
  scene: { intro: "Carlos asks about Javier, who hasn't arrived.", lines: [
    ["p", "¿Y Javier? ¿No iba a venir?", "And Javier? Wasn't he coming?"],
    ["y", "Say: he told me he would come.", "me dijo que vendría"],
    ["p", "Pues a mí me dijo que tenía trabajo.", "Well, he told me he had work."],
    ["y", "Say: apparently he changed his mind.", "por lo visto cambió de opinión"]
  ] } },
{ id: "a08", title: "Sin embargo", place: "Connecting ideas",
  tip: "Connectors make you sound fluent: sin embargo (however), por lo tanto (therefore), a pesar de que (despite the fact that), en cambio (on the other hand), de hecho (in fact).",
  items: [
    ["However, there's a problem", "sin embargo, hay un problema"],
    ["Therefore, we should wait", "por lo tanto, deberíamos esperar"],
    ["Despite the rain, we went out", "a pesar de la lluvia, salimos"],
    ["In fact, it's cheaper", "de hecho, es más barato"],
    ["On the other hand, it's farther", "en cambio, está más lejos", "por otro lado está más lejos"],
    ["Even though I'm tired, I'll go", "aunque esté cansado, iré", "aunque estoy cansado voy a ir"],
    ["In short, it's worth it", "en resumen, vale la pena"]
  ],
  scene: { intro: "Comparing two apartments with your landlord.", lines: [
    ["p", "El de la Roma es más bonito.", "The one in Roma is prettier."],
    ["y", "Say: in fact, it's cheaper. However, there's a problem.", "de hecho es más barato sin embargo hay un problema"],
    ["p", "¿Cuál?", "Which one?"],
    ["y", "Say: it's farther from the club. Therefore, we should wait.", "está más lejos del club por lo tanto deberíamos esperar"]
  ] } },
{ id: "a09", title: "Modismos", place: "Everyday idioms",
  tip: "Idioms Mexicans use constantly: meter la pata (to put your foot in it), echar una mano (to lend a hand), tomar el pelo (to pull someone's leg), estar en las nubes (to daydream).",
  items: [
    ["I put my foot in it", "metí la pata"],
    ["Can you give me a hand?", "¿me echas una mano?"],
    ["Are you pulling my leg?", "¿me estás tomando el pelo?"],
    ["I was daydreaming", "estaba en las nubes"],
    ["It costs an arm and a leg", "cuesta un ojo de la cara"],
    ["He doesn't mince words", "no tiene pelos en la lengua"],
    ["Let's get to the point", "vamos al grano"]
  ],
  scene: { intro: "Javier teases you.", lines: [
    ["p", "Oye, ¿sabías que el campo de golf es gratis los martes?", "Hey, did you know the golf course is free on Tuesdays?"],
    ["y", "Ask: are you pulling my leg?", "me estás tomando el pelo"],
    ["p", "¡Ja! Sí. Cuesta un ojo de la cara.", "Ha! Yes. It costs an arm and a leg."],
    ["y", "Say: I was daydreaming. Let's get to the point: shall we play Saturday?", "estaba en las nubes vamos al grano jugamos el sábado"]
  ] } },
{ id: "a10", title: "¿Qué onda?", place: "Mexican slang",
  tip: "Mexican slang among friends: ¿qué onda? (what's up?), padre or chido (cool), neta (really, truly), ahorita (right now, or later!), no manches (no way). Keep it casual.",
  items: [
    ["What's up?", "¿qué onda?", "que onda"],
    ["How cool!", "¡qué padre!", "que chido"],
    ["Really? Seriously?", "¿neta?", "en serio"],
    ["No way!", "¡no manches!", "no inventes"],
    ["I'll do it in a bit", "ahorita lo hago"],
    ["Everything's fine", "todo bien", "todo tranquilo"],
    ["See you, man", "nos vemos, güey", "nos vemos carnal"]
  ],
  scene: { intro: "Javier's younger cousin greets you.", lines: [
    ["p", "¿Qué onda? ¿Tú eres el amigo de Javier?", "What's up? Are you Javier's friend?"],
    ["y", "Say: what's up! Yes, everything's fine.", "qué onda sí todo bien"],
    ["p", "Javier dice que juegas golf con hándicap dieciocho.", "Javier says you play golf off eighteen."],
    ["y", "Say: really? No way, today I'm playing off twelve!", "neta no manches hoy juego con doce"]
  ] } },
{ id: "a11", title: "El debate", place: "A friendly debate",
  tip: "Debating politely: 'entiendo tu punto, pero…' (I see your point, but…), 'no lo veo así' (I don't see it that way), 'por un lado… por otro…' (on one hand… on the other…).",
  items: [
    ["I see your point, but I don't agree", "entiendo tu punto, pero no estoy de acuerdo"],
    ["I don't see it that way", "no lo veo así"],
    ["On one hand it's convenient, on the other it's expensive", "por un lado es práctico, por otro es caro"],
    ["That depends on how you look at it", "eso depende de cómo lo veas"],
    ["Let me finish", "déjame terminar"],
    ["You've convinced me", "me convenciste"],
    ["Let's agree to disagree", "estamos de acuerdo en no estar de acuerdo"]
  ],
  scene: { intro: "Elena argues that cities are better than the countryside.", lines: [
    ["p", "Vivir en la ciudad es mucho mejor. Hay de todo.", "Living in the city is much better. There's everything."],
    ["y", "Say you see her point, but you don't agree.", "entiendo tu punto pero no estoy de acuerdo"],
    ["p", "¿Por qué no?", "Why not?"],
    ["y", "Say: on one hand it's convenient, on the other it's expensive and noisy.", "por un lado es práctico por otro es caro y ruidoso"],
    ["p", "Bueno, estamos de acuerdo en no estar de acuerdo.", "Well, let's agree to disagree."]
  ] } },
{ id: "a12", title: "Negociar", place: "Negotiating a price",
  tip: "Negotiating: '¿hay margen?' (is there any flexibility?), 'es mi última oferta' (it's my final offer), 'si me lo deja en…' (if you let me have it for…).",
  items: [
    ["Is there any flexibility on the price?", "¿hay margen en el precio?", "hay algo de margen en el precio"],
    ["If you let me have it for eight thousand, I'll take it", "si me lo deja en ocho mil, me lo llevo"],
    ["It's my final offer", "es mi última oferta"],
    ["Let's meet in the middle", "partamos la diferencia", "ni tú ni yo"],
    ["I need to think about it", "necesito pensarlo"],
    ["Does that include delivery?", "¿eso incluye la entrega?"],
    ["Deal", "trato hecho"]
  ],
  scene: { intro: "Buying a hand-carved table in Oaxaca.", lines: [
    ["p", "La mesa cuesta diez mil pesos.", "The table costs ten thousand pesos."],
    ["y", "Ask if there's any flexibility on the price.", "hay margen en el precio", "hay algo de margen en el precio"],
    ["p", "Se la puedo dejar en nueve mil.", "I can let you have it for nine thousand."],
    ["y", "Say: if you let me have it for eight thousand, I'll take it.", "si me lo deja en ocho mil me lo llevo"],
    ["p", "Ocho quinientos, con entrega incluida.", "Eight and a half, delivery included."],
    ["y", "Say: deal.", "trato hecho"]
  ] } },
{ id: "a13", title: "Un brindis", place: "Giving a toast",
  tip: "A toast: 'quisiera decir unas palabras' (I'd like to say a few words), 'levantemos nuestras copas por…' (let's raise our glasses to…), '¡salud!'.",
  items: [
    ["I'd like to say a few words", "quisiera decir unas palabras"],
    ["Thank you all for being here", "gracias a todos por estar aquí"],
    ["It's an honour to celebrate with you", "es un honor celebrar con ustedes"],
    ["My daughter is getting married", "mi hija se va a casar"],
    ["I wish you a life full of love", "les deseo una vida llena de amor"],
    ["Let's raise our glasses to the couple", "levantemos nuestras copas por los novios"],
    ["Cheers!", "¡salud!"]
  ],
  scene: { intro: "Practising a toast for a family wedding.", lines: [
    ["y", "Say you'd like to say a few words, and thank everyone for being here.", "quisiera decir unas palabras gracias a todos por estar aquí"],
    ["p", "¡Muy bien! Sigue.", "Very good! Go on."],
    ["y", "Say: I wish you a life full of love.", "les deseo una vida llena de amor"],
    ["y", "Say: let's raise our glasses to the couple. Cheers!", "levantemos nuestras copas por los novios salud"]
  ] } },
{ id: "a14", title: "Condolencias", place: "Difficult moments",
  tip: "Words of comfort: 'lo siento mucho' (I'm so sorry), 'mi más sentido pésame' (my deepest condolences), 'aquí estoy para lo que necesites' (I'm here for whatever you need).",
  items: [
    ["I'm so sorry", "lo siento mucho"],
    ["My deepest condolences", "mi más sentido pésame"],
    ["I'm here for whatever you need", "aquí estoy para lo que necesites"],
    ["He was a wonderful person", "era una persona maravillosa"],
    ["Take all the time you need", "tómate todo el tiempo que necesites"],
    ["You're in my thoughts", "te tengo presente", "estás en mis pensamientos"],
    ["Don't hesitate to call me", "no dudes en llamarme"]
  ],
  scene: { intro: "Elena's uncle has passed away.", lines: [
    ["p", "Falleció mi tío el fin de semana.", "My uncle passed away over the weekend."],
    ["y", "Say: I'm so sorry. My deepest condolences.", "lo siento mucho mi más sentido pésame"],
    ["p", "Gracias. Era muy especial.", "Thank you. He was very special."],
    ["y", "Say: I'm here for whatever you need. Don't hesitate to call me.", "aquí estoy para lo que necesites no dudes en llamarme"]
  ] } },
{ id: "a15", title: "Lo que", place: "Expressing ideas precisely",
  tip: "'Lo que' means what or the thing that: 'lo que necesito es tiempo' (what I need is time), 'lo que más me importa' (what matters most to me).",
  items: [
    ["What I need is time", "lo que necesito es tiempo"],
    ["What matters most to me is my family", "lo que más me importa es mi familia"],
    ["I don't understand what you mean", "no entiendo lo que quieres decir"],
    ["That's exactly what I was thinking", "eso es justo lo que estaba pensando"],
    ["Do whatever you want", "haz lo que quieras"],
    ["The person I spoke with", "la persona con la que hablé"],
    ["The reason why I came", "la razón por la que vine"]
  ],
  scene: { intro: "A heart-to-heart with Carlos.", lines: [
    ["p", "¿Por qué viniste a México, de verdad?", "Why did you really come to Mexico?"],
    ["y", "Say: the reason why I came is to slow down.", "la razón por la que vine es bajar el ritmo", "la razón por la que vine es para ir más despacio"],
    ["p", "Te entiendo. ¿Y qué es lo que más te importa?", "I understand. And what matters most to you?"],
    ["y", "Say: what matters most to me is my family.", "lo que más me importa es mi familia"]
  ] } },
{ id: "a16", title: "La meditación", place: "Talking about inner life",
  tip: "Abstract vocabulary: la mente (the mind), la atención plena (mindfulness), soltar (to let go), estar presente (to be present). Useful for deeper conversations.",
  items: [
    ["Meditation helps me be present", "la meditación me ayuda a estar presente"],
    ["The mind is always jumping from one thought to another", "la mente siempre salta de un pensamiento a otro"],
    ["I'm learning to let go", "estoy aprendiendo a soltar"],
    ["Silence teaches a lot", "el silencio enseña mucho"],
    ["It's not about stopping thoughts", "no se trata de detener los pensamientos"],
    ["It's about observing them", "se trata de observarlos"],
    ["Everything changes", "todo cambia", "nada es permanente"]
  ],
  scene: { intro: "The meditation teacher, Elena, asks about your practice.", lines: [
    ["p", "¿Qué has aprendido con la meditación?", "What have you learned through meditation?"],
    ["y", "Say: it's not about stopping thoughts, it's about observing them.", "no se trata de detener los pensamientos se trata de observarlos"],
    ["p", "Muy bien dicho. ¿Y qué es lo más difícil?", "Well said. And what's the hardest part?"],
    ["y", "Say: the mind is always jumping from one thought to another.", "la mente siempre salta de un pensamiento a otro"]
  ] } },
{ id: "a17", title: "Contar una historia", place: "Storytelling",
  tip: "Building suspense: 'resulta que…' (it turns out that…), 'total que…' (so anyway…), 'y de repente…' (and suddenly…), 'no te lo vas a creer' (you won't believe it).",
  items: [
    ["You won't believe what happened to me", "no vas a creer lo que me pasó"],
    ["It turns out that the hotel was full", "resulta que el hotel estaba lleno"],
    ["So anyway, we slept in the car", "total que dormimos en el coche"],
    ["And suddenly a police officer knocked on the window", "y de repente un policía tocó la ventana"],
    ["In the end, everything turned out well", "al final todo salió bien"],
    ["We laughed a lot", "nos reímos mucho"],
    ["It's a long story", "es una larga historia"]
  ],
  scene: { intro: "Telling Javier about a road trip.", lines: [
    ["y", "Say: you won't believe what happened to me.", "no vas a creer lo que me pasó"],
    ["p", "¡Cuéntame!", "Tell me!"],
    ["y", "Say: it turns out the hotel was full. So anyway, we slept in the car.", "resulta que el hotel estaba lleno total que dormimos en el coche"],
    ["p", "¡No manches! ¿Y luego?", "No way! And then?"],
    ["y", "Say: in the end, everything turned out well. We laughed a lot.", "al final todo salió bien nos reímos mucho"]
  ] } },
{ id: "a18", title: "La tecnología", place: "Technology and AI",
  tip: "Tech talk: la inteligencia artificial, los datos (data), la privacidad, automatizar. Spanish tends to keep 'software' and 'hardware' in English.",
  items: [
    ["Artificial intelligence is changing everything", "la inteligencia artificial está cambiando todo"],
    ["I use AI to learn Spanish", "uso la inteligencia artificial para aprender español"],
    ["Privacy worries me", "me preocupa la privacidad"],
    ["Many jobs are going to be automated", "muchos trabajos se van a automatizar"],
    ["It's a tool, not a replacement", "es una herramienta, no un reemplazo"],
    ["The data must be protected", "hay que proteger los datos"],
    ["We have to adapt", "tenemos que adaptarnos"]
  ],
  scene: { intro: "A young engineer at a dinner asks your view.", lines: [
    ["p", "¿Usted cree que la inteligencia artificial va a quitarnos el trabajo?", "Do you think AI will take our jobs?"],
    ["y", "Say many jobs are going to be automated, but it's a tool, not a replacement.", "muchos trabajos se van a automatizar pero es una herramienta no un reemplazo"],
    ["p", "¿Y no le preocupa?", "And doesn't it worry you?"],
    ["y", "Say: privacy worries me. We have to adapt.", "me preocupa la privacidad tenemos que adaptarnos"]
  ] } },
{ id: "a19", title: "La jubilación", place: "Planning retirement",
  tip: "Planning ahead: 'tengo pensado' (I'm planning to), 'a largo plazo' (in the long term), 'me inclino por' (I'm leaning toward).",
  items: [
    ["I'm planning to retire in three years", "tengo pensado jubilarme en tres años"],
    ["I'm leaning toward somewhere warm", "me inclino por un lugar cálido"],
    ["In the long term, I'd like to live near the sea", "a largo plazo, me gustaría vivir cerca del mar"],
    ["I'll keep renting; I don't want to buy", "voy a seguir rentando, no quiero comprar"],
    ["The cost of living matters a lot", "el costo de vida importa mucho"],
    ["I want a community with golf and bridge", "quiero una comunidad con golf y bridge"],
    ["I haven't decided yet", "todavía no lo he decidido"]
  ],
  scene: { intro: "Carlos asks about your plans after work.", lines: [
    ["p", "¿Dónde te ves en cinco años?", "Where do you see yourself in five years?"],
    ["y", "Say: I'm planning to retire in three years. I'm leaning toward somewhere warm.", "tengo pensado jubilarme en tres años me inclino por un lugar cálido"],
    ["p", "¿Vas a comprar casa?", "Are you going to buy a house?"],
    ["y", "Say: no, I'll keep renting. I want a community with golf and bridge.", "no voy a seguir rentando quiero una comunidad con golf y bridge"]
  ] } },
{ id: "a20", title: "Disculparse bien", place: "Apologizing gracefully",
  tip: "A good apology: 'te debo una disculpa' (I owe you an apology), 'no fue mi intención' (it wasn't my intention), 'no volverá a pasar' (it won't happen again).",
  items: [
    ["I owe you an apology", "te debo una disculpa"],
    ["It wasn't my intention to offend you", "no fue mi intención ofenderte"],
    ["You're right to be upset", "tienes razón en estar molesto"],
    ["It won't happen again", "no volverá a pasar"],
    ["How can I make it up to you?", "¿cómo te lo puedo compensar?"],
    ["I appreciate your patience", "te agradezco la paciencia"],
    ["Water under the bridge", "agua pasada no mueve molino"]
  ],
  scene: { intro: "You forgot Javier's birthday dinner.", lines: [
    ["p", "Te estuvimos esperando ayer…", "We were waiting for you yesterday…"],
    ["y", "Say: I owe you an apology. You're right to be upset.", "te debo una disculpa tienes razón en estar molesto"],
    ["y", "Ask: how can I make it up to you?", "cómo te lo puedo compensar"],
    ["p", "Invítame una cerveza y agua pasada no mueve molino.", "Buy me a beer and it's water under the bridge."]
  ] } },
{ id: "a21", title: "Usted o tú", place: "Formality and respect",
  tip: "Choosing 'usted' or 'tú' signals respect. '¿Nos podemos tutear?' asks to switch to tú. Older people, officials and service staff often get 'usted' in Mexico.",
  items: [
    ["Can we use tú with each other?", "¿nos podemos tutear?", "podemos tutearnos"],
    ["Please, call me by my first name", "por favor, llámame por mi nombre"],
    ["With all due respect", "con todo respeto"],
    ["It's a pleasure to meet you, sir", "es un placer conocerlo, señor"],
    ["Allow me to introduce myself", "permítame presentarme"],
    ["At your service", "a sus órdenes"],
    ["I didn't mean to be rude", "no quise ser grosero"]
  ],
  scene: { intro: "Meeting the club president, Don Ricardo.", lines: [
    ["y", "Say: allow me to introduce myself. It's a pleasure to meet you, sir.", "permítame presentarme es un placer conocerlo señor"],
    ["p", "El gusto es mío. Pero por favor, nos podemos tutear.", "The pleasure is mine. But please, we can use tú."],
    ["y", "Say: perfect. Please, call me by my first name.", "perfecto por favor llámame por mi nombre"],
    ["p", "¡A tus órdenes!", "At your service!"]
  ] } },
{ id: "a22", title: "La entrevista", place: "A consulting pitch",
  tip: "Selling your experience: 'cuento con' (I have, I bring), 'me especializo en' (I specialize in), 'he liderado' (I have led), 'mi propuesta es' (my proposal is).",
  items: [
    ["I have twenty-five years of experience", "cuento con veinticinco años de experiencia"],
    ["I specialize in low-latency systems", "me especializo en sistemas de baja latencia"],
    ["I have led projects for major banks", "he liderado proyectos para bancos importantes"],
    ["My proposal is to start with a diagnosis", "mi propuesta es empezar con un diagnóstico"],
    ["We could reduce costs by thirty percent", "podríamos reducir los costos un treinta por ciento"],
    ["What are your priorities?", "¿cuáles son sus prioridades?"],
    ["I'll send you a proposal this week", "le envío una propuesta esta semana"]
  ],
  scene: { intro: "A Mexican fintech wants your advice.", lines: [
    ["p", "Cuéntenos un poco de su experiencia.", "Tell us a little about your experience."],
    ["y", "Say you have twenty-five years of experience and specialize in low-latency systems.", "cuento con veinticinco años de experiencia y me especializo en sistemas de baja latencia"],
    ["p", "¿Y cómo nos ayudaría?", "And how would you help us?"],
    ["y", "Say: my proposal is to start with a diagnosis. What are your priorities?", "mi propuesta es empezar con un diagnóstico cuáles son sus prioridades"]
  ] } },
{ id: "a23", title: "Se dice que", place: "Impersonal and passive",
  tip: "Impersonal 'se': 'se dice que' (it's said that), 'se habla español' (Spanish is spoken), 'se vende' (for sale), 'se nota' (you can tell).",
  items: [
    ["It's said that this place is haunted", "se dice que este lugar está embrujado"],
    ["You can tell you're happy", "se nota que estás contento"],
    ["How do you say 'deadline'?", "¿cómo se dice 'deadline'?", "como se dice fecha limite"],
    ["Here people eat dinner late", "aquí se cena tarde"],
    ["It's not done that way", "así no se hace"],
    ["The house was sold quickly", "la casa se vendió rápido"],
    ["It's understood", "se entiende"]
  ],
  scene: { intro: "A tour guide in Guanajuato.", lines: [
    ["p", "Este callejón tiene una leyenda muy famosa.", "This alley has a very famous legend."],
    ["y", "Say: it's said that this place is haunted, right?", "se dice que este lugar está embrujado verdad"],
    ["p", "¡Exacto! Se nota que leyó la guía.", "Exactly! You can tell you read the guidebook."],
    ["y", "Say: here people eat dinner late. Where do you recommend?", "aquí se cena tarde dónde recomienda"]
  ] } },
{ id: "a24", title: "Ironía", place: "Humour and irony",
  tip: "Irony and humour: '¡qué bonito!' said flatly means the opposite, 'ni modo' (oh well), 'para variar' (for a change, ironically), 'me cayó el veinte' (the penny dropped).",
  items: [
    ["Late again, for a change", "otra vez tarde, para variar"],
    ["Oh well", "ni modo"],
    ["The penny dropped", "me cayó el veinte"],
    ["That's the last straw", "es el colmo"],
    ["I'm kidding", "es broma", "estoy bromeando"],
    ["Don't take it the wrong way", "no lo tomes a mal"],
    ["Laughing is the best medicine", "la risa es la mejor medicina"]
  ],
  scene: { intro: "Javier arrives an hour late, again.", lines: [
    ["p", "¡Perdón, perdón! Había tráfico.", "Sorry, sorry! There was traffic."],
    ["y", "Say: late again, for a change. I'm kidding!", "otra vez tarde para variar es broma"],
    ["p", "Ya sé, ya sé. Ni modo.", "I know, I know. Oh well."],
    ["y", "Say: don't take it the wrong way. Laughing is the best medicine.", "no lo tomes a mal la risa es la mejor medicina"]
  ] } },
{ id: "a25", title: "Convencer", place: "Persuading",
  tip: "Persuading: 'imagínate que…' (imagine that…), 'piénsalo bien' (think it over), 'no tienes nada que perder' (you have nothing to lose), 'vale la pena intentarlo'.",
  items: [
    ["Imagine waking up by the sea every day", "imagínate despertar junto al mar todos los días"],
    ["Think it over", "piénsalo bien"],
    ["You have nothing to lose", "no tienes nada que perder"],
    ["It's worth trying", "vale la pena intentarlo"],
    ["Trust me", "confía en mí"],
    ["Give it a chance", "dale una oportunidad"],
    ["What's the worst that could happen?", "¿qué es lo peor que podría pasar?"]
  ],
  scene: { intro: "You try to convince Carlos to join a bridge tournament.", lines: [
    ["p", "No sé jugar bien, me da miedo.", "I don't play well, it scares me."],
    ["y", "Say: you have nothing to lose. Give it a chance.", "no tienes nada que perder dale una oportunidad"],
    ["p", "¿Y si hago el ridículo?", "And if I make a fool of myself?"],
    ["y", "Ask: what's the worst that could happen? Trust me.", "qué es lo peor que podría pasar confía en mí"]
  ] } },
{ id: "a26", title: "Problemas serios", place: "Handling a serious problem",
  tip: "Staying calm and precise: 'quiero levantar una queja formal' (I want to file a formal complaint), 'exijo una solución' (I demand a solution), 'por escrito' (in writing).",
  items: [
    ["I want to file a formal complaint", "quiero levantar una queja formal", "quiero presentar una queja formal"],
    ["I was charged twice", "me cobraron dos veces"],
    ["I need a solution today", "necesito una solución hoy"],
    ["Can you give it to me in writing?", "¿me lo puede dar por escrito?"],
    ["Who is responsible?", "¿quién es el responsable?"],
    ["I've already called three times", "ya llamé tres veces"],
    ["I'm going to keep a record of this", "voy a dejar constancia de esto"]
  ],
  scene: { intro: "The bank charged your card twice.", lines: [
    ["p", "¿En qué le puedo ayudar?", "How can I help you?"],
    ["y", "Say: I was charged twice. I've already called three times.", "me cobraron dos veces ya llamé tres veces"],
    ["p", "Lo revisamos y le avisamos en una semana.", "We'll review it and let you know in a week."],
    ["y", "Say you need a solution today, and ask for it in writing.", "necesito una solución hoy me lo puede dar por escrito"]
  ] } },
{ id: "a27", title: "Recuerdos", place: "Memories and nostalgia",
  tip: "Nostalgia: 'me acuerdo de' (I remember), 'solía' (I used to), 'qué tiempos aquellos' (those were the days), 'me trae recuerdos' (it brings back memories).",
  items: [
    ["I remember my first trip to Mexico", "me acuerdo de mi primer viaje a México"],
    ["I used to go to the beach with my daughters", "solía ir a la playa con mis hijas"],
    ["That song brings back memories", "esa canción me trae recuerdos"],
    ["Those were the days", "qué tiempos aquellos"],
    ["Time flies", "el tiempo vuela"],
    ["I wouldn't change anything", "no cambiaría nada"],
    ["The best is yet to come", "lo mejor está por venir"]
  ],
  scene: { intro: "A mariachi plays an old song.", lines: [
    ["p", "Esta canción es de los setenta.", "This song is from the seventies."],
    ["y", "Say: that song brings back memories. Those were the days.", "esa canción me trae recuerdos qué tiempos aquellos"],
    ["p", "¿Te gustaría volver atrás?", "Would you like to go back?"],
    ["y", "Say: I wouldn't change anything. The best is yet to come.", "no cambiaría nada lo mejor está por venir"]
  ] } },
{ id: "a28", title: "La cultura", place: "Cultural differences",
  tip: "Comparing cultures tactfully: 'me llama la atención que…' (it strikes me that…), 'en mi país se acostumbra…' (in my country it's customary…), 'cada cultura tiene lo suyo'.",
  items: [
    ["It strikes me that people are so warm", "me llama la atención que la gente sea tan cálida"],
    ["In my country, people are more direct", "en mi país la gente es más directa"],
    ["Here, family comes first", "aquí la familia es lo primero"],
    ["Back home we also celebrate a lot", "allá también celebramos mucho"],
    ["Every culture has its own thing", "cada cultura tiene lo suyo"],
    ["I've learned to be more patient", "he aprendido a ser más paciente"],
    ["We have more in common than we think", "tenemos más en común de lo que pensamos"]
  ],
  scene: { intro: "Elena asks what surprised you about Mexico.", lines: [
    ["p", "¿Qué es lo que más te ha sorprendido de México?", "What has surprised you most about Mexico?"],
    ["y", "Say it strikes you that people are so warm, and here family comes first.", "me llama la atención que la gente sea tan cálida aquí la familia es lo primero"],
    ["p", "¿Y allá en tu país?", "And back in your country?"],
    ["y", "Say: back home we also celebrate a lot. We have more in common than we think.", "allá también celebramos mucho tenemos más en común de lo que pensamos"]
  ] } },
{ id: "a29", title: "Matices", place: "Saying exactly what you mean",
  tip: "Precision and softening: 'más bien' (rather), 'en realidad' (actually), 'por decirlo así' (so to speak), 'no es que…, sino que…' (it's not that…, but that…).",
  items: [
    ["It's not that I don't want to, it's that I can't", "no es que no quiera, es que no puedo"],
    ["Actually, I'd rather stay", "en realidad, prefiero quedarme"],
    ["It's rather a matter of time", "es más bien cuestión de tiempo"],
    ["So to speak", "por decirlo así"],
    ["Let me rephrase that", "déjame decirlo de otra manera"],
    ["That's not quite what I meant", "eso no es exactamente lo que quise decir"],
    ["In other words, yes", "en otras palabras, sí"]
  ],
  scene: { intro: "Javier thinks you don't want to join the trip.", lines: [
    ["p", "¿No quieres venir a Chiapas con nosotros?", "Don't you want to come to Chiapas with us?"],
    ["y", "Say: it's not that I don't want to, it's that I can't.", "no es que no quiera es que no puedo"],
    ["p", "¿Por el dinero?", "Because of money?"],
    ["y", "Say: that's not quite what I meant. It's rather a matter of time.", "eso no es exactamente lo que quise decir es más bien cuestión de tiempo"]
  ] } },
{ id: "a30", title: "Una conversación libre", place: "The last evening",
  tip: "Bring it all together: opinions, stories, wishes and humour. Speak in full ideas and use connectors. You've come a long way.",
  items: [
    ["Learning Spanish has changed the way I see the world", "aprender español ha cambiado mi forma de ver el mundo"],
    ["If I had started earlier, I'd be fluent by now", "si hubiera empezado antes, ya hablaría con fluidez"],
    ["What I value most is the friendships", "lo que más valoro son las amistades"],
    ["I hope we see each other in Florida", "ojalá nos veamos en Florida"],
    ["You're always welcome at my home", "mi casa es tu casa"],
    ["I'm going to keep practicing every day", "voy a seguir practicando todos los días"],
    ["Until next time, my friends", "hasta la próxima, amigos"]
  ],
  scene: { intro: "A long final conversation with all your friends.", lines: [
    ["p", "¿Qué te llevas de estos meses?", "What do you take away from these months?"],
    ["y", "Say learning Spanish has changed the way you see the world, and what you value most is the friendships.", "aprender español ha cambiado mi forma de ver el mundo y lo que más valoro son las amistades"],
    ["p", "¡Qué bonito! ¿Y ahora?", "How lovely! And now?"],
    ["y", "Say you're going to keep practicing every day, and you hope to see them in Florida.", "voy a seguir practicando todos los días ojalá nos veamos en Florida"],
    ["y", "Say: you're always welcome at my home. Until next time, my friends.", "mi casa es tu casa hasta la próxima amigos"]
  ] } }
];
