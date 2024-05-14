

const ClientCards = (client) => {
          console.log(client.client.path);
          const bgurl = `url(${client.client.path}) `;
          return ( 
                 <div className=" rounded-full border-2 border-[#72bdf75d] " >
                     <div className="w-40 aspect-video rounded-full bg-cover bg-center bg-white  filter grayscale hover:filter-none " style={{ backgroundImage: bgurl, backgroundSize: '102%' }}  ></div>
          
                 </div>
            );
}
 
export default ClientCards;