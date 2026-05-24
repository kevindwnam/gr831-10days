import Link from "next/link";
import InstructorCard from "@/components/InstructorCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "강사진 | 십일전략",
  description: "약술형논술 온라인 전문 강사진을 소개합니다.",
};

export default function FacultyPage() {
  return (
    <div className="mx-auto max-w-lg md:max-w-2xl lg:max-w-4xl px-5 py-6">
      {/* 상단 헤더 */}
      <div className="flex items-center">
        <Link href="/" className="text-sm text-brand-gray">
          &larr; 홈
        </Link>
      </div>
      <div className="mt-3 text-center">
        <h1 className="font-serif text-xl md:text-2xl font-black">강사진</h1>
        <p className="mt-1 text-sm text-brand-gray">
          약술형논술 온라인 전문 강사진
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {/* 인트로 카드 */}
        <div className="overflow-hidden rounded-2xl border-t-4 border-brand-red bg-white p-6">
          <h2 className="font-serif text-lg font-bold">
            약술형논술 온라인 전문 강사진
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-black">
            GR831약술형논술연구소는 가천대학교 약술형논술 자문위원 출신
            연구원들로 구성된 6년차 전문 기관입니다. 이 연구소의 콘텐츠를 바탕으로
            약술형논술 온라인 강의에 특화된 전문 강사진이 직접 수업합니다.
          </p>
        </div>

        {/* 강사진 카드 — 황규훈 */}
        <InstructorCard
          subject="수학"
          name="황규훈 선생님"
          phrase="완벽한, 완전한 약술 수학"
          slug="hwang"
          career={[
            "현) 정율사관학원 수학과 대표 강사",
            "전) 대치 러셀 수학 강사",
            "전) 강남 러셀 수학 강사 / 방학특강 마감",
          ]}
          features={[
            "재밌는 수업, 그 속에서 수학의 본질을 꿰뚫어 성적을 확실히 올리는 수업",
            "수능 대비 13년 고퀄리티 수능대비·약술대비 자체교재 수업",
            "사고력과 논리를 강조한 PBL(Problem Based Learning) 수업",
            "출제 기조를 반영한 족집게 수업",
          ]}
          management={[
            "모든 수업시간 출결·전시간복습·과제 기본 점검 및 개선방향 피드백 제공",
            "24시간 강사직접 질의응답 진행",
            "13년차 강사 시선의 맞춤형 공부법 교정",
            "최상위권을 위한 질문법 교정 클리닉",
            "학습의지와 지속성 개선 관리",
            "개개인 별 약점 분석 및 개별 약점 자료 상시 제공",
            "직접 제작한 개념노트 손필기 제공",
          ]}
        />

        {/* 강사진 카드 — 김후엽 */}
        <InstructorCard
          subject="수학"
          name="김후엽 선생님"
          phrase="정확한 개념, 명확한 설명"
          slug="kim"
          career={[
            "현) 정율사관학원 수학과 대표 강사",
            "한국교원대 러닝퍼실리테이터 인증 교육 수료",
          ]}
          features={[
            "기출문제로 구성된 자체제작 주제별 수업",
            "1등급 변별문항을 위한 고난이도 주제별 수업",
            "매시간 백지 이론 테스트로 숙지 확인 및 점검",
            "오답문항 약점문제 제작 반복학습",
            "학생 학습데이터 기반 피드백 진행",
            "수능기본개념완성 → 기출 주제별 수업 → 파이널",
            "일일과제를 통한 학습 루틴관리",
            "설명하는 공부와 튜터링으로 메타인지 능력 향상",
            "매주 모의고사 진행 후 상세 성적표 제공",
          ]}
          management={[
            "매 시간 과제·소요시간·풀이과정에 대한 개별 피드백",
            "매 모의고사 후 학습데이터 기반 목표 상담 진행",
            "학생 질문능력 개선을 위한 질문 클리닉 제공",
            "야간 온라인 첨삭 및 철저한 오답노트 관리",
            "과제 누락자·테스트 미출자 야간온라인 추가관리",
          ]}
        />

        {/* 강사진 카드 — 고원빈 */}
        <InstructorCard
          subject="국어"
          name="고원빈 선생님"
          phrase="차이를 만드는 약술 국어"
          slug="go"
          career={[
            "현) 정율사관학원 국어과 수능 대표 강사",
            "현) 정율사관학원 사업 부장",
            "전) 정율사관학원 국어과 팀장",
            "전) 인서울학원 국어 강사",
          ]}
          features={[
            "수업 만족도와 실적이 입증하는, 성적을 올리는 수업",
            "최상위 1등급을 위한 가장 완성도 높은 국어 수업",
            "수능 대비 10년간 매진한 고퀄리티 수능국어 자료",
            "문학: 누구나 적용 가능한 객관적 감상과 분석",
            "독서: 밀도 높은 기출 지문 분석으로 논리적 사고 함양",
            "언매: 언어 개념 정립 및 제시문 분석 능력 고양",
            "화작: 지문별·유형별 풀이전략 기반 효율적 풀이",
          ]}
          management={[
            "완벽한 기본기 — 가장 기본적인 것들을 완벽하게 수행하는 관리",
            "적당한 통제력 — 과제와 테스트 오답 정리까지 마무리하도록 통제",
            "맞춤형 피드백 — 학생들의 점진적 성장을 위해 개인 맞춤형 피드백 제공",
            "유연한 인간미 — 때로는 엄하게, 때로는 친근하게 학생들을 대합니다",
          ]}
        />

        {/* 신뢰 메시지 카드 */}
        <div className="rounded-2xl bg-brand-dark p-6 text-center text-white">
          <p className="text-xs font-bold tracking-widest text-brand-red">
            CREDENTIALS
          </p>
          <h2 className="mt-1 font-serif text-xl font-black">
            6년의 공력, 검증된 강사진
          </h2>
          <p className="mt-3 text-sm text-gray-300">
            24~26학년도 누적 가천대 합격생 353명을 만들어낸 강사진이 직접
            강의합니다.
          </p>
        </div>

        {/* 하단 CTA */}
        <div className="rounded-2xl bg-white p-6 text-center">
          <p className="text-base font-bold">수업이 더 궁금하신가요?</p>
          <p className="mt-2 text-sm text-brand-gray">
            카카오톡 채널에서 상세히 안내드립니다
          </p>
          <a
            href="http://pf.kakao.com/_kpsxfn" target="_blank" rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full bg-brand-red px-6 py-3 font-bold text-white"
          >
            카카오톡 상담하기 &rarr;
          </a>
        </div>
      </div>

      <div className="pb-12" />
    </div>
  );
}
