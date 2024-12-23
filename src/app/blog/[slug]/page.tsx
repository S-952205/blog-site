import CommentSection from "@/components/comment";
import Navbar from "@/components/navbar";
import { client } from "@/sanity/lib/client";
import { blogallpost } from "@/sanity/lib/interface";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const revalidate = 30

async function getalldata(slug:string) {
  const query = await client.fetch(`* [_type == 'blog' && slug.current == '${slug}']
{
    title,
    'currentSlug': slug.current,
    'imageUrl': image.asset->url,
    article,
}[0]`);

  return query;
}

 const  Blog = async ({ params }: { params: { slug: "string" } }) => {
 
  const data: blogallpost = await getalldata(params.slug);
  console.log(data.imageUrl);
  return(

  <div>
    <Navbar />
    <div className="max-w-4xl mx-auto px-4 mt-8">

        <h1>
            <span className="block text-center md:text-base text-primary 
            font-semibold tracking-wide uppercase text-[20px]">Welcome to the Insight Blog</span>

            <span className="block mt-2 tracking-tight text-center
             text-4xl font-bold md:leading-8 leading-10">{data.title}</span> 
        </h1>

        <Image src={data.imageUrl} alt="Main Image" width={896} height={200}
         className="mt-7 rounded-lg border block mx-auto"/>

        <div className="mt-14 mb-8 max-w-[896px] mx-auto prose prose-xl prose-red dark:prose-invert prose-li:marker:text-primary">
           <PortableText value={data.article}/>
        </div>

        <CommentSection/>

    </div>
     </div>
  )
};

export default Blog;
