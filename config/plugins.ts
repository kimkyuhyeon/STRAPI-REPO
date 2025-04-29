// src/plugins/index.ts 또는 config/plugins.js

import koTranslations from '../src/admin/locales/ko.json';

export default () => ({
    // ✅ i18n 설정
    i18n: {
        enabled: true,
        config: {
            defaultLocale: 'ko',
            locales: ['ko', 'en'],
        },
    },

    // ✅ Swagger 문서 플러그인 활성화
    documentation: {
        enabled: true,
        config: {
            // 여기에 API 문서 관련 설정 가능 (예: version, title 등)
            info: {
                version: '1.0.0',
                title: '웍스아웃 API 문서',
                description: '콘텐츠/배너/상품 관련 REST API 명세입니다.',
            },
            // API 태그 기준 정리도 가능
            tags: [
                {
                    name: 'Articles',
                    description: '에디토리얼/공지사항 등 콘텐츠 관련 API',
                },
            ],
        },
    },
});
