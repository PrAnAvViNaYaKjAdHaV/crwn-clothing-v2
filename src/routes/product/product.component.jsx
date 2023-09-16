/** @format */

import React, { useEffect, useState } from 'react';
import {
    selectCategoriesMap,
    productsList,
} from '../../store/categories/category.selector';
import { categoriesProduct } from '../../store/categories/category.action';
import { selectReview } from '../../store/categories/category.selector';
import { selectCartItems } from '../../store/cart/cart.selector';
import { selectCategoriesIsLoading } from '../../store/categories/category.selector';
import { fetchReviewStart } from '../../store/categories/category.action';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Spinner from '../../components/spinner/spinner.component';
import Ratingstar from '../../components/rating-star/rating-star.component';
import Button, {
    BUTTON_TYPE_CLASSES,
} from '../../components/button/button.component';
import { addItemToCart } from '../../store/cart/cart.action';
import { Conatainer, ProductInfo, Review } from './product.style';
export default function Product() {
    const ParamId = parseInt(useParams().id);
    const dispatch = useDispatch();
    const map = useSelector(selectCategoriesMap);
    const cartItems = useSelector(selectCartItems);
    const Products = useSelector(productsList);
    const review = useSelector(selectReview);
    const isLoading = useSelector(selectCategoriesIsLoading);
    useEffect(() => {
        dispatch(categoriesProduct(map, ParamId));
    }, [ParamId, dispatch, map]);
    useEffect(() => {
        if (Products === undefined) return
        dispatch(fetchReviewStart(Products.name));
    }, [dispatch, Products]);
    const addProductToCart = () => dispatch(addItemToCart(cartItems, Products));
    return (
        <Conatainer>
            {Products && <ProductInfo>
                <div className="firstphase">
                    <h1>{Products.name}</h1>
                    <img
                        src={Products.imageUrl}
                        alt={Products.name}
                    />
                </div>
                <div className="secondphase">
                    <p>
                        Discription: Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Saepe laboriosam exercitationem tempore voluptas corrupti enim
                        ad eius libero perspiciatis laudantium?
                    </p>
                    <p>reviews {review.length}</p>
                    <Button
                        buttonType={BUTTON_TYPE_CLASSES.inverted}
                        onClick={addProductToCart}>
                        Add to card
                    </Button>
                </div>
            </ProductInfo>}

            {isLoading ? (
                <Spinner />
            ) : (
                <Review>
                    {review &&
                        review.map((data, i) => (
                            <div key={i}>
                                <div className='rating'>
                                    <p>{data.userName}</p>
                                    <Ratingstar
                                        initialRating={data.rating}
                                        check={false}
                                    />
                                </div>
                                <p>Review:-{data.review}</p>
                            </div>
                        ))}
                </Review>
            )}
        </Conatainer>
    );
}
