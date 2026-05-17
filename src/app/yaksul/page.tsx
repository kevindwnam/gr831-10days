import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "약술형논술이란? | 십일전략",
  description:
    "가천대학교 약술형논술 전형의 정의와 특징, 합격 전략을 안내합니다.",
};

export default function YaksulPage() {
  return (
    <div className="mx-auto max-w-lg px-5 py-6">
      {/* 상단 헤더 */}
      <div className="flex items-center">
        <Link href="/" className="text-sm text-brand-gray">
          &larr; 홈
        </Link>
      </div>
      <div className="mt-3 text-center">
        <h1 className="font-serif text-xl font-black">약술형논술이란?</h1>
        <p className="mt-1 text-sm text-brand-gray">
          정의 · 특징 · 출제 범위 · 전략
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {/* 카드 1: 정의 */}
        <div className="overflow-hidden rounded-2xl border-t-4 border-brand-red bg-white p-6">
          <h2 className="font-serif text-lg font-bold">
            약술형논술, 무엇인가요?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-black">
            약술형논술은 가천대학교를 중심으로 시행되는 대입 논술 전형입니다.
            단답형 및 짧은 서술형 답안을 요구하는 시험으로, 기존 논술보다
            부담이 적습니다. 국어는 제시문의 핵심정보를 찾아 적는 단답형 위주,
            수학은 풀이 과정의 논리적 서술을 평가하여 부분 점수를 부여하는
            방식입니다. 내신 3~6등급 학생에게 &lsquo;역전의 기회&rsquo;가 될
            수 있는 전형으로, 현재 15개 대학에서 시행하고 있습니다.
          </p>
        </div>

        {/* 카드 2: 4가지 특징 */}
        <div className="rounded-2xl bg-white p-6">
          <h2 className="font-serif text-lg font-bold">
            약술형논술의 4가지 특징
          </h2>
          <div className="mt-4 flex flex-col gap-4">
            {[
              {
                num: "1",
                title: "시험 성격 및 난이도",
                desc: "국어는 약식 논술 / 단답형·짧은 문장 위주로 긴 글쓰기가 없습니다. 수학은 풀이 과정 서술(보통 4줄 내외)로 논리적 작성이 중요하지만 복잡한 증명은 없습니다.",
              },
              {
                num: "2",
                title: "채점 방식 및 전략",
                desc: "수학은 정답이 틀려도 풀이 과정이 맞으면 부분 점수를 획득할 수 있습니다. 가천대 기준 80분, 국어 15~20분 / 수학 60분으로 시간 관리가 핵심입니다.",
              },
              {
                num: "3",
                title: "누구에게 유리한가?",
                desc: "내신 6등급 이하도 역전 가능합니다. 수능 최저가 없거나 1~2개 영역만 충족하면 되는 대학이 많아, 모의고사 3~6등급 학생에게 '제2의 기회'입니다.",
              },
              {
                num: "4",
                title: "가천대 준비로 타 대학도 OK",
                desc: "약술형논술을 최초로 시행한 가천대를 기반으로 시행 대학이 확대되고 있습니다. 가천대를 준비하면 타 대학도 충분히 대비 가능한 일석이조 효과가 있습니다.",
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

        {/* 카드 3: 출제 범위 */}
        <div className="rounded-2xl bg-white p-6">
          <h2 className="font-serif text-lg font-bold">출제 범위</h2>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-gray-50 p-4 text-center">
              <p className="text-xs font-bold tracking-widest text-brand-red">
                국어
              </p>
              <p className="mt-2 text-sm font-bold">독서 · 문학</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-4 text-center">
              <p className="text-xs font-bold tracking-widest text-brand-red">
                수학
              </p>
              <p className="mt-2 text-sm font-bold">수학Ⅰ · 수학Ⅱ</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-brand-gray">
            수능 출제 범위와 동일하게 구성되어, 수능 공부와 약술형논술 대비를
            함께 진행할 수 있습니다.
          </p>
        </div>

        {/* 카드 4: 합격 전략 */}
        <div className="rounded-2xl bg-white p-6">
          <h2 className="font-serif text-lg font-bold">
            약술형논술, 어떻게 대비해야 하나요?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-black">
            가장 핵심은 EBS 연계 교재인 수능특강·수능완성의 완벽한 습득입니다.
            국어는 EBS 연계 교재의 주요 문학 작품과 독서 지문을 미리 파악하고,
            수학은 고난도 문제라도 포기하지 않고 반복 학습하여 풀이 과정 서술을
            통한 부분 점수까지 획득하는 것이 중요합니다. 출제 의도를 정확히
            파악하고 짧은 분량 안에 핵심을 정리하는 훈련이 필수입니다.
          </p>
          <div className="mt-4 rounded-xl bg-brand-dark p-4 text-center">
            <p className="text-sm font-bold text-white">
              출제 의도를 가장 잘 아는 팀
            </p>
            <p className="mt-1 text-xs text-gray-300">
              GR831 가천대 자문위원 출신 강사진
            </p>
          </div>
        </div>

        {/* 카드 5: 관련 페이지 안내 */}
        <div className="rounded-2xl bg-white p-6">
          <p className="text-base font-bold">더 자세히 알아보기</p>
          <div className="mt-3 flex flex-col gap-2">
            <Link
              href="/universities"
              className="flex items-center justify-between rounded-xl bg-gray-50 p-3 transition hover:bg-gray-100"
            >
              <span className="text-sm font-medium text-brand-black">
                대상 대학 안내
              </span>
              <span className="text-sm text-brand-gray">&rarr;</span>
            </Link>
            <Link
              href="/curriculum"
              className="flex items-center justify-between rounded-xl bg-gray-50 p-3 transition hover:bg-gray-100"
            >
              <span className="text-sm font-medium text-brand-black">
                커리큘럼 보기
              </span>
              <span className="text-sm text-brand-gray">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* 카드 6: CTA */}
        <div className="rounded-2xl bg-white p-6 text-center">
          <p className="text-base font-bold">약술형논술이 처음이신가요?</p>
          <p className="mt-2 text-sm text-brand-gray">
            카카오톡 채널에서 차근차근 안내드립니다
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
