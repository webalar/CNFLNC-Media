import Link from "next/link"
import Image from "next/image"

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {cache: "no-store"});

  if(!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Projects = async () => {

  const data = await getData();

  return (
    <div className="text-white">
      {
        data.map((item) => (
          <Link href={`/projects/${item._id}`} key={item._id}>
            <div className="name text-5xl">{item.title}</div>
            <div className="name text-2xl">{item.category}</div>
            <Image src={item.featuredImg} alt={item.title} height={300} width={300}/>
            <div className="desc text-lg">{item.desc}</div>
            <video src={item.featuredVideo} controls className="aspect-video"></video>

          </Link>
        ))
      }
    </div>
  )
}

export default Projects