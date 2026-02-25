// STEP 05 - 음식과 식당 (Essen & Restaurant)
const STEP_05 = {
    id: 5,
    icon: 'ph-fork-knife',
    title: '음식과 식당',
    subtitle: 'Essen & Restaurant',
    color: 'rose',
    content: {
        heading: '음식과 식당 (Essen & Restaurant)',
        description: '식당 예약, 메뉴 주문, 맛 표현, 계산 등 식사 상황에서 쓰이는 필수 어휘와 표현을 익힙니다.',
        sections: [
            {
                title: '핵심 표현 (Redemittel)',
                items: [
                    'Ich möchte einen Tisch für zwei Personen reservieren. — 두 사람 자리를 예약하고 싶습니다.',
                    'Was möchten Sie trinken / essen? — 무엇을 마시겠습니까 / 드시겠습니까?',
                    'Ich hätte gern ... / Ich nehme ... — 저는 ...을 원합니다 / 저는 ...로 할게요.',
                    'Als Vorspeise / Hauptgericht / Nachtisch nehme ich ... — 전채 요리 / 메인 요리 / 디저트로 ...를 먹을게요.',
                    'Hat es Ihnen geschmeckt? — 맛이 어떠셨나요?',
                    'Es war ausgezeichnet / sehr lecker! — 훌륭했어요 / 매우 맛있었어요!',
                    'Die Rechnung, bitte! — 계산서 주세요!',
                    'Zahlen Sie zusammen oder getrennt? — 같이 계산하시나요, 따로 계산하시나요?'
                ]
            },
            {
                title: '텍스트 읽기 (Lesetexte)',
                items: [
                    '**Im Restaurant „Guten Appetit“**<br><span class="interactive-sentence" data-ko="오늘 저녁에 루카스, 마리아, 그리고 민수는 함께 식사하러 갑니다.">Heute Abend gehen Lukas, Maria und Min-su zusammen essen.</span> <span class="interactive-sentence" data-ko="그들은 도심에 있는 아늑한 식당에 테이블을 하나 예약했습니다.">Sie haben einen Tisch in einem gemütlichen Restaurant im Stadtzentrum reserviert.</span> <span class="interactive-sentence" data-ko="그 식당의 이름은 „구텐 아페티트(맛있게 드세요)“입니다.">Das Restaurant heißt „Guten Appetit“.</span> <span class="interactive-sentence" data-ko="저녁 7시이고 식당은 벌써 꽉 찼습니다.">Es ist sieben Uhr abends und das Restaurant ist schon voll.</span> <br><br> <span class="interactive-sentence" data-ko="웨이터가 와서 메뉴판을 가져옵니다.">Der Kellner kommt und bringt die Speisekarte.</span> <span class="interactive-sentence" data-ko="그가 묻습니다: „안녕하세요(저녁 인사)! 무엇을 마시겠습니까?“">Er fragt: „Guten Abend! Was möchten Sie trinken?“</span> <span class="interactive-sentence" data-ko="마리아가 대답합니다: „저는 레드와인 한 잔 주시겠어요.“">Maria antwortet: „Ich hätte gern ein Glas Rotwein.“</span> <span class="interactive-sentence" data-ko="루카스는 큰 맥주를 선택하고 민수는 탄산수를 주문합니다.">Lukas nimmt ein großes Bier und Min-su bestellt ein Mineralwasser mit Kohlensäure.</span> <br><br> <span class="interactive-sentence" data-ko="그리고 나서 그들은 메뉴판을 봅니다.">Dann schauen sie in die Speisekarte.</span> <span class="interactive-sentence" data-ko="맛있는 요리가 많이 있습니다.">Es gibt viele leckere Gerichte.</span> <span class="interactive-sentence" data-ko="전채 요리로 그들은 토마토 수프와 모둠 샐러드를 고릅니다.">Als Vorspeise wählen sie eine Tomatensuppe und einen gemischten Salat.</span> <span class="interactive-sentence" data-ko="메인 요리로 마리아는 감자를 곁들인 생선 요리 한 접시를 주문합니다.">Als Hauptgericht bestellt Maria einen Fischteller mit Kartoffeln.</span> <span class="interactive-sentence" data-ko="루카스는 감자튀김을 곁들인 비너 슈니첼을 먹고 싶어 합니다.">Lukas möchte ein Wiener Schnitzel mit Pommes frites essen.</span> <span class="interactive-sentence" data-ko="민수는 케제슈페츨레를 먹어봅니다, 그것은 독일의 특산 요리입니다.">Min-su probiert die Käsespätzle, das ist eine Spezialität aus Deutschland.</span> <br><br> <span class="interactive-sentence" data-ko="식사 후에 웨이터가 묻습니다: „맛이 어떠셨나요?“">Nach dem Essen fragt der Kellner: „Hat es Ihnen geschmeckt?“</span> <span class="interactive-sentence" data-ko="„네, 훌륭했어요! 고기는 매우 부드러웠고 생선은 신선했어요.“ 라고 루카스가 말합니다.">„Ja, es war ausgezeichnet! Das Fleisch war sehr zart und der Fisch war frisch“, sagt Lukas.</span> <span class="interactive-sentence" data-ko="디저트로 그들은 바닐라 아이스크림 두 스쿱과 에스프레소 한 잔을 더 주문합니다.">Zum Nachtisch bestellen sie noch zwei Kugeln Vanilleeis und einen Espresso.</span> <br><br> <span class="interactive-sentence" data-ko="마지막에 마리아가 말합니다: „계산서 주세요!“">Am Ende sagt Maria: „Die Rechnung, bitte!“</span> <span class="interactive-sentence" data-ko="웨이터가 묻습니다: „같이 계산하시나요, 따로 계산하시나요?“">Der Kellner fragt: „Zahlen Sie zusammen oder getrennt?“</span> <span class="interactive-sentence" data-ko="„따로 할게요.“ 라고 루카스가 대답합니다.">„Getrennt, bitte“, antwortet Lukas.</span> <span class="interactive-sentence" data-ko="그는 25유로를 지불하고 웨이터에게 2유로를 팁으로 줍니다.">Er bezahlt fünfundzwanzig Euro und gibt dem Kellner zwei Euro Trinkgeld.</span> <span class="interactive-sentence" data-ko="모두가 만족스럽고 배가 부릅니다.">Alle sind zufrieden und satt.</span>'
                ]
            },
            {
                title: '핵심 문법 (Grammatik)',
                items: [
                    '1. 동사 과거형(Perfekt)의 기초: 오늘 있었던 일이나 과거 사실을 이야기할 때 사용합니다. haben/sein 동사 + 과거분사(Partizip II) 형태입니다. (예: Sie *haben* einen Tisch *reserviert*. / 예: Ihr *seid* zusammen essen *gegangen*.)',
                    '2. 3격(Dativ, 여격) 동사 schmecken: 맛을 나타내는 동사 schmecken은 항상 3격 목적어(~에게 맛이 있다)를 취합니다. (예: Schmeckt es *Ihnen*? - 당신에게 맛있었나요?, / Das Schnitzel schmeckt *mir*. - 슈니첼이 내 입맛에 맞다.)',
                    '3. 식사 순서 표현 - Als (~로서): 식사 순서를 나타낼 때 전치사 als를 씁니다. (예: *Als* Vorspeise - 전채 요리로, *Als* Hauptgericht - 메인 요리로, *Als* Nachtisch(Dessert) - 디저트로)'
                ]
            },
            {
                title: '대화 (Das Gespräch)',
                items: [
                    'A: <span class="interactive-sentence" data-ko="안녕하세요. 주문하시겠어요?">Guten Tag. Möchten Sie schon bestellen?</span>',
                    'B: <span class="interactive-sentence" data-ko="네, 메뉴판 한 개 부탁드립니다.">Ja, die Speisekarte, bitte.</span>',
                    'A: <span class="interactive-sentence" data-ko="여기 있습니다. 음료는 먼저 무엇으로 하시겠어요?">Hier, bitte. Was möchten Sie zuerst trinken?</span>',
                    'B: <span class="interactive-sentence" data-ko="사과 주스 한 잔 주세요.">Ich hätte gern einen Apfelsaft.</span>',
                    'A: <span class="interactive-sentence" data-ko="좋습니다. 음식은 무엇으로 하시겠어요?">Gerne. Und zum Essen?</span>',
                    'B: <span class="interactive-sentence" data-ko="감자 샐러드를 곁들인 슈니첼로 할게요.">Ich nehme das Schnitzel mit Kartoffelsalat.</span>',
                    'A: <span class="interactive-sentence" data-ko="알겠습니다. 곧 준비해 드리겠습니다.">Alles klar. Kommt sofort!</span>'
                ]
            },
            {
                title: '단원 5 필수 어휘 (Wortschatz Lektion 5) - 1. 식당 이용 (Im Restaurant)',
                items: [
                    'der Tisch / reservieren: 탁자 / 예약하다',
                    'die Speisekarte / das Gericht: 메뉴판 / 요리',
                    'der Kellner / die Kellnerin: 웨이터 / 웨이트리스',
                    'die Vorspeise / das Hauptgericht / der Nachtisch: 전채 / 메인 / 디저트',
                    'die Rechnung / das Trinkgeld: 계산서 / 팁',
                    'bestellen / bezahlen: 주문하다 / 지불하다',
                    'zusammen / getrennt: 합쳐서(같이) / 따로따로'
                ]
            },
            {
                title: '단원 5 필수 어휘 (Wortschatz Lektion 5) - 2. 음식과 음료 (Essen & Trinken)',
                items: [
                    'das Fleisch / das Schnitzel: 고기 / 슈니첼(독일식 돈가스)',
                    'der Fisch / die Kartoffel: 생선 / 감자',
                    'die Suppe / der Salat: 수프 / 샐러드',
                    'das Wasser / das Bier / der Wein: 물 / 맥주 / 와인',
                    'das Eis / der Kuchen: 아이스크림 / 케이크',
                    'das Salz / der Pfeffer / der Zucker: 소금 / 후추 / 설탕'
                ]
            },
            {
                title: '단원 5 필수 어휘 (Wortschatz Lektion 5) - 3. 맛과 상태 (Geschmack & Zustand)',
                items: [
                    'lecker / ausgezeichnet: 맛있는 / 훌륭한',
                    'frisch / zart: 신선한 / 부드러운',
                    'scharf / süß / salzig: 매운 / 단 / 짠',
                    'warm / kalt: 따뜻한 / 차가운',
                    'hungrig / satt: 배고픈 / 배부른'
                ]
            }
        ]
    }
};
