//Dados dos membros da equipe da nossa landing page
import idfoto1 from "../assets/IconsEquipe/idfoto1.png";
import idfoto2 from "../assets/IconsEquipe/idfoto2.png";
import idfoto3 from "../assets/IconsEquipe/idfoto3.png";
import idfoto4 from "../assets/IconsEquipe/idfoto4.png";

export interface Equipe {
  id: number;
  foto: string;
  nome: string;
  cargo: string;
  descricao: string;
}

export const equipe: Equipe[] = [
  {
    id: 1,
    foto: idfoto1,
    nome: "André Luz",
    cargo: "CEO & Fundador",
    descricao:
      "Especialista em gestão educacional com 15 anos de experiência no setor técnico.",
    
  },
  {
    id: 2,
    foto: idfoto2,
    nome: "Carla Mendes",
    cargo: "CTO",
    descricao:
      "Engenheira de software focada em arquiteturas escaláveis e segurança de dados.",
  },
  {
    id: 3,
    foto: idfoto3,
    nome: "Paulo Neto",
    cargo: "Head de Produto",
    descricao:
      "Designer UX apaixonado por criar interfaces que facilitam o dia a dia do professor.",
  },
  {
    id: 4,
    foto: idfoto4,
    nome: "Rita Costa",
    cargo: "Sucesso do Cliente",
    descricao:
      "Garante que cada escola parceira extraia o máximo potencial da nossa tecnologia.",
  },
];
