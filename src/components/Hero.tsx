import { Globe, TrendingUp, ClipboardCheck, Languages, Headset } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-surface-container-lowest overflow-hidden bg-surface-container-low">
      <div className="absolute inset-0 bg-gradient-to-br from-surface-container-low to-surface-container-lowest opacity-50 z-0"></div>
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMwIDBoMzB2NjBoLTMweiIgZmlsbD0iIzAwMTczNiIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvc3ZnPg==')] z-0 pointer-events-none"></div>
      <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10 py-section-gap-mobile md:py-section-gap-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed rounded-full text-on-primary-fixed font-label-sm mb-6">
              <Globe className="w-4 h-4" />
              <span>Global Commerce Partner</span>
            </div>
            <h1 className="font-display text-display text-primary mb-6 leading-tight">
              한국 브랜드의 해외 이커머스 진출을<br />
              연결합니다
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
              Amazon, Rakuten, Global Mall 등 주요 해외 온라인 채널 진입부터 운영, 물류, CS까지 브릿징커머스가 중소기업의 글로벌 판매 여정을 함께 설계합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                className="inline-flex items-center justify-center bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md hover:bg-primary-container transition-all shadow-[0_4px_20px_rgba(0,23,54,0.15)] hover:-translate-y-0.5"
                href="#contact"
              >
                해외 이커머스 진출 상담 신청
              </a>
              <a
                className="inline-flex items-center justify-center bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-lg font-label-md hover:bg-surface-container-low transition-all"
                href="#services"
              >
                서비스 소개 보기
              </a>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="w-full h-[500px] rounded-xl overflow-hidden bg-surface-container-low shadow-[0_8px_30px_rgba(0,43,91,0.1)] border border-surface-variant relative">
              <div className="absolute top-8 right-8 bg-surface-container-lowest p-4 rounded-lg shadow-sm border border-surface-variant flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
                  <TrendingUp className="text-on-primary-fixed w-6 h-6" />
                </div>
                <div>
                  <p className="font-label-sm text-outline">Global Sales</p>
                  <p className="font-headline-md text-primary">+240%</p>
                </div>
              </div>
              <div className="absolute bottom-8 left-8 bg-surface-container-lowest p-4 rounded-lg shadow-sm border border-surface-variant">
                <p className="font-label-sm text-outline mb-2">Active Channels</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-surface-container-low rounded text-xs text-on-surface">Amazon</span>
                  <span className="px-2 py-1 bg-surface-container-low rounded text-xs text-on-surface">Rakuten</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="services" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 border-t border-surface-variant pt-8 scroll-mt-24">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0">
              <ClipboardCheck className="text-secondary w-5 h-5" />
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-primary mb-1 text-[20px]">입점 전략 (진단)</h3>
              <p className="font-body-md text-on-surface-variant text-sm">데이터 기반 채널 적합성 분석</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0">
              <Languages className="text-secondary w-5 h-5" />
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-primary mb-1 text-[20px]">상품 현지화 (최적화)</h3>
              <p className="font-body-md text-on-surface-variant text-sm">타겟 시장 맞춤형 콘텐츠 제작</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0">
              <Headset className="text-secondary w-5 h-5" />
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-primary mb-1 text-[20px]">운영 관리 (지원)</h3>
              <p className="font-body-md text-on-surface-variant text-sm">CS, 물류, 재고 통합 관리</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
