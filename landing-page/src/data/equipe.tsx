//Dados dos membros da equipe da nossa landing page

export interface Membro {
  id: number;
  nome: string;
  cargo: string;
  descricao: string;
  corFundo: string;
  corTexto: string;
}

export const equipe: Membro[] = [
  {
    id: 1,
    nome: "André Luz",
    cargo: "CEO & Fundador",
    descricao:
      "Especialista em gestão educacional com 15 anos de experiência no setor técnico.",
    corFundo: "#4A90E2",
    corTexto: "#FFFFFF",
  },
  {
    id: 2,
    nome: "Carla Mendes",
    cargo: "CTO",
    descricao:
      "Engenheira de software focada em arquiteturas escaláveis e segurança de dados.",
    corFundo: "#50C878",
    corTexto: "#FFFFFF",
  },
  {
    id: 3,
    nome: "Paulo Neto",
    cargo: "Head de Produto",
    descricao:
      "Designer UX apaixonado por criar interfaces que facilitam o dia a dia do professor.",
    corFundo: "#9370DB",
    corTexto: "#FFFFFF",
  },
  {
    id: 4,
    nome: "Rita Costa",
    cargo: "Sucesso do Cliente",
    descricao:
      "Garante que cada escola parceira extraia o máximo potencial da nossa tecnologia.",
    corFundo: "#FF6347",
    corTexto: "#FFFFFF",
  },
];
