document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('word-list-container');
    
    // verbs_data.js가 로드되었는지 확인
    if (typeof verbsData === 'undefined') {
        console.error("verbs_data.js 파일이 로드되지 않았습니다.");
        return;
    }

    verbsData.forEach(item => {
        const safeSentence = item.s.replace(/'/g, "\\'");
        
        // ★ 디자인: 파란색(diskussion) 테마 사용
        container.innerHTML += `
            <div class="group bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between h-40" 
                 onclick="openWordModal('${item.id}', '${item.w}', '${safeSentence}', '${item.m}', '${item.t}')">
                <div class="flex justify-between items-start">
                    <span class="text-[10px] font-bold text-slate-300">NO.${item.id}</span>
                    <span class="text-[10px] font-bold px-2 py-1 rounded-md border bg-diskussion-50 text-diskussion-600 border-diskussion-100">
                        Verb
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

// 모달 로직 (형용사 페이지와 동일)
function openWordModal(id, w, s, m, t) {
    document.getElementById('modal-word').innerText = w;
    document.getElementById('modal-sentence').innerText = s;
    document.getElementById('modal-meaning').innerText = m;
    document.getElementById('modal-trans').innerText = t;
    
    const modal = document.getElementById('word-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeWordModal() { 
    const modal = document.getElementById('word-modal');
    modal.classList.add('hidden'); 
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto'; 
}

// 퀴즈 로직
let pool = []; 
let currIdx = 0; 
let score = 0;

function startQuiz() {
    pool = [...verbsData].sort(() => 0.5 - Math.random()).slice(0, 10);
    document.getElementById('q-init').classList.add('hidden');
    document.getElementById('q-play').classList.remove('hidden');
    score = 0;
    currIdx = 0;
    showQ();
}

function showQ() {
    const item = pool[currIdx];
    document.getElementById('q-status').innerText = `Question ${currIdx + 1} / 10`;
    
    const percent = ((currIdx + 1) / 10) * 100;
    document.getElementById('q-progress-bar').style.width = `${percent}%`;

    document.getElementById('q-meaning-hint').innerText = `뜻: ${item.m}`;
    const questionText = item.s.replace(new RegExp(item.w, 'gi'), "_______");
    document.getElementById('q-text').innerText = questionText;
    
    const optsDiv = document.getElementById('q-options'); 
    optsDiv.innerHTML = '';
    
    let choices = [item.w];
    while(choices.length < 4) {
        let randomWord = verbsData[Math.floor(Math.random()*verbsData.length)].w;
        if(!choices.includes(randomWord)) choices.push(randomWord);
    }
    
    choices.sort(() => 0.5 - Math.random()).forEach(choice => {
        const btn = document.createElement('button');
        // ★ 버튼 스타일: 파란색(diskussion) 테마 사용
        btn.className = "w-full text-left p-5 rounded-xl border border-slate-200 font-bold text-slate-600 hover:border-diskussion-500 hover:text-diskussion-600 hover:bg-diskussion-50 transition-all cursor-pointer bg-white shadow-sm";
        btn.innerText = choice;
        btn.onclick = () => {
            document.querySelectorAll('#q-options button').forEach(b => b.disabled = true);
            if(choice === item.w) { 
                btn.className = "w-full text-left p-5 rounded-xl border border-green-500 bg-green-50 text-green-700 font-bold shadow-md";
                score++; 
            } else { 
                btn.className = "w-full text-left p-5 rounded-xl border border-red-500 bg-red-50 text-red-700 font-bold shadow-md";
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
