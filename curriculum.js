// Spanish Voice Coach — curriculum, block 1 (Phase 1 + start of Phase 2).
// Story: a trip through Mexico with your coach. Latin American Spanish.
//
// Lesson format:
//   items: [english, canonicalSpanish, ...acceptedAlternatives]
//          A trailing "…" in Spanish means "anything may follow" (e.g. "me llamo …").
//   scene.lines: ["p", spanish, english]            -> the other person speaks
//                ["y", englishCue, spanish, ...alts] -> you answer
//   tip: spoken in English at the start of the lesson.

window.CURRICULUM = [
{
  id: "l01", title: "¡Hola!", place: "Mexico City airport",
  tip: "Spanish vowels are short and pure: a, e, i, o, u. They never glide like English vowels. Say 'hola' as 'OH-lah'. The h is always silent.",
  items: [
    ["Hello", "hola"],
    ["Good morning", "buenos días"],
    ["Good afternoon", "buenas tardes"],
    ["Good evening, or good night", "buenas noches"],
    ["How are you?", "¿cómo estás?", "como esta", "como esta usted"],
    ["Fine, thanks", "bien gracias", "bien, gracias", "muy bien gracias"],
    ["And you?", "¿y tú?", "y usted"],
    ["See you later", "hasta luego", "nos vemos"]
  ],
  scene: { intro: "You just landed in Mexico City. Your coach meets you at arrivals.",
    lines: [
      ["p", "¡Hola! Buenos días.", "Hi! Good morning."],
      ["y", "Say hello and good morning.", "hola buenos días", "buenos días", "hola buenos dias"],
      ["p", "¿Cómo estás?", "How are you?"],
      ["y", "Say: fine, thanks. And you?", "bien gracias y tú", "bien gracias y usted", "muy bien gracias y tu"],
      ["p", "¡Muy bien! Vamos.", "Very well! Let's go."],
      ["y", "Say: see you later. (Just practice.)", "hasta luego", "nos vemos"]
    ] }
},
{
  id: "l02", title: "Mucho gusto", place: "The hotel lobby",
  tip: "'Soy' means 'I am'. You'll use it constantly. 'Me llamo' literally means 'I call myself'. Spanish often drops the word for 'I', because the verb ending already says who.",
  items: [
    ["My name is…", "me llamo …", "mi nombre es …", "soy …"],
    ["What's your name?", "¿cómo te llamas?", "como se llama", "como se llama usted"],
    ["Nice to meet you", "mucho gusto", "encantado", "encantada", "un placer"],
    ["I am from the United States", "soy de Estados Unidos", "soy de los estados unidos"],
    ["I live in New Jersey", "vivo en Nueva Jersey", "vivo en new jersey"],
    ["Where are you from?", "¿de dónde eres?", "de donde es usted", "de donde es"],
    ["I speak English", "hablo inglés"],
    ["I speak a little Spanish", "hablo un poco de español", "hablo poco español"]
  ],
  scene: { intro: "The hotel receptionist is friendly and curious.",
    lines: [
      ["p", "Buenas tardes. ¿Cómo te llamas?", "Good afternoon. What's your name?"],
      ["y", "Tell her your name.", "me llamo …", "mi nombre es …", "soy …"],
      ["p", "Mucho gusto. ¿De dónde eres?", "Nice to meet you. Where are you from?"],
      ["y", "Say: I'm from the United States.", "soy de Estados Unidos", "soy de los estados unidos"],
      ["p", "¿Hablas español?", "Do you speak Spanish?"],
      ["y", "Say: I speak a little Spanish.", "hablo un poco de español", "un poco"]
    ] }
},
{
  id: "l03", title: "Por favor", place: "A street corner",
  tip: "These are your lifelines. 'No entiendo' and 'más despacio' keep any conversation going. Native speakers slow down happily when you ask.",
  items: [
    ["Please", "por favor"],
    ["Thank you very much", "muchas gracias"],
    ["You're welcome", "de nada"],
    ["Excuse me, or sorry", "perdón", "disculpe", "con permiso"],
    ["I don't understand", "no entiendo"],
    ["Slower, please", "más despacio, por favor", "mas despacio por favor", "más despacio"],
    ["Can you repeat?", "¿puede repetir?", "puede repetir por favor", "repita por favor"],
    ["Yes, of course", "sí, claro", "si claro", "claro que sí"]
  ],
  scene: { intro: "A street vendor talks to you very fast.",
    lines: [
      ["p", "¿Quieres probar los tacos de canasta, joven?", "Want to try the basket tacos, young man?"],
      ["y", "Say: sorry, I don't understand.", "perdón no entiendo", "disculpe no entiendo", "no entiendo"],
      ["p", "¿Quieres... probar... tacos?", "Do you want... to try... tacos?"],
      ["y", "Say: slower, please.", "más despacio por favor", "mas despacio por favor"],
      ["p", "¿Quieres un taco?", "Do you want a taco?"],
      ["y", "Say: yes, of course. Thank you very much.", "sí claro muchas gracias", "si claro muchas gracias", "si muchas gracias"]
    ] }
},
{
  id: "l04", title: "En el café", place: "A café in Coyoacán",
  tip: "'Quisiera' is a soft, polite 'I would like', perfect for ordering. 'Quiero' means 'I want'. It's fine too, just more direct.",
  items: [
    ["I would like a coffee", "quisiera un café", "quiero un café", "me da un café"],
    ["With milk", "con leche"],
    ["Without sugar", "sin azúcar", "sin azucar"],
    ["A tea, please", "un té, por favor", "un te por favor"],
    ["A glass of water", "un vaso de agua"],
    ["To go", "para llevar"],
    ["Anything else?", "¿algo más?", "algo mas"],
    ["That's all, thanks", "nada más, gracias", "eso es todo gracias", "es todo gracias"],
    ["The check, please", "la cuenta, por favor", "la cuenta por favor"]
  ],
  scene: { intro: "The waiter comes to your table.",
    lines: [
      ["p", "Buenos días. ¿Qué le sirvo?", "Good morning. What can I get you?"],
      ["y", "Order a coffee with milk.", "quisiera un café con leche", "quiero un café con leche", "un café con leche por favor"],
      ["p", "¿Con azúcar?", "With sugar?"],
      ["y", "Say: without sugar, please.", "sin azúcar por favor", "sin azucar por favor"],
      ["p", "¿Algo más?", "Anything else?"],
      ["y", "Say: that's all, thanks.", "nada más gracias", "es todo gracias", "eso es todo gracias"]
    ] }
},
{
  id: "l05", title: "Los números", place: "The market",
  tip: "Numbers one to ten: uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez. 'Cuesta' means 'it costs'. Prices are said just like in English: the number, then pesos.",
  items: [
    ["one, two, three", "uno dos tres"],
    ["four, five, six", "cuatro cinco seis"],
    ["seven, eight, nine, ten", "siete ocho nueve diez"],
    ["How much does it cost?", "¿cuánto cuesta?", "cuanto cuesta", "cuanto es"],
    ["It costs ten pesos", "cuesta diez pesos", "son diez pesos"],
    ["Two coffees", "dos cafés", "dos cafes"],
    ["Expensive", "caro"],
    ["Cheap", "barato"]
  ],
  scene: { intro: "You want to buy mangoes at the market.",
    lines: [
      ["p", "¡Mangos, mangos frescos!", "Mangoes, fresh mangoes!"],
      ["y", "Ask how much it costs.", "cuánto cuesta", "cuanto cuesta", "cuanto es"],
      ["p", "Cinco pesos cada uno.", "Five pesos each."],
      ["y", "Say: three, please.", "tres por favor"],
      ["p", "Son quince pesos.", "That's fifteen pesos."],
      ["y", "Say: thank you very much.", "muchas gracias", "gracias"]
    ] }
},
{
  id: "l06", title: "¿Dónde está?", place: "The historic center",
  tip: "'Dónde está' means 'where is'. Put any place after it: el baño, el metro, el museo. 'Derecha' is right, 'izquierda' is left. A trick: izquierda has a 'q' in it and starts like 'is-kier'.",
  items: [
    ["Where is the bathroom?", "¿dónde está el baño?", "donde esta el bano", "donde esta el baño"],
    ["Where is the subway?", "¿dónde está el metro?", "donde esta el metro"],
    ["To the right", "a la derecha"],
    ["To the left", "a la izquierda"],
    ["Straight ahead", "todo recto", "derecho", "todo derecho", "siga derecho"],
    ["Is it near?", "¿está cerca?", "esta cerca"],
    ["It's far", "está lejos", "esta lejos"],
    ["Here", "aquí", "aqui", "acá"],
    ["There", "allí", "alli", "allá", "ahí"]
  ],
  scene: { intro: "You're looking for the cathedral and stop a woman on the street.",
    lines: [
      ["y", "Say: excuse me, where is the cathedral? (catedral)", "disculpe dónde está la catedral", "perdón dónde está la catedral", "donde esta la catedral"],
      ["p", "Está cerca. Todo recto y luego a la derecha.", "It's close. Straight ahead and then to the right."],
      ["y", "Check: to the right?", "a la derecha"],
      ["p", "Sí, a la derecha. Está allí.", "Yes, to the right. It's there."],
      ["y", "Say: thank you very much.", "muchas gracias", "gracias"]
    ] }
},
{
  id: "l07", title: "Quiero y tengo", place: "A taquería",
  tip: "Spanish 'has' hunger and thirst instead of 'being' hungry. 'Tengo hambre' literally means 'I have hunger'. 'Quiero' plus a verb means 'I want to do' something: quiero comer, quiero ir.",
  items: [
    ["I'm hungry", "tengo hambre"],
    ["I'm thirsty", "tengo sed"],
    ["I want to eat", "quiero comer"],
    ["I want to go", "quiero ir"],
    ["Do you want…?", "¿quieres …?", "quiere …", "quieres"],
    ["I have time", "tengo tiempo"],
    ["I don't have time", "no tengo tiempo"],
    ["I need help", "necesito ayuda"]
  ],
  scene: { intro: "Your coach asks what you'd like to do.",
    lines: [
      ["p", "¿Tienes hambre?", "Are you hungry?"],
      ["y", "Say: yes, I'm hungry.", "sí tengo hambre", "si tengo hambre", "tengo hambre"],
      ["p", "¿Quieres comer tacos?", "Do you want to eat tacos?"],
      ["y", "Say: yes, I want to eat tacos.", "sí quiero comer tacos", "si quiero comer tacos", "quiero comer tacos"],
      ["p", "¿Y quieres una cerveza o agua?", "And do you want a beer or water?"],
      ["y", "Say: I'm thirsty, water, please.", "tengo sed agua por favor", "agua por favor"]
    ] }
},
{
  id: "l08", title: "Me gusta", place: "Dinner with new friends",
  tip: "'Me gusta' literally means 'it pleases me'. Use it with any activity: me gusta jugar al golf, me gusta viajar. For something you love, say 'me encanta'.",
  items: [
    ["I like…", "me gusta …"],
    ["I don't like…", "no me gusta …"],
    ["I love it", "me encanta"],
    ["I like to travel", "me gusta viajar"],
    ["I like playing golf", "me gusta jugar al golf", "me gusta jugar golf"],
    ["I like playing tennis", "me gusta jugar al tenis", "me gusta jugar tenis"],
    ["Do you like…?", "¿te gusta …?", "le gusta …"],
    ["Me too", "a mí también", "a mi tambien", "yo también"]
  ],
  scene: { intro: "At dinner, a new friend, Carlos, asks about your hobbies.",
    lines: [
      ["p", "¿Qué te gusta hacer?", "What do you like to do?"],
      ["y", "Say: I like playing golf.", "me gusta jugar al golf", "me gusta jugar golf", "me gusta el golf"],
      ["p", "¡A mí también! ¿Te gusta el tenis?", "Me too! Do you like tennis?"],
      ["y", "Say: yes, I love it.", "sí me encanta", "si me encanta", "me encanta"],
      ["p", "¿Y te gusta viajar?", "And do you like to travel?"],
      ["y", "Say: yes, I like to travel.", "sí me gusta viajar", "si me gusta viajar", "me gusta viajar"]
    ] }
},
{
  id: "l09", title: "Mi familia", place: "Still at dinner",
  tip: "'Tengo' means 'I have', so 'tengo dos hijas' means 'I have two daughters'. A word ending in -o is usually masculine and in -a usually feminine: hijo is son, hija is daughter.",
  items: [
    ["My family", "mi familia"],
    ["I have two daughters", "tengo dos hijas"],
    ["My sister", "mi hermana"],
    ["My mother", "mi madre", "mi mamá"],
    ["Do you have children?", "¿tienes hijos?", "tiene hijos"],
    ["They live in the United States", "viven en Estados Unidos", "viven en los estados unidos"],
    ["She is a doctor", "ella es doctora", "es doctora"],
    ["My daughter is getting married", "mi hija se casa", "mi hija se va a casar"]
  ],
  scene: { intro: "Carlos shows you photos of his kids and asks about yours.",
    lines: [
      ["p", "Estos son mis hijos. ¿Tienes hijos?", "These are my kids. Do you have children?"],
      ["y", "Say: yes, I have two daughters.", "sí tengo dos hijas", "si tengo dos hijas", "tengo dos hijas"],
      ["p", "¡Qué bien! ¿Dónde viven?", "How nice! Where do they live?"],
      ["y", "Say: they live in the United States.", "viven en Estados Unidos", "viven en los estados unidos"],
      ["p", "¿Y tu familia es grande?", "And is your family big?"],
      ["y", "Say: my family is small. (pequeña)", "mi familia es pequeña", "es pequeña"]
    ] }
},
{
  id: "l10", title: "El taxi", place: "Taxi to Polanco",
  tip: "Counting by tens: veinte, treinta, cuarenta, cincuenta, cien. 'Lléveme a' means 'take me to', the phrase every taxi driver understands.",
  items: [
    ["Take me to the hotel, please", "lléveme al hotel, por favor", "al hotel por favor", "lleveme al hotel por favor"],
    ["How long does it take?", "¿cuánto tiempo tarda?", "cuanto tiempo tarda", "cuanto tiempo"],
    ["Twenty minutes", "veinte minutos"],
    ["Thirty, forty, fifty", "treinta cuarenta cincuenta"],
    ["One hundred pesos", "cien pesos"],
    ["Stop here, please", "pare aquí, por favor", "aqui por favor", "pare aqui por favor"],
    ["Keep the change", "quédese con el cambio", "quedese con el cambio"],
    ["Is there a lot of traffic?", "¿hay mucho tráfico?", "hay mucho trafico"]
  ],
  scene: { intro: "You hop into a taxi.",
    lines: [
      ["p", "Buenas tardes. ¿A dónde vamos?", "Good afternoon. Where are we going?"],
      ["y", "Say: take me to the hotel, please.", "lléveme al hotel por favor", "al hotel por favor", "lleveme al hotel por favor"],
      ["p", "Muy bien.", "Very good."],
      ["y", "Ask: how long does it take?", "cuánto tiempo tarda", "cuanto tiempo tarda", "cuanto tiempo"],
      ["p", "Unos treinta minutos. Hay mucho tráfico.", "About thirty minutes. There's a lot of traffic."],
      ["y", "Later. Say: stop here, please. Keep the change.", "pare aquí por favor quédese con el cambio", "aqui por favor quedese con el cambio", "pare aqui por favor quedese con el cambio"]
    ] }
},
{
  id: "l11", title: "¿Qué hora es?", place: "Breakfast at the hotel",
  tip: "For one o'clock say 'es la una'. For every other hour say 'son las': son las dos, son las tres. 'Y media' means half past.",
  items: [
    ["What time is it?", "¿qué hora es?", "que hora es"],
    ["It's one o'clock", "es la una"],
    ["It's three o'clock", "son las tres"],
    ["It's half past eight", "son las ocho y media"],
    ["In the morning", "por la mañana", "en la mañana", "de la mañana"],
    ["In the afternoon", "por la tarde", "en la tarde", "de la tarde"],
    ["Today", "hoy"],
    ["Tomorrow", "mañana"],
    ["Yesterday", "ayer"]
  ],
  scene: { intro: "Your coach is planning the day over breakfast.",
    lines: [
      ["y", "Ask: what time is it?", "qué hora es", "que hora es"],
      ["p", "Son las ocho y media.", "It's half past eight."],
      ["p", "El museo abre a las diez.", "The museum opens at ten."],
      ["y", "Check: at ten in the morning?", "a las diez de la mañana", "a las diez por la mañana", "a las diez"],
      ["p", "Sí. Y mañana vamos a Oaxaca.", "Yes. And tomorrow we go to Oaxaca."],
      ["y", "Say: tomorrow? Very good!", "mañana muy bien", "manana muy bien"]
    ] }
},
{
  id: "l12", title: "Los planes", place: "Chapultepec Park",
  tip: "The easiest way to talk about the future is 'voy a' plus a verb: 'voy a caminar', I'm going to walk. 'Vamos a' means 'we're going to', and it also means 'let's'.",
  items: [
    ["I'm going to walk", "voy a caminar"],
    ["We're going to eat", "vamos a comer"],
    ["Let's go!", "¡vamos!", "vamonos"],
    ["What are you going to do?", "¿qué vas a hacer?", "que vas a hacer", "que va a hacer"],
    ["This weekend", "este fin de semana"],
    ["I'm going to visit a museum", "voy a visitar un museo"],
    ["On Monday", "el lunes"],
    ["Do you want to come?", "¿quieres venir?", "quiere venir"]
  ],
  scene: { intro: "Carlos calls you about the weekend.",
    lines: [
      ["p", "¿Qué vas a hacer este fin de semana?", "What are you going to do this weekend?"],
      ["y", "Say: I'm going to visit a museum.", "voy a visitar un museo"],
      ["p", "¡Qué bien! Nosotros vamos a jugar al golf el domingo.", "Great! We're going to play golf on Sunday."],
      ["y", "Say: I like playing golf!", "me gusta jugar al golf", "me gusta jugar golf"],
      ["p", "¿Quieres venir?", "Do you want to come?"],
      ["y", "Say: yes, let's go!", "sí vamos", "si vamos", "claro vamos"]
    ] }
},
{
  id: "l13", title: "En el restaurante", place: "A restaurant in Roma",
  tip: "'Para mí' means 'for me'. Point and order: 'para mí, la sopa'. 'Me recomienda' is a great way to get the waiter talking.",
  items: [
    ["A table for two", "una mesa para dos"],
    ["The menu, please", "la carta, por favor", "el menú por favor", "la carta por favor"],
    ["What do you recommend?", "¿qué me recomienda?", "que me recomienda", "que recomienda"],
    ["For me, the soup", "para mí, la sopa", "para mi la sopa"],
    ["Is it spicy?", "¿pica?", "es picante", "esta picante"],
    ["It's delicious", "está delicioso", "esta delicioso", "está riquísimo"],
    ["I'm vegetarian", "soy vegetariano", "soy vegetariana"],
    ["A little more, please", "un poco más, por favor", "un poco mas por favor"]
  ],
  scene: { intro: "You walk into a busy restaurant.",
    lines: [
      ["y", "Ask for a table for two.", "una mesa para dos", "una mesa para dos por favor"],
      ["p", "Claro, por aquí. Aquí tiene la carta.", "Of course, this way. Here's the menu."],
      ["y", "Ask: what do you recommend?", "qué me recomienda", "que me recomienda", "que recomienda"],
      ["p", "El mole es muy bueno, pero pica un poco.", "The mole is very good, but it's a little spicy."],
      ["y", "Say: for me, the mole.", "para mí el mole", "para mi el mole"],
      ["p", "¿Qué tal?", "How is it?"],
      ["y", "Say: it's delicious!", "está delicioso", "esta delicioso", "esta riquisimo"]
    ] }
},
{
  id: "l14", title: "De compras", place: "A craft market",
  tip: "'Me lo llevo' means 'I'll take it'. Haggling is gentle and friendly. Try '¿me hace un descuento?', can you give me a discount?",
  items: [
    ["I'm just looking", "solo estoy mirando", "nada más estoy viendo", "solo estoy viendo"],
    ["Do you have another color?", "¿tiene otro color?", "tiene otro color"],
    ["It's very expensive", "es muy caro", "está muy caro", "esta muy caro"],
    ["Can you give me a discount?", "¿me hace un descuento?", "me hace un descuento", "me da un descuento"],
    ["I'll take it", "me lo llevo", "me la llevo"],
    ["Do you accept cards?", "¿aceptan tarjeta?", "acepta tarjeta", "aceptan tarjeta"],
    ["Cash", "efectivo", "en efectivo"],
    ["A gift for my daughter", "un regalo para mi hija"]
  ],
  scene: { intro: "You see a beautiful hand-woven scarf.",
    lines: [
      ["p", "¿Le puedo ayudar?", "Can I help you?"],
      ["y", "Say: I'm just looking.", "solo estoy mirando", "solo estoy viendo", "nada mas estoy viendo"],
      ["y", "Now ask: how much does it cost?", "cuánto cuesta", "cuanto cuesta"],
      ["p", "Ochocientos pesos.", "Eight hundred pesos."],
      ["y", "Say: it's very expensive. Can you give me a discount?", "es muy caro me hace un descuento", "esta muy caro me hace un descuento"],
      ["p", "Bueno, seiscientos.", "Okay, six hundred."],
      ["y", "Say: I'll take it. It's a gift for my daughter.", "me lo llevo es un regalo para mi hija", "me la llevo es un regalo para mi hija"]
    ] }
},
{
  id: "l15", title: "¿Cómo te sientes?", place: "Back at the hotel",
  tip: "Spanish has two verbs for 'to be'. 'Ser' is for what something is, like soy ingeniero. 'Estar' is for how or where something is right now, like estoy cansado, I'm tired. Feelings use 'estar'.",
  items: [
    ["I'm tired", "estoy cansado", "estoy cansada"],
    ["I'm happy", "estoy contento", "estoy contenta", "estoy feliz"],
    ["I'm busy", "estoy ocupado", "estoy ocupada"],
    ["I'm a little stressed", "estoy un poco estresado", "estoy un poco estresada"],
    ["I'm relaxed", "estoy relajado", "estoy relajada", "estoy tranquilo"],
    ["How do you feel?", "¿cómo te sientes?", "como te sientes", "como se siente"],
    ["I feel good", "me siento bien"],
    ["What's wrong?", "¿qué te pasa?", "que te pasa", "que pasa"]
  ],
  scene: { intro: "Your coach checks in after a long day.",
    lines: [
      ["p", "¿Cómo te sientes?", "How do you feel?"],
      ["y", "Say: I'm tired, but happy.", "estoy cansado pero contento", "estoy cansada pero contenta", "estoy cansado pero feliz"],
      ["p", "Normal. Fue un día largo.", "Normal. It was a long day."],
      ["y", "Ask: and you, how do you feel?", "y tú cómo te sientes", "y tu como te sientes", "y usted como se siente"],
      ["p", "Estoy muy bien, gracias.", "I'm very well, thanks."]
    ] }
},
{
  id: "l16", title: "El clima", place: "The bus to Oaxaca",
  tip: "Weather uses 'hace', which literally means 'it makes': hace calor, it's hot; hace frío, it's cold. Rain is just 'llueve', it rains.",
  items: [
    ["It's hot", "hace calor"],
    ["It's cold", "hace frío", "hace frio"],
    ["It's sunny", "hace sol", "está soleado"],
    ["It's raining", "está lloviendo", "llueve", "esta lloviendo"],
    ["What's the weather like?", "¿qué tiempo hace?", "que tiempo hace", "como esta el clima"],
    ["What a nice day!", "¡qué buen día!", "que buen dia", "que dia tan bonito"],
    ["It's windy", "hace viento"],
    ["I like the cold", "me gusta el frío", "me gusta el frio"]
  ],
  scene: { intro: "On the bus, a woman next to you starts chatting.",
    lines: [
      ["p", "¡Uf, hace mucho calor hoy!", "Phew, it's really hot today!"],
      ["y", "Agree: yes, it's very hot.", "sí hace mucho calor", "si hace mucho calor", "hace mucho calor"],
      ["p", "¿Qué tiempo hace en Nueva Jersey ahora?", "What's the weather like in New Jersey now?"],
      ["y", "Say: it's cold, and it's raining.", "hace frío y está lloviendo", "hace frio y esta lloviendo", "hace frio y llueve"],
      ["p", "¡Entonces disfruta el sol!", "Then enjoy the sun!"],
      ["y", "Say: thank you. What a nice day!", "gracias qué buen día", "gracias que buen dia"]
    ] }
},
{
  id: "l17", title: "En el hotel", place: "A hotel in Oaxaca",
  tip: "'Tengo una reservación' means 'I have a reservation'. In Mexico, 'reservación' is the common word. '¿A qué hora…?' means 'at what time…?' and works for breakfast, checkout, anything.",
  items: [
    ["I have a reservation", "tengo una reservación", "tengo una reserva", "tengo una reservacion"],
    ["In the name of…", "a nombre de …"],
    ["For three nights", "para tres noches", "por tres noches"],
    ["What time is breakfast?", "¿a qué hora es el desayuno?", "a que hora es el desayuno"],
    ["The key, please", "la llave, por favor", "la llave por favor"],
    ["The wifi doesn't work", "el wifi no funciona", "no funciona el wifi"],
    ["What's the password?", "¿cuál es la contraseña?", "cual es la contrasena", "cual es la clave"],
    ["Where is the elevator?", "¿dónde está el elevador?", "donde esta el elevador", "donde esta el ascensor"]
  ],
  scene: { intro: "You arrive at your hotel in Oaxaca.",
    lines: [
      ["p", "Buenas noches, bienvenido.", "Good evening, welcome."],
      ["y", "Say: good evening, I have a reservation.", "buenas noches tengo una reservación", "buenas noches tengo una reserva", "tengo una reservacion"],
      ["p", "¿A nombre de quién?", "Under whose name?"],
      ["y", "Give your name: in the name of…", "a nombre de …", "…"],
      ["p", "Perfecto, para tres noches. Aquí tiene la llave.", "Perfect, for three nights. Here's the key."],
      ["y", "Ask: what time is breakfast?", "a qué hora es el desayuno", "a que hora es el desayuno"],
      ["p", "De siete a diez.", "From seven to ten."]
    ] }
},
{
  id: "l18", title: "El trabajo", place: "A café, chatting with a local",
  tip: "'¿A qué te dedicas?' is the natural way to ask 'what do you do?'. For your answer, 'trabajo con…' means 'I work with…', and 'soy…' means 'I am…' for job titles.",
  items: [
    ["What do you do?", "¿a qué te dedicas?", "a que te dedicas", "a que se dedica", "en que trabajas"],
    ["I'm an engineer", "soy ingeniero", "soy ingeniera"],
    ["I work with computers", "trabajo con computadoras"],
    ["I'm a consultant", "soy consultor", "soy consultora"],
    ["I work from home", "trabajo desde casa", "trabajo en casa"],
    ["I build software for banks", "hago software para bancos", "hago programas para bancos"],
    ["I like my work", "me gusta mi trabajo"],
    ["I'm going to retire soon", "me voy a jubilar pronto", "voy a jubilarme pronto"]
  ],
  scene: { intro: "A friendly man named Javier sits at the next table.",
    lines: [
      ["p", "¿Y tú, a qué te dedicas?", "And you, what do you do?"],
      ["y", "Say: I'm an engineer. I work with computers.", "soy ingeniero trabajo con computadoras", "soy ingeniero y trabajo con computadoras"],
      ["p", "¡Interesante! ¿Trabajas para una empresa?", "Interesting! Do you work for a company?"],
      ["y", "Say: no, I'm a consultant. I work from home.", "no soy consultor trabajo desde casa", "soy consultor trabajo desde casa"],
      ["p", "¡Qué suerte!", "Lucky you!"],
      ["y", "Say: yes, I like my work.", "sí me gusta mi trabajo", "si me gusta mi trabajo"]
    ] }
},
{
  id: "l19", title: "Golf y tenis", place: "A club outside Oaxaca",
  tip: "Sports use 'jugar a' plus the sport: juego al golf, juego al tenis. 'Al' is just 'a' plus 'el'. In Mexico many people drop it: juego golf. Both are fine.",
  items: [
    ["I play golf", "juego al golf", "juego golf"],
    ["Do you play tennis?", "¿juegas al tenis?", "juegas tenis", "juega tenis"],
    ["Every week", "cada semana", "todas las semanas"],
    ["I'm not very good", "no soy muy bueno", "no juego muy bien"],
    ["Good shot!", "¡buen tiro!", "buen tiro", "buen golpe"],
    ["Who won?", "¿quién ganó?", "quien gano"],
    ["We won", "ganamos"],
    ["Shall we play tomorrow?", "¿jugamos mañana?", "jugamos manana"]
  ],
  scene: { intro: "Carlos invited you to play nine holes.",
    lines: [
      ["p", "¿Juegas mucho al golf?", "Do you play golf a lot?"],
      ["y", "Say: yes, every week. But I'm not very good.", "sí cada semana pero no soy muy bueno", "si cada semana pero no soy muy bueno"],
      ["p", "¡Ja! ¡Buen tiro!", "Ha! Good shot!"],
      ["y", "Say: thank you! Do you play tennis?", "gracias juegas al tenis", "gracias juegas tenis"],
      ["p", "Sí, los sábados.", "Yes, on Saturdays."],
      ["y", "Ask: shall we play tomorrow?", "jugamos mañana", "jugamos manana"]
    ] }
},
{
  id: "l20", title: "El bridge", place: "A card table on the patio",
  tip: "Cards are 'las cartas', a partner is 'mi compañero', and to win is 'ganar'. In Spanish, bridge is still called 'bridge'.",
  items: [
    ["Do you play cards?", "¿juegas a las cartas?", "juegas cartas", "juega cartas"],
    ["I play bridge", "juego al bridge", "juego bridge"],
    ["My partner", "mi compañero", "mi compañera", "mi pareja"],
    ["It's your turn", "te toca", "es tu turno"],
    ["Good game!", "¡buen juego!", "buena partida", "buen juego"],
    ["I play in tournaments", "juego en torneos"],
    ["I'm learning", "estoy aprendiendo"],
    ["One more game?", "¿otra partida?", "otra partida", "otro juego"]
  ],
  scene: { intro: "In the evening, some guests are playing cards.",
    lines: [
      ["p", "¿Juegas a las cartas?", "Do you play cards?"],
      ["y", "Say: yes, I play bridge. I play in tournaments.", "sí juego al bridge juego en torneos", "si juego bridge juego en torneos"],
      ["p", "¡Excelente! ¿Quieres ser mi compañero?", "Excellent! Want to be my partner?"],
      ["y", "Say: yes, of course!", "sí claro", "si claro", "claro que si"],
      ["p", "Te toca.", "It's your turn."],
      ["y", "Later. Say: good game! One more game?", "buen juego otra partida", "buena partida otra partida"]
    ] }
},
{
  id: "l21", title: "El autobús", place: "Oaxaca bus station",
  tip: "'Un boleto' is a ticket in Mexico. 'Ida y vuelta' is round trip, and 'solo ida' is one way. '¿A qué hora sale?' means 'what time does it leave?'.",
  items: [
    ["A ticket to the coast", "un boleto a la costa", "un boleto para la costa"],
    ["Round trip", "ida y vuelta"],
    ["One way", "solo ida", "sólo ida"],
    ["What time does it leave?", "¿a qué hora sale?", "a que hora sale"],
    ["What time does it arrive?", "¿a qué hora llega?", "a que hora llega"],
    ["Which platform?", "¿qué andén?", "que anden", "cual anden"],
    ["Is this seat free?", "¿está libre este asiento?", "esta libre este asiento", "esta libre"],
    ["I'm going to Puerto Escondido", "voy a Puerto Escondido"]
  ],
  scene: { intro: "You're buying a ticket to the Pacific coast.",
    lines: [
      ["y", "Say: a ticket to Puerto Escondido, please.", "un boleto a puerto escondido por favor", "un boleto para puerto escondido por favor"],
      ["p", "¿Ida y vuelta?", "Round trip?"],
      ["y", "Say: one way, please.", "solo ida por favor", "sólo ida por favor"],
      ["p", "Son seiscientos pesos.", "That's six hundred pesos."],
      ["y", "Ask: what time does it leave?", "a qué hora sale", "a que hora sale"],
      ["p", "A las nueve, andén tres.", "At nine, platform three."]
    ] }
},
{
  id: "l22", title: "La comida", place: "Mercado 20 de Noviembre",
  tip: "'Probar' means to try or taste. '¿Puedo probar?' gets you a free sample at almost any market stall. 'Rico' means delicious when talking about food.",
  items: [
    ["Can I try?", "¿puedo probar?", "puedo probar"],
    ["It's very tasty", "está muy rico", "esta muy rico", "está muy bueno"],
    ["Not too spicy, please", "no muy picante, por favor", "no muy picante por favor", "sin mucho picante"],
    ["What is this?", "¿qué es esto?", "que es esto"],
    ["I've never tried it", "nunca lo he probado"],
    ["I'm full", "estoy lleno", "estoy llena"],
    ["Breakfast, lunch, dinner", "desayuno comida cena", "desayuno almuerzo cena"],
    ["Cheers!", "¡salud!", "salud"]
  ],
  scene: { intro: "A vendor offers you a tlayuda.",
    lines: [
      ["y", "Ask: what is this?", "qué es esto", "que es esto"],
      ["p", "Es una tlayuda. ¿Quieres probar?", "It's a tlayuda. Want to try?"],
      ["y", "Say: yes! But not too spicy, please.", "sí pero no muy picante por favor", "si pero no muy picante por favor"],
      ["p", "Aquí tienes.", "Here you go."],
      ["y", "Say: it's very tasty!", "está muy rico", "esta muy rico", "esta muy bueno"],
      ["p", "¿Otra?", "Another?"],
      ["y", "Say: no thanks, I'm full.", "no gracias estoy lleno", "no gracias estoy llena"]
    ] }
},
{
  id: "l23", title: "La meditación", place: "A sunrise retreat by the sea",
  tip: "'Cada mañana' means every morning. 'Me ayuda a' means 'it helps me to', a useful pattern for explaining why you do something: me ayuda a estar tranquilo.",
  items: [
    ["I meditate every morning", "medito cada mañana", "medito todas las mañanas"],
    ["Breathe slowly", "respira despacio", "respirar despacio"],
    ["In silence", "en silencio"],
    ["It helps me be calm", "me ayuda a estar tranquilo", "me ayuda a estar tranquila"],
    ["Peace", "la paz", "paz"],
    ["The ocean is beautiful", "el mar es hermoso", "el mar es muy bonito", "el mar es bonito"],
    ["I feel at peace", "me siento en paz"],
    ["For twenty minutes", "por veinte minutos", "durante veinte minutos"]
  ],
  scene: { intro: "At a beach retreat, you meet the meditation teacher, Elena.",
    lines: [
      ["p", "¿Meditas?", "Do you meditate?"],
      ["y", "Say: yes, I meditate every morning.", "sí medito cada mañana", "si medito cada manana", "medito todas las mañanas"],
      ["p", "¿Por qué meditas?", "Why do you meditate?"],
      ["y", "Say: it helps me be calm.", "me ayuda a estar tranquilo", "me ayuda a estar tranquila"],
      ["p", "Muy bien. Respira despacio... en silencio.", "Very good. Breathe slowly... in silence."],
      ["y", "Afterwards. Say: I feel at peace. The ocean is beautiful.", "me siento en paz el mar es hermoso", "me siento en paz el mar es muy bonito"]
    ] }
},
{
  id: "l24", title: "Por teléfono", place: "Calling Carlos",
  tip: "Mexicans answer the phone with '¿Bueno?'. '¿Estás libre?' means 'are you free?', and 'nos vemos a las…' means 'see you at…'.",
  items: [
    ["Hello? (on the phone)", "¿bueno?", "bueno", "aló"],
    ["It's me, …", "soy yo …", "habla …"],
    ["Are you free tonight?", "¿estás libre esta noche?", "estas libre esta noche"],
    ["Shall we have dinner?", "¿cenamos?", "cenamos juntos", "quieres cenar"],
    ["See you at eight", "nos vemos a las ocho"],
    ["I'll call you later", "te llamo más tarde", "te llamo mas tarde", "luego te llamo"],
    ["I can't hear you well", "no te oigo bien", "no te escucho bien"],
    ["Perfect", "perfecto"]
  ],
  scene: { intro: "You call Carlos to make dinner plans.",
    lines: [
      ["p", "¿Bueno?", "Hello?"],
      ["y", "Say: hi Carlos, it's me.", "hola carlos soy yo", "hola carlos soy yo …"],
      ["p", "¡Hola! ¿Qué tal?", "Hi! How's it going?"],
      ["y", "Ask: are you free tonight? Shall we have dinner?", "estás libre esta noche cenamos", "estas libre esta noche cenamos"],
      ["p", "¡Claro! ¿A qué hora?", "Sure! What time?"],
      ["y", "Say: see you at eight.", "nos vemos a las ocho"],
      ["p", "Perfecto.", "Perfect."]
    ] }
},
{
  id: "l25", title: "¿Me ayuda?", place: "A pharmacy",
  tip: "'Me duele' means 'it hurts me': me duele la cabeza, my head hurts. In an emergency, '¡Ayuda!' is help, and 'necesito un médico' is 'I need a doctor'.",
  items: [
    ["Can you help me?", "¿me puede ayudar?", "me puede ayudar", "me ayuda"],
    ["My head hurts", "me duele la cabeza"],
    ["My back hurts", "me duele la espalda"],
    ["I need a doctor", "necesito un médico", "necesito un doctor", "necesito un medico"],
    ["Where is a pharmacy?", "¿dónde hay una farmacia?", "donde hay una farmacia", "donde esta la farmacia"],
    ["Something for a headache", "algo para el dolor de cabeza"],
    ["How many a day?", "¿cuántas al día?", "cuantas al dia"],
    ["I feel better", "me siento mejor"]
  ],
  scene: { intro: "Too much sun. You walk into a pharmacy.",
    lines: [
      ["p", "Buenas tardes. ¿Le ayudo?", "Good afternoon. Can I help you?"],
      ["y", "Say: yes, my head hurts.", "sí me duele la cabeza", "si me duele la cabeza", "me duele la cabeza"],
      ["p", "Tome esto. Es para el dolor.", "Take this. It's for the pain."],
      ["y", "Ask: how many a day?", "cuántas al día", "cuantas al dia"],
      ["p", "Dos al día, con comida.", "Two a day, with food."],
      ["y", "Next day. Say: I feel better, thank you.", "me siento mejor gracias"]
    ] }
},
{
  id: "l26", title: "Ayer", place: "Breakfast, the next morning",
  tip: "Past tense, part one. For -ar verbs, 'I did' ends in -é: hablé, caminé, jugué. For -er and -ir verbs it ends in -í: comí, viví. And 'fui' means 'I went'.",
  items: [
    ["Yesterday I walked on the beach", "ayer caminé en la playa", "ayer camine en la playa", "ayer caminé por la playa"],
    ["I ate fish", "comí pescado", "comi pescado"],
    ["I went to the market", "fui al mercado"],
    ["I spoke with a fisherman", "hablé con un pescador", "hable con un pescador"],
    ["I played tennis", "jugué al tenis", "jugue tenis", "jugué tenis"],
    ["I slept very well", "dormí muy bien", "dormi muy bien"],
    ["Last night", "anoche"],
    ["It was fantastic", "fue fantástico", "fue fantastico", "estuvo fantástico"]
  ],
  scene: { intro: "Your coach asks about your day off.",
    lines: [
      ["p", "¿Qué hiciste ayer?", "What did you do yesterday?"],
      ["y", "Say: yesterday I walked on the beach.", "ayer caminé en la playa", "ayer camine en la playa", "ayer camine por la playa"],
      ["p", "¿Y comiste algo rico?", "And did you eat something good?"],
      ["y", "Say: yes, I ate fish. It was fantastic.", "sí comí pescado fue fantástico", "si comi pescado fue fantastico"],
      ["p", "¿Dormiste bien?", "Did you sleep well?"],
      ["y", "Say: I slept very well.", "dormí muy bien", "dormi muy bien"]
    ] }
},
{
  id: "l27", title: "¿Qué hiciste?", place: "A beach bar at sunset",
  tip: "Asking about the past: '¿qué hiciste?' means what did you do, and '¿adónde fuiste?' means where did you go. 'Vi' means I saw, and 'compré' means I bought.",
  items: [
    ["What did you do?", "¿qué hiciste?", "que hiciste", "que hizo"],
    ["Where did you go?", "¿adónde fuiste?", "a donde fuiste", "adonde fuiste"],
    ["I saw dolphins", "vi delfines"],
    ["I bought a hat", "compré un sombrero", "compre un sombrero"],
    ["We took a boat", "tomamos una lancha", "tomamos un barco"],
    ["I visited Oaxaca", "visité Oaxaca", "visite oaxaca"],
    ["Did you like it?", "¿te gustó?", "te gusto", "le gusto"],
    ["I liked it a lot", "me gustó mucho", "me gusto mucho"]
  ],
  scene: { intro: "A couple from Guadalajara sits next to you.",
    lines: [
      ["p", "¿Adónde fuiste hoy?", "Where did you go today?"],
      ["y", "Say: we took a boat. I saw dolphins!", "tomamos una lancha vi delfines", "tomamos un barco vi delfines"],
      ["p", "¡Qué padre! ¿Te gustó?", "How cool! Did you like it?"],
      ["y", "Say: I liked it a lot.", "me gustó mucho", "me gusto mucho"],
      ["p", "¿Y antes, dónde estuviste?", "And before, where were you?"],
      ["y", "Say: I visited Oaxaca.", "visité oaxaca", "visite oaxaca"]
    ] }
},
{
  id: "l28", title: "Mis opiniones", place: "Dinner conversation",
  tip: "'Creo que' means 'I think that'. Put any sentence after it. 'Estoy de acuerdo' means 'I agree'. Opinions turn short answers into real conversation.",
  items: [
    ["I think that…", "creo que …", "pienso que …"],
    ["In my opinion…", "en mi opinión …", "en mi opinion …"],
    ["I agree", "estoy de acuerdo"],
    ["I don't agree", "no estoy de acuerdo"],
    ["I'm not sure", "no estoy seguro", "no estoy segura"],
    ["It depends", "depende"],
    ["I think it's a good idea", "creo que es una buena idea"],
    ["What do you think?", "¿qué piensas?", "que piensas", "que opinas", "que piensa"]
  ],
  scene: { intro: "Over dinner, Javier talks about the city.",
    lines: [
      ["p", "Creo que Oaxaca es la ciudad más bonita de México. ¿Qué piensas?", "I think Oaxaca is the prettiest city in Mexico. What do you think?"],
      ["y", "Say: I agree.", "estoy de acuerdo"],
      ["p", "¿Y la comida es mejor aquí o en la Ciudad de México?", "And is the food better here or in Mexico City?"],
      ["y", "Say: it depends. I'm not sure.", "depende no estoy seguro", "depende no estoy segura"],
      ["p", "¿Vamos al mercado mañana temprano?", "Shall we go to the market early tomorrow?"],
      ["y", "Say: I think it's a good idea.", "creo que es una buena idea"]
    ] }
},
{
  id: "l29", title: "Para conversar", place: "A long lunch",
  tip: "Fillers make you sound natural and buy you thinking time. 'Bueno' and 'pues' mean 'well'. '¿De verdad?' means 'really?', and '¡No me digas!' means 'no way!'. Use them freely.",
  items: [
    ["Well…", "bueno …", "pues …", "bueno", "pues"],
    ["Really?", "¿de verdad?", "de verdad", "en serio"],
    ["No way!", "¡no me digas!", "no me digas"],
    ["How nice!", "¡qué bien!", "que bien", "que padre"],
    ["Let's see…", "a ver …", "a ver"],
    ["I mean…", "o sea …", "o sea"],
    ["Right?", "¿verdad?", "verdad", "no"],
    ["Tell me more", "cuéntame más", "cuentame mas"]
  ],
  scene: { intro: "Carlos tells you a story. Keep him talking.",
    lines: [
      ["p", "Pues, el sábado gané un torneo de golf.", "So, on Saturday I won a golf tournament."],
      ["y", "React: no way! Really?", "no me digas de verdad", "no me digas en serio"],
      ["p", "Sí, ¡con un hoyo en uno!", "Yes, with a hole in one!"],
      ["y", "Say: how nice! Tell me more.", "qué bien cuéntame más", "que bien cuentame mas", "que padre cuentame mas"],
      ["p", "Bueno... fue en el último hoyo.", "Well... it was on the last hole."],
      ["y", "Say: fantastic, right?", "fantástico verdad", "fantastico verdad"]
    ] }
},
{
  id: "l30", title: "¿Cómo se dice?", place: "The last evening",
  tip: "This is your secret weapon: when you don't know a word, describe it. '¿Cómo se dice…?' means how do you say. 'Es una cosa que…' means it's a thing that. 'Es como…' means it's like. With these you can always get your idea across.",
  items: [
    ["How do you say…?", "¿cómo se dice …?", "como se dice …", "como se dice"],
    ["What does … mean?", "¿qué significa …?", "que significa …", "que quiere decir …"],
    ["It's a thing that…", "es una cosa que …"],
    ["It's like…", "es como …"],
    ["It's a place where…", "es un lugar donde …"],
    ["It's a person who…", "es una persona que …"],
    ["I forgot the word", "olvidé la palabra", "se me olvidó la palabra", "olvide la palabra"],
    ["In other words…", "en otras palabras …", "es decir …"]
  ],
  scene: { intro: "You want a corkscrew but don't know the word.",
    lines: [
      ["y", "Say: excuse me, I forgot the word.", "perdón olvidé la palabra", "disculpe olvide la palabra", "perdon se me olvido la palabra"],
      ["p", "No hay problema. ¿Qué necesitas?", "No problem. What do you need?"],
      ["y", "Say: it's a thing that opens wine. (abre el vino)", "es una cosa que abre el vino", "es una cosa para abrir el vino"],
      ["p", "¡Ah, un sacacorchos!", "Ah, a corkscrew!"],
      ["y", "Ask: how do you say it? Sacacorchos?", "cómo se dice sacacorchos", "como se dice sacacorchos", "sacacorchos"],
      ["p", "¡Exacto! Sacacorchos. ¡Salud!", "Exactly! Corkscrew. Cheers!"],
      ["y", "Say: cheers!", "salud"]
    ] }
}
];
