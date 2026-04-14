import iconFoco from "../assets/iconsSobre/iconFoco.png";
import iconDados from "../assets/iconsSobre/iconDados.png";
import iconIntegracao from "../assets/iconsSobre/iconIntegracao.png";
import iconSeguranca from "../assets/iconsSobre/iconSeguranca.png";

export interface Pilar {
  id: number;
  icon: string;
  titulo: string;
  descricao: string;
}

export const pilares: Pilar[] = [
  {
    id: 1,
    icon: iconFoco,
    titulo: "Foco Técnico",
    descricao: "Módulos específicos para laboratórios e oficinas.",
  },
  {
    id: 2,
    icon: iconDados,
    titulo: "Dados Acionáveis",
    descricao: "Dashboards que mostram o desempenho individual.",
  },
  {
    id: 3,
    icon: iconIntegracao,
    titulo: "Integração Total",
    descricao: "Comunicação fluida entre coordenação e alunos.",
  },
  {
    id: 4,
    icon: iconSeguranca,
    titulo: "Segurança Robusta",
    descricao: "Dados protegidos com criptografia de ponta.",
  },
];
