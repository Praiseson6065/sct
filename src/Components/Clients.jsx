import ClientsData from "../Data/Clients.json";
import ClientCards from "./ClientsCard";

const Clients = () => {
    return ( <>
        <div className="flex flex-col px-24 justify-center items-center py-8 bg-[#F6FBFF]">
          <div className="text-5xl font-bold text-center mb-4 text-[#03416C] leading-tight">
            Our Clients
          </div>
          
            
          <div className="flex flex-wrap gap-8 justify-center items-center px-24">
          {
            ClientsData.map((client,index)=>{

              return <ClientCards key={index} client={client}/>
                
            })
          }
          </div>
        </div>
      </> );
}
 
export default Clients;