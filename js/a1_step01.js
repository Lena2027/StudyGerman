// STEP 01 - 자기소개 (Sich vorstellen)
const STEP_01 = {
    id: 1,
    icon: 'ph-user',
    title: '자기소개',
    subtitle: 'Sich vorstellen',
    color: 'teal',
    content: {
        heading: '자기소개 (Sich vorstellen)',
        description: '이름, 나이, 국적, 직업 등 기본적인 자기소개 표현과 관련 문법, 어휘를 익힙니다.',
        sections: [
            {
                title: '핵심 표현 (Redemittel)',
                items: [
                    'Ich heiße … / Mein Name ist … — 제 이름은 …입니다.',
                    'Ich bin … Jahre alt. — 저는 …살입니다.',
                    'Ich komme aus … — 저는 …에서 왔습니다.',
                    'Ich wohne in … — 저는 …에 삽니다.',
                    'Ich bin … (Beruf) — 저는 …입니다 (직업).',
                    'Was bist du von Beruf? / Was sind Sie von Beruf? — 직업이 무엇입니까?',
                    'Woher kommst du? / Woher kommen Sie? — 어디에서 오셨습니까?',
                    'Wo wohnst du? / Wo wohnen Sie? — 어디에 사십니까?',
                    'Freut mich! — 반갑습니다! / 만나서 기쁩니다!',
                    'Gleichfalls! — 저도 마찬가지입니다!'
                ]
            },
            {
                title: '핵심 문법 (Grammatik)',
                items: [
                    '1. 인칭대명사와 기본 동사 변화 (Personalpronomen und Konjugation): 규칙 동사(예: kommen, wohnen)는 어간에 -e, -st, -t, -en 등의 어미가 붙습니다. (예: ich komme, du kommst, er/sie/es kommt, wir kommen, ihr kommt, sie/Sie kommen)',
                    '2. 불규칙 동사 sein (~이다): ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind',
                    '3. 어순 (Wortstellung): 평서문에서는 동사가 항상 두 번째 자리에 옵니다. (예: Ich *komme* aus Korea.)',
                    '4. 의문사 의문문 (W-Fragen): 의문사(Wer, Woher, Wo, Was, Wie)가 맨 앞에 오고, 동사가 두 번째 자리에 옵니다. (예: Woher *kommst* du?)'
                ]
            },
            {
                title: '텍스트 읽기 (Lesetexte)',
                items: [
                    '**1. Ji-won aus Seoul**<br><span class="interactive-sentence" data-ko="안녕하세요!">Hallo!</span> <span class="interactive-sentence" data-ko="제 이름은 김지원입니다.">Ich heiße Ji-won Kim.</span> <span class="interactive-sentence" data-ko="제 이름은 지원이고 성은 김입니다.">Mein Vorname ist Ji-won und mein Familienname ist Kim.</span> <span class="interactive-sentence" data-ko="저는 24살입니다.">Ich bin vierundzwanzig Jahre alt.</span> <span class="interactive-sentence" data-ko="저는 한국 수도 서울에서 왔습니다.">Ich komme aus Südkorea, aus der Hauptstadt Seoul.</span> <span class="interactive-sentence" data-ko="지금 저는 베를린에 삽니다.">Jetzt wohne ich in Berlin.</span> <span class="interactive-sentence" data-ko="저는 대학생이고 생물학을 전공합니다.">Ich bin Studentin und studiere Biologie.</span> <span class="interactive-sentence" data-ko="저는 한국어, 영어, 그리고 독일어를 조금 할 줄 압니다.">Ich spreche Koreanisch, Englisch und ein bisschen Deutsch.</span> <span class="interactive-sentence" data-ko="제 취미는 등산입니다.">Mein Hobby ist Wandern.</span> <span class="interactive-sentence" data-ko="저는 독일이 매우 아름답다고 생각합니다.">Ich finde Deutschland sehr schön.</span>',
                    '**2. Thomas aus der Schweiz**<br><span class="interactive-sentence" data-ko="안녕하세요.">Guten Tag.</span> <span class="interactive-sentence" data-ko="제 이름은 토마스 프라이입니다.">Mein Name ist Thomas Frei.</span> <span class="interactive-sentence" data-ko="저는 32살입니다.">Ich bin zweiunddreißig Jahre alt.</span> <span class="interactive-sentence" data-ko="저는 스위스 취리히에서 왔습니다.">Ich komme aus der Schweiz, aus Zürich.</span> <span class="interactive-sentence" data-ko="저는 지금 독일 뮌헨에 삽니다.">Ich wohne jetzt in München, in Deutschland.</span> <span class="interactive-sentence" data-ko="제 직업은 건축가입니다.">Ich bin Architekt von Beruf.</span> <span class="interactive-sentence" data-ko="저는 어느 회사에서 일합니다.">Ich arbeite bei einer Firma.</span> <span class="interactive-sentence" data-ko="저는 기혼이고 아이가 두 명 있습니다.">Ich bin verheiratet und habe zwei Kinder.</span> <span class="interactive-sentence" data-ko="제 아내의 이름은 안나입니다.">Meine Frau heißt Anna.</span> <span class="interactive-sentence" data-ko="저는 독일어, 프랑스어, 이탈리아어를 합니다.">Ich spreche Deutsch, Französisch und Italienisch.</span> <span class="interactive-sentence" data-ko="저는 테니스 치는 것을 좋아하고 요리하는 것을 좋아합니다.">Ich spiele gern Tennis und koche gern.</span>',
                    '**3. Elena aus Spanien**<br><span class="interactive-sentence" data-ko="안녕!">Hi!</span> <span class="interactive-sentence" data-ko="나는 엘레나야.">Ich bin Elena.</span> <span class="interactive-sentence" data-ko="나는 21살이야.">Ich bin einundzwanzig Jahre alt.</span> <span class="interactive-sentence" data-ko="나는 스페인 마드리드에서 왔어.">Ich komme aus Spanien, aus Madrid.</span> <span class="interactive-sentence" data-ko="하지만 지금은 함부르크에 살아.">Aber momentan wohne ich in Hamburg.</span> <span class="interactive-sentence" data-ko="나는 어학 코스를 듣고 있어.">Ich mache einen Sprachkurs.</span> <span class="interactive-sentence" data-ko="나는 여기서 의학을 전공하고 싶어서 독일어를 배워.">Ich lerne Deutsch, denn ich möchte hier Medizin studieren.</span> <span class="interactive-sentence" data-ko="나는 미혼이야.">Ich bin ledig.</span> <span class="interactive-sentence" data-ko="나는 아이가 없어.">Ich habe keine Kinder.</span> <span class="interactive-sentence" data-ko="나는 스페인어와 영어를 조금 해.">Ich spreche Spanisch und ein bisschen Englisch.</span> <span class="interactive-sentence" data-ko="내 취미는 음악 듣기와 춤추기야.">Meine Hobbys sind Musik hören und Tanzen.</span>'
                ]
            },
            {
                title: '대화 (Das Gespräch)',
                items: [
                    'A: Entschuldigung, wie heißen Sie?',
                    'B: Ich heiße Marc. Und wer bist du?',
                    'A: Ich bin Sarah. Woher kommst du, Marc?',
                    'B: Ich komme aus Frankreich, aus Paris. Und wo wohnst du?',
                    'A: Ich wohne in Frankfurt. Was bist du von Beruf?',
                    'B: Ich bin Kellner. Ich arbeite in einem Restaurant.',
                    'A: Freut mich, Marc!',
                    'B: Gleichfalls, Sarah!'
                ]
            },
            {
                title: '단원 1 필수 어휘 (Wortschatz Lektion 1)',
                items: [
                    'heißen: ~라고 부르다',
                    'kommen: 오다',
                    'wohnen: 살다/거주하다',
                    'sein: ~이다 (be동사)',
                    'sprechen: 말하다',
                    'studieren: 대학에서 공부하다',
                    'lernen: 배우다',
                    'arbeiten: 일하다',
                    'der Vorname: 이름',
                    'der Familienname: 성',
                    'das Alter: 나이',
                    'das Land: 국가',
                    'die Stadt: 도시',
                    'die Hauptstadt: 수도',
                    'der Beruf: 직업',
                    'der Student / die Studentin: 대학생',
                    'der Architekt: 건축가',
                    'der Kellner: 웨이터',
                    'die Firma: 회사',
                    'das Hobby: 취미',
                    'verheiratet: 결혼한',
                    'ledig: 미혼의',
                    'das Kind / die Kinder: 아이',
                    'ein bisschen: 조금',
                    'jetzt: 지금',
                    'hier: 여기',
                    'aber: 하지만',
                    'und: 그리고',
                    'wer: 누구',
                    'woher: 어디로부터',
                    'wo: 어디에',
                    'was: 무엇',
                    'wie: 어떻게',
                    'freuen: 기쁘다',
                    'gleichfalls: 마찬가지로'
                ]
            }
        ]
    }
};
