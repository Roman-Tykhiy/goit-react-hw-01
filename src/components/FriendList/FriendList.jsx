import clsx from "clsx";
import css from "./FriendList.module.css";
const FriendList = ({friends}) => {
    return (

        <ul className={css.list}>
            
            {friends.map(({avatar, name, isOnline, id}) => (
                    <li key={id}>
                     <div className={css.listItem}>
                        <img src={avatar} alt={name} width="96" className={ css.img} />
                <p className={css.text}>{name}</p>
                        <p className={clsx(css.textStatusOn, {
                           [css.textStatusOf] : isOnline == false 
                        }) }>{isOnline ? "Online" : "Ofline"}</p>
              
                    </div>
                    </li>
                   
                ))}
                
                
                
            
       </ul>
   )
   
}

export default FriendList;