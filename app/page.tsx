import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="text-primary flex">
                <span className="material-symbols-outlined text-3xl">
                  menu_book
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                경조사 장부
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                href="#"
              >
                서비스 소개
              </a>
              <a
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                href="#"
              >
                요금제
              </a>
              <a
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                href="#"
              >
                고객지원
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all">
                로그인
              </button>
              <button className="px-4 py-2 text-sm font-semibold bg-primary text-white rounded-lg hover:bg-primary/90 shadow-sm transition-all">
                회원가입
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h1 className="font-extrabold text-slate-900 dark:text-white leading-[1.2] tracking-tight mb-6 text-2xl sm:text-4xl lg:text-5xl">
                  소중한 마음을 기록하고
                  <br />
                  <span className="text-primary whitespace-nowrap">
                    관리하는 가장 스마트한 방법
                  </span>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-lg">
                  결혼식, 장례식, 돌잔치 등 복잡한 경조사 비용 관리, 이제 종이
                  장부 대신 디지털로 간편하게 시작하세요. 소중한 인연을 더 깊게
                  지켜드립니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                    시작하기{" "}
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </button>
                  <button className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                    데모 보기
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 relative overflow-hidden group">
                  <img
                    alt="Interface Mockup"
                    className="rounded-xl w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkpda2dlAMlj8nJkU7PcryRL7dYe__bx1xn5jmNXq2lxcif0eLl9WfXVDOlT_ccfvOKi7j5xgty3xFsX-c2VbUnsksAlXpcVt4L59E8ik9xq_kC0zj5QAcp6ibizjhd_Z0wNtX2SGLn5WAAPJT3HUASWBo005-pSE5ZnfkuozPfUFHUL9dTrrVaDSkWssFkRBA7y-umVoy0J9nTuffAOw4P8MCW3sFub9eBff5uV-cFkBo6yX3iSMwAHeVT5UmGqBmnPRzaaZ6C9X3"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
                주요 기능
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                경조사 관리가 쉬워지는 특별한 기능
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark hover:border-primary transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">edit_note</span>
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                  간편한 기록
                </h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  언제 어디서나 모바일로 받은 마음과 보낸 마음을 빠르게 기록할
                  수 있습니다. 성함, 금액, 관계를 단 몇 초 만에 입력하세요.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark hover:border-primary transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                  통계 및 그래프
                </h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  연도별, 경조사별 지출과 수입을 한눈에 파악할 수 있는 시각화
                  리포트를 제공합니다. 스마트하게 자산을 관리하세요.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark hover:border-primary transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">cloud_sync</span>
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                  클라우드 동기화
                </h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  데이터가 클라우드에 안전하게 저장되어 기기를 변경해도 데이터
                  유실 걱정이 없습니다. 여러 기기에서 실시간으로 확인하세요.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
                요금제
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                사용자에게 딱 맞는 계획을 선택하세요
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 flex flex-col h-full">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  무료 (개인용)
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                  기본적인 기록 관리가 필요한 분들을 위해
                </p>
                <div className="mb-8">
                  <span className="text-4xl font-black text-slate-900 dark:text-white">
                    ₩0
                  </span>
                  <span className="text-slate-500 text-sm">/평생 무료</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary">
                      check_circle
                    </span>
                    <span>최대 100건 기록 가능</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary">
                      check_circle
                    </span>
                    <span>기본 통계 제공</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary">
                      check_circle
                    </span>
                    <span>클라우드 백업 (월 1회)</span>
                  </li>
                </ul>
                <button className="w-full py-3 px-4 border border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-colors">
                  선택하기
                </button>
              </div>
              {/* Basic Plan */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-primary ring-4 ring-primary/5 flex flex-col h-full relative">
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  베이직
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                  본격적인 경조사 관리가 필요한 분들을 위해
                </p>
                <div className="mb-8">
                  <span className="text-4xl font-black text-slate-900 dark:text-white">
                    ₩4,900
                  </span>
                  <span className="text-slate-500 text-sm">/월</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary">
                      check_circle
                    </span>
                    <span>무제한 기록 작성</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary">
                      check_circle
                    </span>
                    <span>상세 시각화 리포트</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary">
                      check_circle
                    </span>
                    <span>실시간 기기 동기화</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary">
                      check_circle
                    </span>
                    <span>엑셀 내보내기 지원</span>
                  </li>
                </ul>
                <button className="w-full py-3 px-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 shadow-md">
                  선택하기
                </button>
              </div>
              {/* Premium Plan */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 flex flex-col h-full">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  프리미엄
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                  가족 공유 및 고급 기능이 필요한 분들을 위해
                </p>
                <div className="mb-8">
                  <span className="text-4xl font-black text-slate-900 dark:text-white">
                    ₩9,900
                  </span>
                  <span className="text-slate-500 text-sm">/월</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary">
                      check_circle
                    </span>
                    <span>가족 계정 공유 (최대 5인)</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary">
                      check_circle
                    </span>
                    <span>커스텀 카테고리 생성</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary">
                      check_circle
                    </span>
                    <span>우선 고객 지원 서비스</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary">
                      check_circle
                    </span>
                    <span>광고 완전 제거</span>
                  </li>
                </ul>
                <button className="w-full py-3 px-4 border border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-colors">
                  선택하기
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              지금 바로 무료로 시작해보세요
            </h2>
            <p className="mb-10 text-lg text-blue-100">
              복잡한 경조사 관리, 경조사 장부가 함께하겠습니다. 30,000명 이상의
              사용자가 이미 경험하고 있습니다.
            </p>
            <button className="px-10 py-4 bg-white text-primary font-black text-xl rounded-xl hover:bg-slate-50 shadow-xl transition-all">
              회원가입하고 시작하기
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="text-primary">
                  <span className="material-symbols-outlined text-3xl">
                    menu_book
                  </span>
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  경조사 장부
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-6">
                소중한 사람들과의 마음의 기록, 안전하고 똑똑하게 관리하는
                대한민국 대표 경조사 관리 서비스입니다.
              </p>
              <div className="flex gap-4">
                <a
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined">public</span>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined">smartphone</span>
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 dark:text-white mb-6">
                서비스
              </h5>
              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    서비스 소개
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    기능 안내
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    요금제
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    업데이트 소식
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 dark:text-white mb-6">
                고객지원
              </h5>
              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    자주 묻는 질문
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    1:1 문의하기
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    이용약관
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    개인정보처리방침
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © 2024 경조사 장부 (Family Ledger Inc). All rights reserved.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              서울특별서 강남구 테헤란로 123 | 대표전화: 1588-0000 | 이메일:
              support@ledger.kr
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
