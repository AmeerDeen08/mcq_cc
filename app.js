fetch('questions.json')
  .then(r => r.json())
  .then(data => {
    const topics = data.topics || [];
    let currentTopicIdx = 0;
    let currentQIdx = 0;
    let selected = new Map(); // topicIdx -> questionIdx -> option index
    let revealed = new Set(); // "t,q"

    const topicListEl = document.getElementById('topic-list');
    const topicNameEl = document.getElementById('topic-name');
    const qIndexEl = document.getElementById('q-index');
    const qTotalEl = document.getElementById('q-total');
    const scoreEl = document.getElementById('score');
    const attemptedEl = document.getElementById('attempted');
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const feedbackEl = document.getElementById('feedback');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const resetBtn = document.getElementById('reset');
    const showAnsBtn = document.getElementById('show-ans');

    function loadTopics() {
      topicListEl.innerHTML = '';
      topics.forEach((t, i) => {
        const li = document.createElement('li');
        li.textContent = t.name;
        if (i === currentTopicIdx) li.classList.add('active');
        li.addEventListener('click', () => {
          currentTopicIdx = i;
          currentQIdx = 0;
          render();
        });
        topicListEl.appendChild(li);
      });
    }

    function getKey(t,q){ return t+','+q; }

    function getSelected(t,q){
      const m = selected.get(t); return m ? m.get(q) : undefined;
    }
    function setSelected(t,q,idx){
      if(!selected.has(t)) selected.set(t, new Map());
      selected.get(t).set(q, idx);
    }

    function updateStats(){
      const t = topics[currentTopicIdx];
      if(!t){ return; }
      let score=0, attempted=0;
      for(let q=0;q<t.questions.length;q++){
        const sel = getSelected(currentTopicIdx,q);
        if(sel !== undefined){
          attempted++;
          if(isCorrect(currentTopicIdx,q,sel)) score++;
        }
      }
      topicNameEl.textContent = t.name;
      qIndexEl.textContent = currentQIdx+1;
      qTotalEl.textContent = t.questions.length;
      scoreEl.textContent = score;
      attemptedEl.textContent = attempted;
    }

    function isCorrect(t,q,idx){
      const qs = topics[t].questions[q];
      const opt = qs.options[idx] || '';
      const letter = opt.trim()[0]; // A-D
      return letter === qs.answer;
    }

    function render(){
      loadTopics();
      const t = topics[currentTopicIdx];
      if(!t){ return; }
      const q = t.questions[currentQIdx];
      if(!q){ return; }
      questionEl.textContent = `Q${q.id}. ${q.q}`;
      optionsEl.innerHTML = '';
      const sel = getSelected(currentTopicIdx,currentQIdx);
      const revealedKey = getKey(currentTopicIdx,currentQIdx);
      const isRevealed = revealed.has(revealedKey);
      q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option';
        btn.textContent = opt;
        const correct = (opt.trim()[0] === q.answer);
        if(sel !== undefined || isRevealed){
          btn.classList.add('disabled');
          if(isRevealed && correct) btn.classList.add('correct');
          if(sel === i){
            if(correct) btn.classList.add('correct');
            else btn.classList.add('wrong');
          }
        }
        btn.addEventListener('click', () => {
          if(sel !== undefined || isRevealed) return;
          setSelected(currentTopicIdx, currentQIdx, i);
          render();
        });
        optionsEl.appendChild(btn);
      });
      feedbackEl.textContent = isRevealed ? `Correct answer: ${q.answer}` : '';
      updateStats();
      prevBtn.disabled = currentQIdx === 0;
      nextBtn.disabled = currentQIdx === t.questions.length-1;
    }

    prevBtn.addEventListener('click', () => {
      if(currentQIdx > 0){ currentQIdx--; render(); }
    });
    nextBtn.addEventListener('click', () => {
      const t = topics[currentTopicIdx];
      if(currentQIdx < t.questions.length-1){ currentQIdx++; render(); }
    });
    resetBtn.addEventListener('click', () => {
      const m = selected.get(currentTopicIdx);
      if(m) m.delete(currentQIdx);
      revealed.delete(getKey(currentTopicIdx,currentQIdx));
      render();
    });
    showAnsBtn.addEventListener('click', () => {
      revealed.add(getKey(currentTopicIdx,currentQIdx));
      render();
    });

    render();
  });
