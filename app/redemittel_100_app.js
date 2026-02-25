document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('word-list-container');
    
    if (typeof redemittelData === 'undefined') {
        alert("데이터 로드 실패! redemittel_100_data.js 경로를 확인하세요.");
        return;
    }

    redemittelData.forEach(item => {
        // 문장에 특수문자(')가 있을 경우를 대비한 처리
        const safeSentence = item.s.replace(/'/g, "\\'");
        
        container.innerHTML += `
            <div class="group bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between h-36" 
                 onclick="openPatternModal('${item.p}', '${item.m}', '${safeSentence}', '${item.t}')">
                <div class="flex justify-between items-start">
                    <span class="text-[10px] font-bold text-slate-300">NO.${item.id}</span>
                    <span class="text-[10px] font-bold px-2 py-1 rounded-md border bg-emerald-50 text-emerald-600 border-emerald-100">
                        ${item.c}
                    </span>
                </div>
                <div class="text-center">
                    <div class="font-bold text-slate-800 text-lg group-hover:text-emerald-600 transition-colors mb-2 truncate px-1">${item.p}</div>
                    <div class="text-xs text-slate-400 font-medium truncate px-1">${item.m}</div>
                </div>
                <div class="text-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <i class="ph-bold ph-plus-circle text-emerald-400"></i>
                </div>
            </div>
        `;
    });
});

// 모달 열기 함수 (예문과 해석 추가)
function openPatternModal(p, m, s, t) {
    document.getElementById('modal-pattern').innerText = p;
    document.getElementById('modal-meaning').innerText = m;
    document.getElementById('modal-sentence').innerText = s; // 예문
    document.getElementById('modal-trans').innerText = t;    // 해석
    
    document.getElementById('pattern-modal').classList.remove('hidden');
    document.getElementById('pattern-modal').classList.add('flex');
}

function closePatternModal() {
    document.getElementById('pattern-modal').classList.add('hidden');
    document.getElementById('pattern-modal').classList.remove('flex');
}

// 퀴즈 로직 (동일함)
let pool = [];
let currIdx = 0;
let score = 0;

function startQuiz() {
    pool = [...redemittelData].sort(() => 0.5 - Math.random()).slice(0, 10);
    document.getElementById('q-init').classList.add('hidden');
    document.getElementById('q-play').classList.remove('hidden');
    score = 0;
    currIdx = 0;
    showQ();
}

function showQ() {
    const item = pool[currIdx];
    document.getElementById('q-status').innerText = `Question ${currIdx + 1} / 10`;
    document.getElementById('q-progress-bar').style.width = `${((currIdx + 1) / 10) * 100}%`;

    document.getElementById('q-text').innerText = item.m; // 한국어 뜻 문제
    
    const optsDiv = document.getElementById('q-options'); 
    optsDiv.innerHTML = '';
    
    let choices = [item];
    while(choices.length < 4) {
        let randomItem = redemittelData[Math.floor(Math.random() * redemittelData.length)];
        if(!choices.includes(randomItem)) choices.push(randomItem);
    }
    
    choices.sort(() => 0.5 - Math.random()).forEach(choice => {
        const btn = document.createElement('button');
        btn.className = "w-full text-left p-4 rounded-xl border border-slate-200 font-bold text-slate-600 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all cursor-pointer bg-white shadow-sm";
        btn.innerText = choice.p; // 보기는 독일어 패턴
        btn.onclick = () => {
            document.querySelectorAll('#q-options button').forEach(b => b.disabled = true);
            if(choice.id === item.id) { 
                btn.className = "w-full text-left p-4 rounded-xl border border-green-500 bg-green-50 text-green-700 font-bold shadow-md";
                score++; 
            } else { 
                btn.className = "w-full text-left p-4 rounded-xl border border-red-500 bg-red-50 text-red-700 font-bold shadow-md";
            }
            document.getElementById('next-btn').disabled = false;
        };
        optsDiv.appendChild(btn);
    });
}

function nextQ() {
    currIdx++;
    if(currIdx < 10) { 
        showQ(); 
        document.getElementById('next-btn').disabled = true; 
    } else { 
        document.getElementById('q-play').classList.add('hidden'); 
        document.getElementById('q-result').classList.remove('hidden'); 
        document.getElementById('score-text').innerText = `${score} / 10`; 
    }
}