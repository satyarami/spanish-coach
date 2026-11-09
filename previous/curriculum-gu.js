// Gujarati course, block 1 — a trip to Ahmedabad. Spoken by the Hindi voice (Lekha) via Gujarati→Devanagari letters.
//
// Lesson format (Gujarati):
//   items: [english, romanized, gujarati, ...acceptedGujaratiAlternatives]
//          A trailing "…" means "anything may follow".
//   scene.lines: ["p", gujarati, english, romanized]                 -> the other person speaks
//                ["y", englishCue, romanized, gujarati, ...alts]      -> you answer
// Lesson ids start with "g" and must never be reused or renumbered (progress is stored by id).

window.CURRICULUM_GU = [
{
  id: "g01", title: "નમસ્તે", place: "Ahmedabad airport",
  tip: "Gujarati vowels are pure, like Spanish: a, i, u, e, o. 'Kem cho' is the everyday hello, and it literally means 'how are you'. The polite way to say 'you' is 'tame'.",
  items: [
    ["Hello", "namaste", "નમસ્તે"],
    ["How are you?", "kem cho?", "કેમ છો", "કેમ છો?"],
    ["I'm fine", "hu majama chhu", "હું મજામાં છું", "મજામાં"],
    ["And you?", "ane tame?", "અને તમે", "તમે?"],
    ["Thank you", "aabhar", "આભાર", "થેંક યુ"],
    ["Yes", "ha", "હા"],
    ["No", "na", "ના"],
    ["Goodbye", "aavjo", "આવજો"]
  ],
  scene: { intro: "You just landed in Ahmedabad. Your coach meets you at arrivals.",
    lines: [
      ["p", "નમસ્તે! કેમ છો?", "Hello! How are you?", "namaste! kem cho?"],
      ["y", "Say: hello, I'm fine.", "namaste, hu majama chhu", "નમસ્તે હું મજામાં છું", "હું મજામાં છું"],
      ["y", "Ask: and you?", "ane tame?", "અને તમે", "તમે?"],
      ["p", "હું પણ મજામાં છું. ચાલો!", "I'm fine too. Let's go!", "hu pan majama chhu. chalo!"],
      ["y", "Say: thank you.", "aabhar", "આભાર"]
    ] }
},
{
  id: "g02", title: "ઓળખાણ", place: "A family friend's home",
  tip: "Gujarati puts the verb at the end, like Hindi: 'maru naam Satya chhe' is literally 'my name Satya is'. 'Chhe' means 'is', and 'chhu' means 'I am'.",
  items: [
    ["My name is…", "maru naam … chhe", "મારું નામ …"],
    ["What's your name?", "tamaru naam shu chhe?", "તમારું નામ શું છે", "તમારું નામ શું છે?"],
    ["Nice to meet you", "tamne maline aanand thayo", "તમને મળીને આનંદ થયો", "મળીને આનંદ થયો"],
    ["I am from America", "hu America thi chhu", "હું અમેરિકાથી છું"],
    ["I live in New Jersey", "hu New Jersey ma rahu chhu", "હું ન્યૂ જર્સીમાં રહું છું"],
    ["Where are you from?", "tame kyanthi cho?", "તમે ક્યાંથી છો", "તમે ક્યાંથી છો?"],
    ["I speak English", "hu angreji bolu chhu", "હું અંગ્રેજી બોલું છું"],
    ["I speak a little Gujarati", "hu thodu Gujarati bolu chhu", "હું થોડું ગુજરાતી બોલું છું", "થોડું ગુજરાતી"]
  ],
  scene: { intro: "You arrive at the home of family friends. The aunt greets you.",
    lines: [
      ["p", "આવો આવો! તમારું નામ શું છે?", "Come in, come in! What's your name?", "aavo aavo! tamaru naam shu chhe?"],
      ["y", "Tell her your name.", "maru naam … chhe", "મારું નામ …"],
      ["p", "તમને મળીને આનંદ થયો. તમે ક્યાંથી છો?", "Nice to meet you. Where are you from?", "tamne maline aanand thayo. tame kyanthi cho?"],
      ["y", "Say: I am from America.", "hu America thi chhu", "હું અમેરિકાથી છું"],
      ["p", "તમે ગુજરાતી બોલો છો?", "Do you speak Gujarati?", "tame Gujarati bolo cho?"],
      ["y", "Say: I speak a little Gujarati.", "hu thodu Gujarati bolu chhu", "હું થોડું ગુજરાતી બોલું છું", "થોડું ગુજરાતી"]
    ] }
},
{
  id: "g03", title: "મહેરબાની", place: "A busy street",
  tip: "Your lifelines: 'mane samjatu nathi' means I don't understand, and 'dhime bolo' means speak slowly. 'Nathi' is the everyday 'not'.",
  items: [
    ["Please", "meherbani karine", "મહેરબાની કરીને", "પ્લીઝ"],
    ["Thank you very much", "khub khub aabhar", "ખૂબ ખૂબ આભાર", "ખૂબ આભાર"],
    ["No problem", "kai vandho nahi", "કંઈ વાંધો નહીં", "વાંધો નહીં"],
    ["Sorry", "maaf karjo", "માફ કરજો"],
    ["I don't understand", "mane samjatu nathi", "મને સમજાતું નથી"],
    ["Speak slowly, please", "dhime bolo", "ધીમે બોલો", "ધીમે ધીમે બોલો"],
    ["Say it again", "fari bolo", "ફરી બોલો", "ફરીથી બોલો"],
    ["Okay", "saru", "સારું", "ઠીક છે"]
  ],
  scene: { intro: "A shopkeeper talks to you very fast.",
    lines: [
      ["p", "સાહેબ, આ લઈ લો, બહુ સરસ છે, સસ્તું છે!", "Sir, take this, it's very nice, it's cheap!", "saheb, aa lai lo, bahu saras chhe, sastu chhe!"],
      ["y", "Say: sorry, I don't understand.", "maaf karjo, mane samjatu nathi", "માફ કરજો મને સમજાતું નથી", "મને સમજાતું નથી"],
      ["y", "Say: speak slowly, please.", "dhime bolo", "ધીમે બોલો", "ધીમે ધીમે બોલો"],
      ["p", "આ... બહુ... સરસ... છે.", "This... is... very... nice.", "aa... bahu... saras... chhe."],
      ["y", "Say: okay, thank you very much.", "saru, khub khub aabhar", "સારું ખૂબ ખૂબ આભાર", "સારું ખૂબ આભાર"]
    ] }
},
{
  id: "g04", title: "ચા", place: "A tea stall at Manek Chowk",
  tip: "'Mare … joie chhe' means 'I want …', literally 'to me … is needed'. Tea is 'cha' everywhere in Gujarat, usually sweet and strong.",
  items: [
    ["I want tea", "mare cha joie chhe", "મારે ચા જોઈએ છે", "ચા જોઈએ છે"],
    ["One cup of tea", "ek cup cha", "એક કપ ચા"],
    ["Less sugar", "ochhi khand", "ઓછી ખાંડ"],
    ["Water, please", "paani aapo", "પાણી આપો", "પાણી"],
    ["How much is it?", "ketla thaya?", "કેટલા થયા", "કેટલા થયા?"],
    ["Very good", "khub saras", "ખૂબ સરસ", "બહુ સરસ"],
    ["Anything else?", "biju kai?", "બીજું કંઈ", "બીજું કંઈ?"],
    ["That's all", "bas", "બસ", "બસ આટલું"]
  ],
  scene: { intro: "Night market at Manek Chowk. You stop at a tea stall.",
    lines: [
      ["p", "બોલો સાહેબ, શું આપું?", "Tell me, sir, what can I get you?", "bolo saheb, shu aapu?"],
      ["y", "Say: one cup of tea, less sugar.", "ek cup cha, ochhi khand", "એક કપ ચા ઓછી ખાંડ"],
      ["p", "બીજું કંઈ?", "Anything else?", "biju kai?"],
      ["y", "Say: that's all.", "bas", "બસ", "બસ આટલું"],
      ["y", "Later. Ask: how much is it?", "ketla thaya?", "કેટલા થયા", "કેટલા થયા?"],
      ["p", "વીસ રૂપિયા.", "Twenty rupees.", "vees rupiya."]
    ] }
},
{
  id: "g05", title: "ગણતરી", place: "The vegetable market",
  tip: "Numbers one to ten: ek, be, tran, char, paanch, chha, saat, aath, nav, das. 'Be' (two) sounds just like the English letter B.",
  items: [
    ["one, two, three", "ek, be, tran", "એક બે ત્રણ"],
    ["four, five, six", "char, paanch, chha", "ચાર પાંચ છ"],
    ["seven, eight, nine, ten", "saat, aath, nav, das", "સાત આઠ નવ દસ"],
    ["How much does this cost?", "aa ketla nu chhe?", "આ કેટલાનું છે", "આ કેટલાનું છે?"],
    ["Ten rupees", "das rupiya", "દસ રૂપિયા"],
    ["It's expensive", "monghu chhe", "મોંઘું છે"],
    ["It's cheap", "sastu chhe", "સસ્તું છે"],
    ["Give me two", "be aapo", "બે આપો"]
  ],
  scene: { intro: "You want mangoes at the market.",
    lines: [
      ["p", "કેરી લો, તાજી કેરી!", "Mangoes, fresh mangoes!", "keri lo, taaji keri!"],
      ["y", "Ask: how much does this cost?", "aa ketla nu chhe?", "આ કેટલાનું છે", "આ કેટલાનું છે?"],
      ["p", "એક કેરીના દસ રૂપિયા.", "Ten rupees for one mango.", "ek kerina das rupiya."],
      ["y", "Say: give me three.", "tran aapo", "ત્રણ આપો"],
      ["p", "ત્રીસ રૂપિયા થયા.", "That's thirty rupees.", "trees rupiya thaya."],
      ["y", "Say: thank you very much.", "khub khub aabhar", "ખૂબ ખૂબ આભાર", "ખૂબ આભાર"]
    ] }
},
{
  id: "g06", title: "ક્યાં છે?", place: "The old city",
  tip: "'Kya chhe' means 'where is', and it comes after the place: 'mandir kya chhe', where is the temple. Right is 'jamni baju' and left is 'dabi baju'.",
  items: [
    ["Where is the bathroom?", "bathroom kya chhe?", "બાથરૂમ ક્યાં છે", "ટોઇલેટ ક્યાં છે"],
    ["Where is the temple?", "mandir kya chhe?", "મંદિર ક્યાં છે"],
    ["On the right", "jamni baju", "જમણી બાજુ"],
    ["On the left", "dabi baju", "ડાબી બાજુ"],
    ["Go straight", "sidha jao", "સીધા જાઓ"],
    ["Is it near?", "najik chhe?", "નજીક છે", "નજીક છે?"],
    ["It's far", "dur chhe", "દૂર છે"],
    ["Here", "ahi", "અહીં"],
    ["There", "tya", "ત્યાં"]
  ],
  scene: { intro: "You're looking for the Swaminarayan temple and ask a man on the street.",
    lines: [
      ["y", "Say: sorry, where is the temple?", "maaf karjo, mandir kya chhe?", "માફ કરજો મંદિર ક્યાં છે", "મંદિર ક્યાં છે"],
      ["p", "નજીક છે. સીધા જાઓ, પછી જમણી બાજુ.", "It's near. Go straight, then on the right.", "najik chhe. sidha jao, pachhi jamni baju."],
      ["y", "Check: on the right?", "jamni baju?", "જમણી બાજુ"],
      ["p", "હા, ત્યાં.", "Yes, there.", "ha, tya."],
      ["y", "Say: thank you very much.", "khub khub aabhar", "ખૂબ ખૂબ આભાર", "ખૂબ આભાર"]
    ] }
},
{
  id: "g07", title: "ભૂખ લાગી", place: "Lunch at a thali restaurant",
  tip: "Gujarati says hunger 'strikes' you: 'mane bhukh lagi chhe', I'm hungry. 'Chalo' means 'let's', and you'll hear it all day.",
  items: [
    ["I'm hungry", "mane bhukh lagi chhe", "મને ભૂખ લાગી છે", "ભૂખ લાગી છે"],
    ["I'm thirsty", "mane taras lagi chhe", "મને તરસ લાગી છે", "તરસ લાગી છે"],
    ["Let's eat", "chalo jamiye", "ચાલો જમીએ"],
    ["It's delicious", "khub svadisht chhe", "ખૂબ સ્વાદિષ્ટ છે", "બહુ સરસ છે"],
    ["Not spicy", "tikhu nahi", "તીખું નહીં", "તીખું નહિ"],
    ["A little more", "thodu vadhare", "થોડું વધારે"],
    ["I'm full", "pet bharai gayu", "પેટ ભરાઈ ગયું"],
    ["No more, thank you", "bas, aabhar", "બસ આભાર"]
  ],
  scene: { intro: "A waiter keeps filling your thali.",
    lines: [
      ["p", "ભૂખ લાગી છે? ચાલો જમીએ!", "Hungry? Let's eat!", "bhukh lagi chhe? chalo jamiye!"],
      ["y", "Say: yes, I'm hungry.", "ha, mane bhukh lagi chhe", "હા મને ભૂખ લાગી છે", "મને ભૂખ લાગી છે"],
      ["p", "દાળ કેવી છે?", "How is the dal?", "daal kevi chhe?"],
      ["y", "Say: it's delicious.", "khub svadisht chhe", "ખૂબ સ્વાદિષ્ટ છે", "બહુ સરસ છે"],
      ["p", "થોડું વધારે?", "A little more?", "thodu vadhare?"],
      ["y", "Say: no more, thank you. I'm full.", "bas, aabhar. pet bharai gayu", "બસ આભાર પેટ ભરાઈ ગયું"]
    ] }
},
{
  id: "g08", title: "મને ગમે છે", place: "Evening on the riverfront",
  tip: "'Mane … game chhe' means 'I like …', literally 'to me … is pleasing', just like Spanish 'me gusta'. 'Mane pan' means 'me too'.",
  items: [
    ["I like Gujarati food", "mane Gujarati khavanu game chhe", "મને ગુજરાતી ખાવાનું ગમે છે"],
    ["I like to travel", "mane farvu game chhe", "મને ફરવું ગમે છે"],
    ["I like playing golf", "mane golf ramvu game chhe", "મને ગોલ્ફ રમવું ગમે છે"],
    ["I like tennis", "mane tennis game chhe", "મને ટેનિસ ગમે છે"],
    ["I don't like it", "mane nathi gamtu", "મને નથી ગમતું"],
    ["Do you like it?", "tamne game chhe?", "તમને ગમે છે", "તમને ગમે છે?"],
    ["I love it", "mane khub game chhe", "મને ખૂબ ગમે છે", "મને બહુ ગમે છે"],
    ["Me too", "mane pan", "મને પણ"]
  ],
  scene: { intro: "Walking by the Sabarmati riverfront, a cousin asks about your hobbies.",
    lines: [
      ["p", "તમને શું ગમે છે?", "What do you like?", "tamne shu game chhe?"],
      ["y", "Say: I like playing golf.", "mane golf ramvu game chhe", "મને ગોલ્ફ રમવું ગમે છે"],
      ["p", "મને પણ! તમને ગુજરાતી ખાવાનું ગમે છે?", "Me too! Do you like Gujarati food?", "mane pan! tamne Gujarati khavanu game chhe?"],
      ["y", "Say: I love it.", "mane khub game chhe", "મને ખૂબ ગમે છે", "મને બહુ ગમે છે"],
      ["p", "અને ફરવું?", "And travelling?", "ane farvu?"],
      ["y", "Say: I like to travel.", "mane farvu game chhe", "મને ફરવું ગમે છે"]
    ] }
},
{
  id: "g09", title: "પરિવાર", place: "Dinner with the family",
  tip: "'Mare … chhe' means 'I have …': 'mare be dikrio chhe', I have two daughters. Daughter is 'dikri' and son is 'dikro'.",
  items: [
    ["My family", "maro parivar", "મારો પરિવાર"],
    ["I have two daughters", "mare be dikrio chhe", "મારે બે દીકરીઓ છે"],
    ["My sister", "mari bahen", "મારી બહેન", "મારી બેન"],
    ["My mother", "mari maa", "મારી મા", "મારી મમ્મી"],
    ["My brother", "maro bhai", "મારો ભાઈ"],
    ["Do you have children?", "tamare balko chhe?", "તમારે બાળકો છે", "તમારે બાળકો છે?"],
    ["They live in America", "teo America ma rahe chhe", "તેઓ અમેરિકામાં રહે છે", "અમેરિકામાં રહે છે"],
    ["How is your family?", "tamaro parivar kem chhe?", "તમારો પરિવાર કેમ છે", "ઘરે બધા કેમ છે"]
  ],
  scene: { intro: "At dinner, the uncle asks about your family.",
    lines: [
      ["p", "તમારે બાળકો છે?", "Do you have children?", "tamare balko chhe?"],
      ["y", "Say: yes, I have two daughters.", "ha, mare be dikrio chhe", "હા મારે બે દીકરીઓ છે", "મારે બે દીકરીઓ છે"],
      ["p", "સરસ! તેઓ ક્યાં રહે છે?", "Nice! Where do they live?", "saras! teo kya rahe chhe?"],
      ["y", "Say: they live in America.", "teo America ma rahe chhe", "તેઓ અમેરિકામાં રહે છે", "અમેરિકામાં રહે છે"],
      ["y", "Ask: how is your family?", "tamaro parivar kem chhe?", "તમારો પરિવાર કેમ છે", "ઘરે બધા કેમ છે"],
      ["p", "બધા મજામાં છે.", "Everyone is well.", "badha majama chhe."]
    ] }
},
{
  id: "g10", title: "રિક્ષા", place: "A rickshaw to the station",
  tip: "Bargaining with rickshaw drivers is friendly. 'Bhai' means brother and is the polite way to address any man. 'Ahi ubha rakho' means stop here.",
  items: [
    ["Take me to the station", "mane station lai jao", "મને સ્ટેશન લઈ જાઓ", "સ્ટેશન લઈ જાઓ"],
    ["How much money?", "ketla paisa?", "કેટલા પૈસા", "કેટલા પૈસા?"],
    ["That's too much, brother", "ghanu vadhare chhe, bhai", "ઘણું વધારે છે ભાઈ", "બહુ વધારે છે ભાઈ"],
    ["How long will it take?", "ketli vaar lagshe?", "કેટલી વાર લાગશે", "કેટલી વાર લાગશે?"],
    ["Ten minutes", "das minit", "દસ મિનિટ"],
    ["Drive slowly", "dhime chalavo", "ધીમે ચલાવો"],
    ["Stop here", "ahi ubha rakho", "અહીં ઊભા રાખો"],
    ["Okay, let's go", "saru, chalo", "સારું ચાલો", "ચાલો"]
  ],
  scene: { intro: "You wave down a rickshaw.",
    lines: [
      ["p", "ક્યાં જવું છે?", "Where do you want to go?", "kya javu chhe?"],
      ["y", "Say: take me to the station.", "mane station lai jao", "મને સ્ટેશન લઈ જાઓ", "સ્ટેશન લઈ જાઓ"],
      ["p", "બસો રૂપિયા.", "Two hundred rupees.", "baso rupiya."],
      ["y", "Say: that's too much, brother.", "ghanu vadhare chhe, bhai", "ઘણું વધારે છે ભાઈ", "બહુ વધારે છે ભાઈ"],
      ["p", "સારું, દોઢસો.", "Okay, one hundred fifty.", "saru, dodhso."],
      ["y", "Say: okay, let's go.", "saru, chalo", "સારું ચાલો", "ચાલો"]
    ] }
}
];
