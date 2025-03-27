import { Header } from "@common/components";
import { useHome } from "@pages/home";

export function Home() {
  const { data, isFetching, onClickTitle } = useHome();

  return isFetching ? (
    <div> Loading...</div>
  ) : (
    <>
      <Header />
    </>
  );
}
