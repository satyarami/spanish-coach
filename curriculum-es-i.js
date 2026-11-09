// Spanish — Intermediate. Story: a three-month stay in Mexico. Same format as curriculum.js.
// Lesson ids i01…i30 must never be reused or renumbered (progress is stored by id).
window.CURRICULUM_ES_I = [
{ id: "i01", title: "De vuelta", place: "Arriving for a long stay",
  tip: "Two past tenses: the preterite for finished events (llegué, I arrived) and the imperfect for background or habits (extrañaba, I was missing). Today, mostly the preterite.",
  items: [
    ["I arrived yesterday", "llegué ayer"],
    ["The flight was long", "el vuelo fue largo", "el vuelo estuvo largo"],
    ["I'm going to stay three months", "me voy a quedar tres meses", "voy a quedarme tres meses"],
    ["I came to improve my Spanish", "vine para mejorar mi español", "vine a mejorar mi español"],
    ["It's my second time in Mexico", "es mi segunda vez en México"],
    ["Last year I visited Oaxaca", "el año pasado visité Oaxaca"],
    ["I missed the food", "extrañaba la comida", "extrañé la comida"]
  ],
  scene: { intro: "Carlos picks you up at the airport.", lines: [
    ["p", "¡Bienvenido otra vez! ¿Cuándo llegaste?", "Welcome back! When did you arrive?"],
    ["y", "Say: I arrived yesterday. The flight was long.", "llegué ayer el vuelo fue largo", "llegué ayer el vuelo estuvo largo"],
    ["p", "¿Y cuánto tiempo te vas a quedar?", "And how long are you staying?"],
    ["y", "Say: I'm going to stay three months, to improve my Spanish.", "me voy a quedar tres meses para mejorar mi español", "voy a quedarme tres meses para mejorar mi español"],
    ["p", "¡Qué bien! Ya hablas mejor.", "Great! You already speak better."],
    ["y", "Say: thanks! I missed the food.", "gracias extrañaba la comida", "gracias extrañé la comida"]
  ] } },
{ id: "i02", title: "El departamento", place: "Renting an apartment",
  tip: "'Busco' means I'm looking for. 'Me gustaría' means I would like: polite and useful everywhere. 'Me lo quedo' means I'll take it.",
  items: [
    ["I'm looking for a furnished apartment", "busco un departamento amueblado", "estoy buscando un departamento amueblado"],
    ["How much is the rent per month?", "¿cuánto es la renta al mes?", "cuanto cuesta la renta al mes"],
    ["Are utilities included?", "¿están incluidos los servicios?", "estan incluidos los servicios"],
    ["I would like to see it", "me gustaría verlo", "quisiera verlo"],
    ["Is there a deposit?", "¿hay que dejar depósito?", "hay deposito"],
    ["It's very bright", "está muy iluminado", "tiene mucha luz"],
    ["I'll take it", "me lo quedo", "lo tomo"]
  ],
  scene: { intro: "A landlady shows you an apartment in La Condesa.", lines: [
    ["p", "Este es el departamento. Tiene dos recámaras.", "This is the apartment. It has two bedrooms."],
    ["y", "Say: it's very bright. How much is the rent per month?", "está muy iluminado cuánto es la renta al mes", "tiene mucha luz cuanto es la renta al mes"],
    ["p", "Quince mil pesos.", "Fifteen thousand pesos."],
    ["y", "Ask: are utilities included?", "están incluidos los servicios", "estan incluidos los servicios"],
    ["p", "El agua sí, la luz no.", "Water yes, electricity no."],
    ["y", "Say: perfect, I'll take it.", "perfecto me lo quedo", "perfecto lo tomo"]
  ] } },
{ id: "i03", title: "La rutina", place: "Settling in",
  tip: "Reflexive verbs describe what you do to yourself: me levanto (I get up), me baño (I shower), me acuesto (I go to bed). The 'me' goes before the verb.",
  items: [
    ["I get up at seven", "me levanto a las siete"],
    ["I shower and have breakfast", "me baño y desayuno", "me ducho y desayuno"],
    ["Then I go out for a walk", "luego salgo a caminar", "después salgo a caminar"],
    ["I usually meditate in the morning", "normalmente medito en la mañana", "suelo meditar por la mañana"],
    ["In the afternoon I study Spanish", "por la tarde estudio español", "en la tarde estudio español"],
    ["I go to bed early", "me acuesto temprano"],
    ["On weekends I sleep in", "los fines de semana me levanto tarde"]
  ],
  scene: { intro: "Your neighbor asks about your days.", lines: [
    ["p", "¿Cómo es un día normal para ti?", "What's a normal day like for you?"],
    ["y", "Say: I get up at seven and I meditate.", "me levanto a las siete y medito"],
    ["p", "¿Y después?", "And after that?"],
    ["y", "Say: then I go out for a walk. In the afternoon I study Spanish.", "luego salgo a caminar por la tarde estudio español", "después salgo a caminar en la tarde estudio español"],
    ["p", "¡Qué disciplinado!", "How disciplined!"],
    ["y", "Say: yes, but on weekends I sleep in.", "sí pero los fines de semana me levanto tarde", "si pero los fines de semana me levanto tarde"]
  ] } },
{ id: "i04", title: "En el banco", place: "At the bank",
  tip: "'Necesito' plus a verb means I need to: necesito abrir una cuenta. '¿Me puede…?' is a polite request: ¿me puede ayudar?",
  items: [
    ["I need to open an account", "necesito abrir una cuenta"],
    ["What documents do I need?", "¿qué documentos necesito?", "que documentos necesito"],
    ["Here is my passport", "aquí está mi pasaporte", "aqui tiene mi pasaporte"],
    ["I want to change dollars to pesos", "quiero cambiar dólares a pesos", "quiero cambiar dolares a pesos"],
    ["What's the exchange rate today?", "¿a cuánto está el dólar hoy?", "cual es el tipo de cambio hoy"],
    ["The ATM kept my card", "el cajero se quedó con mi tarjeta", "el cajero se tragó mi tarjeta"],
    ["Can you help me, please?", "¿me puede ayudar, por favor?", "puede ayudarme por favor"]
  ],
  scene: { intro: "At the bank counter.", lines: [
    ["p", "Buenos días, ¿en qué le puedo ayudar?", "Good morning, how can I help you?"],
    ["y", "Say: I want to change dollars to pesos.", "quiero cambiar dólares a pesos", "quiero cambiar dolares a pesos"],
    ["p", "Claro. ¿Trae identificación?", "Of course. Do you have ID?"],
    ["y", "Say: yes, here is my passport.", "sí aquí está mi pasaporte", "si aqui tiene mi pasaporte"],
    ["y", "Ask: what's the exchange rate today?", "a cuánto está el dólar hoy", "cual es el tipo de cambio hoy"],
    ["p", "A dieciocho cincuenta.", "Eighteen fifty."]
  ] } },
{ id: "i05", title: "Hace mucho", place: "Catching up with Javier",
  tip: "'Hace' plus a time means ago: hace dos años. 'Desde hace' means for, when it's still going on: vivo aquí desde hace un mes, I've lived here for a month.",
  items: [
    ["Two years ago", "hace dos años"],
    ["We met two years ago", "nos conocimos hace dos años"],
    ["I've lived here for a month", "vivo aquí desde hace un mes", "vivo aqui desde hace un mes"],
    ["How long have you been playing golf?", "¿desde cuándo juegas golf?", "desde cuando juegas golf"],
    ["A long time ago", "hace mucho tiempo"],
    ["It's been so long!", "¡cuánto tiempo!", "cuanto tiempo sin verte"],
    ["What have you been up to?", "¿qué has hecho?", "en que andas"]
  ],
  scene: { intro: "You bump into Javier from your first trip.", lines: [
    ["p", "¡No lo puedo creer! ¡Cuánto tiempo!", "I can't believe it! It's been so long!"],
    ["y", "Say: yes! We met two years ago.", "sí nos conocimos hace dos años", "si nos conocimos hace dos años"],
    ["y", "Ask: what have you been up to?", "qué has hecho", "en que andas"],
    ["p", "Trabajando mucho. ¿Y tú, desde cuándo estás aquí?", "Working a lot. And you, how long have you been here?"],
    ["y", "Say: I've lived here for a month.", "vivo aquí desde hace un mes", "vivo aqui desde hace un mes"]
  ] } },
{ id: "i06", title: "Cuando era joven", place: "A long dinner",
  tip: "The imperfect tells what things were like or what you used to do: vivía (I lived), trabajaba (I worked), jugaba (I played). It paints the background of a story.",
  items: [
    ["When I was young", "cuando era joven"],
    ["I lived in a small city", "vivía en una ciudad pequeña"],
    ["I used to play tennis every day", "jugaba al tenis todos los días", "jugaba tenis todos los días"],
    ["My father worked a lot", "mi padre trabajaba mucho"],
    ["We used to travel every summer", "viajábamos cada verano", "viajabamos todos los veranos"],
    ["I didn't like school", "no me gustaba la escuela"],
    ["Everything was different", "todo era diferente", "todo era distinto"]
  ],
  scene: { intro: "Over dinner, Elena asks about your childhood.", lines: [
    ["p", "¿Dónde vivías cuando eras niño?", "Where did you live when you were a child?"],
    ["y", "Say: when I was young, I lived in a small city.", "cuando era joven vivía en una ciudad pequeña"],
    ["p", "¡Qué interesante! ¿Y qué hacías?", "How interesting! And what did you do?"],
    ["y", "Say: I used to play tennis every day. Everything was different.", "jugaba al tenis todos los días todo era diferente", "jugaba tenis todos los días todo era distinto"],
    ["p", "¡Qué bonito! Me encanta el tenis.", "How lovely! I love tennis."]
  ] } },
{ id: "i07", title: "Mientras", place: "Telling a story",
  tip: "Mix the two pasts: the imperfect sets the scene, the preterite says what happened. 'Estaba caminando cuando empezó a llover': I was walking when it started to rain.",
  items: [
    ["I was walking when it started to rain", "estaba caminando cuando empezó a llover"],
    ["It was late", "era tarde"],
    ["Suddenly I saw a friend", "de repente vi a un amigo"],
    ["We went into a café", "entramos a un café", "entramos en un café"],
    ["We talked for two hours", "platicamos dos horas", "hablamos dos horas"],
    ["It was a great afternoon", "fue una tarde increíble", "fue una tarde muy padre"],
    ["What happened next?", "¿y luego qué pasó?", "y despues que paso"]
  ],
  scene: { intro: "Carlos asks about your weekend.", lines: [
    ["p", "¿Qué tal tu sábado?", "How was your Saturday?"],
    ["y", "Say: I was walking when it started to rain.", "estaba caminando cuando empezó a llover"],
    ["p", "¡Ay no! ¿Y luego qué pasó?", "Oh no! And then what happened?"],
    ["y", "Say: suddenly I saw a friend. We went into a café.", "de repente vi a un amigo entramos a un café", "de repente vi a un amigo entramos en un café"],
    ["y", "Say: it was a great afternoon.", "fue una tarde increíble", "fue una tarde muy padre"]
  ] } },
{ id: "i08", title: "En el club", place: "Joining a golf club",
  tip: "Polite requests with 'quisiera' (I would like) and 'podría' (could you). Use them in clubs, hotels and offices to sound courteous.",
  items: [
    ["I would like to become a member", "quisiera hacerme socio", "me gustaría hacerme socio"],
    ["Could you show me the course?", "¿podría enseñarme el campo?", "podria mostrarme el campo"],
    ["What's the green fee?", "¿cuánto cuesta el green fee?", "cuanto cuesta jugar"],
    ["My handicap is eighteen", "mi hándicap es dieciocho", "tengo hándicap dieciocho"],
    ["Is there a tee time tomorrow morning?", "¿hay horario de salida mañana temprano?", "hay salida mañana en la mañana"],
    ["I need to rent clubs", "necesito rentar palos", "necesito alquilar palos"],
    ["Shall we play eighteen holes?", "¿jugamos dieciocho hoyos?", "jugamos los dieciocho hoyos"]
  ],
  scene: { intro: "At the reception of a golf club.", lines: [
    ["p", "Buenas tardes, ¿en qué le podemos servir?", "Good afternoon, how can we help you?"],
    ["y", "Say: I would like to become a member.", "quisiera hacerme socio", "me gustaría hacerme socio"],
    ["p", "Con gusto. ¿Cuál es su hándicap?", "Gladly. What's your handicap?"],
    ["y", "Say: my handicap is eighteen.", "mi hándicap es dieciocho", "tengo hándicap dieciocho"],
    ["y", "Ask: is there a tee time tomorrow morning?", "hay horario de salida mañana temprano", "hay salida mañana en la mañana"],
    ["p", "Sí, a las ocho.", "Yes, at eight."]
  ] } },
{ id: "i09", title: "El futuro", place: "Making plans",
  tip: "The simple future: add -é, -ás, -á to the infinitive: viajaré (I will travel), comeremos (we will eat). Some are irregular: tendré, haré, podré, saldré.",
  items: [
    ["Next week I will travel to Puebla", "la próxima semana viajaré a Puebla"],
    ["We will eat mole there", "comeremos mole allá", "comeremos mole ahí"],
    ["I'll have more time in December", "tendré más tiempo en diciembre"],
    ["I'll do it tomorrow", "lo haré mañana"],
    ["Will you be able to come?", "¿podrás venir?", "podras venir"],
    ["I think it will rain", "creo que lloverá", "creo que va a llover"],
    ["We'll see", "ya veremos"]
  ],
  scene: { intro: "Planning a trip with Carlos.", lines: [
    ["p", "¿Qué planes tienes?", "What plans do you have?"],
    ["y", "Say: next week I will travel to Puebla.", "la próxima semana viajaré a Puebla"],
    ["p", "¡Qué rico! ¿Y qué harás allá?", "Lovely! And what will you do there?"],
    ["y", "Say: we will eat mole there.", "comeremos mole allá", "comeremos mole ahí"],
    ["y", "Ask: will you be able to come?", "podrás venir", "podras venir"],
    ["p", "Ya veremos. Tal vez.", "We'll see. Maybe."]
  ] } },
{ id: "i10", title: "Me gustaría", place: "Wishes and suggestions",
  tip: "The conditional: add -ía to the infinitive: me gustaría (I would like), sería (it would be), podríamos (we could). Perfect for suggestions and politeness.",
  items: [
    ["I would like to learn to cook Mexican food", "me gustaría aprender a cocinar comida mexicana"],
    ["It would be great", "sería genial", "sería padrísimo"],
    ["We could go on Sunday", "podríamos ir el domingo"],
    ["What would you do?", "¿tú qué harías?", "que harias tu"],
    ["I would prefer something quieter", "preferiría algo más tranquilo"],
    ["Would you mind waiting a moment?", "¿le importaría esperar un momento?", "te importaria esperar un momento"],
    ["In your place, I would go", "yo en tu lugar iría"]
  ],
  scene: { intro: "Elena suggests a cooking class.", lines: [
    ["p", "Hay una clase de cocina el domingo. ¿Te interesa?", "There's a cooking class on Sunday. Interested?"],
    ["y", "Say: yes! I would like to learn to cook Mexican food.", "sí me gustaría aprender a cocinar comida mexicana", "si me gustaria aprender a cocinar comida mexicana"],
    ["p", "Podríamos ir juntos.", "We could go together."],
    ["y", "Say: it would be great.", "sería genial", "sería padrísimo"]
  ] } },
{ id: "i11", title: "He estado", place: "Experiences",
  tip: "The present perfect: he + past participle. 'He estado en Cancún' means I have been to Cancún. '¿Has probado…?' means have you tried…? Mexicans often use the simple past instead; both are fine.",
  items: [
    ["I have never been to Cancún", "nunca he estado en Cancún"],
    ["Have you tried chapulines?", "¿has probado los chapulines?", "has probado chapulines"],
    ["I have already eaten", "ya comí", "ya he comido"],
    ["I haven't finished yet", "todavía no he terminado", "aún no termino"],
    ["I have learned a lot", "he aprendido mucho"],
    ["Have you ever played bridge?", "¿alguna vez has jugado bridge?", "has jugado bridge alguna vez"],
    ["It has been an amazing month", "ha sido un mes increíble"]
  ],
  scene: { intro: "At a market, a vendor offers grasshoppers.", lines: [
    ["p", "¿Ha probado los chapulines?", "Have you tried grasshoppers?"],
    ["y", "Say: no, I've never tried them.", "no nunca los he probado", "no nunca he probado"],
    ["p", "¡Pruébelos! Están ricos con limón.", "Try them! They're tasty with lime."],
    ["y", "Say: okay! I've learned a lot here.", "bueno he aprendido mucho aquí", "esta bien he aprendido mucho aqui"]
  ] } },
{ id: "i12", title: "Lo, la, le", place: "At the dry cleaner's",
  tip: "Object pronouns replace nouns: 'lo' (it, him), 'la' (it, her), 'les' (to them). They go before the verb: ¿lo puede lavar? Can you wash it?",
  items: [
    ["Can you wash it for tomorrow?", "¿lo puede lavar para mañana?", "puede lavarlo para mañana"],
    ["I need it on Friday", "lo necesito el viernes"],
    ["When can I pick it up?", "¿cuándo lo puedo recoger?", "cuando puedo recogerlo"],
    ["I'll bring it to you this afternoon", "se lo traigo esta tarde"],
    ["I lost my ticket", "perdí mi boleto", "perdí el ticket"],
    ["Here you go", "aquí tiene", "aqui está"],
    ["Thanks, see you on Friday", "gracias, nos vemos el viernes"]
  ],
  scene: { intro: "You bring a jacket to the dry cleaner's.", lines: [
    ["y", "Ask: can you wash it for tomorrow?", "lo puede lavar para mañana", "puede lavarlo para mañana"],
    ["p", "Para mañana no, para el viernes.", "Not for tomorrow, for Friday."],
    ["y", "Say: okay, I need it on Friday.", "está bien lo necesito el viernes", "bueno lo necesito el viernes"],
    ["y", "Ask: when can I pick it up?", "cuándo lo puedo recoger", "cuando puedo recogerlo"],
    ["p", "Después de las cuatro.", "After four."]
  ] } },
{ id: "i13", title: "Tengo que", place: "Errands",
  tip: "'Tengo que' plus a verb means I have to: tengo que pagar la luz. 'Hay que' means one has to, in general: hay que reservar.",
  items: [
    ["I have to pay the electricity bill", "tengo que pagar la luz"],
    ["I have to go to the pharmacy", "tengo que ir a la farmacia"],
    ["You have to book in advance", "hay que reservar con anticipación", "hay que reservar antes"],
    ["I don't have to work today", "hoy no tengo que trabajar"],
    ["I just sent the email", "acabo de mandar el correo", "acabo de enviar el correo"],
    ["I'm about to leave", "estoy a punto de salir"],
    ["I'll call you when I finish", "te llamo cuando termine"]
  ],
  scene: { intro: "Carlos calls to invite you for coffee.", lines: [
    ["p", "¿Vamos por un café?", "Shall we go for a coffee?"],
    ["y", "Say: I can't right now, I have to pay the electricity bill.", "ahorita no puedo tengo que pagar la luz", "ahora no puedo tengo que pagar la luz"],
    ["p", "¿Y después?", "And afterwards?"],
    ["y", "Say: I'll call you when I finish.", "te llamo cuando termine"]
  ] } },
{ id: "i14", title: "Por y para", place: "Gifts and plans",
  tip: "'Para' points to a goal or recipient: un regalo para mi hija. 'Por' is about cause, exchange or through: gracias por todo, lo compré por cien pesos.",
  items: [
    ["This is for my daughter", "esto es para mi hija"],
    ["Thanks for everything", "gracias por todo"],
    ["I bought it for a hundred pesos", "lo compré por cien pesos"],
    ["We walked through the park", "caminamos por el parque"],
    ["I study in order to talk with people", "estudio para hablar con la gente"],
    ["It's for tomorrow", "es para mañana"],
    ["Because of the traffic, I arrived late", "por el tráfico llegué tarde"]
  ],
  scene: { intro: "Shopping for a gift at a craft market.", lines: [
    ["p", "¿Busca algo especial?", "Looking for something special?"],
    ["y", "Say: yes, a gift for my daughter.", "sí un regalo para mi hija", "si un regalo para mi hija"],
    ["p", "Este rebozo es precioso. Cuatrocientos pesos.", "This shawl is lovely. Four hundred pesos."],
    ["y", "Say: I'll take it. Thanks for everything.", "me lo llevo gracias por todo"]
  ] } },
{ id: "i15", title: "Comparando", place: "Comparing cities",
  tip: "más… que (more than), menos… que (less than), tan… como (as… as). Irregular: mejor (better), peor (worse), mayor (older), menor (younger).",
  items: [
    ["Mexico City is bigger than New York", "la Ciudad de México es más grande que Nueva York"],
    ["Oaxaca is quieter", "Oaxaca es más tranquila"],
    ["The food here is better", "la comida aquí es mejor"],
    ["It's not as expensive as Manhattan", "no es tan caro como Manhattan"],
    ["It's the best taco I've ever had", "es el mejor taco que he comido"],
    ["Traffic is worse here", "el tráfico es peor aquí"],
    ["My sister is older than me", "mi hermana es mayor que yo"]
  ],
  scene: { intro: "Javier asks how Mexico compares with home.", lines: [
    ["p", "¿Qué te gusta más, México o Nueva York?", "What do you like more, Mexico or New York?"],
    ["y", "Say: the food here is better.", "la comida aquí es mejor", "la comida aqui es mejor"],
    ["p", "¿Y el tráfico?", "And the traffic?"],
    ["y", "Say: traffic is worse here, but it's not as expensive.", "el tráfico es peor aquí pero no es tan caro"]
  ] } },
{ id: "i16", title: "El doctor", place: "A doctor's visit",
  tip: "Symptoms with 'me duele' (it hurts), 'tengo' (I have) and 'desde' (since): tengo tos desde el lunes, I've had a cough since Monday.",
  items: [
    ["I've had a cough since Monday", "tengo tos desde el lunes"],
    ["My throat hurts", "me duele la garganta"],
    ["I have a slight fever", "tengo un poco de fiebre", "tengo algo de temperatura"],
    ["I'm allergic to penicillin", "soy alérgico a la penicilina", "soy alergico a la penicilina"],
    ["How many times a day?", "¿cuántas veces al día?", "cuantas veces al dia"],
    ["Do I need a prescription?", "¿necesito receta?", "necesito receta medica"],
    ["I feel much better", "me siento mucho mejor"]
  ],
  scene: { intro: "At a clinic.", lines: [
    ["p", "Cuénteme, ¿qué tiene?", "Tell me, what's wrong?"],
    ["y", "Say: I've had a cough since Monday, and my throat hurts.", "tengo tos desde el lunes y me duele la garganta"],
    ["p", "¿Es alérgico a algún medicamento?", "Are you allergic to any medicine?"],
    ["y", "Say: yes, I'm allergic to penicillin.", "sí soy alérgico a la penicilina", "si soy alergico a la penicilina"],
    ["p", "Tome esto tres veces al día.", "Take this three times a day."]
  ] } },
{ id: "i17", title: "Se me olvidó", place: "Little accidents",
  tip: "Spanish blames the object for accidents: 'se me olvidó' (it slipped my mind), 'se me cayó' (I dropped it), 'se me perdió' (I lost it). Very natural and very common.",
  items: [
    ["I forgot my wallet", "se me olvidó la cartera", "se me olvido mi cartera"],
    ["I dropped my phone", "se me cayó el teléfono", "se me cayo el celular"],
    ["I lost my keys", "se me perdieron las llaves"],
    ["My battery died", "se me acabó la pila", "se me descargo el celular"],
    ["Don't worry", "no te preocupes", "no se preocupe"],
    ["It can happen to anyone", "le puede pasar a cualquiera"],
    ["Can I pay you tomorrow?", "¿le puedo pagar mañana?", "puedo pagarle mañana"]
  ],
  scene: { intro: "At the café, you reach for your wallet.", lines: [
    ["y", "Say: oh no, I forgot my wallet!", "ay no se me olvidó la cartera", "ay no se me olvido mi cartera"],
    ["p", "No se preocupe. Le puede pasar a cualquiera.", "Don't worry. It can happen to anyone."],
    ["y", "Ask: can I pay you tomorrow?", "le puedo pagar mañana", "puedo pagarle mañana"],
    ["p", "Claro, usted es cliente frecuente.", "Of course, you're a regular."]
  ] } },
{ id: "i18", title: "Recomiéndame", place: "Asking for advice",
  tip: "Asking for recommendations: '¿qué me recomiendas?' Answer with 'te recomiendo que vayas' (subjunctive, a taste of what's coming) or simply 'te recomiendo ir'.",
  items: [
    ["What do you recommend?", "¿qué me recomiendas?", "que me recomienda"],
    ["Which is the best restaurant around here?", "¿cuál es el mejor restaurante por aquí?"],
    ["I recommend going early", "te recomiendo ir temprano"],
    ["It's worth it", "vale la pena"],
    ["It's not worth it", "no vale la pena"],
    ["Is it far from here?", "¿está lejos de aquí?", "esta lejos de aqui"],
    ["I'll take your advice", "voy a seguir tu consejo"]
  ],
  scene: { intro: "Asking Elena about weekend trips.", lines: [
    ["y", "Ask: what do you recommend for the weekend?", "qué me recomiendas para el fin de semana", "que me recomienda para el fin de semana"],
    ["p", "Teotihuacán. Vale la pena, pero ve temprano.", "Teotihuacán. It's worth it, but go early."],
    ["y", "Ask: is it far from here?", "está lejos de aquí", "esta lejos de aqui"],
    ["p", "Una hora en coche.", "An hour by car."],
    ["y", "Say: I'll take your advice.", "voy a seguir tu consejo"]
  ] } },
{ id: "i19", title: "Una queja", place: "Making a complaint",
  tip: "Complain politely: 'disculpe, hay un problema con…' then explain, and ask '¿me lo podría cambiar?' (could you change it for me?).",
  items: [
    ["Excuse me, there's a problem with the room", "disculpe, hay un problema con la habitación", "disculpe hay un problema con el cuarto"],
    ["The air conditioning doesn't work", "el aire acondicionado no funciona", "el aire no sirve"],
    ["There's no hot water", "no hay agua caliente"],
    ["Could you change it for me?", "¿me lo podría cambiar?", "me lo puede cambiar"],
    ["This isn't what I ordered", "esto no es lo que pedí"],
    ["I'd like to speak with the manager", "quisiera hablar con el gerente"],
    ["Thank you for your help", "gracias por su ayuda"]
  ],
  scene: { intro: "At a hotel reception in Puebla.", lines: [
    ["y", "Say: excuse me, there's a problem with the room.", "disculpe hay un problema con la habitación", "disculpe hay un problema con el cuarto"],
    ["p", "¿Qué pasó?", "What happened?"],
    ["y", "Say: the air conditioning doesn't work, and there's no hot water.", "el aire acondicionado no funciona y no hay agua caliente", "el aire no sirve y no hay agua caliente"],
    ["p", "Lo siento mucho. Le damos otra habitación.", "I'm very sorry. We'll give you another room."],
    ["y", "Say: thank you for your help.", "gracias por su ayuda"]
  ] } },
{ id: "i20", title: "El bridge", place: "A bridge club in Polanco",
  tip: "Card-table Spanish: 'repartir' (to deal), 'la mano' (the hand), 'el contrato' (the contract), 'paso' (pass). Bridge vocabulary often stays in English: no trump is 'sin triunfo'.",
  items: [
    ["Whose turn is it to deal?", "¿a quién le toca repartir?", "a quien le toca dar"],
    ["I pass", "paso"],
    ["One no trump", "un sin triunfo"],
    ["We made the contract", "cumplimos el contrato"],
    ["We went down one", "nos multaron una", "fallamos por una"],
    ["Good hand, partner", "buena mano, compañero"],
    ["I've been playing bridge for twenty years", "juego bridge desde hace veinte años"]
  ],
  scene: { intro: "At a duplicate bridge evening.", lines: [
    ["p", "Bienvenido. ¿Desde cuándo juega bridge?", "Welcome. How long have you been playing bridge?"],
    ["y", "Say: I've been playing bridge for twenty years.", "juego bridge desde hace veinte años"],
    ["p", "¡Excelente! A usted le toca hablar.", "Excellent! It's your call."],
    ["y", "Say: one no trump.", "un sin triunfo"],
    ["p", "¡Cumplimos! Buena mano, compañero.", "We made it! Good hand, partner."]
  ] } },
{ id: "i21", title: "Por teléfono", place: "Phone calls and appointments",
  tip: "On the phone: '¿de parte de quién?' (who's calling?), 'le comunico' (I'll put you through), 'quisiera hacer una cita' (I'd like to make an appointment).",
  items: [
    ["I'd like to make an appointment", "quisiera hacer una cita", "me gustaria hacer una cita"],
    ["Is Thursday at ten okay?", "¿le parece bien el jueves a las diez?", "esta bien el jueves a las diez"],
    ["This is Satya calling", "habla Satya", "le habla Satya"],
    ["Could you repeat the number?", "¿me podría repetir el número?", "puede repetir el numero"],
    ["I'll call back later", "vuelvo a llamar más tarde", "le llamo mas tarde"],
    ["I need to cancel my appointment", "necesito cancelar mi cita"],
    ["The line is busy", "está ocupado", "la línea está ocupada"]
  ],
  scene: { intro: "Calling a dentist's office.", lines: [
    ["p", "Consultorio dental, buenos días.", "Dental office, good morning."],
    ["y", "Say: good morning, I'd like to make an appointment.", "buenos días quisiera hacer una cita", "buenos dias me gustaria hacer una cita"],
    ["p", "¿Le parece bien el jueves a las diez?", "Is Thursday at ten okay?"],
    ["y", "Say: perfect. Could you repeat the address?", "perfecto me podría repetir la dirección", "perfecto puede repetir la direccion"]
  ] } },
{ id: "i22", title: "Opiniones", place: "Discussing a film",
  tip: "Opinions with nuance: 'me pareció' (it seemed to me), 'lo que más me gustó fue…' (what I liked most was…), 'no estoy muy convencido' (I'm not very convinced).",
  items: [
    ["What did you think of the movie?", "¿qué te pareció la película?"],
    ["It seemed a bit long to me", "me pareció un poco larga"],
    ["What I liked most was the music", "lo que más me gustó fue la música"],
    ["The actors were very good", "los actores estuvieron muy bien"],
    ["I'm not very convinced", "no estoy muy convencido"],
    ["I agree with you, up to a point", "estoy de acuerdo contigo hasta cierto punto"],
    ["It's worth seeing", "vale la pena verla"]
  ],
  scene: { intro: "Leaving the cinema with Elena.", lines: [
    ["p", "¿Qué te pareció la película?", "What did you think of the film?"],
    ["y", "Say: it seemed a bit long to me, but what I liked most was the music.", "me pareció un poco larga pero lo que más me gustó fue la música"],
    ["p", "A mí me encantó todo.", "I loved all of it."],
    ["y", "Say: I agree with you, up to a point.", "estoy de acuerdo contigo hasta cierto punto"]
  ] } },
{ id: "i23", title: "La cocina", place: "A cooking class",
  tip: "Commands in recipes use 'usted' forms: corte (cut), agregue (add), mezcle (mix), deje (leave). Friends use 'tú': corta, agrega, mezcla.",
  items: [
    ["Cut the onion", "corte la cebolla", "corta la cebolla"],
    ["Add a little salt", "agregue un poco de sal", "agrega un poco de sal"],
    ["Mix everything well", "mezcle todo bien", "mezcla todo bien"],
    ["Let it cook for ten minutes", "déjelo cocinar diez minutos", "dejalo cocinar diez minutos"],
    ["How spicy should it be?", "¿qué tan picante debe quedar?", "que tan picante debe ser"],
    ["It smells delicious", "huele delicioso", "huele riquísimo"],
    ["Can you give me the recipe?", "¿me puede dar la receta?", "me das la receta"]
  ],
  scene: { intro: "The chef teaches you salsa verde.", lines: [
    ["p", "Primero, corte los tomates verdes y la cebolla.", "First, cut the green tomatoes and the onion."],
    ["y", "Ask: how spicy should it be?", "qué tan picante debe quedar", "que tan picante debe ser"],
    ["p", "Un chile serrano, no más. Mezcle todo bien.", "One serrano chile, no more. Mix everything well."],
    ["y", "Say: it smells delicious! Can you give me the recipe?", "huele delicioso me puede dar la receta", "huele riquísimo me das la receta"]
  ] } },
{ id: "i24", title: "Viaje en camión", place: "A long-distance bus",
  tip: "Travel trouble: 'se retrasó' (it was delayed), 'perdí el camión' (I missed the bus), '¿a qué hora sale el siguiente?' (when does the next one leave?).",
  items: [
    ["The bus was delayed", "el camión se retrasó", "el autobús se retrasó"],
    ["I missed the bus", "perdí el camión", "perdí el autobús"],
    ["When does the next one leave?", "¿a qué hora sale el siguiente?", "a que hora sale el proximo"],
    ["Can I change my ticket?", "¿puedo cambiar mi boleto?"],
    ["Is there a charge?", "¿tiene algún costo?", "hay que pagar algo"],
    ["Window seat, please", "ventanilla, por favor", "asiento de ventana por favor"],
    ["How many stops does it make?", "¿cuántas paradas hace?"]
  ],
  scene: { intro: "You arrive at the bus station five minutes late.", lines: [
    ["y", "Say: I missed the bus. Can I change my ticket?", "perdí el camión puedo cambiar mi boleto", "perdí el autobús puedo cambiar mi boleto"],
    ["p", "Sí, para el de las cuatro.", "Yes, for the four o'clock one."],
    ["y", "Ask: is there a charge?", "tiene algún costo", "hay que pagar algo"],
    ["p", "Cincuenta pesos.", "Fifty pesos."],
    ["y", "Say: fine. Window seat, please.", "está bien ventanilla por favor", "bueno asiento de ventana por favor"]
  ] } },
{ id: "i25", title: "La salud", place: "Talking about wellbeing",
  tip: "Talking about habits and health goals: 'trato de' (I try to), 'dejé de' (I stopped), 'empecé a' (I started to).",
  items: [
    ["I try to walk every day", "trato de caminar todos los días"],
    ["I stopped drinking soda", "dejé de tomar refresco"],
    ["I started doing yoga", "empecé a hacer yoga"],
    ["I sleep better since I meditate", "duermo mejor desde que medito"],
    ["I want to lose a little weight", "quiero bajar un poco de peso"],
    ["The secret is consistency", "el secreto es la constancia"],
    ["You look great", "te ves muy bien", "se ve muy bien"]
  ],
  scene: { intro: "Elena notices you look well.", lines: [
    ["p", "¡Te ves muy bien! ¿Qué haces?", "You look great! What are you doing?"],
    ["y", "Say: I try to walk every day, and I started doing yoga.", "trato de caminar todos los días y empecé a hacer yoga"],
    ["p", "¿Y duermes bien?", "And do you sleep well?"],
    ["y", "Say: yes, I sleep better since I meditate.", "sí duermo mejor desde que medito", "si duermo mejor desde que medito"]
  ] } },
{ id: "i26", title: "Las noticias", place: "Talking about the news",
  tip: "Reporting what you heard: 'dicen que' (they say that), 'leí que' (I read that), 'según' (according to). Neutral and very handy.",
  items: [
    ["I read that it will rain all week", "leí que va a llover toda la semana"],
    ["They say traffic will be terrible", "dicen que el tráfico va a estar terrible"],
    ["According to the news", "según las noticias"],
    ["Did you hear about the earthquake?", "¿supiste lo del temblor?", "escuchaste lo del sismo"],
    ["Fortunately no one was hurt", "por suerte nadie salió herido"],
    ["I don't follow politics much", "no sigo mucho la política"],
    ["What a surprise!", "¡qué sorpresa!"]
  ],
  scene: { intro: "Morning coffee with your neighbor.", lines: [
    ["p", "¿Supiste lo del temblor anoche?", "Did you hear about last night's earthquake?"],
    ["y", "Say: yes, I read about it. Fortunately no one was hurt.", "sí leí sobre eso por suerte nadie salió herido", "si lo leí por suerte nadie salio herido"],
    ["p", "Y dicen que va a llover toda la semana.", "And they say it will rain all week."],
    ["y", "Say: according to the news, yes.", "según las noticias sí", "segun las noticias si"]
  ] } },
{ id: "i27", title: "Invitaciones", place: "Invitations",
  tip: "Accepting and declining gracefully: '¡con mucho gusto!' (with pleasure), 'me encantaría, pero…' (I'd love to, but…), '¿lo dejamos para otro día?' (shall we leave it for another day?).",
  items: [
    ["Would you like to come to my house on Saturday?", "¿te gustaría venir a mi casa el sábado?"],
    ["With pleasure!", "¡con mucho gusto!"],
    ["I'd love to, but I can't", "me encantaría, pero no puedo"],
    ["Shall we leave it for another day?", "¿lo dejamos para otro día?"],
    ["What should I bring?", "¿qué llevo?", "que traigo"],
    ["Don't bring anything", "no traigas nada"],
    ["Thanks for the invitation", "gracias por la invitación"]
  ],
  scene: { intro: "Javier invites you over.", lines: [
    ["p", "¿Te gustaría venir a mi casa el sábado? Hacemos carne asada.", "Would you like to come over on Saturday? We're having a barbecue."],
    ["y", "Say: with pleasure! What should I bring?", "con mucho gusto qué llevo", "con mucho gusto que traigo"],
    ["p", "Nada, no traigas nada.", "Nothing, don't bring anything."],
    ["y", "Say: thanks for the invitation.", "gracias por la invitación"]
  ] } },
{ id: "i28", title: "Mi trabajo", place: "Explaining your work",
  tip: "Describing work in more depth: 'me encargo de' (I'm in charge of), 'consiste en' (it consists of), 'llevo veinte años' (I've been doing it twenty years).",
  items: [
    ["I've been working with computers for twenty-five years", "llevo veinticinco años trabajando con computadoras"],
    ["I design systems for banks", "diseño sistemas para bancos"],
    ["My job consists of making programs faster", "mi trabajo consiste en hacer los programas más rápidos"],
    ["I'm in charge of the architecture", "me encargo de la arquitectura"],
    ["I work on my own", "trabajo por mi cuenta", "soy independiente"],
    ["I'm thinking of retiring in a few years", "estoy pensando en jubilarme en unos años"],
    ["It's interesting but stressful", "es interesante pero estresante"]
  ],
  scene: { intro: "At the barbecue, a guest asks about your work.", lines: [
    ["p", "¿Y tú a qué te dedicas exactamente?", "And what exactly do you do?"],
    ["y", "Say: I design systems for banks. I work on my own.", "diseño sistemas para bancos trabajo por mi cuenta", "diseño sistemas para bancos soy independiente"],
    ["p", "¡Qué interesante! ¿Te gusta?", "How interesting! Do you like it?"],
    ["y", "Say: yes, but I'm thinking of retiring in a few years.", "sí pero estoy pensando en jubilarme en unos años", "si pero estoy pensando en jubilarme en unos años"]
  ] } },
{ id: "i29", title: "Las emociones", place: "Sharing feelings",
  tip: "Feelings with 'me pone' (it makes me): 'me pone nervioso' (it makes me nervous), 'me da gusto' (I'm glad), 'me da pena' (I'm embarrassed or sorry).",
  items: [
    ["I'm glad to see you", "me da gusto verte", "me da mucho gusto verte"],
    ["Speaking in public makes me nervous", "hablar en público me pone nervioso"],
    ["I'm embarrassed to make mistakes", "me da pena equivocarme"],
    ["I'm excited about the trip", "estoy emocionado por el viaje"],
    ["I miss my daughters", "extraño a mis hijas"],
    ["It made me very happy", "me puso muy contento"],
    ["Don't be embarrassed", "no te dé pena", "no te de pena"]
  ],
  scene: { intro: "Elena asks how your Spanish feels now.", lines: [
    ["p", "¿Cómo te sientes con tu español?", "How do you feel about your Spanish?"],
    ["y", "Say: better, but I'm embarrassed to make mistakes.", "mejor pero me da pena equivocarme"],
    ["p", "¡No te dé pena! Hablas muy bien.", "Don't be embarrassed! You speak very well."],
    ["y", "Say: thank you. I'm glad to hear it.", "gracias me da gusto oírlo", "gracias me da gusto escucharlo"]
  ] } },
{ id: "i30", title: "Despedida", place: "Farewell dinner",
  tip: "Wrapping up a stay: 'la pasé muy bien' (I had a great time), 'voy a extrañar…' (I'm going to miss…), 'ojalá nos veamos pronto' (I hope we see each other soon).",
  items: [
    ["I had a great time", "la pasé muy bien", "lo pasé muy bien"],
    ["I'm going to miss you all", "los voy a extrañar"],
    ["You have been very kind", "ustedes han sido muy amables"],
    ["I hope we see each other soon", "ojalá nos veamos pronto"],
    ["Come and visit me in New Jersey", "vengan a visitarme a Nueva Jersey"],
    ["Let's keep in touch", "seguimos en contacto"],
    ["Thank you for everything", "gracias por todo"]
  ],
  scene: { intro: "Your friends throw you a farewell dinner.", lines: [
    ["p", "¡Salud! ¿Cómo te la pasaste estos tres meses?", "Cheers! How did these three months go?"],
    ["y", "Say: I had a great time. You have been very kind.", "la pasé muy bien ustedes han sido muy amables"],
    ["p", "¡Te vamos a extrañar!", "We're going to miss you!"],
    ["y", "Say: I'm going to miss you all. I hope we see each other soon.", "los voy a extrañar ojalá nos veamos pronto"],
    ["y", "Say: come and visit me in New Jersey.", "vengan a visitarme a Nueva Jersey"]
  ] } }
];
