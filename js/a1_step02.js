// STEP 02 - 가족과 집 (Familie & Wohnen)
const STEP_02 = {
    id: 2,
    icon: 'ph-house',
    title: '가족과 집',
    subtitle: 'Familie & Wohnen',
    color: 'blue',
    content: {
        heading: '가족과 집 (Familie & Wohnen)',
        description: '가족 및 주거 관련 필수 어휘, 그리고 자신의 집이나 아파트를 묘사하는 표현을 익힙니다.',
        sections: [
            {
                title: '핵심 표현 (Redemittel)',
                items: [
                    'Ich wohne in Köln mit meinen Eltern. — 저는 부모님과 함께 쾰른에 삽니다.',
                    'Wie groß ist deine Familie? — 너희 가족은 얼마나 크니? (가족이 몇 명이니?)',
                    'Ich habe einen Bruder und eine Schwester. — 저는 남동생 한 명과 여동생 한 명이 있습니다.',
                    'Wir haben ein Haustier. — 우리는 반려동물이 있습니다.',
                    'Ich wohne in einer Wohnung / in einem Haus. — 저는 아파트 / 주택에 삽니다.',
                    'Die Wohnung ist im vierten Stock. — 그 아파트는 4층에 있습니다.',
                    'Die Wohnung hat fünf Zimmer. — 그 아파트는 방이 5개 있습니다.',
                    'Das Wohnzimmer ist mein Lieblingszimmer. — 거실은 제가 제일 좋아하는 방입니다.'
                ]
            },
            {
                title: '텍스트 읽기 (Lesetexte)',
                items: [
                    '**Julia aus Köln**<br><span class="interactive-sentence" data-ko="안녕하세요!">Hallo!</span> <span class="interactive-sentence" data-ko="나는 율리아 베버야.">Ich bin Julia Weber.</span> <span class="interactive-sentence" data-ko="나는 오늘 너희에게 내 가족과 우리 집(아파트)을 소개하고 싶어.">Ich möchte euch heute meine Familie und unsere Wohnung vorstellen.</span> <br><br> <span class="interactive-sentence" data-ko="우리 가족은 꽤 커.">Meine Familie ist ziemlich groß.</span> <span class="interactive-sentence" data-ko="나는 부모님, 그리고 두 형제자매와 함께 쾰른에 살아.">Ich wohne mit meinen Eltern und meinen zwei Geschwistern in Köln.</span> <span class="interactive-sentence" data-ko="나의 아버지의 이름은 안드레아스고 내 어머니의 이름은 자비네야.">Mein Vater heißt Andreas und meine Mutter heißt Sabine.</span> <span class="interactive-sentence" data-ko="내 남자 형제의 이름은 팀이고 15살이야.">Mein Bruder heißt Tim, er ist fünfzehn Jahre alt.</span> <span class="interactive-sentence" data-ko="내 여자 형제의 이름은 라라고 이제 겨우 9살이야.">Meine Schwester heißt Lara, sie ist erst neun.</span> <span class="interactive-sentence" data-ko="우리는 반려동물인 개도 한 마리 있어.">Wir haben auch ein Haustier: einen Hund.</span> <span class="interactive-sentence" data-ko="개의 이름은 브루노야.">Er heißt Bruno.</span> <span class="interactive-sentence" data-ko="브루노는 매우 귀엽지만, 가끔 시끄러워.">Er ist sehr süß, aber manchmal laut.</span> <span class="interactive-sentence" data-ko="내 조부모님, 할아버지와 할머니는 여기에 살지 않으셔.">Meine Großeltern, mein Opa und meine Oma, wohnen nicht hier.</span> <span class="interactive-sentence" data-ko="조부모님은 시골에 작은 집이 있으셔.">Sie haben ein kleines Haus auf dem Land.</span> <br><br> <span class="interactive-sentence" data-ko="우리는 도심에 있는 아파트에 살아.">Wir wohnen in einer Wohnung im Stadtzentrum.</span> <span class="interactive-sentence" data-ko="아파트는 4층에 있어.">Die Wohnung ist im vierten Stock.</span> <span class="interactive-sentence" data-ko="방은 5개가 있어: 거실 하나, 침실 세 개, 그리고 서재 하나.">Sie hat fünf Zimmer: ein Wohnzimmer, drei Schlafzimmer und ein Arbeitszimmer.</span> <span class="interactive-sentence" data-ko="주방은 크고 매우 밝아.">Die Küche ist groß und sehr hell.</span> <span class="interactive-sentence" data-ko="주방에는 의자가 6개 있는 둥근 탁자가 있어.">In der Küche steht ein runder Tisch mit sechs Stühlen.</span> <span class="interactive-sentence" data-ko="여기서 우리는 함께 저녁을 먹어.">Hier essen wir zusammen zu Abend.</span> <br><br> <span class="interactive-sentence" data-ko="거실은 내가 가장 좋아하는 방이야.">Das Wohnzimmer ist mein Lieblingszimmer.</span> <span class="interactive-sentence" data-ko="거실에는 편안한 소파, TV, 그리고 책이 많이 있는 큰 선반이 있어.">Dort steht ein bequemes Sofa, ein Fernseher und ein großes Regal mit vielen Büchern.</span> <span class="interactive-sentence" data-ko="우리는 발코니도 있어.">Wir haben auch einen Balkon.</span> <span class="interactive-sentence" data-ko="여름에는 그곳에 자주 앉아 차를 마셔.">Im Sommer sitzen wir dort oft und trinken Tee.</span> <span class="interactive-sentence" data-ko="내 아파트는 아주 현대적이지는 않지만 아늑해.">Meine Wohnung ist nicht sehr modern, aber sie ist gemütlich.</span> <span class="interactive-sentence" data-ko="나는 내 집을 매우 좋아해.">Ich mag mein Zuhause sehr.</span>'
                ]
            },
            {
                title: '핵심 문법 (Grammatik)',
                items: [
                    '1. 소유관사 (Possessivartikel, 1격/주격 기준): 나의(mein/meine), 너의(dein/deine). 뒤에 오는 명사의 성별에 따라 어미가 다릅니다. 남성/중성 명사 앞에서는 mein/dein (예: mein Vater, dein Buch), 여성/복수 명사 앞에서는 meine/deine (예: meine Mutter, deine Eltern)를 씁니다.',
                    '2. 동사 haben (~를 가지고 있다, 있다): 불규칙 동사입니다. ich habe, du *hast*, er/sie/es *hat*, wir haben, ihr habt, sie/Sie haben.',
                    '3. 정관사(der, die, das)와 명사의 복수형: 독일어 명사 복수형은 규칙이 다양하므로 단어와 함께 외워야 합니다. (예: das Kind -> die Kinder, der Bruder -> die Brüder, das Zimmer -> die Zimmer, die Wohnung -> die Wohnungen)'
                ]
            },
            {
                title: '대화 (Das Gespräch)',
                items: [
                    'A: <span class="interactive-sentence" data-ko="안녕 안드레아스, 사진에 있는 이 사람은 누구야?">Hallo Andreas, wer ist das auf dem Foto?</span>',
                    'B: <span class="interactive-sentence" data-ko="이건 내 가족이야.">Das ist meine Familie.</span> <span class="interactive-sentence" data-ko="이 사람은 내 아내, 안나야.">Das ist meine Frau, Anna.</span>',
                    'A: <span class="interactive-sentence" data-ko="그리고 이 사람들은 네 아이들이야?">Und sind das deine Kinder?</span>',
                    'B: <span class="interactive-sentence" data-ko="응, 내 딸과 아들이야.">Ja, das sind meine Tochter und mein Sohn.</span>',
                    'A: <span class="interactive-sentence" data-ko="그들도 여기 쾰른에 살아?">Wohnen sie auch hier in Köln?</span>',
                    'B: <span class="interactive-sentence" data-ko="아니, 그들은 베를린에 살아.">Nein, sie wohnen in Berlin.</span>',
                    'A: <span class="interactive-sentence" data-ko="오, 멋지네. 그리고 반려동물도 있어?">Oh, das ist schön. Und hast du ein Haustier?</span>',
                    'B: <span class="interactive-sentence" data-ko="응, 우리는 개를 한 마리 데리고 있어.">Ja, wir haben einen Hund.</span>'
                ]
            },
            {
                title: '단원 2 필수 어휘 (Wortschatz Lektion 2) - 1. 가족 관련 (Die Familie)',
                items: [
                    'die Eltern / der Vater / die Mutter: 부모님 / 아버지 / 어머니',
                    'die Geschwister / der Bruder / die Schwester: 형제자매 / 남동생(형, 오빠) / 여동생(누나, 언니)',
                    'die Großeltern / der Opa / die Oma: 조부모님 / 할아버지 / 할머니',
                    'das Haustier / der Hund / die Katze: 반려동물 / 개 / 고양이',
                    'das Kind / die Kinder: 아이 / 아이들'
                ]
            },
            {
                title: '단원 2 필수 어휘 (Wortschatz Lektion 2) - 2. 주거 관련 (Wohnen)',
                items: [
                    'das Haus / die Wohnung: 주택(집) / 아파트(집)',
                    'das Zimmer / das Wohnzimmer / das Schlafzimmer: 방 / 거실 / 침실',
                    'das Arbeitszimmer / die Küche / das Bad: 서재(공부방) / 주방 / 욕실',
                    'der Balkon / der Stock / der Garten: 발코니 / 층 / 정원',
                    'die Möbel / der Tisch / der Stuhl / das Sofa / das Regal: 가구 / 탁자 / 의자 / 소파 / 선반(책장)'
                ]
            },
            {
                title: '단원 2 필수 어휘 (Wortschatz Lektion 2) - 3. 형용사 및 기타 (Adjektive & Sonstiges)',
                items: [
                    'groß / klein: 큰 / 작은',
                    'hell / dunkel: 밝은 / 어두운',
                    'modern / alt: 현대적인 / 오래된',
                    'gemütlich / bequem: 아늑한 / 편안한',
                    'zusammen / manchmal: 함께 / 가끔'
                ]
            }
        ]
    }
};
