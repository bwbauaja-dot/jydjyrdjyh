/* bvi_way design reminder: editorial education atlas, warm paper surfaces, route-coral actions, asymmetric route-led composition, no unverified proof claims. */
import { FormEvent, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleHelp,
  FileText,
  GraduationCap,
  Menu,
  MessageCircle,
  MoveRight,
  Route,
  Sparkles,
  X,
} from "lucide-react";

const TELEGRAM_URL = "https://t.me/bvishechka";

const services = [
  { number: "01", title: "Олимпиады, ЕГЭ и ДВИ", text: "Разбираем, какие результаты и индивидуальные достижения могут повлиять на образовательный маршрут.", icon: Sparkles, tone: "coral" },
  { number: "02", title: "Поступление и выбор вуза", text: "Собираем понятную траекторию: направления, документы, сроки и следующие шаги без лишней суеты.", icon: GraduationCap, tone: "teal" },
  { number: "03", title: "Сложные образовательные ситуации", text: "Перевод, восстановление после отчисления и другие случаи, где важно сначала разобраться в вводных.", icon: Route, tone: "yellow" },
  { number: "04", title: "Документы и сопровождение", text: "Помогаем пройти этапы с личным кабинетом, документами и вступительными испытаниями.", icon: FileText, tone: "blue" },
];

const routeSteps = [
  { label: "Вводные", detail: "Вы рассказываете, что происходит сейчас", color: "coral" },
  { label: "Разбор", detail: "Мы фиксируем ограничения и возможности", color: "teal" },
  { label: "Маршрут", detail: "Собираем последовательность действий", color: "yellow" },
  { label: "Сопровождение", detail: "Остаёмся рядом на важных этапах", color: "blue" },
];

