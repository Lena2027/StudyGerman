// STEP 04 - 시간과 날짜 (Zeit & Datum)
const STEP_04 = {
    id: 4,
    icon: 'ph-clock',
    title: '시간과 날짜',
    subtitle: 'Zeit & Datum',
    color: 'violet',
    content: {
        heading: '시간과 날짜 (Zeit & Datum)',
        description: '시각, 요일, 월, 계절 등을 말하고 하루 일과를 표현하는 방법을 익힙니다.',
        sections: [
            {
                title: '핵심 표현 (Redemittel)',
                items: [
                    'Wie spät ist es? / Wie viel Uhr ist es? — 지금 몇 시인가요?',
                    'Es ist (genau) drei Uhr. — (정각) 3시입니다.',
                    'Es ist halb vier. — 3시 30분(4시의 절반)입니다.',
                    'Es ist Viertel nach zwei. — 2시 15분입니다.',
                    'Es ist Viertel vor sechs. — 5시 45분(6시 15분 전)입니다.',
                    'Um wie viel Uhr stehst du auf? — 너는 몇 시에 일어나니?',
                    'Ich stehe um sechs Uhr dreißig auf. — 나는 6시 30분에 일어납니다.',
                    'Wann hast du Geburtstag? — 너는 생일이 언제야?',
                    'Ich habe am achtzehnten Mai Geburtstag. — 내 생일은 5월 18일입니다.'
                ]
            },
            {
                title: '텍스트 읽기 (Lesetexte)',
                items: [
                    '**Max\' Alltag und Pläne**<br><span class="interactive-sentence" data-ko="제 이름은 막스입니다.">Mein Name ist Max.</span> <span class="interactive-sentence" data-ko="저의 일상은 대체로 매우 규칙적(체계적)입니다.">Mein Alltag ist meistens sehr strukturiert.</span> <span class="interactive-sentence" data-ko="월요일부터 금요일까지 저는 일찍 일어납니다, 보통 6시 30분에요.">Von Montag bis Freitag stehe ich früh auf, meistens um sechs Uhr dreißig.</span> <span class="interactive-sentence" data-ko="7시에 저는 아침을 먹고 큰 커피를 한 잔 마십니다.">Um sieben Uhr frühstücke ich und trinke einen großen Kaffee.</span> <span class="interactive-sentence" data-ko="그러고 나서 8시에 저는 일을 시작합니다.">Dann fange ich um acht Uhr mit der Arbeit an.</span> <span class="interactive-sentence" data-ko="저는 도심에 있는 한 사무실에서 일합니다.">Ich arbeite in einem Büro im Stadtzentrum.</span> <br><br> <span class="interactive-sentence" data-ko="12시부터 13시까지 저는 점심시간입니다.">Von zwölf Uhr bis dreizehn Uhr habe ich Mittagspause.</span> <span class="interactive-sentence" data-ko="쉬는 시간에 저는 자주 샐러드나 수프를 먹습니다.">In der Pause esse ich oft einen Salat oder eine Suppe.</span> <span class="interactive-sentence" data-ko="17시에 저는 일을 끝마치고 집으로 갑니다.">Um siebzehn Uhr höre ich mit der Arbeit auf und fahre nach Hause.</span> <span class="interactive-sentence" data-ko="저녁에 저는 요리하는 것을 좋아하거나 친구들을 만납니다.">Am Abend koche ich gern oder ich treffe meine Freunde.</span> <span class="interactive-sentence" data-ko="22시 30분에 저는 자러 갑니다.">Um zweiundzwanzig Uhr dreißig gehe ich schlafen.</span> <br><br> <span class="interactive-sentence" data-ko="하지만 오늘은 특별한 날입니다.">Heute ist aber ein besonderer Tag.</span> <span class="interactive-sentence" data-ko="오늘은 5월 15일 화요일입니다.">Heute ist Dienstag, der fünfzehnte Mai.</span> <span class="interactive-sentence" data-ko="봄이고 날씨가 아주 멋집니다.">Es ist Frühling und das Wetter ist herrlich.</span> <span class="interactive-sentence" data-ko="주말에 제 생일이거든요!">Am Wochenende habe ich Geburtstag!</span> <span class="interactive-sentence" data-ko="저는 5월 18일에 태어났습니다.">Ich bin am achtzehnten Mai geboren.</span> <span class="interactive-sentence" data-ko="토요일 저녁에 저는 큰 파티를 엽니다.">Am Samstagabend mache ich eine große Party.</span> <span class="interactive-sentence" data-ko="파티는 19시에 시작합니다.">Die Party beginnt um neunzehn Uhr.</span> <br><br> <span class="interactive-sentence" data-ko="저는 아직 계획할 것이 많습니다.">Ich muss noch viel planen.</span> <span class="interactive-sentence" data-ko="목요일에 저는 장을 보러 갑니다.">Am Donnerstag gehe ich einkaufen.</span> <span class="interactive-sentence" data-ko="저는 제 손님들을 위한 음료와 음식이 필요합니다.">Ich brauche Getränke und Essen für meine Gäste.</span> <span class="interactive-sentence" data-ko="제 친구 루카스도 옵니다.">Mein Freund Lukas kommt auch.</span> <span class="interactive-sentence" data-ko="그는 일요일에 시간이 있습니다.">Er hat am Sonntag Zeit.</span> <span class="interactive-sentence" data-ko="우리는 해가 비치면, 일요일 오후에 공원에서 함께 산책을 하고 싶습니다.">Wir wollen am Sonntagnachmittag zusammen im Park spazieren gehen, wenn die Sonne scheint.</span> <span class="interactive-sentence" data-ko="여름이 되면 저는 휴가를 갑니다.">Im Sommer habe ich dann Urlaub.</span> <span class="interactive-sentence" data-ko="저는 7월에 2주 동안 이탈리아로 갑니다.">Ich fahre im Juli für zwei Wochen nach Italien.</span> <span class="interactive-sentence" data-ko="저는 벌써 그것이 매우 기대됩니다!">Ich freue mich schon sehr darauf!</span>'
                ]
            },
            {
                title: '핵심 문법 (Grammatik)',
                items: [
                    '1. 분리 동사 (Trennbare Verben): aufstehen(일어나다), anfangen(시작하다), aufhören(끝내다) 등 전철(auf-, an- 등)이 분리되는 동사입니다. 평서문에서 본동사는 두 번째 자리에 오고, 분리 전철은 문장 맨 끝으로 갑니다. 예: Ich *stehe* um sechs Uhr *auf*. (나는 6시에 일어납니다.)',
                    '2. 시간 전치사 um / am / im: 시각 앞에는 um(um 8 Uhr), 요일이나 날짜 앞에는 am(am Montag, am achten Mai), 월이나 계절 앞에는 im(im März, im Sommer)을 사용합니다.',
                    '3. 서수 (Ordinalzahlen, 날짜 말하기): 1일부터 19일까지는 기수에 -te가, 20일부터는 -ste가 붙습니다. (예: der erste, der dritte / der fünfzehnte / der zwanzigste). am과 함께 쓰일 때는 -n이 추가됩니다. (예: am achtzehnte*n* Mai)'
                ]
            },
            {
                title: '대화 (Das Gespräch)',
                items: [
                    'A: <span class="interactive-sentence" data-ko="루카스 안녕, 넌 보통 몇 시에 일어나?">Hallo Lukas, um wie viel Uhr stehst du meistens auf?</span>',
                    'B: <span class="interactive-sentence" data-ko="나는 자주 7시 정각에 일어나. 그리고 넌?">Ich stehe oft um genau acht Uhr auf. Und du?</span>',
                    'A: <span class="interactive-sentence" data-ko="나는 6시 15분에 일어나. 오늘 오후에 우리 만날까?">Ich stehe um viertel nach sechs auf. Treffen wir uns heute Nachmittag?</span>',
                    'B: <span class="interactive-sentence" data-ko="오늘은 안 돼, 나 18시까지 일해야 해.">Heute geht es nicht, ich arbeite bis achtzehn Uhr.</span>',
                    'A: <span class="interactive-sentence" data-ko="그럼 내일은 어때? 내일은 수요일이잖아.">Wie wäre es dann mit morgen? Morgen ist Mittwoch.</span>',
                    'B: <span class="interactive-sentence" data-ko="좋아! 19시쯤 공원에서 만나자.">Gerne! Lass uns gegen neunzehn Uhr im Park treffen.</span>'
                ]
            },
            {
                title: '단원 4 필수 어휘 (Wortschatz Lektion 4) - 1. 시간 및 요일 (Uhrzeit & Wochentage)',
                items: [
                    'die Uhr / die Uhrzeit: 시각 / 시간',
                    'die Stunde / die Minute / die Sekunde: 시간(단위) / 분 / 초',
                    'viertel / halb: 15분 / 절반(30분 전)',
                    'der Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag: 월~일요일',
                    'das Wochenende: 주말'
                ]
            },
            {
                title: '단원 4 필수 어휘 (Wortschatz Lektion 4) - 2. 월 및 계절 (Monate & Jahreszeiten)',
                items: [
                    'Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember: 1~12월',
                    'der Frühling / der Sommer / der Herbst / der Winter: 봄 / 여름 / 가을 / 겨울',
                    'das Datum / das Jahr: 날짜 / 해(년)'
                ]
            },
            {
                title: '단원 4 필수 어휘 (Wortschatz Lektion 4) - 3. 하루 일과 관련 동사 (Verben)',
                items: [
                    'aufstehen: 일어나다 (*분리 동사)',
                    'anfangen: 시작하다 (*분리 동사)',
                    'aufhören: 끝내다 (*분리 동사)',
                    'frühstücken: 아침 식사하다',
                    'arbeiten: 일하다',
                    'schlafen: 자다',
                    'treffen: 만나다',
                    'planen: 계획하다'
                ]
            },
            {
                title: '단원 4 필수 어휘 (Wortschatz Lektion 4) - 4. 시간 관련 전치사 및 부사 (Präpositionen & Adverbien)',
                items: [
                    'um / am / im: ~시에 (시각) / ~에 (요일, 날짜) / ~에 (월, 계절)',
                    'von ... bis ... : ~부터 ~까지',
                    'früh / spät: 이른 / 늦은',
                    'heute / morgen / gestern: 오늘 / 내일 / 어제',
                    'meistens / oft: 보통, 대개 / 자주'
                ]
            }
        ]
    }
};
