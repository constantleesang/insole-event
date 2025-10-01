document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    // 임시 댓글 데이터 (실제는 서버/DB에서 가져와야 함)
    let allComments = [
        { name: "김*민", content: "신청 완료했습니다! 발이 편안해지길 기대합니다.", date: "2025.10.01" },
        { name: "이*희", content: "충북대 교직원입니다. 좋은 체험단 감사합니다.", date: "2025.10.01" },
        { name: "박*수", content: "평소 오래 서있는데 꼭 당첨되고 싶어요!", date: "2025.10.01" },
        { name: "최*영", content: "LWT-1 너무 궁금합니다. 신청했어요.", date: "2025.10.01" },
        { name: "정*원", content: "댓글 이벤트 사은품도 기대되네요!", date: "2025.10.01" },
        // 5개 이상 데이터 예시
        { name: "강*호", content: "신청 후 댓글 남깁니다.", date: "2025.09.30" },
        { name: "윤*서", content: "맞춤형 인솔 꼭 써보고 싶어요.", date: "2025.09.30" },
        { name: "한*림", content: "베스트 후기 경품 노려봅니다!", date: "2025.09.30" },
        { name: "서*준", content: "발 통증 때문에 힘들었는데 기대됩니다.", date: "2025.09.30" },
        { name: "오*주", content: "새내기 학생입니다! 바로 신청했어요.", date: "2025.09.30" },
    ].sort((a, b) => new Date(b.date) - new Date(a.date)); // 최신순 정렬

    let commentsPerPage = 5;
    let currentPage = 0;

    // 댓글을 HTML로 생성
    function renderComments() {
        const start = currentPage * commentsPerPage;
        const end = start + commentsPerPage;
        const commentsToRender = allComments.slice(start, end);

        let html = commentsToRender.map(comment => `
            <div>
                <p><strong>${comment.name}</strong> (${comment.date})</p>
                <p>${comment.content}</p>
            </div>
        `).join('');

        // 기존 내용을 유지하고 추가 (더보기 기능 구현)
        if (currentPage === 0) {
            commentList.innerHTML = html;
        } else {
            commentList.innerHTML += html;
        }

        // '더보기' 버튼 노출/숨김 처리
        if (end < allComments.length) {
            loadMoreBtn.style.display = 'block';
        } else {
            loadMoreBtn.style.display = 'none';
        }
    }

    // 댓글 등록 기능 (실제로는 서버로 전송되어야 함)
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const userName = document.getElementById('user-name').value;
        const content = document.getElementById('comment-content').value;
        const now = new Date();
        const dateString = `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`;

        const newComment = { name: userName, content: content, date: dateString };

        // 새 댓글을 배열 맨 앞에 추가 후 다시 렌더링
        allComments.unshift(newComment); 
        
        // 폼 초기화
        commentForm.reset();
        
        // 첫 페이지부터 다시 로드
        currentPage = 0; 
        renderComments();
        
        alert("댓글이 등록되었습니다! 사은품 추첨에 응모되었습니다.");
    });

    // '더보기' 버튼 클릭 시 다음 페이지 로드
    loadMoreBtn.addEventListener('click', () => {
        currentPage++;
        renderComments();
    });

    // 초기 댓글 로드
    renderComments();
});
