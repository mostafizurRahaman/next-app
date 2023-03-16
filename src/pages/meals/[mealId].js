import Meal from "@/components/Meal";
import { useRouter } from "next/router";


const MealDetails = ({ meal }) => {
   const router = useRouter(); 
   const id = router.query.mealId; 
   console.log(router); 
   return (
      <div className="flex items-center justify-center min-h-screen ">
        
         <div className="w-[500px] ">
         <h2 className="text-xl font-bold text-red-500 uppercase mb-5 text-center ">The meal Id is: #{id}</h2>
            <Meal meal={meal}></Meal>  
         </div>
      </div>
   );
};

export const getStaticPaths = async () => {
   const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=s"
   );
   const data = await res.json();

   const paths = data.meals.map((meal) => {
      return {
         params: {
            mealId: `${meal.idMeal}`,
         },
      };
   });

   return {
      paths,
      fallback: false,
   };
};

export const getStaticProps  = async (context) => {
   const { params } = context;
   const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`
   );
   const data = await res.json();

   return {
      props: {
         meal: data.meals[0],
      },
   };
};

export default MealDetails;
