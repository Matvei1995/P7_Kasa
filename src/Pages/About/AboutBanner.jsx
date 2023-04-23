import BannerAbout from '../../components/assets/background_about.png';
import './AboutsBanner.scss';
function AboutBanner() {
  return (
    <div className="AboutBanner">
      <div className="boutBanner_img">
        <img src={BannerAbout} alt="Bannière de A propos" />
      </div>
      <div className="AboutBanner_opacity"></div>
    </div>
  );
}
export default AboutBanner;
