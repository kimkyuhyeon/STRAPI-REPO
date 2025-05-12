// src/plugins/index.ts

import koTranslations from '../src/admin/locales/ko.json';

export default () => ({
    i18n: {
        enabled: true,
        config: {
            defaultLocale: 'ko',
            locales: ['ko', 'en'],
        },
    },

    documentation: {
        enabled: true,
        config: {
            info: {
                version: '1.0.0',
                title: '웍스아웃 API 문서',
                description: `
# Worksout Strapi API 사용 가이드

## ✅ 공통 사용법

- 모든 API 호출은 **REST GET 방식**으로 사용합니다.
- 필수적으로 **populate 쿼리**를 사용해 연관 미디어, 버튼, 슬라이더 등을 포함하여 호출해야 합니다.
- **잘못된 populate 쿼리 사용 시 400 오류가 발생합니다.**

---

## 메인 배너 API 호출 예시

\`\`\`
GET /api/main-banners?populate[mainThumbnailContainer][populate][pcMedia]=true&populate[mainThumbnailContainer][populate][mobileMedia]=true&populate[buttonField][populate][firstButton]=true
\`\`\`

- \`mainThumbnailContainer\` 내 \`pcMedia\`, \`mobileMedia\` 포함
- \`buttonField\` 내 \`firstButton\` 포함
- 반드시 \`true\` 값 사용 (잘못된 키 입력 시 400 오류)

---

## 띠배너 API 호출 예시

\`\`\`
GET /api/top-banners?populate=displayDate
\`\`\`

- 띠배너의 노출 기간 정보 \`displayDate\` 포함

---

## 콘텐츠 목록 API 호출 예시

\`\`\`
GET /api/articles?populate[contentsCompo][on][shared.image-with-title][populate]=Image&populate[contentsCompo][on][shared.slide-map][populate]=image&pagination[page]=1&pagination[pageSize]=10&sort=publishedAt:desc
\`\`\`

- Dynamic Zone 내 특정 컴포넌트만 선별적으로 populate
- 페이지네이션, 소팅 가능
- \`filters\` 사용 시:
\`\`\`
filters[category][$eq]=EDITORIAL
\`\`\`

---

## 주의 사항

- \`populate\` 쿼리 키는 **Strapi Admin에 정의된 컴포넌트 명칭 그대로 사용**
- URL 인코딩 자동 처리됨 (예: \`[]\` → \`%5B%5D\`)
- 퍼블릭 권한 없이 호출 시 **403 오류 발생** → 반드시 권한 확인
- 대량 호출 시 \`pagination\` 필수 사용 권장 (기본 25개)

---
                `,
            },
            tags: [
                {
                    name: 'Articles',
                    description: '에디토리얼/공지사항 등 콘텐츠 관련 API',
                },
                {
                    name: 'Main Banners',
                    description: '메인 배너 관리 API',
                },
                {
                    name: 'Top Banners',
                    description: '띠배너 관리 API',
                },
            ],
        },
    },
});
