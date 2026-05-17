import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "자주 묻는 질문 | 십일전략",
  description:
    "십일전략 수강 전 가장 자주 묻는 질문들을 모았습니다.",
};

const faqs = [
  {
    q: "약술형 논술 전형은 어떤 전형인가요?",
    a: "단답형 및 짧은 서술형 답안을 요구하는 시험으로, 기존 논술보다 부담이 적습니다. 국어는 제시문의 핵심정보를 찾아 적는 단답형 위주, 수학은 풀이 과정의 논리적 서술을 평가하여 부분 점수를 부여하는 방식입니다.",
  },
  {
    q: "약술형 논술 출제 범위는 어떻게 되나요?",
    a: "2027학년도 수능 연계교재인 EBS 수능특강 및 수능완성입니다. 국어는 문학·독서·작문·문법 영역에서 지문이 연계 출제되며, 수학은 수학I·II 범위에서 EBS Level 2~3 난이도로 변형 출제됩니다.",
  },
  {
    q: "약술형 논술 전형은 어떤 학생에게 효과적인가요?",
    a: "주로 내신이나 모의고사 성적이 3~6등급 사이인 학생들에게 추천됩니다. 특히 모의고사 국어·수학 등급이 3등급 이내 진입이 어렵거나, 정시만으로는 목표 대학 진학이 불안한 학생들에게 유리한 '역전의 기회'가 될 수 있는 전형입니다.",
  },
  {
    q: "십일전략 시스템은 어떤 특징이 있나요?",
    a: "최신 경향을 반영한 자체 제작 모의고사와 해설지, 매주 제공되는 워크북으로 실전 감각을 극대화하는 '고강도 훈련'을 진행합니다. 또한 모범 답안을 활용한 체계적인 지도와 개인 맞춤 성적표, 복습 영상을 포함한 빈틈없는 관리 시스템을 운영합니다.",
  },
  {
    q: "합격하기 위해 가장 중요한 것은 무엇인가요?",
    a: "가장 핵심은 EBS 연계 교재인 수능특강·수능완성과 모의고사의 완벽한 습득입니다. 국어는 EBS 연계 교재의 주요 문학 작품과 독서 지문을 미리 파악하고, 수학은 고난도 문제라도 포기하지 않고 반복 학습하여 풀이 과정 서술을 통한 부분 점수까지 획득하는 것이 중요합니다.",
  },
  {
    q: "십일전략 콘텐츠로 가천대 외 타학교 대비도 가능한가요?",
    a: "네, 가능합니다. GR831약술형논술연구소가 가천대 유형을 완벽하게 대비함으로써 삼육대, 한국공학대, 을지대, 수원대, 상명대 등 유사한 유형의 대학들까지 한 번에 준비할 수 있는 최적의 커리큘럼을 제공합니다.",
  },
  {
    q: "질문은 어떻게 해결할 수 있나요?",
    a: "수업 내용이나 문제 등 궁금한 점은 수업 중 강사에게 직접 질문하거나, 십일전략 카카오톡 채널을 통해 질의응답을 진행합니다. 학생 개별 질문에 강사진이 직접 답변드립니다.",
  },
  {
    q: "수업은 어디서 진행되나요?",
    a: "십일전략은 100% 온라인으로 진행됩니다. 가천대학교 자문위원 출신 GR831 강사진의 라이브 수업을 전국 어디서나 동일하게 수강할 수 있습니다.",
  },
  {
    q: "GR831과 십일전략은 어떤 관계인가요?",
    a: "십일전략은 GR831약술형논술연구소가 운영하는 공식 온라인 브랜드입니다. GR831의 검증된 커리큘럼, 강사진, 합격 노하우를 그대로 사용하며, 단지 수업 방식만 온라인일 뿐입니다.",
  },
  {
    q: "수업에 사용되는 플랫폼은 무엇인가요?",
    a: "클래스인(ClassIn)을 사용합니다. 양방향 소통이 가능한 라이브 수업 플랫폼으로, 강사와 실시간으로 질문하고 답을 받을 수 있습니다.",
  },
  {
    q: "결석했을 때 보강이 가능한가요?",
    a: "모든 수업은 녹화되어 클래스인에서 다시 시청할 수 있습니다. 추가 질문은 매주 수요일 밤 10시 30분 Q&A 클래스에서 해결 가능합니다.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-lg px-5 py-6">
      {/* 상단 헤더 */}
      <div className="flex items-center">
        <Link href="/" className="text-sm text-brand-gray">
          &larr; 홈
        </Link>
      </div>
      <div className="mt-3 text-center">
        <h1 className="font-serif text-xl font-black">자주 묻는 질문</h1>
        <p className="mt-1 text-sm text-brand-gray">핵심 Q&amp;A</p>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {/* 카드 1: 인트로 */}
        <div className="overflow-hidden rounded-2xl border-t-4 border-brand-red bg-white p-6">
          <h2 className="font-serif text-lg font-bold">
            궁금한 점, 빠르게 해결
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-black">
            수강생들이 가장 자주 물어보시는 질문들을 모았습니다. 더 궁금한 점은
            카카오톡 채널로 문의해주세요.
          </p>
        </div>

        {/* 카드 2: Q&A 아코디언 */}
        <div className="rounded-2xl bg-white p-6">
          <h2 className="font-serif text-lg font-bold">전체 질문</h2>
          <div className="mt-4 flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group overflow-hidden rounded-xl bg-gray-50"
              >
                <summary className="flex cursor-pointer list-none items-center p-4 [&::-webkit-details-marker]:hidden">
                  <span className="w-6 shrink-0 font-serif font-bold text-brand-red">
                    Q
                  </span>
                  <span className="ml-2 flex-1 text-sm font-bold text-brand-black">
                    {faq.q}
                  </span>
                  <span className="ml-2 text-brand-gray transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="flex border-t border-brand-border px-4 pb-4 pt-3">
                  <span className="w-6 shrink-0 font-serif font-bold text-brand-red">
                    A
                  </span>
                  <p className="ml-2 text-sm leading-relaxed text-brand-black">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* 카드 3: CTA */}
        <div className="rounded-2xl bg-brand-dark p-6 text-center text-white">
          <p className="text-base font-bold">찾으시는 답이 없으신가요?</p>
          <p className="mt-2 text-sm text-gray-300">
            카카오톡 채널로 직접 문의해주세요
          </p>
          <a
            href="http://pf.kakao.com/_kpsxfn" target="_blank" rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full bg-brand-red px-6 py-3 font-bold text-white"
          >
            카카오톡 1:1 문의 &rarr;
          </a>
        </div>
      </div>

      <div className="pb-12" />
    </div>
  );
}
