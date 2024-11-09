import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/button.css'; 

function FantasyButton({ text, onClick, type = 'default', ariaLabel, seoAttributes }) {
  const buttonClass = `styled-button text-center font-bold text-xl py-2 px-4 ${type === 'cancel' || type === 'warning' ? 'red-bg' : ''}`;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      aria-label={ariaLabel}
      {...seoAttributes}
    >
      {text}
    </button>
  );
}

// PropTypes for validation
FantasyButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['default', 'cancel', 'warning']),
  ariaLabel: PropTypes.string,
  seoAttributes: PropTypes.object, // For additional attributes like data-* or role
};

export default FantasyButton;
