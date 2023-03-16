import Meal from "@/components/Meal";

const index = ({meals}) => {
 
   return (
      <div className="grid grid-cols-3 gap-5 m-20">
         {
            meals?.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
         }
      </div>
   );
};




export default index;

export const getStaticProps = async() => {
   const res = await  fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=s'); 
   const data  = await res.json(); 
   return {
      props : {
         meals : data.meals, 
      }
   }
}