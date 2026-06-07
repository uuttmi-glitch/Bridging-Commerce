import { Menu, ArrowRight } from "lucide-react";

export function TopNavBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface dark:bg-background shadow-sm">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-6 h-20">
        <div className="flex items-center gap-2">
          <img
            alt="Bridging Commerce Logo"
            className="h-8 object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj4q6vTd3bDG5QMt0zLTBr_ToUAkkSC5EzdT7_NDpldvGZy_GMgue43a6EJwJnRx-7a0eZj9pRkG20YvKZfvLDVmxUpTY6XxwVcafmLby-bXrfZ4IHJWn-_JbgaT2VJWfCQDxljK1LhqtGjElmPcNc4uOZnqLyGe3q_LAFVQEWXD39io4N1BRmA9tyv4TGEVLu4_w1_aQNoQPuZbV1fHm4IznpRdH5wIBfrawdRRN9T9sjz9yJB6U79gQOTTxI0iqwYakKSdNm5qE"
          />
          <span className="font-headline-md text-headline-md text-primary dark:text-inverse-primary hidden md:block">
            Bridging Commerce
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 font-body-md text-label-md">
          <a
            className="text-primary dark:text-inverse-primary border-b-2 border-secondary font-bold pb-1 active:scale-95 transition-transform duration-100"
            href="#services"
          >
            서비스 소개
          </a>
          <a
            className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-inverse-primary transition-colors hover:bg-surface-container-low dark:hover:bg-surface-container-highest px-2 py-1 rounded text-center leading-[1.2]"
            href="#process"
          >
            진행<br />프로세스
          </a>
          <a
            className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-inverse-primary transition-colors hover:bg-surface-container-low dark:hover:bg-surface-container-highest px-2 py-1 rounded text-center leading-[1.2]"
            href="#countries"
          >
            진출<br />국가. 채널
          </a>
          <a
            className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-inverse-primary transition-colors hover:bg-surface-container-low dark:hover:bg-surface-container-highest px-2 py-1 rounded text-center leading-[1.2]"
            href="#success"
          >
            성공<br />사례
          </a>
          <a
            className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-inverse-primary transition-colors hover:bg-surface-container-low dark:hover:bg-surface-container-highest px-2 py-1 rounded text-center leading-[1.2]"
            href="#contact"
          >
            상담<br />문의
          </a>
        </nav>
        <a
          className="hidden md:inline-flex items-center justify-center bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md hover:bg-primary-container transition-colors shadow-sm"
          href="#contact"
        >
          <span className="text-right leading-[1.2]">해외 진출<br />상담받기</span>
          <ArrowRight className="ml-2 w-[18px] h-[18px] shrink-0" strokeWidth={2.5} />
        </a>
        <button className="md:hidden text-primary p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
