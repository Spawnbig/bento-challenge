import {
  CreatePostCard,
  FasterAudienceCard,
  GrowFollowersCard,
  MaintainConsistentCard,
  ManageMultipleAccountsCard,
  ScheduleToSocialMediaCard,
  SocialMediaCard,
  WriteUsingAICard,
} from "./components";
import "./index.css";

function App() {
  return (
    <div className="main-container">
      <div className="first-row">
        <CreatePostCard />
        <WriteUsingAICard />
      </div>
      <div className="second-row">
        <div className="social-container">
          <SocialMediaCard />
        </div>
        <div className="schedule-container">
          <ScheduleToSocialMediaCard />
        </div>
        <div className="manage-container">
          <ManageMultipleAccountsCard />
        </div>
        <div className="maintain-container">
          <MaintainConsistentCard />
        </div>
        <div className="faster-audience-container">
          <FasterAudienceCard />
        </div>
        <div className="grow-followers-container">
          <GrowFollowersCard />
        </div>
      </div>
    </div>
  );
}

export default App;
