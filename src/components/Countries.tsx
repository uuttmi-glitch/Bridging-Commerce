import { Globe, ShoppingCart, MapPin } from "lucide-react";

export function Countries() {
  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface scroll-mt-20" id="countries">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-display text-primary mb-4">진출 국가 및 채널</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            글로벌 주요 시장의 특성과 소비자 니즈를 분석하여,<br className="hidden md:block" />
            성공 가능성이 가장 높은 이커머스 채널을 매칭합니다.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl bg-surface-container-lowest border border-surface-variant shadow-sm hover:-translate-y-1 transition-transform group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-headline-md text-primary">북미 및 유럽</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
                <div className="w-2 h-2 rounded-full bg-secondary shrink-0"></div>
                <span><strong>Amazon</strong> (미국, 유럽 전역)</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
                <div className="w-2 h-2 rounded-full bg-secondary shrink-0"></div>
                <span><strong>Walmart</strong> (미국 최대 리테일)</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
                <div className="w-2 h-2 rounded-full bg-secondary shrink-0"></div>
                <span><strong>Ebay</strong> (글로벌 경매 & 커머스)</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-xl bg-surface-container-lowest border border-surface-variant shadow-sm hover:-translate-y-1 transition-transform group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-headline-md text-primary">일본</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
                <div className="w-2 h-2 rounded-full bg-secondary shrink-0"></div>
                <span><strong>Rakuten</strong> (라쿠텐, 시장 점유율 1위)</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
                <div className="w-2 h-2 rounded-full bg-secondary shrink-0"></div>
                <span><strong>Amazon Japan</strong> (고도화된 물류)</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
                <div className="w-2 h-2 rounded-full bg-secondary shrink-0"></div>
                <span><strong>Qoo10</strong> (뷰티, 패션 타겟 특화)</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-xl bg-surface-container-lowest border border-surface-variant shadow-sm hover:-translate-y-1 transition-transform group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <h3 className="font-headline-md text-primary">동남아시아</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
                <div className="w-2 h-2 rounded-full bg-secondary shrink-0"></div>
                <span><strong>Shopee</strong> (쇼피, 동남아 1위)</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
                <div className="w-2 h-2 rounded-full bg-secondary shrink-0"></div>
                <span><strong>Lazada</strong> (라자다, 주요 마켓 플랫폼)</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
                <div className="w-2 h-2 rounded-full bg-secondary shrink-0"></div>
                <span><strong>Global Mall</strong> (기타 신흥 주요 플랫폼)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
