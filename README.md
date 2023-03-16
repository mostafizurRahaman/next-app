# ** My First Next App **

-  React-Next-application is an practicing application that I developed for my
   practice of next.
-  It helps me to explore next js more and grow my abilities to handle errors of
   next js.

## Important Links: 
- Github Repository:- https://github.com/mostafizurRahaman/next-app
- App Live Link:- https://next-app-gray-gamma.vercel.app/

## ** Used Technologies In Next Js **

-  React Js
-  Next Js
-  Javascript
-  Tailwind CSS
-  Daisy UI

## ** What I learn **

-  Difference between React and Next js
-  Next Js folder structure
-  File Based Routing
-  Dynamic Routing and Nested Routing
-  SSG - Static Side Generation
-  SSR - Sever Side Rendering
-  CSR - Client Side Rendering
-  getStaticProps() , getStaticPaths(), getServerSideProps()
-  useRouter()
-  <Image> , <Link>, <Header> tags
- Next App Deploy on vercel 

### getStaticProps:- For data load :

```
   const getStaticProps = async() => {
      const res = await fetch('url);
      const data = await res.json();

      return {
         props: {
            dataName : data,
         }
      }
   }

```

### getStaticPaths:-

```
   const getStaticPaths = async() => {
      const res = await fetch('url);
      const data = await res.json();

      const paths = data.map(m => {
         return {
            params: {
               id: ${m.id} // it's for all id
            }
         }
      })

      return {
         paths,
         fallback: false, // the route goes shoes  404 page if data not found.
      }
   }

```

### getStaticProps:- For single id data load :

```
   const getStaticProps = async(context) => {
      const {params} = context;

      const res = await fetch(`https://localhost:5000/datas?id=${params.id}`);
      const data = await res.json();

      return {
         props: {
            dataName : data,
         }
      }
   }

```

### getServerSideProps:-

```
   const getServerSideProps = async() => {
      const res = await fetch('url);
      const data = await res.json();

      return {
         props: {
            dataName : data,
         }
      }
   }

```

### useRouter() : use Router hook give us an object with router information like : path, params, base address or more properties.

```
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

```
