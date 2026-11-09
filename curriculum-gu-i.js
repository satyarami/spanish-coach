// Gujarati — Intermediate. Story: two months in Gujarat for a family wedding and Navratri.
// Format as curriculum-gu.js: items [english, romanized, gujarati, ...alts]; scene "p" [gu, en, rom]; "y" [cue, rom, gu, ...alts].
// Lesson ids gi01…gi30 must never be reused or renumbered.
window.CURRICULUM_GU_I = [
{ id: "gi01", title: "ફરી ગુજરાતમાં", place: "Back in Gujarat",
  tip: "Past tense: 'hu aavyo' means I came, and a woman says 'hu aavi'. 'Hato' means was: 'pravas lambo hato', the trip was long.",
  items: [
    ["I arrived yesterday", "hu gaikale aavyo", "હું ગઈકાલે આવ્યો", "હું ગઈકાલે આવી"],
    ["The trip was long", "pravas lambo hato", "પ્રવાસ લાંબો હતો"],
    ["I'll stay two months", "hu be mahina rahish", "હું બે મહિના રહીશ"],
    ["I came for a wedding", "hu lagna mate aavyo chhu", "હું લગ્ન માટે આવ્યો છું", "હું લગ્ન માટે આવી છું"],
    ["I missed the food here", "mane ahinu khavanu yaad aavtu hatu", "મને અહીંનું ખાવાનું યાદ આવતું હતું"],
    ["Last year I went to Vadodara", "gaya varshe hu Vadodara gayo hato", "ગયા વર્ષે હું વડોદરા ગયો હતો", "ગયા વર્ષે હું વડોદરા ગઈ હતી"]
  ],
  scene: { intro: "Your cousin picks you up at the airport.", lines: [
    ["p", "આવો આવો! ક્યારે આવ્યા?", "Welcome! When did you arrive?", "aavo aavo! kyare aavya?"],
    ["y", "Say: I arrived yesterday. The trip was long.", "hu gaikale aavyo, pravas lambo hato", "હું ગઈકાલે આવ્યો પ્રવાસ લાંબો હતો", "હું ગઈકાલે આવી પ્રવાસ લાંબો હતો"],
    ["p", "કેટલા દિવસ રહેશો?", "How many days will you stay?", "ketla divas rahesho?"],
    ["y", "Say: I'll stay two months. I came for a wedding.", "hu be mahina rahish, hu lagna mate aavyo chhu", "હું બે મહિના રહીશ હું લગ્ન માટે આવ્યો છું", "હું બે મહિના રહીશ હું લગ્ન માટે આવી છું"]
  ] } },
{ id: "gi02", title: "ઘરમાં", place: "Staying with the family",
  tip: "Polite questions with 'kya' (where), 'ketla vage' (at what time). 'Taklif na leta' is a gracious 'please don't go to any trouble'.",
  items: [
    ["Where should I keep my bag?", "mari bag kya muku?", "મારી બેગ ક્યાં મૂકું"],
    ["Is there hot water?", "garam paani chhe?", "ગરમ પાણી છે"],
    ["What time is dinner?", "jamvanu ketla vage chhe?", "જમવાનું કેટલા વાગે છે"],
    ["Please don't go to any trouble", "taklif na leta", "તકલીફ ના લેતા", "તકલીફ ન લેતા"],
    ["Your home is very beautiful", "tamaru ghar khub sundar chhe", "તમારું ઘર ખૂબ સુંદર છે"],
    ["I'll help in the kitchen", "hu rasodama madad karish", "હું રસોડામાં મદદ કરીશ"]
  ],
  scene: { intro: "Your aunt shows you around the house.", lines: [
    ["p", "આ તમારો રૂમ છે.", "This is your room.", "aa tamaro room chhe."],
    ["y", "Say: your home is very beautiful. Where should I keep my bag?", "tamaru ghar khub sundar chhe, mari bag kya muku?", "તમારું ઘર ખૂબ સુંદર છે મારી બેગ ક્યાં મૂકું"],
    ["p", "અહીં મૂકો. જમવાનું આઠ વાગે છે.", "Keep it here. Dinner is at eight.", "ahi muko. jamvanu aath vage chhe."],
    ["y", "Say: please don't go to any trouble. I'll help in the kitchen.", "taklif na leta, hu rasodama madad karish", "તકલીફ ના લેતા હું રસોડામાં મદદ કરીશ"]
  ] } },
{ id: "gi03", title: "દિનચર્યા", place: "Daily routine",
  tip: "Present habits end in '-u chhu' for 'I': 'hu uthu chhu', I get up; 'hu dhyan karu chhu', I meditate.",
  items: [
    ["I get up at seven", "hu saat vage uthu chhu", "હું સાત વાગે ઊઠું છું"],
    ["I meditate in the morning", "hu savare dhyan karu chhu", "હું સવારે ધ્યાન કરું છું"],
    ["Then I go for a walk", "pachhi chalva jau chhu", "પછી ચાલવા જાઉં છું"],
    ["In the afternoon I rest", "bapore aaram karu chhu", "બપોરે આરામ કરું છું"],
    ["In the evening I meet friends", "sanje mitrone malu chhu", "સાંજે મિત્રોને મળું છું"],
    ["At night I go to sleep early", "ratre vahelo sui jau chhu", "રાત્રે વહેલો સૂઈ જાઉં છું", "રાત્રે વહેલી સૂઈ જાઉં છું"]
  ],
  scene: { intro: "Your uncle asks about your day.", lines: [
    ["p", "તમારો દિવસ કેવો હોય છે?", "What is your day like?", "tamaro divas kevo hoy chhe?"],
    ["y", "Say: I get up at seven and meditate in the morning.", "hu saat vage uthu chhu ane savare dhyan karu chhu", "હું સાત વાગે ઊઠું છું અને સવારે ધ્યાન કરું છું"],
    ["p", "વાહ! પછી?", "Wow! Then?", "vah! pachhi?"],
    ["y", "Say: then I go for a walk. In the evening I meet friends.", "pachhi chalva jau chhu, sanje mitrone malu chhu", "પછી ચાલવા જાઉં છું સાંજે મિત્રોને મળું છું"]
  ] } },
{ id: "gi04", title: "લગ્નની ખરીદી", place: "Shopping for wedding clothes",
  tip: "'Batavo' means please show; 'chalshe?' means will it do? 'Chhello bhav' is the final price, the start of any friendly bargain.",
  items: [
    ["I need a kurta for the wedding", "mare lagna mate kurto joie chhe", "મારે લગ્ન માટે કુર્તો જોઈએ છે"],
    ["Show me another colour", "bijo rang batavo", "બીજો રંગ બતાવો"],
    ["This is a little big", "aa thodo moto chhe", "આ થોડો મોટો છે"],
    ["Is there a smaller size?", "nani size chhe?", "નાની સાઇઝ છે"],
    ["What's your final price?", "chhello bhav shu chhe?", "છેલ્લો ભાવ શું છે"],
    ["Will a card work?", "card thi chalshe?", "કાર્ડથી ચાલશે"]
  ],
  scene: { intro: "At a clothes shop in Law Garden.", lines: [
    ["p", "બોલો, શું જોઈએ?", "Tell me, what do you need?", "bolo, shu joie?"],
    ["y", "Say: I need a kurta for the wedding.", "mare lagna mate kurto joie chhe", "મારે લગ્ન માટે કુર્તો જોઈએ છે"],
    ["p", "આ જુઓ, બે હજાર રૂપિયા.", "Look at this, two thousand rupees.", "aa juo, be hajar rupiya."],
    ["y", "Say: this is a little big. What's your final price?", "aa thodo moto chhe, chhello bhav shu chhe?", "આ થોડો મોટો છે છેલ્લો ભાવ શું છે"]
  ] } },
{ id: "gi05", title: "ગયા અઠવાડિયે", place: "Last week",
  tip: "Telling a story in the past with 'ame' (we): 'ame farya' (we toured), 'ame joyo' (we saw). 'Maja aavi' means it was fun.",
  items: [
    ["Last week we toured Ahmedabad", "gaya athvadiye ame Amdavad farya", "ગયા અઠવાડિયે અમે અમદાવાદ ફર્યા"],
    ["We saw the Sabarmati Ashram", "ame Sabarmati Ashram joyo", "અમે સાબરમતી આશ્રમ જોયો"],
    ["It was very peaceful there", "tya khub shanti hati", "ત્યાં ખૂબ શાંતિ હતી"],
    ["We talked a lot", "ame ghani vato kari", "અમે ઘણી વાતો કરી"],
    ["Then we ate dhokla", "pachhi ame dhokla khadha", "પછી અમે ઢોકળાં ખાધાં"],
    ["It was a lot of fun", "khub maja aavi", "ખૂબ મજા આવી", "બહુ મજા આવી"]
  ],
  scene: { intro: "A neighbour asks about your week.", lines: [
    ["p", "ગયા અઠવાડિયે શું કર્યું?", "What did you do last week?", "gaya athvadiye shu karyu?"],
    ["y", "Say: we toured Ahmedabad. We saw the Sabarmati Ashram.", "ame Amdavad farya, ame Sabarmati Ashram joyo", "અમે અમદાવાદ ફર્યા અમે સાબરમતી આશ્રમ જોયો"],
    ["p", "કેવું લાગ્યું?", "How did you like it?", "kevu lagyu?"],
    ["y", "Say: it was very peaceful there. It was a lot of fun.", "tya khub shanti hati, khub maja aavi", "ત્યાં ખૂબ શાંતિ હતી ખૂબ મજા આવી"]
  ] } },
{ id: "gi06", title: "આયોજન", place: "Making plans",
  tip: "Future tense: '-ish' for I (jaish, I will go), '-ishu' for we (jaishu), '-sho' for you (aavsho). 'Joie shu thay chhe' means let's see what happens.",
  items: [
    ["Tomorrow we will go to Dwarka", "kale ame Dwarka jaishu", "કાલે અમે દ્વારકા જઈશું"],
    ["We will see the temple there", "tya mandir joishu", "ત્યાં મંદિર જોઈશું"],
    ["I will go by train", "hu train ma jaish", "હું ટ્રેનમાં જઈશ"],
    ["When will you come back?", "kyare pachha aavsho?", "ક્યારે પાછા આવશો"],
    ["We'll come back on Sunday", "ame ravivare pachha aavishu", "અમે રવિવારે પાછા આવીશું"],
    ["Let's see what happens", "joie shu thay chhe", "જોઈએ શું થાય છે"]
  ],
  scene: { intro: "Planning a weekend trip with your cousin.", lines: [
    ["p", "કાલનો શું પ્લાન છે?", "What's the plan for tomorrow?", "kalno shu plan chhe?"],
    ["y", "Say: tomorrow we will go to Dwarka. We will see the temple there.", "kale ame Dwarka jaishu, tya mandir joishu", "કાલે અમે દ્વારકા જઈશું ત્યાં મંદિર જોઈશું"],
    ["p", "ક્યારે પાછા આવશો?", "When will you come back?", "kyare pachha aavsho?"],
    ["y", "Say: we'll come back on Sunday.", "ame ravivare pachha aavishu", "અમે રવિવારે પાછા આવીશું"]
  ] } },
{ id: "gi07", title: "જોઈએ", place: "Needs and shoulds",
  tip: "'Mare … joie' means I should: 'mare dava levi joie', I should take medicine. 'Mare … chhe' means I need to: 'mare bank ma javu chhe'.",
  items: [
    ["I should take medicine", "mare dava levi joie", "મારે દવા લેવી જોઈએ"],
    ["You should rest", "tamare aaram karvo joie", "તમારે આરામ કરવો જોઈએ"],
    ["I need to go to the bank", "mare bank ma javu chhe", "મારે બેંકમાં જવું છે"],
    ["I'm in a hurry", "mare utaval chhe", "મારે ઉતાવળ છે"],
    ["You shouldn't worry", "tamare chinta na karvi joie", "તમારે ચિંતા ના કરવી જોઈએ", "તમારે ચિંતા ન કરવી જોઈએ"],
    ["I need to book a ticket", "mare ticket book karavvi chhe", "મારે ટિકિટ બુક કરાવવી છે"]
  ],
  scene: { intro: "Your aunt sees you rushing.", lines: [
    ["p", "ક્યાં જાઓ છો આટલી ઉતાવળમાં?", "Where are you going in such a hurry?", "kya jao chho aatli utavalma?"],
    ["y", "Say: I need to go to the bank. I'm in a hurry.", "mare bank ma javu chhe, mare utaval chhe", "મારે બેંકમાં જવું છે મારે ઉતાવળ છે"],
    ["p", "તમે થાકેલા લાગો છો.", "You look tired.", "tame thakela lago chho."],
    ["y", "Say: yes, I should rest.", "ha, mare aaram karvo joie", "હા મારે આરામ કરવો જોઈએ"]
  ] } },
{ id: "gi08", title: "શકું", place: "Can and could",
  tip: "'Shaku' means can: 'hu vanchi shaku chhu', I can read. 'Tame … shako?' is a polite could you…? 'Chokkas' means certainly.",
  items: [
    ["I can read a little Gujarati", "hu thodu Gujarati vanchi shaku chhu", "હું થોડું ગુજરાતી વાંચી શકું છું"],
    ["Could you help me?", "tame mane madad kari shako?", "તમે મને મદદ કરી શકો"],
    ["I won't be able to come", "hu aavi shakish nahi", "હું આવી શકીશ નહીં"],
    ["May I sit here?", "shu hu ahi besi shaku?", "શું હું અહીં બેસી શકું", "હું અહીં બેસી શકું"],
    ["Could you speak slowly?", "tame dhime boli shako?", "તમે ધીમે બોલી શકો"],
    ["Yes, certainly", "ha, chokkas", "હા ચોક્કસ"]
  ],
  scene: { intro: "At a crowded tea shop.", lines: [
    ["y", "Ask: may I sit here?", "shu hu ahi besi shaku?", "શું હું અહીં બેસી શકું", "હું અહીં બેસી શકું"],
    ["p", "હા, ચોક્કસ. તમે ગુજરાતી બોલો છો?", "Yes, certainly. Do you speak Gujarati?", "ha, chokkas. tame Gujarati bolo chho?"],
    ["y", "Say: a little. Could you speak slowly?", "thodu, tame dhime boli shako?", "થોડું તમે ધીમે બોલી શકો"],
    ["p", "હા, ધીમે ધીમે બોલીશ.", "Yes, I'll speak slowly.", "ha, dhime dhime bolish."]
  ] } },
{ id: "gi09", title: "સરખામણી", place: "Comparisons",
  tip: "'Karta' means than: 'Amdavad Vadodara karta motu chhe', Ahmedabad is bigger than Vadodara. 'Sauthi' means most: 'sauthi saru', the best.",
  items: [
    ["Ahmedabad is bigger than Vadodara", "Amdavad Vadodara karta motu chhe", "અમદાવાદ વડોદરા કરતાં મોટું છે"],
    ["It's hotter here than in New Jersey", "ahi New Jersey karta garmi vadhare chhe", "અહીં ન્યૂ જર્સી કરતાં ગરમી વધારે છે"],
    ["This is the best", "aa sauthi saru chhe", "આ સૌથી સારું છે"],
    ["I like tea more than coffee", "mane cha coffee karta vadhare game chhe", "મને ચા કૉફી કરતાં વધારે ગમે છે"],
    ["My sister is older than me", "mari bahen marathi moti chhe", "મારી બહેન મારાથી મોટી છે"],
    ["Both are the same", "banne sarkha chhe", "બંને સરખા છે"]
  ],
  scene: { intro: "Your cousin asks how Gujarat compares with home.", lines: [
    ["p", "અહીં કે ન્યૂ જર્સી, ક્યાં વધારે ગમે?", "Here or New Jersey, where do you like more?", "ahi ke New Jersey, kya vadhare game?"],
    ["y", "Say: it's hotter here than in New Jersey.", "ahi New Jersey karta garmi vadhare chhe", "અહીં ન્યૂ જર્સી કરતાં ગરમી વધારે છે"],
    ["p", "અને ખાવાનું?", "And the food?", "ane khavanu?"],
    ["y", "Say: the food here is the best.", "ahinu khavanu sauthi saru chhe", "અહીંનું ખાવાનું સૌથી સારું છે"]
  ] } },
{ id: "gi10", title: "ડૉક્ટર પાસે", place: "At the doctor",
  tip: "Symptoms: 'mane taav chhe' (I have a fever), 'maru galu dukhe chhe' (my throat hurts). '-thi' means since: 'be divas thi', for two days.",
  items: [
    ["I've had a fever for two days", "mane be divas thi taav chhe", "મને બે દિવસથી તાવ છે"],
    ["My throat hurts", "maru galu dukhe chhe", "મારું ગળું દુખે છે"],
    ["I have a cough", "mane udhras chhe", "મને ઉધરસ છે"],
    ["How many times a day?", "divas ma ketli vaar?", "દિવસમાં કેટલી વાર"],
    ["I'm allergic to penicillin", "mane penicillin ni allergy chhe", "મને પેનિસિલિનની એલર્જી છે"],
    ["Now I feel better", "have mane saru lage chhe", "હવે મને સારું લાગે છે"]
  ],
  scene: { intro: "At a local clinic.", lines: [
    ["p", "શું તકલીફ છે?", "What's the problem?", "shu taklif chhe?"],
    ["y", "Say: I've had a fever for two days, and my throat hurts.", "mane be divas thi taav chhe ane maru galu dukhe chhe", "મને બે દિવસથી તાવ છે અને મારું ગળું દુખે છે"],
    ["p", "આ ગોળી લો.", "Take this tablet.", "aa goli lo."],
    ["y", "Ask: how many times a day?", "divas ma ketli vaar?", "દિવસમાં કેટલી વાર"]
  ] } },
{ id: "gi11", title: "લગ્નની તૈયારી", place: "Wedding preparations",
  tip: "Wedding words: lagna (wedding), mehndi (henna night), mahemano (guests), taiyari (preparations). 'Abhinandan' means congratulations.",
  items: [
    ["When is the wedding?", "lagna kyare chhe?", "લગ્ન ક્યારે છે"],
    ["How can I help?", "hu shu madad karu?", "હું શું મદદ કરું"],
    ["The mehndi is tonight", "mehndi aaje ratre chhe", "મહેંદી આજે રાત્રે છે"],
    ["How many guests will come?", "ketla mahemano aavshe?", "કેટલા મહેમાનો આવશે"],
    ["Is everything ready?", "badhu taiyar chhe?", "બધું તૈયાર છે"],
    ["Congratulations!", "abhinandan!", "અભિનંદન"]
  ],
  scene: { intro: "The house is busy with wedding preparations.", lines: [
    ["y", "Ask: how can I help?", "hu shu madad karu?", "હું શું મદદ કરું"],
    ["p", "ફૂલ ગોઠવવામાં મદદ કરો. મહેંદી આજે રાત્રે છે.", "Help arrange the flowers. The mehndi is tonight.", "ful gothavvama madad karo. mehndi aaje ratre chhe."],
    ["y", "Ask: how many guests will come?", "ketla mahemano aavshe?", "કેટલા મહેમાનો આવશે"],
    ["p", "ત્રણસો!", "Three hundred!", "transo!"]
  ] } },
{ id: "gi12", title: "નવરાત્રિ", place: "Navratri garba night",
  tip: "Navratri is nine nights of garba dancing. 'Mane nachta nathi aavadtu' means I don't know how to dance. 'Shikhvo' means please teach.",
  items: [
    ["Where is the garba happening?", "garba kya thay chhe?", "ગરબા ક્યાં થાય છે"],
    ["Teach me garba", "mane garba shikhvo", "મને ગરબા શીખવો"],
    ["I don't know how to dance", "mane nachta nathi aavadtu", "મને નાચતાં નથી આવડતું"],
    ["This is so much fun", "aa khub majanu chhe", "આ ખૂબ મજાનું છે"],
    ["Until what time will it go on?", "ketla vagya sudhi chalshe?", "કેટલા વાગ્યા સુધી ચાલશે"],
    ["I'm tired", "hu thaki gayo", "હું થાકી ગયો", "હું થાકી ગઈ"]
  ],
  scene: { intro: "Your cousin pulls you into the garba circle.", lines: [
    ["p", "ચાલો, ગરબા રમીએ!", "Come on, let's dance garba!", "chalo, garba ramiye!"],
    ["y", "Say: I don't know how to dance. Teach me garba.", "mane nachta nathi aavadtu, mane garba shikhvo", "મને નાચતાં નથી આવડતું મને ગરબા શીખવો"],
    ["p", "સરસ! તમે તો સરસ રમો છો!", "Great! You dance well!", "saras! tame to saras ramo chho!"],
    ["y", "Say: this is so much fun, but I'm tired!", "aa khub majanu chhe, pan hu thaki gayo", "આ ખૂબ મજાનું છે પણ હું થાકી ગયો", "આ ખૂબ મજાનું છે પણ હું થાકી ગઈ"]
  ] } },
{ id: "gi13", title: "ફોન પર", place: "Phone calls",
  tip: "On the phone: 'kon bolo chho?' (who's speaking?), 'pachho phone karjo' (please call back), 'avaj barabar nathi aavto' (I can't hear well).",
  items: [
    ["Who's speaking?", "kon bolo chho?", "કોણ બોલો છો"],
    ["I'll call you later", "hu tamne pachhi phone karish", "હું તમને પછી ફોન કરીશ"],
    ["I can't hear you well", "avaj barabar nathi aavto", "અવાજ બરાબર નથી આવતો"],
    ["Please call me back", "mane pachho phone karjo", "મને પાછો ફોન કરજો"],
    ["I'm busy right now", "hu atyare vyast chhu", "હું અત્યારે વ્યસ્ત છું"],
    ["What's your number?", "tamaro number shu chhe?", "તમારો નંબર શું છે"]
  ],
  scene: { intro: "An unknown number calls you.", lines: [
    ["y", "Ask: hello? Who's speaking?", "hello, kon bolo chho?", "હલો કોણ બોલો છો", "કોણ બોલો છો"],
    ["p", "હું કેટરર બોલું છું, લગ્ન વિશે.", "It's the caterer, about the wedding.", "hu caterer bolu chhu, lagna vishe."],
    ["y", "Say: I'm busy right now. I'll call you later.", "hu atyare vyast chhu, hu tamne pachhi phone karish", "હું અત્યારે વ્યસ્ત છું હું તમને પછી ફોન કરીશ"],
    ["p", "સારું, આભાર.", "Okay, thanks.", "saru, aabhar."]
  ] } },
{ id: "gi14", title: "ટ્રેનમાં", place: "Train travel",
  tip: "Train phrases: 'train modi chhe' (the train is late), 'platform kayo chhe?' (which platform?), 'mari train chhuti gai' (I missed my train).",
  items: [
    ["The train is late", "train modi chhe", "ટ્રેન મોડી છે"],
    ["Which platform is it?", "platform number kayo chhe?", "પ્લેટફોર્મ નંબર કયો છે"],
    ["Where is my seat?", "mari seat kya chhe?", "મારી સીટ ક્યાં છે"],
    ["Which is the next station?", "aaglu station kayu chhe?", "આગલું સ્ટેશન કયું છે"],
    ["What time will the train arrive?", "train ketla vage pahonchshe?", "ટ્રેન કેટલા વાગે પહોંચશે"],
    ["I missed my train", "mari train chhuti gai", "મારી ટ્રેન છૂટી ગઈ"]
  ],
  scene: { intro: "At Ahmedabad railway station.", lines: [
    ["y", "Ask: which platform is the Dwarka train?", "Dwarka ni train nu platform kayu chhe?", "દ્વારકાની ટ્રેનનું પ્લેટફોર્મ કયું છે"],
    ["p", "પ્લેટફોર્મ ચાર, પણ ટ્રેન મોડી છે.", "Platform four, but the train is late.", "platform char, pan train modi chhe."],
    ["y", "Ask: what time will the train arrive?", "train ketla vage pahonchshe?", "ટ્રેન કેટલા વાગે પહોંચશે"],
    ["p", "અડધો કલાક મોડી.", "Half an hour late.", "adadho kalak modi."]
  ] } },
{ id: "gi15", title: "ભૂલી ગયો", place: "Little accidents",
  tip: "'Bhuli gayo' means I forgot; 'padi gayo' means it fell; 'khovai gai' means it got lost. 'Thay' means it happens.",
  items: [
    ["I forgot my wallet", "hu pakit bhuli gayo", "હું પાકીટ ભૂલી ગયો", "હું પાકીટ ભૂલી ગઈ"],
    ["My phone fell", "maro phone padi gayo", "મારો ફોન પડી ગયો"],
    ["I lost my key", "mari chavi khovai gai", "મારી ચાવી ખોવાઈ ગઈ"],
    ["No problem, it happens", "kai vandho nahi, thay", "કંઈ વાંધો નહીં થાય"],
    ["I'll pay tomorrow", "hu kale paisa aapish", "હું કાલે પૈસા આપીશ"],
    ["Sorry, my mistake", "maaf karjo, mari bhul chhe", "માફ કરજો મારી ભૂલ છે"]
  ],
  scene: { intro: "At a sweet shop, you reach for your wallet.", lines: [
    ["y", "Say: oh no, I forgot my wallet.", "are, hu pakit bhuli gayo", "અરે હું પાકીટ ભૂલી ગયો", "હું પાકીટ ભૂલી ગયો", "અરે હું પાકીટ ભૂલી ગઈ"],
    ["p", "કંઈ વાંધો નહીં, થાય.", "No problem, it happens.", "kai vandho nahi, thay."],
    ["y", "Say: I'll pay tomorrow. Sorry, my mistake.", "hu kale paisa aapish, maaf karjo, mari bhul chhe", "હું કાલે પૈસા આપીશ માફ કરજો મારી ભૂલ છે"]
  ] } },
{ id: "gi16", title: "સલાહ", place: "Asking for advice",
  tip: "'Salah' means advice. 'Java jevu chhe' means it's worth going. 'Vahela jajo' means do go early, a gentle suggestion.",
  items: [
    ["What do you advise?", "tame shu salah aapo chho?", "તમે શું સલાહ આપો છો"],
    ["Where should we go?", "kya javu joie?", "ક્યાં જવું જોઈએ"],
    ["It's worth going there", "tya java jevu chhe", "ત્યાં જવા જેવું છે"],
    ["Go early", "vahela jajo", "વહેલા જજો"],
    ["I'll follow your advice", "tamari salah manish", "તમારી સલાહ માનીશ"],
    ["Thanks, very useful information", "aabhar, bahu upyogi mahiti", "આભાર બહુ ઉપયોગી માહિતી"]
  ],
  scene: { intro: "Asking your uncle about weekend trips.", lines: [
    ["y", "Ask: where should we go this weekend?", "aa ravivare kya javu joie?", "આ રવિવારે ક્યાં જવું જોઈએ", "ક્યાં જવું જોઈએ"],
    ["p", "રાણી કી વાવ. ત્યાં જવા જેવું છે. વહેલા જજો.", "Rani ki Vav. It's worth going. Go early.", "Rani ki Vav. tya java jevu chhe. vahela jajo."],
    ["y", "Say: I'll follow your advice. Thanks.", "tamari salah manish, aabhar", "તમારી સલાહ માનીશ આભાર"]
  ] } },
{ id: "gi17", title: "ફરિયાદ", place: "A hotel complaint",
  tip: "'Chaltu nathi' means it doesn't work. 'Malshe?' means can I get…? Stay polite: 'tamari madad mate aabhar', thanks for your help.",
  items: [
    ["The AC in the room doesn't work", "room ma AC chaltu nathi", "રૂમમાં એસી ચાલતું નથી"],
    ["There's no hot water", "garam paani aavtu nathi", "ગરમ પાણી આવતું નથી"],
    ["Can I get another room?", "bijo room malshe?", "બીજો રૂમ મળશે"],
    ["I didn't order this", "me aa mangavyu nahotu", "મેં આ મંગાવ્યું નહોતું"],
    ["I want to speak with the manager", "manager sathe vaat karvi chhe", "મેનેજર સાથે વાત કરવી છે"],
    ["Thank you for your help", "tamari madad mate aabhar", "તમારી મદદ માટે આભાર"]
  ],
  scene: { intro: "At a hotel reception in Dwarka.", lines: [
    ["y", "Say: the AC in the room doesn't work, and there's no hot water.", "room ma AC chaltu nathi ane garam paani aavtu nathi", "રૂમમાં એસી ચાલતું નથી અને ગરમ પાણી આવતું નથી"],
    ["p", "માફ કરજો. હું હમણાં જોઉં છું.", "Sorry. I'll look right now.", "maaf karjo. hu hamna jou chhu."],
    ["y", "Ask: can I get another room?", "bijo room malshe?", "બીજો રૂમ મળશે"],
    ["p", "હા, ચોક્કસ.", "Yes, certainly.", "ha, chokkas."]
  ] } },
{ id: "gi18", title: "રસોઈ", place: "Cooking with your aunt",
  tip: "Kitchen commands: samaro (chop), nakho (add), halavo (stir), rakho (keep). 'Sugandh saras aave chhe' means it smells lovely.",
  items: [
    ["Chop the onion", "dungli samaro", "ડુંગળી સમારો"],
    ["Add a little salt", "thodu mithu nakho", "થોડું મીઠું નાખો"],
    ["Stir well", "barabar halavo", "બરાબર હલાવો"],
    ["Keep it on low heat for ten minutes", "das minit dhima tape rakho", "દસ મિનિટ ધીમા તાપે રાખો"],
    ["It smells lovely", "sugandh saras aave chhe", "સુગંધ સરસ આવે છે"],
    ["Will you give me the recipe?", "recipe aapsho?", "રેસિપી આપશો"]
  ],
  scene: { intro: "Your aunt teaches you undhiyu.", lines: [
    ["p", "પહેલાં શાક સમારો.", "First chop the vegetables.", "pahela shaak samaro."],
    ["y", "Ask: how much salt?", "ketlu mithu?", "કેટલું મીઠું"],
    ["p", "થોડું મીઠું નાખો અને બરાબર હલાવો.", "Add a little salt and stir well.", "thodu mithu nakho ane barabar halavo."],
    ["y", "Say: it smells lovely! Will you give me the recipe?", "sugandh saras aave chhe, recipe aapsho?", "સુગંધ સરસ આવે છે રેસિપી આપશો"]
  ] } },
{ id: "gi19", title: "આરોગ્ય", place: "Health habits",
  tip: "'Prayatna karu chhu' means I try; 'sharu karyo' means I started; 'ochhi kari didhi' means I cut down.",
  items: [
    ["I try to walk every day", "hu roj chalvano prayatna karu chhu", "હું રોજ ચાલવાનો પ્રયત્ન કરું છું"],
    ["I've cut down on sugar", "me khand ochhi kari didhi", "મેં ખાંડ ઓછી કરી દીધી"],
    ["I started yoga", "me yog sharu karyo", "મેં યોગ શરૂ કર્યો"],
    ["Meditation helps me sleep well", "dhyan thi ungh sari aave chhe", "ધ્યાનથી ઊંઘ સારી આવે છે"],
    ["You look great", "tame saras dekhao chho", "તમે સરસ દેખાઓ છો"],
    ["Regularity is the secret", "niyamitata ja rahasya chhe", "નિયમિતતા જ રહસ્ય છે"]
  ],
  scene: { intro: "An old friend notices you look well.", lines: [
    ["p", "તમે સરસ દેખાઓ છો! શું કરો છો?", "You look great! What do you do?", "tame saras dekhao chho! shu karo chho?"],
    ["y", "Say: I try to walk every day, and I started yoga.", "hu roj chalvano prayatna karu chhu ane me yog sharu karyo", "હું રોજ ચાલવાનો પ્રયત્ન કરું છું અને મેં યોગ શરૂ કર્યો"],
    ["p", "ઊંઘ કેવી આવે છે?", "How do you sleep?", "ungh kevi aave chhe?"],
    ["y", "Say: meditation helps me sleep well.", "dhyan thi ungh sari aave chhe", "ધ્યાનથી ઊંઘ સારી આવે છે"]
  ] } },
{ id: "gi20", title: "પત્તાં", place: "Cards with the cousins",
  tip: "Card table words: 'tamaro varo' (your turn), 'pass', 'saras haath' (good hand), 'jiti gaya' (we won). '-thi' with years means for: 'vees varsh thi'.",
  items: [
    ["Shall we play cards?", "patta ramiye?", "પત્તાં રમીએ"],
    ["It's your turn", "tamaro varo", "તમારો વારો"],
    ["I pass", "hu pass karu chhu", "હું પાસ કરું છું"],
    ["Good hand", "saras haath chhe", "સરસ હાથ છે"],
    ["We won", "aapne jiti gaya", "આપણે જીતી ગયા"],
    ["I've been playing bridge for twenty years", "hu vees varsh thi bridge ramu chhu", "હું વીસ વર્ષથી બ્રિજ રમું છું"]
  ],
  scene: { intro: "After dinner, the cousins bring out cards.", lines: [
    ["p", "પત્તાં રમીએ? તમને બ્રિજ આવડે છે?", "Shall we play cards? Do you know bridge?", "patta ramiye? tamne bridge aavde chhe?"],
    ["y", "Say: yes! I've been playing bridge for twenty years.", "ha, hu vees varsh thi bridge ramu chhu", "હા હું વીસ વર્ષથી બ્રિજ રમું છું"],
    ["p", "તમારો વારો.", "Your turn.", "tamaro varo."],
    ["y", "Say: we won! Good hand.", "aapne jiti gaya, saras haath chhe", "આપણે જીતી ગયા સરસ હાથ છે"]
  ] } },
{ id: "gi21", title: "કામ વિશે", place: "Talking about work",
  tip: "'-thi' with time means for: 'pachees varsh thi', for twenty-five years. 'Potanu kaam' means my own business.",
  items: [
    ["What work do you do?", "tame shu kaam karo chho?", "તમે શું કામ કરો છો"],
    ["I've worked with computers for twenty-five years", "hu pachees varsh thi computer sathe kaam karu chhu", "હું પચીસ વર્ષથી કમ્પ્યુટર સાથે કામ કરું છું"],
    ["I build systems for banks", "hu banko mate system banavu chhu", "હું બેંકો માટે સિસ્ટમ બનાવું છું"],
    ["I work for myself", "hu maru potanu kaam karu chhu", "હું મારું પોતાનું કામ કરું છું"],
    ["I'm thinking of retiring in a few years", "thoda varsh ma nivrutt thavanu vicharu chhu", "થોડા વર્ષમાં નિવૃત્ત થવાનું વિચારું છું"],
    ["The work is interesting but stressful", "kaam rasprad chhe pan tanav chhe", "કામ રસપ્રદ છે પણ તણાવ છે"]
  ],
  scene: { intro: "A wedding guest asks about your work.", lines: [
    ["p", "તમે શું કામ કરો છો?", "What work do you do?", "tame shu kaam karo chho?"],
    ["y", "Say: I build systems for banks. I work for myself.", "hu banko mate system banavu chhu, hu maru potanu kaam karu chhu", "હું બેંકો માટે સિસ્ટમ બનાવું છું હું મારું પોતાનું કામ કરું છું"],
    ["p", "સરસ! કેટલા વર્ષથી?", "Nice! For how many years?", "saras! ketla varsh thi?"],
    ["y", "Say: for twenty-five years. I'm thinking of retiring in a few years.", "pachees varsh thi, thoda varsh ma nivrutt thavanu vicharu chhu", "પચીસ વર્ષથી થોડા વર્ષમાં નિવૃત્ત થવાનું વિચારું છું"]
  ] } },
{ id: "gi22", title: "અભિપ્રાય", place: "Opinions about a film",
  tip: "Opinions: 'mane lagi' (it seemed to me), 'sauthi vadhu gamyu' (I liked most), 'thode anshe sahmat' (agree up to a point).",
  items: [
    ["How did you find the film?", "film kevi lagi?", "ફિલ્મ કેવી લાગી"],
    ["It seemed a bit long to me", "mane thodi lambi lagi", "મને થોડી લાંબી લાગી"],
    ["I liked the music most", "mane sangeet sauthi vadhu gamyu", "મને સંગીત સૌથી વધુ ગમ્યું"],
    ["I agree with you up to a point", "hu tamari sathe thode anshe sahmat chhu", "હું તમારી સાથે થોડે અંશે સહમત છું"],
    ["I'm not sure", "mane khatri nathi", "મને ખાતરી નથી"],
    ["It's worth watching", "jova jevi chhe", "જોવા જેવી છે"]
  ],
  scene: { intro: "Leaving a cinema with your cousin.", lines: [
    ["p", "ફિલ્મ કેવી લાગી?", "How did you find the film?", "film kevi lagi?"],
    ["y", "Say: it seemed a bit long to me, but I liked the music most.", "mane thodi lambi lagi, pan mane sangeet sauthi vadhu gamyu", "મને થોડી લાંબી લાગી પણ મને સંગીત સૌથી વધુ ગમ્યું"],
    ["p", "મને તો બધું ગમ્યું!", "I liked all of it!", "mane to badhu gamyu!"],
    ["y", "Say: I agree with you up to a point.", "hu tamari sathe thode anshe sahmat chhu", "હું તમારી સાથે થોડે અંશે સહમત છું"]
  ] } },
{ id: "gi23", title: "આમંત્રણ", place: "Invitations",
  tip: "'Khushi thi' means with pleasure. 'Mane gamat, pan…' means I'd have liked to, but… 'Shu lavu?' means what should I bring?",
  items: [
    ["Will you come to our home on Saturday?", "shanivare amara ghare aavsho?", "શનિવારે અમારા ઘરે આવશો"],
    ["Certainly, with pleasure!", "chokkas, khushi thi!", "ચોક્કસ ખુશીથી"],
    ["I'd like to, but I can't come", "mane gamat, pan hu aavi shaku tem nathi", "મને ગમત પણ હું આવી શકું તેમ નથી"],
    ["Shall we make it another day?", "bija divase rakhiye?", "બીજા દિવસે રાખીએ"],
    ["What should I bring?", "shu lavu?", "શું લાવું"],
    ["Thank you for the invitation", "aamantran mate aabhar", "આમંત્રણ માટે આભાર"]
  ],
  scene: { intro: "A family friend invites you over.", lines: [
    ["p", "શનિવારે અમારા ઘરે જમવા આવશો?", "Will you come for dinner on Saturday?", "shanivare amara ghare jamva aavsho?"],
    ["y", "Say: certainly, with pleasure! What should I bring?", "chokkas, khushi thi! shu lavu?", "ચોક્કસ ખુશીથી શું લાવું"],
    ["p", "કંઈ નહીં, બસ આવજો.", "Nothing, just come.", "kai nahi, bas aavjo."],
    ["y", "Say: thank you for the invitation.", "aamantran mate aabhar", "આમંત્રણ માટે આભાર"]
  ] } },
{ id: "gi24", title: "લાગણી", place: "Sharing feelings",
  tip: "Feelings with 'thay chhe' and 'aave chhe': 'gabhraman thay chhe' (I feel nervous), 'sharam aave chhe' (I feel shy), 'yaad aave chhe' (I miss).",
  items: [
    ["I feel nervous speaking Gujarati", "Gujarati bolta mane gabhraman thay chhe", "ગુજરાતી બોલતાં મને ગભરામણ થાય છે"],
    ["I feel shy about making mistakes", "bhul karta sharam aave chhe", "ભૂલ કરતાં શરમ આવે છે"],
    ["I miss my daughters", "mane mari dikrio yaad aave chhe", "મને મારી દીકરીઓ યાદ આવે છે"],
    ["I'm very happy", "hu khub khush chhu", "હું ખૂબ ખુશ છું"],
    ["Don't feel shy", "sharmasho nahi", "શરમાશો નહીં"],
    ["It made me very happy", "mane khub aanand thayo", "મને ખૂબ આનંદ થયો"]
  ],
  scene: { intro: "Your aunt asks how your Gujarati feels.", lines: [
    ["p", "ગુજરાતી બોલવામાં કેવું લાગે છે?", "How does speaking Gujarati feel?", "Gujarati bolvama kevu lage chhe?"],
    ["y", "Say: I feel shy about making mistakes.", "bhul karta sharam aave chhe", "ભૂલ કરતાં શરમ આવે છે"],
    ["p", "શરમાશો નહીં! તમે સરસ બોલો છો.", "Don't be shy! You speak well.", "sharmasho nahi! tame saras bolo chho."],
    ["y", "Say: that made me very happy.", "mane khub aanand thayo", "મને ખૂબ આનંદ થયો"]
  ] } },
{ id: "gi25", title: "સમાચાર", place: "The news",
  tip: "Reporting: 'me vanchyu ke' (I read that), 'loko kahe chhe ke' (people say that), 'samachar mujab' (according to the news).",
  items: [
    ["I read that it will rain all week", "me vanchyu ke aakhu athvadiyu varsad padshe", "મેં વાંચ્યું કે આખું અઠવાડિયું વરસાદ પડશે"],
    ["People say traffic will be heavy", "loko kahe chhe ke traffic khub raheshe", "લોકો કહે છે કે ટ્રાફિક ખૂબ રહેશે"],
    ["According to the news", "samachar mujab", "સમાચાર મુજબ"],
    ["Luckily no one was hurt", "nasibe koine ija na thai", "નસીબે કોઈને ઈજા ન થઈ", "નસીબે કોઈને ઈજા ના થઈ"],
    ["I don't follow politics much", "hu rajkaran bahu joto nathi", "હું રાજકારણ બહુ જોતો નથી", "હું રાજકારણ બહુ જોતી નથી"],
    ["Really! You don't say!", "shu vaat karo chho!", "શું વાત કરો છો"]
  ],
  scene: { intro: "Morning tea with your uncle.", lines: [
    ["p", "કાલે હાઈવે પર અકસ્માત થયો.", "There was an accident on the highway yesterday.", "kale highway par akasmat thayo."],
    ["y", "Say: really! I read about it. Luckily no one was hurt.", "shu vaat karo chho! me vanchyu, nasibe koine ija na thai", "શું વાત કરો છો મેં વાંચ્યું નસીબે કોઈને ઈજા ન થઈ"],
    ["p", "અને આખું અઠવાડિયું વરસાદ પડશે.", "And it will rain all week.", "ane aakhu athvadiyu varsad padshe."],
    ["y", "Say: according to the news, yes.", "samachar mujab, ha", "સમાચાર મુજબ હા"]
  ] } },
{ id: "gi26", title: "મંદિરમાં", place: "At a temple",
  tip: "Temple manners: shoes off ('boot utarvana'), 'darshan' (seeing the deity), 'aarti' (lamp ceremony), 'prasad' (blessed food). 'Levay?' means is it allowed?",
  items: [
    ["When is darshan?", "darshan kyare thay chhe?", "દર્શન ક્યારે થાય છે"],
    ["Where do we remove our shoes?", "boot kya utarvana?", "બૂટ ક્યાં ઉતારવાના"],
    ["Please take prasad", "prasad lo", "પ્રસાદ લો"],
    ["Is photography allowed here?", "ahi photo levay?", "અહીં ફોટો લેવાય"],
    ["It's very peaceful here", "ahi khub shanti chhe", "અહીં ખૂબ શાંતિ છે"],
    ["What time is the aarti?", "aarti ketla vage chhe?", "આરતી કેટલા વાગે છે"]
  ],
  scene: { intro: "At the Dwarkadhish temple.", lines: [
    ["y", "Ask: where do we remove our shoes?", "boot kya utarvana?", "બૂટ ક્યાં ઉતારવાના"],
    ["p", "ત્યાં ડાબી બાજુ.", "Over there on the left.", "tya dabi baju."],
    ["y", "Ask: what time is the aarti?", "aarti ketla vage chhe?", "આરતી કેટલા વાગે છે"],
    ["p", "સાંજે સાત વાગે. પ્રસાદ લો.", "At seven in the evening. Take prasad.", "sanje saat vage. prasad lo."],
    ["y", "Say: it's very peaceful here.", "ahi khub shanti chhe", "અહીં ખૂબ શાંતિ છે"]
  ] } },
{ id: "gi27", title: "ગામમાં", place: "A village visit",
  tip: "Curious questions for village visits: 'ketlu junu' (how old), 'ketla samay thi' (for how long), 'shu ugado chho?' (what do you grow?).",
  items: [
    ["How old is this village?", "aa gaam ketlu junu chhe?", "આ ગામ કેટલું જૂનું છે"],
    ["How long have you lived here?", "tame ahi ketla samay thi raho chho?", "તમે અહીં કેટલા સમયથી રહો છો"],
    ["What do you grow in the fields?", "khetar ma shu ugado chho?", "ખેતરમાં શું ઉગાડો છો"],
    ["The air here is clean", "ahini hava chokhkhi chhe", "અહીંની હવા ચોખ્ખી છે"],
    ["It's more peaceful here than in the city", "shaher karta ahi shanti chhe", "શહેર કરતાં અહીં શાંતિ છે"],
    ["I'll come again", "fari aavish", "ફરી આવીશ"]
  ],
  scene: { intro: "Visiting a farmer in a village near Anand.", lines: [
    ["y", "Ask: how long have you lived here?", "tame ahi ketla samay thi raho chho?", "તમે અહીં કેટલા સમયથી રહો છો"],
    ["p", "આખી જિંદગી. મારા દાદા પણ અહીં રહેતા.", "All my life. My grandfather lived here too.", "aakhi jindagi. mara dada pan ahi raheta."],
    ["y", "Ask: what do you grow in the fields?", "khetar ma shu ugado chho?", "ખેતરમાં શું ઉગાડો છો"],
    ["p", "તમાકુ અને કપાસ.", "Tobacco and cotton.", "tamaku ane kapas."],
    ["y", "Say: it's more peaceful here than in the city. I'll come again.", "shaher karta ahi shanti chhe, fari aavish", "શહેર કરતાં અહીં શાંતિ છે ફરી આવીશ"]
  ] } },
{ id: "gi28", title: "બાળપણ", place: "Childhood memories",
  tip: "Habits in the past end in '-to' / '-ta': 'hu ramto' (I used to play), 'ame jata' (we used to go). 'Nano hato tyare' means when I was little.",
  items: [
    ["When I was little", "nano hato tyare", "નાનો હતો ત્યારે", "નાની હતી ત્યારે"],
    ["I used to play outside every day", "hu roj bahar ramto", "હું રોજ બહાર રમતો", "હું રોજ બહાર રમતી"],
    ["We used to travel every summer", "ame dar unale farva jata", "અમે દર ઉનાળે ફરવા જતા"],
    ["My father worked very hard", "mara pita khub mehnat karta", "મારા પિતા ખૂબ મહેનત કરતા"],
    ["I didn't like school", "mane shala gamti nahoti", "મને શાળા ગમતી નહોતી"],
    ["Everything was different", "badhu alag hatu", "બધું અલગ હતું"]
  ],
  scene: { intro: "Looking at old photos with your aunt.", lines: [
    ["p", "તમે નાના હતા ત્યારે શું કરતા?", "What did you do when you were little?", "tame nana hata tyare shu karta?"],
    ["y", "Say: when I was little, I used to play outside every day.", "nano hato tyare hu roj bahar ramto", "નાનો હતો ત્યારે હું રોજ બહાર રમતો", "નાની હતી ત્યારે હું રોજ બહાર રમતી"],
    ["p", "અને શાળા?", "And school?", "ane shala?"],
    ["y", "Say: I didn't like school. Everything was different.", "mane shala gamti nahoti, badhu alag hatu", "મને શાળા ગમતી નહોતી બધું અલગ હતું"]
  ] } },
{ id: "gi29", title: "લગ્નનો દિવસ", place: "The wedding day",
  tip: "Wedding-day phrases: 'jaan' (the groom's procession), 'var-kanya' (the couple), 'jamanvar' (the wedding feast), 'shubhechchha' (best wishes).",
  items: [
    ["The groom has arrived!", "varraja aavi gaya!", "વરરાજા આવી ગયા"],
    ["When will the procession arrive?", "jaan kyare aavshe?", "જાન ક્યારે આવશે"],
    ["Congratulations to the couple", "var-kanyane abhinandan", "વર-કન્યાને અભિનંદન", "વરકન્યાને અભિનંદન"],
    ["It's a very beautiful wedding", "khub sundar lagna chhe", "ખૂબ સુંદર લગ્ન છે"],
    ["When is the feast?", "jamanvar kyare chhe?", "જમણવાર ક્યારે છે"],
    ["Best wishes to you both for a happy life", "tamne bannene sukhi jivan ni shubhechchha", "તમને બંનેને સુખી જીવનની શુભેચ્છા"]
  ],
  scene: { intro: "Music, colour and crowds: the wedding has begun.", lines: [
    ["p", "જુઓ, જાન આવી!", "Look, the procession is here!", "juo, jaan aavi!"],
    ["y", "Say: the groom has arrived! It's a very beautiful wedding.", "varraja aavi gaya! khub sundar lagna chhe", "વરરાજા આવી ગયા ખૂબ સુંદર લગ્ન છે"],
    ["p", "ચાલો, વર-કન્યાને મળીએ.", "Come, let's meet the couple.", "chalo, var-kanyane maliye."],
    ["y", "Say: best wishes to you both for a happy life.", "tamne bannene sukhi jivan ni shubhechchha", "તમને બંનેને સુખી જીવનની શુભેચ્છા"]
  ] } },
{ id: "gi30", title: "વિદાય", place: "Saying goodbye",
  tip: "Farewells: 'mane bahu maja aavi' (I had a great time), 'yaad karish' (I'll miss you), 'sampark ma rahishu' (we'll stay in touch).",
  items: [
    ["I have to leave tomorrow", "mare kale nikalvanu chhe", "મારે કાલે નીકળવાનું છે"],
    ["I had a great time", "mane bahu maja aavi", "મને બહુ મજા આવી"],
    ["You gave me so much love", "tame khub prem aapyo", "તમે ખૂબ પ્રેમ આપ્યો"],
    ["I'll miss you all", "hu tamne badhane yaad karish", "હું તમને બધાને યાદ કરીશ"],
    ["Do come to New Jersey", "New Jersey aavjo", "ન્યૂ જર્સી આવજો", "New Jersey આવજો"],
    ["We'll stay in touch", "sampark ma rahishu", "સંપર્કમાં રહીશું"]
  ],
  scene: { intro: "The whole family gathers to see you off.", lines: [
    ["p", "આટલા જલદી જાઓ છો?", "Leaving so soon?", "aatla jaldi jao chho?"],
    ["y", "Say: I have to leave tomorrow. I had a great time.", "mare kale nikalvanu chhe, mane bahu maja aavi", "મારે કાલે નીકળવાનું છે મને બહુ મજા આવી"],
    ["p", "અમે તમને યાદ કરીશું.", "We'll miss you.", "ame tamne yaad karishu."],
    ["y", "Say: you gave me so much love. Do come to New Jersey.", "tame khub prem aapyo, New Jersey aavjo", "તમે ખૂબ પ્રેમ આપ્યો ન્યૂ જર્સી આવજો", "તમે ખૂબ પ્રેમ આપ્યો New Jersey આવજો"]
  ] } }
];
