//Dados dos membros da equipe da nossa landing page

export interface Equipe {
  id: number;
  icon: string;
  nome: string;
  cargo: string;
  descricao: string;
}

export const equipe: Equipe[] = [
  {
    id: 1,
    icon: "AL",
    nome: "André Luz",
    cargo: "CEO & Fundador",
    descricao:
      "Especialista em gestão educacional com 15 anos de experiência no setor técnico.",
    
  },
  {
    id: 2,
    icon: "CM",
    nome: "Carla Mendes",
    cargo: "CTO",
    descricao:
      "Engenheira de software focada em arquiteturas escaláveis e segurança de dados.",
  },
  {
    id: 3,
    icon: "PN",
    nome: "Paulo Neto",
    cargo: "Head de Produto",
    descricao:
      "Designer UX apaixonado por criar interfaces que facilitam o dia a dia do professor.",
  },
  {
    id: 4,
    icon: "RC",
    nome: "Rita Costa",
    cargo: "Sucesso do Cliente",
    descricao:
      "Garante que cada escola parceira extraia o máximo potencial da nossa tecnologia.",
  },
];
