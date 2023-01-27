import { Link } from "react-router-dom";

const Agent = ({agent}) => {

    if(agent.isPlayableCharacter){
        return (
            <>
                <img src={agent.displayIcon} width="200"/>
                <h4>Name: {agent.displayName}</h4>
                <p>Role: {agent.role.displayName}</p>
                <button>
                <Link to={`/agent-by-id/${agent.uuid}`} >More Detail</Link>
                </button>
                <hr />
            </>
        )
    }
    return(
        <></>
    )

    
}

export default Agent;