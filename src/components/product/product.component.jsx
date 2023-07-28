import React, { useEffect } from 'react'
import { selectCategoriesMap, productsList } from '../../store/categories/category.selector'
import { categoriesProduct } from '../../store/categories/category.action'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
export default function Product() {
    const ParamId = parseInt(useParams().id)
    const dispatch = useDispatch()
    const map = useSelector(selectCategoriesMap)
    const products = useSelector(productsList)
    console.log(products)
    useEffect(() => {
        dispatch(categoriesProduct(map, ParamId))
    }, [ParamId, dispatch, map])
    return (

        <div>
            <p>{products.name}</p>
            <p>{products.price}</p>
            <img src={products.imageUrl} alt="" />
        </div>
    )
}
