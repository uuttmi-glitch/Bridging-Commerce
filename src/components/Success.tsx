import { ArrowRight, Star, TrendingUp } from "lucide-react";

export function Success() {
  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-low scroll-mt-20" id="success">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-display text-display text-primary mb-4">성공 사례</h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl">
              브릿징커머스와 함께 글로벌 무대로 도약한 브랜드들의 이야기입니다.
            </p>
          </div>
          <button className="flex items-center gap-2 text-primary font-label-md hover:text-primary-container transition-colors">
            모든 사례 보기
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Case 1 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-surface-variant group cursor-pointer hover:shadow-lg transition-all flex flex-col">
            <div className="h-56 bg-surface-variant relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/5 transition-colors group-hover:bg-transparent z-10"></div>
              <div className="font-display text-4xl text-outline-variant opacity-20">K-Beauty</div>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-1 bg-surface-container-low text-on-surface-variant text-xs rounded font-label-sm">K-Beauty</span>
                <span className="px-2 py-1 bg-surface-container-low text-on-surface-variant text-xs rounded font-label-sm">Amazon US</span>
              </div>
              <h3 className="font-headline-md text-primary mb-3 leading-tight">A 화장품 브랜드, 북미 아마존 매출 300% 증가</h3>
              <p className="text-on-surface-variant text-body-md mb-8">
                아마존 US 입점부터 현지화 마케팅, FBA 물류까지 통합 지원을 통해 단 6개월 만에 주요 카테고리 베스트셀러 10위권에 안정적으로 진입한 사례입니다.
              </p>
              <div className="flex items-center justify-between border-t border-surface-variant pt-5 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <span className="block text-outline text-xs font-label-sm uppercase">매출 성장 지표</span>
                    <span className="font-headline-md text-primary">+ 300%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case 2 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-surface-variant group cursor-pointer hover:shadow-lg transition-all flex flex-col">
            <div className="h-56 bg-surface-variant relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/5 transition-colors group-hover:bg-transparent z-10"></div>
              <div className="font-display text-4xl text-outline-variant opacity-20">K-Food</div>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-1 bg-surface-container-low text-on-surface-variant text-xs rounded font-label-sm">K-Food</span>
                <span className="px-2 py-1 bg-surface-container-low text-on-surface-variant text-xs rounded font-label-sm">Rakuten</span>
              </div>
              <h3 className="font-headline-md text-primary mb-3 leading-tight">B 식품 기업, 일본 라쿠텐 성공적 안착</h3>
              <p className="text-on-surface-variant text-body-md mb-8">
                가장 까다로운 일본 내 규제 리스크를 스크리닝하고 현지 식문화에 맞춘 제품 상세페이지 최적화(SEO)로 포지셔닝을 달성했습니다.
              </p>
              <div className="flex items-center justify-between border-t border-surface-variant pt-5 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-outline text-xs font-label-sm uppercase">초기 진입 트래픽</span>
                    <span className="font-headline-md text-primary">Top 5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
