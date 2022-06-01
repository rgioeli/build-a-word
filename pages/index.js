import StartScreen from "../src/pages/home/components/StartScreen";

export default function Home() {
  return <StartScreen />;
}

export async function getServerSideProps(ctx) {
  if (ctx.req.cookies.gamertag) {
    return {
      redirect: {
        destination: `/game?gamertag=${ctx.req.cookies.gamertag}`,
      },
    };
  }
  return {
    props: {},
  };
}
