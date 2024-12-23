import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { client } from "@/sanity/lib/client";
import { blogpost } from "@/sanity/lib/interface";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30

//data ko fetch kiya sanity database say grog query say query krkay
async function getdata() {
  const query = await client.fetch(`*[_type == 'blog'] | order(_createdAt desc) {
     title,
    'currentSlug': slug.current,
     description, 
    "imageUrl": image.asset->url
   }`)

   return query;  

}

//rendering
export default async function Home() {
 
  const data: blogpost[] = await getdata();

    
  return (
    <div>
       <Navbar />
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
         {
          data.map((posts, index) => {
           return (
             <Card key={index}>
               <Image
                 src={posts.imageUrl}
                 alt="pic"
                 width={500}
                 height={500}
                 className="object-cover rounded-t-lg h-[200px]"
               />

               <CardContent className="mt-4">
                 <h3 className="text-2xl line-clamp-2 font-bold ">
                   {posts.title}
                 </h3>
                 <p className="text-[20px] line-clamp-3 mt-3 text-gray-600 dark:text-gray-300">
                   {posts.description}
                 </p>
                 
                 <Link href={`/blog/${posts.currentSlug}`}>
                   <Button className="w-full py-5 mt-5">Read More</Button>
                 </Link>
               </CardContent>
             </Card>
           );
          })
         }
      </div>
    </div>
  );
}
