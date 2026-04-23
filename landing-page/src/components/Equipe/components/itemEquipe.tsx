interface ItemEquipeProps {
    icon: string;
    nome: string;
    cargo: string;
    descricao: string;
}

export default function ItemEquipe({ icon, nome, cargo, descricao }: ItemEquipeProps) 
{
    return (
        <article className="card-equipe">
            <div className={`icon-equipe`}>{icon}</div>
            <h3>{nome}</h3>
            <p>{cargo}</p>
            <p>{descricao}</p>
        </article>
    )
}