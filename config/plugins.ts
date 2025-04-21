// ko.json 불러오기
import koTranslations from '../src/admin/locales/ko.json';

export default () => ({
    // i18n 플러그인 설정
    i18n: {
        enabled: true, // i18n 플러그인 활성화
        config: {
            defaultLocale: 'ko', // 기본 언어 설정
            locales: ['ko', 'en'], // 지원할 언어 설정
            translations: {
                ko: koTranslations, // 한국어 번역 파일을 추가
            },
        },
    },
});