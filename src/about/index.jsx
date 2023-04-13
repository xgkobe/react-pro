/*
 * @Description: 
 * @Author: xuguang
 * @Date: 2023-04-09 23:06:47
 */
import React from "react";
import {obj} from '@/jjj';

function About () {
    return (
        <div>
            about{obj.age}
            <div onClick={() => obj.age = 66}>点击</div>
            <div onClick={() => console.log(obj)}>点击1</div>
        </div>
    )
}

export default About;