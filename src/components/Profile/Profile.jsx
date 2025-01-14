import styles from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img className={styles.avatar} src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.text}>Followers</span>
          <span className={styles.count}>{followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.text}>Views</span>
          <span className={styles.count}>{views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.text}>Likes</span>
          <span className={styles.count}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
