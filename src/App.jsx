import ServerInfo from "./components/ServerInfo";
import Soon from "./components/Soon";
import settingsOneVsOne from "./static/1v1.json";
import settingsTwoVsTwo from "./static/2v2.json";
import settingsFourVsFour from "./static/4v4.json";

const flareImg = "./titleFlare.png";

function App() {
  return (
    <div className="App bg-vrising-dark w-[100vw]">
      <div className="soon-component-outside">
        <Soon />
      </div>
      <div className="server-info-component-outside mt-24 flex justify-center flex-col items-center">
        <div className="header-content">
          <h3 className="text-vrising-red uppercase text-center text-3xl">
            Servidores
          </h3>
          <div className="flex justify-center">
            <img src={flareImg} alt="V Rising Servidor A Mascara" />
          </div>
          <ServerInfo server={settingsOneVsOne} />
          <ServerInfo server={settingsTwoVsTwo} inverted={true} />
          <ServerInfo server={settingsFourVsFour} />
        </div>
      </div>
    </div>
  );
}

export default App;
