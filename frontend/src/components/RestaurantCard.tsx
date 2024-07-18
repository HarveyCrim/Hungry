import { LuClock4 } from "react-icons/lu";
import { FaMoneyBillWave } from "react-icons/fa";
const RestaurantCard = () => {
  return (
    <div className = "border-2 flex h-[220px] max-w-[900px] rounded-lg">
        <div className="rounded-xl overflow-hidden border-3 w-[40%] border-red-500">
            <img className = " h-full object-cover" src = "https://www.zastavki.com/pictures/2560x1600/2012/Food_Bread_rolls_croissants_Fast_Food_Hamburger_034633_.jpg" alt = ""/>
        </div>
        <div className = "flex flex-col w-[60%] p-3" >
            <h1 className="font-bold text-3xl">The Green Salad</h1>
            <div className = "flex gap-5 ">
                <h5 className = "w-[60%] text-gray-400 font-medium text-lg flex-wrap">Healthy . Salads . Healthy . Salads . Healthy . Salads</h5>
                <div className="w-full flex flex-col items-end w-[40%]">
                    <div className="flex items-center w-fit gap-1">
                        <LuClock4 size= {20} className="justify-self-end fill-green-500"/> 
                        <span className="justify-self-end text-end inline-block w-full text-green-500 text-lg font-medium">20 mins</span>
                    </div>
                    <div className = "flex items-center w-fit gap-1">
                        <FaMoneyBillWave size = {20}/>
                        <span className = "text-end w-full block text-lg font-medium"> Delivery from $20</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RestaurantCard