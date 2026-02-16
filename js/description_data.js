const descriptionData = [
    // 1. 구조와 복잡성
    {id:1, w:"vielschichtig", m:"다층적인/복합적인", s:"Das Problem ist sehr vielschichtig.", t:"그 문제는 매우 복합적이다."},
    {id:2, w:"facettenreich", m:"다면적인/다채로운", s:"Berlin ist eine facettenreiche Stadt.", t:"베를린은 다면적인(다양한 매력이 있는) 도시다."},
    {id:3, w:"widersprüchlich", m:"모순되는", s:"Die Zeugenaussagen sind widersprüchlich.", t:"증인들의 진술이 서로 모순된다."},
    {id:4, w:"einseitig", m:"일방적인/편향된", s:"Das ist eine sehr einseitige Sichtweise.", t:"그것은 매우 편향된 시각이다."},
    {id:5, w:"lückenhaft", m:"빈틈이 많은/불완전한", s:"Seine Erinnerungen sind leider lückenhaft.", t:"그의 기억은 안타깝게도 불완전하다."},
    {id:6, w:"überschaubar", m:"한눈에 들어오는/제한적인", s:"Die Kosten bleiben überschaubar.", t:"비용은 감당 가능한(제한적인) 수준이다."},
    {id:7, w:"umfassend", m:"포괄적인/광범위한", s:"Wir brauchen eine umfassende Reform.", t:"우리는 포괄적인 개혁이 필요하다."},
    {id:8, w:"kompakt", m:"조밀한/간결한", s:"Das ist ein kompakter Kurs für Anfänger.", t:"이것은 초보자를 위한 압축된 코스다."},

    // 2. 중요도와 영향력
    {id:9, w:"maßgeblich", m:"결정적인/지대한", s:"Er war maßgeblich am Erfolg beteiligt.", t:"그는 성공에 결정적인 역할을 했다."},
    {id:10, w:"wesentlich", m:"본질적인/핵심적인", s:"Das ist ein wesentlicher Unterschied.", t:"그것은 본질적인 차이다."},
    {id:11, w:"gravierend", m:"심각한/중대한", s:"Die Folgen sind gravierender als gedacht.", t:"결과가 생각보다 더 심각하다."},
    {id:12, w:"marginal", m:"미미한/사소한", s:"Der Unterschied ist nur marginal.", t:"차이가 아주 미미하다."},
    {id:13, w:"grundlegend", m:"근본적인/기초적인", s:"Wir müssen grundlegende Fragen klären.", t:"우리는 근본적인 질문들을 해결해야 한다."},
    {id:14, w:"unverzichtbar", m:"필수불가결한", s:"Teamarbeit ist unverzichtbar.", t:"팀워크는 필수불가결하다."},
    {id:15, w:"ausschlaggebend", m:"결정적인(승패를 가르는)", s:"Das Tor war ausschlaggebend für den Sieg.", t:"그 골이 승리에 결정적이었다."},
    {id:16, w:"belanglos", m:"무의미한/하찮은", s:"Das sind belanglose Details.", t:"그것들은 하찮은 세부 사항들이다."},

    // 3. 명확성과 타당성
    {id:17, w:"eindeutig", m:"명백한/분명한", s:"Die Beweise sind eindeutig.", t:"증거가 명백하다."},
    {id:18, w:"vage", m:"모호한/희미한", s:"Er gab nur eine vage Antwort.", t:"그는 모호한 답변만을 내놓았다."},
    {id:19, w:"plausibel", m:"타당해 보이는/그럴듯한", s:"Seine Erklärung klingt plausibel.", t:"그의 설명은 타당하게 들린다."},
    {id:20, w:"fundiert", m:"근거가 탄탄한/전문적인", s:"Das ist eine fundierte Analyse.", t:"그것은 근거가 탄탄한 분석이다."},
    {id:21, w:"fragwürdig", m:"의문스러운/수상쩍은", s:"Das ist eine fragwürdige Methode.", t:"그것은 의문스러운 방식이다."},
    {id:22, w:"offensichtlich", m:"뻔한/명백한", s:"Das ist ein offensichtlicher Fehler.", t:"그것은 명백한 실수다."},
    {id:23, w:"unmissverständlich", m:"오해의 여지가 없는", s:"Sie gab ihm ein unmissverständliches Zeichen.", t:"그녀는 그에게 오해의 여지가 없는 신호를 주었다."},
    {id:24, w:"abstrakt", m:"추상적인", s:"Das Thema ist zu abstrakt für Kinder.", t:"그 주제는 아이들에게 너무 추상적이다."},

    // 4. 진행 상태와 연속성
    {id:25, w:"kontinuierlich", m:"지속적인/끊임없는", s:"Die Preise steigen kontinuierlich.", t:"물가가 지속적으로 오르고 있다."},
    {id:26, w:"sprunghaft", m:"급격한/변덕스러운", s:"Die Nachfrage stieg sprunghaft an.", t:"수요가 급격하게 증가했다."},
    {id:27, w:"beständig", m:"일관된/변함없는", s:"Wir brauchen beständiges Wachstum.", t:"우리는 꾸준한 성장이 필요하다."},
    {id:28, w:"vorübergehend", m:"일시적인", s:"Das ist nur ein vorübergehendes Problem.", t:"그것은 단지 일시적인 문제일 뿐이다."},
    {id:29, w:"endgültig", m:"최종적인/확정된", s:"Das ist meine endgültige Entscheidung.", t:"그것은 나의 최종 결정이다."},
    {id:30, w:"schleichend", m:"서서히 진행되는", s:"Das ist ein schleichender Prozess.", t:"그것은 서서히 진행되는 과정이다."},
    {id:31, w:"nachhaltig", m:"지속 가능한/오래가는", s:"Das hat mich nachhaltig beeindruckt.", t:"그것은 나에게 지속적인 인상을 남겼다."},
    {id:32, w:"radikal", m:"급진적인/철저한", s:"Wir brauchen radikale Änderungen.", t:"우리는 급진적인 변화가 필요하다."},

    // 5. 물리적/사회적 상태
    {id:33, w:"marode", m:"낡아빠진/노후한", s:"Die Brücke ist marode.", t:"그 다리는 낡아서 붕괴 직전이다."},
    {id:34, w:"stabil", m:"안정적인", s:"Die Lage ist momentan stabil.", t:"상황은 현재 안정적이다."},
    {id:35, w:"prekär", m:"불안정한/위태로운", s:"Er lebt in prekären Verhältnissen.", t:"그는 위태로운 환경에서 살고 있다."},
    {id:36, w:"erstklassig", m:"일류의/최고급의", s:"Der Service war erstklassig.", t:"서비스가 최고급이었다."},
    {id:37, w:"veraltet", m:"구식의/시대에 뒤떨어진", s:"Diese Software ist total veraltet.", t:"이 소프트웨어는 완전히 구식이다."},
    {id:38, w:"fortschrittlich", m:"진보적인/발전된", s:"Das ist eine sehr fortschrittliche Idee.", t:"그것은 매우 진보적인 아이디어다."},
    {id:39, w:"effizient", m:"효율적인", s:"Wir müssen effizienter arbeiten.", t:"우리는 더 효율적으로 일해야 한다."},
    {id:40, w:"mangelhaft", m:"불충분한/결함이 있는", s:"Die Qualität der Ware ist mangelhaft.", t:"상품의 품질이 미달이다."}
];
