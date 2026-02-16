const psychologyData = [
    // 1. 긍정적인 성격 및 강점
    {id:1, w:"zielstrebig", m:"목표 지향적인", s:"Sie arbeitet sehr zielstrebig an ihrer Karriere.", t:"그녀는 자신의 커리어를 위해 매우 목표 지향적으로 일한다."},
    {id:2, w:"zuverlässig", m:"신뢰할 수 있는", s:"Ein zuverlässiger Partner ist in der Krise wichtig.", t:"위기 상황에서는 신뢰할 수 있는 파트너가 중요하다."},
    {id:3, w:"belastbar", m:"스트레스에 강한", s:"In diesem Job muss man psychisch belastbar sein.", t:"이 직업에서는 정신적으로 압박을 잘 견뎌내야 한다."},
    {id:4, w:"aufgeschlossen", m:"마음이 열린/사교적인", s:"Er ist neuen Ideen gegenüber sehr aufgeschlossen.", t:"그는 새로운 아이디어에 대해 매우 개방적이다."},
    {id:5, w:"einfühlsam", m:"공감 능력이 있는", s:"Ein Lehrer sollte einfühlsam auf Schüler eingehen.", t:"교사는 학생들에게 공감하며 다가가야 한다."},
    {id:6, w:"gewissenhaft", m:"성실한/양심적인", s:"Er erledigt alle Aufgaben gewissenhaft.", t:"그는 모든 업무를 아주 성실하게 처리한다."},
    {id:7, w:"authentisch", m:"진정성 있는", s:"Er wirkt sehr authentisch und ehrlich.", t:"그는 매우 진정성 있고 정직해 보인다."},
    {id:8, w:"kompromissbereit", m:"타협할 준비가 된", s:"In einer Partnerschaft muss man kompromissbereit sein.", t:"파트너 관계에서는 타협할 준비가 되어 있어야 한다."},
    {id:9, w:"tatkräftig", m:"실행력 있는/적극적인", s:"Wir brauchen tatkräftige Unterstützung im Team.", t:"우리 팀에는 실행력 있는 지원이 필요하다."},
    {id:10, w:"diszipliniert", m:"절제된/규율 잡힌", s:"Ohne diszipliniertes Lernen schafft man das B2-Niveau nicht.", t:"절제된 학습 없이는 B2 수준을 달성할 수 없다."},

    // 2. 부정적인 성격 및 약점
    {id:11, w:"überheblich", m:"오만한", s:"Sein überhebliches Auftreten nervt die Kollegen.", t:"그의 오만한 태도는 동료들을 짜증 나게 한다."},
    {id:12, w:"unberechenbar", m:"예측 불가능한", s:"Der Chef ist leider sehr unberechenbar.", t:"상사가 안타깝게도 매우 변덕스럽다."},
    {id:13, w:"stur", m:"고집 센", s:"Er ist zu stur, um seinen Fehler zuzugeben.", t:"그는 너무 고집이 세서 자신의 실수를 인정하지 않는다."},
    {id:14, w:"oberflächlich", m:"피상적인", s:"Viele Kontakte in sozialen Medien sind oberflächlich.", t:"SNS에서의 많은 관계는 피상적이다."},
    {id:15, w:"gleichgültig", m:"무관심한", s:"Man darf sozialen Problemen nicht gleichgültig gegenüberstehen.", t:"사회적 문제에 무관심해서는 안 된다."},
    {id:16, w:"egoistisch", m:"이기적인", s:"Egoistisches Verhalten schadet der Gemeinschaft.", t:"이기적인 행동은 공동체에 해를 끼친다."},
    {id:17, w:"eitel", m:"허영심 많은", s:"Er ist sehr eitel und achtet nur auf sein Aussehen.", t:"그는 매우 허영심이 많고 외모에만 신경을 쓴다."},
    {id:18, w:"reizbar", m:"화를 잘 내는", s:"Wenn er wenig schläft, ist er sehr reizbar.", t:"그는 잠을 적게 자면 매우 예민해진다."},
    {id:19, w:"herrisch", m:"권위적인/독단적인", s:"Niemand mag seine herrische Art.", t:"아무도 그의 독단적인 방식을 좋아하지 않는다."},
    {id:20, w:"heuchlerisch", m:"위선적인", s:"Seine Entschuldigung wirkte heuchlerisch.", t:"그의 사과는 위선적으로 보였다."},

    // 3. 세분화된 감정 상태
    {id:21, w:"euphorisch", m:"희열에 찬", s:"Nach dem Sieg war die Stimmung euphorisch.", t:"승리 후 분위기는 희열에 차 있었다."},
    {id:22, w:"frustriert", m:"좌절한/답답한", s:"Er ist frustriert, weil er keine Arbeit findet.", t:"그는 일자리를 찾지 못해 답답해하고 있다."},
    {id:23, w:"verunsichert", m:"불안한/혼란스러운", s:"Die ständigen Änderungen haben die Kunden verunsichert.", t:"계속되는 변경 사항들이 고객들을 불안하게 만들었다."},
    {id:24, w:"erleichtert", m:"안도하는", s:"Ich bin erleichtert, dass alles gut gegangen ist.", t:"모든 것이 잘 풀려서 안심이다."},
    {id:25, w:"melancholisch", m:"우울한/애수 어린", s:"Der Herbst macht viele Menschen melancholisch.", t:"가을은 많은 사람을 센티멘털하게 만든다."},
    {id:26, w:"empört", m:"분개한", s:"Die Bürger sind empört über die Preiserhöhung.", t:"시민들은 가격 인상에 분개하고 있다."},
    {id:27, w:"zuversichtlich", m:"자신감 있는/낙관하는", s:"Ich bin zuversichtlich, dass ich die Prüfung bestehe.", t:"나는 시험에 합격할 것이라고 확신한다."},
    {id:28, w:"einsam", m:"외로운", s:"Trotz vieler Freunde fühlt er sich einsam.", t:"친구가 많음에도 불구하고 그는 외로움을 느낀다."},
    {id:29, w:"besorgt", m:"걱정하는", s:"Die Eltern sind besorgt um die Zukunft ihrer Kinder.", t:"부모들은 자녀의 미래를 걱정하고 있다."},
    {id:30, w:"skeptisch", m:"회의적인", s:"Ich bin skeptisch, ob der Plan funktioniert.", t:"이 계획이 정말 작동할지 회의적이다."},

    // 4. 심리적 역량 및 개념
    {id:31, w:"das Selbstvertrauen", m:"자신감", s:"Sport kann das Selbstvertrauen stärken.", t:"운동은 자신감을 강화할 수 있다."},
    {id:32, w:"die Empathie", m:"공감 능력", s:"Empathie ist eine wichtige soziale Kompetenz.", t:"공감은 중요한 사회적 역량이다."},
    {id:33, w:"das Durchsetzungsvermögen", m:"추진력/주관", s:"Als Chef braucht man Durchsetzungsvermögen.", t:"리더에게는 추진력(자기주장을 관철하는 능력)이 필요하다."},
    {id:34, w:"die Belastbarkeit", m:"회복탄력성/인내력", s:"Der Test prüft die psychische Belastbarkeit.", t:"그 테스트는 정신적 회복탄력성을 확인한다."},
    {id:35, w:"die Hemmung", m:"억제/주저함", s:"Er hat Hemmungen, vor Leuten zu sprechen.", t:"그는 사람들 앞에서 말하는 것에 주저함이 있다."},
    {id:36, w:"das Durchhaltevermögen", m:"끈기/지구력", s:"Beim Marathon braucht man Durchhaltevermögen.", t:"마라톤에서는 끈기가 필요하다."},
    {id:37, w:"die Wertschätzung", m:"존중/인정", s:"Mitarbeiter brauchen Wertschätzung für ihre Arbeit.", t:"직원들은 자신의 업무에 대한 인정을 필요로 한다."},
    {id:38, w:"das Schamgefühl", m:"수치심", s:"Das Schamgefühl ist von Kultur zu Kultur verschieden.", t:"수치심은 문화마다 다르다."},
    {id:39, w:"die Intuition", m:"직관", s:"Manchmal sollte man auf seine Intuition hören.", t:"가끔은 자신의 직관에 귀를 기울여야 한다."},
    {id:40, w:"die Motivation", m:"동기 부여", s:"Ohne Motivation fällt das Lernen schwer.", t:"동기 부여 없이는 공부가 어렵다."}
];
