import React from 'react';
import s from './Post.module.css';


const Posts = (props) => {
    return (

        <div className={s.item}>
            <img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi23sLA6qXlAhVgwMQBHZ-KAjAQjRx6BAgBEAQ&url=https%3A%2F%2Fhornews.com%2Ftop%2Ftop-15_primerov_o_chem_psihologam_rasskajet_vash_avatar%2F&psig=AOvVaw3QFGDIuRoYTnm9G8wijf2M&ust=1571488881469253" alt=""/>
            {props.message}
            <div>
                <span>{props.likesCount} like</span>
            </div>
        </div>
    )
}

export default Posts;