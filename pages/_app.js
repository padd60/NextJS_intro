import NavBar from "../components/NavBar";
import "../styles/globals.css";

// 공통작업을 할 수 있게 만들어주는 전역(청사진, global) 컴포넌트임 이름은 무조건 _app.js
export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
