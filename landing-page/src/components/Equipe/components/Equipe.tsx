import { equipe } from "../../../data/equipe";
import ItemEquipe from "./itemEquipe";
import "./equipe.css"

function Equipe () {
    return (
        <section className="equipe">
            <div className="container-equipe">
                <div className="title-equipe">
                <h2>Quem está por trás da EduTrack</h2>
                </div>
                <div className="colunas-equipe1">

                    {equipe.map((membro) => (
                        <ItemEquipe
                            key={membro.id}
                            foto={membro.foto}
                            nome={membro.nome}
                            cargo={membro.cargo}
                            descricao={membro.descricao}
                        />
                    ))
                    }
                </div>
            </div>
        </section>
    )
}   

export default Equipe;