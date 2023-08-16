import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser, selectCurrentUserHistory } from '../../store/user/user.selector'
import { userUpdateHistorySuccess } from '../../store/user/user.action'
export default function History() {
    const User = useSelector(selectCurrentUser)
    const History = useSelector(selectCurrentUserHistory)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(userUpdateHistorySuccess(User))
    }, [])
    console.log(History)

    return (
        <div>
            <p>History</p>
        </div>
    )
}
