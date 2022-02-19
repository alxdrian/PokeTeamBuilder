import { Page, PageContent, PageSection } from "../components/UI/Container";
import Header from "../components/UI/Header";
import { useSelector } from "react-redux";
import { PokeTeamList } from "../components/PokeTeamList";

function Home () {
  const teams = useSelector(state => state.team.teams);

  return (
    <Page>
      <Header />
      <PageContent>
        <PageSection>
          <PokeTeamList teams={teams} />
        </PageSection>
      </PageContent>
    </Page>
  )
}

export default Home;