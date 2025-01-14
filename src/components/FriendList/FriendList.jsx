import clsx from "clsx";
import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";
const FriendList = ({friends}) => {
    return (

        <ul className={css.list}> 
            {friends.map(item => (
                <li key={item.id}>
                    <FriendListItem friend={item} />
                </li>
            ))}
       </ul>
   )
   
}

export default FriendList;