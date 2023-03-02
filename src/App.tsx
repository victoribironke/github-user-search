import { useEffect, useState } from "react";
import { check } from "./utils/helpers";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import UserResult from "./components/UserResult/UserResult";

type UserProps = {
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

const App = () => {
  const [userData, setUserData] = useState<UserProps>();

  const search = (username: string): void => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        const newData = {
          avatar: data.avatar_url,
          bio: data.bio,
          website: data.blog,
          company: data.company,
          dateJoined: data.created_at,
          followers: data.followers,
          following: data.following,
          location: data.location,
          name: data.name,
          username: data.login,
          repos: data.public_repos,
          twitter: data.twitter_username,
        };
        setUserData(newData);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => search("victoribironke"), []);

  return (
    <>
      <Header />
      <Search search={search} />
      {userData && (
        <UserResult
          avatar={userData.avatar}
          bio={userData.bio}
          company={check(userData.company)}
          dateJoined={userData.dateJoined}
          followers={userData.followers}
          following={userData.following}
          location={check(userData.location)}
          name={userData.name}
          repos={userData.repos}
          twitter={check(userData.twitter)}
          username={userData.username}
          website={check(userData.website)}
        />
      )}
    </>
  );
};

export default App;
