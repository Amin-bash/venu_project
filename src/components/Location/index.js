import React from 'react';

const Location = () => {
	return (
		<div className="location_wrapper">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91160.75811616765!2d26.02442645945492!3d44.437804244710485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucharest!5e0!3m2!1sen!2sro!4v1593970547593!5m2!1sen!2sro"
				width="100%"
				height="450px"
				frameBorder="0"
				allowFullScreen
			></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
		</div>
	);
};

export default Location;
