// 15개 약술형논술 운영 대학 입시 정보 (2027학년도 기준)
// 출처: ~/Desktop/gr831-10days/약논술_15개_대학_주요_요점_정리.pdf
// 마지막 업데이트: 2026-05

export interface CsatRequirement {
  category: string;     // "인문계열, 자연계열" or "의예과" 등
  requirement: string;  // 수능최저 상세
}

export interface ExamItem {
  category: string;     // "인문계열", "전 모집단위" 등
  questions: string;    // "국어 8문항, 수학 5문항"
  perScore?: string;    // "각 10점"
}

export interface ScopeItem {
  subject: string;      // "국어", "수학" 등
  detail: string;       // 출제 범위 상세
  forCategory?: string; // 계열 구분이 필요한 경우 (인문/자연 등)
}

export interface EvaluationCriterion {
  subject: string;      // "국어", "수학"
  criteria: string;
}

export interface University {
  id: number;
  slug: string;
  name: string;          // 가천대학교
  shortName: string;     // 가천대
  campus?: string;       // 세종, 글로벌캠퍼스
  transferType: string;  // 논술전형, 논술우수자전형 등

  // 분류 플래그
  main: boolean;         // 메인 대학 (가천대만 true)
  healthcare: boolean;   // 보건간호계열 운영 (확인된 대학만 true)
  healthcareDepts?: string[]; // 보건간호 학과 목록

  // 핵심 정보
  recruit: string;       // 모집인원
  method: string;        // 전형방법

  // 수능최저
  csat: boolean;
  csatRequirements: CsatRequirement[];

  // 평가방법
  examYearBasis: string; // "2027학년도" or "전년도 기준"
  examItems: ExamItem[];
  examTime: string;      // "80분"
  examFormat?: string;   // "노트 형식의 답안지 작성"
  examNote?: string;     // "수능 이후 실시" 같은 추가 메모

  // 출제범위
  scopes: ScopeItem[];

  // 평가기준 (선택)
  evaluationCriteria?: EvaluationCriterion[];

  // 논술 특징
  feature: string;
}

