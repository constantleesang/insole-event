/* 기본 리셋 및 폰트 */
body {
    font-family: 'Noto Sans KR', sans-serif;
    line-height: 1.6;
    background-color: #f8f8f8; /* 깔끔한 배경 */
    color: #333;
}
main {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    background-color: white; /* 콘텐츠 영역 배경 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}
section {
    padding: 30px 0;
    border-bottom: 1px solid #eee;
}
h2 {
    font-size: 28px;
    font-weight: 700;
    color: #004080; /* 엑슬리스 블루 톤 */
    margin-bottom: 20px;
    padding-bottom: 5px;
    border-bottom: 2px solid #004080;
}

/* 1. 헤더 스타일 */
header {
    background-color: #00204A;
    color: white;
    padding: 15px 0;
}
.header-content {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo-text {
    font-size: 24px;
    font-weight: bold;
}
nav a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
}

/* 2. 메인 타이틀 강조 */
#main-title-section {
    text-align: center;
}
#main-title-section h2 {
    font-size: 40px;
    color: #333; /* 중앙 타이틀은 대비되게 */
    border: none;
}
.subtitle {
    font-size: 20px;
    color: #666;
    margin-top: 10px;
}

/* 3. 모집 및 미션/혜택 리스트 */
.detail-list li, .mission-list li {
    margin-bottom: 10px;
}
.benefit-card-group {
    display: flex;
    gap: 20px;
    margin-top: 20px;
}
.benefit-card {
    flex: 1;
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 8px;
    background-color: #f9f9f9;
}
.benefit-card h3 {
    color: #004080;
    font-size: 18px;
    margin-bottom: 10px;
}

/* 4. CTA 버튼 */
.main-cta-button {
    display: block;
    width: 80%;
    max-width: 400px;
    margin: 30px auto 10px auto;
    padding: 15px 30px;
    background-color: #FF7F50; /* 강조 색상 (주황색 계열로 눈에 띄게) */
    color: white;
    text-align: center;
    font-size: 22px;
    font-weight: 700;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
}
.main-cta-button:hover {
    background-color: #E66A42;
}
.comment-trigger {
    text-align: center;
    color: #004080;
    font-weight: 700;
    cursor: pointer;
    margin-top: 10px;
}

/* 5. 플로팅 CTA 버튼 */
#floating-cta-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #00bfff; /* 눈에 띄는 하늘색 */
    color: white;
    padding: 15px 25px;
    border-radius: 50px;
    font-size: 18px;
    text-decoration: none;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 999;
    transition: transform 0.3s;
}
#floating-cta-button:hover {
    transform: scale(1.05);
}
