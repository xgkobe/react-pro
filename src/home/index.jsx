/*
 * @Description: 
 * @Author: xuguang
 * @Date: 2023-04-05 23:24:58
 */
import React from 'react';
import {Button} from 'antd';
import store from '../../store';
import {sendAction} from '@/action';
import {obj} from '@/jjj';

function Home() {
    const onChangeStore = () => {
        console.log(obj);
        // store.dispath()
    }
    return (
        <div>
            HOME
            <Button onClick={onChangeStore}>点击</Button>
        </div>
    )
}

export default Home;