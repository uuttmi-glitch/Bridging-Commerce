export function Footer() {
  return (
    <footer className="bg-primary dark:bg-primary-container w-full py-16">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="font-headline-md text-headline-md text-on-primary dark:text-on-primary-container mb-4">Bridging Commerce</div>
          <p className="text-on-primary/80 dark:text-on-primary-container/80 font-body-md text-sm mb-6 max-w-sm">
            © 2024 Bridging Commerce. All rights reserved. Empowering SME growth through global trade.
          </p>
        </div>
        <div>
          <h4 className="font-label-md text-secondary-fixed-dim mb-4">빠른 링크</h4>
          <ul className="space-y-3 font-body-md text-label-md">
            <li><a className="text-on-primary/80 dark:text-on-primary-container/80 hover:text-secondary-fixed-dim hover:opacity-80 transition-opacity cursor-pointer" href="#services">서비스 소개</a></li>
            <li><a className="text-on-primary/80 dark:text-on-primary-container/80 hover:text-secondary-fixed-dim hover:opacity-80 transition-opacity cursor-pointer" href="#">개인정보처리방침</a></li>
            <li><a className="text-on-primary/80 dark:text-on-primary-container/80 hover:text-secondary-fixed-dim hover:opacity-80 transition-opacity cursor-pointer" href="#">이용약관</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-secondary-fixed-dim mb-4">연결</h4>
          <ul className="space-y-3 font-body-md text-label-md">
            <li><a className="text-on-primary/80 dark:text-on-primary-container/80 hover:text-secondary-fixed-dim hover:opacity-80 transition-opacity cursor-pointer" href="#">링크드인</a></li>
            <li><a className="text-on-primary/80 dark:text-on-primary-container/80 hover:text-secondary-fixed-dim hover:opacity-80 transition-opacity cursor-pointer" href="#contact">문의하기</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
