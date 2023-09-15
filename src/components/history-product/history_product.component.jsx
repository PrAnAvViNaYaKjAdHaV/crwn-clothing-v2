/** @format */

import React, { useState } from 'react';
import { Container, Product, Rating } from './history_product.style';
import Ratingstar from '../rating-star/rating-star.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { selectCurrentUser } from '../../store/user/user.selector';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userUpdateReview } from '../../store/user/user.action';
import { checkUserSession } from '../../store/user/user.action';
export default function History_product({ product, date }) {
    const { id, imageUrl, price, quantity, name } = product;
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const User = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    const handleButton = () => {
        dispatch(userUpdateReview(User, rating, review, date, id, name));
        dispatch(userUpdateReview())
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    return (
        <Container id={id}>
            <Product>
                <img
                    src={imageUrl}
                    alt={name}
                />
                <div>
                    <p>Name:{name}</p>
                    <p>Price:{price}</p>
                    <p>Quantitiy:{quantity}</p>
                </div>
            </Product>
            <div>
                <Rating>
                    <p>Rating</p>
                    {product.rating ? <Ratingstar
                        initialRating={product.rating}
                        check={false}
                    /> : <Ratingstar
                        initialRating={rating}
                        onChange={(data) => setRating(data)}
                    />}

                </Rating>
                <div>
                    <p>Write a review:</p>
                    {product.review ? <textarea
                        value={product.review}
                        rows="4"
                        cols="50"
                    /> : <textarea
                        value={review}
                        onChange={handleReviewChange}
                        rows="4"
                        cols="50"
                    />}

                </div>
            </div>
            <div>
                {product.review || product.rating ? <Button
                    buttonType={BUTTON_TYPE_CLASSES.base}
                    type="button">
                    Already rated
                </Button> : <Button
                    buttonType={BUTTON_TYPE_CLASSES.base}
                    type="button"
                    onClick={handleButton}>
                    Submit
                </Button>}

            </div>
        </Container>
    );
}
