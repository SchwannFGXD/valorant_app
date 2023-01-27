import Abilities from './Abilities';
import {useParams } from 'react-router-dom';


const SpecificAgent = ({agents})=>{

    const {id} = useParams();

    const agent = agents.data.find((agent) => {
        const agentID = id
        return agent.uuid === agentID
    });

    // const agentAbilities = agents.data.abilities.map(ability => {
    //     return <p>Hi</p>
    // })

    
 
    return(
        <>
            <p>specific agent</p>
            <img src={agent.displayIcon} width="200"/>
            <h4>Name: {agent.displayName}</h4>
            <p>Role: {agent.role.displayName}</p>
            <hr />
            <Abilities/>
        </>
        
    )
}

export default SpecificAgent;