/** @format */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container } from './history.style';
import { selectCurrentUser } from '../../store/user/user.selector';
import History_product from '../../components/history-product/history_product.component';
import { db } from '../../utils/firebase/firebase.utils';
import { doc } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { userUpdateHistorySuccess } from '../../store/user/user.action'
import { useNavigate } from 'react-router-dom';
export default function History() {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser);
    const [User, setUser] = useState(currentUser || null)
    useEffect(() => {
        const user = onSnapshot(doc(db, 'users', currentUser.id), (doc) => {
            const data = doc.data()
            data['id'] = currentUser.id
            setUser(data)

        })
        return () => {
            user()
            dispatch(userUpdateHistorySuccess(User))
        }
    }, [])
    return (
        <>
            {User === null ? (
                <Container>
                    <h1>You need to sing in fist</h1>
                </Container>
            ) : (
                <Container>
                    <h1>
                        {User.History.length === 0
                            ? 'You dont have any order history'
                            : 'Your order'}
                    </h1>
                    <div>
                        {User.History &&
                            User.History.map((data, i) => (
                                <div key={i}>
                                    <h3>Order date: {data.date}</h3>
                                    {data.product.map((product) => (
                                        // eslint-disable-next-line react/jsx-pascal-case
                                        <History_product
                                            product={product}
                                            date={data.date}
                                        />
                                    ))}
                                </div>
                            ))}
                    </div>
                </Container>
            )}
        </>
    );
}
