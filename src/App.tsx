import { useState, useMemo } from "react";
import type { FormEvent } from "react";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import analiseImg from "./assets/analise.png";
import concorrenciaImg from "./assets/concorrencia.png";
import conducaoImg from "./assets/condução.png";
import contratoImg from "./assets/contrato.png";
import dueImg from "./assets/due.png";
import engrenagemImg from "./assets/engrenagem.png";
import escritorioImg from "./assets/escritório.jpg";
import institucionalImg from "./assets/institucional.png";
import logoBranca from "./assets/LogoBranca.png";
import maImg from "./assets/m&a.png";
import notificacaoImg from "./assets/notificação.png";
import operacaoImg from "./assets/operação.png";
import pesquisaImg from "./assets/pesquisa.png";

// LP – Fusões e Aquisições (M&A)
// Observa normas da OAB (conteúdo exclusivamente informativo e sóbrio), SEO, performance e boas práticas de UX.
// Substitua as imagens de placeholder por arquivos WebP/AVIF otimizados.

type AnalyticsEventDetail = Record<string, unknown>;

const pilaresConteudo = [
  {
    title: "Estratégia e modelagem da operação",
    desc: "Desenho societário e fiscal, governança e alocação de riscos.",
    image: analiseImg,
    alt: "Gráficos financeiros destacados em relatório impresso.",
  },
  {
    title: "Due diligence legal",
    desc: "Auditoria jurídica completa com materialidade e matriz de riscos (compliance, trabalhista, tributário, cível, regulatório).",
    image: dueImg,
    alt: "Profissional passando documentos durante auditoria jurídica.",
  },
  {
    title: "Contratos de M&A",
    desc: "MOUs, NDAs, Term Sheets, SPA/SPA, Acordos de Sócios e anexos de disclosure.",
    image: contratoImg,
    alt: "Executivo assinando contrato em mesa corporativa.",
  },
  {
    title: "Concorrencial (CADE)",
    desc: "Análise de notificação, estruturação de remédios e acompanhamento procedimental quando aplicável.",
    image: concorrenciaImg,
    alt: "Quadro com gráfico de vantagem competitiva desenhado em giz.",
  },
  {
    title: "Regulatório e setorial",
    desc: "Mapeamento de autorizações/licenças, e riscos regulatórios por setor.",
    image: pesquisaImg,
    alt: "Lupa sobre ícones representando diferentes perfis de público.",
  },
  {
    title: "Integração pós-fechamento (PMI)",
    desc: "Planos de 100 dias, governança e contratos críticos para captura de sinergias.",
    image: engrenagemImg,
    alt: "Equipe conectando peças de quebra-cabeça coloridas sobre mesa de trabalho.",
  },
] as const;

const educationalArticles = [
  {
    title: "Guia de due diligence legal",
    desc: "Escopo mínimo, materialidade e matriz de riscos por área.",
    image: operacaoImg,
    alt: "Profissionais analisando relatórios e gráficos de desempenho sobre a mesa.",
  },
  {
    title: "Principais contratos em M&A",
    desc: "Objetivo e diferenças entre NDA, MoU, Term Sheet e SPA/SPA.",
    image: maImg,
    alt: "Aperto de mãos sobre mesa com documentos de M&A.",
  },
  {
    title: "Quando notificar o CADE",
    desc: "Critérios de faturamento e hipóteses comuns de notificação.",
    image: notificacaoImg,
    alt: "Pessoa utilizando notebook e celular para acompanhar notificações financeiras.",
  },
] as const;

