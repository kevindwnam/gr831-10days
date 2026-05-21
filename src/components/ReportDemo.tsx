"use client";

export default function ReportDemo() {
  return (
    <>
      <style jsx>{`
        .rd-card {
          width: 100%;
          max-width: 440px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 10px 48px rgba(13,28,58,.16), 0 2px 8px rgba(13,28,58,.08);
          font-family: 'Noto Sans KR', sans-serif;
        }

        /* HEADER */
        .rd-header {
          background: linear-gradient(135deg, #0d1c3a 0%, #1a3260 55%, #1e4fa0 100%);
          padding: 18px 20px;
          position: relative;
          overflow: hidden;
        }
        .rd-header::before {
          content: '';
          position: absolute;
          top: -50px;
          right: -40px;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: rgba(255,255,255,.04);
        }
        .rd-header-top {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
        }
        .rd-round-badge {
          background: #0ea5e9;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          padding: 5px 14px;
          border-radius: 20px;
          letter-spacing: .3px;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(14,165,233,.4);
        }
        .rd-student-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          position: relative;
          z-index: 1;
        }
        .rd-student-name {
          font-size: 21px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -.5px;
          line-height: 1.2;
        }
        .rd-student-name span {
          font-size: 13px;
          font-weight: 400;
          color: rgba(255,255,255,.5);
          margin-left: 3px;
        }
        .rd-student-meta {
          font-size: 11px;
          color: rgba(255,255,255,.45);
          margin-top: 3px;
          line-height: 1.5;
        }
        .rd-exam-date {
          font-size: 11px;
          color: rgba(255,255,255,.45);
          text-align: right;
          line-height: 1.7;
        }
        .rd-exam-date strong {
          display: block;
          font-size: 12px;
          font-weight: 700;
          color: rgba(255,255,255,.85);
        }

        /* RING SECTION */
        .rd-ring-section {
          background: linear-gradient(160deg, #1c2d40 0%, #243650 50%, #1a2d44 100%);
          padding: 16px 12px 14px;
          border-bottom: 1.5px solid #2a3f58;
        }
        .rd-ring-title {
          font-size: 9px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,.38);
          font-weight: 700;
          text-align: center;
          margin-bottom: 12px;
        }
        .rd-ring-row {
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
        }
        .rd-ring-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
        }
        .rd-ring-label {
          font-size: 11px;
          font-weight: 700;
          color: rgba(255,255,255,.88);
          letter-spacing: .3px;
        }
        .rd-ring-sub {
          font-size: 9px;
          color: rgba(255,255,255,.38);
          font-family: 'DM Mono', monospace;
        }
        .rd-donut {
          width: 82px;
          height: 82px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .rd-donut-inner {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: linear-gradient(160deg, #1c2d40 0%, #243650 50%, #1a2d44 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 800;
          color: #fff;
          font-family: 'DM Mono', monospace;
        }

        /* SEASON DOTS */
        .rd-season-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
          margin-top: 12px;
          padding-top: 10px;
          border-top: 1px solid rgba(255,255,255,.07);
        }
        .rd-season-tag {
          font-size: 9px;
          color: rgba(255,255,255,.28);
          letter-spacing: 1px;
          font-weight: 700;
        }
        .rd-dots {
          display: flex;
          gap: 4px;
          align-items: center;
        }
        .rd-sdot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }
        .rd-sdot-done { background: #34d399; }
        .rd-sdot-curr { background: #38bdf8; box-shadow: 0 0 6px rgba(56,189,248,.6); }
        .rd-sdot-ahead { background: rgba(255,255,255,.18); }
        .rd-season-cnt {
          font-size: 10px;
          color: rgba(255,255,255,.42);
          font-weight: 700;
          font-family: 'DM Mono', monospace;
        }

        /* BODY */
        .rd-body {
          padding: 16px 18px 4px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .rd-sec-label {
          font-size: 9px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #94a3b8;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .rd-divider {
          height: 1.5px;
          background: #f1f5f9;
        }

        /* STATS ROW */
        .rd-stats-row {
          display: flex;
          gap: 8px;
        }
        .rd-stat-card {
          flex: 1;
          background: #f8fafc;
          border: 1.5px solid #f1f5f9;
          border-radius: 12px;
          padding: 10px 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .rd-s-label {
          font-size: 9px;
          color: #94a3b8;
          letter-spacing: .5px;
          font-weight: 600;
          text-transform: uppercase;
        }
        .rd-s-val {
          font-size: 17px;
          font-weight: 700;
          font-family: 'DM Mono', monospace;
          line-height: 1.1;
        }
        .rd-s-val-danger {
          color: #ef4444;
          font-family: 'Noto Sans KR', sans-serif;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.1;
        }
        .rd-s-val-navy {
          color: #0d1c3a;
        }
        .rd-s-val-sky {
          color: #0ea5e9;
        }
        .rd-delta-row {
          display: flex;
          align-items: center;
          gap: 3px;
          margin-top: 1px;
        }
        .rd-tri-down { color: #2563eb; font-size: 11px; }
        .rd-delta-val { font-size: 11px; font-weight: 700; color: #2563eb; }

        /* TABLE */
        .rd-table-wrap {
          border-radius: 12px;
          overflow: hidden;
          border: 1.5px solid #f1f5f9;
        }
        .rd-table-wrap table {
          width: 100%;
          border-collapse: collapse;
          font-size: 11px;
        }
        .rd-table-wrap thead tr {
          background: #0d1c3a;
        }
        .rd-table-wrap thead th {
          padding: 7px 4px;
          color: rgba(255,255,255,.85);
          font-weight: 600;
          text-align: center;
          font-size: 10px;
          letter-spacing: .3px;
        }
        .rd-table-wrap thead th:first-child {
          text-align: left;
          padding-left: 10px;
        }
        .rd-table-wrap tbody tr {
          border-bottom: 1px solid #f1f5f9;
        }
        .rd-table-wrap tbody tr:last-child {
          border-bottom: none;
        }
        .rd-table-wrap tbody tr:nth-child(even) {
          background: #f8fafc;
        }
        .rd-table-wrap tbody td {
          padding: 5px 4px;
          text-align: center;
          color: #1e293b;
          font-size: 11px;
        }
        .rd-table-wrap tbody td:first-child {
          text-align: left;
          padding-left: 10px;
          font-weight: 500;
        }
        .rd-table-wrap tbody td.rd-num {
          font-family: 'DM Mono', monospace;
        }
        .rd-chip-o {
          display: inline-flex;
          width: 20px;
          height: 20px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #d1fae5;
          color: #10b981;
          font-weight: 700;
          font-size: 12px;
        }
        .rd-chip-x {
          display: inline-flex;
          width: 20px;
          height: 20px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #fee2e2;
          color: #ef4444;
          font-weight: 700;
          font-size: 12px;
        }
        .rd-diff-h { color: #ef4444; font-weight: 600; }
        .rd-diff-m { color: #0ea5e9; font-weight: 600; }
        .rd-diff-l { color: #10b981; font-weight: 600; }
        .rd-tag-on {
          font-size: 9px;
          background: #dbeafe;
          color: #1d4ed8;
          padding: 2px 5px;
          border-radius: 4px;
          font-weight: 600;
        }

        /* FADE OUT */
        .rd-fade-overlay {
          position: relative;
        }
        .rd-fade-overlay::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 48px;
          background: linear-gradient(transparent, #ffffff);
          pointer-events: none;
        }

        /* FOOTER */
        .rd-footer {
          padding: 10px 20px 16px;
          border-top: 1.5px solid #f1f5f9;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 4px;
        }
        .rd-footer-l {
          font-size: 11px;
          color: #94a3b8;
        }
        .rd-footer-r {
          font-size: 10px;
          letter-spacing: 1.5px;
          color: #2563eb;
          font-weight: 700;
        }
      `}</style>

      <div className="rd-card">
        {/* HEADER */}
        <div className="rd-header">
          <div className="rd-header-top">
            <span className="rd-round-badge">정규반 모의고사 2회</span>
          </div>
          <div className="rd-student-row">
            <div>
              <div className="rd-student-name">
                홍길동 <span>학생</span>
              </div>
              <div className="rd-student-meta">광교시대원 · 인문계열</div>
            </div>
            <div className="rd-exam-date">
              시행일<strong>2026. 05. 09</strong>
            </div>
          </div>
        </div>

        {/* RING SECTION */}
        <div className="rd-ring-section">
          <div className="rd-ring-title">나의 학습 완성 현황</div>
          <div className="rd-ring-row">
            {/* 출결 40% */}
            <div className="rd-ring-item">
              <div
                className="rd-donut"
                style={{
                  background: `conic-gradient(#38bdf8 0% 40%, rgba(255,255,255,.13) 40% 100%)`,
                }}
              >
                <div className="rd-donut-inner">40%</div>
              </div>
              <div className="rd-ring-label">출결</div>
              <div className="rd-ring-sub">시즌3 · 2/5회</div>
            </div>
            {/* 수학 40% */}
            <div className="rd-ring-item">
              <div
                className="rd-donut"
                style={{
                  background: `conic-gradient(#818cf8 0% 40%, rgba(255,255,255,.13) 40% 100%)`,
                }}
              >
                <div className="rd-donut-inner">40%</div>
              </div>
              <div className="rd-ring-label">수학</div>
              <div className="rd-ring-sub">86 / 216 문제</div>
            </div>
            {/* 국어 40% */}
            <div className="rd-ring-item">
              <div
                className="rd-donut"
                style={{
                  background: `conic-gradient(#34d399 0% 40%, rgba(255,255,255,.13) 40% 100%)`,
                }}
              >
                <div className="rd-donut-inner">40%</div>
              </div>
              <div className="rd-ring-label">국어</div>
              <div className="rd-ring-sub">76 / 189 지문</div>
            </div>
          </div>

          {/* SEASON DOTS */}
          <div className="rd-season-row">
            <span className="rd-season-tag">SEASON</span>
            <div className="rd-dots">
              <div className="rd-sdot rd-sdot-done" />
              <div className="rd-sdot rd-sdot-done" />
              <div className="rd-sdot rd-sdot-curr" />
              <div className="rd-sdot rd-sdot-ahead" />
              <div className="rd-sdot rd-sdot-ahead" />
              <div className="rd-sdot rd-sdot-ahead" />
              <div className="rd-sdot rd-sdot-ahead" />
            </div>
            <span className="rd-season-cnt">3 / 7</span>
          </div>
        </div>

        {/* BODY */}
        <div className="rd-body">
          {/* STATS */}
          <div className="rd-stats-row">
            <div className="rd-stat-card">
              <span className="rd-s-label">성취도</span>
              <span className="rd-s-val-danger">위기</span>
            </div>
            <div className="rd-stat-card">
              <span className="rd-s-label">내 점수</span>
              <span className="rd-s-val rd-s-val-navy">
                56{" "}
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 400,
                    color: "#94a3b8",
                  }}
                >
                  / 150
                </span>
              </span>
              <div className="rd-delta-row">
                <span className="rd-tri-down">&#9660;</span>
                <span className="rd-delta-val">-0.4점</span>
              </div>
            </div>
            <div className="rd-stat-card">
              <span className="rd-s-label">전체 평균</span>
              <span className="rd-s-val rd-s-val-sky">56.4</span>
              <div
                style={{
                  fontSize: 9,
                  color: "#94a3b8",
                  marginTop: 1,
                }}
              >
                / 150점
              </div>
            </div>
          </div>

          <div className="rd-divider" />

          {/* QUESTION TABLE (preview) */}
          <div>
            <div className="rd-sec-label">문항별 세부 분석</div>
            <div className="rd-fade-overlay">
              <div className="rd-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th style={{ width: "23%" }}>분류</th>
                      <th style={{ width: "30%" }}>세부항목</th>
                      <th style={{ width: "9%" }}>배점</th>
                      <th style={{ width: "9%" }}>점수</th>
                      <th style={{ width: "9%" }}>난도</th>
                      <th style={{ width: "10%" }}>반영</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>화법과 작문</td>
                      <td style={{ fontSize: 10 }}>협상</td>
                      <td className="rd-num">10</td>
                      <td>
                        <span className="rd-chip-x">&#10005;</span>
                      </td>
                      <td className="rd-diff-l">하</td>
                      <td>
                        <span className="rd-tag-on">반영</span>
                      </td>
                    </tr>
                    <tr>
                      <td>독서</td>
                      <td style={{ fontSize: 10 }}>법</td>
                      <td className="rd-num">10</td>
                      <td>
                        <span className="rd-chip-o">&#9675;</span>
                      </td>
                      <td className="rd-diff-h">상</td>
                      <td>
                        <span className="rd-tag-on">반영</span>
                      </td>
                    </tr>
                    <tr>
                      <td>독서</td>
                      <td style={{ fontSize: 10 }}>인문</td>
                      <td className="rd-num">10</td>
                      <td>
                        <span className="rd-chip-x">&#10005;</span>
                      </td>
                      <td className="rd-diff-m">중</td>
                      <td>
                        <span className="rd-tag-on">반영</span>
                      </td>
                    </tr>
                    <tr>
                      <td>문학</td>
                      <td style={{ fontSize: 10 }}>현대소설</td>
                      <td className="rd-num">10</td>
                      <td>
                        <span className="rd-chip-x">&#10005;</span>
                      </td>
                      <td className="rd-diff-m">중</td>
                      <td>
                        <span className="rd-tag-on">반영</span>
                      </td>
                    </tr>
                    <tr>
                      <td>문학</td>
                      <td style={{ fontSize: 10 }}>현대시</td>
                      <td className="rd-num">10</td>
                      <td>
                        <span className="rd-chip-x">&#10005;</span>
                      </td>
                      <td className="rd-diff-l">하</td>
                      <td>
                        <span className="rd-tag-on">반영</span>
                      </td>
                    </tr>
                    <tr>
                      <td>독서</td>
                      <td style={{ fontSize: 10 }}>과학</td>
                      <td className="rd-num">10</td>
                      <td>
                        <span className="rd-chip-o">&#9675;</span>
                      </td>
                      <td className="rd-diff-h">상</td>
                      <td>
                        <span className="rd-tag-on">반영</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="rd-footer">
          <span className="rd-footer-l">2026년 05월 09일 발행</span>
          <span className="rd-footer-r">Report Card</span>
        </div>
      </div>
    </>
  );
}
