import Image from "next/image";

interface InstructorCardProps {
  subject: string;
  name: string;
  phrase: string;
  slug: string;
  youtube?: string;
  career: string[];
  features: string[];
  management: string[];
}

export default function InstructorCard({
  subject,
  name,
  phrase,
  slug,
  youtube,
  career,
  features,
  management,
}: InstructorCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white">
      {/* 배너 이미지 */}
      <Image
        src={`/images/instructors/${slug}.png`}
        alt={`${name} ${subject}`}
        width={600}
        height={212}
        className="w-full"
      />

      <div className="p-5">
        {/* 이름 / 과목 */}
        <p className="text-[11px] font-semibold tracking-wider text-brand-red">
          {subject}
        </p>
        <p className="mt-0.5 text-lg font-bold text-brand-black">{name}</p>
        <p className="text-sm text-brand-gray">{phrase}</p>

        {/* 약력 */}
        <div className="mt-5">
          <p className="text-xs font-bold tracking-widest text-brand-red">
            약력
          </p>
          <ul className="mt-2 space-y-1">
            {career.map((item, i) => (
              <li key={i} className="text-[13px] leading-relaxed text-brand-black">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 수업 특징 */}
        <div className="mt-5">
          <p className="text-xs font-bold tracking-widest text-brand-red">
            수업 특징
          </p>
          <ul className="mt-2 space-y-1.5">
            {features.map((item, i) => (
              <li
                key={i}
                className="flex items-start text-[13px] leading-relaxed text-brand-black"
              >
                <span className="mr-1.5 mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Special Management */}
        <div className="mt-5">
          <p className="text-xs font-bold tracking-widest text-brand-red">
            Special Management
          </p>
          <div className="mt-2 rounded-lg bg-gray-50 p-3">
            <ul className="space-y-1.5">
              {management.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start text-[13px] leading-relaxed text-brand-black"
                >
                  <span className="mr-1.5 mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-dark" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* YouTube */}
        {youtube && (
          <div className="mt-5">
            <p className="text-xs font-bold tracking-widest text-brand-red">
              강의 영상
            </p>
            <div className="mt-2 aspect-video overflow-hidden rounded-lg">
              <iframe
                src={`https://www.youtube.com/embed/${youtube}`}
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                title={`${name} 강의 영상`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
