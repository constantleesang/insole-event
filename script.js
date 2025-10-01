// script.js 파일 수정

document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    // 임시 댓글 데이터 (예시 댓글 3개 포함)
    let allComments = [
        { name: "이*원", content: "LWT-1 체험단 신청 완료! 자세 교정 효과를 기대합니다. 😊", date: "2025.10.01" },
        { name: "최*현", content: "충북대 직원입니다. 바로 신청했고, 인솔이 정말 궁금합니다.", date: "2025.09.30" },
        { name: "김*나", content: "신청 완료! 베스트 후기 경품 노려봅니다! 👍", date: "2025.09.30" },
        // 기존 나머지 댓글 데이터는 여기부터 삽입됩니다.
        { name: "박*수", content: "평소 오래 서있는데 꼭 당첨되고 싶어요!", date: "2025.09.30" },
        { name: "정*원", content: "댓글 이벤트 사은품도 기대되네요!", date: "2025.09.29" },
        { name: "윤*서", content: "맞춤형 인솔 꼭 써보고 싶어요.", date: "2025.09.29" },
        { name: "한*림", content: "발 통증 때문에 힘들었는데 기대됩니다.", date: "2025.09.28" },
    ].sort((a, b) => new Date(b.date) - new Date(a.date)); // 최신순 정렬

    let commentsPerPage = 5;
    let currentPage = 0;

    // 댓글을 HTML로 생성 (날짜 포함)
    function renderComments() {
        const start = currentPage * commentsPerPage;
        const end = start + commentsPerPage;
        const commentsToRender = allComments.slice(start, end);

        let html = commentsToRender.map(comment => `
            <div>
                <p><strong>${comment.name}</strong> <span class="comment-date">(${comment.date})</span></p>
                <p>${comment.content}</p>
            </div>
        `).join('');

        if (currentPage === 0) {
            commentList.innerHTML = html;
        } else {
            commentList.innerHTML += html;
        }
        // ... (나머지 로직은 이전과 동일)
        if (end < allComments.length) {
            loadMoreBtn.style.display = 'block';
        } else {
            loadMoreBtn.style.display = 'none';
        }
    }

    // 댓글 등록, '더보기' 버튼 이벤트 리스너 등 (이전과 동일)
    commentForm.addEventListener('submit', (e) => {
        // ... (댓글 등록 로직)
        e.preventDefault();
        const userName = document.getElementById('user-name').value;
        const content = document.getElementById('comment-content').value;
        const now = new Date();
        const dateString = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`;
        const newComment = { name: userName, content: content, date: dateString };
        allComments.unshift(newComment); 
        commentForm.reset();
        currentPage = 0; 
        renderComments();
        alert("댓글이 등록되었습니다! 사은품 추첨에 응모되었습니다.");
    });

    loadMoreBtn.addEventListener('click', () => {
        currentPage++;
        renderComments();
    });

    renderComments();
});
