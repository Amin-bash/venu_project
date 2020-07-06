import React from 'react';
import { Drawer, List, ListItem, withStyles } from '@material-ui/core';
import { scroller } from 'react-scroll';

const SideDrawer = (props) => {

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -150
    });
    props.onClose(false)
  }
	return (
		<Drawer anchor="right" open={props.open} onClose={() => props.onClose(false)}>
			<List component="nav">
				<ListItem button onClick={() => scrollToElement('featured')}>Event starts in</ListItem>
				<ListItem button onClick={() => scrollToElement('venuenfo')}>Venue INFO</ListItem>
				<ListItem button onClick={() => scrollToElement('highlights')}>Highlights</ListItem>
				<ListItem button onClick={() => scrollToElement('pricing')}>Pricing</ListItem>
				<ListItem button onClick={() => scrollToElement('location')}>Locations</ListItem>
			</List>
		</Drawer>
	);
};

export default SideDrawer;
