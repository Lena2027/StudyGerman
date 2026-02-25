// STEP 03 - 쇼핑 (Einkaufen)
const STEP_03 = {
    id: 3,
    icon: 'ph-shopping-cart',
    title: '쇼핑',
    subtitle: 'Einkaufen',
    color: 'amber',
    content: {
        heading: '쇼핑 (Einkaufen)',
        description: '가격 묻기, 물건 구매, 다양한 물품의 명칭 등 일상적인 쇼핑 상황에서 쓰이는 표현과 문법을 익힙니다.',
        sections: [
            {
                title: '핵심 표현 (Redemittel)',
                items: [
                    'Was kostet das? / Wie viel kostet das? — 이것은 얼마인가요?',
                    'Das kostet drei Euro fünfzig. — 3유로 50센트입니다.',
                    'Insgesamt macht das zwölf Euro achtzig. — 전부 합해서 12유로 80센트입니다.',
                    'Ich möchte / hätte gern einen Apfel. — 저는 사과를 하나 원합니다 (사고 싶습니다).',
                    'Was darf\'s sein? / Sie wünschen? — 무엇을 드릴까요?',
                    'Noch etwas? / Sonst noch etwas? — 더 필요한 것 있으신가요?',
                    'Nein, danke. Das ist alles. — 아니요, 감사합니다. 그게 전부입니다.',
                    'Ich nehme das. — 이걸로 할게요.',
                    'Haben Sie ...? — ...있나요?'
                ]
            },
            {
                title: '텍스트 읽기 (Lesetexte)',
                items: [
                    '**Sarah geht einkaufen**<br><span class="interactive-sentence" data-ko="토요일 아침입니다.">Es ist Samstagmorgen.</span> <span class="interactive-sentence" data-ko="사라는 장을 보러 갑니다.">Sarah geht einkaufen.</span> <span class="interactive-sentence" data-ko="가장 먼저 그녀는 중심가에 있는 주말 시장을 방문합니다.">Zuerst besucht sie den Wochenmarkt im Zentrum.</span> <span class="interactive-sentence" data-ko="그곳의 분위기는 매우 좋습니다.">Die Atmosphäre dort ist sehr schön.</span> <span class="interactive-sentence" data-ko="그녀는 주말을 위해 신선한 과일과 채소가 필요합니다.">Sie braucht frisches Obst und Gemüse für das Wochenende.</span> <br><br> <span class="interactive-sentence" data-ko="사라는 과일 매대로 갑니다.">Sarah geht zum Obststand.</span> <span class="interactive-sentence" data-ko="&quot;안녕하세요! 사과 1킬로그램과 오렌지 2킬로그램 주세요.&quot;라고 그녀가 말합니다.">„Guten Tag! Ich hätte gern ein Kilo Äpfel und zwei Kilo Orangen“, sagt sie.</span> <span class="interactive-sentence" data-ko="판매원이 묻습니다: &quot;바나나도 원하시나요? 오늘 특가 상품입니다.&quot;">Der Verkäufer fragt: „Möchten Sie auch Bananen? Sie sind heute im Angebot.“</span> <span class="interactive-sentence" data-ko="사라가 대답합니다: &quot;네, 좋아요. 바나나 5개 할게요. 토마토는 얼마인가요?&quot;">Sarah antwortet: „Ja, gern. Ich nehme fünf Bananen. Was kosten die Tomaten?“</span> <span class="interactive-sentence" data-ko="판매원이 말합니다: &quot;토마토 1킬로그램에 3유로 50센트입니다.&quot;">Der Verkäufer sagt: „Ein Kilo Tomaten kostet drei Euro fünfzig.“</span> <span class="interactive-sentence" data-ko="사라는 토마토 1킬로그램과 양상추 1통도 삽니다.">Sarah kauft auch ein Kilo Tomaten und einen Kopf Salat.</span> <span class="interactive-sentence" data-ko="채소가 매우 신선하고 건강합니다.">Das Gemüse ist sehr frisch und gesund.</span> <span class="interactive-sentence" data-ko="전부 합해서 12유로 80센트입니다.">Insgesamt macht das zwölf Euro achtzig.</span> <span class="interactive-sentence" data-ko="사라는 현금으로 지불합니다.">Sarah bezahlt mit Bargeld.</span> <br><br> <span class="interactive-sentence" data-ko="그 후 사라는 슈퍼마켓에 갑니다.">Danach geht Sarah in den Supermarkt.</span> <span class="interactive-sentence" data-ko="그녀는 식료품이 더 필요합니다: 우유 한 팩, 계란 5개, 커피 500그램(1파운드)과 미네랄워터 한 병.">Sie braucht noch Lebensmittel: eine Packung Milch, fünf Eier, ein Pfund Kaffee und eine Flasche Mineralwasser.</span> <span class="interactive-sentence" data-ko="그녀는 빵도 찾지만, 빵집 빵이 더 낫습니다.">Sie sucht auch Brot, aber das Brot beim Bäcker ist besser.</span> <span class="interactive-sentence" data-ko="그래서 그녀는 빵집으로 가서 모닝빵 2개를 삽니다.">Also geht sie zum Bäcker und kauft zwei Brötchen.</span> <br><br> <span class="interactive-sentence" data-ko="오후에 사라는 백화점에 갑니다.">Am Nachmittag geht Sarah in ein Kaufhaus.</span> <span class="interactive-sentence" data-ko="그녀는 새 바지를 찾고 있습니다.">Sie sucht eine neue Hose.</span> <span class="interactive-sentence" data-ko="이 그 바지는 파란색이고 50유로입니다.">Die Hose ist blau und kostet fünfzig Euro.</span> <span class="interactive-sentence" data-ko="그것은 조금 비싸지만, 품질이 매우 좋습니다.">Das ist ein bisschen teuer, aber die Qualität ist sehr gut.</span> <span class="interactive-sentence" data-ko="그녀는 빨간색 티셔츠도 하나 발견합니다.">Sie findet auch ein T-Shirt in Rot.</span> <span class="interactive-sentence" data-ko="이 티셔츠는 싸고, 겨우 10유로 밖에 안 합니다.">Das T-Shirt ist billig, es kostet nur zehn Euro.</span> <span class="interactive-sentence" data-ko="사라는 계산대로 가서 신용카드로 결제합니다.">Sarah geht zur Kasse und bezahlt mit ihrer Kreditkarte.</span> <span class="interactive-sentence" data-ko="쇼핑은 재밌지만, 지금 그녀는 피곤합니다.">Einkaufen macht Spaß, aber jetzt ist sie müde.</span> <span class="interactive-sentence" data-ko="그녀는 집으로 가서 커피 한 잔을 마십니다.">Sie geht nach Hause und trinkt eine Tasse Kaffee.</span>'
                ]
            },
            {
                title: '핵심 문법 (Grammatik)',
                items: [
                    '1. 공손한 표현 \'möchten\' (~하고 싶다)과 \'hätte gern\' (~를 주시겠습니까): 쇼핑할 때 자신이 원하는 것을 말할 때는 공손하게 \'ich möchte...\' 또는 \'ich hätte gern...\'을 사용합니다. 예: Ich möchte einen Apfel. (사과를 하나 원합니다.) / Ich hätte gern einen Apfel. (사과 하나 주시겠어요.)',
                    '2. 명사의 4격(Akkusativ, 목적격): 동사의 직접 목적어 역할(~을/를)을 할 때 쓰입니다. 남성 명사만 관사가 바뀝니다. (der -> den, ein -> einen). 여성(die/eine), 중성(das/ein), 복수(die/-)는 1격과 형태가 동일합니다. 예: Ich kaufe *den* Apfel / *einen* Apfel (남성). Ich suche *die* Hose / *eine* Hose (여성).',
                    '3. 불규칙 동사 nehmen (가져가다, 고르다, 취하다): 쇼핑에서 특정한 상품을 선택할 때 자주 사용합니다. (ich nehme, du nimmst, er/sie/es nimmt, wir nehmen, ihr nehmt, sie/Sie nehmen)'
                ]
            },
            {
                title: '대화 (Das Gespräch)',
                items: [
                    'A: <span class="interactive-sentence" data-ko="안녕하세요! 무엇을 드릴까요?">Guten Tag! Was darf\'s sein?</span>',
                    'B: <span class="interactive-sentence" data-ko="안녕하세요. 사과 1킬로그램과 빵 하나 주세요.">Guten Tag. Ich hätte gern ein Kilo Äpfel und ein Brot.</span>',
                    'A: <span class="interactive-sentence" data-ko="네. 더 필요한 것 있으신가요?">Gerne. Noch etwas?</span>',
                    'B: <span class="interactive-sentence" data-ko="아니요, 감사합니다. 그게 전부입니다. 전부 합해서 얼마인가요?">Nein, danke. Das ist alles. Was kostet das zusammen?</span>',
                    'A: <span class="interactive-sentence" data-ko="5유로 50센트입니다.">Das macht fünf Euro fünfzig.</span>',
                    'B: <span class="interactive-sentence" data-ko="여기 있습니다. 현금으로 계산할게요.">Hier, bitte. Ich bezahle mit Bargeld.</span>',
                    'A: <span class="interactive-sentence" data-ko="감사합니다. 안녕히 가세요!">Danke schön. Auf Wiedersehen!</span>'
                ]
            },
            {
                title: '단원 3 필수 어휘 (Wortschatz Lektion 3) - 1. 장소 및 사람 (Orte & Personen)',
                items: [
                    'der Markt / der Wochenmarkt: 시장 / 주말 시장',
                    'der Supermarkt: 슈퍼마켓',
                    'das Kaufhaus: 백화점',
                    'die Bäckerei / der Bäcker: 빵집 / 제빵사',
                    'der Verkäufer / die Verkäuferin: 판매원(남성 / 여성)',
                    'der Kunde / die Kundin: 손님(남성 / 여성)'
                ]
            },
            {
                title: '단원 3 필수 어휘 (Wortschatz Lektion 3) - 2. 식품 및 물건 (Lebensmittel & Dinge)',
                items: [
                    'das Obst / das Gemüse: 과일 / 채소',
                    'der Apfel / die Banane / die Orange: 사과 / 바나나 / 오렌지',
                    'die Tomate / der Salat: 토마토 / 상추(샐러드)',
                    'die Milch / das Ei / das Brot / das Brötchen: 우유 / 계란 / 빵 / 모닝빵',
                    'das Fleisch / der Käse / der Fisch: 고기 / 치즈 / 생선',
                    'der Kaffee / der Tee / das Wasser: 커피 / 차 / 물',
                    'die Hose / das T-Shirt / das Kleid: 바지 / 티셔츠 / 원피스'
                ]
            },
            {
                title: '단원 3 필수 어휘 (Wortschatz Lektion 3) - 3. 쇼핑 관련 표현 (Einkaufen 표현)',
                items: [
                    'kaufen / verkaufen: 사다 / 팔다',
                    'suchen / finden: 찾다 / 발견하다',
                    'kosten / bezahlen: 비용이 들다 / 지불하다',
                    'nehmen: 가지다, 취하다 (\'이걸로 할게요\')',
                    'das Angebot: 할인 / 특가 상품',
                    'der Preis / teuer / billig: 가격 / 비싼 / 싼',
                    'die Kasse / das Bargeld / die Kreditkarte: 계산대 / 현금 / 신용카드',
                    'ein Kilo / ein Pfund / eine Packung / eine Flasche: 단위 (1kg / 500g / 한 팩 / 한 병)'
                ]
            }
        ]
    }
};
