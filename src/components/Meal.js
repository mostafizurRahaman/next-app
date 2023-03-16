import Image from "next/image";
import Link from "next/link";

const Meal = ({ meal }) => {
   console.log(meal); 
   const { idMeal, strMeal, strInstructions, strMealThumb } = meal;
   return (
      <div className="card card-compact  bg-base-100 shadow-xl">
         <figure>
            <img src={strMealThumb} alt={strMeal} className="h-[300px] w-full" />
         </figure>
         <div className="card-body">
            <h2 className="card-title">{strMeal}</h2>
            <p>{strInstructions?.slice(0, 200)}</p>
            <div className="card-actions justify-end">
               <Link href={`meals/${idMeal}`}>
                  <button className="btn btn-primary">Show Details</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Meal;
