document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('word-list-container');
    
    if (typeof advancedPhrasesData === 'undefined') {
        alert("데이터 로드 실패! advanced_phrases_data.js 경로를 확인하세요.");
        return;
    }

    advancedPhrasesData.forEach(item => {
        // 독일어 문장에 특수문자가 있을 수 있으므로 처리
        const safeSentence = item.s.replace(/'/g, "\\'");
        
        container.innerHTML += `
            <div class="group bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between h-40" 
                 onclick="openPhraseModal('${item.g}', '${item.m}', '${safeSentence}', '${item.c}')">
                <div class="flex justify-between items-start">
                    <span class="text-[10px] font-bold text-slate-300">NO.${item.id}</span>
                    <span class="text-[10px] font-bold px-2 py-1 rounded-md border bg-violet-50 text-violet-600 border-violet-100 truncate max-w-[100px]">
                        ${item.c}
                    </span>
                </div>
                <div class="text-center">
                    <div class="font-bold text-slate-800 text-lg group-hover:text-violet-600 transition-colors mb-2 leading-tight px-1 break-words">${item.g}</div>
                    <div class="text-xs text-slate-400 font-medium truncate px-1">${item.m}</div>
                </div>
                <div class="text-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <i class="ph-bold ph-graduation-cap text-violet-400"></i>
                </div>
            </div>
        `;
    });
});

// 모달 열기 함수
function openPhraseModal(g, m, s, c) {
    document.getElementById('modal-phrase').innerText = g;
    document.getElementById('modal-meaning').innerText = m;
    document.getElementById('modal-sentence').innerText = s;
    document.getElementById('modal-category').innerText = c;
    
    document.getElementById('phrase-modal').classList.remove('hidden');
    document.getElementById('phrase-modal').classList.add('flex');
}

function closePhraseModal() {
    document.getElementById('phrase-modal').classList.add('hidden');
    document.getElementById('phrase-modal').classList.remove('flex');
}

// 퀴즈 로직 (뜻을 보고 독일어 구문 맞히기)
let pool = [];
let currIdx = 0;
let score = 0;

function startQuiz() {
    pool = [...advancedPhrasesData].sort(() => 0.5 - Math.random()).slice(0, 10);
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

    // 문제: 한국어 뜻
    document.getElementById('q-text').innerText = item.m; 
    
    const optsDiv = document.getElementById('q-options'); 
    optsDiv.innerHTML = '';
    
    let choices = [item];
    while(choices.length < 4) {
        let randomItem = advancedPhrasesData[Math.floor(Math.random() * advancedPhrasesData.length)];
        if(!choices.includes(randomItem)) choices.push(randomItem);
    }
    
    choices.sort(() => 0.5 - Math.random()).forEach(choice => {
        const btn = document.createElement('button');
        btn.className = "w-full text-left p-4 rounded-xl border border-slate-200 font-bold text-slate-600 hover:border-violet-500 hover:text-violet-600 hover:bg-violet-50 transition-all cursor-pointer bg-white shadow-sm";
        btn.innerText = choice.g; // 보기는 독일어 구문
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