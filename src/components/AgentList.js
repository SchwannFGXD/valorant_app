import Agent from "./Agent"

const AgentList = ({agents})=>{

    const agentComponents = agents.data.map(agent => {
        return <Agent 
                key={agent.uuid} 
                agent={agent} />
    })

    return(
        <div className="agentBox">
            <h3>List of Agents</h3>
            <hr />
            {agentComponents}
         </div>
    )
}

export default AgentList;
