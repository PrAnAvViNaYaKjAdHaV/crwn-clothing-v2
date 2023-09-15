import React, { useState } from 'react';
import styled from 'styled-components';

const StarRatingWrapper = styled.div`
  display: inline-block;
`;

const Star = styled.span`
  font-size: 24px;
  cursor: pointer;
  color: ${props => (props.filled ? '#ffc107' : '#e4e5e9')};
`;

const Ratingstar = ({ initialRating, onChange, check }) => {
    const [rating, setRating] = useState(initialRating || 0);

    const handleStarClick = newRating => {
        if (check === false) return
        setRating(newRating);
        if (onChange) {
            onChange(newRating);
        }
    };

    return (
        <StarRatingWrapper>
            {[1, 2, 3, 4, 5].map(star => (
                <Star
                    key={star}
                    filled={star <= rating}
                    onClick={() => handleStarClick(star)}
                >
                    ★
                </Star>
            ))}
        </StarRatingWrapper>
    );
};

export default Ratingstar;