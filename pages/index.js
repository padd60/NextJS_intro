import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home({ results }) {
  // const [movies, setMovies] = useState();

  // useEffect(() => {
  //   (async () => {
  //     const { results } = await (await fetch("/api/movies")).json();
  //     setMovies(results);
  //   })();
  // }, []);

  // console.log(movies);

  const router = useRouter();

  // const onClick = (id) => {
  //   router.push(`/movies/${id}`);
  // };

  // const onClick = (id, title) => {
  //   router.push(
  //     {
  //       pathname: `/movies/${id}`,
  //       query: {
  //         title: title,
  //       },
  //     },
  //     `/movies/${id}`
  //   );
  // };

  // <Link
  // href={{
  //   pathname: `/movies/${item.id}`,
  //   query: {
  //     title: item.original_title,
  //   },
  // }}
  // as={`/movies/${item.id}`}
  // ></Link>

  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <div className="container">
      <Seo title="Home" />
      {/* {!movies && <h4>Loading...</h4>} */}
      {results?.map((item) => (
        <div className="movie" key={item.id}>
          <img
            onClick={() => {
              onClick(item.id, item.original_title);
            }}
            src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
            alt="img"
          />
          <h4>
            <Link href={`/movies/${item.original_title}/${item.id}`}>
              <a>{item.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// serverside rendering
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();

  return {
    props: {
      results,
    },
  };
}
