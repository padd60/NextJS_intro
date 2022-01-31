import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  // console.log(router);

  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      {/* styled jsx */}
      <style jsx>{`
        a {
          text-decoration: none;
        }
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
}
/**
 * css module 사용하기  = 장점은 모듈로 사용하는 것으로 객체타입으로 스타일을 적어주기 때문에 컴포넌트별 클래스 이름이 겹쳐도 상관없다
 * import NavStyle from "../css/nav.module.css";
 * 
    <nav>
      <Link href="/">
        <a
          className={`${NavStyle.link} ${
            router.pathname === "/" ? NavStyle.active : ""
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className={[
            NavStyle.link,
            router.pathname === "/about" ? NavStyle.active : "",
          ].join(" ")}
        >
          About
        </a>
      </Link>
    </nav>
 */