export const universities: University[] = [
  {
    id: 1,
    slug: "gachon",
    name: "가천대학교",
    shortName: "가천대",
    transferType: "논술전형",
    main: true,
    healthcare: true,
    healthcareDepts: ["간호학과", "응급구조학과", "운동재활학과", "치위생학과", "방사선학과", "의예과", "한의예과", "약학과"],
    recruit: "1,038명",
    method: "논술 100%",
    csat: true,
    csatRequirements: [
      { category: "인문계열, 자연계열", requirement: "국어, 수학, 영어, 사회/과학탐구(1과목) 1개 영역 3등급 이내" },
      { category: "바이오로직스학과", requirement: "국어, 수학, 영어, 사회/과학탐구(1과목) 2개 영역 등급 합 5 이내" },
      { category: "의예과", requirement: "국어, 수학(기하/미적분), 영어, 과학탐구(2과목) 3개 영역 각 1등급 (과학탐구 적용 시 2과목 평균, 소수점 절사)" },
      { category: "한의예과", requirement: "국어, 수학(기하/미적분), 영어, 과학탐구(2과목) 2개 영역 각 1등급 (과학탐구 적용 시 2과목 모두 1등급)" },
      { category: "약학과", requirement: "국어, 수학(기하/미적분), 영어, 과학탐구(2과목) 3개 영역 등급 합 5 이내 (과학탐구 적용 시 2과목 평균, 소수점 절사)" },
    ],
    examYearBasis: "2027학년도",
    examItems: [
      { category: "인문계열", questions: "국어 8문항, 수학 5문항", perScore: "각 10점" },
      { category: "자연계열", questions: "국어 5문항, 수학 8문항", perScore: "각 10점" },
    ],
    examTime: "80분",
    examFormat: "노트 형식의 답안지 작성",
    examNote: "가천대 논술고사는 대학수학능력시험 이후 실시",
    scopes: [
      { subject: "국어", detail: "1학년 국어, 문학, 독서, 화법, 작문, 문법 영역" },
      { subject: "수학", detail: "수학Ⅰ, 수학Ⅱ" },
    ],
    evaluationCriteria: [
      { subject: "국어", criteria: "문항에서 요구하는 조건에 충실한 답안, 제시문의 핵심 내용을 정확하게 표현한 답안" },
      { subject: "수학", criteria: "문제 해결에 필요한 개념과 원리에 대한 정확한 서술, 정확한 용어와 기호 사용" },
    ],
    feature: "약술형 논술. 고교 교과 과정 내 출제. EBS 수능특강 및 수능완성 교재 연계율 높음.",
  },
  {
    id: 2,
    slug: "sahmyook",
    name: "삼육대학교",
    shortName: "삼육대",
    transferType: "논술우수자전형",
    main: false,
    healthcare: true,
    healthcareDepts: ["간호학과"],
    recruit: "272명",
    method: "논술 100%",
    csat: true,
    csatRequirements: [
      { category: "일반학과(부) 기준", requirement: "국어, 영어, 수학, 탐구(1과목) 중 1개 영역 3등급 이내" },
    ],
    examYearBasis: "전년도 기준",
    examItems: [
      { category: "인문계열", questions: "국어 9문항, 수학 6문항", perScore: "각 10점" },
      { category: "자연계열", questions: "국어 6문항, 수학 9문항", perScore: "각 10점" },
    ],
    examTime: "80분",
    examFormat: "노트 형식의 답안 작성",
    scopes: [
      { subject: "국어", detail: "화법, 작문, 문학, 독서, 문법" },
      { subject: "수학", detail: "수학Ⅰ, 수학Ⅱ" },
    ],
    evaluationCriteria: [
      { subject: "국어", criteria: "제시문의 핵심 내용을 정확하게 이해한 표현, 문항에서 요구하는 조건에 충실한 서술" },
      { subject: "수학", criteria: "문제에 필요한 개념과 원리에 대한 정확한 서술, 정확한 용어와 기호 사용" },
    ],
    feature: "약술형 논술. EBS 수능 연계 교재 활용 권장. 고등학교 정규과정의 서술·논술형 문항 난이도로 출제. 2027학년도부터 자유전공학부에서도 논술 선발.",
  },
  {
    id: 3,
    slug: "korea-sejong",
    name: "고려대학교",
    shortName: "고려대",
    campus: "세종",
    transferType: "논술전형",
    main: false,
    healthcare: false,
    recruit: "150명 (자연계열, 약학과 제외)",
    method: "논술 100%",
    csat: true,
    csatRequirements: [
      { category: "자연계열 (논술 일반전형)", requirement: "국어, 수학, 영어, 사탐/과탐(상위 1과목) 중 2개 영역 등급 합 6 이내" },
    ],
    examYearBasis: "전년도 기준",
    examItems: [
      { category: "자연계열", questions: "수학 6문제 내외" },
    ],
    examTime: "120분",
    examFormat: "노트 형식의 답안 작성",
    scopes: [
      { subject: "수학", detail: "수학, 수학Ⅰ, 수학Ⅱ, 미적분", forCategory: "자연계 전 모집단위 (약학과 제외, 수리논술Ⅰ 문제풀이형)" },
    ],
    feature: "주어진 수학적 개념이나 조건을 바탕으로 답안 도출 또는 특정 수식 증명. 수능 수학 영역 문제와 유사. EBS 교재 수준의 문제 출제. 답안 작성의 모든 단계에서 부분 점수 부여.",
  },
  {
    id: 4,
    slug: "seokyeong",
    name: "서경대학교",
    shortName: "서경대",
    transferType: "논술전형",
    main: false,
    healthcare: false,
    recruit: "214명",
    method: "논술 100%",
    csat: false,
    csatRequirements: [],
    examYearBasis: "전년도 기준",
    examItems: [
      { category: "전 모집단위", questions: "국어 4문항, 수학 4문항 (총 8문항)", perScore: "각 10점" },
    ],
    examTime: "60분",
    scopes: [
      { subject: "국어", detail: "문학, 독서" },
      { subject: "수학", detail: "수학Ⅰ, 수학Ⅱ" },
    ],
    evaluationCriteria: [
      { subject: "국어", criteria: "제시문의 핵심 내용에 대한 정확한 이해와 표현, 문항에서 요구하는 조건에 충실한 서술 및 파악" },
      { subject: "수학", criteria: "문제에 필요한 개념과 원리에 대한 정확한 서술 및 파악, 정확한 용어와 기호 사용" },
    ],
    feature: "고교 교육과정 범위 내 EBS 수능 연계 교재 중심. 사교육 없이도 충분히 도전 가능. 계열 구분 없는 통합 약술형 논술.",
  },
  {
    id: 5,
    slug: "suwon",
    name: "수원대학교",
    shortName: "수원대",
    transferType: "교과논술전형",
    main: false,
    healthcare: true, // 2026-05 업데이트: 보건간호 운영 대학으로 확인됨
    healthcareDepts: ["간호학과"], // TODO: 정확한 학과명은 추후 확인 필요
    recruit: "432명",
    method: "논술 80% + 학생부 20%",
    csat: false,
    csatRequirements: [],
    examYearBasis: "2027학년도",
    examItems: [
      { category: "인문계열", questions: "국어 10문항, 수학 5문항 (총 15문항)", perScore: "각 10점" },
      { category: "자연계열", questions: "국어 5문항, 수학 10문항 (총 15문항)", perScore: "각 10점" },
    ],
    examTime: "80분",
    scopes: [
      { subject: "국어", detail: "문학, 독서" },
      { subject: "수학", detail: "수학Ⅰ, 수학Ⅱ" },
    ],
    feature: "EBS 수능 연계 교재 기반 서술형 평가. 국어는 빈칸 채우기 또는 2~3문장 단답/약술형. 수학은 수능 3~4점 문항 수준의 풀이과정 주관식. 인문·자연 교차 지원 가능.",
  },
  {
    id: 6,
    slug: "tukorea",
    name: "한국공학대학교",
    shortName: "한국공학대",
    transferType: "논술우수자전형",
    main: false,
    healthcare: false,
    recruit: "200명",
    method: "논술 66.7% + 학생부 교과 33.3% (최저점 반영 비율 표시)",
    csat: false,
    csatRequirements: [],
    examYearBasis: "2027학년도",
    examItems: [
      { category: "전 모집단위", questions: "수학 9문제 이내" },
    ],
    examTime: "80분",
    examNote: "학생부 반영교과 — 공학계열: 국어, 수학, 영어, 과학 / 경영학부: 국어, 수학, 영어, 사회 또는 과학 (각 교과별 석차등급 상위 4과목씩 반영)",
    scopes: [
      { subject: "수학", detail: "수학Ⅰ, 수학Ⅱ" },
    ],
    feature: "고교 교육과정 범위 내 '교과 논술(약술형)'. EBS 수능 연계 교재의 수학 문제(수학Ⅰ, 수학Ⅱ)를 주관식 풀이 서술. 논술 400점(기본 250점) + 학생부 100점(기본 25점) 총 500점 만점 구조로 논술 성적이 합격의 당락 결정.",
  },
  {
    id: 7,
    slug: "koreatech",
    name: "한국기술교육대학교",
    shortName: "한국기술교육대",
    transferType: "논술전형",
    main: false,
    healthcare: false,
    recruit: "150명 (공학·ICT계열 122명 / 사회계열 28명)",
    method: "(추후 안내)",
    csat: false,
    csatRequirements: [],
    examYearBasis: "2027학년도",
    examItems: [
      { category: "공학·ICT계열", questions: "수리논술, 문항 수 10개 내외" },
      { category: "사회계열", questions: "자료제시형 언어논술, 문항 수 11개 내외" },
    ],
    examTime: "80분",
    scopes: [
      { subject: "수학", detail: "수학Ⅰ, 수학Ⅱ", forCategory: "공학·ICT계열" },
      { subject: "국어/사회", detail: "국어, 사회 교과목 통합", forCategory: "사회계열" },
    ],
    feature: "고교 교육과정 범위 내 단답형 또는 약술형 출제. 수능특강 유형과 수준 참고. 사회계열은 자료제시형 언어논술로 75자, 140자 등 단문 답안 작성 필요, 인문논술의 성격을 띰.",
  },
  {
    id: 8,
    slug: "hufs-global",
    name: "한국외국어대학교",
    shortName: "한국외대",
    campus: "글로벌캠퍼스",
    transferType: "논술전형",
    main: false,
    healthcare: false,
    recruit: "68명 (글로벌캠퍼스 자연계열)",
    method: "논술 100%",
    csat: true,
    csatRequirements: [
      { category: "자연계열", requirement: "국어, 수학, 영어, 탐구(사회 또는 과학탐구 1과목) 중 2개 영역 등급 합 6 이내" },
    ],
    examYearBasis: "전년도 기준",
    examItems: [
      { category: "자연계열", questions: "7문항 (계산능력, 이해능력, 추론능력, 문제해결능력)" },
    ],
    examTime: "90분",
    scopes: [
      { subject: "수학", detail: "수학Ⅰ, 수학Ⅱ" },
    ],
    feature: "풀이과정이 복잡하지 않고 이해하기 쉬운 문제 출제. 수학적 개념과 기본 성질 이해 및 활용 종합 평가. 계산보다 교과서 수학적 개념과 성질 활용 능력 평가. 수능(수학영역) 준비만으로도 논술전형 준비 가능.",
  },
  {
    id: 9,
    slug: "hanshin",
    name: "한신대학교",
    shortName: "한신대",
    transferType: "논술전형",
    main: false,
    healthcare: false, // TODO: 보건계열 확인 필요
    recruit: "231명",
    method: "논술 80% + 학생부(교과) 20%",
    csat: false,
    csatRequirements: [],
    examYearBasis: "2027학년도",
    examItems: [
      { category: "인문계열", questions: "국어 10문항, 수학 5문항 (총 15문항)", perScore: "각 8점" },
      { category: "자연계열", questions: "국어 5문항, 수학 10문항 (총 15문항)", perScore: "각 8점" },
    ],
    examTime: "80분",
    examFormat: "노트 형식의 답안지 작성",
    scopes: [
      { subject: "국어", detail: "문학, 독서" },
      { subject: "수학", detail: "수학Ⅰ, 수학Ⅱ" },
    ],
    evaluationCriteria: [
      { subject: "국어", criteria: "제시문의 핵심 내용 이해와 표현, 문항이 요구하는 조건에 충실한 서술" },
      { subject: "수학", criteria: "문제 해결에 필요한 개념과 원리의 정확한 서술, 정확한 수학적 용어와 기호 사용" },
    ],
    feature: "교과서 및 EBS 수능 연계 교재 중심. 고등학교 정기고사의 서술형·논술형 문항 난이도 출제 경향.",
  },
  {
    id: 10,
    slug: "hongik-sejong",
    name: "홍익대학교",
    shortName: "홍익대",
    campus: "세종",
    transferType: "논술전형",
    main: false,
    healthcare: false,
    recruit: "195명",
    method: "논술 90% + 학생부(교과) 10%",
    csat: true,
    csatRequirements: [
      { category: "전 모집단위", requirement: "국어, 수학, 영어, 탐구(사회/과학) 영역 중 1개 영역 4등급 이내, 한국사 응시 필수" },
    ],
    examYearBasis: "2027학년도 (인문계열 신설로 추후 공지, 자연계열은 전년도 기준)",
    examItems: [
      { category: "인문계열", questions: "추후 공지" },
      { category: "자연계열", questions: "수학 7문항" },
    ],
    examTime: "70분",
    examFormat: "노트 형식의 답안지",
    scopes: [
      { subject: "인문", detail: "추후 공지" },
      { subject: "수학", detail: "수학Ⅰ, 수학Ⅱ", forCategory: "자연계열" },
    ],
    feature: "수능 1개 영역 4등급의 비교적 완화된 수능최저 기준. 자연계열 기준 출제 범위가 수학Ⅰ, 수학Ⅱ로 고정되어 수능과 병행 준비 수월.",
  },
  {
    id: 11,
    slug: "sangmyung",
    name: "상명대학교",
    shortName: "상명대",
    transferType: "논술전형",
    main: false,
    healthcare: false,
    recruit: "98명",
    method: "논술 90% + 학생부(교과) 10%",
    csat: false,
    csatRequirements: [],
    examYearBasis: "전년도 기준",
    examItems: [
      { category: "인문계열", questions: "국어 8문항, 수학 2문항 (총 10문항)" },
      { category: "자연계열", questions: "국어 2문항, 수학 8문항 (총 10문항)" },
    ],
    examTime: "60분",
    scopes: [
      { subject: "국어", detail: "국어, 문학, 독서, 화법과 작문, 언어와 매체", forCategory: "인문" },
      { subject: "수학", detail: "수학Ⅰ, 수학Ⅱ", forCategory: "자연" },
    ],
    evaluationCriteria: [
      { subject: "인문", criteria: "제시문을 정해진 시간 내 이해하는 독해력, 문항에서 요구하는 것을 파악하고 찾아내는 능력" },
      { subject: "자연", criteria: "필요한 개념과 원리를 적용하고 올바르게 풀이하는 능력, 정확한 용어와 기호 사용" },
    ],
    feature: "약술형 논술. 본문 또는 지문에서 필요한 내용 발췌해 단답형 또는 단문형 답안 작성. 학교 수업과 EBS 수능 연계 교재 충실 학습만으로도 준비 가능.",
  },
  {
    id: 12,
    slug: "eulji",
    name: "을지대학교",
    shortName: "을지대",
    transferType: "논술우수자전형",
    main: false,
    healthcare: true,
    healthcareDepts: ["간호학과", "응급구조학과", "물리치료학과", "임상병리학과", "방사선학과"],
    recruit: "214명",
    method: "논술 80% + 학생부(교과) 20%",
    csat: false,
    csatRequirements: [],
    examYearBasis: "전년도 기준",
    examItems: [
      { category: "전 모집단위", questions: "국어 7문항 + 수학 7문항 (총 14문항)", perScore: "각 10점" },
    ],
    examTime: "70분",
    examFormat: "노트 형식의 답안",
    scopes: [
      { subject: "국어", detail: "언어와 매체(문법), 독서(비문학 내용 파악 및 추론), 문학(고전/현대 소설, 고전시, 현대시)" },
      { subject: "수학", detail: "수학Ⅰ, 수학Ⅱ" },
    ],
    feature: "고등학생 수준에서 부담없이 준비하고 도전할 수 있는 논술. 논술고사의 실질 반영비율을 높여 부족한 내신 성적을 만회할 수 있는 기회 제공.",
  },
  {
    id: 13,
    slug: "shinhan",
    name: "신한대학교",
    shortName: "신한대",
    transferType: "논술전형",
    main: false,
    healthcare: true, // 2026-05 업데이트: 보건간호 운영 대학으로 확인됨
    healthcareDepts: ["간호학과"], // TODO: 정확한 학과명은 추후 확인 필요
    recruit: "192명",
    method: "논술 90% + 학생부(교과) 10%",
    csat: false,
    csatRequirements: [],
    examYearBasis: "전년도 기준",
    examItems: [
      { category: "인문/사회계열", questions: "국어 9문항, 수학 6문항 (총 15문항)", perScore: "각 10점" },
      { category: "자연과학/공학계열", questions: "국어 6문항, 수학 9문항 (총 15문항)", perScore: "각 10점" },
    ],
    examTime: "80분",
    examFormat: "노트 형식의 답안",
    scopes: [
      { subject: "국어", detail: "문학, 독서" },
      { subject: "수학", detail: "수학Ⅰ, 수학Ⅱ" },
    ],
    evaluationCriteria: [
      { subject: "국어", criteria: "제시문의 핵심 내용에 대한 정확한 이해와 표현, 문항에서 요구하는 조건에 충실한 서술" },
      { subject: "수학", criteria: "문제에 필요한 개념과 원리에 대한 정확한 서술, 정확한 용어와 기호 사용" },
    ],
    feature: "고등학교 교육과정과 수능을 충실하게 준비한 학생이라면 무난하게 풀 수 있는 난이도로 출제.",
  },
  {
    id: 14,
    slug: "kangnam",
    name: "강남대학교",
    shortName: "강남대",
    transferType: "논술전형",
    main: false,
    healthcare: false,
    recruit: "309명",
    method: "논술 80% + 학생부(교과) 20%",
    csat: false,
    csatRequirements: [],
    examYearBasis: "전년도 기준",
    examItems: [
      { category: "인문사회계열", questions: "국어 8문항, 수학 2문항 (총 10문항)" },
      { category: "공학계열", questions: "국어 3문항, 수학 7문항 (총 10문항)" },
      { category: "자유전공학부", questions: "국어 5문항, 수학 5문항 (총 10문항)" },
    ],
    examTime: "60분",
    examNote: "국어 문항당 10점, 수학 문항당 8~12점 상이. 계열별 문항 수가 달라 전략적 지원 필요.",
    scopes: [
      { subject: "국어", detail: "문학, 독서" },
      { subject: "수학", detail: "수학Ⅰ, 수학Ⅱ" },
    ],
    evaluationCriteria: [
      { subject: "국어", criteria: "제시문의 핵심 내용을 정확하게 이해한 답안, 문항에서 요구하는 조건에 충실한 서술" },
      { subject: "수학", criteria: "문제에 필요한 개념과 원리에 대한 정확한 서술, 정확한 용어와 기호 사용" },
    ],
    feature: "고교 교육과정 범위 내 고등학교 정기고사 서술·논술형 문항 난이도로 출제. EBS 수능 연계 교재(수능특강, 수능완성) 활용.",
  },
  {
    id: 15,
    slug: "kookmin",
    name: "국민대학교",
    shortName: "국민대",
    transferType: "논술전형",
    main: false,
    healthcare: false,
    recruit: "206명",
    method: "논술 100%",
    csat: true,
    csatRequirements: [
      { category: "인문계열", requirement: "국어, 수학, 영어, 탐구(사탐 또는 과탐 상위 1과목) 영역 중 2개 영역 등급 합 6 이내. 탐구는 전체 과목 중 상위 1과목 반영." },
      { category: "자연계열", requirement: "국어, 수학, 영어, 탐구(과탐 상위 1과목) 영역 중 2개 영역 등급 합 6 이내. 탐구는 과학탐구 전체 과목 중 상위 1과목 반영." },
    ],
    examYearBasis: "전년도 기준",
    examItems: [
      { category: "인문계열", questions: "국어 8문항, 수학 2문항 (총 10문항)" },
      { category: "자연계열", questions: "국어 2문항, 수학 8문항 (총 10문항)" },
    ],
    examTime: "90분",
    examNote: "국어는 단답형 또는 단문형 서술, 수학은 단답형",
    scopes: [
      { subject: "국어", detail: "국어, 문학, 독서", forCategory: "인문/자연 공통" },
      { subject: "수학", detail: "수학, 수학Ⅰ, 수학Ⅱ", forCategory: "인문계열" },
      { subject: "수학", detail: "수학, 수학Ⅰ, 수학Ⅱ, 미적분", forCategory: "자연계열" },
    ],
    feature: "국어 문제는 문항별 답안 글자 수 제한이 있는 경우 이를 준수하여 작성. 수학 문제는 풀이 과정을 작성하지 않음.",
  },
];

// 헬퍼 함수: slug로 대학 찾기
export function getUniversityBySlug(slug: string): University | undefined {
  return universities.find((u) => u.slug === slug);
}

// 헬퍼 함수: 보건간호 운영 대학만 필터
export function getHealthcareUniversities(): University[] {
  return universities.filter((u) => u.healthcare);
}

// 헬퍼 함수: 메인 대학 가져오기
export function getMainUniversity(): University | undefined {
  return universities.find((u) => u.main);
}
