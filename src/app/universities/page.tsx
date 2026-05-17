import Link from "next/link";

// TODO: 보건간호계열 운영 대학 추가 확인 시 healthTag: true 추가
const universities = [
  { name: "가천대학교", recruit: "1,038명", method: "논술 100%", csat: true, main: true, healthTag: true },
  { name: "강남대학교", recruit: "309명", method: "논술 80% + 학생부 20%", csat: false, main: false, healthTag: false },
  { name: "고려대학교 세종", recruit: "150명(자연)", method: "논술 100%", csat: true, main: false, healthTag: false },
  { name: "국민대학교", recruit: "206명", method: "논술 100%", csat: true, main: false, healthTag: false },
  { name: "삼육대학교", recruit: "272명", method: "논술 100%", csat: true, main: false, healthTag: false },
  { name: "상명대학교", recruit: "98명", method: "논술 90% + 학생부 10%", csat: false, main: false, healthTag: false },
  { name: "서경대학교", recruit: "214명", method: "논술 100%", csat: false, main: false, healthTag: false },
  { name: "수원대학교", recruit: "432명", method: "논술 80% + 학생부 20%", csat: false, main: false, healthTag: false },
  { name: "신한대학교", recruit: "192명", method: "논술 90% + 학생부 10%", csat: false, main: false, healthTag: false },
  { name: "을지대학교", recruit: "214명", method: "논술 80% + 학생부 20%", csat: false, main: false, healthTag: false },
  { name: "한국공학대학교", recruit: "200명", method: "논술 66.7% + 학생부 33.3%", csat: false, main: false, healthTag: false },
  { name: "한국기술교육대학교", recruit: "150명", method: "논술전형", csat: false, main: false, healthTag: false },
  { name: "한국외대 글로벌", recruit: "68명(자연)", method: "논술 100%", csat: true, main: false, healthTag: false },
  { name: "한신대학교", recruit: "231명", method: "논술 80% + 학생부 20%", csat: false, main: false, healthTag: false },
  { name: "홍익대학교 세종", recruit: "195명", method: "논술 90% + 학생부 10%", csat: true, main: false, healthTag: false },
];

export default function UniversitiesPage() {
  return (
    <div className="mx-auto max-w-lg px-5 py-6">
      {/* 상단 헤더 */}
      <div className="flex items-center">
        <Link href="/" className="text-sm text-brand-gray">
          &larr; 홈
        </Link>
      </div>
      <div className="mt-3 text-center">
        <h1 className="font-serif text-xl font-black">대상 대학 안내</h1>
        <p className="mt-1 text-sm text-brand-gray">
          약술형논술 전형 운영 대학
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {/* 카드 1: 인트로 */}
        <div className="overflow-hidden rounded-2xl border-t-4 border-brand-red bg-white p-6">
          <h2 className="font-serif text-lg font-bold">
            약술형논술 전형 운영 대학
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-black">
            약술형논술 전형은 가천대학교를 중심으로 다수의 대학에서 운영하고
            있습니다. 십일전략은 가천대학교를 비롯한 모든 대상 대학의 출제
            패턴을 분석하여 합격을 위한 최적의 학습을 제공합니다.
          </p>
          <div className="mt-4 rounded-lg bg-red-50 p-3 text-xs text-brand-black">
            📌 보건간호계열 운영 대학은 별도 표시
          </div>
        </div>

        {/* 카드 2: 대학 리스트 */}
        <div className="rounded-2xl bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-lg font-bold">전체 대학</h2>
            <span className="text-sm font-bold text-brand-red">
              총 {universities.length}개교
            </span>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            {universities.map((u) => (
              <div
                key={u.name}
                className={`flex items-center justify-between rounded-xl p-4 ${u.main ? "border border-brand-red bg-red-50" : "bg-gray-50"}`}
              >
                <div>
                  <p className="text-base font-bold">
                    {u.name}
                    {u.main && (
                      <span className="ml-2 text-xs font-medium text-brand-red">
                        메인
                      </span>
                    )}
                  </p>
                  <p className="mt-0.5 text-xs text-brand-gray">
                    {u.recruit} · {u.method}
                    {u.csat ? " · 수능최저 있음" : ""}
                  </p>
                </div>
                {u.healthTag && (
                  <span className="shrink-0 rounded-full bg-brand-red px-2 py-1 text-xs text-white">
                    보건간호
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 카드 3: 합격 실적 */}
        <div className="rounded-2xl bg-white p-6">
          <p className="text-center text-xs tracking-widest text-brand-gray">
            2026학년도 합격 실적
          </p>
          <div className="mt-3 grid grid-cols-2 divide-x divide-brand-border">
            <div className="py-3 text-center">
              <p className="font-serif text-4xl font-black text-brand-red">
                135
              </p>
              <p className="mt-1 text-xs text-brand-gray">가천대학교 합격</p>
            </div>
            <div className="py-3 text-center">
              <p className="font-serif text-4xl font-black text-brand-red">
                34
              </p>
              <p className="mt-1 text-xs text-brand-gray">
                보건간호계열 합격
              </p>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-brand-gray">
            GR831약술형논술연구소 2026학년도 실적
          </p>
        </div>

        {/* 카드 4: CTA */}
        <div className="rounded-2xl bg-white p-6 text-center">
          <p className="text-base font-bold">
            지원 가능한 대학이 더 궁금하신가요?
          </p>
          <p className="mt-2 text-sm text-brand-gray">
            카카오톡 채널에서 상세히 안내드립니다
          </p>
          <a
            href="#"
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