const faq = [
  { q: "Можно обратиться, если я ещё не определился с вузом?", a: "Да. На старте достаточно описать ситуацию и пожелания. Разбор может начаться как раз с выбора направления и образовательной траектории." },
  { q: "Какие данные нужны для первой оценки?", a: "Желаемый вуз или направление, текущий статус, результаты экзаменов, гражданство, наличие документов и короткое описание ситуации. Можно начать с того, что уже известно." },
  { q: "Стоимость указана за весь процесс?", a: "Примеры стоимости ниже относятся к олимпиадному направлению и требуют уточнения условий. Финальный состав работы и стоимость определяются после разбора ситуации." },
  { q: "Можно ли решить вопрос только консультацией?", a: "Формат зависит от задачи. Иногда достаточно одной консультации, а в сложных ситуациях может потребоваться сопровождение на нескольких этапах." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="bvi_way — на главную"><img src="/assets/bvi-way-logo-transparent.png" alt="" className="brand-mark" /><span className="brand-name">bvi<span>_way</span></span></a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Основная навигация">
          <a href="#services" onClick={() => setMenuOpen(false)}>Направления</a><a href="#route" onClick={() => setMenuOpen(false)}>Как работаем</a><a href="#cost" onClick={() => setMenuOpen(false)}>Стоимость</a><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        </nav>
        <a className="header-cta" href={TELEGRAM_URL} target="_blank" rel="noreferrer">Написать в Telegram <ArrowUpRight size={16} strokeWidth={2.4} /></a>
        <button className="menu-button" aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
      </header>

      <section className="hero section-pad" id="top">
        <div className="hero-copy reveal-up"><div className="eyebrow"><span className="eyebrow-line" /> образовательный навигатор <span className="eyebrow-index">[ 01 / 08 ]</span></div><h1>Сначала разберём вашу ситуацию.<em> Потом соберём маршрут.</em></h1><p className="hero-lead">Поступление, олимпиады, ЕГЭ, ДВИ и сложные образовательные вопросы — спокойно, по шагам и с опорой на ваши вводные.</p><div className="hero-actions"><a className="button button-primary" href="#assessment">Описать ситуацию <MoveRight size={18} /></a><a className="text-link" href={TELEGRAM_URL} target="_blank" rel="noreferrer">Спросить в Telegram <ArrowUpRight size={17} /></a></div><div className="hero-note"><span className="pin-dot" /> Первая оценка начинается с короткого разговора</div></div>
        <div className="hero-visual reveal-up delay-1"><div className="hero-image-wrap"><img src="/assets/spli4-hero-atlas.png" alt="Документы и маршрут поступления на рабочем столе" className="hero-image" /><div className="image-stamp">FIELD<br />NOTES<br /><strong>24/25</strong></div><div className="image-caption">карта поступления<br /><span>без лишних разворотов</span></div></div><div className="sticky-note">разберём<br />по шагам<span>↗</span></div><div className="coordinate">55°45′N<br />37°37′E</div></div>
      </section>

      <section className="signal-band"><div className="section-pad signal-inner"><p className="signal-kicker">Если кажется, что всё запуталось</p><p className="signal-title">не нужно угадывать следующий шаг<br /><span>его можно зафиксировать.</span></p><div className="signal-annotation">заметка №01<br /><span>спокойствие —<br />тоже стратегия</span></div></div></section>

      <section className="section-pad intro-section" id="services"><div className="section-label"><span>02</span><span className="label-rule" /> что разбираем</div><div className="section-heading split-heading"><h2>Один маршрут.<br /><em>Разные точки старта.</em></h2><p>Не подбираем универсальный пакет. Сначала смотрим на вашу ситуацию, затем определяем, какая помощь действительно нужна.</p></div><div className="service-grid">{services.map((service, index) => { const Icon = service.icon; const active = selectedService === index; return <button key={service.number} className={`service-card tone-${service.tone} ${active ? "is-active" : ""}`} onClick={() => setSelectedService(index)} aria-pressed={active}><div className="service-top"><span className="service-number">{service.number}</span><Icon size={22} strokeWidth={1.8} /></div><h3>{service.title}</h3><p>{service.text}</p><span className="service-arrow"><ArrowUpRight size={18} /></span></button>; })}</div><div className="selected-service-note"><span className="selected-marker">↳</span><strong>Сейчас выбрано:</strong> {services[selectedService].title}. Напишите, если это похоже на вашу ситуацию — уточним детали в Telegram.</div></section>

      <section className="route-section section-pad" id="route"><div className="section-label light-label"><span>03</span><span className="label-rule" /> как это происходит</div><div className="route-heading"><h2>Не бросаем<br /><em>после первого шага.</em></h2><p>Собираем движение по точкам — от первичных вводных до понятного следующего действия.</p></div><div className="route-map"><div className="route-line" aria-hidden="true" />{routeSteps.map((step, index) => <div className={`route-step route-${step.color}`} key={step.label}><div className="route-node">{String(index + 1).padStart(2, "0")}</div><div><h3>{step.label}</h3><p>{step.detail}</p></div></div>)}</div><div className="route-footnote"><span className="tiny-star">✳</span> Формат сопровождения зависит от задачи: консультация, разбор документов или помощь на нескольких этапах.</div></section>

      <section className="section-pad cost-section" id="cost"><div className="section-label"><span>04</span><span className="label-rule" /> примеры стоимости</div><div className="section-heading split-heading"><h2>Прозрачно<br /><em>до начала работы.</em></h2><p>Ниже — примеры по олимпиадному направлению, которые передал заказчик. Итоговые условия обсуждаются после оценки ситуации.</p></div><div className="cost-layout"><div className="cost-card cost-card-main"><div className="cost-card-head"><span>олимпиадный трек</span><Sparkles size={19} /></div><div className="price-row"><div><span className="price-label">призёр</span><strong>450 000 ₽</strong></div><div><span className="price-label">победитель</span><strong>650 000 ₽</strong></div></div><div className="cost-list"><span>Высшая проба</span><span>Ломоносов</span><span>Олимпиада СПбГУ</span></div></div><div className="cost-card cost-card-secondary"><div className="cost-card-head"><span>отдельный трек</span><span className="mini-tag">пример</span></div><div className="price-row"><div><span className="price-label">призёр</span><strong>270 000 ₽</strong></div><div><span className="price-label">победитель</span><strong>370 000 ₽</strong></div></div><div className="cost-list"><span>ОММО</span><span>Курчатов</span></div></div></div><div className="disclaimer"><CircleHelp size={18} /> Цены показаны как ориентир из текущих материалов и не являются публичной офертой. Точную стоимость и состав работ уточним индивидуально.</div></section>

      <section className="assessment-section section-pad" id="assessment"><div className="assessment-copy"><div className="section-label"><span>05</span><span className="label-rule" /> предварительная оценка</div><h2>Опишите вводные.<br /><em>Начнём с них.</em></h2><p>Необязательно знать все ответы. Заполните то, что уже понятно — остальное уточним в переписке.</p><div className="assessment-checks"><span><Check size={16} /> без обязательств</span><span><Check size={16} /> конфиденциально</span><span><Check size={16} /> ответ в Telegram</span></div></div><form className="assessment-form" onSubmit={handleSubmit}>{!submitted ? <><div className="form-header"><span>анкета / 01</span><span className="form-status"><span /> можно начать</span></div><label>Как к вам обращаться?<input name="name" placeholder="Имя" required /></label><div className="form-row"><label>Желаемый вуз или направление<input name="university" placeholder="Например, МГУ / экономика" /></label><label>Ваш статус<select name="status" defaultValue=""><option value="" disabled>Выберите</option><option>Выбираю направление</option><option>Готовлюсь к поступлению</option><option>Уже учусь</option><option>Хочу перевестись</option><option>Восстанавливаюсь</option></select></label></div><label>Коротко о ситуации<textarea name="situation" rows={3} placeholder="Что сейчас происходит и какой вопрос нужно решить?" /></label><button className="button button-primary form-submit" type="submit">Подготовить обращение <MoveRight size={18} /></button><p className="form-legal">Нажимая на кнопку, вы готовите сообщение для связи в Telegram. В этой версии формы данные не отправляются автоматически.</p></> : <div className="form-success"><div className="success-icon"><Check size={25} /></div><span className="eyebrow">готово / следующий шаг</span><h3>Вводные собраны.</h3><p>Теперь отправьте их в Telegram — менеджер уточнит детали и подскажет, с чего начать.</p><a className="button button-primary" href={TELEGRAM_URL} target="_blank" rel="noreferrer">Открыть @bvishechka <ArrowUpRight size={18} /></a><button className="reset-button" type="button" onClick={() => setSubmitted(false)}>Заполнить заново</button></div>}</form></section>

      <section className="faq-section section-pad" id="faq"><div className="section-label"><span>06</span><span className="label-rule" /> коротко о важном</div><div className="faq-layout"><div><h2>Вопросы,<br /><em>которые возникают.</em></h2><a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="text-link">Задать свой вопрос <ArrowUpRight size={17} /></a></div><div className="faq-list">{faq.map((item, index) => <details key={item.q} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span>{item.q}<ChevronDown size={18} /></summary><p>{item.a}</p></details>)}</div></div></section>

      <footer className="site-footer section-pad"><div className="footer-top"><div className="footer-brand"><img src="/assets/bvi-way-logo-transparent.png" alt="" className="brand-mark" /><span className="brand-name">bvi<span>_way</span></span></div><p>Помогаем увидеть следующий шаг<br />в образовательном маршруте.</p><a className="footer-telegram" href={TELEGRAM_URL} target="_blank" rel="noreferrer"><MessageCircle size={18} /> @bvishechka <ArrowUpRight size={16} /></a></div><div className="footer-bottom"><span>© bvi_way / образовательный навигатор</span><span>mvp / версия 01</span><a href="https://t.me/bvi_way" target="_blank" rel="noreferrer">Канал в Telegram ↗</a></div></footer>
    </main>
  );
}
