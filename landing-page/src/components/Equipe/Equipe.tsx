import { equipe } from "../../data/equipe";
import ItemEquipe from "./components/itemEquipe";

export default function Equipe () {
    return(
        <section className="equipe">
            <div className="container-equipe">
                <h3>Quem está por trás da EduTrack</h3>
                <div className="lista-equipe">
                    {equipe.map((membro) => (
                        <ItemEquipe
                            key={membro.id}
                            sigla={membro.sigla}
                            nome={membro.nome}
                            cargo={membro.cargo}
                            descricao={membro.descricao}
                            cor={membro.cor}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}        