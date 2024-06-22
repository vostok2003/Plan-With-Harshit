import Card from "./Card"
import "../index.css"
function Tours({tours,removetour,props}){
    return(
        <div className="container">
           <div>
           <h2 className="title">Plan With Harshit</h2>
           </div>
           <div className="cards">
                {
                    tours.map((tour)=>
                    {
                        return <Card key={tour.id} {...tour} removetour={removetour}></Card>       
                    })
                }
                {/* here at this point tours array is taken at with help of map function card 
                is applied on every object in array via call back function. */}
                {/* {...tour} is used for cloning or send a copy */}
           </div>
        </div>
    )
}
export default Tours