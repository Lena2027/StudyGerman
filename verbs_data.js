const verbsData = [
    // 1. 비판 및 반대
    {id:1, w:"kritisieren", m:"비판하다", s:"Experten kritisieren die mangelnde Planung.", t:"전문가들은 계획 부족을 비판한다."},
    {id:2, w:"ablehnen", m:"거부/반대하다", s:"Die Mehrheit lehnt den neuen Gesetzentwurf ab.", t:"다수가 새로운 법안을 거부한다."},
    {id:3, w:"bemängeln", m:"결점을 지적하다", s:"Kunden bemängeln die schlechte Qualität.", t:"고객들은 나쁜 품질을 지적(불평)한다."},
    {id:4, w:"verurteilen", m:"비난/단죄하다", s:"Die Opposition verurteilt das Vorgehen der Regierung.", t:"야당은 정부의 조치를 강하게 비난한다."},
    {id:5, w:"widersprechen", m:"반박하다", s:"Ich muss Ihrer Ansicht widersprechen.", t:"저는 귀하의 견해에 반박해야겠습니다."},
    {id:6, w:"bestreiten", m:"부인하다", s:"Niemand kann bestreiten, dass Handlungsbedarf besteht.", t:"조치가 필요하다는 점은 아무도 부인할 수 없다."},
    {id:7, w:"anfechten", m:"이의를 제기하다", s:"Er ficht die Entscheidung des Gerichts an.", t:"그는 법원의 결정에 이의를 제기한다."},
    {id:8, w:"bezweifeln", m:"의심하다", s:"Ich bezweifle, dass diese Maßnahmen ausreichen.", t:"나는 이 조치들이 충분할지 의심스럽다."},
    {id:9, w:"warnen vor", m:"~에 대해 경고하다", s:"Forscher warnen vor den Folgen des Klimawandels.", t:"연구자들은 기후 변화의 결과에 대해 경고한다."},
    {id:10, w:"missbilligen", m:"불찬성하다", s:"Viele Bürger missbilligen die hohen Ausgaben.", t:"많은 시민이 높은 지출에 찬성하지 않는다."},

    // 2. 주장 및 강조
    {id:11, w:"behaupten", m:"주장하다", s:"Er behauptet, dass die Kosten sinken werden.", t:"그는 비용이 감소할 것이라고 주장한다."},
    {id:12, w:"betonen", m:"강조하다", s:"Der Minister betont die Wichtigkeit der Bildung.", t:"장관은 교육의 중요성을 강조한다."},
    {id:13, w:"hervorheben", m:"부각시키다", s:"Ich möchte diesen Punkt besonders hervorheben.", t:"나는 이 점을 특히 부각하고 싶다."},
    {id:14, w:"unterstreichen", m:"강조/뒷받침하다", s:"Die Studie unterstreicht den Trend zur Digitalisierung.", t:"그 연구는 디지털화 추세를 뒷받침한다."},
    {id:15, w:"darlegen", m:"설명/제시하다", s:"Sie legt ihre Argumente klar dar.", t:"그녀는 자신의 논거를 명확하게 제시한다."},
    {id:16, w:"erläutern", m:"상세히 설명하다", s:"Könnten Sie Ihr Konzept bitte näher erläutern?", t:"당신의 구상을 좀 더 상세히 설명해 주시겠어요?"},
    {id:17, w:"hinweisen auf", m:"~을 지적하다", s:"Ich möchte auf die Risiken hinweisen.", t:"나는 위험 요소들을 지적하고 싶다."},
    {id:18, w:"feststellen", m:"확인/규명하다", s:"Wir konnten eine positive Entwicklung feststellen.", t:"우리는 긍정적인 발전을 확인할 수 있었다."},
    {id:19, w:"plädieren für", m:"~을 옹호하다", s:"Viele plädieren für eine kürzere Arbeitszeit.", t:"많은 이들이 노동 시간 단축을 옹호한다."},
    {id:20, w:"versichern", m:"단언/보장하다", s:"Die Firma versichert, dass das Produkt sicher ist.", t:"그 회사는 제품이 안전하다고 단언한다."},

    // 3. 지지 및 요구
    {id:21, w:"befürworten", m:"지지하다", s:"Ich befürworte die Einführung einer CO2-Steuer.", t:"나는 탄소세 도입을 지지한다."},
    {id:22, w:"unterstützen", m:"지원하다", s:"Wir unterstützen lokale Unternehmen.", t:"우리는 지역 기업들을 지원한다."},
    {id:23, w:"fordern", m:"요구하다", s:"Die Gewerkschaft fordert 5% mehr Lohn.", t:"노동조합은 5%의 임금 인상을 요구한다."},
    {id:24, w:"verlangen", m:"요청/요구하다", s:"Kunden verlangen mehr Transparenz.", t:"고객들은 더 많은 투명성을 요구한다."},
    {id:25, w:"fördern", m:"장려/후원하다", s:"Der Staat fördert erneuerbare Energien.", t:"국가는 재생 에너지를 장려한다."},
    {id:26, w:"anstreben", m:"목표로 하다", s:"Wir streben eine friedliche Lösung an.", t:"우리는 평화로운 해결을 목표로 한다."},
    {id:27, w:"zustimmen", m:"동의하다", s:"Ich stimme Ihrem Vorschlag zu.", t:"나는 당신의 제안에 동의한다."},
    {id:28, w:"rechtfertigen", m:"정당화하다", s:"Nichts rechtfertigt diese Gewalt.", t:"그 어떤 것도 이 폭력을 정당화할 수 없다."},
    {id:29, w:"gewährleisten", m:"보장/확보하다", s:"Wir müssen die Sicherheit gewährleisten.", t:"우리는 안전을 보장해야 한다."},
    {id:30, w:"umsetzen", m:"실행/이행하다", s:"Die Reform muss schnell umgesetzt werden.", t:"개혁은 신속히 실행되어야 한다."},

    // 4. 원인 및 영향
    {id:31, w:"verursachen", m:"야기하다", s:"Der Unfall verursachte einen langen Stau.", t:"그 사고는 긴 교통 정체를 야기했다."},
    {id:32, w:"auslösen", m:"유발/촉발하다", s:"Die Nachricht löste eine Krise aus.", t:"그 소식은 위기를 촉발했다."},
    {id:33, w:"führen zu", m:"결과를 낳다", s:"Armut führt oft zu schlechter Gesundheit.", t:"가난은 종종 건강 악화라는 결과를 낳는다."},
    {id:34, w:"beeinflussen", m:"영향을 주다", s:"Werbung beeinflusst unser Kaufverhalten.", t:"광고는 우리의 소비 행태에 영향을 준다."},
    {id:35, w:"beeinträchtigen", m:"해를 끼치다", s:"Lärm beeinträchtigt die Lebensqualität.", t:"소음은 삶의 질을 저해한다."},
    {id:36, w:"gefährden", m:"위험에 빠뜨리다", s:"Das gefährdet den sozialen Frieden.", t:"그것은 사회적 평화를 위협한다."},
    {id:37, w:"bewirken", m:"초래/실현하다", s:"Diese Änderung wird wenig bewirken.", t:"이 변화는 별다른 효과를 거두지 못할 것이다."},
    {id:38, w:"beschleunigen", m:"가속화하다", s:"Die KI beschleunigt den Arbeitsprozess.", t:"인공지능이 업무 프로세스를 가속화한다."},
    {id:39, w:"verhindern", m:"방지/예방하다", s:"Wir müssen weitere Fehler verhindern.", t:"우리는 추가적인 실수를 방지해야 한다."},
    {id:40, w:"verschärfen", m:"악화시키다", s:"Der Krieg verschärft die Energiekrise.", t:"전쟁이 에너지 위기를 악화시킨다."},

    // 5. 분석 및 사회적 상호작용
    {id:41, w:"analysieren", m:"분석하다", s:"Wir müssen die Daten genau analysieren.", t:"우리는 데이터를 정확히 분석해야 한다."},
    {id:42, w:"untersuchen", m:"조사/검토하다", s:"Die Polizei untersucht den Fall.", t:"경찰이 그 사건을 조사한다."},
    {id:43, w:"reformieren", m:"개혁하다", s:"Das Rentensystem muss reformiert werden.", t:"연금 제도는 개혁되어야 한다."},
    {id:44, w:"bewältigen", m:"극복/해결하다", s:"Gemeinsam können wir die Krise bewältigen.", t:"함께라면 우리는 위기를 극복할 수 있다."},
    {id:45, w:"eingreifen", m:"개입하다", s:"Der Staat sollte in den Markt eingreifen.", t:"국가는 시장에 개입해야 한다."},
    {id:46, w:"investieren", m:"투자하다", s:"Wir investieren in die Zukunft.", t:"우리는 미래에 투자한다."},
    {id:47, w:"ausbeuten", m:"착취하다", s:"Firmen dürfen Arbeiter nicht ausbeuten.", t:"기업들은 노동자를 착취해서는 안 된다."},
    {id:48, w:"benachteiligen", m:"불이익을 주다", s:"Das Gesetz benachteiligt Frauen.", t:"그 법은 여성들에게 불이익을 준다."},
    {id:49, w:"diskriminieren", m:"차별하다", s:"Niemand darf wegen seiner Herkunft diskriminiert werden.", t:"누구도 출신 때문에 차별받아서는 안 된다."},
    {id:50, w:"profitieren von", m:"이익을 얻다", s:"Viele profitieren von der neuen Regelung.", t:"많은 이가 새로운 규정으로부터 이익을 얻는다."}
];
