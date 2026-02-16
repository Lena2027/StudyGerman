// 리스트 생성 기능
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('word-list-container');
    
    // 데이터가 연결되지 않았을 경우 에러 방지
    if (typeof adjektivData === 'undefined') {
        console.error("데이터 파일(words_data.js)이 로드되지 않았습니다.");
        container.innerHTML = "<p>데이터를 불러올 수 없습니다.</p>";
        return;
    }

    // 카드 생성 루프
    adjektivData.forEach(item => {
        // 작은따옴표(')가 있는 문장 처리를 위해 escape
        const safeSentence = item.s.replace(/'/g, "\\'");
        
        container.innerHTML += `
            <div class="group bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between h-40" 
                 onclick="openWordModal('${item.id}', '${item.w}', '${safeSentence}', '${item.m}', '${item.t}')">
                <div class="flex justify-between items-start">
                    <span class="text-[10px] font-bold text-slate-300">NO.${item.id}</span>
                    <span class="text-[10px] font-bold px-2 py-1 rounded-md border bg-diskussion-50 text-diskussion-600 border-diskussion-100">
                        Adj
                    </span>
                </div>
                <div class="text-center">
                    <div class="font-bold text-slate-800 text-lg group-hover:text-diskussion-600 transition-colors mb-1 leading-tight truncate px-1">${item.w}</div>
                    <div class="text-xs text-slate-400 font-medium truncate px-1">${item.m}</div>
                </div>
                <div class="text-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <i class="ph-bold ph-magnifying-glass-plus text-diskussion-400"></i>
                </div>
            </div>
        `;
    });
});

// 모달(팝업) 열기 기능
function openWordModal(id, w, s, m, t) {
    document.getElementById('modal-word').innerText = w;
    document.getElementById('modal-sentence').innerText = s;
    document.getElementById('modal-meaning').innerText = m;
    document.getElementById('modal-trans').innerText = t;
    
    const modal = document.getElementById('word-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden'; // 배경 스크롤 막기
}

// 모달(팝업) 닫기 기능
function closeWordModal() { 
    const modal = document.getElementById('word-modal');
    modal.classList.add('hidden'); 
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto'; // 배경 스크롤 풀기
}

// 퀴즈 관련 변수
let pool = []; 
let currIdx = 0; 
let score = 0;

// 퀴즈 시작
function startQuiz() {
    // 전체 데이터에서 랜덤으로 10개 뽑기
    pool = [...adjektivData].sort(() => 0.5 - Math.random()).slice(0, 10);
    
    document.getElementById('q-init').classList.add('hidden');
    document.getElementById('q-play').classList.remove('hidden');
    score = 0;
    currIdx = 0;
    showQ();
}

// 문제 표시
function showQ() {
    const item = pool[currIdx];
    document.getElementById('q-status').innerText = `Question ${currIdx + 1} / 10`;
    
    // 진행바 업데이트
    const percent = ((currIdx + 1) / 10) * 100;
    document.getElementById('q-progress-bar').style.width = `${percent}%`;

    // 힌트와 문제 설정
    document.getElementById('q-meaning-hint').innerText = `뜻: ${item.m}`;
    // 정답 단어를 빈칸(____)으로 변경 (대소문자 무시)
    const questionText = item.s.replace(new RegExp(item.w, 'gi'), "_______");
    document.getElementById('q-text').innerText = questionText;
    
    // 보기 버튼 생성
    const optsDiv = document.getElementById('q-options'); 
    optsDiv.innerHTML = '';
    
    // 정답 1개 + 오답 3개 랜덤 추출
    let choices = [item.w];
    while(choices.length < 4) {
        let randomAdj = adjektivData[Math.floor(Math.random()*adjektivData.length)].w;
        if(!choices.includes(randomAdj)) choices.push(randomAdj);
    }
    
    // 보기 섞어서 버튼 만들기
    choices.sort(() => 0.5 - Math.random()).forEach(choice => {
        const btn = document.createElement('button');
        btn.className = "w-full text-left p-5 rounded-xl border border-slate-200 font-bold text-slate-600 hover:border-diskussion-500 hover:text-diskussion-600 hover:bg-diskussion-50 transition-all cursor-pointer bg-white shadow-sm";
        btn.innerText = choice;
        btn.onclick = () => {
            // 클릭 시 모든 버튼 비활성화
            document.querySelectorAll('#q-options button').forEach(b => b.disabled = true);
            
            if(choice === item.w) { 
                // 정답일 경우 초록색
                btn.className = "w-full text-left p-5 rounded-xl border border-green-500 bg-green-50 text-green-700 font-bold shadow-md";
                score++; 
            } else { 
                // 오답일 경우 빨간색
                btn.className = "w-full text-left p-5 rounded-xl border border-red-500 bg-red-50 text-red-700 font-bold shadow-md";
            }
            // '다음 문제' 버튼 활성화
            document.getElementById('next-btn').disabled = false;
        };
        optsDiv.appendChild(btn);
    });
}

// 다음 문제로 넘어가기
function nextQ() {
    currIdx++;
    if(currIdx < 10) { 
        showQ(); 
        document.getElementById('next-btn').disabled = true; 
    } else { 
        // 10문제 다 풀었을 때 결과 화면 표시
        document.getElementById('q-play').classList.add('hidden'); 
        document.getElementById('q-result').classList.remove('hidden'); 
        document.getElementById('score-text').innerText = `${score} / 10`; 
    }
}
