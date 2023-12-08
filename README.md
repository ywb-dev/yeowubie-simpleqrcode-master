#  SIMPLE QR-CODE APP

여우비인터랙션의 무료 WebTool Application입니다.

## 프로젝트 정보

**사용 스택**
1. react
2. typescript
3. mui
4. vite
   <br />
   <br />


**사용한 외부 api**
1. https://shrtco.de/
   
 여기서 제공하는 api사용해서 url및 도메인 리다이렉트 관련 부분 처리했습니다.

 한 도메인당 1초 제한이 있는 api이고 무료 api입니다. 상업적 이용이 아니기에 따로 해당 사이트에 문의 해보지는 않았지만 추후 api요청 증가에 따른 ip 차단 가능성이 있습니다. 참고바랍니다.

   <br />

**구조**

aws s3 버킷에 빌드된 html 및 js파일이 업로드되어 있습니다.
cloudflare 에서 CNAME으로 s3 버킷을 가리키고 있습니다.

root 도메인으로 접속하면 자동으로 www 를 붙혀서 접속하도록 처리해두었습니다.
(cloudflare DNS에서 유형이 CNAME 이고 이름이 simpleqrcode.app인 레코드 입니다.)






## 명령어 정리
1. yarn install : 아래 명령어를 사용하기 전 필요한 라이브러리들을 먼저 다운로드 하는 과정 (작동하지 않는다면 yarn 설치필요)
2. yarn build : 배포전 파일을 빌드하는 명령어
3. yarn dev
4. yarn preview

## 코드실행
github에 저장되어있는 코드를 개인 컴퓨터에 저장후 터미널 혹은 명령프롬프트에서 해당 폴더로 이동합니다.

1. yarn install (라이브러리 설치)
2. yarn dev (개발서버에서 프로젝트 실행)

<br />
<br />

개인 컴퓨터에 개발서버로 웹 페이지를 띄워서 볼 수 있습니다.
hmr적용되어 있어서 코드 수정내용이 바로바로 개발서버에 반영됩니다. 수동으로 f5누를 필요 없습니다.


## 배포에 관한 내용

자동화 되어있지 않아서 직접 빌드 후 업로드 하셔야 합니다.

### 빌드 사전준비
aws접속 후 s3검색 s3클릭 후 버킷 리스트중
www.simpleqrcode.app 이라는 버킷을 클릭 합니다.

그 후 아래 순서대로 진행

### 배포

1. 프로젝트 폴더에서 yarn build
2. 프로젝트 폴더내에 dist라는 폴더가 하나 생성됩니다.
3. 다시 aws로 돌아가서 www.simpleqrcode.app 버킷에 있는 파일을 모두 삭제 합니다.
4. 삭제 완료 후 dist 폴더 속 내용을 전부 업로드 합니다. (dist 폴더를 업로드 하는 것이 아닌 더블클릭 후 내부 내용물을 업로드)





## 파일 구조 설명
- src/components : 각 페이지 및 기능 구현 중 사용할 컴포넌트들
- src/components/_atoms : 각 컴포넌트 중 여러곳에서 사용할 목적으로 최소한의 기능만을 구현한 보다 범용성 있는 컴포넌트
- src/components/create : qr생성, url생성 페이지용 컴포넌트
- src/components/header : 상단 헤더 컴포넌트
- src/components/hooks : 공통로직 재사용을 위한 hook 저장경로
- src/locales : en폴더와 ko폴더가 있는데 한글 영어 번역파일
- src/page : 각 페이지이동용 컴포넌트
- src/styles : 스타일 관련 파일
- src/utils : 유틸함수 저장폴더



## 언어추가


src/locales 폴더로 이동합니다. 
추가할 새로운 언어에 관한 "폴더" 를 생성 합니다.
이름은 자유롭게 선택 하셔도 됩니다.

폴더를 추가한 후 src/locales/en 폴더에 들어가서 translation.json 파일을 그대로 복사해서 방금 생성한 폴더에 붙혀넣기 합니다.

각 내용을 번역하여 수정한 후 저장 합니다.

그후 src/locales/i18n.ts 파일로 이동합니다.

아래는 i18n.ts파일입니다.

```
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
<!-- #1 -->
import translationEN from "./en/translation.json";
<!-- #2 -->
import translationKO from "./ko/translation.json";

<!-- #3 -->
const resources = {
  en: {
    translation: translationEN
  },
  ko: {
    translation: translationKO
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // 기본 설정 언어, 'cimode'로 설정할 경우 키 값으로 출력된다.
    fallbackLng: "ko", // 번역 파일에서 찾을 수 없는 경우 기본 언어
    
  
  });

export default i18n;
```

조금전 생성한 새로운 언어 번역 파일을 위 코드 #1번, #2번과 같은 형태로 import 해주세요

아래는 import 예시 입니다. 
```
import translationCH from "./ch/translation.json";
```



그 후 #3번 resources 객체에 추가해주세요. 데이터 형태는 아래 en, ko와 같은 형태로 추가하되 translation의 값은 조금전 import 해온 값으로 설정 해야합니다.

아래 예시를 참고하여 수정해주세요

```
<!-- before -->
const resources = {
  en: {
    translation: translationEN
  },
  ko: {
    translation: translationKO
  }
};


<!-- after -->
const resources = {
  en: {
    translation: translationEN
  },
  ko: {
    translation: translationKO
  }
  ch: {
    translation: translationCH
  }
};
```


<br /> 
이제 마지막 단계 입니다. 
언어 버튼을 생성 해야 합니다.
src/components/_atoms/CustomizedI18n.tsx 파일로 이동해주세요
파일 상단부분 lengList라는 배열이 보입니다. 여기에 방금 추가한 언어를 추가해줘야 합니다.

아래 배열을 ["ko","en","ch"] 과 같이 수정해주세요.
```
<!-- before -->
const lengList: string[] = ["ko", "en"];

<!-- after -->
const lengList: string[] = ["ko","en","ch"];

```











