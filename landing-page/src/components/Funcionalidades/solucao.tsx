import { funcionalidades } from "../../data/solucao";
import Funcionalidade from "./solucaopilar";
import "./solucao.css"


function Solucao() {
    return (
        <section className="solucao">
            <div className="container-solucao">
                <div className="title-solucao">
                    <h2>Por que escolher a EduTrack?</h2>
                    <p className="description-solucao">Soluções completas desenhadas para o ecossistema de educação técnica profissionalizante.</p>
                </div>
                <div className="colunas-solucao1">
                    
                        {funcionalidades.map((solucao) => (
                            <Funcionalidade
                                key={solucao.id}
                                icon={solucao.icon}
                                titulo={solucao.title}
                                descricao={solucao.description}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Solucao
 