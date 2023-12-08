import { useEffect } from "react";
import useCustomNavigate from "../components/hooks/useCustomNavigate";
const Home = () => {
  const { goTo } = useCustomNavigate();
  useEffect(() => {
    goTo("/short-qr");
  }, []);
  return <div></div>
};
export default Home;
