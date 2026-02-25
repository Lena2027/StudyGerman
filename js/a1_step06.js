// STEP 06 - 교통과 길 찾기 (Verkehr & Wegbeschreibung)
const STEP_06 = {
    id: 6,
    icon: 'ph-bus',
    title: '교통과 길 찾기',
    subtitle: 'Verkehr & Wegbeschreibung',
    color: 'sky',
    content: {
        heading: '교통과 길 찾기 (Verkehr & Wegbeschreibung)',
        description: '낯선 도시에서 길을 묻고, 기차역에서 표를 사거나 위치를 교환할 때 필요한 필수 어휘와 표현을 익힙니다.',
        sections: [
            {
                title: '핵심 표현 (Redemittel)',
                items: [
                    'Entschuldigung, wie komme ich zum Bahnhof? — 실례합니다, 기차역으로 어떻게 가나요?',
                    'Wissen Sie, wo das Hotel ist? — 호텔이 어디에 있는지 아시나요?',
                    'Gehen Sie geradeaus und dann links/rechts. — 직진하시고 그다음 왼쪽/오른쪽으로 가세요.',
                    'Der Zug fährt von Gleis 7 ab. — 그 기차는 7번 플랫폼에서 출발합니다.',
                    'Ich möchte eine Fahrkarte nach Berlin kaufen. — 베를린행 표를 한 장 사고 싶습니다.',
                    'Der Bus hat zehn Minuten Verspätung. — 버스가 10분 연착되었습니다.',
                    'Das Hotel ist ganz in der Nähe. — 호텔은 아주 가까이에 있어요.'
                ]
            },
            {
                title: '텍스트 읽기 (Lesetexte)',
                items: [
                    '**Eine Reise nach Berlin**<br><span class="interactive-sentence" data-ko="타냐는 주말에 베를린에 있는 그녀의 친구를 방문하고 싶어 합니다.">Tanja möchte am Wochenende ihre Freundin in Berlin besuchen.</span> <span class="interactive-sentence" data-ko="그녀는 작은 도시에 살고 있어서 먼저 중앙역으로 가야 합니다.">Sie wohnt in einer kleinen Stadt und muss zuerst zum Hauptbahnhof fahren.</span> <span class="interactive-sentence" data-ko="그녀는 차가 없어서 버스를 탑니다.">Sie hat kein Auto, deshalb nimmt sie den Bus.</span> <span class="interactive-sentence" data-ko="버스 정류장에서 그녀는 한 남자에게 묻습니다: „실례합니다, 어떤 버스가 기차역으로 가나요?“">An der Bushaltestelle fragt sie einen Mann: „Entschuldigung, welcher Bus fährt zum Bahnhof?“</span> <span class="interactive-sentence" data-ko="그 남자가 대답합니다: „100번 버스가 그곳으로 바로 갑니다. 버스는 5분 안에 올 겁니다.“">Der Mann antwortet: „Die Linie einhundert (100) fährt direkt dorthin. Der Bus kommt in fünf Minuten.“</span> <br><br> <span class="interactive-sentence" data-ko="기차역에 도착해서 타냐는 티켓 자동발매기로 갑니다.">Am Bahnhof angekommen, geht Tanja zum Fahrkartenautomaten.</span> <span class="interactive-sentence" data-ko="그녀는 베를린행 표를 한 장 사고 싶습니다.">Sie möchte eine Fahrkarte nach Berlin kaufen.</span> <span class="interactive-sentence" data-ko="왕복표는 80유로입니다.">Die Hin- und Rückfahrt kostet achtzig Euro.</span> <span class="interactive-sentence" data-ko="이것은 할인 상품입니다.">Das ist ein Sparangebot.</span> <span class="interactive-sentence" data-ko="타냐는 전광판을 봅니다.">Tanja schaut auf die Anzeigetafel.</span> <span class="interactive-sentence" data-ko="그녀의 기차, 베를린행 ICE는 7번 선로에서 출발합니다.">Ihr Zug, der ICE nach Berlin, fährt von Gleis sieben ab.</span> <span class="interactive-sentence" data-ko="기차는 아쉽게도 10분 지연됩니다.">Der Zug hat leider zehn Minuten Verspätung.</span> <span class="interactive-sentence" data-ko="출발은 이제 10시 15분입니다.">Die Abfahrt ist jetzt um zehn Uhr fünfzehn.</span> <br><br> <span class="interactive-sentence" data-ko="베를린에 도착했는데, 타냐는 친구의 호텔이 정확히 어디에 있는지 모릅니다.">In Berlin angekommen, weiß Tanja nicht genau, wo das Hotel ihrer Freundin ist.</span> <span class="interactive-sentence" data-ko="그녀는 거리에서 한 여성에게 묻습니다: „안녕하세요, \'베를리너 배어\' 호텔이 어디에 있는지 아시나요?“">Sie fragt eine Frau auf der Straße: „Guten Tag, wissen Sie, wo das Hotel \'Berliner Bär\' ist?“</span> <span class="interactive-sentence" data-ko="여성은 친절하게 길을 설명합니다: „네, 무척 가까워요. 먼저 이 길을 신호등까지 똑바로 가세요.">Die Frau erklärt den Weg freundlich: „Ja, das ist ganz in der Nähe. Gehen Sie zuerst diese Straße geradeaus bis zur Ampel.</span> <span class="interactive-sentence" data-ko="교차로에서 왼쪽으로 꺾으세요. 그리고 200미터를 마저 가세요.">An der Kreuzung biegen Sie links ab. Dann gehen Sie noch zweihundert Meter weiter.</span> <span class="interactive-sentence" data-ko="호텔은 우측, 우체국 바로 옆에 있습니다.“">Das Hotel liegt auf der rechten Seite, direkt neben der Post.“</span> <br><br> <span class="interactive-sentence" data-ko="타냐가 감사 인사를 합니다: „도와주셔서 대단히 감사합니다!“">Tanja bedankt sich: „Vielen Dank für Ihre Hilfe!“</span> <span class="interactive-sentence" data-ko="„천만에요! 좋은 하루 보내세요!“, 여성이 대답합니다.">„Gerne geschehen! Einen schönen Tag noch!“, antwortet die Frau.</span> <span class="interactive-sentence" data-ko="타냐는 걸어서 호텔로 갑니다.">Tanja geht zu Fuß zum Hotel.</span> <span class="interactive-sentence" data-ko="그녀는 즉시 길을 찾습니다.">Sie findet den Weg sofort.</span> <span class="interactive-sentence" data-ko="베를린은 크고 수많은 차, 자전거, 지하철이 있지만, 길 안내는 매우 명확했습니다.">Berlin ist groß und es gibt viele Autos, Fahrräder und U-Bahnen, aber die Wegbeschreibung war sehr klar.</span> <span class="interactive-sentence" data-ko="결국 그녀는 친구를 만납니다.">Endlich trifft sie ihre Freundin.</span>'
                ]
            },
            {
                title: '핵심 문법 (Grammatik)',
                items: [
                    '1. 전치사 zu + 3격 (Dativ): 방향을 나타낼 때 사용합니다. 남성/중성 명사는 zum (zu dem, 예: zum Bahnhof 역으로), 여성 명사는 zur (zu der, 예: zur Ampel 신호등으로)를 씁니다.',
                    '2. 전치사 mit + 3격 (Dativ): 교통수단을 타고 간다고 할 때 쓰입니다. 남녀중성 구분에 따라 dem/der를 취합니다. (예: mit dem Bus 버스로, mit dem Zug 기차로, mit der U-Bahn 지하철로)',
                    '3. 명령문 (Imperativ - 존칭 Sie): 낯선 사람에게 길을 설명할 때 동사 원형 + Sie 의 형태로 정중한 명령문을 만듭니다. (예: *Gehen* Sie geradeaus - 직진하세요 / *Biegen* Sie links ab - 왼쪽으로 도세요)'
                ]
            },
            {
                title: '대화 (Das Gespräch)',
                items: [
                    'A: <span class="interactive-sentence" data-ko="실례합니다, 가장 가까운 약국으로 가려면 어떻게 해야 하나요?">Entschuldigung, wie komme ich zur nächsten Apotheke?</span>',
                    'B: <span class="interactive-sentence" data-ko="아주 쉽습니다. 먼저 이 길을 쭉 직진하세요.">Das ist ganz einfach. Gehen Sie zuerst hier die Straße geradeaus.</span>',
                    'A: <span class="interactive-sentence" data-ko="사거리(교차로)까지요?">Bis zur Kreuzung?</span>',
                    'B: <span class="interactive-sentence" data-ko="네, 교차로에서 오른쪽으로 도세요.">Ja, und an der Kreuzung biegen Sie rechts ab.</span>',
                    'A: <span class="interactive-sentence" data-ko="그리고 계속 길을 따라가나요?">Und dann weiter geradeaus?</span>',
                    'B: <span class="interactive-sentence" data-ko="네, 약 100미터 정도 가시면 슈퍼마켓 바로 옆 왼편에 약국이 있습니다.">Ja. Nach etwa hundert Metern ist die Apotheke auf der linken Seite, direkt neben dem Supermarkt.</span>',
                    'A: <span class="interactive-sentence" data-ko="감사합니다, 정말 친절하시네요!">Vielen Dank, das ist sehr nett von Ihnen!</span>',
                    'B: <span class="interactive-sentence" data-ko="천만에요, 좋은 하루 보내세요!">Gerne, einen schönen Tag noch!</span>'
                ]
            },
            {
                title: '단원 6 필수 어휘 (Wortschatz Lektion 6) - 1. 교통수단 (Verkehrsmittel)',
                items: [
                    'das Auto / das Fahrrad: 자동차 / 자전거',
                    'der Bus / der Zug (ICE): 버스 / 기차 (고속열차)',
                    'die U-Bahn / die S-Bahn: 지하철 / 도시철도',
                    'das Flugzeug / das Schiff: 비행기 / 배',
                    'zu Fuß gehen: 걸어가다'
                ]
            },
            {
                title: '단원 6 필수 어휘 (Wortschatz Lektion 6) - 2. 역과 여행 (Bahnhof & Reise)',
                items: [
                    'der Hauptbahnhof / die Haltestelle: 중앙역 / 정류장',
                    'die Fahrkarte / der Fahrkartenautomat: 승차권(표) / 티켓 판매기',
                    'die Hin- und Rückfahrt: 왕복 여행(승차표)',
                    'das Gleis / die Anzeigetafel: 플랫폼(선로) / 전광판',
                    'die Abfahrt / die Ankunft: 출발 / 도착',
                    'die Verspätung: 지연 / 연착'
                ]
            },
            {
                title: '단원 6 필수 어휘 (Wortschatz Lektion 6) - 3. 길 안내 (Wegbeschreibung)',
                items: [
                    'geradeaus / links / rechts: 똑바로(직진) / 왼쪽 / 오른쪽',
                    'biegen (abbiegen) / überqueren: 꺾다(돌다) / 건너다',
                    'die Ampel / die Kreuzung: 신호등 / 사거리(교차로)',
                    'die Nähe / die Seite: 근처 / 방향(쪽)',
                    'weit / nah: 먼 / 가까운'
                ]
            }
        ]
    }
};
