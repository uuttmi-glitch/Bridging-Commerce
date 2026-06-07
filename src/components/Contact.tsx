import { Send } from "lucide-react";

export function Contact() {
  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface scroll-mt-20" id="contact">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <h2 className="font-display text-display text-primary mb-4 leading-tight">성공적인 글로벌 진출,<br />지금 시작하세요</h2>
        <p className="font-body-lg text-on-surface-variant mb-12 max-w-xl mx-auto">
          브릿징커머스의 전문가들이 귀사의 제품과 타겟 시장을 분석하여 가장 효과적이고 확실한 맞춤형 진출 전략을 제안해 드립니다.
        </p>
        <div className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl shadow-lg border border-surface-variant text-left">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-label-md text-on-surface mb-2" htmlFor="company">회사명 *</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                  placeholder="(주)오픈마일" 
                />
              </div>
              <div>
                <label className="block font-label-md text-on-surface mb-2" htmlFor="name">담당자 성함 *</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                  placeholder="홍길동" 
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-label-md text-on-surface mb-2" htmlFor="email">이메일 *</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                  placeholder="user@company.com" 
                />
              </div>
              <div>
                <label className="block font-label-md text-on-surface mb-2" htmlFor="target">관심 진출 국가 및 채널</label>
                <input 
                  type="text" 
                  id="target" 
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                  placeholder="예: 미국 아마존, 일본 라쿠텐" 
                />
              </div>
            </div>
            <div>
              <label className="block font-label-md text-on-surface mb-2" htmlFor="message">문의 내용</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" 
                placeholder="제품에 대한 간단한 소개나 궁금하신 점을 자유롭게 남겨주세요."
              ></textarea>
            </div>
            <button 
              type="button" 
              className="w-full bg-primary text-on-primary py-4 mt-4 shadow-sm rounded-lg font-label-md hover:bg-primary-container hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 font-bold text-[16px]"
            >
              상담 신청하기
              <Send className="w-4 h-4 ml-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