export default function LandingPageMA() {
  // Simple analytics hook (dataLayer-ready)
  const pushEvent = (name: string, detail: AnalyticsEventDetail = {}) => {
    if (typeof window === "undefined") {
      return;
    }

    const dataLayerWindow = window as typeof window & {
      dataLayer?: AnalyticsEventDetail[];
    };

    dataLayerWindow.dataLayer = dataLayerWindow.dataLayer ?? [];
    dataLayerWindow.dataLayer.push({ event: name, ...detail });
  };

  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    assunto: "Estruturação de M&A",
    mensagem: "",
    aceite: false,
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    pushEvent("form_submit", { form_name: "contato_mna" });
    alert(
      "Mensagem enviada. Entraremos em contato nos horários de atendimento (seg-sex, 8h às 18h)."
    );
  };

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased">
      {/* Skip link for accessibility */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white border rounded px-3 py-2 shadow"
      >
        Ir para o conteúdo principal
      </a>

      {/* Topbar institucional */}
      <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Marca (logo + nome) */}
            <div className="flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 ring-1 ring-neutral-300 px-1"
                aria-label="Logotipo Marinho Mendes Sociedade de Advogados"
              >
                <img
                  src={logoBranca}
                  alt="Logotipo Marinho Mendes Sociedade de Advogados"
                  className="h-10 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="leading-tight">
                <p className="text-lg font-semibold tracking-tight">
                  Marinho Mendes Sociedade de Advogados
                </p>
                <p className="text-sm text-neutral-600">
                  Atuação nacional — Bases em Campinas/SP e Hortolândia/SP
                </p>
              </div>
            </div>

            {/* Contatos rápidos */}
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="tel:+551932094147" className="inline-flex items-center gap-2 hover:opacity-80" aria-label="Telefone Campinas">
                <Phone className="h-4 w-4" /> Campinas: (19) 3209-0417
              </a>
              <a href="tel:+551938454946" className="inline-flex items-center gap-2 hover:opacity-80" aria-label="Telefone Hortolândia">
                <Phone className="h-4 w-4" /> Hortolândia: (19) 3845-4946
              </a>
              <a
                href="https://wa.me/5519974100605"
                className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 hover:bg-neutral-50"
                onClick={() => pushEvent("cta_whatsapp_header")}
                aria-label="Abrir WhatsApp"
              >
                <MessageSquare className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-50 via-white to-white"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Fusões e Aquisições (M&A) — assessoria empresarial completa e sob medida
              </h1>
              <p className="mt-4 text-lg text-neutral-700 max-w-2xl">
                Conduzimos operações de M&A com rigor técnico e visão de negócios: estruturação societária e fiscal, <em>due diligence</em>, contratos e governança, aspectos concorrenciais (CADE) e integração pós-fechamento, sempre com foco na segurança jurídica.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#contato"
                  onClick={() => pushEvent("cta_hero")}
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-medium bg-neutral-900 text-white hover:bg-neutral-800 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Agendar conversa técnica
                </a>
                <a
                  href="#como-fazemos"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-medium border hover:bg-neutral-50"
                >
                  Ver nossa metodologia
                </a>
              </div>
              <ul className="mt-6 text-sm text-neutral-600 space-y-1">
                <li>Atendimento: segunda a sexta, 8h às 18h</li>
                <li>
                  E-mail: <a className="hover:opacity-80" href="mailto:adm@marinhomendes.adv.br">adm@marinhomendes.adv.br</a>
                </li>
                <li>
                  WhatsApp: <a className="hover:opacity-80" href="https://wa.me/5519974100605">+55 (19) 97410-0605</a>
                </li>
              </ul>
            </div>

            {/* Espaço para imagem hero */}
            <figure className="relative w-full aspect-[4/3] lg:aspect-[5/4] rounded-3xl border bg-neutral-100 ring-1 ring-neutral-200 overflow-hidden">
              <picture>
                <source srcSet={institucionalImg} type="image/png" />
                <img
                  src={institucionalImg}
                  alt="Executivos cumprimentando-se após concluir operação de M&A."
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </picture>
            </figure>
          </div>
        </div>
      </section>

      <main id="conteudo">
        {/* Pilares de atuação */}
        <section className="py-14" aria-labelledby="pilares">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="pilares" className="text-2xl sm:text-3xl font-semibold tracking-tight">Pilares da nossa atuação em M&A</h2>
            <p className="mt-2 text-neutral-700 max-w-3xl">
              Atuamos de ponta a ponta na operação, com abordagem integrada jurídico-empresarial.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pilaresConteudo.map((pillar) => (
                <article
                  key={pillar.title}
                  className="flex flex-col gap-4 rounded-2xl border ring-1 ring-neutral-200 p-6 hover:shadow-sm transition-shadow bg-white"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border bg-neutral-50">
                    <img
                      src={pillar.image}
                      alt={pillar.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{pillar.title}</h3>
                    <p className="mt-2 text-sm text-neutral-700">{pillar.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Metodologia */}
        <section id="como-fazemos" className="py-14 bg-neutral-50/60" aria-labelledby="metodologia">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="metodologia" className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Como conduzimos sua operação
            </h2>
            <div className="mt-8 grid lg:grid-cols-2 gap-8 items-start">
              <ol className="space-y-5">
                {[
                  {
                    t: "Entendimento do negócio",
                    d: "Objetivos, tese de investimento e mapeamento de stakeholders.",
                  },
                  { t: "Estruturação", d: "Modelo societário/fiscal e cronograma do deal." },
                  { t: "Due diligence", d: "Auditoria com materialidade, red flags e recomendações." },
                  { t: "Negociação e contratos", d: "Term sheets, SPA/SPA, acordos de sócios e anexos." },
                  { t: "Aprovações e antitruste", d: "Governança societária e, quando aplicável, CADE." },
                  { t: "Fechamento e integração", d: "Condições precedentes, fechamento e plano de 100 dias." },
                ].map((s, i) => (
                  <li key={i} className="relative pl-8">
                    <span className="absolute left-0 top-0 mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-white text-xs font-semibold">
                      {i + 1}
                    </span>
                    <p className="font-medium">{s.t}</p>
                    <p className="text-sm text-neutral-700">{s.d}</p>
                  </li>
                ))}
              </ol>

              {/* Espaço para imagem processo */}
              <figure className="relative w-full aspect-[16/10] rounded-2xl border bg-white ring-1 ring-neutral-200 overflow-hidden">
                <picture>
                  <source srcSet={conducaoImg} type="image/png" />
                  <img
                    src={conducaoImg}
                    alt="Consultor orientando equipe sobre etapas do processo de M&A."
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </picture>
              </figure>
            </div>
          </div>
        </section>

        {/* Conteúdo educativo com espaços para imagens */}
        <section className="py-14" aria-labelledby="conteudo-educativo">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="conteudo-educativo" className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Conteúdo educativo
            </h2>
            <p className="mt-2 text-neutral-700 max-w-3xl">
              Materiais informativos para orientar empreendedores, investidores e gestores sobre fundamentos jurídicos de M&A.
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {educationalArticles.map((art) => (
                <article
                  key={art.title}
                  className="group rounded-2xl border ring-1 ring-neutral-200 overflow-hidden bg-white"
                >
                  <figure className="aspect-[4/3] bg-neutral-100 border-b ring-1 ring-neutral-200 overflow-hidden">
                    <img
                      src={art.image}
                      alt={art.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </figure>
                  <div className="p-5">
                    <h3 className="font-semibold group-hover:text-neutral-900">{art.title}</h3>
                    <p className="mt-1 text-sm text-neutral-700">{art.desc}</p>
                    <a
                      href="#contato"
                      className="mt-3 inline-flex text-sm hover:opacity-80"
                      onClick={() => pushEvent("cta_conteudo")}
                    >
                      Solicitar material
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Locais de atuação e contatos */}
        <section className="py-14 bg-neutral-50/60" aria-labelledby="locais">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="locais" className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Locais de atuação
            </h2>
            <p className="mt-2 text-neutral-700">
              Atuação em todo o território nacional, com bases no interior de São Paulo.
            </p>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border ring-1 ring-neutral-200 p-6 bg-white">
                <h3 className="font-semibold">Campinas/SP</h3>
                <p className="text-sm text-neutral-700 mt-1">
                  Av. José Rocha Bonfim, 214, Bloco J – Sala 228 – Ed. Milão, Praça Capital, Loteamento Center Santa Genebra, CEP 13080-650.
                </p>
                <p className="text-sm mt-1">
                  <a href="tel:+551932090417" className="hover:opacity-80">(19) 3209-0417</a>
                </p>
              </div>
              <div className="rounded-2xl border ring-1 ring-neutral-200 p-6 bg-white">
                <h3 className="font-semibold">Hortolândia/SP</h3>
                <p className="text-sm text-neutral-700 mt-1">
                  Rua Antônio Nelson Barbosa, 93 – Jardim do Bosque, CEP 13186-231.
                </p>
                <p className="text-sm mt-1">
                  <a href="tel:+551938454946" className="hover:opacity-80">(19) 3845-4946</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14" aria-labelledby="faq">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="faq" className="text-2xl sm:text-3xl font-semibold tracking-tight">Perguntas frequentes</h2>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              {[
                {
                  q: "Qual é a diferença entre MoU, Term Sheet e SPA?",
                  a: "MoU e Term Sheet registram entendimentos preliminares e condições gerais do negócio; o SPA (ou contrato de compra e venda de quotas/ações) formaliza a transação com declarações, garantias e condições precedentes.",
                },
                {
                  q: "Quando a operação precisa ser submetida ao CADE?",
                  a: "Depende de critérios de faturamento e participação de mercado previstos em norma; avaliamos a necessidade e cuidamos do procedimento quando aplicável.",
                },
                {
                  q: "Como funciona a due diligence?",
                  a: "Realizamos auditoria jurídica com recorte por materialidade, apontando riscos (red flags) e recomendações, com impacto em preço/estruturas de garantia.",
                },
                {
                  q: "Vocês atuam em operações de pequeno e médio porte?",
                  a: "Sim. Estruturamos operações conforme o porte, a complexidade e o setor, sempre com foco em segurança jurídica e governança.",
                },
                // Novas perguntas focadas no "como o escritório trata o tema"
                {
                  q: "Como definem a materialidade e priorização de riscos na due diligence?",
                  a: "Adotamos matrizes de risco por área (trabalhista, tributário, cível, regulatório e LGPD) com critérios de impacto e probabilidade, destacando red flags e recomendações objetivas para decisão e negociação.",
                },
                {
                  q: "Como é a comunicação ao longo do projeto?",
                  a: "Estabelecemos cronograma e governança do deal com relatórios sintéticos, checkpoints semanais e pontos de decisão claros, preservando a confidencialidade.",
                },
                {
                  q: "Como coordenam a atuação com consultorias financeira e contábil?",
                  a: "Trabalhamos de forma integrada com advisors financeiros/contábeis, alinhando escopos e compartilhando achados críticos para suporte às premissas de valuation e mecanismos de preço.",
                },
                {
                  q: "Como lidam com riscos identificados em preço e garantias?",
                  a: "Sugerimos mecanismos contratuais usuais (condições precedentes, ajustes de preço, escrow e declarações/garantias específicas) em linha com as melhores práticas do mercado.",
                },
                {
                  q: "Como tratam confidencialidade e conflitos de interesse?",
                  a: "Seguimos política de confidencialidade estrita, controle de acesso às informações e verificações prévias de conflitos, observando o Código de Ética da OAB.",
                },
                {
                  q: "Apoiam a integração pós-fechamento (PMI)?",
                  a: "Sim. Auxiliamos em governança, contratos críticos e plano de 100 dias para execução de sinergias, conforme as particularidades do negócio.",
                },
              ].map((item, i) => (
                <details key={i} className="rounded-xl border p-4 bg-white/60">
                  <summary className="cursor-pointer font-medium">{item.q}</summary>
                  <p className="mt-2 text-sm text-neutral-700">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Formulário de contato */}
        <section id="contato" className="py-14 bg-neutral-900 text-white" aria-labelledby="contato-titulo">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 id="contato-titulo" className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  Conversa técnica sobre M&A
                </h2>
                <p className="mt-2 text-neutral-200 max-w-2xl">
                  Envie uma mensagem com o contexto do seu projeto. Retornaremos dentro do nosso horário de atendimento (seg-sex, 8h às 18h). O envio deste formulário não cria relação advogado-cliente.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-neutral-300">
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <a className="hover:opacity-80" href="mailto:adm@marinhomendes.adv.br">adm@marinhomendes.adv.br</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    <a className="hover:opacity-80" href="https://wa.me/5519974100605">+55 (19) 97410-0605</a>
                  </li>
                </ul>
                {/* Espaço para imagem do escritório */}
                <figure className="mt-8 w-full aspect-[16/9] rounded-2xl border bg-white ring-1 ring-white/10 overflow-hidden">
                  <picture>
                    <source srcSet={escritorioImg} type="image/jpeg" />
                    <img
                      src={escritorioImg}
                      alt="Sala de reunião do escritório Marinho Mendes Sociedade de Advogados."
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </picture>
                </figure>
              </div>

              <form className="bg-white text-neutral-900 rounded-2xl p-6 ring-1 ring-white/10" onSubmit={handleSubmit}>
                <div className="grid gap-4">
                  <div>
                    <label className="text-sm font-medium" htmlFor="nome">
                      Nome completo
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      required
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium" htmlFor="email">
                        E-mail
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                        placeholder="voce@empresa.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium" htmlFor="telefone">
                        Telefone/WhatsApp
                      </label>
                      <input
                        id="telefone"
                        name="telefone"
                        required
                        value={form.telefone}
                        onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                        className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                        placeholder="(19) 9xxxx-xxxx"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium" htmlFor="empresa">
                      Empresa (opcional)
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      value={form.empresa}
                      onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                      className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                      placeholder="Razão social"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium" htmlFor="assunto">
                      Assunto
                    </label>
                    <select
                      id="assunto"
                      name="assunto"
                      value={form.assunto}
                      onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                      className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    >
                      <option>Estruturação de M&A</option>
                      <option>Due diligence</option>
                      <option>Contratos (NDA, Term Sheet, SPA)</option>
                      <option>Antitruste (CADE)</option>
                      <option>Integração pós-fechamento</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium" htmlFor="mensagem">
                      Contexto do projeto
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={5}
                      required
                      value={form.mensagem}
                      onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                      className="mt-1 w-full rounded-2xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                      placeholder="Descreva objetivos, prazos e dúvidas."
                    />
                  </div>
                  <label className="flex items-start gap-3 text-sm">
                    <input
                      type="checkbox"
                      checked={form.aceite}
                      onChange={(e) => setForm({ ...form, aceite: e.target.checked })}
                      required
                      className="mt-1"
                    />
                    <span>
                      Li e concordo com a <a className="hover:opacity-80" href="#" onClick={() => pushEvent("link_politica_privacidade")}>
                        Política de Privacidade
                      </a>{" "}
                      e autorizo o contato para fins de atendimento.
                    </span>
                  </label>
                  <button
                    type="submit"
                    onClick={() => pushEvent("cta_enviar_form")}
                    className="mt-2 inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-medium bg-neutral-900 text-white hover:bg-neutral-800 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Enviar mensagem
                  </button>
                </div>
                <p className="mt-3 text-xs text-neutral-600">
                  O envio deste formulário não cria relação advogado-cliente. Não compartilhe informações sensíveis antes de orientações específicas.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé institucional */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-6 gap-8 text-sm">
          {/* Unidades com destaque */}
          <div className="md:col-span-3">
            <p className="font-semibold text-base flex items-center gap-2"><MapPin className="h-4 w-4" /> Unidades</p>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border ring-1 ring-neutral-200 p-4">
                <p className="font-medium">Campinas/SP</p>
                <p className="text-neutral-700 mt-1">
                  Av. José Rocha Bonfim, 214, Bloco J – Sala 228 – Ed. Milão, Praça Capital, Loteamento Center Santa Genebra, CEP 13080-650.
                </p>
                <p className="mt-2 inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" /> <a href="tel:+551932090417" className="hover:opacity-80">(19) 3209-0417</a>
                </p>
              </div>
              <div className="rounded-2xl border ring-1 ring-neutral-200 p-4">
                <p className="font-medium">Hortolândia/SP</p>
                <p className="text-neutral-700 mt-1">
                  Rua Antônio Nelson Barbosa, 93 – Jardim do Bosque, CEP 13186-231.
                </p>
                <p className="mt-2 inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" /> <a href="tel:+551938454946" className="hover:opacity-80">(19) 3845-4946</a>
                </p>
              </div>
            </div>
          </div>

          {/* Marca e contatos institucionais */}
          <div className="md:col-span-2">
            <p className="font-semibold">Marinho Mendes Sociedade de Advogados</p>
            <p className="mt-1 text-neutral-700 max-w-lg">
              Escritório independente, de atuação diversificada, com foco em excelência técnica e ética profissional. Prestamos suporte integral para viabilizar negócios e solucionar problemas com celeridade.
            </p>
            <div className="mt-4 space-y-2">
              <p className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> <a href="mailto:adm@marinhomendes.adv.br" className="hover:opacity-80">adm@marinhomendes.adv.br</a></p>
              <p className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> <a href="https://wa.me/5519974100605" className="hover:opacity-80">+55 (19) 97410-0605</a></p>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/marinhomendesadv"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-neutral-50"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/marinhomendesadv"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-neutral-50"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/company/14030512/"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-neutral-50"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navegação leve */}
          <div className="md:col-span-1">
            <p className="font-semibold">Links</p>
            <ul className="mt-2 space-y-2">
              <li><a href="https://marinhomendes.adv.br/" className="hover:opacity-80">Site</a></li>
              <li><a href="https://marinhomendes.adv.br/blog" className="hover:opacity-80">Blog</a></li>
              <li><a href="#" className="hover:opacity-80">Política de Privacidade</a></li>
              <li><a href="#" className="hover:opacity-80">Aviso de Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t py-6 text-xs text-neutral-600">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <p>
              © {year} Marinho Mendes Sociedade de Advogados. Conteúdo meramente informativo, sem promessa de resultado. Publicidade realizada em conformidade com o Código de Ética e Disciplina da OAB e Provimento CFOAB nº 205/2021.
            </p>
          </div>
        </div>
      </footer>

      {/* JSON-LD estruturado (ajuste para produção conforme domínio final) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Marinho Mendes Sociedade de Advogados",
            url: "https://marinhomendes.adv.br/",
            areaServed: "Brasil",
            address: [
              {
                "@type": "PostalAddress",
                addressLocality: "Campinas",
                addressRegion: "SP",
                streetAddress:
                  "Av. José Rocha Bonfim, 214, Bloco J – Sala 228 – Ed. Milão, Praça Capital, Loteamento Center Santa Genebra",
                postalCode: "13080-650",
              },
              {
                "@type": "PostalAddress",
                addressLocality: "Hortolândia",
                addressRegion: "SP",
                streetAddress: "Rua Antônio Nelson Barbosa, 93 – Jardim do Bosque",
                postalCode: "13186-231",
              },
            ],
            sameAs: [
              "https://www.facebook.com/marinhomendesadv",
              "https://www.instagram.com/marinhomendesadv",
              "https://www.linkedin.com/company/14030512/",
            ],
            openingHours: "Mo-Fr 08:00-18:00",
            makesOffer: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fusões e Aquisições (M&A)" } },
            ],
          }),
        }}
      />

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Qual é a diferença entre MoU, Term Sheet e SPA?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "MoU e Term Sheet registram entendimentos preliminares; o SPA formaliza a transação com declarações, garantias e condições precedentes.",
                },
              },
              {
                "@type": "Question",
                name: "Quando a operação precisa ser submetida ao CADE?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Depende de critérios de faturamento e participação de mercado previstos em norma; avaliamos a necessidade e cuidamos do procedimento quando aplicável.",
                },
              },
              {
                "@type": "Question",
                name: "Como funciona a due diligence?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Auditoria jurídica com recorte por materialidade, apontando riscos e recomendações, com impacto em preço e garantias.",
                },
              },
              {
                "@type": "Question",
                name: "Como definem a materialidade e priorização de riscos na due diligence?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Adotamos matrizes de risco por área com critérios de impacto e probabilidade, destacando red flags e recomendações para suporte à decisão e negociação.",
                },
              },
              {
                "@type": "Question",
                name: "Como é a comunicação ao longo do projeto?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Cronograma e governança do deal com relatórios sintéticos, checkpoints semanais e pontos de decisão claros, preservando a confidencialidade.",
                },
              },
              {
                "@type": "Question",
                name: "Como coordenam a atuação com consultorias financeira e contábil?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Atuação integrada com advisors financeiros/contábeis, alinhando escopos e compartindo achados críticos para suporte às premissas de valuation e mecanismos de preço.",
                },
              },
              {
                "@type": "Question",
                name: "Como lidam com riscos identificados em preço e garantias?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Uso de mecanismos contratuais usuais (condições precedentes, ajustes de preço, escrow e declarações/garantias específicas), conforme as melhores práticas do mercado.",
                },
              },
              {
                "@type": "Question",
                name: "Apoiam a integração pós-fechamento (PMI)?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Auxílio em governança, contratos críticos e plano de 100 dias para execução de sinergias, conforme as particularidades do negócio.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
