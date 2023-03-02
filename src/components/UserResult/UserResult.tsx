import "./UserResult.css";
import { formatDate, formatNumber } from "../../utils/helpers";

type ResultProps = {
  avatar: string;
  bio: string;
  website: string;
  company: string;
  dateJoined: string;
  followers: number;
  following: number;
  location: string;
  name: string;
  username: string;
  repos: number;
  twitter: string;
};

const UserResult = (props: ResultProps) => {
  return (
    <section>
      <div className="top">
        <div className="profile">
          <img src={props.avatar} alt="image" />
        </div>
        <div className="info">
          <p className="name">{props.name}</p>
          <p className="username">@{props.username}</p>
          <p className="joined">{formatDate(props.dateJoined).join(" ")}</p>
        </div>
      </div>
      <div className="bio">{props.bio}</div>
      <div className="stats">
        <Stat name="Repos" count={formatNumber(props.repos)} />
        <Stat name="Followers" count={formatNumber(props.followers)} />
        <Stat name="Following" count={formatNumber(props.following)} />
      </div>
      <div className="links">
        <Link src="/icon-location-dark.svg" name={props.location} />
        <Link src="/icon-blog-dark.svg" name={props.website} />
        <Link src="/icon-twitter-dark.svg" name={props.twitter} />
        <Link src="/icon-company-dark.svg" name={props.company} />
      </div>
    </section>
  );
};

const Stat = (props: { name: string; count: string }) => {
  return (
    <div className="stat">
      <h4>{props.name}</h4>
      {props.count}
    </div>
  );
};

const Link = (props: { src: string; name: string }) => {
  return (
    <div>
      <img src={props.src} alt="image" />
      {props.name}
    </div>
  );
};

export default UserResult;
