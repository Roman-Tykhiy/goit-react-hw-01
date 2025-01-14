import clsx from "clsx";
import css from "./FriendListItem.module.css";
const FriendListItem = ({ friend }) => {
    return (        
         <div className={css.listItem}>
            <img src={friend.avatar} alt={friend.name} width="96" className={ css.img} />
            <p className={css.text}>{friend.name}</p>
            <p className={clsx(css.textStatusOn, {
            [css.textStatusOf] : friend.isOnline == false 
            }) }>{friend.isOnline ? "Online" : "Ofline"}</p>  
            </div>
            )   
   
}

export default FriendListItem;