import clsx from "clsx";
import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats: {followers, views, likes}} ) => {

 
 
  return <div className={css.profileContainer}>
  <div className={css.cartContainer}>
    <img
      src={image}
        alt={name}
        className={css.avatar}
    />
    <p className={css.textName}>{name}</p>
      <p className={css.text}>{tag}</p>
      <p className={css.text}>{location}</p>
  </div>

    <ul className={css.list}>
      <li className={css.listItem}>
        <span className={css.text}>Followers</span>
        <span className={css.text}>{followers}</span>
    </li>
      <li className={css.listItemBord}>
        <span className={css.text}>Views</span>
      <span className={css.text}>{views}</span>
    </li>
      <li className={css.listItem}>
        <span className={css.text}>Likes</span>
        <span className={css.text}>{likes}</span>
    </li>
  </ul>
</div>
}
export default Profile;