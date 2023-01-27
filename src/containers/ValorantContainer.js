import SpecificAgent from "../components/SpecificAgent";
import AgentList from "../components/AgentList";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const ValorantContainer =()=>{

    const [agents, setAgents] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://valorant-api.com/v1/agents");
            const data = await response.json();
            setAgents(data);
        }
        fetchData()
    }, [])

    return(
        <BrowserRouter>
            <div className="App">
                <h1>Valorant app</h1>
                <ul>
                    <li>
                        <Link to="/all-agents">All Agents</Link>
                    </li>
                </ul>
                <Routes>
                    <Route path="/all-agents" element={
                        <AgentList 
                            agents={agents}
                        />} 
                    />
                    <Route path="/agent-by-id/:id" element={
                        <SpecificAgent 
                            agents={agents}
                        />}
                    />
                </Routes>
            </div>
        </BrowserRouter>   
    );
}

export default ValorantContainer;