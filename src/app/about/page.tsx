import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import InstructorCard from "@/components/InstructorCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "십일전략 소개 | GR831이 만든 공식 온라인 브랜드",
  description:
    "2026학년도 135명 합격을 만든 GR831약술형논술연구소의 공식 온라인 브랜드, 십일전략을 소개합니다.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-lg px-5 py-6">
      {/* 상단 헤더 영역 */}
      <div className="flex items-center">
        <Link href="/" className="text-sm text-brand-gray">
          &larr; 홈
        </Link>
      </div>
      <div className="mt-3 text-center">
        <h1 className="font-serif text-xl font-black">십일전략 소개</h1>
        <p className="mt-1 text-sm text-brand-gray">
          GR831이 만든 공식 온라인 브랜드
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {/* 카드 1: GR831 관계 */}
        <div className="overflow-hidden rounded-2xl border-t-4 border-brand-red bg-white p-6">
          <h2 className="font-serif text-lg font-bold">
            십일전략은 GR831의 온라인 브랜드입니다
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-black">
            십일전략은 신생 브랜드가 아닙니다. 2026학년도 가천대학교 135명
            합격을 만들어낸 GR831약술형논술연구소가 직접 운영하는 공식 온라인
            브랜드입니다.
          </p>
          <div className="mt-4 flex items-center justify-center">
            <Image
              src="/images/logo-transparent.png"
              alt="십일전략"
              width={140}
              height={48}
              className="h-12 w-auto"
            />
            <span className="mx-3 text-2xl text-brand-gray">&times;</span>
            <Image
              src="/images/logo-gr831.png"
              alt="GR831 약술형논술 연구소"
              width={180}
              height={60}
              className="h-[60px] w-auto"
            />
          </div>
        </div>

        {/* 카드 2: 3가지 검증 */}
        <div className="rounded-2xl bg-white p-6">
          <h2 className="font-serif text-lg font-bold">
            검증된 시스템, 그대로.
          </h2>
          <div className="mt-4 flex flex-col gap-4">
            {[
              {
                num: "1",
                title: "검증된 콘텐츠",
                desc: "GR831이 6년간 축적한 약술형논술 커리큘럼을 그대로 사용합니다.",
              },
              {
                num: "2",
                title: "검증된 강사진",
                desc: "가천대학교 약술형논술 자문위원 출신, GR831의 전문 강사진이 직접 진행합니다.",
              },
              {
                num: "3",
                title: "검증된 합격 노하우",
                desc: "2026학년도 135명 합격을 만든 시스템을 온라인으로 그대로 옮겼습니다.",
              },
            ].map((item) => (
              <div key={item.num} className="flex items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red font-bold text-white">
                  {item.num}
                </div>
                <div className="ml-4">
                  <p className="text-base font-bold">{item.title}</p>
                  <p className="mt-1 text-sm text-brand-gray">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 카드 3: 합격 실적 강조 */}
        <div className="rounded-2xl bg-white p-6">
          <p className="text-center text-xs tracking-widest text-brand-gray">
            2026학년도 합격 실적
          </p>
          <div className="mt-3 grid grid-cols-2 divide-x divide-brand-border">
            <div className="py-3 text-center">
              <p className="font-serif text-5xl font-black text-brand-red">
                <CountUp target={135} />
              </p>
              <p className="mt-1 text-xs text-brand-gray">가천대학교 합격</p>
            </div>
            <div className="py-3 text-center">
              <p className="font-serif text-5xl font-black text-brand-red">
                <CountUp target={34} />
              </p>
              <p className="mt-1 text-xs text-brand-gray">보건간호계열 합격</p>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-brand-gray">
            * GR831약술형논술연구소 2026학년도 합격 실적
          </p>
        </div>

        {/* 강사진 카드 — 황규훈 */}
        <InstructorCard
          subject="수학"
          name="황규훈 선생님"
          phrase="완벽한, 완전한 약술 수학"
          slug="hwang"
          youtube="y-eem4vKBXI"
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
          youtube="x8tBXqu0Ot0"
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

        {/* 카드 5: 슬로건 */}
        <div className="rounded-2xl bg-white p-8 text-center">
          <p className="font-serif text-3xl font-black text-brand-red">
            따로, 또 같이.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-brand-black">
            전국 어디서나 같은 수업, 케어는 오프라인 이상으로.
            <br />
            십일전략은 온라인이라는 새 무대에서 GR831의 합격 노하우를 그대로
            이어갑니다.
          </p>
        </div>

        {/* 카드 6: 하단 CTA */}
        <div className="rounded-2xl bg-brand-dark p-6 text-center text-white">
          <p className="text-base font-bold">
            지금 카카오톡으로 상담받아보세요
          </p>
          <a
            href="http://pf.kakao.com/_kpsxfn" target="_blank" rel="noopener noreferrer"
            className="mt-3 inline-block rounded-full bg-brand-red px-6 py-3 font-bold text-white"
          >
            카카오톡 상담하기 &rarr;
          </a>
        </div>
      </div>

      <div className="pb-12" />
    </div>
  );
}
