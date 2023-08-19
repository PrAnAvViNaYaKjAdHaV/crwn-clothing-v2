/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './history.style'
import {
    selectCurrentUser,
} from '../../store/user/user.selector';
import History_product from '../../components/history-product/history_product.component';
export default function History() {
    const User = useSelector(selectCurrentUser);
    return (
        <>
            {User === null ? <Container><h1>You need to sing in fist</h1></Container> : <Container>
                <h1>
                    {User.History === undefined ? 'You dont have any order history' : 'Your order'}
                </h1>
                {User.History && User.History.map((data) => {
                    return (
                        <div key={data.date}>
                            <h3>Order date: {data.date}</h3>
                            {data.product.map((product) =>
                                // eslint-disable-next-line react/jsx-pascal-case
                                <History_product
                                    product={product}
                                    date={data.date}
                                />
                            )}
                        </div>
                    );
                })}
            </Container>}
        </>

    );
}
