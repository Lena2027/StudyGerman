const adjektivData = [
    // 1. 경제적 가치 및 성과
    {id:1, w:"rentabel", m:"수익성이 있는", s:"Das Projekt ist auf lange Sicht nicht rentabel.", t:"그 프로젝트는 장기적으로 수익성이 없다."},
    {id:2, w:"kostspielig", m:"돈이 많이 드는", s:"Die Umstellung auf E-Autos ist sehr kostspielig.", t:"전기차로의 전환은 비용이 매우 많이 든다."},
    {id:3, w:"effizient", m:"효율적인", s:"Wir brauchen effizientere Methoden zur Energiegewinnung.", t:"우리는 더 효율적인 에너지 확보 방법이 필요하다."},
    {id:4, w:"konkurrenzfähig", m:"경쟁력 있는", s:"Deutsche Firmen müssen weltweit konkurrenzfähig bleiben.", t:"독일 기업들은 세계적으로 경쟁력을 유지해야 한다."},
    {id:5, w:"lukrativ", m:"돈이 되는/유리한", s:"Der Handel mit Daten ist ein lukratives Geschäft.", t:"데이터 거래는 수익성이 좋은 사업이다."},
    {id:6, w:"produktiv", m:"생산적인", s:"Homeoffice kann die Mitarbeiter produktiver machen.", t:"재택근무는 직원들을 더 생산적으로 만들 수 있다."},
    {id:7, w:"stagnierend", m:"정체된", s:"Die Wirtschaft leidet unter stagnierenden Löhnen.", t:"경제가 정체된 임금으로 인해 고통받고 있다."},
    {id:8, w:"marode", m:"노후한/파산 직전의", s:"Der Staat muss die marode Infrastruktur sanieren.", t:"국가는 무너져가는 사회 기반 시설을 보수해야 한다."},
    {id:9, w:"marktgerecht", m:"시장 상황에 맞는", s:"Wir brauchen marktgerechte Lösungen für die Krise.", t:"우리는 위기에 대응하는 시장 적합한 해결책이 필요하다."},
    {id:10, w:"verschuldet", m:"빚을 진", s:"Viele Haushalte sind extrem hoch verschuldet.", t:"많은 가계가 매우 높은 부채를 안고 있다."},

    // 2. 사회적 갈등 및 문제점
    {id:11, w:"umstritten", m:"논란이 되는", s:"Die neue Steuerreform ist politisch sehr umstritten.", t:"새로운 세제 개혁은 정치적으로 매우 논란이 많다."},
    {id:12, w:"kontrovers", m:"논쟁적인", s:"Über dieses Thema wurde sehr kontrovers diskutiert.", t:"이 주제에 대해 매우 논쟁적인 토론이 이루어졌다."},
    {id:13, w:"benachteiligt", m:"소외된/불이익 받는", s:"Kinder aus benachteiligten Familien brauchen Hilfe.", t:"소외 계층의 아이들은 도움이 필요하다."},
    {id:14, w:"diskriminierend", m:"차별적인", s:"Solche Regeln wirken oft diskriminierend.", t:"그런 규칙들은 종종 차별적인 효과를 낸다."},
    {id:15, w:"problematisch", m:"문제가 있는", s:"Der hohe Fleischkonsum ist ökologisch problematisch.", t:"높은 육류 소비는 환경적으로 문제가 있다."},
    {id:16, w:"ungerecht", m:"불공평한", s:"Die Einkommensverteilung ist weltweit ungerecht.", t:"소득 분배는 전 세계적으로 불공평하다."},
    {id:17, w:"privilegiert", m:"특권을 가진", s:"Privilegierte Gruppen haben besseren Zugang zu Bildung.", t:"특권층은 교육에 더 나은 접근권을 가진다."},
    {id:18, w:"oberflächlich", m:"피상적인", s:"Die Diskussion blieb leider sehr oberflächlich.", t:"토론이 아쉽게도 매우 피상적인 수준에 머물렀다."},
    {id:19, w:"besorgniserregend", m:"걱정스러운", s:"Die Jugendarbeitslosigkeit ist besorgniserregend.", t:"청년 실업률이 걱정스러운 수준이다."},
    {id:20, w:"überfordert", m:"감당 못 하는/버거운", s:"Das Gesundheitssystem ist völlig überfordert.", t:"보건 의료 체계가 완전히 과부하 상태다."},

    // 3. 변화와 영향
    {id:21, w:"gravierend", m:"심각한/중대한", s:"Der Klimawandel hat gravierende Folgen.", t:"기후 변화는 심각한 결과를 초래한다."},
    {id:22, w:"erheblich", m:"상당한", s:"Die Kosten sind erheblich gestiegen.", t:"비용이 상당히 상승했다."},
    {id:23, w:"rasant", m:"급격한", s:"Die Technik entwickelt sich rasant weiter.", t:"기술이 급격하게 발전하고 있다."},
    {id:24, w:"nachhaltig", m:"지속 가능한", s:"Wir müssen nachhaltiger mit Ressourcen umgehen.", t:"우리는 자원을 더 지속 가능하게 사용해야 한다."},
    {id:25, w:"drastisch", m:"급격한/철저한", s:"Die Regierung plant drastische Kürzungen.", t:"정부는 대대적인 감축을 계획하고 있다."},
    {id:26, w:"langfristig", m:"장기적인", s:"Wir brauchen eine langfristige Strategie.", t:"우리는 장기적인 전략이 필요하다."},
    {id:27, w:"kurzfristig", m:"단기적인", s:"Das ist nur eine kurzfristige Lösung.", t:"그것은 단지 단기적인 해결책일 뿐이다."},
    {id:28, w:"fatal", m:"치명적인", s:"Eine Fehlentscheidung hätte fatale Auswirkungen.", t:"잘못된 결정은 치명적인 영향을 미칠 것이다."},
    {id:29, w:"absehbar", m:"예견 가능한", s:"Ein Ende der Krise ist noch nicht absehbar.", t:"위기의 끝이 아직 보이지 않는다."},
    {id:30, w:"kontinuierlich", m:"지속적인", s:"Die Preise steigen kontinuierlich.", t:"물가가 지속적으로 오르고 있다."},

    // 4. 구조 및 성격
    {id:31, w:"komplex", m:"복잡한", s:"Das Steuersystem ist viel zu komplex.", t:"조세 제도가 너무 복잡하다."},
    {id:32, w:"wesentlich", m:"본질적인/핵심적인", s:"Das ist ein wesentlicher Punkt der Debatte.", t:"그것이 토론의 핵심적인 지점이다."},
    {id:33, w:"relevant", m:"유의미한/관련 있는", s:"Diese Daten sind für uns nicht relevant.", t:"이 데이터들은 우리에게 유의미하지 않다."},
    {id:34, w:"grundlegend", m:"근본적인", s:"Wir brauchen grundlegende Reformen.", t:"우리는 근본적인 개혁이 필요하다."},
    {id:35, w:"innovativ", m:"혁신적인", s:"Das Unternehmen ist für seine innovativen Ideen bekannt.", t:"그 회사는 혁신적인 아이디어로 유명하다."},
    {id:36, w:"erforderlich", m:"필요한/요구되는", s:"Massive Investitionen sind erforderlich.", t:"막대한 투자가 요구된다."},
    {id:37, w:"transparent", m:"투명한", s:"Politische Entscheidungen müssen transparent sein.", t:"정치적 결정은 투명해야 한다."},
    {id:38, w:"bürokratisch", m:"관료적인", s:"Die Prozesse sind zu bürokratisch und langsam.", t:"절차가 지나치게 관료적이고 느리다."},
    {id:39, w:"vielfältig", m:"다양한", s:"Die Gründe für die Krise sind vielfältig.", t:"위기의 원인은 다양하다."},
    {id:40, w:"unverzichtbar", m:"필수불가결한", s:"Internet ist heute unverzichtbar.", t:"오늘날 인터넷은 필수불가결하다."},

    // 5. 태도 및 관점
    {id:41, w:"skeptisch", m:"회의적인", s:"Viele Bürger sind gegenüber KI skeptisch.", t:"많은 시민이 AI에 대해 회의적이다."},
    {id:42, w:"optimistisch", m:"낙관적인", s:"Ich bin optimistisch, was die Zukunft angeht.", t:"나는 미래에 대해 낙관적이다."},
    {id:43, w:"pessimistisch", m:"비관적인", s:"Er hat eine pessimistische Weltsicht.", t:"그는 비관적인 세계관을 가지고 있다."},
    {id:44, w:"überzeugt", m:"확신하는", s:"Ich bin davon überzeugt, dass wir Erfolg haben.", t:"나는 우리가 성공할 것이라고 확신한다."},
    {id:45, w:"objektiv", m:"객관적인", s:"Wir brauchen eine objektive Berichterstattung.", t:"우리는 객관적인 보도가 필요하다."},
    {id:46, w:"subjektiv", m:"주관적인", s:"Das ist nur meine subjektive Meinung.", t:"그것은 단지 나의 주관적인 의견일 뿐이다."},
    {id:47, w:"glaubwürdig", m:"신뢰할 수 있는", s:"Seine Argumente klingen nicht glaubwürdig.", t:"그의 논거는 신뢰할 수 있게 들리지 않는다."},
    {id:48, w:"eindeutig", m:"명확한", s:"Das Ergebnis der Studie ist eindeutig.", t:"연구 결과는 명확하다."},
    {id:49, w:"realistisch", m:"현실적인", s:"Man muss realistische Ziele setzen.", t:"현실적인 목표를 세워야 한다."},
    {id:50, w:"utopisch", m:"비현실적인", s:"Vollbeschäftigung ist momentan utopisch.", t:"완전 고용은 현재로서 비현실적이다."},

    // 6. 이슈
    {id:51, w:"digital", m:"디지털의", s:"Die digitale Transformation verändert alles.", t:"디지털 전환이 모든 것을 바꾸고 있다."},
    {id:52, w:"demografisch", m:"인구학적인", s:"Der demografische Wandel ist eine Gefahr.", t:"인구학적 변화는 위협이다."},
    {id:53, w:"vielversprechend", m:"유망한", s:"Das ist ein vielversprechender Ansatz.", t:"그것은 유망한 접근 방식이다."},
    {id:54, w:"konstruktiv", m:"건설적인", s:"Wir führen eine konstruktive Diskussion.", t:"우리는 건설적인 토론을 하고 있다."},
    {id:55, w:"zwingend", m:"피할 수 없는/강제적인", s:"Reformen sind zwingend notwendig.", t:"개혁은 반드시 필요하다."},
    {id:56, w:"paradox", m:"역설적인", s:"Es ist paradox, dass die Preise trotz Krise steigen.", t:"위기에도 불구하고 물가가 오르는 것은 역설적이다."},
    {id:57, w:"vernünftig", m:"합리적인", s:"Wir müssen eine vernünftige Lösung finden.", t:"우리는 합리적인 해결책을 찾아야 한다."},
    {id:58, w:"vorbildlich", m:"모범적인", s:"Die Firma verhält sich ökologisch vorbildlich.", t:"그 회사는 환경적으로 모범적인 행보를 보인다."},
    {id:59, w:"flexibel", m:"유연한", s:"Arbeitszeiten müssen flexibler werden.", t:"근로 시간은 더 유연해져야 한다."},
    {id:60, w:"effektiv", m:"효과적인", s:"Das ist die effektivste Methode gegen Armut.", t:"그것이 빈곤에 대항하는 가장 효과적인 방법이다."}
];
